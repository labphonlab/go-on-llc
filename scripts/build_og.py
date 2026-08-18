#!/usr/bin/env python3
"""Generate public/og.png — the social-card image.

Rerun after changing the wordmark or palette:
    python3 scripts/build_og.py

Uses macOS system fonts (Hiragino Mincho for the wordmark, Charis SIL for the
IPA transcription). Palette mirrors the @theme tokens in src/styles/global.css.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
PAPER, INK, MUTED, LINE = "#fbfbf8", "#16181d", "#6a6e76", "#e6e5df"

MINCHO = "/System/Library/Fonts/ヒラギノ明朝 ProN.ttc"
GOTHIC = "/System/Library/Fonts/ヒラギノ角ゴシック W3.ttc"
IPA = str(Path.home() / "Library/Fonts/CharisSIL-Regular.ttf")

wordmark = ImageFont.truetype(MINCHO, 200)
ipa = ImageFont.truetype(IPA, 44)
tagline = ImageFont.truetype(MINCHO, 46)
label = ImageFont.truetype(GOTHIC, 28)

img = Image.new("RGB", (W, H), PAPER)
d = ImageDraw.Draw(img)

# Hairline frame, echoing the site's border-line rules.
d.rectangle([48, 48, W - 49, H - 49], outline=LINE, width=2)

x = 104
d.text((x, 96), "GO-ON LLC", font=label, fill=MUTED)
d.text((x, 150), "語音", font=wordmark, fill=INK)
d.text((x + 6, 382), "speech sound  ·  /ɡo.oɴ/", font=ipa, fill=MUTED)
d.line([(x, 448), (W - 104, 448)], fill=LINE, width=2)
d.text((x, 486), "音声・言語・教育を、研究と実践でつなぐ。", font=tagline, fill=INK)

out = Path(__file__).resolve().parent.parent / "public" / "og.png"
img.save(out, optimize=True)
print(f"wrote {out} ({out.stat().st_size:,} bytes)")
