/* ========================================
   Trending Data - update weekly
   数据调研日期：2026-09-21（本周 09-15 ~ 09-21）
   来源：GitHub Trending 周榜/月榜、GitHub Repositories API、skills.sh 排行榜
   ======================================== */
const TRENDING_DATA = {
  updated: "2026-09-21",
  weekly: [
    {
      rank: 1,
      name: "DietrichGebert/ponytail",
      url: "https://github.com/DietrichGebert/ponytail",
      lang: "JavaScript",
      desc: "让 AI Agent 学会「最懒高级工程师」思维——最好的代码是你从没写过的代码，本周周榜第一",
      stars: "137.8k"
    },
    {
      rank: 2,
      name: "affaan-m/ECC",
      url: "https://github.com/affaan-m/ECC",
      lang: "JavaScript",
      desc: "Agent Harness 性能优化系统，为 Claude Code、Codex、Cursor 提供技能、直觉、记忆与研究优先开发，本周新增 8.7k stars",
      stars: "258.1k"
    },
    {
      rank: 3,
      name: "tt-a1i/archify",
      url: "https://github.com/tt-a1i/archify",
      lang: "JavaScript",
      desc: "Agent 绘图 Skill，输出可验证的架构、工作流、时序与数据流图，自包含 HTML 并支持清晰导出，周周榜涨幅居前",
      stars: "61.3k"
    },
    {
      rank: 4,
      name: "mattpocock/skills",
      url: "https://github.com/mattpocock/skills",
      lang: "Shell",
      desc: "Matt Pocock 面向真实工程师的技能集，被社区称作「Claude Code Skills 的 npm 时刻」，本周新增 10.5k stars 领跑",
      stars: "260.4k"
    },
    {
      rank: 5,
      name: "bilawalsidhu/gods-eye-view",
      url: "https://github.com/bilawalsidhu/gods-eye-view",
      lang: "JavaScript",
      desc: "浏览器里的实时「间谍卫星」模拟器——真实卫星数据映射到照片级 3D 地球，空间情报可视化热度延续",
      stars: "27.0k"
    },
    {
      rank: 6,
      name: "cathrynlavery/diagram-design",
      url: "https://github.com/cathrynlavery/diagram-design",
      lang: "HTML",
      desc: "38 种编辑级图表类型，自包含 HTML + SVG 无 Mermaid 依赖，Claude Code / Codex 的可视化 Skill 常青",
      stars: "40.5k"
    },
    {
      rank: 7,
      name: "NousResearch/hermes-agent",
      url: "https://github.com/NousResearch/hermes-agent",
      lang: "Python",
      desc: "与你共同成长的 AI Agent 框架，强调对话式迭代与长期记忆，本周新晋强势入榜",
      stars: "245.5k"
    },
    {
      rank: 8,
      name: "blader/humanizer",
      url: "https://github.com/blader/humanizer",
      lang: "Python",
      desc: "去除 AI 生成文字痕迹的 Skill，让内容回归自然笔触，「去 AI 味」浪潮的代表",
      stars: "47.2k"
    },
    {
      rank: 9,
      name: "heygen-com/hyperframes",
      url: "https://github.com/heygen-com/hyperframes",
      lang: "TypeScript",
      desc: "写 HTML 即渲染视频，为 Agent 而生的视频生成框架，媒体生成与 Agent 工作流深度融合",
      stars: "51.2k"
    },
    {
      rank: 10,
      name: "alibaba/open-code-review",
      url: "https://github.com/alibaba/open-code-review",
      lang: "Go",
      desc: "阿里巴巴开源 AI 代码审查工具，基于大模型对 Git 变更做自动 Review，工程提效新面孔",
      stars: "14.5k"
    }
  ],
  monthly: [
    {
      rank: 1,
      name: "tt-a1i/archify",
      url: "https://github.com/tt-a1i/archify",
      lang: "JavaScript",
      desc: "Agent 架构图 Skill，本月新增 52.3k stars，月度 AI 工程热度最高"
    },
    {
      rank: 2,
      name: "ayghri/i-have-adhd",
      url: "https://github.com/ayghri/i-have-adhd",
      lang: "Python",
      desc: "让编码 Agent 不再把答案埋在长篇输出里，ADHD 友好输出风格 Skill，热度持续攀升"
    },
    {
      rank: 3,
      name: "debpalsh/VoiceStudio",
      url: "https://github.com/debpalash/VoiceStudio",
      lang: "Python",
      desc: "本地语音克隆 / 配音 / 转录 / 有声书一体工具，隐私优先的音频 Agent，本月新晋黑马"
    },
    {
      rank: 4,
      name: "freestylefly/awesome-gpt-image-2",
      url: "https://github.com/freestylefly/awesome-gpt-image-2",
      lang: "JavaScript",
      desc: "GPT-Image 工业级提示词引擎与模板库，案例逆向工程并沉淀为可复用 Skills"
    },
    {
      rank: 5,
      name: "cathrynlavery/diagram-design",
      url: "https://github.com/cathrynlavery/diagram-design",
      lang: "HTML",
      desc: "38 种编辑级图表类型，自包含 HTML + SVG 无 Mermaid 依赖，图表可视化 Skill 长青"
    },
    {
      rank: 6,
      name: "THU-MAIC/OpenMAIC",
      url: "https://github.com/THU-MAIC/OpenMAIC",
      lang: "TypeScript",
      desc: "清华开源多 Agent 交互课堂，一键获得沉浸式多智能体学习体验"
    },
    {
      rank: 7,
      name: "omacom/omarchy",
      url: "https://github.com/omacom/omarchy",
      lang: "Shell",
      desc: "现代且有主见的 Linux 桌面方案，月榜热度延续"
    },
    {
      rank: 8,
      name: "vorssaint/vorssaint-utils",
      url: "https://github.com/vorssaint/vorssaint-utils",
      lang: "Swift",
      desc: "macOS 菜单栏开源工具包合集，效率派小工具聚合，本月新晋入榜"
    },
    {
      rank: 9,
      name: "AprilNEA/OpenLogi",
      url: "https://github.com/AprilNEA/OpenLogi",
      lang: "Rust",
      desc: "本地优先的 Logitech Options+ 替代，无账号、无遥测"
    },
    {
      rank: 10,
      name: "tashfeenahmed/freellmapi",
      url: "https://github.com/tashfeenahmed/freellmapi",
      lang: "TypeScript",
      desc: "免费 LLM 统一 API 聚合网关，汇总各家 7B 规模开放模型，低成本接入新面孔"
    }
  ],
  skills: [
    {
      rank: 1,
      name: "find-skills",
      installs: "3.5M",
      source: "vercel-labs/skills",
      desc: "按任务发现并安装 Agent Skills，生态发现层的基础设施，安装量断层领先"
    },
    {
      rank: 2,
      name: "grill-me",
      installs: "1.2M",
      source: "mattpocock/skills",
      desc: "用高强度追问打磨计划与设计，提升 Agent 输出前的需求清晰度"
    },
    {
      rank: 3,
      name: "frontend-design",
      installs: "906.4K",
      source: "anthropics/skills",
      desc: "Anthropic 官方前端设计 Skill，高质量 UI 生成的事实标准"
    },
    {
      rank: 4,
      name: "agent-browser",
      installs: "895.2K",
      source: "vercel-labs/agent-browser",
      desc: "给 Agent 的浏览器自动化能力，网页操作类任务的基础组件"
    },
    {
      rank: 5,
      name: "setup-matt-pocock-skills",
      installs: "866.2K",
      source: "mattpocock/skills",
      desc: "一键引导安装 Matt Pocock 系列 Skill 的安装器，生态聚合入口"
    },
    {
      rank: 6,
      name: "lark-doc",
      installs: "715.0K",
      source: "open.feishu.cn",
      desc: "飞书文档操作能力，办公协同 Agent 化的代表，飞书系 Skill 整体安装量超 15M"
    },
    {
      rank: 7,
      name: "teach",
      installs: "686.1K",
      source: "mattpocock/skills",
      desc: "讲解/教学类 Skill，把复杂概念拆成可教给别人的清晰步骤"
    },
    {
      rank: 8,
      name: "lark-markdown",
      installs: "678.8K",
      source: "open.feishu.cn",
      desc: "飞书 Markdown 双向转换，文档互通桥梁"
    },
    {
      rank: 9,
      name: "domain-modeling",
      installs: "670.7K",
      source: "mattpocock/skills",
      desc: "领域建模 Skill，帮助 Agent 理清业务边界与领域对象，工程向新热门"
    },
    {
      rank: 10,
      name: "codebase-design",
      installs: "649.8K",
      source: "mattpocock/skills",
      desc: "代码库结构设计 Skill，从目录到模块约定一整套工程范式"
    }
  ],
  skillRepos: [
    { name: "obra/superpowers", stars: "288.6K+", desc: "Agentic Skills 框架与软件开发方法论，稳居 Skill 集合仓库第一" },
    { name: "mattpocock/skills", stars: "260.4K+", desc: "面向真实工程师的技能集，被称为「Claude Code Skills 的 npm 时刻」，本周增速领跑" },
    { name: "affaan-m/ECC", stars: "258.1K+", desc: "Agent Harness 性能优化系统，技能、直觉、记忆一体化的周榜黑马" },
    { name: "vercel-labs/skills", stars: "32.0K+", desc: "Vercel 官方 Skills 集合，find-skills 等生态入口的来源地" },
    { name: "VoltAgent/awesome-agent-skills", stars: "20.2K+", desc: "Awesome 列表式 Agent Skills 聚合仓库，收录 1000+ 技能" }
  ]
};