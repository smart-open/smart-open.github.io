# Project Rules

## 1. Protected Directory

`p` 目录（`d:\ai_work\smart-open.github.io\p`）包含已部署的项目和服务。本 Agent 在常规开发任务中**不应主动修改** `p` 目录下的文件。

**例外**：`p` 目录可能被外部进程或用户直接修改（例如在线服务的运行时数据更新、数据文件分片写入等）。此类外部产生的变更**需要正常提交到 git**，不得忽略。处理方式：
- 当 `git status` 显示 `p/` 下有修改时，应将其纳入提交
- 提交信息应注明是「外部数据更新」或具体来源
- 不要主动 revert 或修改 `p` 目录下的业务逻辑代码

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

## 7. 文章标题命名规范

文章标题是吸引读者的第一要素，必须醒目、精炼、涵盖主题。所有新增文章标题须遵循以下规则：

### 7.1 命名原则

1. **长度控制**：12-20 字为宜，绝对不超过 25 字
2. **禁止格式**：不使用「主标题：副标题」冒号分隔格式（如「AI副业变现地图：五大方向实战指南」），采用陈述句或疑问句
3. **必须醒目**：通过以下手法增强冲击力：
   - **数字冲击**：如「5条变现路径」「30天速成」（阿拉伯数字比中文数字更醒目）
   - **利益承诺**：如「月入过万」「也能赢」
   - **反常识冲突**：如「AI不会淘汰你，会用AI的人才会」
   - **动作感**：如「走出屏幕」「接管真实世界」
   - **画面感**：让读者脑中能浮现具体场景
4. **涵盖主题**：标题必须能反映文章核心内容，不做标题党

### 7.2 命名禁忌

- 禁止过长（>25 字）或过于学术化
- 禁止使用冒号分隔的主副标题格式
- 禁止空泛无物的标题（如「关于AI的思考」）
- 禁止纯标题党（标题与内容严重不符）

### 7.3 标题同步点

每次新增或修改文章标题时，必须同步更新以下 3 处：
1. 文章详情页 HTML 的 `<title>` 标签和 `<h1 class="article-title">` 标签
2. `articles/articles-data.js` 中对应条目的 `title` 字段
3. `index.html` 首页卡片的 `<h3 class="article-card-title">` 标签

### 7.4 标题示例

好标题参考：
- `AI不会淘汰你，会用AI的人才会`（反常识冲突，13字）
- `一个人靠AI月入过万的5条变现路径`（数字+利益承诺，15字）
- `AI正走出屏幕，开始接管真实世界`（动作感+冲击力，15字）

差标题反例：
- `AI跟随者战略：不造AI，也能赢`（冒号分隔格式）
- `用AI做副业赚钱：2026年普通人可落地的实战指南`（过长，25字+）
- `关于物理AI的技术架构解析`（空泛，无冲击力）