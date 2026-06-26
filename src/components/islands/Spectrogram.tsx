import { useEffect, useRef, useState } from "react";
import type WaveSurfer from "wavesurfer.js";

type Props = {
  /** 初期表示するサンプル音声のURL（public/ からの絶対パス）。 */
  src?: string;
};

/**
 * WaveSurfer.js による波形＋スペクトログラム表示の island。
 *
 * - 重い依存（wavesurfer.js とプラグイン）は island 内に閉じ込め、
 *   さらに SSR で window に触れないよう useEffect 内で動的 import する。
 * - 既定でサンプル音声を読み込み、ユーザは手元の音声ファイルに差し替え可能。
 */
export default function Spectrogram({ src = "/audio/diphthong-eye.mp3" }: Props) {
  const waveRef = useRef<HTMLDivElement>(null);
  const specRef = useRef<HTMLDivElement>(null);
  const wsRef = useRef<WaveSurfer | null>(null);
  const objectUrlRef = useRef<string | null>(null);

  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [label, setLabel] = useState("サンプル：二重母音 /aɪ/（合成音声）");

  // WaveSurfer インスタンスの生成は一度だけ。音源の差し替えは load() で行う。
  useEffect(() => {
    let disposed = false;

    (async () => {
      try {
        const [{ default: WaveSurferCtor }, { default: SpectrogramPlugin }] =
          await Promise.all([
            import("wavesurfer.js"),
            import("wavesurfer.js/dist/plugins/spectrogram.js"),
          ]);

        if (disposed || !waveRef.current || !specRef.current) return;

        const ws = WaveSurferCtor.create({
          container: waveRef.current,
          height: 96,
          waveColor: "#0e7c6b",
          progressColor: "#0a5d50",
          cursorColor: "#d98a2b",
          barWidth: 2,
          barGap: 1,
          barRadius: 2,
        });

        ws.registerPlugin(
          SpectrogramPlugin.create({
            container: specRef.current,
            labels: true,
            height: 192,
            // 16kHz サンプルなので 8kHz まで表示すれば十分。
            frequencyMax: 8000,
            scale: "linear",
          }),
        );

        ws.on("ready", () => !disposed && setReady(true));
        ws.on("play", () => !disposed && setPlaying(true));
        ws.on("pause", () => !disposed && setPlaying(false));
        ws.on("finish", () => !disposed && setPlaying(false));
        ws.on("error", (e: Error) => {
          if (!disposed) setError("音声の読み込みに失敗しました。");
          console.error(e);
        });

        wsRef.current = ws;
        ws.load(src);
      } catch (e) {
        if (!disposed) setError("ビューアの初期化に失敗しました。");
        console.error(e);
      }
    })();

    return () => {
      disposed = true;
      wsRef.current?.destroy();
      wsRef.current = null;
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    };
    // src は初期音源のみ。差し替えは onFile が担う。
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function togglePlay() {
    wsRef.current?.playPause();
  }

  function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !wsRef.current) return;
    setReady(false);
    setError(null);
    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    const url = URL.createObjectURL(file);
    objectUrlRef.current = url;
    setLabel(`ファイル：${file.name}`);
    wsRef.current.load(url);
  }

  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={togglePlay}
          disabled={!ready}
          aria-label={playing ? "停止" : "再生"}
          className="inline-flex items-center gap-2 rounded-md bg-teal px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {playing ? "❚❚ 停止" : "▶ 再生"}
        </button>

        <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-line bg-white px-4 py-2 text-sm text-ink transition hover:border-teal focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-teal-700">
          音声ファイルを開く
          <input
            type="file"
            accept="audio/*"
            onChange={onFile}
            className="sr-only"
          />
        </label>

        <span className="text-xs text-muted">{label}</span>
      </div>

      <div
        ref={waveRef}
        className="rounded-md border border-line bg-white"
        aria-label="波形"
        role="img"
      />
      <div
        ref={specRef}
        className="overflow-hidden rounded-md border border-line bg-white"
        aria-label="スペクトログラム（横軸=時間、縦軸=周波数）"
        role="img"
      />

      {!ready && !error && (
        <p className="text-xs text-muted" aria-live="polite">
          読み込み中…
        </p>
      )}
      {error && (
        <p className="text-xs text-amber" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
