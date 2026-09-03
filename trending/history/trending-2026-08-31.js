/* ========================================
   Trending Data - update weekly
   数据调研日期：2026-08-31（本周 08-25 ~ 08-31）
   来源：GitHub Trending 周榜/月榜、GitHub Repositories API、skills.sh 排行榜
   ======================================== */
const TRENDING_DATA = {
  updated: "2026-08-31",
  weekly: [
    {
      rank: 1,
      name: "bilawalsidhu/gods-eye-view",
      url: "https://github.com/bilawalsidhu/gods-eye-view",
      lang: "JavaScript",
      desc: "浏览器中的间谍卫星模拟器，基于真实开源空间数据与 3D 地球呈现实时空间情报，本周周榜第一",
      stars: "16.2k"
    },
    {
      rank: 2,
      name: "tt-a1i/archify",
      url: "https://github.com/tt-a1i/archify",
      lang: "JavaScript",
      desc: "Agent 绘图 Skill，输出可验证的架构、工作流、时序与数据流图，自包含 HTML 并支持清晰导出",
      stars: "44.1k"
    },
    {
      rank: 3,
      name: "zedeus/nitter",
      url: "https://github.com/zedeus/nitter",
      lang: "Nim",
      desc: "Twitter/X 替代前端，聚焦隐私与自托管，社区关注度回升",
      stars: "14.1k"
    },
    {
      rank: 4,
      name: "THU-MAIC/OpenMAIC",
      url: "https://github.com/THU-MAIC/OpenMAIC",
      lang: "TypeScript",
      desc: "开源多 Agent 互动课堂，一键获得沉浸式学习体验，教育 Agent 场景进入周榜前列",
      stars: "30.6k"
    },
    {
      rank: 5,
      name: "freestylefly/awesome-gpt-image-2",
      url: "https://github.com/freestylefly/awesome-gpt-image-2",
      lang: "JavaScript",
      desc: "GPT-Image2 工业级提示词引擎与模板库，530+ 案例逆向工程，并沉淀为可复用 Skills",
      stars: "27.4k"
    },
    {
      rank: 6,
      name: "omacom/omarchy",
      url: "https://github.com/omacom/omarchy",
      lang: "Shell",
      desc: "现代且有主见的 Linux 桌面方案，开发者环境定制热度持续",
      stars: "37.4k"
    },
    {
      rank: 7,
      name: "K-Dense-AI/scientific-agent-skills",
      url: "https://github.com/K-Dense-AI/scientific-agent-skills",
      lang: "Python",
      desc: "把 AI Agent 变成 AI Scientist，165 个科学技能与 100+ 数据库覆盖生物、医药与药物发现",
      stars: "42.1k"
    },
    {
      rank: 8,
      name: "every-app/open-seo",
      url: "https://github.com/every-app/open-seo",
      lang: "TypeScript",
      desc: "Semrush/Ahrefs 开源替代，覆盖关键词、外链与站点审计，SEO 工具使用门槛继续下降",
      stars: "16.4k"
    },
    {
      rank: 9,
      name: "jingyaogong/minimind",
      url: "https://github.com/jingyaogong/minimind",
      lang: "Python",
      desc: "两小时从零训练 64M 参数 LLM，AI 学习与模型机制理解的热门入门项目",
      stars: "57.9k"
    },
    {
      rank: 10,
      name: "anthropics/claude-plugins-community",
      url: "https://github.com/anthropics/claude-plugins-community",
      lang: "Python",
      desc: "Claude Cowork/Claude Code 社区插件市场镜像，AI 编程插件生态入口",
      stars: "3.3k"
    }
  ],
  monthly: [
    {
      rank: 1,
      name: "omacom/omarchy",
      url: "https://github.com/omacom/omarchy",
      lang: "Shell",
      desc: "现代 Linux 桌面方案，月榜持续居首"
    },
    {
      rank: 2,
      name: "semantica-agi/semantica",
      url: "https://github.com/semantica-agi/semantica",
      lang: "Python",
      desc: "图原生上下文基础设施，面向可问责 AI 系统"
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
      name: "tt-a1i/archify",
      url: "https://github.com/tt-a1i/archify",
      lang: "JavaScript",
      desc: "Agent 架构图 Skill，月度 AI 工程热度延续"
    },
    {
      rank: 5,
      name: "AprilNEA/OpenLogi",
      url: "https://github.com/AprilNEA/OpenLogi",
      lang: "Rust",
      desc: "本地优先的 Logitech Options+ 替代，无账号、无遥测"
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
      name: "freestylefly/awesome-gpt-image-2",
      url: "https://github.com/freestylefly/awesome-gpt-image-2",
      lang: "JavaScript",
      desc: "GPT-Image2 提示词工程与模板库，媒体生成热度延续"
    },
    {
      rank: 8,
      name: "TencentCloud/TencentDB-Agent-Memory",
      url: "https://github.com/TencentCloud/TencentDB-Agent-Memory",
      lang: "TypeScript",
      desc: "团队级 Agent 记忆中枢，沉淀对话、技能、Wiki 与代码图"
    },
    {
      rank: 9,
      name: "cloudflare/computer",
      url: "https://github.com/cloudflare/computer",
      lang: "TypeScript",
      desc: "给 Agent 一台计算机，扩展真实环境执行边界"
    },
    {
      rank: 10,
      name: "huangruiteng/loopx",
      url: "https://github.com/huangruiteng/loopx",
      lang: "Python",
      desc: "长周期 Agent 控制平面，面向持久、可治理的工作流"
    }
  ],
  skills: [
    {
      rank: 1,
      name: "ai-video-generation",
      installs: "473.5K",
      source: "skills-101/superpowers",
      desc: "多模型 AI 视频生成，覆盖 Veo、Seedance 2.0、Wan、Grok 等 40+ 模型，近四周安装第一"
    },
    {
      rank: 2,
      name: "ai-image-generation",
      installs: "473.1K",
      source: "skills-101/superpowers",
      desc: "GPT-Image-2、FLUX、Gemini、Grok 等 50+ 模型图像生成路由，媒体生成需求集中爆发"
    },
    {
      rank: 3,
      name: "ai-avatar-video",
      installs: "473.0K",
      source: "skills-101/superpowers",
      desc: "数字人与开口说话视频生成，内置 TTS，适合快速生产口播内容"
    },
    {
      rank: 4,
      name: "twitter-automation",
      installs: "472.9K",
      source: "skills-101/superpowers",
      desc: "X/Twitter 发布、互动与用户管理自动化，社媒 Agent 工作流热度高"
    },
    {
      rank: 5,
      name: "anti-ui-slop",
      installs: "472.4K",
      source: "uizze.com",
      desc: "基于 80 万+ 真实 Web/iOS 界面抑制模板化 UI，强调产品定制设计"
    },
    {
      rank: 6,
      name: "find-skills",
      installs: "393.3K",
      source: "vercel-labs/skills",
      desc: "按任务发现并安装 Agent Skills，是生态发现层的基础设施"
    },
    {
      rank: 7,
      name: "grill-me",
      installs: "279.5K",
      source: "mattpocock/skills",
      desc: "用高强度追问打磨计划与设计，提升 Agent 输出前的需求清晰度"
    },
    {
      rank: 8,
      name: "ai-video-generation",
      installs: "251.8K",
      source: "genmedia-labs/skills",
      desc: "RunComfy 视频模型智能路由，覆盖完整视频模型目录"
    },
    {
      rank: 9,
      name: "image-to-video",
      installs: "251.6K",
      source: "genmedia-labs/skills",
      desc: "把静态图像动画化，根据意图选择合适的图生视频模型"
    },
    {
      rank: 10,
      name: "ai-image-generation",
      installs: "251.4K",
      source: "genmedia-labs/skills",
      desc: "RunComfy 图像模型智能路由，支持生成与编辑"
    }
  ],
  skillRepos: [
    { name: "obra/superpowers", stars: "280.9K+", desc: "Agentic Skills 框架与软件开发方法论，8月31日仍有更新" },
    { name: "mattpocock/skills", stars: "245.4K+", desc: "面向真实工程师的技能集，来自作者 .agents 目录" },
    { name: "multica-ai/andrej-karpathy-skills", stars: "209.7K+", desc: "源自 Karpathy 对 LLM 编码陷阱观察的单文件行为改进技能" },
    { name: "anthropics/skills", stars: "173.3K+", desc: "Anthropic 官方 Agent Skills 公共仓库" },
    { name: "addyosmani/agent-skills", stars: "91.7K+", desc: "面向 AI 编码 Agent 的生产级工程技能集" }
  ]
};
