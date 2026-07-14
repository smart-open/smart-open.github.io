/* ========================================
   Articles Data
   ======================================== */
const ARTICLES_DATA = [
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
