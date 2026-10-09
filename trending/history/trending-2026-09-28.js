/* ========================================
   Trending Data - update weekly
   数据调研日期：2026-09-28（本周 09-22 ~ 09-28）
   来源：GitHub Trending 周榜/月榜、GitHub Repositories API、skills.sh 排行榜
   ======================================== */
const TRENDING_DATA = {
  updated: "2026-09-28",
  weekly: [
    {
      rank: 1,
      name: "anthropics/financial-services",
      url: "https://github.com/anthropics/financial-services",
      lang: "Python",
      desc: "Anthropic 金融服务领域 Skill 包，官方行业化 Skills 开始铺开，本周周榜第一",
      stars: "38.1k"
    },
    {
      rank: 2,
      name: "paperclipai/paperclip",
      url: "https://github.com/paperclipai/paperclip",
      lang: "TypeScript",
      desc: "开源的工作场景 Agent 管理应用，团队统一调度与监控多个 Agent 的入口级产品",
      stars: "93.0k"
    },
    {
      rank: 3,
      name: "vectorize-io/hindsight",
      url: "https://github.com/vectorize-io/hindsight",
      lang: "Python",
      desc: "会学习的 Agent 记忆系统，周增 15.5k stars 为全榜最高，Agent Memory 赛道持续升温",
      stars: "41.1k"
    },
    {
      rank: 4,
      name: "cloudflare/security-audit-skill",
      url: "https://github.com/cloudflare/security-audit-skill",
      lang: "JavaScript",
      desc: "Cloudflare 出品的多阶段安全审计 Skill，产出可独立验证的机器可读结果",
      stars: "22.8k"
    },
    {
      rank: 5,
      name: "davila7/claude-code-templates",
      url: "https://github.com/davila7/claude-code-templates",
      lang: "Python",
      desc: "配置与监控 Claude Code 的 CLI 工具，工程化配置热度稳定",
      stars: "32.1k"
    },
    {
      rank: 6,
      name: "Tencent/WeKnora",
      url: "https://github.com/Tencent/WeKnora",
      lang: "Go",
      desc: "腾讯开源 LLM 知识平台：原始文档一键变为可查询 RAG、自主推理 Agent 与自维护 Wiki",
      stars: "31.0k"
    },
    {
      rank: 7,
      name: "vercel/next.js",
      url: "https://github.com/vercel/next.js",
      lang: "JavaScript",
      desc: "The React Framework，基础框架热度长青",
      stars: "142.9k"
    },
    {
      rank: 8,
      name: "stablyai/orca",
      url: "https://github.com/stablyai/orca",
      lang: "TypeScript",
      desc: "并行 Agent 舰队的 ADE：用自己的订阅跑任意编码 Agent，覆盖桌面、移动与远程运行时",
      stars: "80.8k"
    },
    {
      rank: 9,
      name: "HKUDS/CLI-Anything",
      url: "https://github.com/HKUDS/CLI-Anything",
      lang: "Python",
      desc: "让所有软件 Agent 原生化（Making ALL Software Agent-Native），港大数据智能实验室出品",
      stars: "50.9k"
    },
    {
      rank: 10,
      name: "pytorch/pytorch",
      url: "https://github.com/pytorch/pytorch",
      lang: "Python",
      desc: "张量与动态神经网络框架，深度学习基础设施热度长青",
      stars: "103.5k"
    }
  ],
  monthly: [
    {
      rank: 1,
      name: "cloudflare/security-audit-skill",
      url: "https://github.com/cloudflare/security-audit-skill",
      lang: "JavaScript",
      desc: "多阶段安全审计 Skill，可独立验证的机器可读审计结果，月榜第一（本月 +19.8k）"
    },
    {
      rank: 2,
      name: "bilawalsidhu/gods-eye-view",
      url: "https://github.com/bilawalsidhu/gods-eye-view",
      lang: "JavaScript",
      desc: "浏览器中的间谍卫星模拟器，基于真实开源空间数据与照片级 3D 地球（本月 +34.5k）"
    },
    {
      rank: 3,
      name: "miuuyy/codex-chatgpt-web",
      url: "https://github.com/miuuyy/codex-chatgpt-web",
      lang: "TypeScript",
      desc: "把 ChatGPT Web（含 Pro）当作 Codex 原生模型使用，不吃 Codex 额度"
    },
    {
      rank: 4,
      name: "alibaba/open-code-review",
      url: "https://github.com/alibaba/open-code-review",
      lang: "Go",
      desc: "阿里混合架构代码评审：确定性流水线 + LLM Agent，行级精确评论与多语言规则集（本月 +21.0k）"
    },
    {
      rank: 5,
      name: "tt-a1i/archify",
      url: "https://github.com/tt-a1i/archify",
      lang: "JavaScript",
      desc: "Agent 架构图 Skill，本月新增 48.0k stars 为全月最高，月度 AI 工程热度冠军"
    },
    {
      rank: 6,
      name: "superdesigndev/treg",
      url: "https://github.com/superdesigndev/treg",
      lang: "Python",
      desc: "Agent 工具的 OpenRouter，统一路由与发现层"
    },
    {
      rank: 7,
      name: "debpalash/VoiceStudio",
      url: "https://github.com/debpalash/VoiceStudio",
      lang: "Python",
      desc: "全本地 ElevenLabs 替代，覆盖 646 种语言的语音克隆、配音、转写与有声书创作（本月 +30.6k）"
    },
    {
      rank: 8,
      name: "magnitudedev/magnitude",
      url: "https://github.com/magnitudedev/magnitude",
      lang: "Rust",
      desc: "为已有硬件定制的开源推理引擎：自动分析机器、推荐并调优最适合的开源模型"
    },
    {
      rank: 9,
      name: "anthropics/financial-services",
      url: "https://github.com/anthropics/financial-services",
      lang: "Python",
      desc: "Anthropic 金融服务行业 Skill 包，官方行业化 Skills 生态起步"
    },
    {
      rank: 10,
      name: "THU-MAIC/OpenMAIC",
      url: "https://github.com/THU-MAIC/OpenMAIC",
      lang: "TypeScript",
      desc: "开源多 Agent 互动课堂，一键获得沉浸式学习体验（本月 +18.4k）"
    }
  ],
  skills: [
    {
      rank: 1,
      name: "find-skills",
      installs: "3.6M",
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
      name: "agent-browser",
      installs: "968.5K",
      source: "vercel-labs/agent-browser",
      desc: "给 Agent 的浏览器自动化能力，网页操作类任务的基础组件"
    },
    {
      rank: 4,
      name: "frontend-design",
      installs: "932.4K",
      source: "anthropics/skills",
      desc: "Anthropic 官方前端设计 Skill，高质量 UI 生成的事实标准"
    },
    {
      rank: 5,
      name: "setup-matt-pocock-skills",
      installs: "905.4K",
      source: "mattpocock/skills",
      desc: "一键安装 mattpocock 全套工程 Skills，个人技能品牌聚合效应明显"
    },
    {
      rank: 6,
      name: "vercel-react-best-practices",
      installs: "751.6K",
      source: "vercel-labs/agent-skills",
      desc: "React 最佳实践编码规范 Skill，前端工程类 Skill 热度最高"
    },
    {
      rank: 7,
      name: "lark-doc",
      installs: "734.6K",
      source: "open.feishu.cn",
      desc: "飞书文档操作能力，办公协同 Agent 化的代表，飞书系 Skill 整体安装量超 16.1M"
    },
    {
      rank: 8,
      name: "teach",
      installs: "724.5K",
      source: "mattpocock/skills",
      desc: "把工程知识转成可教学材料，学习类 Skill 热度上升"
    },
    {
      rank: 9,
      name: "video-edit",
      installs: "717.7K",
      source: "genmedia-labs/skills",
      desc: "视频剪辑 Skill，媒体生成类 Skill 进入总榜前列"
    },
    {
      rank: 10,
      name: "hyperframes-cli",
      installs: "715.5K",
      source: "heygen-com/hyperframes",
      desc: "写 HTML 渲染视频的 Agent 视频框架 CLI，媒体生成与 Agent 工作流结合加速"
    }
  ],
  skillRepos: [
    { name: "obra/superpowers", stars: "292.5K+", desc: "Agentic Skills 框架与软件开发方法论，稳居 Skill 集合仓库第一" },
    { name: "mattpocock/skills", stars: "271.4K+", desc: "面向真实工程师的技能集，本周更新链接类 Skill 安装规则" },
    { name: "anthropics/skills", stars: "178.8K+", desc: "Anthropic 官方 Agent Skills 公共仓库，持续更新 claude-api 等 Skill" },
    { name: "vercel-labs/skills", stars: "32.7K+", desc: "开放的 Agent Skills 安装工具（npx skills），生态分发入口" },
    { name: "tech-leads-club/agent-skills", stars: "7.0K+", desc: "面向专业 AI 编码 Agent 的安全校验 Skill 注册表" }
  ]
};
