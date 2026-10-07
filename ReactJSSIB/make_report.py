"""Buat laporan PDF: python3 make_report.py <link-github>"""
import sys, base64
from playwright.sync_api import sync_playwright
url = sys.argv[1] if len(sys.argv) > 1 else "https://github.com/USERNAME/REPO"
def img(n): return base64.b64encode(open(f'shots/{n}.png','rb').read()).decode()
pages = [('home','Halaman Home'),('team','Halaman Team'),('contact','Halaman Contact')]
body = ''.join(f'<section class="pg"><h2>{i+1}. {t}</h2><img src="data:image/png;base64,{img(n)}"></section>' for i,(n,t) in enumerate(pages))
html = f'''<html><head><meta charset="utf-8"><style>
body{{font-family:Helvetica,Arial,sans-serif;margin:0;color:#222}}
.cover{{height:250mm;display:flex;flex-direction:column;justify-content:center;padding:0 60px}}
h1{{font-size:34px;margin:0 0 8px}} .sub{{color:#555;font-size:16px;margin-bottom:30px}}
.box{{border-left:4px solid #4f46e5;padding:10px 16px;background:#f3f4ff;font-size:15px;line-height:1.7}}
.pg{{padding:0 40px;page-break-before:always}} .pg h2{{font-size:20px;margin:0 0 14px}}
.pg img{{width:100%;border:1px solid #ddd;max-height:250mm;object-fit:contain;object-position:top}}
</style></head><body>
<div class="cover"><h1>Laporan Tugas Project React JS</h1><div class="sub">Website Worthbook: Home, Team, dan Contact</div>
<div class="box"><b>Link GitHub:</b><br><a href="{url}">{url}</a><br><br><b>Teknologi:</b> React JS (Vite), React Router, Bootstrap &amp; React-Bootstrap</div></div>
{body}</body></html>'''
with sync_playwright() as p:
    b = p.chromium.launch(executable_path='/opt/pw-browsers/chromium'); pg = b.new_page()
    pg.set_content(html); pg.pdf(path='Laporan-Worthbook.pdf', format='A4', print_background=True, margin={'top':'10mm','bottom':'10mm','left':'0','right':'0'}); b.close()
