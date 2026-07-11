/* 文章索引数据 - 供文章列表页和首页使用 */
const ARTICLES_DATA = [
  {
    id: 'article-1',
    title: 'AI Agent 开发实践指南',
    excerpt: '深入探讨 AI Agent 的核心概念、技术架构和开发流程，帮助开发者快速上手构建智能代理应用。',
    tags: ['AI', 'Agent', '开发'],
    date: '2026-07-10',
    detailUrl: 'detail/article-1.html'
  },
  {
    id: 'article-2',
    title: 'MCP 服务设计与实现',
    excerpt: '深入探讨 MCP（Model Context Protocol）服务的设计理念和实现细节，帮助开发者理解和构建高效的 AI 工具集成服务。',
    tags: ['MCP', 'API', '架构'],
    date: '2026-07-09',
    detailUrl: 'detail/article-2.html'
  },
  {
    id: 'article-3',
    title: 'AI Agent 开发框架对比与实践',
    excerpt: '对比分析 Dify、AgentScope 等主流 AI Agent 开发框架的优劣势，结合实际项目经验给出选型建议和落地实践方案。',
    tags: ['Dify', 'AgentScope', '实践'],
    date: '2026-07-08',
    detailUrl: 'detail/article-3.html'
  }
];

if (typeof window !== 'undefined') {
  window.ARTICLES_DATA = ARTICLES_DATA;
}
