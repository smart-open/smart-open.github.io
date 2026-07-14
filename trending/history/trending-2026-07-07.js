/* ========================================
   Trending Data — 2026-07-07
   ======================================== */
const TRENDING_DATA = {
  updated: "2026-07-07",
  weekly: [
    { rank: 1, name: "microsoft/TypeAgent", url: "https://github.com/microsoft/TypeAgent", lang: "TypeScript", desc: "微软开源 Agent 框架，类型安全的多 Agent 编排", stars: "5,200" },
    { rank: 2, name: "cline/cline", url: "https://github.com/cline/cline", lang: "TypeScript", desc: "VS Code 里的 AI 编程助手，支持多模型", stars: "4,800" },
    { rank: 3, name: "anthropics/anthropic-cookbook", url: "https://github.com/anthropics/anthropic-cookbook", lang: "Python", desc: "Anthropic 官方 cookbook，Claude 最佳实践", stars: "3,900" },
    { rank: 4, name: "modelcontextprotocol/servers", url: "https://github.com/modelcontextprotocol/servers", lang: "TypeScript", desc: "MCP 官方参考服务器集合", stars: "3,500" },
    { rank: 5, name: "QwenLM/Qwen2.5", url: "https://github.com/QwenLM/Qwen2.5", lang: "Python", desc: "阿里通义千问 2.5，多语言多模态大模型", stars: "3,200" },
    { rank: 6, name: "continuedev/continue", url: "https://github.com/continuedev/continue", lang: "TypeScript", desc: "开源 AI 代码补全工具，支持本地模型", stars: "2,900" },
    { rank: 7, name: "meta-llama/llama-models", url: "https://github.com/meta-llama/llama-models", lang: "Python", desc: "Meta Llama 官方模型仓库", stars: "2,700" },
    { rank: 8, name: "microsoft/markitdown", url: "https://github.com/microsoft/markitdown", lang: "Python", desc: "将任意文件转为 Markdown 的 Python 工具", stars: "2,500" },
    { rank: 9, name: "karpathy/llm.c", url: "https://github.com/karpathy/llm.c", lang: "C", desc: "纯 C/CUDA 手写大语言模型训练", stars: "2,300" },
    { rank: 10, name: "e2b-dev/E2B", url: "https://github.com/e2b-dev/E2B", lang: "Python", desc: "AI 用沙箱代码执行环境，开源替代", stars: "2,100" }
  ],
  monthly: [
    { rank: 1, name: "microsoft/TypeAgent", url: "https://github.com/microsoft/TypeAgent", lang: "TypeScript", desc: "微软类型安全 Agent 框架" },
    { rank: 2, name: "cline/cline", url: "https://github.com/cline/cline", lang: "TypeScript", desc: "VS Code AI 编程助手" },
    { rank: 3, name: "anthropics/anthropic-cookbook", url: "https://github.com/anthropics/anthropic-cookbook", lang: "Python", desc: "Claude 官方 cookbook" },
    { rank: 4, name: "modelcontextprotocol/servers", url: "https://github.com/modelcontextprotocol/servers", lang: "TypeScript", desc: "MCP 参考服务器" },
    { rank: 5, name: "QwenLM/Qwen2.5", url: "https://github.com/QwenLM/Qwen2.5", lang: "Python", desc: "通义千问 2.5" },
    { rank: 6, name: "continuedev/continue", url: "https://github.com/continuedev/continue", lang: "TypeScript", desc: "开源 AI 代码补全" },
    { rank: 7, name: "meta-llama/llama-models", url: "https://github.com/meta-llama/llama-models", lang: "Python", desc: "Llama 官方模型" },
    { rank: 8, name: "microsoft/markitdown", url: "https://github.com/microsoft/markitdown", lang: "Python", desc: "文件转 Markdown 工具" },
    { rank: 9, name: "karpathy/llm.c", url: "https://github.com/karpathy/llm.c", lang: "C", desc: "纯 C 手写 LLM" },
    { rank: 10, name: "e2b-dev/E2B", url: "https://github.com/e2b-dev/E2B", lang: "Python", desc: "AI 沙箱执行环境" }
  ],
  skills: [
    { rank: 1, name: "find-skills", installs: "188 万", source: "vercel-labs/skills", desc: "技能搜索引擎，在对话中查找并安装社区 Skills" },
    { rank: 2, name: "frontend-design", installs: "50.2 万", source: "anthropics/skills", desc: "提升 AI 生成 UI 的审美，告别「AI 风格」" },
    { rank: 3, name: "vercel-react-best-practices", installs: "44.1 万", source: "vercel-labs/agent-skills", desc: "React/Next.js 代码质量规范，45+ 条分级规则" },
    { rank: 4, name: "agent-browser", installs: "41.5 万", source: "vercel-labs/agent-browser", desc: "让 Agent 自动控制浏览器做网页操作和测试" },
    { rank: 5, name: "microsoft-foundry", installs: "36.8 万", source: "microsoft/azure-skills", desc: "Azure AI 基础设施与云服务编排" },
    { rank: 6, name: "web-design-guidelines", installs: "36.2 万", source: "vercel-labs/agent-skills", desc: "247 条网页设计规则，覆盖布局、色彩、间距" },
    { rank: 7, name: "remotion-best-practices", installs: "34.9 万", source: "remotion-dev/skills", desc: "用代码生成视频的最佳实践，效率提升 5 倍" },
    { rank: 8, name: "skill-creator", installs: "25.1 万", source: "anthropics/skills", desc: "元技能，将工作流封装成新的 SKILL.md" },
    { rank: 9, name: "caveman", installs: "21.8 万", source: "JuliusBrussee/caveman", desc: "极简「洞穴人风格」输出，节省 65% Token" },
    { rank: 10, name: "supabase-postgres-best-practices", installs: "21.2 万", source: "supabase/agent-skills", desc: "Supabase/Postgres 数据库设计规范" }
  ],
  skillRepos: [
    { name: "obra/superpowers", stars: "250K+", desc: "最流行的 Skills 框架，含 TDD、计划、子 Agent 隔离" },
    { name: "mattpocock/skills", stars: "83K+", desc: "TypeScript/前端工程实践技能集合" },
    { name: "anthropics/skills", stars: "39K+", desc: "Anthropic 官方技能仓库" },
    { name: "JuliusBrussee/caveman", stars: "快速增长", desc: "省 Token 的洞穴人技能" },
    { name: "alirezarezvani/claude-skills", stars: "热门", desc: "345 个跨领域技能合集" }
  ]
};
