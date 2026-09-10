/* ========================================
   Trending Data - update weekly
   数据调研日期：2026-09-07（本周 09-01 ~ 09-07）
   来源：GitHub Trending 周榜/月榜、GitHub Repositories API、skills.sh 排行榜
   ======================================== */
const TRENDING_DATA = {
  updated: "2026-09-07",
  weekly: [
    {
      rank: 1,
      name: "DietrichGebert/ponytail",
      url: "https://github.com/DietrichGebert/ponytail",
      lang: "JavaScript",
      desc: "让 AI Agent 学会「最懒高级工程师」思维——最好的代码是你从没写过的代码，本周周榜第一",
      stars: "133.4k"
    },
    {
      rank: 2,
      name: "affaan-m/ECC",
      url: "https://github.com/affaan-m/ECC",
      lang: "JavaScript",
      desc: "Agent Harness 性能优化系统，为 Claude Code、Codex、Cursor 等提供技能、直觉、记忆与研究优先开发，周榜黑马",
      stars: "255.2k"
    },
    {
      rank: 3,
      name: "fmtlib/fmt",
      url: "https://github.com/fmtlib/fmt",
      lang: "C++",
      desc: "现代 C++ 格式化库，基础工程组件热度长青",
      stars: "25.7k"
    },
    {
      rank: 4,
      name: "tt-a1i/archify",
      url: "https://github.com/tt-a1i/archify",
      lang: "JavaScript",
      desc: "Agent 绘图 Skill，输出可验证的架构、工作流、时序与数据流图，自包含 HTML 并支持清晰导出，热度持续",
      stars: "56.1k"
    },
    {
      rank: 5,
      name: "mattpocock/skills",
      url: "https://github.com/mattpocock/skills",
      lang: "Shell",
      desc: "面向真实工程师的 Skills 集合，来自作者 .agents 目录，本周新增 13.1k stars 为周榜最高",
      stars: "257.9k"
    },
    {
      rank: 6,
      name: "blader/humanizer",
      url: "https://github.com/blader/humanizer",
      lang: "Python",
      desc: "去除 AI 生成写作痕迹的 Agent Skill，「去 AI 味」需求集中爆发",
      stars: "46.0k"
    },
    {
      rank: 7,
      name: "NousResearch/hermes-agent",
      url: "https://github.com/NousResearch/hermes-agent",
      lang: "Python",
      desc: "与你一起成长的 Agent，面向长生命周期的个人 Agent 框架",
      stars: "243.9k"
    },
    {
      rank: 8,
      name: "ChromeDevTools/chrome-devtools-mcp",
      url: "https://github.com/ChromeDevTools/chrome-devtools-mcp",
      lang: "TypeScript",
      desc: "给编码 Agent 的 Chrome DevTools，浏览器调试官方 MCP，Agent 工具链继续下沉到调试层",
      stars: "51.5k"
    },
    {
      rank: 9,
      name: "heygen-com/hyperframes",
      url: "https://github.com/heygen-com/hyperframes",
      lang: "TypeScript",
      desc: "写 HTML 即渲染视频，为 Agent 而生的视频生成框架，媒体生成与 Agent 工作流结合的代表",
      stars: "48.4k"
    },
    {
      rank: 10,
      name: "ayghri/i-have-adhd",
      url: "https://github.com/ayghri/i-have-adhd",
      lang: "Python",
      desc: "让编码 Agent 不再把答案埋在长篇输出里，ADHD 友好输出风格 Skill",
      stars: "34.6k"
    }
  ],
  monthly: [
    {
      rank: 1,
      name: "cathrynlavery/diagram-design",
      url: "https://github.com/cathrynlavery/diagram-design",
      lang: "HTML",
      desc: "38 种编辑级图表类型，自包含 HTML + SVG 无 Mermaid 依赖，月榜第一（本月 +32.6k）"
    },
    {
      rank: 2,
      name: "omacom/omarchy",
      url: "https://github.com/omacom/omarchy",
      lang: "Shell",
      desc: "现代且有主见的 Linux 桌面方案，月榜热度延续"
    },
    {
      rank: 3,
      name: "cursor/plugins",
      url: "https://github.com/cursor/plugins",
      lang: "TypeScript",
      desc: "Cursor 插件规范与官方插件，编辑器插件生态正式开启"
    },
    {
      rank: 4,
      name: "tt-a1i/archify",
      url: "https://github.com/tt-a1i/archify",
      lang: "JavaScript",
      desc: "Agent 架构图 Skill，本月新增 45.3k stars，月度 AI 工程热度最高"
    },
    {
      rank: 5,
      name: "anthropics/claude-plugins-community",
      url: "https://github.com/anthropics/claude-plugins-community",
      lang: "Python",
      desc: "Claude 插件社区市场镜像，AI 编程生态入口"
    },
    {
      rank: 6,
      name: "AprilNEA/OpenLogi",
      url: "https://github.com/AprilNEA/OpenLogi",
      lang: "Rust",
      desc: "本地优先的 Logitech Options+ 替代，无账号、无遥测"
    },
    {
      rank: 7,
      name: "volcengine/OpenViking",
      url: "https://github.com/volcengine/OpenViking",
      lang: "Python",
      desc: "自进化 Agent 上下文数据库，统一记忆、知识 RAG 与 Skills"
    },
    {
      rank: 8,
      name: "semantica-agi/semantica",
      url: "https://github.com/semantica-agi/semantica",
      lang: "Python",
      desc: "图原生上下文基础设施，面向可问责 AI 系统"
    },
    {
      rank: 9,
      name: "xai-org/x-algorithm",
      url: "https://github.com/xai-org/x-algorithm",
      lang: "Rust",
      desc: "X For You 信息流推荐算法，开源热度持续"
    },
    {
      rank: 10,
      name: "freestylefly/awesome-gpt-image-2",
      url: "https://github.com/freestylefly/awesome-gpt-image-2",
      lang: "JavaScript",
      desc: "GPT-Image2 工业级提示词引擎与模板库，530+ 案例逆向工程并沉淀为可复用 Skills"
    }
  ],
  skills: [
    {
      rank: 1,
      name: "find-skills",
      installs: "3.3M",
      source: "vercel-labs/skills",
      desc: "按任务发现并安装 Agent Skills，生态发现层的基础设施，安装量断层领先"
    },
    {
      rank: 2,
      name: "grill-me",
      installs: "1.1M",
      source: "mattpocock/skills",
      desc: "用高强度追问打磨计划与设计，提升 Agent 输出前的需求清晰度"
    },
    {
      rank: 3,
      name: "frontend-design",
      installs: "871.0K",
      source: "anthropics/skills",
      desc: "Anthropic 官方前端设计 Skill，高质量 UI 生成的事实标准"
    },
    {
      rank: 4,
      name: "agent-browser",
      installs: "819.8K",
      source: "vercel-labs/agent-browser",
      desc: "给 Agent 的浏览器自动化能力，网页操作类任务的基础组件"
    },
    {
      rank: 5,
      name: "setup-matt-pocock-skills",
      installs: "805.4K",
      source: "mattpocock/skills",
      desc: "一键安装 mattpocock 全套工程 Skills，个人技能品牌聚合效应明显"
    },
    {
      rank: 6,
      name: "vercel-react-best-practices",
      installs: "701.2K",
      source: "vercel-labs/agent-skills",
      desc: "React 最佳实践编码规范 Skill，前端工程类 Skill 热度最高"
    },
    {
      rank: 7,
      name: "lark-doc",
      installs: "675.7K",
      source: "open.feishu.cn",
      desc: "飞书文档操作能力，办公协同 Agent 化的代表，飞书系 Skill 整体安装量超 14.8M"
    },
    {
      rank: 8,
      name: "grilling",
      installs: "663.6K",
      source: "mattpocock/skills",
      desc: "需求拷问式澄清，先想清楚再动手"
    },
    {
      rank: 9,
      name: "lark-okr",
      installs: "654.5K",
      source: "open.feishu.cn",
      desc: "飞书 OKR 读写能力，组织管理场景 Agent 化"
    },
    {
      rank: 10,
      name: "lark-markdown",
      installs: "639.8K",
      source: "open.feishu.cn",
      desc: "飞书 Markdown 双向转换，文档互通桥梁"
    }
  ],
  skillRepos: [
    { name: "obra/superpowers", stars: "284.0K+", desc: "Agentic Skills 框架与软件开发方法论，稳居 Skill 集合仓库第一" },
    { name: "mattpocock/skills", stars: "257.9K+", desc: "面向真实工程师的技能集，本周新增 13.1k stars 领跑周榜" },
    { name: "affaan-m/ECC", stars: "255.2K+", desc: "Agent Harness 性能优化系统，技能、直觉、记忆一体化的周榜黑马" },
    { name: "NousResearch/hermes-agent", stars: "243.9K+", desc: "与你一起成长的 Agent 框架，长生命周期个人 Agent 代表" },
    { name: "anthropics/skills", stars: "175.4K+", desc: "Anthropic 官方 Agent Skills 公共仓库" }
  ]
};
