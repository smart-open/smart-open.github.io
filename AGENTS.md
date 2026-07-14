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

每次新增或更新文章后，必须同步更新首页 `index.html` 的文章列表，保持展示**最新的三篇文章**（按日期倒序）。