/* ========================================
   Trending Data - update weekly
   数据调研日期：2026-08-24（本周 08-17 ~ 08-24）
   来源：GitHub Trending 第三方周榜、仓库页、skills 排行榜
   ======================================== */
const TRENDING_DATA = {
  updated: "2026-08-24",
  weekly: [
    {
      rank: 1,
      name: "cathrynlavery/diagram-design",
      url: "https://github.com/cathrynlavery/diagram-design",
      lang: "HTML",
      desc: "Claude Code/Codex 绘图 Skill，38 种图样式输出 HTML+SVG，本周 +11325 星",
      stars: "24.3k"
    },
    {
      rank: 2,
      name: "openai/codex",
      url: "https://github.com/openai/codex",
      lang: "TypeScript",
      desc: "OpenAI 轻量终端编码 Agent，本周编码 Agent 榜增长突出 +8967 星",
      stars: "89.1k"
    },
    {
      rank: 3,
      name: "public-apis/public-apis",
      url: "https://github.com/public-apis/public-apis",
      lang: "Python",
      desc: "免费 API 集合常青树，开发者发现免费接口的核心资源，本周 +8646 星",
      stars: "468.5k"
    },
    {
      rank: 4,
      name: "cactus-compute/needle",
      url: "https://github.com/cactus-compute/needle",
      lang: "Python",
      desc: "端侧小模型推理：45M 参数、14MB 二进制、28MB 内存，本周 +3772 星",
      stars: "6.7k"
    },
    {
      rank: 5,
      name: "semantica-agi/semantica",
      url: "https://github.com/semantica-agi/semantica",
      lang: "Python",
      desc: "图原生 Context 基础设施，知识图谱补全向量检索，来源可追溯，本周 +3674 星",
      stars: "10.0k"
    },
    {
      rank: 6,
      name: "unslothai/unsloth",
      url: "https://github.com/unslothai/unsloth",
      lang: "Python",
      desc: "本地训练与运行 LLM/扩散模型提速工具，本地部署热点，本周 +3636 星",
      stars: "73.7k"
    },
    {
      rank: 7,
      name: "volcengine/OpenViking",
      url: "https://github.com/volcengine/OpenViking",
      lang: "Python",
      desc: "火山引擎 Agent 上下文数据库，统一记忆/知识 RAG/Skills，本周 +3447 星",
      stars: "32.0k"
    },
    {
      rank: 8,
      name: "cordiverse/cordis",
      url: "https://github.com/cordiverse/cordis",
      lang: "TypeScript",
      desc: "时空可组合元框架，DeepSeek Harness 插件系统底座，本周 +2725 星",
      stars: "7.2k"
    },
    {
      rank: 9,
      name: "deepseek-ai/deepseek-harness",
      url: "https://github.com/deepseek-ai/deepseek-harness",
      lang: "TypeScript",
      desc: "DeepSeek 插件化 AI 工作流工具，适配模型/工具/会话日志，本周周榜居首",
      stars: "136.1k"
    },
    {
      rank: 10,
      name: "anywhere-labs/deepseek-harness-desktop",
      url: "https://github.com/anywhere-labs/deepseek-harness-desktop",
      lang: "TypeScript",
      desc: "DeepSeek Harness 插件生态的现代化桌面端，进入 AI 编程生态前列",
      stars: "9.6k"
    }
  ],
  monthly: [
    {
      rank: 1,
      name: "deepseek-ai/deepseek-harness",
      url: "https://github.com/deepseek-ai/deepseek-harness",
      lang: "TypeScript",
      desc: "DeepSeek 插件化 AI 工作流，一切皆插件的 Agent 内核范式"
    },
    {
      rank: 2,
      name: "cathrynlavery/diagram-design",
      url: "https://github.com/cathrynlavery/diagram-design",
      lang: "HTML",
      desc: "Claude Code 绘图 Skill，38 种图样式，单周破万星的现象级增长"
    },
    {
      rank: 3,
      name: "unslothai/unsloth",
      url: "https://github.com/unslothai/unsloth",
      lang: "Python",
      desc: "本地训练与推理加速，小模型本地化部署首选"
    },
    {
      rank: 4,
      name: "openai/codex",
      url: "https://github.com/openai/codex",
      lang: "TypeScript",
      desc: "OpenAI 终端编码 Agent，AI 编程赛道标杆"
    },
    {
      rank: 5,
      name: "volcengine/OpenViking",
      url: "https://github.com/volcengine/OpenViking",
      lang: "Python",
      desc: "火山引擎 Agent 上下文数据库，长期记忆统一管理"
    },
    {
      rank: 6,
      name: "harry0703/MoneyPrinterTurbo",
      url: "https://github.com/harry0703/MoneyPrinterTurbo",
      lang: "Python",
      desc: "AI 短视频一键生成工具，本周热度持续爆发"
    },
    {
      rank: 7,
      name: "semantica-agi/semantica",
      url: "https://github.com/semantica-agi/semantica",
      lang: "Python",
      desc: "图原生上下文基础设施，让 Agent 决策来源可审计"
    },
    {
      rank: 8,
      name: "cordiverse/cordis",
      url: "https://github.com/cordiverse/cordis",
      lang: "TypeScript",
      desc: "时空可组合元框架，插件系统设计新范式"
    },
    {
      rank: 9,
      name: "cactus-compute/needle",
      url: "https://github.com/cactus-compute/needle",
      lang: "Python",
      desc: "端侧小模型推理，45M 参数极轻量部署"
    },
    {
      rank: 10,
      name: "NVIDIA-NeMo/Switchyard",
      url: "https://github.com/NVIDIA-NeMo/Switchyard",
      lang: "Rust",
      desc: "NVIDIA LLM 流量路由库，多种模型协议间转换与路由"
    }
  ],
  skills: [
    {
      rank: 1,
      name: "superpowers",
      installs: "275.0K",
      source: "obra/superpowers",
      desc: "计划→规格→TDD 全栈方法论，本周 v6.3.0 支持 Devin CLI 与 Kimi harness"
    },
    {
      rank: 2,
      name: "mattpocock-skills",
      installs: "224.0K",
      source: "mattpocock/skills",
      desc: "「为真实工程师而写」的技能集，TypeScript 与前端工程实践"
    },
    {
      rank: 3,
      name: "andrej-karpathy-skills",
      installs: "204.0K",
      source: "multica-ai/andrej-karpathy-skills",
      desc: "围绕 Karpathy AI 工程经验整理的技能集，多 Agent 入口"
    },
    {
      rank: 4,
      name: "anthropics-skills",
      installs: "171.0K",
      source: "anthropics/skills",
      desc: "Anthropic 官方 Skills 库，Claude API 与模型能力说明"
    },
    {
      rank: 5,
      name: "system-prompts-of-ai-tools",
      installs: "143.0K",
      source: "x1xhlol/system-prompts-and-models-of-ai-tools",
      desc: "AI 工具系统提示词与模型配置文件汇总，追踪 Prompt 实践"
    },
    {
      rank: 6,
      name: "ui-ux-pro-max-skill",
      installs: "118.0K",
      source: "nextlevelbuilder/ui-ux-pro-max-skill",
      desc: "UI/UX 高阶设计技能包，专业级前端设计指导"
    },
    {
      rank: 7,
      name: "ponytail",
      installs: "106.0K",
      source: "DietrichGebert/ponytail",
      desc: "让 AI 生成整洁的前端样式与布局，设计与前端维护"
    },
    {
      rank: 8,
      name: "caveman",
      installs: "99.0K",
      source: "JuliusBrussee/caveman",
      desc: "复杂系统设计与架构拆解的 Agent Skill，适合大型项目规划"
    },
    {
      rank: 9,
      name: "agent-skills",
      installs: "89.0K",
      source: "addyosmani/agent-skills",
      desc: "Google 工程总监出品，本周 421 commits 高频更新"
    },
    {
      rank: 10,
      name: "taste-skill",
      installs: "75.0K",
      source: "Leonxlnx/taste-skill",
      desc: "前端审美技能包，告别模板化 AI 界面，设计类榜首"
    }
  ],
  skillRepos: [
    { name: "obra/superpowers", stars: "275.0K+", desc: "最流行 Skills 框架，本周 v6.3.0 支持 Devin CLI 与 Kimi harness" },
    { name: "mattpocock/skills", stars: "224.0K+", desc: "真实工程师技能集，TypeScript/前端工程，本周持续更新" },
    { name: "multica-ai/andrej-karpathy-skills", stars: "204.0K+", desc: "源自 Karpathy AI 工程经验的技能集合，多 Agent 入口" },
    { name: "anthropics/skills", stars: "171.0K+", desc: "Anthropic 官方技能仓库，Claude API 与工具能力" },
    { name: "addyosmani/agent-skills", stars: "89.0K+", desc: "Google 工程总监技能集，本周 421 commits 高频迭代" }
  ]
};