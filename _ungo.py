import re, glob, json, os

for fp in sorted(glob.glob('articles/detail/article-*.html')):
    c = open(fp, encoding='utf-8').read()
    before = c

    # 1) 删独立 FAQPage JSON-LD <script> 块
    c = re.sub(r'<script type="application/ld\+json">(?:(?!</script>).)*?"@type":\s*"FAQPage".*?</script>', '', c, flags=re.S)

    # 1b) 若 FAQPage 在原 @graph 内，去掉对应 node
    def fix_graph(m):
        try:
            o = json.loads(m.group(1).strip())
        except Exception:
            return m.group(0)
        if not isinstance(o, dict) or '@graph' not in o:
            return m.group(0)
        ng = [n for n in o.get('@graph', []) if not (isinstance(n, dict) and n.get('@type') == 'FAQPage')]
        if len(ng) == len(o.get('@graph', [])):
            return m.group(0)
        o['@graph'] = ng
        return '<script type="application/ld+json">\n' + json.dumps(o, ensure_ascii=False, indent=2) + '\n</script>'
    c = re.sub(r'<script type="application/ld\+json">(.*?)</script>', fix_graph, c, flags=re.S)

    # 2) 删「常见问题」正文章节（优先含参考资料variant，再删 navbar 前 variant）
    c = re.sub(r'<h2 id="faq">.*?<h3>\u53c2\u8003\u8d44\u6599</h3>', '<h3>\u53c2\u8003\u8d44\u6599</h3>', c, flags=re.S)
    c = re.sub(r'<h2 id="faq">[\u4e00-\u9fff]*</h2>.*?(?=<nav class="article-nav" id="articleNav">)', '', c, flags=re.S)

    # 3) 删「太长不看」TL 块
    c = re.sub(r'\s*<div class="callout tldr(?: geo-hidden)?">.*?</div>\s*', '', c, flags=re.S)

    # 清理可能产生的连续空行
    c = re.sub(r'\n{3,}', '\n\n', c)

    if c != before:
        open(fp, 'w', encoding='utf-8').write(c)
        print('changed:', os.path.basename(fp))
    else:
        print('   (no change):', os.path.basename(fp))

# 校验
bad = 0
for fp in sorted(glob.glob('articles/detail/article-*.html')):
    c = open(fp, encoding='utf-8').read()
    issues = []
    if '\u592a\u957f\u4e0d\u770b' in c: issues.append('TL')
    if 'id="faq"' in c: issues.append('FAQ')
    if 'FAQPage' in c: issues.append('FAQJSON')
    if issues:
        bad += 1
        print('LEAVE:', os.path.basename(fp), ','.join(issues))
print('pages with leftovers:', bad)