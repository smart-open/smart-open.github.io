/* ========================================
   Trending Data - update weekly
   数据调研日期：2026-09-14（本周 09-08 ~ 09-14）
   来源：GitHub Trending 周榜/月榜、GitHub Repositories API、skills.sh 排行榜
   ======================================== */
const TRENDING_DATA = {
  updated: "2026-09-14",
  weekly: [
    {
      rank: 1,
      name: "bilawalsidhu/gods-eye-view",
      url: "https://github.com/bilawalsidhu/gods-eye-view",
      lang: "JavaScript",
      desc: "浏览器里的实时「间谍卫星」模拟器——真实卫星数据映射到照片级 3D 地球，单日新增 2.2k stars 领跑本周，空间情报可视化刷屏",
      stars: "24.8k"
    },
    {
      rank: 2,
      name: "affaan-m/ECC",
      url: "https://github.com/affaan-m/ECC",
      lang: "JavaScript",
      desc: "Agent Harness 性能优化系统，为 Claude Code、Codex、Cursor 提供技能、直觉、记忆与研究优先开发，周榜黑马延续热度",
      stars: "256.4k"
    },
    {
      rank: 3,
      name: "asgeirtj/system_prompts_leaks",
      url: "https://github.com/asgeirtj/system_prompts_leaks",
      lang: "JavaScript",
      desc: "Claude/OpenAI/Gemini/Grok 等主流模型的 System Prompt 泄露合集，定期更新，逆向工程圈热度持续走高",
      stars: "65.2k"
    },
    {
      rank: 4,
      name: "DietrichGebert/ponytail",
      url: "https://github.com/DietrichGebert/ponytail",
      lang: "JavaScript",
      desc: "让 AI Agent 学会「最懒高级工程师」思维——最好的代码是你从没写过的代码，周榜前列常客",
      stars: "136.6k"
    },
    {
      rank: 5,
      name: "mksglu/context-mode",
      url: "https://github.com/mksglu/context-mode",
      lang: "TypeScript",
      desc: "Context 窗口优化，沙箱化工具输出（压缩 98%）、持久化会话记忆，跨 17 平台经 MCP + hooks 路由，本周新晋黑马",
      stars: "21.4k"
    },
    {
      rank: 6,
      name: "tt-a1i/archify",
      url: "https://github.com/tt-a1i/archify",
      lang: "JavaScript",
      desc: "Agent 绘图 Skill，输出可验证的架构、工作流、时序与数据流图，自包含 HTML 并支持清晰导出，周月双榜常驻",
      stars: "59.6k"
    },
    {
      rank: 7,
      name: "openai/skills",
      url: "https://github.com/openai/skills",
      lang: "Python",
      desc: "OpenAI 官方 Codex Skills 目录，大厂正式入场 Skill 生态的又一标志性动作",
      stars: "26.3k"
    },
    {
      rank: 8,
      name: "heygen-com/hyperframes",
      url: "https://github.com/heygen-com/hyperframes",
      lang: "TypeScript",
      desc: "写 HTML 即渲染视频，为 Agent 而生的视频生成框架，媒体生成与 Agent 工作流结合的代表",
      stars: "49.2k"
    },
    {
      rank: 9,
      name: "microsoft/markitdown",
      url: "https://github.com/microsoft/markitdown",
      lang: "Python",
      desc: "微软官方文件转 Markdown 工具，Office/PDF/图片统一转 Markdown，Agent 数据预处理的基础设施",
      stars: "40.1k"
    },
    {
      rank: 10,
      name: "Tencent/WeKnora",
      url: "https://github.com/Tencent/WeKnora",
      lang: "Go",
      desc: "腾讯开源 LLM 知识平台，把原始文档变成可查询 RAG、自主推理 Agent 与自维护 Wiki，Agent 化知识库代表",
      stars: "22.1k"
    }
  ],
  monthly: [
    {
      rank: 1,
      name: "omacom/omarchy",
      url: "https://github.com/omacom/omarchy",
      lang: "Shell",
      desc: "现代且有主见的 Linux 桌面方案，月榜第一热度延续"
    },
    {
      rank: 2,
      name: "tt-a1i/archify",
      url: "https://github.com/tt-a1i/archify",
      lang: "JavaScript",
      desc: "Agent 架构图 Skill，本月新增 45.3k stars，月度 AI 工程热度最高"
    },
    {
      rank: 3,
      name: "anthropics/claude-plugins-community",
      url: "https://github.com/anthropics/claude-plugins-community",
      lang: "Python",
      desc: "Claude 插件社区市场镜像，AI 编程生态入口"
    },
    {
      rank: 4,
      name: "AprilNEA/OpenLogi",
      url: "https://github.com/AprilNEA/OpenLogi",
      lang: "Rust",
      desc: "本地优先的 Logitech Options+ 替代，无账号、无遥测"
    },
    {
      rank: 5,
      name: "cursor/plugins",
      url: "https://github.com/cursor/plugins",
      lang: "TypeScript",
      desc: "Cursor 插件规范与官方插件，编辑器插件生态正式开启"
    },
    {
      rank: 6,
      name: "volcengine/OpenViking",
      url: "https://github.com/volcengine/OpenViking",
      lang: "Python",
      desc: "自进化 Agent 上下文数据库，统一记忆、知识 RAG 与 Skills"
    },
    {
      rank: 7,
      name: "cathrynlavery/diagram-design",
      url: "https://github.com/cathrynlavery/diagram-design",
      lang: "HTML",
      desc: "38 种编辑级图表类型，自包含 HTML + SVG 无 Mermaid 依赖，图表可视化 Skill 长青"
    },
    {
      rank: 8,
      name: "freestylefly/awesome-gpt-image-2",
      url: "https://github.com/freestylefly/awesome-gpt-image-2",
      lang: "JavaScript",
      desc: "GPT-Image 工业级提示词引擎与模板库，案例逆向工程并沉淀为可复用 Skills"
    },
    {
      rank: 9,
      name: "THU-MAIC/OpenMAIC",
      url: "https://github.com/THU-MAIC/OpenMAIC",
      lang: "Python",
      desc: "清华开源多 Agent 交互课堂，一键获得沉浸式多智能体学习体验"
    },
    {
      rank: 10,
      name: "ayghri/i-have-adhd",
      url: "https://github.com/ayghri/i-have-adhd",
      lang: "Python",
      desc: "让编码 Agent 不再把答案埋在长篇输出里，ADHD 友好输出风格 Skill，热度持续爬升"
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
      installs: "1.15M",
      source: "mattpocock/skills",
      desc: "用高强度追问打磨计划与设计，提升 Agent 输出前的需求清晰度"
    },
    {
      rank: 3,
      name: "frontend-design",
      installs: "901.0K",
      source: "anthropics/skills",
      desc: "Anthropic 官方前端设计 Skill，高质量 UI 生成的事实标准"
    },
    {
      rank: 4,
      name: "agent-browser",
      installs: "825.0K",
      source: "vercel-labs/agent-browser",
      desc: "给 Agent 的浏览器自动化能力，网页操作类任务的基础组件"
    },
    {
      rank: 5,
      name: "vercel-react-best-practices",
      installs: "710.0K",
      source: "vercel-labs/agent-skills",
      desc: "React 最佳实践编码规范 Skill，前端工程类 Skill 热度最高"
    },
    {
      rank: 6,
      name: "lark-doc",
      installs: "688.0K",
      source: "open.feishu.cn",
      desc: "飞书文档操作能力，办公协同 Agent 化的代表，飞书系 Skill 整体安装量超 15M"
    },
    {
      rank: 7,
      name: "web-design-guidelines",
      installs: "655.0K",
      source: "vercel-labs/agent-skills",
      desc: "现代 Web 界面设计审查规则 Skill，设计问答类新晋热门，本月上升明显"
    },
    {
      rank: 8,
      name: "soultrace",
      installs: "612.0K",
      source: "soultrace-ai/soultrace-skill",
      desc: "代码追踪与分析 Skill，面向可调试可解释的 Agent 工程，本月新晋榜单"
    },
    {
      rank: 9,
      name: "lark-okr",
      installs: "598.0K",
      source: "open.feishu.cn",
      desc: "飞书 OKR 读写能力，组织管理场景 Agent 化"
    },
    {
      rank: 10,
      name: "lark-markdown",
      installs: "572.0K",
      source: "open.feishu.cn",
      desc: "飞书 Markdown 双向转换，文档互通桥梁"
    }
  ],
  skillRepos: [
    { name: "obra/superpowers", stars: "284.0K+", desc: "Agentic Skills 框架与软件开发方法论，稳居 Skill 集合仓库第一" },
    { name: "mattpocock/skills", stars: "257.9K+", desc: "面向真实工程师的技能集，工程向 Skill 聚合效应持续" },
    { name: "affaan-m/ECC", stars: "256.4K+", desc: "Agent Harness 性能优化系统，技能、直觉、记忆一体化的周榜黑马" },
    { name: "anthropics/skills", stars: "176.0K+", desc: "Anthropic 官方 Agent Skills 公共仓库" },
    { name: "openai/skills", stars: "26.3K+", desc: "OpenAI 官方 Codex Skills 目录，大厂入场的标志性新仓库" }
  ]
};