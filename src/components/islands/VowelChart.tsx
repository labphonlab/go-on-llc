import { useState } from "react";

type Vowel = {
  sym: string;
  x: number;
  y: number;
  desc: string;
  example: string;
};

// Positions are laid out on a standard IPA vowel trapezoid.
// x: front (left) -> back (right); y: close (top) -> open (bottom).
const VOWELS: Vowel[] = [
  { sym: "i", x: 40, y: 30, desc: "前舌・狭・非円唇", example: "英 see /siː/" },
  { sym: "e", x: 63, y: 103, desc: "前舌・半狭・非円唇", example: "日 「え」に近い" },
  { sym: "ɛ", x: 87, y: 177, desc: "前舌・半広・非円唇", example: "英 bed /bɛd/" },
  { sym: "a", x: 110, y: 250, desc: "前舌・広・非円唇", example: "仏 patte /pat/" },
  { sym: "ɑ", x: 250, y: 250, desc: "後舌・広・非円唇", example: "英 father /ˈfɑːðə/" },
  { sym: "ɔ", x: 273, y: 177, desc: "後舌・半広・円唇", example: "英 thought /θɔːt/" },
  { sym: "o", x: 297, y: 103, desc: "後舌・半狭・円唇", example: "日 「お」に近い" },
  { sym: "u", x: 320, y: 30, desc: "後舌・狭・円唇", example: "英 boot /buːt/" },
  { sym: "ə", x: 180, y: 140, desc: "中舌・中央（曖昧母音 schwa）", example: "英 about /əˈbaʊt/" },
];

export default function VowelChart() {
  const [active, setActive] = useState<Vowel>(VOWELS[0]);

  return (
    <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_220px] sm:items-center">
      <svg
        viewBox="0 0 360 290"
        role="img"
        aria-label="IPA母音四角形（クリックで各母音の説明を表示）"
        className="w-full max-w-md"
      >
        {/* trapezoid outline */}
        <polygon
          points="40,30 320,30 250,250 110,250"
          fill="none"
          stroke="var(--color-line)"
          strokeWidth="1.5"
        />
        {/* mid height guides */}
        <line x1="63" y1="103" x2="297" y2="103" stroke="var(--color-line)" strokeWidth="1" />
        <line x1="87" y1="177" x2="273" y2="177" stroke="var(--color-line)" strokeWidth="1" />

        {VOWELS.map((v) => {
          const on = v.sym === active.sym;
          return (
            <g
              key={v.sym}
              tabIndex={0}
              role="button"
              aria-pressed={on}
              aria-label={`${v.sym}: ${v.desc}`}
              onClick={() => setActive(v)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive(v);
                }
              }}
              style={{ cursor: "pointer" }}
            >
              <circle
                cx={v.x}
                cy={v.y}
                r={on ? 16 : 13}
                fill={on ? "var(--color-teal)" : "white"}
                stroke={on ? "var(--color-teal-700)" : "var(--color-muted)"}
                strokeWidth="1.5"
              />
              <text
                x={v.x}
                y={v.y + 6}
                textAnchor="middle"
                fontSize="17"
                fontFamily="var(--font-ipa)"
                fill={on ? "white" : "var(--color-ink)"}
              >
                {v.sym}
              </text>
            </g>
          );
        })}

        {/* axis labels */}
        <text x="40" y="20" fontSize="10" fill="var(--color-muted)">前舌</text>
        <text x="300" y="20" fontSize="10" fill="var(--color-muted)">後舌</text>
        <text x="6" y="34" fontSize="10" fill="var(--color-muted)">狭</text>
        <text x="6" y="252" fontSize="10" fill="var(--color-muted)">広</text>
      </svg>

      <aside className="rounded-lg border border-line bg-white p-4">
        <div className="ipa text-4xl leading-none text-teal-700">{active.sym}</div>
        <p className="mt-3 text-sm text-ink">{active.desc}</p>
        <p className="mt-1 text-xs text-muted">{active.example}</p>
      </aside>
    </div>
  );
}
