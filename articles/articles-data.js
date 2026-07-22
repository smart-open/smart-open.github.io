/* ========================================
   Articles Data
   ======================================== */
const ARTICLES_DATA = [
  {
    id: 'article-27',
    title: '视频里的人活了，张嘴就能跟你实时聊天',
    excerpt: '从一段有声视频到实时对话的虚拟人，完整拆解ASR、LLM、TTS、唇形同步、人格注入全链路技术，横评MetaHuman-Stream、Linly-Talker、Duix等开源项目，附GPU选型、成本分析和落地流程。',
    tags: ['虚拟数字人', '实时对话', '唇形同步', '开源项目'],
    date: '2026-07-22',
    detailUrl: 'detail/article-27.html'
  },
  {
    id: 'article-26',
    title: 'AI换脸加声音克隆，一个人就是一个剧组',
    excerpt: '从市场场景到技术原理，从开源项目横评到GPU选型，一篇搞懂AI换脸和语音克隆的完整技术栈。FaceFusion、DeepFaceLab、GPT-SoVITS、CosyVoice实战对比，附数字人短片制作全流程和法律红线。',
    tags: ['AI换脸', '语音克隆', '数字人', '开源项目'],
    date: '2026-07-22',
    detailUrl: 'detail/article-26.html'
  },
  {
    id: 'article-25',
    title: '一首歌只换歌词不换旋律，5步全自动搞定',
    excerpt: '保留原曲旋律只替换歌词，到底有多难？以成龙《醉拳》改为「怕老婆叨叨版」为实战案例，拆解人声分离、MIDI 转换、中文歌词注入、歌声合成、音频合并的 5 步全自动流水线，记录 basic-pitch、mido 中文编码、Synthesizer V 等关键踩坑与解法。',
    tags: ['歌曲改词', '翻唱', 'Demucs', '虚拟歌姬'],
    date: '2026-07-21',
    detailUrl: 'detail/article-25.html'
  },
  {
    id: 'article-24',
    title: '93%的AI项目卡在最后一公里，这样破局',
    excerpt: '93%的企业AI项目卡在POC到生产的最后一公里。本文从数据质量落差、评估门控部署、Agent Harness六柱体系、HITL人机协同、安全边界到Observe-Act-Evolve运维闭环，系统拆解AI从Demo走向规模化落地的破局之道。',
    tags: ['AI 落地', '最后一公里', 'AgentOps', '工程化'],
    date: '2026-07-19',
    detailUrl: 'detail/article-24.html'
  },
  {
    id: 'article-21',
    title: 'AI不会淘汰你，会用AI的人才会',
    excerpt: 'AI不会取代人类，但会用AI的人会取代不用AI的人。本文从冲击全景、打工模式演进、跟随者战略、五项核心能力、人机协作工作流到30天速成路径，系统拆解普通人如何在AI时代成为最强的跟随者。',
    tags: ['AI冲击', '人机协同', '跟随者战略', '未来工作'],
    date: '2026-07-19',
    detailUrl: 'detail/article-21.html'
  },
  {
    id: 'article-23',
    title: 'AI正走出屏幕，开始接管真实世界',
    excerpt: '从定义辨析到技术架构，从世界模型到NVIDIA Cosmos 3，一文读懂物理AI如何在真实世界中感知、推理与行动，以及它为何被称为AI的「安卓时刻」。',
    tags: ['Physical AI', '世界模型', '具身智能', 'NVIDIA Cosmos'],
    date: '2026-07-18',
    detailUrl: 'detail/article-23.html'
  },
  {
    id: 'article-22',
    title: '一个人靠AI月入过万的5条变现路径',
    excerpt: '从内容代写到数字产品、从AI自动化服务到矩阵运营，系统拆解2026年普通人用AI副业赚钱的五大方向、工具选型与避坑要点。附真实案例与30天速成路径。',
    tags: ['AI 副业', '内容变现', '数字产品', '自动化服务'],
    date: '2026-07-18',
    detailUrl: 'detail/article-22.html'
  },
  {
    id: 'article-20',
    title: '从技能堆砌到技能治理：解构 Skill 路由、Skill Map 与专家模式',
    excerpt: '当 Agent 安装的 Skill 越来越多，调用错乱、上下文污染、语义重叠等问题随之而来。本文从问题剖析出发，系统拆解 Skill Map、Skill Router、腾讯 WorkBuddy 专家模式三种解决方案，并给出构建可控 Skill 体系的最佳实践。',
    tags: ['Skill Router', 'Agent工程', 'WorkBuddy', '技能治理'],
    date: '2026-07-18',
    detailUrl: 'detail/article-20.html'
  },
  {
    id: 'article-19',
    title: 'AI Harness：驯服大模型的六柱驾驭体系——从原理到落地实操',
    excerpt: 'AI Harness是包裹在大模型外面的一整套运行管控体系，包含任务流程、规则约束、工具调用、自动纠错、全程监控、复盘迭代六大支柱。本文从AI工程三次范式跃迁到Harness的落地实操，系统拆解如何让AI从脱缰野马变成稳定交付的工程工具。',
    tags: ['AI Harness', 'Agent工程', '智能体', '落地实践'],
    date: '2026-07-16',
    detailUrl: 'detail/article-19.html'
  },
  {
    id: 'article-18',
    title: 'AI自主持续交付：从一句话需求到全自动研发的平台架构设计',
    excerpt: '当AI编程进入"工程系统"时代，小公司如何以2核4G、月费不足3000元的成本，构建一个"用户发一句话需求，AI团队自主完成全流程"的研发自动化平台？本文从技术选型、六层架构、HITL人机协同到交付部署，系统拆解一套可落地的AI-CDP平台设计方案。',
    tags: ['AI Agent', '研发自动化', 'MCP', 'OpenClaw'],
    date: '2026-07-16',
    detailUrl: 'detail/article-18.html'
  },
  {
    id: 'article-17',
    title: '通往物理AGI的路径：世界模型的范式跃迁、技术路线与产业落地',
    excerpt: '站在从"预测下一个词"向"预测下一个物理状态"跃迁的关键节点，世界模型正成为通往物理AGI的核心桥梁。本文系统梳理世界模型的范式变革、四大技术路线与第五种可能、智源悟界系列最新成果、产业双金字塔体系，以及前路面临的挑战。',
    tags: ['世界模型', '物理AGI', '具身智能', '智源研究院'],
    date: '2026-07-14',
    detailUrl: 'detail/article-17.html'
  },
  {
    id: 'article-16',
    title: '企业级AI开发框架选型指南：AgentScope、LangGraph、CrewAI、AutoGen 深度对比',
    excerpt: '针对企业级生产落地 + 标准化Skill能力 + 多智能体协作三个核心诉求，当前市场可分为两个梯队。第一梯队的两款框架是绝大多数企业的最优解，分别适配不同技术栈与业务背景。',
    tags: ['AI框架', 'AgentScope', 'LangGraph', '多智能体', '企业级AI'],
    date: '2026-07-14',
    detailUrl: 'detail/article-16.html'
  },
  {
    id: 'article-15',
    title: '桌面AI智能体横评：Codex、Trae Work、WorkBuddy 办公场景谁更强？',
    excerpt: '2025年下半年以来，桌面端AI Agent经历了从概念验证到规模化落地的关键转折。本文聚焦日常办公与个人用户场景，从文件处理、内容创作、任务编排、工具调用等维度深度对比 Codex、Trae Work、WorkBuddy、Claude Code。',
    tags: ['AI', '桌面端', '办公效率', 'Codex', 'WorkBuddy'],
    date: '2026-07-10',
    detailUrl: 'detail/article-15.html'
  },
  {
    id: 'article-14',
    title: 'AI Agent的技能引擎：从用户意图到Skill调用的完整链路解析',
    excerpt: '当用户向 AI Agent 发出一条指令——「帮我把这个 PDF 转成 Markdown 并提取其中的表格」——大语言模型本身并不具备读取文件系统、解析 PDF 格式或生成结构化文档的能力。',
    tags: ['AI', 'Skill', 'MCP', 'LLM', '智能体'],
    date: '2026-07-07',
    detailUrl: 'detail/article-14.html'
  },
  {
    id: 'article-13',
    title: '高并发系统设计的核心矛盾：线程、协程与事件驱动如何取舍',
    excerpt: '在高并发系统的架构演进过程中，一个永恒的核心矛盾始终摆在工程师面前：如何以有限的硬件资源支撑海量的并发连接与计算请求。',
    tags: ['高并发', '协程', '事件驱动', '线程池', '系统架构'],
    date: '2026-07-03',
    detailUrl: 'detail/article-13.html'
  },
  {
    id: 'article-12',
    title: '版本控制的后悔药：Git reset、revert 与 reflog 的正确打开方式',
    excerpt: '版本控制系统是现代软件工程的基石，而 Git 之所以在分布式版本控制领域占据统治地位，很大程度上归功于其强大的历史操作能力。',
    tags: ['Git', '版本控制', '代码管理', '开发工具', '团队协作'],
    date: '2026-06-28',
    detailUrl: 'detail/article-12.html'
  },
  {
    id: 'article-11',
    title: 'AI热之后的冷思考：企业智能化转型的务实路径',
    excerpt: '过去两年，生成式AI的浪潮席卷全球。然而热潮退去后的数据却给出了清醒的答案：超过七成的企业AI项目在完成概念验证后未能走向规模化落地。',
    tags: ['人工智能', '企业转型', 'AI落地', '数字化', '技术战略'],
    date: '2026-06-24',
    detailUrl: 'detail/article-11.html'
  },
  {
    id: 'article-10',
    title: 'JVM内存危机的七种面孔：从OOM到StackOverflow的应对策略',
    excerpt: '在Java应用的生命周期中，内存问题是最常见也最致命的故障类型之一。与CPU问题不同，内存危机往往不会立刻爆发，而是像一个不断充气的气球，在达到临界点时突然破裂。',
    tags: ['Java', 'JVM', '内存优化', 'OOM排查', 'GC调优'],
    date: '2026-06-20',
    detailUrl: 'detail/article-10.html'
  },
  {
    id: 'article-9',
    title: '生产环境CPU打满怎么办：Java应用的紧急排查手册',
    excerpt: '生产环境的CPU告警是所有运维和开发工程师的噩梦。本文将从一线实战经验出发，建立一套可复现、可落地的CPU紧急排查流程。',
    tags: ['Java', 'CPU排查', '生产故障', '性能优化', 'JVM调优'],
    date: '2026-06-16',
    detailUrl: 'detail/article-9.html'
  },
  {
    id: 'article-8',
    title: '当机器告警响起：Java服务高负载的系统性排查思路',
    excerpt: '凌晨两点，监控大屏突然亮起刺眼的红色。负载问题从来不是单一维度的故障，它像一张错综复杂的网，牵一发而动全身。',
    tags: ['Java', 'JVM', '系统排查', '性能优化', '运维实战'],
    date: '2026-06-12',
    detailUrl: 'detail/article-8.html'
  },
  {
    id: 'article-7',
    title: '微服务迷雾中的指南针：异步场景下的分布式追踪实战',
    excerpt: '在微服务架构中，一次用户请求可能跨越数十个服务节点。当系统出现异常时，如果没有完整的调用链路追踪，排查问题无异于大海捞针。',
    tags: ['SpringCloud', '分布式追踪', 'Sleuth', 'Zipkin', 'Jaeger', '异步编程', '微服务', 'OpenTelemetry'],
    date: '2026-06-08',
    detailUrl: 'detail/article-7.html'
  },
  {
    id: 'article-6',
    title: '消息队列选型指南：Kafka、RocketMQ、RabbitMQ 背后的设计权衡',
    excerpt: '在现代分布式架构中，消息队列扮演着系统解耦、流量削峰、异步通信的核心角色。本文将穿透表面特性，深度剖析三者背后的权衡逻辑。',
    tags: ['消息队列', 'Kafka', 'RocketMQ', 'RabbitMQ', '分布式系统', '架构选型'],
    date: '2026-06-04',
    detailUrl: 'detail/article-6.html'
  },
  {
    id: 'article-5',
    title: '让Elasticsearch飞起来：写入吞吐量的系统性调优',
    excerpt: '在大数据时代，Elasticsearch早已不只是全文检索工具，它更是日志分析、监控指标存储、实时搜索的核心底座。',
    tags: ['Elasticsearch', '性能优化', '分布式存储', 'Lucene', '运维实战'],
    date: '2026-05-30',
    detailUrl: 'detail/article-5.html'
  },
  {
    id: 'article-4',
    title: '从磁盘到内存：索引数据结构的选择哲学',
    excerpt: '在计算机系统的存储层次中，磁盘与内存之间存在着数量级的速度鸿沟。这种差异深刻影响了数据密集型系统的设计哲学。',
    tags: ['数据结构', '数据库索引', 'B树', '红黑树', '算法'],
    date: '2026-05-26',
    detailUrl: 'detail/article-4.html'
  }
];

if (typeof window !== 'undefined') {
  window.ARTICLES_DATA = ARTICLES_DATA;
}
