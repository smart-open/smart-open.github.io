# Project Rules

## 1. Protected Directory

**Do NOT modify** any files in the `p` directory (`d:\ai_work\smart-open.github.io\p`). This directory contains existing projects and services that should remain untouched.

## 2. Mobile Responsive Design

All new development must be fully responsive, supporting:
- Mobile phones (≤ 768px)
- Tablets (769px - 1024px)
- Desktop (> 1024px)

**Existing breakpoint reference**: The project uses `768px` as the primary mobile breakpoint in CSS media queries. New responsive styles should maintain consistency with this approach.

## 3. Color Palette Constraints

All new development must adhere to the following color scheme extracted from the existing project:

| Variable | Hex Value | Purpose |
|----------|-----------|---------|
| `--bg-primary` | `#0a0a0f` | Main background (dark) |
| `--bg-secondary` | `#12121a` | Secondary background (slightly lighter dark) |
| `--text-primary` | `#e8e8ec` | Primary text (light gray) |
| `--text-secondary` | `#7a7a85` | Secondary text (medium gray) |
| `--accent` | `#00f0ff` | Accent color (cyan/neon) |
| `--divider` | `#2a2a35` | Divider/border color |

**Font Families**:
- Body: `Inter` (sans-serif)
- Monospace/code: `JetBrains Mono`

## 4. 首页文章列表同步

首页 `index.html` 的文章卡片是**静态HTML**（非JS动态渲染），每次新增文章时必须手动维护：

1. 在 `index.html` 的 `.articles-grid` 容器**顶部**插入新的文章卡片
2. 同时**移除最底部**的一张旧卡片，始终保持 `.articles-grid` 内**只有且仅有3张**文章卡片
3. 保持按日期倒序排列（最新在前）
4. 新增文章后，同步更新 `articles/articles-data.js` 在数组**顶部**添加新条目

## 5. 禁止硬编码域名

所有内部链接必须使用**相对路径**（如 `./p/s`、`../articles/index.html`），禁止硬编码域名（如 `https://smart-open.github.io/...`）。域名变更时代码无需修改即可正常访问。

## 6. 文章详情页排版规范

所有文章详情页（`articles/detail/article-*.html`）必须遵循以下排版要求：

### 6.1 HTML 结构

必须使用侧边栏+正文的双栏布局（移动端自动折叠为单栏）：

```html
<div class="article-container">
  <aside class="article-sidebar">
    <div class="sidebar-section">
      <h3 class="sidebar-title">目录</h3>
      <nav class="article-toc" id="articleToc"></nav>
    </div>
  </aside>
  <article class="article-content">
    <div class="markdown-body">
      <!-- 文章内容 -->
    </div>
    <nav class="article-nav" id="articleNav"></nav>
  </article>
</div>
```

- **正文容器必须使用 `markdown-body` 类**（不是 `article-body`），以确保 h2/h3/p/ul 等元素的样式正确生效
- **目录容器 `id="articleToc"`** 由 `article.js` 自动填充，无需手动写入目录项
- **所有 h2 标题必须有 `id` 属性**（如 `id="section-1"`），用于目录锚点跳转

### 6.2 配图规范

- **内联配图**使用 `<figure class="article-inline-image">` 包裹，包含 `<img>` 和 `<figcaption>`
- 配图宽度必须与正文内容区**等宽**（`width: 100%`），禁止设置 `max-width` 限制宽度
- 文章开头可放置一张全文配图（hero image 的内联版本）

### 6.3 标题分割线

- 所有 `h2` 大标题自动带底部分割线（`.markdown-body h2` 的 `border-bottom` 样式）
- 这是通过使用 `markdown-body` 类自动生效的，无需额外代码

### 6.4 目录大纲

- 每篇文章必须包含侧边栏目录（TOC）
- 目录由 `article.js` 的 `generateToc()` 函数自动生成，从 `article h2, article h3` 中提取标题
- 桌面端（>1024px）显示为左侧固定侧边栏，移动端折叠为顶部水平滚动条