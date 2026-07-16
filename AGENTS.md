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