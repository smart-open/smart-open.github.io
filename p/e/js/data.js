/**
 * 英语对话剧本数据库
 * 适配中小学及青年/成人口语练习场景
 * 共 14 大分类，283 篇剧本，每篇不少于 8 句台词
 */

const SCRIPT_CATEGORIES = [
  {
    "id": "daily",
    "name": "日常交际",
    "icon": "💬",
    "color": "#4ECDC4"
  },
  {
    "id": "school",
    "name": "校园生活",
    "icon": "🎒",
    "color": "#FF6B6B"
  },
  {
    "id": "shopping",
    "name": "购物消费",
    "icon": "🛍️",
    "color": "#FF9F1C"
  },
  {
    "id": "travel",
    "name": "出行旅游",
    "icon": "✈️",
    "color": "#1A535C"
  },
  {
    "id": "restaurant",
    "name": "餐厅用餐",
    "icon": "🍽️",
    "color": "#E17055"
  },
  {
    "id": "hospital",
    "name": "医院就诊",
    "icon": "🏥",
    "color": "#2EC4B6"
  },
  {
    "id": "family",
    "name": "家庭生活",
    "icon": "🏠",
    "color": "#A29BFE"
  },
  {
    "id": "sports",
    "name": "运动健身",
    "icon": "⚽",
    "color": "#00B894"
  },
  {
    "id": "party",
    "name": "聚会社交",
    "icon": "🎉",
    "color": "#FD79A8"
  },
  {
    "id": "emergency",
    "name": "紧急情况",
    "icon": "🆘",
    "color": "#D63031"
  },
  {
    "id": "workplace",
    "name": "职场工作",
    "icon": "💼",
    "color": "#636E72"
  },
  {
    "id": "online",
    "name": "网络生活",
    "icon": "💻",
    "color": "#0984E3"
  },
  {
    "id": "adultlife",
    "name": "成人生活",
    "icon": "🏡",
    "color": "#E84393"
  },
  {
    "id": "services",
    "name": "社会服务",
    "icon": "🏛️",
    "color": "#2D3436"
  }
];

const SCRIPTS = [
  {
    "id": 1,
    "category": "daily",
    "title": "Greetings 问候",
    "scene": "两个同学在上学路上相遇，互相打招呼。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Lily"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Hi, Lily! Good morning!",
        "zh": "嗨，莉莉！早上好！"
      },
      {
        "role": "Lily",
        "en": "Good morning, Tom! How are you?",
        "zh": "早上好，汤姆！你好吗？"
      },
      {
        "role": "Tom",
        "en": "I'm fine, thank you. And you?",
        "zh": "我很好，谢谢。你呢？"
      },
      {
        "role": "Lily",
        "en": "I'm great. It's a beautiful day today.",
        "zh": "我很好。今天天气真好。"
      },
      {
        "role": "Tom",
        "en": "Yes, it is. The sun is shining.",
        "zh": "是的。阳光明媚。"
      },
      {
        "role": "Lily",
        "en": "Are you ready for school?",
        "zh": "你准备好上学了吗？"
      },
      {
        "role": "Tom",
        "en": "Yes, I have all my books. Let me help you with your bag.",
        "zh": "准备好了，我的书都带齐了。让我帮你拿书包吧。"
      },
      {
        "role": "Lily",
        "en": "Thanks, Tom! You are so kind.",
        "zh": "谢谢你，汤姆！你真好。"
      },
      {
        "role": "Tom",
        "en": "You're welcome. Let's go together.",
        "zh": "不客气。我们一起走吧。"
      },
      {
        "role": "Lily",
        "en": "OK! I hope we have a good day at school.",
        "zh": "好的！希望我们在学校度过愉快的一天。"
      }
    ]
  },
  {
    "id": 2,
    "category": "daily",
    "title": "Self Introduction 自我介绍",
    "scene": "新学期开学，一个新同学在班上做自我介绍。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Jack",
      "Ms. Lee"
    ],
    "lines": [
      {
        "role": "Ms. Lee",
        "en": "Class, we have a new student today. Please welcome Jack.",
        "zh": "同学们，今天我们有一位新同学。请欢迎杰克。"
      },
      {
        "role": "Jack",
        "en": "Hello, everyone! My name is Jack Brown.",
        "zh": "大家好！我叫杰克·布朗。"
      },
      {
        "role": "Jack",
        "en": "I'm eleven years old. I come from Beijing.",
        "zh": "我十一岁了。我来自北京。"
      },
      {
        "role": "Jack",
        "en": "I like playing basketball and reading books.",
        "zh": "我喜欢打篮球和看书。"
      },
      {
        "role": "Ms. Lee",
        "en": "That's great, Jack. What's your favorite subject?",
        "zh": "太好了，杰克。你最喜欢什么科目？"
      },
      {
        "role": "Jack",
        "en": "My favorite subject is English. I love learning new words.",
        "zh": "我最喜欢的科目是英语。我喜欢学新单词。"
      },
      {
        "role": "Ms. Lee",
        "en": "Wonderful! Do you have any brothers or sisters?",
        "zh": "太棒了！你有兄弟姐妹吗？"
      },
      {
        "role": "Jack",
        "en": "Yes, I have a younger sister. She is eight years old.",
        "zh": "有的，我有一个妹妹。她八岁了。"
      },
      {
        "role": "Ms. Lee",
        "en": "We're happy to have you in our class, Jack.",
        "zh": "杰克，很高兴你来到我们班。"
      },
      {
        "role": "Jack",
        "en": "Thank you, Ms. Lee. I hope we can be good friends!",
        "zh": "谢谢您，李老师。希望我们能成为好朋友！"
      }
    ]
  },
  {
    "id": 3,
    "category": "daily",
    "title": "Talking About Weather 谈论天气",
    "scene": "两个朋友在公园里散步，谈论天气变化。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Amy",
      "Ben"
    ],
    "lines": [
      {
        "role": "Amy",
        "en": "Wow, it's so hot today!",
        "zh": "哇，今天好热啊！"
      },
      {
        "role": "Ben",
        "en": "Yes, the temperature is over 35 degrees.",
        "zh": "是的，温度超过35度了。"
      },
      {
        "role": "Amy",
        "en": "I wish it would rain. The grass looks so dry.",
        "zh": "希望能下雨。草地看起来好干。"
      },
      {
        "role": "Ben",
        "en": "The weather report says it will rain tomorrow.",
        "zh": "天气预报说明天会下雨。"
      },
      {
        "role": "Amy",
        "en": "That's good news! We really need some rain.",
        "zh": "真是个好消息！我们真的很需要一场雨。"
      },
      {
        "role": "Ben",
        "en": "What do you like to do on rainy days?",
        "zh": "你喜欢雨天做什么？"
      },
      {
        "role": "Amy",
        "en": "I like to stay home and read storybooks.",
        "zh": "我喜欢待在家里看故事书。"
      },
      {
        "role": "Ben",
        "en": "That sounds nice. I usually watch movies on rainy days.",
        "zh": "听起来不错。我雨天通常看电影。"
      },
      {
        "role": "Amy",
        "en": "Do you like summer or winter better?",
        "zh": "你更喜欢夏天还是冬天？"
      },
      {
        "role": "Ben",
        "en": "I like autumn best. The weather is cool and comfortable.",
        "zh": "我最喜欢秋天。天气凉爽又舒服。"
      }
    ]
  },
  {
    "id": 4,
    "category": "daily",
    "title": "Making a Phone Call 打电话",
    "scene": "Lily打电话给朋友Tom，约他一起做作业。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Lily",
      "Tom"
    ],
    "lines": [
      {
        "role": "Lily",
        "en": "Hello, this is Lily. Is Tom there?",
        "zh": "你好，我是莉莉。汤姆在吗？"
      },
      {
        "role": "Tom",
        "en": "Hi, Lily! This is Tom speaking.",
        "zh": "嗨，莉莉！我是汤姆。"
      },
      {
        "role": "Lily",
        "en": "What are you doing right now?",
        "zh": "你现在在做什么？"
      },
      {
        "role": "Tom",
        "en": "I'm doing my homework. It's a bit hard.",
        "zh": "我在做作业。有点难。"
      },
      {
        "role": "Lily",
        "en": "Really? Which subject is it?",
        "zh": "真的吗？是哪一科？"
      },
      {
        "role": "Tom",
        "en": "It's math. I don't understand this problem.",
        "zh": "是数学。我不懂这道题。"
      },
      {
        "role": "Lily",
        "en": "Don't worry. I can help you. I'm good at math.",
        "zh": "别担心。我可以帮你。我数学很好。"
      },
      {
        "role": "Tom",
        "en": "That's great! Can you come to my house?",
        "zh": "太好了！你能来我家吗？"
      },
      {
        "role": "Lily",
        "en": "Sure! I can come at three o'clock.",
        "zh": "当然！我三点钟可以到。"
      },
      {
        "role": "Tom",
        "en": "Perfect! See you at three. Bye!",
        "zh": "太好了！三点见。再见！"
      }
    ]
  },
  {
    "id": 5,
    "category": "daily",
    "title": "Weekend Plans 周末计划",
    "scene": "两个好朋友在讨论周末的计划安排。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mia",
      "Sam"
    ],
    "lines": [
      {
        "role": "Mia",
        "en": "Sam, what are you going to do this weekend?",
        "zh": "萨姆，你这周末打算做什么？"
      },
      {
        "role": "Sam",
        "en": "I don't have any plans yet. Do you have any ideas?",
        "zh": "我还没有计划。你有什么想法吗？"
      },
      {
        "role": "Mia",
        "en": "How about going to the park? We can have a picnic.",
        "zh": "去公园怎么样？我们可以野餐。"
      },
      {
        "role": "Sam",
        "en": "That's a great idea! What should we bring?",
        "zh": "好主意！我们应该带什么？"
      },
      {
        "role": "Mia",
        "en": "We can bring some sandwiches, fruit, and juice.",
        "zh": "我们可以带三明治、水果和果汁。"
      },
      {
        "role": "Sam",
        "en": "I can bring my kite. The weather will be nice.",
        "zh": "我可以带我的风筝。天气会很好的。"
      },
      {
        "role": "Mia",
        "en": "Awesome! Let's ask Lucy to come too.",
        "zh": "太好了！我们也叫露西一起来吧。"
      },
      {
        "role": "Sam",
        "en": "Good idea! She loves picnics.",
        "zh": "好主意！她喜欢野餐。"
      },
      {
        "role": "Mia",
        "en": "Let's meet at the park gate at ten in the morning.",
        "zh": "我们早上十点在公园门口见。"
      },
      {
        "role": "Sam",
        "en": "Sounds good! I can't wait for the weekend!",
        "zh": "听起来不错！我等不及周末了！"
      }
    ]
  },
  {
    "id": 6,
    "category": "daily",
    "title": "Borrowing Things 借东西",
    "scene": "Tom在教室里想借一支笔，向Lily借。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Lily"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Excuse me, Lily. Can I borrow your pen, please?",
        "zh": "打扰一下，莉莉。我能借用你的笔吗？"
      },
      {
        "role": "Lily",
        "en": "Sure, Tom. What color do you need?",
        "zh": "当然可以，汤姆。你需要什么颜色？"
      },
      {
        "role": "Tom",
        "en": "A blue one, please. I lost my pen this morning.",
        "zh": "请给我一支蓝色的。我今天早上弄丢了笔。"
      },
      {
        "role": "Lily",
        "en": "Here you go. You can use it for the whole class.",
        "zh": "给你。整节课你都可以用。"
      },
      {
        "role": "Tom",
        "en": "Thank you so much! I will return it after class.",
        "zh": "非常感谢！下课后我还给你。"
      },
      {
        "role": "Lily",
        "en": "Don't worry. Take your time.",
        "zh": "别着急，慢慢来。"
      },
      {
        "role": "Tom",
        "en": "By the way, do you have an eraser too?",
        "zh": "顺便问一下，你有橡皮吗？"
      },
      {
        "role": "Lily",
        "en": "Yes, I do. Here is my eraser.",
        "zh": "有的。这是我的橡皮。"
      },
      {
        "role": "Tom",
        "en": "You're so helpful, Lily. Thank you again.",
        "zh": "你真是太帮了，莉莉。再次感谢你。"
      },
      {
        "role": "Lily",
        "en": "That's what friends are for!",
        "zh": "朋友就是用来帮忙的嘛！"
      }
    ]
  },
  {
    "id": 7,
    "category": "daily",
    "title": "Saying Sorry 道歉",
    "scene": "Jack不小心弄坏了Lily的画，向她道歉。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Jack",
      "Lily"
    ],
    "lines": [
      {
        "role": "Jack",
        "en": "Lily, I have something to tell you.",
        "zh": "莉莉，我有话要跟你说。"
      },
      {
        "role": "Lily",
        "en": "What is it, Jack? You look serious.",
        "zh": "什么事，杰克？你看起来很严肃。"
      },
      {
        "role": "Jack",
        "en": "I'm really sorry. I broke your picture by accident.",
        "zh": "真的很抱歉。我不小心弄坏了你的画。"
      },
      {
        "role": "Lily",
        "en": "Oh no! That was my favorite drawing.",
        "zh": "哦不！那是我最喜欢的画。"
      },
      {
        "role": "Jack",
        "en": "I know. I feel terrible. I didn't mean to do it.",
        "zh": "我知道。我感到很糟糕。我不是故意的。"
      },
      {
        "role": "Lily",
        "en": "How did it happen?",
        "zh": "怎么弄坏的？"
      },
      {
        "role": "Jack",
        "en": "I knocked it off the desk when I was walking by.",
        "zh": "我路过的时候不小心把它碰掉到地上了。"
      },
      {
        "role": "Lily",
        "en": "It's OK, Jack. I know you didn't do it on purpose.",
        "zh": "没关系，杰克。我知道你不是故意的。"
      },
      {
        "role": "Jack",
        "en": "I'll draw you a new one. I promise.",
        "zh": "我会给你画一张新的。我保证。"
      },
      {
        "role": "Lily",
        "en": "That's very kind of you. Thank you, Jack.",
        "zh": "你真好。谢谢你，杰克。"
      }
    ]
  },
  {
    "id": 8,
    "category": "daily",
    "title": "Saying Thank You 表达感谢",
    "scene": "Lucy生病了，同学们来看望她，她表示感谢。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Lucy",
      "Emma"
    ],
    "lines": [
      {
        "role": "Emma",
        "en": "Hi, Lucy! How are you feeling today?",
        "zh": "嗨，露西！你今天感觉怎么样？"
      },
      {
        "role": "Lucy",
        "en": "Much better, Emma. Thank you for coming to see me.",
        "zh": "好多了，艾玛。谢谢来看我。"
      },
      {
        "role": "Emma",
        "en": "I brought you some fruit and a get-well card.",
        "zh": "我给你带了些水果和一张康复卡。"
      },
      {
        "role": "Lucy",
        "en": "Oh, that's so sweet! You didn't have to do that.",
        "zh": "哦，太贴心了！你不用这么麻烦的。"
      },
      {
        "role": "Emma",
        "en": "We all miss you at school. The class made this card together.",
        "zh": "我们在学校都想你。全班一起做了这张卡。"
      },
      {
        "role": "Lucy",
        "en": "I'm so touched! Please thank everyone for me.",
        "zh": "我太感动了！请替我谢谢大家。"
      },
      {
        "role": "Emma",
        "en": "Here are my class notes from this week.",
        "zh": "这是我本周的课堂笔记。"
      },
      {
        "role": "Lucy",
        "en": "You're the best friend ever! This helps a lot.",
        "zh": "你真是最好的朋友！这帮了大忙了。"
      },
      {
        "role": "Emma",
        "en": "Don't worry about school. Just rest and get well.",
        "zh": "别担心学校的事。好好休息，快快好起来。"
      },
      {
        "role": "Lucy",
        "en": "Thank you, Emma. You always make me feel better.",
        "zh": "谢谢你，艾玛。你总是让我感觉好多了。"
      }
    ]
  },
  {
    "id": 9,
    "category": "daily",
    "title": "Saying Goodbye 道别",
    "scene": "暑假结束了，两个好朋友在机场道别。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Anna",
      "Mike"
    ],
    "lines": [
      {
        "role": "Anna",
        "en": "Mike, I can't believe the summer holiday is over.",
        "zh": "迈克，真不敢相信暑假结束了。"
      },
      {
        "role": "Mike",
        "en": "Me neither. I had such a great time with you.",
        "zh": "我也是。和你在一起玩得真开心。"
      },
      {
        "role": "Anna",
        "en": "I'm going to miss you so much!",
        "zh": "我会非常想你的！"
      },
      {
        "role": "Mike",
        "en": "I will miss you too. We had so much fun together.",
        "zh": "我也会想你的。我们在一起玩得真开心。"
      },
      {
        "role": "Anna",
        "en": "Please write to me when you get home.",
        "zh": "到家后请写信给我。"
      },
      {
        "role": "Mike",
        "en": "I will. And let's video chat every weekend!",
        "zh": "我会的。我们每个周末视频聊天吧！"
      },
      {
        "role": "Anna",
        "en": "That's a promise! Don't forget!",
        "zh": "说定了！别忘了！"
      },
      {
        "role": "Mike",
        "en": "I won't. Take care of yourself, Anna.",
        "zh": "不会忘的。照顾好自己，安娜。"
      },
      {
        "role": "Anna",
        "en": "You too, Mike. Have a safe trip home.",
        "zh": "你也是，迈克。一路平安。"
      },
      {
        "role": "Mike",
        "en": "Goodbye, Anna! See you next summer!",
        "zh": "再见，安娜！明年夏天见！"
      }
    ]
  },
  {
    "id": 10,
    "category": "daily",
    "title": "Making an Appointment 约时间",
    "scene": "Tom想约朋友周六一起踢足球。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Kevin"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Hey, Kevin! Are you free this Saturday?",
        "zh": "嘿，凯文！你这周六有空吗？"
      },
      {
        "role": "Kevin",
        "en": "Let me check. Yes, I'm free in the afternoon.",
        "zh": "我看看。是的，我下午有空。"
      },
      {
        "role": "Tom",
        "en": "Great! Do you want to play football with us?",
        "zh": "太好了！你想和我们一起踢足球吗？"
      },
      {
        "role": "Kevin",
        "en": "I'd love to! What time shall we meet?",
        "zh": "我很想！我们几点见？"
      },
      {
        "role": "Tom",
        "en": "How about three o'clock at the school playground?",
        "zh": "三点钟在学校操场怎么样？"
      },
      {
        "role": "Kevin",
        "en": "That works for me. How many people are coming?",
        "zh": "我可以。有几个人来？"
      },
      {
        "role": "Tom",
        "en": "We have six people so far. You make seven!",
        "zh": "目前有六个人。加上你就是七个！"
      },
      {
        "role": "Kevin",
        "en": "Cool! Should I bring my own ball?",
        "zh": "太酷了！我需要带自己的球吗？"
      },
      {
        "role": "Tom",
        "en": "Yes, please. And bring some water too.",
        "zh": "是的，请带上。也带些水来。"
      },
      {
        "role": "Kevin",
        "en": "No problem! I'll be there on time. See you Saturday!",
        "zh": "没问题！我会准时到的。周六见！"
      }
    ]
  },
  {
    "id": 11,
    "category": "daily",
    "title": "Talking About Family 谈论家庭",
    "scene": "两个新认识的同学互相介绍自己的家庭。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Sophie",
      "David"
    ],
    "lines": [
      {
        "role": "Sophie",
        "en": "David, do you have a big family?",
        "zh": "大卫，你有一个大家庭吗？"
      },
      {
        "role": "David",
        "en": "Not really. There are four people in my family.",
        "zh": "不算大。我家有四口人。"
      },
      {
        "role": "Sophie",
        "en": "Who are they?",
        "zh": "他们是谁？"
      },
      {
        "role": "David",
        "en": "My dad, my mom, my sister and me.",
        "zh": "我爸爸、我妈妈、我姐姐和我。"
      },
      {
        "role": "Sophie",
        "en": "What does your dad do?",
        "zh": "你爸爸是做什么工作的？"
      },
      {
        "role": "David",
        "en": "He's a teacher. He teaches math at a high school.",
        "zh": "他是一名老师。他在高中教数学。"
      },
      {
        "role": "Sophie",
        "en": "That's nice! What about your mom?",
        "zh": "真好！你妈妈呢？"
      },
      {
        "role": "David",
        "en": "She's a nurse. She works at the city hospital.",
        "zh": "她是一名护士。她在市医院工作。"
      },
      {
        "role": "Sophie",
        "en": "Wow! I have three people in my family. Just my parents and me.",
        "zh": "哇！我家有三口人。只有我爸妈和我。"
      },
      {
        "role": "David",
        "en": "That's a small and happy family!",
        "zh": "那是一个温馨的小家庭！"
      }
    ]
  },
  {
    "id": 12,
    "category": "daily",
    "title": "Talking About Food 谈论食物",
    "scene": "兄妹俩在讨论晚饭吃什么。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Lucy",
      "Peter"
    ],
    "lines": [
      {
        "role": "Lucy",
        "en": "Peter, I'm so hungry! What's for dinner tonight?",
        "zh": "彼得，我好饿！今晚晚饭吃什么？"
      },
      {
        "role": "Peter",
        "en": "Mom said she's making tomato soup and noodles.",
        "zh": "妈妈说她要做番茄汤和面条。"
      },
      {
        "role": "Lucy",
        "en": "Yum! That's my favorite! Can we have some eggs too?",
        "zh": "好吃！那是我的最爱！我们也能吃点鸡蛋吗？"
      },
      {
        "role": "Peter",
        "en": "I think so. What do you want to drink?",
        "zh": "应该可以。你想喝什么？"
      },
      {
        "role": "Lucy",
        "en": "I'd like some orange juice, please.",
        "zh": "我想要点橙汁。"
      },
      {
        "role": "Peter",
        "en": "Me too. Do you like spicy food?",
        "zh": "我也是。你喜欢辣的食物吗？"
      },
      {
        "role": "Lucy",
        "en": "Not really. I prefer sweet and sour food.",
        "zh": "不太喜欢。我更喜欢酸甜口味的。"
      },
      {
        "role": "Peter",
        "en": "Same here! I love sweet and sour pork.",
        "zh": "我也是！我喜欢糖醋排骨。"
      },
      {
        "role": "Lucy",
        "en": "Mom makes the best sweet and sour pork!",
        "zh": "妈妈做的糖醋排骨最好吃了！"
      },
      {
        "role": "Peter",
        "en": "I agree! Let's go help Mom in the kitchen.",
        "zh": "我同意！我们去厨房帮妈妈吧。"
      }
    ]
  },
  {
    "id": 13,
    "category": "daily",
    "title": "Birthday Wishes 生日祝福",
    "scene": "朋友们给Lily庆祝生日，送上祝福。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Lily",
      "Emma"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Happy birthday, Lily! Here is a present for you.",
        "zh": "生日快乐，莉莉！这是给你的礼物。"
      },
      {
        "role": "Lily",
        "en": "Thank you, Tom! Can I open it now?",
        "zh": "谢谢你，汤姆！我现在可以打开吗？"
      },
      {
        "role": "Tom",
        "en": "Of course! I hope you like it.",
        "zh": "当然可以！希望你喜欢。"
      },
      {
        "role": "Lily",
        "en": "Wow, a storybook! I love reading! Thank you so much!",
        "zh": "哇，一本故事书！我喜欢阅读！太感谢了！"
      },
      {
        "role": "Emma",
        "en": "Happy birthday, Lily! I made a card for you.",
        "zh": "生日快乐，莉莉！我给你做了一张卡片。"
      },
      {
        "role": "Lily",
        "en": "It's beautiful! I love the drawings on it.",
        "zh": "真漂亮！我喜欢上面的画。"
      },
      {
        "role": "Emma",
        "en": "I drew your favorite animals on it.",
        "zh": "我画了你最喜欢的动物。"
      },
      {
        "role": "Tom",
        "en": "Let's sing the birthday song now!",
        "zh": "我们唱生日歌吧！"
      },
      {
        "role": "Lily",
        "en": "Make a wish, Lily! Blow out the candles!",
        "zh": "许个愿吧，莉莉！吹蜡烛！"
      },
      {
        "role": "Emma",
        "en": "This is the best birthday ever! Let's eat the cake!",
        "zh": "这是最棒的生日！我们吃蛋糕吧！"
      }
    ]
  },
  {
    "id": 14,
    "category": "daily",
    "title": "Asking for Help 请求帮忙",
    "scene": "Emma搬家时请朋友来帮忙整理东西。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Emma",
      "Ryan"
    ],
    "lines": [
      {
        "role": "Emma",
        "en": "Ryan, can you help me with something?",
        "zh": "瑞安，你能帮我一个忙吗？"
      },
      {
        "role": "Ryan",
        "en": "Of course, Emma! What do you need?",
        "zh": "当然可以，艾玛！你需要什么？"
      },
      {
        "role": "Emma",
        "en": "I'm moving to a new house this weekend.",
        "zh": "这周末我要搬新家。"
      },
      {
        "role": "Ryan",
        "en": "That's exciting! How can I help?",
        "zh": "太令人兴奋了！我能怎么帮？"
      },
      {
        "role": "Emma",
        "en": "Can you help me pack my books and toys?",
        "zh": "你能帮我打包书和玩具吗？"
      },
      {
        "role": "Ryan",
        "en": "Sure! Do you have any boxes?",
        "zh": "当然！你有箱子吗？"
      },
      {
        "role": "Emma",
        "en": "Yes, I bought some big boxes yesterday.",
        "zh": "有的，我昨天买了一些大箱子。"
      },
      {
        "role": "Ryan",
        "en": "Great! I can come on Saturday morning.",
        "zh": "太好了！我周六早上可以过来。"
      },
      {
        "role": "Emma",
        "en": "That's perfect! I'll make some sandwiches for lunch.",
        "zh": "太好了！我中午做些三明治。"
      },
      {
        "role": "Ryan",
        "en": "You're the best! I'll see you on Saturday!",
        "zh": "你最好了！周六见！"
      }
    ]
  },
  {
    "id": 15,
    "category": "daily",
    "title": "Catching Up 闲聊近况",
    "scene": "两个好久不见的朋友在街上偶遇。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Oliver",
      "Grace"
    ],
    "lines": [
      {
        "role": "Oliver",
        "en": "Grace? Is that you? I haven't seen you for a long time!",
        "zh": "格蕾丝？是你吗？好久没见到你了！"
      },
      {
        "role": "Grace",
        "en": "Oliver! What a surprise! How have you been?",
        "zh": "奥利弗！真惊喜！你最近好吗？"
      },
      {
        "role": "Oliver",
        "en": "I've been good! I started learning guitar.",
        "zh": "我很好！我开始学吉他了。"
      },
      {
        "role": "Grace",
        "en": "Really? That's so cool! How's it going?",
        "zh": "真的吗？太酷了！学得怎么样？"
      },
      {
        "role": "Oliver",
        "en": "It's hard, but I really enjoy it. What about you?",
        "zh": "很难，但我很喜欢。你呢？"
      },
      {
        "role": "Grace",
        "en": "I've been busy with swimming practice.",
        "zh": "我一直忙着练习游泳。"
      },
      {
        "role": "Oliver",
        "en": "Are you on the school team now?",
        "zh": "你现在在校队吗？"
      },
      {
        "role": "Grace",
        "en": "Yes! We have a competition next month.",
        "zh": "是的！我们下个月有比赛。"
      },
      {
        "role": "Oliver",
        "en": "Good luck! Let's meet up for coffee sometime.",
        "zh": "祝你好运！我们找时间聚聚吧。"
      },
      {
        "role": "Grace",
        "en": "I'd love that! Here's my phone number. Call me!",
        "zh": "我很乐意！这是我的电话号码。打给我！"
      }
    ]
  },
  {
    "id": 16,
    "category": "daily",
    "title": "Talking About Numbers 谈论数字",
    "scene": "两个同学讨论电话号码、年龄、价格等数字。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Lily"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Hey Lily, do you know the new phone number for the library?",
        "zh": "嘿Lily，你知道图书馆的新电话号码吗？"
      },
      {
        "role": "Lily",
        "en": "Let me check. Yes, it is 8-7-6-5-4-3-2-1.",
        "zh": "我查一下。是的，是87654321。"
      },
      {
        "role": "Tom",
        "en": "That is easy to remember. How old is your brother now?",
        "zh": "这个很好记。你弟弟现在多大了？"
      },
      {
        "role": "Lily",
        "en": "He is twelve years old this year. He is two years younger than me.",
        "zh": "他今年十二岁了。他比我小两岁。"
      },
      {
        "role": "Tom",
        "en": "I see. By the way, how much is the new storybook you bought?",
        "zh": "原来如此。对了，你买的那本新故事书多少钱？"
      },
      {
        "role": "Lily",
        "en": "It was twenty-five yuan. But I got a five-yuan discount.",
        "zh": "原价二十五元。但是我打了五块钱的折。"
      },
      {
        "role": "Tom",
        "en": "So you only paid twenty yuan. That is a good price!",
        "zh": "所以你只花了二十元。价格真不错！"
      },
      {
        "role": "Lily",
        "en": "Yes, I like it a lot. My student number is fourteen by the way.",
        "zh": "是的，我非常喜欢。顺便说一下，我的学号是十四号。"
      },
      {
        "role": "Tom",
        "en": "Mine is twenty-three. We are not in the same class group.",
        "zh": "我的是二十三号。我们不在同一个小组。"
      }
    ]
  },
  {
    "id": 17,
    "category": "daily",
    "title": "Talking About Colors 谈论颜色",
    "scene": "两个小朋友在画画时讨论喜欢的颜色。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mia",
      "Leo"
    ],
    "lines": [
      {
        "role": "Mia",
        "en": "Leo, what is your favorite color?",
        "zh": "里奥，你最喜欢什么颜色？"
      },
      {
        "role": "Leo",
        "en": "My favorite color is blue. What about you?",
        "zh": "我最喜欢的颜色是蓝色。你呢？"
      },
      {
        "role": "Mia",
        "en": "I love pink. It looks so pretty and warm.",
        "zh": "我喜欢粉色。它看起来又漂亮又温暖。"
      },
      {
        "role": "Leo",
        "en": "Pink is nice! My mom likes pink too.",
        "zh": "粉色很好看！我妈妈也喜欢粉色。"
      },
      {
        "role": "Mia",
        "en": "What color is your room?",
        "zh": "你的房间是什么颜色？"
      },
      {
        "role": "Leo",
        "en": "My room is light blue. It makes me feel calm.",
        "zh": "我的房间是浅蓝色的。它让我感到平静。"
      },
      {
        "role": "Mia",
        "en": "That sounds lovely! I painted my room yellow.",
        "zh": "听起来真好！我把房间刷成了黄色。"
      },
      {
        "role": "Leo",
        "en": "Yellow? That's a bright and happy color!",
        "zh": "黄色？那是一个明亮又快乐的颜色！"
      },
      {
        "role": "Mia",
        "en": "Yes! What color are you using for the sky in your drawing?",
        "zh": "是的！你画里的天空用什么颜色？"
      },
      {
        "role": "Leo",
        "en": "I'm using orange and purple. The sky looks beautiful at sunset.",
        "zh": "我用橙色和紫色。日落时的天空很美。"
      }
    ]
  },
  {
    "id": 18,
    "category": "daily",
    "title": "Describing People 描述外貌",
    "scene": "描述一个新同学的长相和穿着。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Jack",
      "Mia"
    ],
    "lines": [
      {
        "role": "Jack",
        "en": "Mia, did you see the new student in our class today?",
        "zh": "Mia，你今天看到班上的新同学了吗？"
      },
      {
        "role": "Mia",
        "en": "Yes, I noticed him in math class. He is very tall and thin.",
        "zh": "看到了，我在数学课上注意到他了。他又高又瘦。"
      },
      {
        "role": "Jack",
        "en": "He has short black hair and wears glasses, right?",
        "zh": "他留着黑色短发，戴着眼镜，对吧？"
      },
      {
        "role": "Mia",
        "en": "That is right! And he has big brown eyes and a friendly smile.",
        "zh": "没错！他还有一双棕色的大眼睛，笑容很友善。"
      },
      {
        "role": "Jack",
        "en": "He was wearing a blue T-shirt and white sneakers today.",
        "zh": "他今天穿了一件蓝色T恤和白色运动鞋。"
      },
      {
        "role": "Mia",
        "en": "He looks really smart. I heard he is good at sports too.",
        "zh": "他看起来很聪明。我听说他也很擅长运动。"
      },
      {
        "role": "Jack",
        "en": "Maybe we can invite him to play soccer with us after school.",
        "zh": "也许我们可以邀请他放学后和我们一起踢足球。"
      },
      {
        "role": "Mia",
        "en": "Good idea! Let me go talk to him first.",
        "zh": "好主意！让我先去找他聊聊。"
      }
    ]
  },
  {
    "id": 19,
    "category": "daily",
    "title": "Asking the Time and Date 问时间日期",
    "scene": "Ben不知道今天的日期和时间，去问妈妈。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Ben",
      "Mom"
    ],
    "lines": [
      {
        "role": "Ben",
        "en": "Mom, what day is it today?",
        "zh": "妈妈，今天是星期几？"
      },
      {
        "role": "Mom",
        "en": "Today is Friday, Ben.",
        "zh": "今天是星期五，本。"
      },
      {
        "role": "Ben",
        "en": "What's the date today?",
        "zh": "今天几号？"
      },
      {
        "role": "Mom",
        "en": "It's October the fifteenth.",
        "zh": "今天是十月十五号。"
      },
      {
        "role": "Ben",
        "en": "Oh no! Tomorrow is my friend's birthday party!",
        "zh": "哦不！明天是我朋友的生日派对！"
      },
      {
        "role": "Mom",
        "en": "What time is the party?",
        "zh": "派对几点？"
      },
      {
        "role": "Ben",
        "en": "I'm not sure. Let me check my phone. What time is it now?",
        "zh": "我不确定。让我看看手机。现在几点了？"
      },
      {
        "role": "Mom",
        "en": "It's half past four in the afternoon.",
        "zh": "现在是下午四点半。"
      },
      {
        "role": "Ben",
        "en": "I still have time to buy a present. What time does the store close?",
        "zh": "我还有时间买礼物。商店几点关门？"
      },
      {
        "role": "Mom",
        "en": "It closes at six. You should go now!",
        "zh": "六点关门。你应该现在就去！"
      }
    ]
  },
  {
    "id": 20,
    "category": "daily",
    "title": "Describing Places 描述地点",
    "scene": "描述自己家/学校周围的位置和环境。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Amy",
      "Bob"
    ],
    "lines": [
      {
        "role": "Amy",
        "en": "Bob, where do you live?",
        "zh": "Bob，你住在哪儿？"
      },
      {
        "role": "Bob",
        "en": "I live on Apple Street. There is a big supermarket near my home.",
        "zh": "我住在苹果街。我家附近有一家大超市。"
      },
      {
        "role": "Amy",
        "en": "That sounds convenient. Is there a park nearby?",
        "zh": "听起来很方便。附近有公园吗？"
      },
      {
        "role": "Bob",
        "en": "Yes, there is a small park across from the supermarket. I often go there.",
        "zh": "有的，超市对面有一个小公园。我经常去那里。"
      },
      {
        "role": "Amy",
        "en": "My home is next to our school, so I can walk to school every day.",
        "zh": "我家就在学校旁边，所以我每天可以走路去上学。"
      },
      {
        "role": "Bob",
        "en": "You are so lucky! There is a library between your home and the school, right?",
        "zh": "你太幸运了！你家和学校之间有一个图书馆，对吧？"
      },
      {
        "role": "Amy",
        "en": "Yes, and there is a bakery behind the library. The bread there is great.",
        "zh": "是的，图书馆后面还有一家面包店。那里的面包很好吃。"
      },
      {
        "role": "Bob",
        "en": "Wow, your neighborhood is really nice. Let me visit you someday.",
        "zh": "哇，你住的地方真好。改天我去找你玩。"
      },
      {
        "role": "Amy",
        "en": "Sure! You are always welcome. Come over this weekend!",
        "zh": "当然可以！随时欢迎你。这个周末就来吧！"
      }
    ]
  },
  {
    "id": 21,
    "category": "school",
    "title": "Asking Questions in Class 课堂提问",
    "scene": "英语课上，学生举手向老师提问。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mr. Wang",
      "Kevin"
    ],
    "lines": [
      {
        "role": "Mr. Wang",
        "en": "OK, class. Does anyone have any questions about this lesson?",
        "zh": "好了，同学们。关于这节课，有人有问题吗？"
      },
      {
        "role": "Kevin",
        "en": "Mr. Wang, I have a question.",
        "zh": "王老师，我有一个问题。"
      },
      {
        "role": "Mr. Wang",
        "en": "Yes, Kevin? Go ahead, please.",
        "zh": "好的，凯文？请说。"
      },
      {
        "role": "Kevin",
        "en": "What is the difference between \"look at\" and \"see\"?",
        "zh": "\"look at\"和\"see\"有什么区别？"
      },
      {
        "role": "Mr. Wang",
        "en": "That's a very good question! Let me explain.",
        "zh": "这是一个很好的问题！让我来解释。"
      },
      {
        "role": "Mr. Wang",
        "en": "\"Look at\" means you are trying to see something. \"See\" means it just happens.",
        "zh": "\"look at\"表示你努力去看某物。\"see\"表示自然而然地看到。"
      },
      {
        "role": "Kevin",
        "en": "So \"look at the blackboard\" means we try to see it?",
        "zh": "所以\"look at the blackboard\"是我们努力去看黑板？"
      },
      {
        "role": "Mr. Wang",
        "en": "Exactly! You are a smart student, Kevin.",
        "zh": "完全正确！你真是个聪明的学生，凯文。"
      },
      {
        "role": "Kevin",
        "en": "Thank you, Mr. Wang! I understand now.",
        "zh": "谢谢您，王老师！我现在明白了。"
      },
      {
        "role": "Mr. Wang",
        "en": "Any other questions? No? OK, let's continue.",
        "zh": "还有其他问题吗？没有？好的，我们继续。"
      }
    ]
  },
  {
    "id": 22,
    "category": "school",
    "title": "Borrowing Stationery 借文具",
    "scene": "上课时Tom发现自己没带尺子，向同桌借。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Lily"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Lily, do you have a ruler? I forgot to bring mine.",
        "zh": "莉莉，你有尺子吗？我忘带我的了。"
      },
      {
        "role": "Lily",
        "en": "Yes, I have two. You can use this one.",
        "zh": "有的，我有两把。你可以用这把。"
      },
      {
        "role": "Tom",
        "en": "Thank you! I also need a pair of scissors.",
        "zh": "谢谢！我还需要一把剪刀。"
      },
      {
        "role": "Lily",
        "en": "Sorry, I don't have scissors today.",
        "zh": "抱歉，我今天没带剪刀。"
      },
      {
        "role": "Tom",
        "en": "That's OK. Can I use your glue stick then?",
        "zh": "没关系。那我能用你的胶棒吗？"
      },
      {
        "role": "Lily",
        "en": "Sure, here you go. Be careful, it's new.",
        "zh": "当然，给你。小心点，这是新的。"
      },
      {
        "role": "Tom",
        "en": "I will. I promise to return everything after class.",
        "zh": "我会小心的。我保证下课后全部还给你。"
      },
      {
        "role": "Lily",
        "en": "No rush. We still have art class after this.",
        "zh": "不急。这节之后我们还有美术课。"
      },
      {
        "role": "Tom",
        "en": "You're always so prepared, Lily. I should learn from you.",
        "zh": "你总是准备得这么充分，莉莉。我应该向你学习。"
      },
      {
        "role": "Lily",
        "en": "Haha, I just check my bag every night before bed.",
        "zh": "哈哈，我只是每晚睡觉前检查一下书包。"
      }
    ]
  },
  {
    "id": 23,
    "category": "school",
    "title": "Discussing Homework 讨论作业",
    "scene": "放学后两个同学在一起讨论今天的数学作业。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Amy",
      "Ben"
    ],
    "lines": [
      {
        "role": "Amy",
        "en": "Ben, do you understand today's math homework?",
        "zh": "本，你明白今天的数学作业吗？"
      },
      {
        "role": "Ben",
        "en": "Most of it. But question five is really hard.",
        "zh": "大部分懂。但第五题真的很难。"
      },
      {
        "role": "Amy",
        "en": "Yes! I've been working on it for half an hour.",
        "zh": "是的！我已经做了半个小时了。"
      },
      {
        "role": "Ben",
        "en": "Let me see. Oh, I think we need to use fractions here.",
        "zh": "我看看。哦，我觉得这里要用分数。"
      },
      {
        "role": "Amy",
        "en": "Fractions? But the teacher didn't teach that yet.",
        "zh": "分数？但是老师还没教那个。"
      },
      {
        "role": "Ben",
        "en": "That's why it's a challenge question. It's extra credit.",
        "zh": "所以它是挑战题。是附加分的。"
      },
      {
        "role": "Amy",
        "en": "Oh, I see! No wonder it was so hard.",
        "zh": "哦，我明白了！难怪那么难。"
      },
      {
        "role": "Ben",
        "en": "Let's work on it together. Two heads are better than one.",
        "zh": "我们一起做吧。两人智慧胜一人。"
      },
      {
        "role": "Amy",
        "en": "Good idea! You do the first step, and I'll do the second.",
        "zh": "好主意！你做第一步，我做第二步。"
      },
      {
        "role": "Ben",
        "en": "Deal! I think we can figure it out!",
        "zh": "说定了！我觉得我们能做出来！"
      }
    ]
  },
  {
    "id": 24,
    "category": "school",
    "title": "Break Time 课间休息",
    "scene": "课间休息时，同学们在操场上聊天放松。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mike",
      "Lucy",
      "Jack"
    ],
    "lines": [
      {
        "role": "Mike",
        "en": "The math class was so long! My brain needs a break.",
        "zh": "数学课好长！我的大脑需要休息一下。"
      },
      {
        "role": "Lucy",
        "en": "I know! Let me stretch my arms and legs.",
        "zh": "我知道！让我活动一下手脚。"
      },
      {
        "role": "Jack",
        "en": "Who wants to play jump rope with me?",
        "zh": "谁想和我一起跳绳？"
      },
      {
        "role": "Mike",
        "en": "I do! But only for a few minutes. We have English class next.",
        "zh": "我！但只能玩几分钟。下一节是英语课。"
      },
      {
        "role": "Lucy",
        "en": "Do we have a lot of homework today?",
        "zh": "今天作业多吗？"
      },
      {
        "role": "Jack",
        "en": "I think we just have to read a story and answer questions.",
        "zh": "我觉得只需要读一个故事然后回答问题。"
      },
      {
        "role": "Mike",
        "en": "That doesn't sound too bad. What's the story about?",
        "zh": "听起来不算太糟。故事是关于什么的？"
      },
      {
        "role": "Lucy",
        "en": "It's about a boy who travels to the moon. It looks fun!",
        "zh": "关于一个去月球旅行的男孩。看起来很有趣！"
      },
      {
        "role": "Jack",
        "en": "Cool! The bell is going to ring soon. Let's go back.",
        "zh": "酷！马上就要打铃了。我们回去吧。"
      },
      {
        "role": "Mike",
        "en": "OK, let's go! I don't want to be late.",
        "zh": "好的，走吧！我不想迟到。"
      }
    ]
  },
  {
    "id": 25,
    "category": "school",
    "title": "Lunch Time 午餐时间",
    "scene": "同学们在食堂排队打饭，讨论今天的菜单。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Emma",
      "Oliver"
    ],
    "lines": [
      {
        "role": "Emma",
        "en": "What are you having for lunch today, Oliver?",
        "zh": "你今天午饭吃什么，奥利弗？"
      },
      {
        "role": "Oliver",
        "en": "I think I'll get the chicken and rice. It smells great!",
        "zh": "我想吃鸡肉和米饭。闻起来很香！"
      },
      {
        "role": "Emma",
        "en": "I'm going to try the noodles. They have tomato and egg noodles today.",
        "zh": "我想尝尝面条。今天有番茄鸡蛋面。"
      },
      {
        "role": "Oliver",
        "en": "That sounds delicious! Don't forget to get some vegetables.",
        "zh": "听起来很美味！别忘了吃点蔬菜。"
      },
      {
        "role": "Emma",
        "en": "You're right. I'll get some broccoli too.",
        "zh": "你说得对。我也要一些西兰花。"
      },
      {
        "role": "Oliver",
        "en": "Do you want to sit together at the window table?",
        "zh": "你想一起坐在靠窗的桌子吗？"
      },
      {
        "role": "Emma",
        "en": "Sure! Let me grab a bottle of water first.",
        "zh": "当然！让我先拿一瓶水。"
      },
      {
        "role": "Oliver",
        "en": "I'll save you a seat. The line is getting long.",
        "zh": "我给你占个座位。排队的人越来越多了。"
      },
      {
        "role": "Emma",
        "en": "Thanks! I'll be right there. This lunch looks so good!",
        "zh": "谢谢！我马上过去。这顿午饭看起来太好吃了！"
      },
      {
        "role": "Oliver",
        "en": "I'm so hungry I could eat a horse! Let's eat!",
        "zh": "我饿得能吃下一匹马！我们吃吧！"
      }
    ]
  },
  {
    "id": 26,
    "category": "school",
    "title": "Joining a Club 参加社团",
    "scene": "开学社团招新，学生去报名参加社团。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Sophie",
      "Club Leader"
    ],
    "lines": [
      {
        "role": "Sophie",
        "en": "Excuse me, is this the art club?",
        "zh": "打扰一下，这是美术社团吗？"
      },
      {
        "role": "Club Leader",
        "en": "Yes, it is! Are you interested in joining?",
        "zh": "是的！你有兴趣加入吗？"
      },
      {
        "role": "Sophie",
        "en": "Yes, I love drawing and painting. Can I join?",
        "zh": "是的，我喜欢画画。我可以加入吗？"
      },
      {
        "role": "Club Leader",
        "en": "Of course! We meet every Tuesday and Thursday after school.",
        "zh": "当然可以！我们每周二和周四放学后活动。"
      },
      {
        "role": "Sophie",
        "en": "That's perfect. What do we do in the club?",
        "zh": "太好了。我们在社团里做什么？"
      },
      {
        "role": "Club Leader",
        "en": "We learn to draw, paint, and make crafts. Sometimes we have art shows.",
        "zh": "我们学画画、做手工。有时候我们还有画展。"
      },
      {
        "role": "Sophie",
        "en": "That sounds so fun! Do I need to bring anything?",
        "zh": "听起来太有趣了！我需要带什么吗？"
      },
      {
        "role": "Club Leader",
        "en": "Just bring your enthusiasm! We provide all the materials.",
        "zh": "只要带你的热情来就行！我们提供所有材料。"
      },
      {
        "role": "Sophie",
        "en": "Great! How much is the membership fee?",
        "zh": "太好了！会费是多少？"
      },
      {
        "role": "Club Leader",
        "en": "It's free for all students. Welcome to the art club, Sophie!",
        "zh": "对所有学生免费。欢迎来到美术社团，苏菲！"
      }
    ]
  },
  {
    "id": 27,
    "category": "school",
    "title": "Sports Day 运动会",
    "scene": "学校运动会上，同学们互相加油打气。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Ryan",
      "Coach Li"
    ],
    "lines": [
      {
        "role": "Coach Li",
        "en": "OK, everyone! The one-hundred-meter race starts in ten minutes.",
        "zh": "好了，同学们！百米赛跑还有十分钟开始。"
      },
      {
        "role": "Ryan",
        "en": "Coach Li, I'm so nervous. This is my first race.",
        "zh": "李教练，我好紧张。这是我第一次比赛。"
      },
      {
        "role": "Coach Li",
        "en": "Don't be nervous, Ryan. Just do your best.",
        "zh": "别紧张，瑞安。尽力就好。"
      },
      {
        "role": "Ryan",
        "en": "What if I come in last place?",
        "zh": "如果我跑了最后一名怎么办？"
      },
      {
        "role": "Coach Li",
        "en": "It doesn't matter. The important thing is to try hard.",
        "zh": "没关系。重要的是努力了。"
      },
      {
        "role": "Ryan",
        "en": "OK. Should I stretch before the race?",
        "zh": "好的。比赛前我应该拉伸吗？"
      },
      {
        "role": "Coach Li",
        "en": "Yes, good idea! And take deep breaths to relax.",
        "zh": "是的，好主意！做做深呼吸放松一下。"
      },
      {
        "role": "Ryan",
        "en": "Thanks, Coach! I'll remember that.",
        "zh": "谢谢教练！我会记住的。"
      },
      {
        "role": "Coach Li",
        "en": "Now go to the starting line. Good luck, Ryan!",
        "zh": "现在去起跑线吧。祝你好运，瑞安！"
      },
      {
        "role": "Ryan",
        "en": "Thank you! I'll run as fast as I can!",
        "zh": "谢谢您！我会尽力跑的！"
      }
    ]
  },
  {
    "id": 28,
    "category": "school",
    "title": "English Class 英语课",
    "scene": "英语课上，老师带同学们练习英语对话。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Ms. Chen",
      "Anna",
      "Tom"
    ],
    "lines": [
      {
        "role": "Ms. Chen",
        "en": "Good morning, class! Today we're going to practice dialogues.",
        "zh": "早上好，同学们！今天我们要练习对话。"
      },
      {
        "role": "Ms. Chen",
        "en": "Anna and Tom, can you come to the front, please?",
        "zh": "安娜和汤姆，你们能到前面来吗？"
      },
      {
        "role": "Anna",
        "en": "Sure, Ms. Chen!",
        "zh": "好的，陈老师！"
      },
      {
        "role": "Ms. Chen",
        "en": "Anna, you are a shop assistant. Tom, you are a customer.",
        "zh": "安娜，你是店员。汤姆，你是顾客。"
      },
      {
        "role": "Tom",
        "en": "Hello, I'd like to buy a notebook, please.",
        "zh": "你好，我想买一个笔记本。"
      },
      {
        "role": "Anna",
        "en": "Sure! What color would you like?",
        "zh": "当然可以！你想要什么颜色的？"
      },
      {
        "role": "Tom",
        "en": "Blue, please. How much is it?",
        "zh": "请给我蓝色的。多少钱？"
      },
      {
        "role": "Anna",
        "en": "It's five yuan. Here you go.",
        "zh": "五元。给你。"
      },
      {
        "role": "Tom",
        "en": "Thank you! Here's the money.",
        "zh": "谢谢！这是钱。"
      },
      {
        "role": "Ms. Chen",
        "en": "Excellent! You both did a wonderful job! Class, let's give them a hand!",
        "zh": "太棒了！你们都做得很好！同学们，让我们给他们鼓掌！"
      }
    ]
  },
  {
    "id": 29,
    "category": "school",
    "title": "Art Class 美术课",
    "scene": "美术课上，老师教同学们画一棵大树。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mr. Liu",
      "Mia"
    ],
    "lines": [
      {
        "role": "Mr. Liu",
        "en": "Good afternoon, class! Today we are going to draw a tree.",
        "zh": "下午好，同学们！今天我们来画一棵树。"
      },
      {
        "role": "Mia",
        "en": "Mr. Liu, what kind of tree should we draw?",
        "zh": "刘老师，我们应该画什么树？"
      },
      {
        "role": "Mr. Liu",
        "en": "Any tree you like! First, draw the trunk with brown color.",
        "zh": "你喜欢的任何树！首先，用棕色画树干。"
      },
      {
        "role": "Mia",
        "en": "Then draw the leaves, right?",
        "zh": "然后画树叶，对吗？"
      },
      {
        "role": "Mr. Liu",
        "en": "Yes! Use green for the leaves. You can also add some fruit.",
        "zh": "对！用绿色画树叶。你还可以加一些水果。"
      },
      {
        "role": "Mia",
        "en": "Can I draw an apple tree? I love apples!",
        "zh": "我可以画苹果树吗？我喜欢苹果！"
      },
      {
        "role": "Mr. Liu",
        "en": "Of course! That's a great idea, Mia.",
        "zh": "当然可以！好主意，米娅。"
      },
      {
        "role": "Mia",
        "en": "Should I draw some grass at the bottom too?",
        "zh": "我也应该在底部画些草吗？"
      },
      {
        "role": "Mr. Liu",
        "en": "Yes, that will make your picture look even better!",
        "zh": "是的，那会让你的画看起来更好看！"
      },
      {
        "role": "Mia",
        "en": "Thank you, Mr. Liu! I can't wait to start drawing!",
        "zh": "谢谢您，刘老师！我迫不及待要开始画了！"
      }
    ]
  },
  {
    "id": 30,
    "category": "school",
    "title": "Music Class 音乐课",
    "scene": "音乐课上，老师教同学们唱一首英文歌。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Ms. Zhang",
      "Peter"
    ],
    "lines": [
      {
        "role": "Ms. Zhang",
        "en": "Class, today we are going to learn a new English song.",
        "zh": "同学们，今天我们要学一首新的英文歌。"
      },
      {
        "role": "Peter",
        "en": "What's the song called, Ms. Zhang?",
        "zh": "张老师，这首歌叫什么名字？"
      },
      {
        "role": "Ms. Zhang",
        "en": "It's called \"Twinkle, Twinkle, Little Star.\" Do you know it?",
        "zh": "叫\"一闪一闪小星星\"。你们知道吗？"
      },
      {
        "role": "Peter",
        "en": "I think I've heard it before, but I don't remember the words.",
        "zh": "我好像听过，但记不住歌词。"
      },
      {
        "role": "Ms. Zhang",
        "en": "Don't worry. I'll teach you line by line.",
        "zh": "别担心。我会一句一句教你们。"
      },
      {
        "role": "Peter",
        "en": "OK! I love singing. Can we sing together?",
        "zh": "好的！我喜欢唱歌。我们可以一起唱吗？"
      },
      {
        "role": "Ms. Zhang",
        "en": "Of course! Let's start with the first line. Follow me.",
        "zh": "当然！我们先从第一行开始。跟我唱。"
      },
      {
        "role": "Ms. Zhang",
        "en": "\"Twinkle, twinkle, little star, how I wonder what you are.\"",
        "zh": "\"一闪一闪小星星，我想知道你是什么。\""
      },
      {
        "role": "Peter",
        "en": "That's easy! I think I can sing the whole song!",
        "zh": "这很容易！我觉得我能唱整首歌！"
      },
      {
        "role": "Ms. Zhang",
        "en": "Great! Let's all sing it together now!",
        "zh": "太好了！现在大家一起唱！"
      }
    ]
  },
  {
    "id": 31,
    "category": "school",
    "title": "Science Experiment 科学实验",
    "scene": "科学课上，老师带领同学们做一个火山喷发实验。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mr. Li",
      "Grace"
    ],
    "lines": [
      {
        "role": "Mr. Li",
        "en": "Today, we are going to make a mini volcano!",
        "zh": "今天，我们要做一个迷你火山！"
      },
      {
        "role": "Grace",
        "en": "Wow! That sounds exciting! What do we need?",
        "zh": "哇！听起来很刺激！我们需要什么？"
      },
      {
        "role": "Mr. Li",
        "en": "We need baking soda, vinegar, and some red food coloring.",
        "zh": "我们需要小苏打、醋和一些红色食用色素。"
      },
      {
        "role": "Grace",
        "en": "What does the baking soda do?",
        "zh": "小苏打起什么作用？"
      },
      {
        "role": "Mr. Li",
        "en": "When we mix it with vinegar, it creates bubbles and gas.",
        "zh": "当它和醋混合时，会产生气泡和气体。"
      },
      {
        "role": "Grace",
        "en": "That's what makes it look like a volcano erupting!",
        "zh": "这就是让它看起来像火山喷发的原因！"
      },
      {
        "role": "Mr. Li",
        "en": "Exactly! Now, Grace, please add the baking soda.",
        "zh": "完全正确！现在，格蕾丝，请加入小苏打。"
      },
      {
        "role": "Grace",
        "en": "OK, I'm adding it now. Should I pour the vinegar?",
        "zh": "好的，我现在加。要倒醋吗？"
      },
      {
        "role": "Mr. Li",
        "en": "Yes, pour it slowly. Watch what happens!",
        "zh": "是的，慢慢倒。看看会发生什么！"
      },
      {
        "role": "Grace",
        "en": "Look! The red bubbles are coming out! It's like a real volcano!",
        "zh": "看！红色的气泡冒出来了！就像真正的火山！"
      }
    ]
  },
  {
    "id": 32,
    "category": "school",
    "title": "Parent-Teacher Meeting 家长会",
    "scene": "家长会后，老师向家长反馈学生的在校表现。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Ms. Wang",
      "Tom's Mom"
    ],
    "lines": [
      {
        "role": "Ms. Wang",
        "en": "Thank you for coming to the parent-teacher meeting today.",
        "zh": "感谢您今天来参加家长会。"
      },
      {
        "role": "Tom's Mom",
        "en": "Thank you, Ms. Wang. How is Tom doing at school?",
        "zh": "谢谢您，王老师。汤姆在学校表现怎么样？"
      },
      {
        "role": "Ms. Wang",
        "en": "Tom is a very good student. He works hard in class.",
        "zh": "汤姆是个很好的学生。他上课很努力。"
      },
      {
        "role": "Tom's Mom",
        "en": "I'm glad to hear that. Is there anything he needs to improve?",
        "zh": "听到这个我很高兴。他有什么需要改进的吗？"
      },
      {
        "role": "Ms. Wang",
        "en": "He could practice speaking English more. He is a bit shy.",
        "zh": "他可以多练习说英语。他有点害羞。"
      },
      {
        "role": "Tom's Mom",
        "en": "Yes, he is shy at home too. I'll encourage him to speak more.",
        "zh": "是的，他在家也害羞。我会鼓励他多说的。"
      },
      {
        "role": "Ms. Wang",
        "en": "Also, he should read more English storybooks.",
        "zh": "还有，他应该多读英语故事书。"
      },
      {
        "role": "Tom's Mom",
        "en": "I'll buy some for him. Thank you for your advice.",
        "zh": "我会给他买一些。谢谢您的建议。"
      },
      {
        "role": "Ms. Wang",
        "en": "You're welcome. Tom is a wonderful boy. I'm proud of him.",
        "zh": "不客气。汤姆是个很棒的男孩。我为他感到骄傲。"
      },
      {
        "role": "Tom's Mom",
        "en": "Thank you, Ms. Wang. We'll keep working hard!",
        "zh": "谢谢您，王老师。我们会继续努力的！"
      }
    ]
  },
  {
    "id": 33,
    "category": "school",
    "title": "Exam Review 考试复习",
    "scene": "期末考试前，两个同学一起复习功课。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Lily",
      "Jack"
    ],
    "lines": [
      {
        "role": "Lily",
        "en": "Jack, the English exam is next week. Are you ready?",
        "zh": "杰克，英语考试下周就要到了。你准备好了吗？"
      },
      {
        "role": "Jack",
        "en": "Not really. I still have a lot of words to remember.",
        "zh": "还没完全准备好。我还有很多单词要记。"
      },
      {
        "role": "Lily",
        "en": "Me too. Let's study together. We can test each other.",
        "zh": "我也是。我们一起复习吧。我们可以互相测试。"
      },
      {
        "role": "Jack",
        "en": "That's a good idea! How should we start?",
        "zh": "好主意！我们从哪里开始？"
      },
      {
        "role": "Lily",
        "en": "Let's start with the vocabulary from unit one to unit five.",
        "zh": "我们从第一单元到第五单元的词汇开始。"
      },
      {
        "role": "Jack",
        "en": "OK. I'll say the Chinese meaning, and you say the English word.",
        "zh": "好的。我说中文意思，你说英语单词。"
      },
      {
        "role": "Lily",
        "en": "Sounds good! Let me get my notebook.",
        "zh": "听起来不错！让我拿我的笔记本。"
      },
      {
        "role": "Jack",
        "en": "After vocabulary, let's review the grammar points.",
        "zh": "词汇之后，我们再复习语法点。"
      },
      {
        "role": "Lily",
        "en": "Sure! If we study hard, we'll both get good grades!",
        "zh": "当然！如果我们努力学习，我们都能取得好成绩！"
      },
      {
        "role": "Jack",
        "en": "Yes! Let's do our best! I feel more confident now.",
        "zh": "对！我们尽力吧！我现在更有信心了。"
      }
    ]
  },
  {
    "id": 34,
    "category": "school",
    "title": "Library Time 图书馆",
    "scene": "两个同学在学校图书馆借书。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Sophie",
      "Librarian"
    ],
    "lines": [
      {
        "role": "Sophie",
        "en": "Excuse me, I would like to borrow a book, please.",
        "zh": "打扰一下，我想借一本书。"
      },
      {
        "role": "Librarian",
        "en": "Of course! What kind of book are you looking for?",
        "zh": "当然可以！你想找什么类型的书？"
      },
      {
        "role": "Sophie",
        "en": "I'm looking for a book about animals. I love animals!",
        "zh": "我想找一本关于动物的书。我喜欢动物！"
      },
      {
        "role": "Librarian",
        "en": "We have a great animal section. It's in the corner over there.",
        "zh": "我们有一个很棒的区域。在那个角落。"
      },
      {
        "role": "Sophie",
        "en": "Thank you! How many books can I borrow at a time?",
        "zh": "谢谢！我一次能借几本书？"
      },
      {
        "role": "Librarian",
        "en": "You can borrow up to three books for two weeks.",
        "zh": "你最多可以借三本书，借期两周。"
      },
      {
        "role": "Sophie",
        "en": "That's great! What happens if I don't finish in time?",
        "zh": "太好了！如果我没读完怎么办？"
      },
      {
        "role": "Librarian",
        "en": "You can come back and renew the book for another week.",
        "zh": "你可以回来续借一周。"
      },
      {
        "role": "Sophie",
        "en": "OK, I understand. Do I need a library card?",
        "zh": "好的，我明白了。我需要借书卡吗？"
      },
      {
        "role": "Librarian",
        "en": "Yes, here is your new library card. Take good care of it!",
        "zh": "需要，这是你的新借书卡。好好保管！"
      }
    ]
  },
  {
    "id": 35,
    "category": "school",
    "title": "School Rules 校规讨论",
    "scene": "讨论学校有哪些规则。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Teacher",
      "Student"
    ],
    "lines": [
      {
        "role": "Teacher",
        "en": "Class, today we are going to talk about our school rules.",
        "zh": "同学们，今天我们来讨论一下校规。"
      },
      {
        "role": "Student",
        "en": "Mr. Li, can we wear our own clothes on Fridays?",
        "zh": "李老师，我们周五可以穿自己的衣服吗？"
      },
      {
        "role": "Teacher",
        "en": "No, you must wear the school uniform every day. That is one of our rules.",
        "zh": "不行，你们每天都要穿校服。这是我们的校规之一。"
      },
      {
        "role": "Student",
        "en": "I see. What about being late for class?",
        "zh": "明白了。那上课迟到怎么办？"
      },
      {
        "role": "Teacher",
        "en": "You should arrive at school before eight o'clock. If you are late three times, I will call your parents.",
        "zh": "你们应该在八点之前到校。如果迟到三次，我会给你家长打电话。"
      },
      {
        "role": "Student",
        "en": "Can we use our phones during break time?",
        "zh": "课间休息的时候可以用手机吗？"
      },
      {
        "role": "Teacher",
        "en": "I am afraid not. Phones are not allowed at school. You should keep them at home.",
        "zh": "恐怕不行。学校不允许带手机。你们应该把手机留在家里。"
      },
      {
        "role": "Student",
        "en": "Are there any rules about the classroom?",
        "zh": "关于教室有什么规定吗？"
      },
      {
        "role": "Teacher",
        "en": "Yes. Keep the classroom clean and do not run in the hallways. These rules keep everyone safe.",
        "zh": "有的。保持教室整洁，不要在走廊里跑。这些规则能保证大家的安全。"
      }
    ]
  },
  {
    "id": 36,
    "category": "school",
    "title": "School Bus 校车",
    "scene": "早晨同学们在校车站等校车。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mike",
      "Bus Driver",
      "Amy"
    ],
    "lines": [
      {
        "role": "Mike",
        "en": "Amy, do you think the school bus will come on time today?",
        "zh": "艾米，你觉得今天校车会准时来吗？"
      },
      {
        "role": "Amy",
        "en": "I hope so. Yesterday it was ten minutes late.",
        "zh": "希望如此。昨天晚了十分钟。"
      },
      {
        "role": "Mike",
        "en": "Look! I can see the bus coming down the road!",
        "zh": "看！我看到校车从路上来了！"
      },
      {
        "role": "Bus Driver",
        "en": "Good morning, kids! Please line up and get on the bus.",
        "zh": "早上好，孩子们！请排好队上车。"
      },
      {
        "role": "Amy",
        "en": "Good morning! Can I sit by the window, please?",
        "zh": "早上好！我可以坐在靠窗的位置吗？"
      },
      {
        "role": "Bus Driver",
        "en": "Sure! Find a seat and put on your seatbelt.",
        "zh": "当然！找个位子坐好，系上安全带。"
      },
      {
        "role": "Mike",
        "en": "The bus is really full today. A lot of students!",
        "zh": "今天校车真满。好多学生！"
      },
      {
        "role": "Amy",
        "en": "It's because it's Monday. Everyone is going to school.",
        "zh": "因为今天是星期一。大家都要去上学。"
      },
      {
        "role": "Bus Driver",
        "en": "Everyone seated? OK, let's go! Have a great day at school!",
        "zh": "都坐好了吗？好的，出发！祝你们在学校度过愉快的一天！"
      },
      {
        "role": "Mike",
        "en": "Thank you! You too, Mr. Driver!",
        "zh": "谢谢您！您也是，司机叔叔！"
      }
    ]
  },
  {
    "id": 37,
    "category": "school",
    "title": "Flag Raising Ceremony 升旗仪式",
    "scene": "周一早晨，学校举行升旗仪式。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Teacher",
      "Leo"
    ],
    "lines": [
      {
        "role": "Teacher",
        "en": "Attention, everyone! The flag raising ceremony is about to begin.",
        "zh": "注意了，同学们！升旗仪式马上开始。"
      },
      {
        "role": "Teacher",
        "en": "Please stand straight and face the flag.",
        "zh": "请站直，面向国旗。"
      },
      {
        "role": "Leo",
        "en": "Teacher, what should we do when the music plays?",
        "zh": "老师，音乐响起时我们该怎么做？"
      },
      {
        "role": "Teacher",
        "en": "You should stand still, look at the flag, and sing the national anthem.",
        "zh": "你们应该站好，看着国旗，唱国歌。"
      },
      {
        "role": "Leo",
        "en": "I see. Should we put our hands over our chest?",
        "zh": "我明白了。我们把手放在胸前吗？"
      },
      {
        "role": "Teacher",
        "en": "Yes, place your right hand over your heart. Show respect.",
        "zh": "对的，右手放在心口。表示尊重。"
      },
      {
        "role": "Leo",
        "en": "OK, I understand. It's an important moment.",
        "zh": "好的，我明白了。这是一个重要的时刻。"
      },
      {
        "role": "Teacher",
        "en": "The flag is going up now. Let's all sing together.",
        "zh": "国旗正在升起。大家一起唱。"
      },
      {
        "role": "Leo",
        "en": "I feel so proud watching the flag go up!",
        "zh": "看着国旗升起，我感到很骄傲！"
      },
      {
        "role": "Teacher",
        "en": "That's the spirit, Leo! Now let's start our week with energy!",
        "zh": "就是这样，里奥！现在让我们充满活力地开始新的一周！"
      }
    ]
  },
  {
    "id": 38,
    "category": "school",
    "title": "Walking Home 放学路上",
    "scene": "放学后两个好朋友一起走回家。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Oliver",
      "Lily"
    ],
    "lines": [
      {
        "role": "Oliver",
        "en": "Finally! School is over! I'm so tired today.",
        "zh": "终于！放学了！我今天好累。"
      },
      {
        "role": "Lily",
        "en": "Me too. We had three tests today. That was a lot!",
        "zh": "我也是。我们今天考了三场试。太多了！"
      },
      {
        "role": "Oliver",
        "en": "How do you think you did on the math test?",
        "zh": "你觉得你数学考得怎么样？"
      },
      {
        "role": "Lily",
        "en": "I think I did OK. The last question was hard, though.",
        "zh": "我觉得还行。不过最后一道题很难。"
      },
      {
        "role": "Oliver",
        "en": "I agree! I spent ten minutes on that one question.",
        "zh": "我同意！我在那一道题上花了十分钟。"
      },
      {
        "role": "Lily",
        "en": "Let's not think about tests anymore. It's time to relax!",
        "zh": "我们别想考试了。该放松了！"
      },
      {
        "role": "Oliver",
        "en": "Good idea! Do you want to get some ice cream on the way?",
        "zh": "好主意！路上你想买点冰淇淋吗？"
      },
      {
        "role": "Lily",
        "en": "Yes! There's a new ice cream shop around the corner.",
        "zh": "想！拐角有一家新的冰淇淋店。"
      },
      {
        "role": "Oliver",
        "en": "Awesome! Let's go! My treat today.",
        "zh": "太好了！我们走吧！今天我请客。"
      },
      {
        "role": "Lily",
        "en": "Really? Thank you, Oliver! You're the best!",
        "zh": "真的吗？谢谢你，奥利弗！你最好了！"
      }
    ]
  },
  {
    "id": 39,
    "category": "school",
    "title": "Museum Visit 参观博物馆",
    "scene": "学校组织同学们去参观科学博物馆。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Guide",
      "Mia",
      "Sam"
    ],
    "lines": [
      {
        "role": "Guide",
        "en": "Welcome to the Science Museum, kids! Follow me, please.",
        "zh": "欢迎来到科学博物馆，孩子们！请跟我来。"
      },
      {
        "role": "Mia",
        "en": "Wow! This place is so big! What's in the first room?",
        "zh": "哇！这个地方好大！第一个展厅有什么？"
      },
      {
        "role": "Guide",
        "en": "This is the dinosaur room. Look at that big skeleton over there!",
        "zh": "这是恐龙展厅。看那边的大骨架！"
      },
      {
        "role": "Sam",
        "en": "That's a T-Rex! It's so tall! Was it real?",
        "zh": "那是霸王龙！好高啊！它是真的吗？"
      },
      {
        "role": "Guide",
        "en": "These are real dinosaur bones found underground.",
        "zh": "这些是在地下发现的真正的恐龙骨头。"
      },
      {
        "role": "Mia",
        "en": "How old are these bones?",
        "zh": "这些骨头有多少年了？"
      },
      {
        "role": "Guide",
        "en": "They are over sixty million years old!",
        "zh": "它们有六千多万年的历史了！"
      },
      {
        "role": "Sam",
        "en": "That's amazing! Can we take pictures?",
        "zh": "太神奇了！我们可以拍照吗？"
      },
      {
        "role": "Guide",
        "en": "Yes, but please don't use flash. And don't touch the exhibits.",
        "zh": "可以，但请不要用闪光灯。也不要触摸展品。"
      },
      {
        "role": "Mia",
        "en": "OK! Let's go see the space room next. I love science!",
        "zh": "好的！我们接下来去看太空展厅吧。我喜欢科学！"
      }
    ]
  },
  {
    "id": 40,
    "category": "school",
    "title": "Making a Presentation 课堂演讲",
    "scene": "准备并做课堂小演讲。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Student",
      "Teacher"
    ],
    "lines": [
      {
        "role": "Teacher",
        "en": "Good morning, everyone. Today Lily is going to give us a presentation.",
        "zh": "大家早上好。今天Lily要给我们做一个小演讲。"
      },
      {
        "role": "Student",
        "en": "Good morning, classmates. My topic today is my favorite hobby, reading.",
        "zh": "同学们早上好。我今天的话题是我最喜欢的爱好——阅读。"
      },
      {
        "role": "Student",
        "en": "I read for about thirty minutes every day before bed.",
        "zh": "我每天睡前大约看三十分钟的书。"
      },
      {
        "role": "Student",
        "en": "My favorite book is \"Charlotte's Web\". It is a story about friendship.",
        "zh": "我最喜欢的书是《夏洛的网》。这是一个关于友谊的故事。"
      },
      {
        "role": "Student",
        "en": "Reading helps me learn new words and improves my writing skills.",
        "zh": "阅读帮助我学习新单词，也提高了我的写作能力。"
      },
      {
        "role": "Student",
        "en": "I also like reading because books take me to different places without leaving home.",
        "zh": "我也喜欢阅读，因为书能让我足不出户就去到不同的地方。"
      },
      {
        "role": "Student",
        "en": "Thank you for listening. Does anyone have questions?",
        "zh": "感谢大家的聆听。有人有问题吗？"
      },
      {
        "role": "Teacher",
        "en": "Great job, Lily! You spoke clearly and loudly. I am proud of you.",
        "zh": "做得很好，Lily！你说得很清楚，声音也很响亮。我为你感到骄傲。"
      }
    ]
  },
  {
    "id": 41,
    "category": "shopping",
    "title": "Buying Clothes 买衣服",
    "scene": "妈妈带女儿去商店买衣服。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mom",
      "Shop Assistant",
      "Emma"
    ],
    "lines": [
      {
        "role": "Mom",
        "en": "Excuse me, we are looking for a dress for my daughter.",
        "zh": "打扰一下，我想给我女儿买一条裙子。"
      },
      {
        "role": "Shop Assistant",
        "en": "Sure! How old is your daughter?",
        "zh": "当然！您女儿多大了？"
      },
      {
        "role": "Mom",
        "en": "She's ten years old. She likes pink and purple.",
        "zh": "她十岁了。她喜欢粉色和紫色。"
      },
      {
        "role": "Shop Assistant",
        "en": "We have some beautiful dresses over here.",
        "zh": "我们这边有一些漂亮的裙子。"
      },
      {
        "role": "Emma",
        "en": "Mom, I like this pink one! Can I try it on?",
        "zh": "妈妈，我喜欢这条粉色的！我能试穿吗？"
      },
      {
        "role": "Shop Assistant",
        "en": "Of course! The fitting room is right over there.",
        "zh": "当然可以！试衣间就在那边。"
      },
      {
        "role": "Emma",
        "en": "Mom, it fits perfectly! How much is it?",
        "zh": "妈妈，非常合身！多少钱？"
      },
      {
        "role": "Shop Assistant",
        "en": "It's on sale today. Only eighty-nine yuan.",
        "zh": "今天打折。只要八十九元。"
      },
      {
        "role": "Mom",
        "en": "That's a good price. We'll take it. Can I pay by phone?",
        "zh": "价格不错。我们买了。可以手机支付吗？"
      },
      {
        "role": "Shop Assistant",
        "en": "Yes, you can scan this QR code. Thank you for shopping!",
        "zh": "可以，您扫这个二维码。感谢购物！"
      }
    ]
  },
  {
    "id": 42,
    "category": "shopping",
    "title": "Buying Shoes 买鞋子",
    "scene": "爸爸带儿子去鞋店买运动鞋。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Dad",
      "Shop Assistant",
      "Jack"
    ],
    "lines": [
      {
        "role": "Dad",
        "en": "Hello, we need a pair of sports shoes for my son.",
        "zh": "你好，我需要给我儿子买一双运动鞋。"
      },
      {
        "role": "Shop Assistant",
        "en": "Sure! What size does he wear?",
        "zh": "当然！他穿多大码？"
      },
      {
        "role": "Jack",
        "en": "I'm not sure. Can you measure my feet?",
        "zh": "我不确定。你能量一下我的脚吗？"
      },
      {
        "role": "Shop Assistant",
        "en": "Of course. Step on this measuring tool, please.",
        "zh": "当然。请站到这个量脚器上。"
      },
      {
        "role": "Shop Assistant",
        "en": "He wears size 36. We have several styles.",
        "zh": "他穿36码。我们有好几种款式。"
      },
      {
        "role": "Jack",
        "en": "I like the blue and white ones! They look cool!",
        "zh": "我喜欢蓝白相间的！看起来很酷！"
      },
      {
        "role": "Dad",
        "en": "Let me check. Are they comfortable, Jack?",
        "zh": "让我看看。舒服吗，杰克？"
      },
      {
        "role": "Jack",
        "en": "Yes! They feel light and soft. I love them!",
        "zh": "舒服！感觉很轻很软。我喜欢！"
      },
      {
        "role": "Dad",
        "en": "OK, how much are they?",
        "zh": "好的，多少钱？"
      },
      {
        "role": "Shop Assistant",
        "en": "They're one hundred and twenty yuan. Today we have a ten percent discount.",
        "zh": "一百二十元。今天打九折。"
      }
    ]
  },
  {
    "id": 43,
    "category": "shopping",
    "title": "Supermarket Shopping 超市购物",
    "scene": "妈妈和儿子在超市里买东西。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mom",
      "Kevin"
    ],
    "lines": [
      {
        "role": "Mom",
        "en": "Kevin, let's make a shopping list before we start.",
        "zh": "凯文，我们在开始之前先列个购物清单。"
      },
      {
        "role": "Kevin",
        "en": "OK, Mom! We need milk, bread, and eggs.",
        "zh": "好的，妈妈！我们需要牛奶、面包和鸡蛋。"
      },
      {
        "role": "Mom",
        "en": "Right. What about fruit? Do we have any apples?",
        "zh": "对。水果呢？我们还有苹果吗？"
      },
      {
        "role": "Kevin",
        "en": "No, we don't. Let's get some apples and bananas.",
        "zh": "没有了。我们买些苹果和香蕉吧。"
      },
      {
        "role": "Mom",
        "en": "Good idea! Now, where is the milk?",
        "zh": "好主意！现在，牛奶在哪里？"
      },
      {
        "role": "Kevin",
        "en": "It's in aisle three. Follow me, Mom!",
        "zh": "在第三排货架。跟我来，妈妈！"
      },
      {
        "role": "Mom",
        "en": "Oh, the milk is on sale today! Buy one get one free!",
        "zh": "哦，牛奶今天打折！买一送一！"
      },
      {
        "role": "Kevin",
        "en": "That's great! Can we also get some juice?",
        "zh": "太好了！我们也能买些果汁吗？"
      },
      {
        "role": "Mom",
        "en": "Sure, but just one bottle. We have a lot to carry already.",
        "zh": "当然，但只能买一瓶。我们已经有很多东西要拿了。"
      },
      {
        "role": "Kevin",
        "en": "OK! Let's go to the checkout counter. I can help carry the bags!",
        "zh": "好的！我们去结账吧。我可以帮忙拎包！"
      }
    ]
  },
  {
    "id": 44,
    "category": "shopping",
    "title": "Buying Stationery 买文具",
    "scene": "开学前，Tom去文具店买文具。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Seller"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Hello! I need to buy some school supplies.",
        "zh": "你好！我需要买一些学习用品。"
      },
      {
        "role": "Seller",
        "en": "Welcome! What do you need?",
        "zh": "欢迎！你需要什么？"
      },
      {
        "role": "Tom",
        "en": "I need three notebooks, two pens, and a pencil case.",
        "zh": "我需要三个笔记本、两支笔和一个铅笔盒。"
      },
      {
        "role": "Seller",
        "en": "What color notebooks do you want?",
        "zh": "你想要什么颜色的笔记本？"
      },
      {
        "role": "Tom",
        "en": "I'd like one blue, one green, and one red, please.",
        "zh": "请给我一个蓝色的、一个绿色的和一个红色的。"
      },
      {
        "role": "Seller",
        "en": "Here you go. Do you need pencils too?",
        "zh": "给你。你还需要铅笔吗？"
      },
      {
        "role": "Tom",
        "en": "Yes, I need five pencils and an eraser.",
        "zh": "是的，我需要五支铅笔和一块橡皮。"
      },
      {
        "role": "Seller",
        "en": "OK. Anything else? We have rulers on sale today.",
        "zh": "好的。还需要别的吗？我们今天尺子打折。"
      },
      {
        "role": "Tom",
        "en": "Great! I'll take a ruler too. How much is everything?",
        "zh": "太好了！我也要一把尺子。总共多少钱？"
      },
      {
        "role": "Seller",
        "en": "That's thirty-five yuan in total. Here's your receipt.",
        "zh": "一共三十五元。这是您的收据。"
      }
    ]
  },
  {
    "id": 45,
    "category": "shopping",
    "title": "Buying Books 买书",
    "scene": "Lucy去书店买课外书。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Lucy",
      "Bookseller"
    ],
    "lines": [
      {
        "role": "Lucy",
        "en": "Excuse me, I'm looking for a storybook.",
        "zh": "打扰一下，我在找一本故事书。"
      },
      {
        "role": "Bookseller",
        "en": "Sure! What kind of stories do you like?",
        "zh": "当然！你喜欢什么类型的故事？"
      },
      {
        "role": "Lucy",
        "en": "I like adventure stories. Something about exploring new places.",
        "zh": "我喜欢冒险故事。关于探索新地方的那种。"
      },
      {
        "role": "Bookseller",
        "en": "We have a great book called 'The Secret Garden'. It's very popular.",
        "zh": "我们有一本很好的书叫《秘密花园》。很受欢迎。"
      },
      {
        "role": "Lucy",
        "en": "Oh, I've heard of that! How much does it cost?",
        "zh": "哦，我听说过！多少钱？"
      },
      {
        "role": "Bookseller",
        "en": "It's twenty-eight yuan. We also have a Chinese-English bilingual version.",
        "zh": "二十八元。我们还有中英双语版。"
      },
      {
        "role": "Lucy",
        "en": "Really? The bilingual version sounds perfect for me!",
        "zh": "真的吗？双语版对我来说太完美了！"
      },
      {
        "role": "Bookseller",
        "en": "Yes! You can learn English while enjoying the story.",
        "zh": "是的！你可以在享受故事的同时学英语。"
      },
      {
        "role": "Lucy",
        "en": "I'll take the bilingual version. Here is the money.",
        "zh": "我要双语版的。这是钱。"
      },
      {
        "role": "Bookseller",
        "en": "Thank you! Here's your book and a bookmark. Enjoy your reading!",
        "zh": "谢谢！这是您的书和一个书签。祝您阅读愉快！"
      }
    ]
  },
  {
    "id": 46,
    "category": "shopping",
    "title": "Buying a Gift 买礼物",
    "scene": "Tom想给妈妈买生日礼物，请姐姐帮忙挑选。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Anna",
      "Shop Assistant"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Anna, Mom's birthday is coming. I want to buy her a gift.",
        "zh": "安娜，妈妈的生日快到了。我想给她买个礼物。"
      },
      {
        "role": "Anna",
        "en": "That's sweet, Tom! What does Mom like?",
        "zh": "真贴心，汤姆！妈妈喜欢什么？"
      },
      {
        "role": "Tom",
        "en": "She likes flowers. But I want to get something special.",
        "zh": "她喜欢花。但我想买些特别的。"
      },
      {
        "role": "Anna",
        "en": "How about a scarf? It's getting cold.",
        "zh": "围巾怎么样？天气变冷了。"
      },
      {
        "role": "Shop Assistant",
        "en": "Can I help you find something?",
        "zh": "需要帮忙找什么吗？"
      },
      {
        "role": "Tom",
        "en": "Yes, please. I'm looking for a birthday gift for my mom.",
        "zh": "是的。我在给我妈妈找生日礼物。"
      },
      {
        "role": "Shop Assistant",
        "en": "We have beautiful scarves in many colors. What's her favorite color?",
        "zh": "我们有很多漂亮的围巾。她最喜欢什么颜色？"
      },
      {
        "role": "Tom",
        "en": "She likes red. Can I see that red one?",
        "zh": "她喜欢红色。我能看看那条红色的吗？"
      },
      {
        "role": "Anna",
        "en": "Oh, this one is really pretty! Mom will love it!",
        "zh": "哦，这条真漂亮！妈妈一定会喜欢的！"
      },
      {
        "role": "Tom",
        "en": "Great! I'll take it. Can you wrap it as a gift, please?",
        "zh": "太好了！我要了。请帮我包装成礼物好吗？"
      }
    ]
  },
  {
    "id": 47,
    "category": "shopping",
    "title": "Buying Fruit 买水果",
    "scene": "奶奶带孙子去水果店买水果。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Grandma",
      "Leo",
      "Fruit Seller"
    ],
    "lines": [
      {
        "role": "Grandma",
        "en": "Leo, let's buy some fruit. What do you want to eat?",
        "zh": "里奥，我们买些水果吧。你想吃什么？"
      },
      {
        "role": "Leo",
        "en": "I want strawberries! They are my favorite!",
        "zh": "我要草莓！我最喜欢草莓了！"
      },
      {
        "role": "Fruit Seller",
        "en": "We have fresh strawberries today. Very sweet!",
        "zh": "我们今天有新鲜的草莓。很甜！"
      },
      {
        "role": "Grandma",
        "en": "How much are the strawberries?",
        "zh": "草莓多少钱？"
      },
      {
        "role": "Fruit Seller",
        "en": "Thirty yuan a box. They just arrived this morning.",
        "zh": "三十元一盒。今天早上刚到的。"
      },
      {
        "role": "Leo",
        "en": "Grandma, can we also get some oranges?",
        "zh": "奶奶，我们也能买些橙子吗？"
      },
      {
        "role": "Fruit Seller",
        "en": "The oranges are ten yuan a kilo. Very juicy!",
        "zh": "橙子十元一公斤。非常多汁！"
      },
      {
        "role": "Grandma",
        "en": "Give us one box of strawberries and two kilos of oranges.",
        "zh": "给我们一盒草莓和两公斤橙子。"
      },
      {
        "role": "Fruit Seller",
        "en": "That's fifty yuan altogether. Would you like a bag?",
        "zh": "一共五十元。需要袋子吗？"
      },
      {
        "role": "Leo",
        "en": "Thank you! I can't wait to eat the strawberries!",
        "zh": "谢谢！我等不及要吃草莓了！"
      }
    ]
  },
  {
    "id": 48,
    "category": "shopping",
    "title": "Buying Snacks 买零食",
    "scene": "放学后两个同学去小卖部买零食。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Amy",
      "Ben",
      "Shop Owner"
    ],
    "lines": [
      {
        "role": "Amy",
        "en": "Ben, I'm so hungry! Let's go to the snack shop.",
        "zh": "本，我好饿！我们去小卖部吧。"
      },
      {
        "role": "Ben",
        "en": "Good idea! I have some pocket money today.",
        "zh": "好主意！我今天有零花钱。"
      },
      {
        "role": "Amy",
        "en": "Hello! Do you have any chocolate bars?",
        "zh": "你好！你们有巧克力棒吗？"
      },
      {
        "role": "Shop Owner",
        "en": "Yes, we have milk chocolate and dark chocolate.",
        "zh": "有的，有牛奶巧克力和黑巧克力。"
      },
      {
        "role": "Ben",
        "en": "I want a bag of potato chips, please.",
        "zh": "我要一袋薯片。"
      },
      {
        "role": "Shop Owner",
        "en": "We have BBQ flavor and sour cream flavor.",
        "zh": "我们有烧烤味和酸奶油味的。"
      },
      {
        "role": "Ben",
        "en": "BBQ flavor, please! And a bottle of cola.",
        "zh": "请给我烧烤味的！还有一瓶可乐。"
      },
      {
        "role": "Amy",
        "en": "I'll take two chocolate bars and a pack of cookies.",
        "zh": "我要两根巧克力棒和一包饼干。"
      },
      {
        "role": "Shop Owner",
        "en": "That's twenty-three yuan in total.",
        "zh": "一共二十三元。"
      },
      {
        "role": "Amy",
        "en": "Let's split it. You pay twelve and I'll pay eleven. Deal?",
        "zh": "我们平分吧。你付十二，我付十一。说定了？"
      }
    ]
  },
  {
    "id": 49,
    "category": "shopping",
    "title": "At the Vegetable Market 菜市场",
    "scene": "妈妈带女儿去菜市场买菜。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mom",
      "Sophie",
      "Vendor"
    ],
    "lines": [
      {
        "role": "Mom",
        "en": "Sophie, come with Mom to the market. We need vegetables for dinner.",
        "zh": "苏菲，跟妈妈去菜市场。我们需要买些菜做晚饭。"
      },
      {
        "role": "Sophie",
        "en": "OK! What are we going to cook tonight?",
        "zh": "好的！我们今晚做什么菜？"
      },
      {
        "role": "Mom",
        "en": "I'm thinking of making tomato and egg stir-fry.",
        "zh": "我在想做番茄炒蛋。"
      },
      {
        "role": "Vendor",
        "en": "Fresh tomatoes! Very cheap today! Two yuan a kilo!",
        "zh": "新鲜番茄！今天很便宜！两元一公斤！"
      },
      {
        "role": "Mom",
        "en": "Good! I'll take two kilos of tomatoes.",
        "zh": "好！我要两公斤番茄。"
      },
      {
        "role": "Sophie",
        "en": "Mom, can we also buy some green vegetables?",
        "zh": "妈妈，我们也能买些绿叶菜吗？"
      },
      {
        "role": "Vendor",
        "en": "Yes! This broccoli is very fresh. Just picked this morning.",
        "zh": "可以！这个西兰花很新鲜。今天早上刚摘的。"
      },
      {
        "role": "Mom",
        "en": "OK, give me one kilo of broccoli. And some garlic, please.",
        "zh": "好的，给我一公斤西兰花。再来些蒜。"
      },
      {
        "role": "Sophie",
        "en": "The market is so lively! I like coming here with you, Mom.",
        "zh": "菜市场好热闹啊！我喜欢和你一起来，妈妈。"
      },
      {
        "role": "Mom",
        "en": "Me too, dear. Let's go home and cook a delicious dinner!",
        "zh": "我也是，亲爱的。我们回家做一顿美味的晚饭吧！"
      }
    ]
  },
  {
    "id": 50,
    "category": "shopping",
    "title": "Buying Electronics 买电子产品",
    "scene": "爸爸带儿子去电子产品店买一个学习用的平板电脑。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Dad",
      "Mike",
      "Sales Clerk"
    ],
    "lines": [
      {
        "role": "Dad",
        "en": "Hello, I'm looking for a tablet for my son. He needs it for studying.",
        "zh": "你好，我想给儿子买一个平板电脑。他学习用。"
      },
      {
        "role": "Sales Clerk",
        "en": "We have several models. What's your budget?",
        "zh": "我们有几款型号。您的预算是多少？"
      },
      {
        "role": "Dad",
        "en": "Around two thousand yuan. Something simple but good quality.",
        "zh": "大约两千元。简单一点但质量好的。"
      },
      {
        "role": "Mike",
        "en": "Dad, I also want to use it for reading and watching English videos.",
        "zh": "爸爸，我也想用它来看书和看英语视频。"
      },
      {
        "role": "Sales Clerk",
        "en": "This model is perfect. It has a big screen and good speakers.",
        "zh": "这款很合适。屏幕大，音质好。"
      },
      {
        "role": "Dad",
        "en": "How long does the battery last?",
        "zh": "电池能用多久？"
      },
      {
        "role": "Sales Clerk",
        "en": "About eight hours. That's enough for a full day of study.",
        "zh": "大约八小时。足够学一整天了。"
      },
      {
        "role": "Mike",
        "en": "Can I try it? I want to see how it feels.",
        "zh": "我能试试吗？我想感受一下。"
      },
      {
        "role": "Sales Clerk",
        "en": "Of course! Here, you can play with this display model.",
        "zh": "当然可以！来，您可以试试这个展示机。"
      },
      {
        "role": "Dad",
        "en": "It looks nice. We'll take this one. Does it come with a case?",
        "zh": "看起来不错。我们买这款。有送保护壳吗？"
      }
    ]
  },
  {
    "id": 51,
    "category": "shopping",
    "title": "Returning Goods 退换货",
    "scene": "Emma发现买的衣服尺码不合适，去退换。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Emma",
      "Shop Assistant"
    ],
    "lines": [
      {
        "role": "Emma",
        "en": "Excuse me, I bought this shirt here last week.",
        "zh": "打扰一下，我上周在这里买了这件衬衫。"
      },
      {
        "role": "Shop Assistant",
        "en": "Is there a problem with it?",
        "zh": "有什么问题吗？"
      },
      {
        "role": "Emma",
        "en": "It's too small for me. Can I exchange it for a larger size?",
        "zh": "太小了。我能换一件大一号的吗？"
      },
      {
        "role": "Shop Assistant",
        "en": "Of course. Do you have the receipt?",
        "zh": "当然可以。您有收据吗？"
      },
      {
        "role": "Emma",
        "en": "Yes, here is the receipt. I haven't worn it. The tags are still on.",
        "zh": "有的，这是收据。我没穿过。标签还在。"
      },
      {
        "role": "Shop Assistant",
        "en": "Great! Let me check if we have the same shirt in a larger size.",
        "zh": "太好了！让我看看有没有同款大一号的。"
      },
      {
        "role": "Emma",
        "en": "Thank you! I really like the design of this shirt.",
        "zh": "谢谢！我真的很喜欢这件衬衫的款式。"
      },
      {
        "role": "Shop Assistant",
        "en": "Here it is! Size large. Would you like to try it on?",
        "zh": "找到了！大号的。您想试穿吗？"
      },
      {
        "role": "Emma",
        "en": "Yes, please... It fits perfectly this time!",
        "zh": "好的，请……这次非常合身！"
      },
      {
        "role": "Shop Assistant",
        "en": "Wonderful! I'll process the exchange for you right away.",
        "zh": "太好了！我马上帮您办理换货。"
      }
    ]
  },
  {
    "id": 52,
    "category": "shopping",
    "title": "Comparing Prices 比价",
    "scene": "两个同学在商店里比较两件商品的价格。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Lucy",
      "Ryan"
    ],
    "lines": [
      {
        "role": "Lucy",
        "en": "Ryan, look at these two backpacks. Which one do you think is better?",
        "zh": "瑞安，看这两个书包。你觉得哪个更好？"
      },
      {
        "role": "Ryan",
        "en": "The blue one looks nice. How much is it?",
        "zh": "蓝色的看起来不错。多少钱？"
      },
      {
        "role": "Lucy",
        "en": "It's one hundred and fifty yuan. The red one is only eighty yuan.",
        "zh": "一百五十元。红色的只要八十元。"
      },
      {
        "role": "Ryan",
        "en": "That's a big difference! Why is the blue one so expensive?",
        "zh": "差好多！为什么蓝色的那么贵？"
      },
      {
        "role": "Lucy",
        "en": "It says it's waterproof and has more pockets.",
        "zh": "上面说它是防水的，而且口袋更多。"
      },
      {
        "role": "Ryan",
        "en": "That's useful! Does the red one have those features?",
        "zh": "很实用！红色的有这些功能吗？"
      },
      {
        "role": "Lucy",
        "en": "No, it doesn't. But I don't really need a waterproof bag.",
        "zh": "没有。但我不太需要防水的包。"
      },
      {
        "role": "Ryan",
        "en": "Then the red one is a better deal for you!",
        "zh": "那红色的对你来说更划算！"
      },
      {
        "role": "Lucy",
        "en": "You're right! I'll go with the red one and save some money.",
        "zh": "你说得对！我选红色的，还能省些钱。"
      },
      {
        "role": "Ryan",
        "en": "Smart choice! You can use the money you saved to buy some stickers.",
        "zh": "明智的选择！省下的钱可以买些贴纸。"
      }
    ]
  },
  {
    "id": 53,
    "category": "shopping",
    "title": "Bargaining 讨价还价",
    "scene": "在夜市上，顾客和摊主讨价还价。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Lily",
      "Vendor"
    ],
    "lines": [
      {
        "role": "Lily",
        "en": "Excuse me, how much is this hat?",
        "zh": "打扰一下，这顶帽子多少钱？"
      },
      {
        "role": "Vendor",
        "en": "It's forty yuan. Very good quality!",
        "zh": "四十元。质量很好！"
      },
      {
        "role": "Lily",
        "en": "That's a bit expensive. Can you make it cheaper?",
        "zh": "有点贵。能便宜一些吗？"
      },
      {
        "role": "Vendor",
        "en": "How about thirty-five yuan? That's my best price.",
        "zh": "三十五元怎么样？这是最低价了。"
      },
      {
        "role": "Lily",
        "en": "Hmm, how about twenty-five yuan? I'll buy it right now.",
        "zh": "嗯，二十五元行吗？我现在就买。"
      },
      {
        "role": "Vendor",
        "en": "Twenty-five is too low. I can do thirty.",
        "zh": "二十五太低了。三十元可以。"
      },
      {
        "role": "Lily",
        "en": "What if I buy two hats? Can you give me a better deal?",
        "zh": "如果我买两顶呢？能再优惠些吗？"
      },
      {
        "role": "Vendor",
        "en": "OK! If you buy two, I'll give them to you for fifty yuan total.",
        "zh": "好的！如果你买两顶，总共五十元给你。"
      },
      {
        "role": "Lily",
        "en": "That's a deal! I'll take the blue one and the pink one.",
        "zh": "成交！我要蓝色的和粉色的。"
      },
      {
        "role": "Vendor",
        "en": "Good choice! Here you go. Come back anytime!",
        "zh": "好眼光！给你。随时欢迎再来！"
      }
    ]
  },
  {
    "id": 54,
    "category": "shopping",
    "title": "Online Shopping 网购",
    "scene": "妈妈教女儿怎么在网上买东西。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mom",
      "Amy"
    ],
    "lines": [
      {
        "role": "Amy",
        "en": "Mom, can I buy a book on the internet?",
        "zh": "妈妈，我能在网上买书吗？"
      },
      {
        "role": "Mom",
        "en": "Sure! Do you know which book you want?",
        "zh": "当然！你知道想买哪本书吗？"
      },
      {
        "role": "Amy",
        "en": "Yes, I want 'Harry Potter'. My friend recommended it.",
        "zh": "知道，我想要《哈利·波特》。我朋友推荐的。"
      },
      {
        "role": "Mom",
        "en": "OK, let me show you. First, open the shopping app.",
        "zh": "好的，我教你看。首先，打开购物软件。"
      },
      {
        "role": "Amy",
        "en": "I see the search bar. Should I type the book name here?",
        "zh": "我看到搜索栏了。我应该在这里输入书名吗？"
      },
      {
        "role": "Mom",
        "en": "Yes! Type 'Harry Potter' and press the search button.",
        "zh": "对！输入\"Harry Potter\"然后按搜索按钮。"
      },
      {
        "role": "Amy",
        "en": "Wow, there are so many results! Which one should I choose?",
        "zh": "哇，好多结果！我该选哪个？"
      },
      {
        "role": "Mom",
        "en": "Look at the reviews and the price. This one has good reviews.",
        "zh": "看看评价和价格。这个评价很好。"
      },
      {
        "role": "Amy",
        "en": "OK, I'll choose this one. How do I pay?",
        "zh": "好的，我选这个。怎么付款？"
      },
      {
        "role": "Mom",
        "en": "Click 'Buy Now' and then choose your payment method. It's easy!",
        "zh": "点\"立即购买\"，然后选择付款方式。很简单的！"
      }
    ]
  },
  {
    "id": 55,
    "category": "shopping",
    "title": "Buying a Birthday Cake 买生日蛋糕",
    "scene": "Tom去蛋糕店给妈妈订生日蛋糕。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Baker"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Hello! I want to order a birthday cake, please.",
        "zh": "你好！我想订一个生日蛋糕。"
      },
      {
        "role": "Baker",
        "en": "Of course! When do you need it?",
        "zh": "当然！您什么时候需要？"
      },
      {
        "role": "Tom",
        "en": "This Saturday. It's for my mom's birthday.",
        "zh": "这个周六。是我妈妈的生日。"
      },
      {
        "role": "Baker",
        "en": "How nice! What flavor would you like?",
        "zh": "真好！您想要什么口味？"
      },
      {
        "role": "Tom",
        "en": "Mom loves chocolate. Can I have a chocolate cake?",
        "zh": "妈妈喜欢巧克力。能要巧克力蛋糕吗？"
      },
      {
        "role": "Baker",
        "en": "Absolutely! What size? For how many people?",
        "zh": "当然！要多大的？几个人吃？"
      },
      {
        "role": "Tom",
        "en": "For about eight people. A medium size, please.",
        "zh": "大约八个人。请要中号的。"
      },
      {
        "role": "Baker",
        "en": "Do you want any words written on the cake?",
        "zh": "蛋糕上要写什么字吗？"
      },
      {
        "role": "Tom",
        "en": "Yes, please write 'Happy Birthday, Mom! Love you!'",
        "zh": "是的，请写\"妈妈生日快乐！爱你！\""
      },
      {
        "role": "Baker",
        "en": "No problem! It will be ready by Saturday morning. That's one hundred and twenty yuan.",
        "zh": "没问题！周六早上能做好。一百二十元。"
      }
    ]
  },
  {
    "id": 56,
    "category": "shopping",
    "title": "Buying Toys 买玩具",
    "scene": "爸爸带儿子去玩具店买玩具。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Jack",
      "Dad",
      "Toy Seller"
    ],
    "lines": [
      {
        "role": "Jack",
        "en": "Dad, look at that robot! It can walk and talk!",
        "zh": "爸爸，看那个机器人！它会走路还会说话！"
      },
      {
        "role": "Dad",
        "en": "That looks cool. How much is it?",
        "zh": "看起来很酷。多少钱？"
      },
      {
        "role": "Toy Seller",
        "en": "The robot is one hundred and fifty yuan. It's very popular.",
        "zh": "机器人一百五十元。非常受欢迎。"
      },
      {
        "role": "Dad",
        "en": "That's a bit expensive. Jack, didn't you say you wanted a puzzle?",
        "zh": "有点贵。杰克，你不是说想要拼图吗？"
      },
      {
        "role": "Jack",
        "en": "Oh right! I also want a puzzle. Do you have animal puzzles?",
        "zh": "哦对了！我也想要拼图。你们有动物拼图吗？"
      },
      {
        "role": "Toy Seller",
        "en": "Yes! We have a beautiful panda puzzle. Five hundred pieces.",
        "zh": "有的！我们有一个很漂亮的熊猫拼图。五百片。"
      },
      {
        "role": "Jack",
        "en": "That sounds fun! How much is the puzzle?",
        "zh": "听起来很有趣！拼图多少钱？"
      },
      {
        "role": "Toy Seller",
        "en": "The puzzle is only forty-five yuan. And it comes with glue.",
        "zh": "拼图只要四十五元。还送胶水。"
      },
      {
        "role": "Dad",
        "en": "Great! Let's get the puzzle today. You can save for the robot.",
        "zh": "太好了！我们今天买拼图。你可以攒钱买机器人。"
      },
      {
        "role": "Jack",
        "en": "OK, Dad! The puzzle is a good choice too. I love pandas!",
        "zh": "好的，爸爸！拼图也是好选择。我喜欢熊猫！"
      }
    ]
  },
  {
    "id": 57,
    "category": "shopping",
    "title": "Buying Sports Equipment 买运动装备",
    "scene": "Mike去体育用品店买篮球和护膝。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mike",
      "Shop Assistant"
    ],
    "lines": [
      {
        "role": "Mike",
        "en": "Excuse me, I want to buy a basketball.",
        "zh": "打扰一下，我想买一个篮球。"
      },
      {
        "role": "Shop Assistant",
        "en": "Sure! Are you playing indoors or outdoors?",
        "zh": "当然！你是在室内还是室外打？"
      },
      {
        "role": "Mike",
        "en": "Mostly outdoors, on the school playground.",
        "zh": "大多数时候在室外，在学校操场上。"
      },
      {
        "role": "Shop Assistant",
        "en": "Then I recommend this rubber basketball. It's very durable.",
        "zh": "那我推荐这款橡胶篮球。很耐用。"
      },
      {
        "role": "Mike",
        "en": "That looks good. How much is it?",
        "zh": "看起来不错。多少钱？"
      },
      {
        "role": "Shop Assistant",
        "en": "Eighty-nine yuan. Do you need anything else?",
        "zh": "八十九元。您还需要别的吗？"
      },
      {
        "role": "Mike",
        "en": "Yes, I also need knee pads. I hurt my knee last week.",
        "zh": "是的，我还需要护膝。我上周伤了膝盖。"
      },
      {
        "role": "Shop Assistant",
        "en": "Oh, I'm sorry to hear that. These knee pads are very protective.",
        "zh": "哦，听到这个我很遗憾。这些护膝保护性很好。"
      },
      {
        "role": "Mike",
        "en": "Good! I'll take a pair. How much are they?",
        "zh": "好！我要一副。多少钱？"
      },
      {
        "role": "Shop Assistant",
        "en": "Thirty-five yuan. Total is one hundred and twenty-four yuan.",
        "zh": "三十五元。总共一百二十四元。"
      }
    ]
  },
  {
    "id": 58,
    "category": "shopping",
    "title": "Buying Medicine 买药",
    "scene": "在药店买感冒药。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Customer",
      "Pharmacist"
    ],
    "lines": [
      {
        "role": "Customer",
        "en": "Excuse me, I have a bad cold. Can you help me find some medicine?",
        "zh": "打扰一下，我感冒很严重。能帮我找一些药吗？"
      },
      {
        "role": "Pharmacist",
        "en": "Of course. Do you have a fever or just a runny nose?",
        "zh": "当然可以。你发烧了吗，还是只是流鼻涕？"
      },
      {
        "role": "Customer",
        "en": "I have a sore throat and a cough. No fever.",
        "zh": "我喉咙痛，还咳嗽。没有发烧。"
      },
      {
        "role": "Pharmacist",
        "en": "I recommend this cold medicine. Take one pill three times a day after meals.",
        "zh": "我推荐这种感冒药。每天三次，饭后各吃一粒。"
      },
      {
        "role": "Customer",
        "en": "How much is it? Is it safe for children?",
        "zh": "多少钱？小孩子可以吃吗？"
      },
      {
        "role": "Pharmacist",
        "en": "It is twenty-eight yuan. This one is for adults. For children, I suggest this syrup.",
        "zh": "二十八元。这个是成人吃的。如果是小孩子，我建议买这种糖浆。"
      },
      {
        "role": "Customer",
        "en": "Good. I will take both. Can I pay by phone?",
        "zh": "好的，两个我都要。可以手机支付吗？"
      },
      {
        "role": "Pharmacist",
        "en": "Yes, you can scan the QR code here. Remember to drink more hot water and get plenty of rest.",
        "zh": "可以，您可以扫这里的二维码。记得多喝热水，好好休息。"
      },
      {
        "role": "Customer",
        "en": "Thank you very much for your help. I hope I get well soon.",
        "zh": "非常感谢你的帮助。希望我早日康复。"
      }
    ]
  },
  {
    "id": 59,
    "category": "shopping",
    "title": "At the Bookstore 书店",
    "scene": "Tom去书店买一本字典和一本故事书。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Bookshop Owner"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Hello, I'm looking for an English-Chinese dictionary.",
        "zh": "你好，我在找一本英汉词典。"
      },
      {
        "role": "Bookshop Owner",
        "en": "We have several dictionaries. Which grade are you in?",
        "zh": "我们有几种词典。你上几年级？"
      },
      {
        "role": "Tom",
        "en": "I'm in fifth grade. I need one for primary school students.",
        "zh": "我上五年级。我需要一本适合小学生的。"
      },
      {
        "role": "Bookshop Owner",
        "en": "This one is perfect for you. It has simple explanations.",
        "zh": "这本很适合你。解释很简单明了。"
      },
      {
        "role": "Tom",
        "en": "How much is it? Can I look inside first?",
        "zh": "多少钱？我能先看看里面吗？"
      },
      {
        "role": "Bookshop Owner",
        "en": "Of course! It's thirty-eight yuan. Very affordable.",
        "zh": "当然！三十八元。很实惠。"
      },
      {
        "role": "Tom",
        "en": "I like it! I'll take it. Do you have any books about space?",
        "zh": "我喜欢！我要了。你们有关于太空的书吗？"
      },
      {
        "role": "Bookshop Owner",
        "en": "Yes! 'The Solar System' is a great book. Full of pictures.",
        "zh": "有的！《太阳系》是一本很棒的书。有很多图片。"
      },
      {
        "role": "Tom",
        "en": "That sounds perfect! I love learning about planets.",
        "zh": "听起来太完美了！我喜欢学习关于行星的知识。"
      },
      {
        "role": "Bookshop Owner",
        "en": "It's twenty-five yuan. Total is sixty-three yuan.",
        "zh": "二十五元。总共六十三元。"
      }
    ]
  },
  {
    "id": 60,
    "category": "shopping",
    "title": "Buying a Phone Card 充话费",
    "scene": "在便利店充值手机话费。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Customer",
      "Shop Assistant"
    ],
    "lines": [
      {
        "role": "Customer",
        "en": "Hi, I need to top up my phone. Can I do that here?",
        "zh": "你好，我需要给手机充值。这里可以充吗？"
      },
      {
        "role": "Shop Assistant",
        "en": "Yes, of course. Which phone company are you with?",
        "zh": "当然可以。您用的是什么运营商？"
      },
      {
        "role": "Customer",
        "en": "I am with China Mobile. My number is 1-3-8-1-2-3-4-5-6-7-8.",
        "zh": "我是中国移动的。我的号码是13812345678。"
      },
      {
        "role": "Shop Assistant",
        "en": "How much would you like to top up? We have cards for thirty, fifty, and one hundred yuan.",
        "zh": "您想充多少？我们有三十、五十和一百元的。"
      },
      {
        "role": "Customer",
        "en": "Fifty yuan, please. Can I also buy a data plan?",
        "zh": "请充五十元。我还可以办一个流量套餐吗？"
      },
      {
        "role": "Shop Assistant",
        "en": "Sure. For fifty yuan, you can get ten gigabytes of data valid for one month.",
        "zh": "可以的。五十元可以买十个G的流量，有效期一个月。"
      },
      {
        "role": "Customer",
        "en": "That sounds good. I will take it. How much is the total?",
        "zh": "听起来不错。我要了。总共多少钱？"
      },
      {
        "role": "Shop Assistant",
        "en": "The top-up is fifty yuan and the data plan is thirty yuan. That is eighty yuan in total.",
        "zh": "充值五十元，流量套餐三十元。总共八十元。"
      },
      {
        "role": "Customer",
        "en": "Here is one hundred yuan. Keep the change. Thanks!",
        "zh": "这是一百元。不用找了。谢谢！"
      }
    ]
  },
  {
    "id": 61,
    "category": "travel",
    "title": "Airport Check-in 机场值机",
    "scene": "一家人到机场办理登机手续。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Dad",
      "Staff"
    ],
    "lines": [
      {
        "role": "Dad",
        "en": "Hello, we'd like to check in for our flight to Beijing, please.",
        "zh": "你好，我们想办理去北京的航班值机。"
      },
      {
        "role": "Staff",
        "en": "May I see your passports and tickets, please?",
        "zh": "请出示您的护照和机票。"
      },
      {
        "role": "Dad",
        "en": "Here you go. We have three people in our group.",
        "zh": "给你。我们一行三人。"
      },
      {
        "role": "Staff",
        "en": "Do you have any luggage to check in?",
        "zh": "您有行李要托运吗？"
      },
      {
        "role": "Dad",
        "en": "Yes, we have two big suitcases. Are they within the weight limit?",
        "zh": "有的，我们有两个大行李箱。在重量限制内吗？"
      },
      {
        "role": "Staff",
        "en": "Let me weigh them. Yes, they are both fine. Under twenty-three kilos each.",
        "zh": "让我称一下。是的，都合格。每个都在二十三公斤以下。"
      },
      {
        "role": "Dad",
        "en": "That's good to hear. Can we have window seats?",
        "zh": "太好了。我们可以要靠窗的座位吗？"
      },
      {
        "role": "Staff",
        "en": "I'll try my best. Here are your boarding passes. Gate number twelve.",
        "zh": "我尽量。这是您的登机牌。十二号登机口。"
      },
      {
        "role": "Dad",
        "en": "What time should we be at the gate?",
        "zh": "我们应该什么时候到登机口？"
      },
      {
        "role": "Staff",
        "en": "Please arrive at the gate at least thirty minutes before departure. Have a nice trip!",
        "zh": "请在起飞前至少三十分钟到达登机口。祝您旅途愉快！"
      }
    ]
  },
  {
    "id": 62,
    "category": "travel",
    "title": "Security Check 海关安检",
    "scene": "在机场过安检，工作人员指导旅客。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Officer",
      "Mom",
      "Tom"
    ],
    "lines": [
      {
        "role": "Officer",
        "en": "Good morning. Please put your bags on the conveyor belt.",
        "zh": "早上好。请把您的包放在传送带上。"
      },
      {
        "role": "Mom",
        "en": "OK. Do I need to take out my laptop?",
        "zh": "好的。我需要把笔记本电脑拿出来吗？"
      },
      {
        "role": "Officer",
        "en": "Yes, please put all electronic devices in the separate tray.",
        "zh": "是的，请把所有电子设备放在单独的托盘里。"
      },
      {
        "role": "Tom",
        "en": "What about my water bottle?",
        "zh": "我的水瓶怎么办？"
      },
      {
        "role": "Officer",
        "en": "I'm sorry, but you can't bring liquids through security.",
        "zh": "很抱歉，您不能携带液体通过安检。"
      },
      {
        "role": "Mom",
        "en": "Tom, you need to drink the water or throw the bottle away.",
        "zh": "汤姆，你要么把水喝了，要么把瓶子扔掉。"
      },
      {
        "role": "Tom",
        "en": "OK, I'll drink it now. Can I keep the empty bottle?",
        "zh": "好的，我现在喝掉。空瓶子可以留着吗？"
      },
      {
        "role": "Officer",
        "en": "Yes, that's fine. Now please walk through the scanner.",
        "zh": "可以。现在请走过安检门。"
      },
      {
        "role": "Mom",
        "en": "Is everything OK?",
        "zh": "都好吗？"
      },
      {
        "role": "Officer",
        "en": "All clear! You're good to go. Have a safe flight!",
        "zh": "全部通过！你们可以走了。祝飞行安全！"
      }
    ]
  },
  {
    "id": 63,
    "category": "travel",
    "title": "Hotel Check-in 酒店入住",
    "scene": "一家人到酒店前台办理入住。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Dad",
      "Receptionist"
    ],
    "lines": [
      {
        "role": "Dad",
        "en": "Hello, I have a reservation under the name Wang. Two rooms for three nights.",
        "zh": "你好，我预订了房间，姓王。两间房，住三晚。"
      },
      {
        "role": "Receptionist",
        "en": "Let me check... Yes, I can see your reservation. May I have your ID?",
        "zh": "让我查一下……是的，我看到了您的预订。请出示您的身份证。"
      },
      {
        "role": "Dad",
        "en": "Here is my ID. Are the rooms on the same floor?",
        "zh": "这是我的身份证。两个房间在同一层吗？"
      },
      {
        "role": "Receptionist",
        "en": "Yes, both rooms are on the fifth floor, next to each other.",
        "zh": "是的，两个房间都在五楼，紧挨着。"
      },
      {
        "role": "Dad",
        "en": "That's perfect. Does the hotel have breakfast included?",
        "zh": "太好了。酒店包含早餐吗？"
      },
      {
        "role": "Receptionist",
        "en": "Yes, breakfast is served from seven to nine on the second floor.",
        "zh": "是的，早餐在二楼，七点到九点供应。"
      },
      {
        "role": "Dad",
        "en": "Great! What time is check-out?",
        "zh": "太好了！退房时间是几点？"
      },
      {
        "role": "Receptionist",
        "en": "Check-out is at noon. Here are your room keys. Enjoy your stay!",
        "zh": "退房时间是中午。这是您的房卡。祝您入住愉快！"
      },
      {
        "role": "Dad",
        "en": "Thank you! Is there free Wi-Fi in the rooms?",
        "zh": "谢谢！房间有免费Wi-Fi吗？"
      },
      {
        "role": "Receptionist",
        "en": "Yes, the password is on the back of the room card. Enjoy!",
        "zh": "有的，密码在房卡背面。祝您愉快！"
      }
    ]
  },
  {
    "id": 64,
    "category": "travel",
    "title": "Hotel Check-out 酒店退房",
    "scene": "旅行结束，一家人到酒店前台退房。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mom",
      "Receptionist"
    ],
    "lines": [
      {
        "role": "Mom",
        "en": "Hello, we'd like to check out. We're in rooms five-oh-one and five-oh-two.",
        "zh": "你好，我们要退房。我们住五零一和五零二房间。"
      },
      {
        "role": "Receptionist",
        "en": "Certainly! Let me check your account. Did you have anything from the minibar?",
        "zh": "好的！让我查一下您的账单。您用过小冰箱里的东西吗？"
      },
      {
        "role": "Mom",
        "en": "No, we didn't. We ate all our meals outside.",
        "zh": "没有。我们都在外面吃的。"
      },
      {
        "role": "Receptionist",
        "en": "OK. Your total is one thousand two hundred yuan for three nights.",
        "zh": "好的。三晚总共一千二百元。"
      },
      {
        "role": "Mom",
        "en": "That matches what we booked. Can I pay by card?",
        "zh": "和我们预订的一致。可以刷卡吗？"
      },
      {
        "role": "Receptionist",
        "en": "Of course. Please put your card in the reader.",
        "zh": "当然。请把卡放在读卡器上。"
      },
      {
        "role": "Mom",
        "en": "Here you go. Can I also leave my luggage here for a few hours?",
        "zh": "给你。我能把行李先寄存在这里几个小时吗？"
      },
      {
        "role": "Receptionist",
        "en": "Yes, we can store your luggage. Your flight isn't until this evening?",
        "zh": "可以，我们可以帮您存行李。您的航班是今晚的？"
      },
      {
        "role": "Mom",
        "en": "That's right. We'll come back around four o'clock.",
        "zh": "对。我们大概四点回来取。"
      },
      {
        "role": "Receptionist",
        "en": "No problem! Here is your receipt. Have a safe trip home!",
        "zh": "没问题！这是您的收据。祝您一路平安！"
      }
    ]
  },
  {
    "id": 65,
    "category": "travel",
    "title": "Asking for Directions 问路",
    "scene": "游客在街上迷路了，向路人问路。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tourist",
      "Local"
    ],
    "lines": [
      {
        "role": "Tourist",
        "en": "Excuse me, can you help me? I'm looking for the train station.",
        "zh": "打扰一下，您能帮我吗？我在找火车站。"
      },
      {
        "role": "Local",
        "en": "Sure! Walk straight ahead for two blocks.",
        "zh": "当然！往前直走两个街区。"
      },
      {
        "role": "Tourist",
        "en": "Two blocks? And then which way?",
        "zh": "两个街区？然后往哪边走？"
      },
      {
        "role": "Local",
        "en": "Then turn left at the traffic light. You'll see it on your right.",
        "zh": "然后在红绿灯处左转。你会在右边看到它。"
      },
      {
        "role": "Tourist",
        "en": "Is it far from here? Can I walk there?",
        "zh": "离这里远吗？我能走过去吗？"
      },
      {
        "role": "Local",
        "en": "It's about a fifteen-minute walk. Not too far.",
        "zh": "大约走十五分钟。不算远。"
      },
      {
        "role": "Tourist",
        "en": "Are there any landmarks I should look for?",
        "zh": "有什么标志性的建筑我应该注意的吗？"
      },
      {
        "role": "Local",
        "en": "Yes, you'll pass a big park on your left. The station is right after it.",
        "zh": "有的，你会经过左边一个大公园。火车站就在公园后面。"
      },
      {
        "role": "Tourist",
        "en": "That's very clear. Thank you so much for your help!",
        "zh": "非常清楚了。非常感谢你的帮助！"
      },
      {
        "role": "Local",
        "en": "You're welcome! Have a good trip!",
        "zh": "不客气！祝你旅途愉快！"
      }
    ]
  },
  {
    "id": 66,
    "category": "travel",
    "title": "Taking the Bus and Subway 公交地铁",
    "scene": "游客向路人询问如何乘坐公交和地铁。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Visitor",
      "Passerby"
    ],
    "lines": [
      {
        "role": "Visitor",
        "en": "Excuse me, how can I get to the museum by public transport?",
        "zh": "打扰一下，我怎么坐公共交通去博物馆？"
      },
      {
        "role": "Passerby",
        "en": "You can take bus number five or the subway.",
        "zh": "你可以坐五路公交或地铁。"
      },
      {
        "role": "Visitor",
        "en": "Which one is faster?",
        "zh": "哪个更快？"
      },
      {
        "role": "Passerby",
        "en": "The subway is faster. It takes about ten minutes.",
        "zh": "地铁更快。大约十分钟。"
      },
      {
        "role": "Visitor",
        "en": "Where is the nearest subway station?",
        "zh": "最近的地铁站在哪里？"
      },
      {
        "role": "Passerby",
        "en": "Go straight and turn right. It's about three minutes' walk.",
        "zh": "直走然后右转。大约走三分钟。"
      },
      {
        "role": "Visitor",
        "en": "Which line should I take?",
        "zh": "我应该坐哪条线？"
      },
      {
        "role": "Passerby",
        "en": "Take line two and get off at the Museum station.",
        "zh": "坐二号线，在博物馆站下车。"
      },
      {
        "role": "Visitor",
        "en": "How much is the subway ticket?",
        "zh": "地铁票多少钱？"
      },
      {
        "role": "Passerby",
        "en": "It's four yuan. You can buy a ticket at the machine or use your phone.",
        "zh": "四元。你可以在机器上买票或者用手机。"
      }
    ]
  },
  {
    "id": 67,
    "category": "travel",
    "title": "Taking a Taxi 坐出租车",
    "scene": "旅客在酒店门口打车去景点。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Passenger",
      "Driver"
    ],
    "lines": [
      {
        "role": "Passenger",
        "en": "Taxi! Can you take me to the Summer Palace, please?",
        "zh": "出租车！能送我去颐和园吗？"
      },
      {
        "role": "Driver",
        "en": "Sure! Please get in and fasten your seatbelt.",
        "zh": "当然！请上车，系好安全带。"
      },
      {
        "role": "Passenger",
        "en": "How long will it take to get there?",
        "zh": "到那里需要多长时间？"
      },
      {
        "role": "Driver",
        "en": "About thirty minutes, depending on the traffic.",
        "zh": "大约三十分钟，取决于交通情况。"
      },
      {
        "role": "Passenger",
        "en": "Is it faster to take the highway?",
        "zh": "走高速公路会更快吗？"
      },
      {
        "role": "Driver",
        "en": "Yes, but the toll fee is a little extra.",
        "zh": "是的，但过路费会稍微贵一点。"
      },
      {
        "role": "Passenger",
        "en": "That's fine. Let's take the highway. I'm in a bit of a hurry.",
        "zh": "没关系。我们走高速吧。我有点赶时间。"
      },
      {
        "role": "Driver",
        "en": "No problem! You can enjoy the view along the way.",
        "zh": "没问题！您可以欣赏沿途的风景。"
      },
      {
        "role": "Passenger",
        "en": "The weather is beautiful today. Perfect for sightseeing.",
        "zh": "今天天气真好。非常适合观光。"
      },
      {
        "role": "Driver",
        "en": "Here we are! The Summer Palace. That'll be forty-five yuan.",
        "zh": "到了！颐和园。一共四十五元。"
      }
    ]
  },
  {
    "id": 68,
    "category": "travel",
    "title": "At the Train Station 火车站",
    "scene": "一家人到火车站买票准备去旅行。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Dad",
      "Ticket Agent"
    ],
    "lines": [
      {
        "role": "Dad",
        "en": "Hello, I'd like to buy three tickets to Shanghai, please.",
        "zh": "你好，我想买三张去上海的票。"
      },
      {
        "role": "Ticket Agent",
        "en": "For today? What time would you like to leave?",
        "zh": "今天的吗？您想几点出发？"
      },
      {
        "role": "Dad",
        "en": "In the morning, if possible. Around nine o'clock.",
        "zh": "如果可以的话，上午的。大概九点左右。"
      },
      {
        "role": "Ticket Agent",
        "en": "We have a train at nine fifteen. Second class seats are available.",
        "zh": "我们九点十五有一班。二等座有票。"
      },
      {
        "role": "Dad",
        "en": "How long is the ride?",
        "zh": "坐多久？"
      },
      {
        "role": "Ticket Agent",
        "en": "About five hours. You'll arrive around two in the afternoon.",
        "zh": "大约五个小时。您下午两点左右到。"
      },
      {
        "role": "Dad",
        "en": "That works for us. How much are the tickets?",
        "zh": "可以。票多少钱？"
      },
      {
        "role": "Ticket Agent",
        "en": "Five hundred and fifty yuan each. Total is one thousand six hundred and fifty yuan.",
        "zh": "每张五百五十元。总共一千六百五十元。"
      },
      {
        "role": "Dad",
        "en": "Here you go. Which platform do we go to?",
        "zh": "给你。我们去哪个站台？"
      },
      {
        "role": "Ticket Agent",
        "en": "Platform eight. Please arrive at the platform fifteen minutes early.",
        "zh": "八号站台。请提前十五分钟到站台。"
      }
    ]
  },
  {
    "id": 69,
    "category": "travel",
    "title": "Buying Attraction Tickets 景点买票",
    "scene": "一家人到景点售票处买门票。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mom",
      "Ticket Seller"
    ],
    "lines": [
      {
        "role": "Mom",
        "en": "Hello, two adult tickets and one child ticket, please.",
        "zh": "你好，请给我两张成人票和一张儿童票。"
      },
      {
        "role": "Ticket Seller",
        "en": "Sure! Is the child over one point two meters tall?",
        "zh": "好的！孩子超过一米二了吗？"
      },
      {
        "role": "Mom",
        "en": "No, he's one point one meters. He's eight years old.",
        "zh": "没有，他一米一。他八岁。"
      },
      {
        "role": "Ticket Seller",
        "en": "Great! Children under one point two meters get in for free.",
        "zh": "太好了！一米二以下的儿童免费入园。"
      },
      {
        "role": "Mom",
        "en": "That's wonderful! How much are the adult tickets?",
        "zh": "太好了！成人票多少钱？"
      },
      {
        "role": "Ticket Seller",
        "en": "They're sixty yuan each. So one hundred and twenty yuan for both.",
        "zh": "每张六十元。两张一共一百二十元。"
      },
      {
        "role": "Mom",
        "en": "Do the tickets include the boat ride?",
        "zh": "票包含坐船吗？"
      },
      {
        "role": "Ticket Seller",
        "en": "No, the boat ride is an extra twenty yuan per person.",
        "zh": "不包含，坐船每人额外二十元。"
      },
      {
        "role": "Mom",
        "en": "OK, we'll buy the boat tickets too. Here is the money.",
        "zh": "好的，我们也买船票。这是钱。"
      },
      {
        "role": "Ticket Seller",
        "en": "Thank you! Here are your tickets. Enjoy your visit!",
        "zh": "谢谢！这是您的票。祝您游览愉快！"
      }
    ]
  },
  {
    "id": 70,
    "category": "travel",
    "title": "Tour Guide Explanation 导游讲解",
    "scene": "导游带领游客参观长城，讲解历史。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Guide",
      "Tourist"
    ],
    "lines": [
      {
        "role": "Guide",
        "en": "Welcome to the Great Wall, everyone! Please follow me.",
        "zh": "欢迎大家来到长城！请跟我来。"
      },
      {
        "role": "Tourist",
        "en": "It's so magnificent! How old is the Great Wall?",
        "zh": "太壮观了！长城有多少年历史了？"
      },
      {
        "role": "Guide",
        "en": "It has a history of over two thousand years.",
        "zh": "它有两千多年的历史。"
      },
      {
        "role": "Tourist",
        "en": "That's amazing! Why was it built?",
        "zh": "太了不起了！为什么要建长城？"
      },
      {
        "role": "Guide",
        "en": "It was built to protect the country from enemies in ancient times.",
        "zh": "在古代，它是为了保护国家免受敌人入侵而建的。"
      },
      {
        "role": "Tourist",
        "en": "How long is the Great Wall?",
        "zh": "长城有多长？"
      },
      {
        "role": "Guide",
        "en": "It's over twenty thousand kilometers long. It's the longest wall in the world.",
        "zh": "全长超过两万公里。是世界上最长的墙。"
      },
      {
        "role": "Tourist",
        "en": "Incredible! How many steps are there to the top?",
        "zh": "难以置信！到顶部有多少级台阶？"
      },
      {
        "role": "Guide",
        "en": "About one thousand steps. Take your time and enjoy the view!",
        "zh": "大约一千级。慢慢走，欣赏风景！"
      },
      {
        "role": "Tourist",
        "en": "Thank you! I can't wait to climb to the top!",
        "zh": "谢谢！我迫不及待想爬到顶了！"
      }
    ]
  },
  {
    "id": 71,
    "category": "travel",
    "title": "Taking Photos 拍照留念",
    "scene": "一家人在旅游景点拍照留念。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mom",
      "Dad",
      "Lucy"
    ],
    "lines": [
      {
        "role": "Lucy",
        "en": "Dad, can you take a photo of me in front of the fountain?",
        "zh": "爸爸，你能帮我在喷泉前拍张照吗？"
      },
      {
        "role": "Dad",
        "en": "Sure! Stand right there and smile!",
        "zh": "当然！站好，笑一笑！"
      },
      {
        "role": "Lucy",
        "en": "Wait! Let me fix my hair. OK, I'm ready!",
        "zh": "等等！我整理一下头发。好了，我准备好了！"
      },
      {
        "role": "Dad",
        "en": "One, two, three... Say cheese!",
        "zh": "一、二、三……说茄子！"
      },
      {
        "role": "Lucy",
        "en": "Cheese! Let me see! Oh, it looks great!",
        "zh": "茄子！让我看看！哦，拍得真好看！"
      },
      {
        "role": "Mom",
        "en": "Now let's take a family photo. Excuse me, could you help us?",
        "zh": "现在我们来拍全家福。打扰一下，您能帮我们拍吗？"
      },
      {
        "role": "Lucy",
        "en": "Sure, I'll take the picture! Everyone stand together!",
        "zh": "当然，我来拍！大家站在一起！"
      },
      {
        "role": "Dad",
        "en": "Move closer, Mom. Put your arm around Lucy.",
        "zh": "靠近一点，妈妈。把手搭在露西肩上。"
      },
      {
        "role": "Mom",
        "en": "Is everyone in the frame? Ready? Let's take two just in case.",
        "zh": "所有人都在画面里了吗？准备好了吗？我们拍两张以防万一。"
      },
      {
        "role": "Lucy",
        "en": "Got it! They both look perfect! What a wonderful memory!",
        "zh": "拍好了！两张都拍得很好！多美好的回忆！"
      }
    ]
  },
  {
    "id": 72,
    "category": "travel",
    "title": "At the Post Office 邮局寄信",
    "scene": "在邮局寄明信片或包裹。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Customer",
      "Clerk"
    ],
    "lines": [
      {
        "role": "Customer",
        "en": "Excuse me, I would like to send this postcard to my friend in Beijing.",
        "zh": "打扰一下，我想把这封明信片寄给北京的朋友。"
      },
      {
        "role": "Clerk",
        "en": "Sure. Let me weigh it for you. A postcard to Beijing is two yuan.",
        "zh": "好的。我帮您称一下。寄到北京的明信片是两元。"
      },
      {
        "role": "Customer",
        "en": "That is cheap. How long will it take to arrive?",
        "zh": "真便宜。大概多久能到？"
      },
      {
        "role": "Clerk",
        "en": "Usually about three to five days by regular mail.",
        "zh": "平信的话通常是三到五天。"
      },
      {
        "role": "Customer",
        "en": "I also have a small package. How much is the shipping?",
        "zh": "我还有一个小包裹。运费是多少？"
      },
      {
        "role": "Clerk",
        "en": "Where is the package going? Let me put it on the scale.",
        "zh": "包裹要寄到哪里？我放在秤上称一下。"
      },
      {
        "role": "Customer",
        "en": "It is going to Shanghai. It is a birthday gift for my cousin.",
        "zh": "寄到上海。是给我表哥的生日礼物。"
      },
      {
        "role": "Clerk",
        "en": "That will be twelve yuan by express. It will arrive in two days.",
        "zh": "快递的话是十二元。两天就能到。"
      },
      {
        "role": "Customer",
        "en": "Express please. Here is the money. Thank you for your help!",
        "zh": "那就寄快递吧。给你钱。谢谢你的帮助！"
      }
    ]
  },
  {
    "id": 73,
    "category": "travel",
    "title": "At the Park 公园休闲",
    "scene": "在公园散步、锻炼、看风景。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Lily"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "What a beautiful day! Let us go to the park this afternoon.",
        "zh": "天气真好！我们今天下午去公园吧。"
      },
      {
        "role": "Lily",
        "en": "Good idea! The park is really nice in spring. The flowers are all blooming.",
        "zh": "好主意！春天的公园特别美。花都开了。"
      },
      {
        "role": "Tom",
        "en": "I like walking around the lake. There are many fish in the water.",
        "zh": "我喜欢在湖边散步。水里有很多鱼。"
      },
      {
        "role": "Lily",
        "en": "Can we also ride bicycles? I saw a bike rental near the entrance.",
        "zh": "我们也可以骑自行车吗？我在入口附近看到有租自行车的。"
      },
      {
        "role": "Tom",
        "en": "Sure! We can ride along the path. It is very safe.",
        "zh": "当然可以！我们可以沿着小路骑。很安全的。"
      },
      {
        "role": "Lily",
        "en": "Look at those old people doing tai chi under the trees. They look so relaxed.",
        "zh": "你看那些在树下打太极的爷爷奶奶。他们看起来好放松。"
      },
      {
        "role": "Tom",
        "en": "Yes, the park is a great place to exercise and enjoy nature.",
        "zh": "是的，公园真是一个锻炼身体和享受大自然的好地方。"
      },
      {
        "role": "Lily",
        "en": "Let us bring some snacks next time and have a picnic on the grass.",
        "zh": "下次我们带些零食来，在草地上野餐吧。"
      },
      {
        "role": "Tom",
        "en": "That sounds wonderful! I cannot wait!",
        "zh": "听起来太棒了！我都等不及了！"
      }
    ]
  },
  {
    "id": 74,
    "category": "travel",
    "title": "Lost and Found 丢失物品",
    "scene": "游客在酒店发现相机丢了，去前台询问。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mr. Green",
      "Receptionist"
    ],
    "lines": [
      {
        "role": "Mr. Green",
        "en": "Hello, I think I left my camera in the restaurant this morning.",
        "zh": "你好，我觉得今天早上把相机忘在餐厅了。"
      },
      {
        "role": "Receptionist",
        "en": "What does the camera look like?",
        "zh": "相机长什么样？"
      },
      {
        "role": "Mr. Green",
        "en": "It's a black digital camera. It has a red strap.",
        "zh": "是一部黑色数码相机。有一条红色背带。"
      },
      {
        "role": "Receptionist",
        "en": "Let me check our lost and found box. One moment, please.",
        "zh": "让我查查失物招领箱。请稍等。"
      },
      {
        "role": "Mr. Green",
        "en": "I hope someone found it. It has all my vacation photos.",
        "zh": "希望有人捡到了。里面有我所有的度假照片。"
      },
      {
        "role": "Receptionist",
        "en": "Good news! A waiter found a camera this morning. Is this yours?",
        "zh": "好消息！一个服务员今天早上捡到了一部相机。这是您的吗？"
      },
      {
        "role": "Mr. Green",
        "en": "Yes, yes! That's exactly my camera! Thank you so much!",
        "zh": "是的，是的！这就是我的相机！太感谢了！"
      },
      {
        "role": "Receptionist",
        "en": "May I see some ID to confirm, please?",
        "zh": "请出示一下证件确认身份好吗？"
      },
      {
        "role": "Mr. Green",
        "en": "Of course! Here is my passport. I'm so relieved!",
        "zh": "当然！这是我的护照。我太放心了！"
      },
      {
        "role": "Receptionist",
        "en": "Everything checks out. Here you go. Please be careful with your belongings.",
        "zh": "确认无误。给您。请保管好您的物品。"
      }
    ]
  },
  {
    "id": 75,
    "category": "travel",
    "title": "Weather Change 天气变化",
    "scene": "一家人在旅行途中遇到下雨，临时改变计划。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Dad",
      "Mom",
      "Tom"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Dad, look! It's starting to rain!",
        "zh": "爸爸，看！开始下雨了！"
      },
      {
        "role": "Mom",
        "en": "Oh no! We didn't bring any umbrellas!",
        "zh": "哦不！我们没带伞！"
      },
      {
        "role": "Dad",
        "en": "Don't worry. Let's go into that gift shop and buy some.",
        "zh": "别担心。我们进那家礼品店买几把。"
      },
      {
        "role": "Tom",
        "en": "Will it rain all day? What about our picnic plan?",
        "zh": "会下一整天吗？我们的野餐计划怎么办？"
      },
      {
        "role": "Mom",
        "en": "Let me check the weather app on my phone.",
        "zh": "让我看看手机上的天气软件。"
      },
      {
        "role": "Mom",
        "en": "It says the rain will stop in about an hour.",
        "zh": "上面说大约一小时后雨会停。"
      },
      {
        "role": "Dad",
        "en": "Great! We can visit the indoor museum while we wait.",
        "zh": "太好了！我们可以趁等待的时间去参观室内博物馆。"
      },
      {
        "role": "Tom",
        "en": "That sounds like a good plan! Is the museum far from here?",
        "zh": "听起来是个好计划！博物馆离这里远吗？"
      },
      {
        "role": "Dad",
        "en": "No, it's just across the street. Let's run over there!",
        "zh": "不远，就在街对面。我们跑过去吧！"
      },
      {
        "role": "Mom",
        "en": "Wait! Let me buy the umbrellas first. Here, Tom, take this one.",
        "zh": "等等！让我先买伞。给，汤姆，拿这把。"
      }
    ]
  },
  {
    "id": 76,
    "category": "travel",
    "title": "Changing Plans 行程变更",
    "scene": "旅途中计划有变，需要改签车票。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mom",
      "Ticket Agent"
    ],
    "lines": [
      {
        "role": "Mom",
        "en": "Hello, I'd like to change my return ticket, please.",
        "zh": "你好，我想改签我的返程票。"
      },
      {
        "role": "Ticket Agent",
        "en": "No problem. May I see your ticket and ID?",
        "zh": "没问题。请出示您的车票和身份证。"
      },
      {
        "role": "Mom",
        "en": "Here you go. I want to change from Friday to Saturday.",
        "zh": "给你。我想从周五改到周六。"
      },
      {
        "role": "Ticket Agent",
        "en": "Let me check if there are seats available on Saturday.",
        "zh": "让我查一下周六是否有余票。"
      },
      {
        "role": "Mom",
        "en": "The morning train would be best, if possible.",
        "zh": "如果可以的话，上午的列车最好。"
      },
      {
        "role": "Ticket Agent",
        "en": "Yes, there's a train at ten thirty on Saturday. Same seats.",
        "zh": "有的，周六十点三十有一班。同样的座位。"
      },
      {
        "role": "Mom",
        "en": "That's perfect! Is there an extra fee for changing?",
        "zh": "太好了！改签要额外收费吗？"
      },
      {
        "role": "Ticket Agent",
        "en": "There's a small fee of ten yuan. The price difference is five yuan more.",
        "zh": "有十元的小手续费。差价多五元。"
      },
      {
        "role": "Mom",
        "en": "OK, so I need to pay fifteen yuan in total.",
        "zh": "好的，所以我一共需要付十五元。"
      },
      {
        "role": "Ticket Agent",
        "en": "That's right. Here is your new ticket. Have a great trip!",
        "zh": "对。这是您的新车票。祝您旅途愉快！"
      }
    ]
  },
  {
    "id": 77,
    "category": "travel",
    "title": "At the Beach 海边游玩",
    "scene": "一家人到海边度假，在沙滩上玩耍。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Dad",
      "Emma",
      "Mom"
    ],
    "lines": [
      {
        "role": "Emma",
        "en": "Wow! The beach is so beautiful! Can I go swimming, Dad?",
        "zh": "哇！海滩好美！我可以去游泳吗，爸爸？"
      },
      {
        "role": "Dad",
        "en": "Not yet. First, put on your sunscreen. The sun is very strong.",
        "zh": "还不行。先涂防晒霜。太阳很毒。"
      },
      {
        "role": "Emma",
        "en": "OK, Mom, can you help me with my back?",
        "zh": "好的，妈妈，你能帮我涂后背吗？"
      },
      {
        "role": "Mom",
        "en": "Sure! Now you're all set. But stay in the shallow water.",
        "zh": "当然！现在你准备好了。但要待在浅水区。"
      },
      {
        "role": "Emma",
        "en": "I will! Look at all those seashells! I want to collect some!",
        "zh": "我会的！看那些贝壳！我想收集一些！"
      },
      {
        "role": "Dad",
        "en": "Good idea! Let's build a sandcastle first. It'll be fun!",
        "zh": "好主意！我们先堆个沙堡吧。会很好玩的！"
      },
      {
        "role": "Emma",
        "en": "Yes! I'll get the buckets and the spade!",
        "zh": "好！我去拿水桶和铲子！"
      },
      {
        "role": "Mom",
        "en": "I'll take some photos of you building the castle.",
        "zh": "我给你们拍几张堆城堡的照片。"
      },
      {
        "role": "Emma",
        "en": "This is the best vacation ever! I love the beach!",
        "zh": "这是最棒的假期！我爱海滩！"
      },
      {
        "role": "Dad",
        "en": "We're glad you like it! Let's make more wonderful memories!",
        "zh": "我们很高兴你喜欢！让我们创造更多美好的回忆！"
      }
    ]
  },
  {
    "id": 78,
    "category": "travel",
    "title": "Mountain Climbing 爬山",
    "scene": "一家人去爬山，在半山腰休息聊天。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mom",
      "Leo",
      "Dad"
    ],
    "lines": [
      {
        "role": "Leo",
        "en": "Dad, I'm so tired! Can we take a rest?",
        "zh": "爸爸，我好累！我们能休息一下吗？"
      },
      {
        "role": "Dad",
        "en": "Sure! Let's sit on this rock. We've been climbing for an hour.",
        "zh": "当然！我们坐在这块石头上。我们已经爬了一个小时了。"
      },
      {
        "role": "Mom",
        "en": "Have some water, Leo. And eat a banana for energy.",
        "zh": "喝点水，里奥。再吃根香蕉补充能量。"
      },
      {
        "role": "Leo",
        "en": "Thanks, Mom! How much further to the top?",
        "zh": "谢谢妈妈！离山顶还有多远？"
      },
      {
        "role": "Dad",
        "en": "About thirty more minutes. The view from the top is worth it.",
        "zh": "大概还有三十分钟。从山顶看的风景是值得的。"
      },
      {
        "role": "Leo",
        "en": "Look! I can see the whole city from here! It's amazing!",
        "zh": "看！从这里我能看到整个城市！太神奇了！"
      },
      {
        "role": "Mom",
        "en": "Yes, the higher you climb, the better the view gets.",
        "zh": "是的，越往上爬，风景越好。"
      },
      {
        "role": "Leo",
        "en": "I feel much better now. Let's keep going! I want to reach the top!",
        "zh": "我现在感觉好多了。我们继续吧！我想到达山顶！"
      },
      {
        "role": "Dad",
        "en": "That's the spirit! But remember, slow and steady wins the race.",
        "zh": "就该这样！但记住，稳扎稳打才能赢。"
      },
      {
        "role": "Mom",
        "en": "Let's go! We'll have lunch at the top. I brought sandwiches!",
        "zh": "出发！我们在山顶吃午饭。我带了三明治！"
      }
    ]
  },
  {
    "id": 79,
    "category": "travel",
    "title": "Visiting a Museum 博物馆参观",
    "scene": "同学们在博物馆参观恐龙化石展。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Guide",
      "Sophie",
      "Mike"
    ],
    "lines": [
      {
        "role": "Guide",
        "en": "Welcome to the Natural History Museum. Today we'll see dinosaur fossils.",
        "zh": "欢迎来到自然历史博物馆。今天我们看恐龙化石。"
      },
      {
        "role": "Sophie",
        "en": "Are these real dinosaur bones?",
        "zh": "这些是真正的恐龙骨头吗？"
      },
      {
        "role": "Guide",
        "en": "Yes! This T-Rex skeleton is over sixty-five million years old.",
        "zh": "是的！这个霸王龙骨架有六千五百万年历史。"
      },
      {
        "role": "Mike",
        "en": "How did dinosaurs disappear?",
        "zh": "恐龙是怎么消失的？"
      },
      {
        "role": "Guide",
        "en": "Scientists believe a big meteor hit the earth. It changed the weather.",
        "zh": "科学家认为一颗巨大的陨石撞击了地球。它改变了天气。"
      },
      {
        "role": "Sophie",
        "en": "That's so sad. I wish I could see a real dinosaur.",
        "zh": "太可惜了。我希望我能看到真正的恐龙。"
      },
      {
        "role": "Guide",
        "en": "We have a 3D movie about dinosaurs at two o'clock. Would you like to watch it?",
        "zh": "我们两点有一部关于恐龙的3D电影。你们想看吗？"
      },
      {
        "role": "Mike",
        "en": "Yes! I love 3D movies! Is it included in the ticket?",
        "zh": "想！我喜欢3D电影！包含在门票里吗？"
      },
      {
        "role": "Guide",
        "en": "Yes, it's free for all visitors. Please go to theater number two.",
        "zh": "是的，对所有游客免费。请到二号放映厅。"
      },
      {
        "role": "Sophie",
        "en": "This museum is so cool! I want to come back again!",
        "zh": "这个博物馆太酷了！我想再来！"
      }
    ]
  },
  {
    "id": 80,
    "category": "travel",
    "title": "End of the Trip 旅行结束",
    "scene": "旅行结束了，一家人在回家的车上聊旅行感受。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mom",
      "Dad",
      "Lucy"
    ],
    "lines": [
      {
        "role": "Mom",
        "en": "Well, that was a wonderful trip! How did you like it, Lucy?",
        "zh": "这次旅行真棒！你觉得怎么样，露西？"
      },
      {
        "role": "Lucy",
        "en": "I loved every minute of it! The Great Wall was my favorite part.",
        "zh": "每一分钟我都喜欢！长城是我最喜欢的部分。"
      },
      {
        "role": "Dad",
        "en": "Mine too! You were so brave climbing all those steps.",
        "zh": "我也是！你爬了那么多台阶真勇敢。"
      },
      {
        "role": "Lucy",
        "en": "My legs are still sore, but it was worth it!",
        "zh": "我的腿还酸着呢，但值得！"
      },
      {
        "role": "Mom",
        "en": "What about the food? Did you enjoy the Peking duck?",
        "zh": "食物呢？你喜欢北京烤鸭吗？"
      },
      {
        "role": "Lucy",
        "en": "Oh, it was delicious! Can we have it at home too?",
        "zh": "哦，太美味了！我们在家也能吃吗？"
      },
      {
        "role": "Dad",
        "en": "Maybe! Mom can try to make it. What was your second favorite thing?",
        "zh": "也许可以！妈妈可以试着做。你第二喜欢的是什么？"
      },
      {
        "role": "Lucy",
        "en": "The museum! I learned so much about history.",
        "zh": "博物馆！我学到了很多历史知识。"
      },
      {
        "role": "Mom",
        "en": "I'm glad you had fun and learned something too!",
        "zh": "我很高兴你既玩得开心又学到了东西！"
      },
      {
        "role": "Lucy",
        "en": "Thank you, Mom and Dad! This is the best trip ever! Let's go again next year!",
        "zh": "谢谢爸爸妈妈！这是最棒的旅行！我们明年再去吧！"
      }
    ]
  },
  {
    "id": 81,
    "category": "restaurant",
    "title": "Ordering at a Western Restaurant 西餐厅点餐",
    "scene": "Tom和Lily在西餐厅看菜单点菜。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Lily"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Welcome to Star Restaurant. Here is the menu.",
        "zh": "欢迎来到星级餐厅。这是菜单。"
      },
      {
        "role": "Lily",
        "en": "Thank you. What do you recommend?",
        "zh": "谢谢。你有什么推荐吗？"
      },
      {
        "role": "Tom",
        "en": "The steak is very popular here.",
        "zh": "这里的牛排很受欢迎。"
      },
      {
        "role": "Lily",
        "en": "Sounds great. I would like a steak, please.",
        "zh": "听起来不错。我想要一份牛排。"
      },
      {
        "role": "Tom",
        "en": "How would you like it cooked?",
        "zh": "你要几分熟的？"
      },
      {
        "role": "Lily",
        "en": "Medium, please. And a glass of orange juice.",
        "zh": "五分熟。还要一杯橙汁。"
      },
      {
        "role": "Tom",
        "en": "Would you like a salad or soup to start?",
        "zh": "你想先来份沙拉还是汤？"
      },
      {
        "role": "Lily",
        "en": "A tomato soup, please.",
        "zh": "请来一份番茄汤。"
      },
      {
        "role": "Tom",
        "en": "OK. Your order will be ready soon.",
        "zh": "好的。您的菜很快就好。"
      },
      {
        "role": "Lily",
        "en": "Thank you very much!",
        "zh": "非常感谢！"
      }
    ]
  },
  {
    "id": 82,
    "category": "restaurant",
    "title": "Ordering at a Chinese Restaurant 中餐厅点餐",
    "scene": "Mike和Lily在中餐厅点中国菜。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mike",
      "Lily"
    ],
    "lines": [
      {
        "role": "Mike",
        "en": "Look at this menu! So many dishes.",
        "zh": "看这个菜单！好多菜啊。"
      },
      {
        "role": "Lily",
        "en": "Yes. I want to try the sweet and sour pork.",
        "zh": "是的。我想试试糖醋里脊。"
      },
      {
        "role": "Mike",
        "en": "Good choice! I will have the kung pao chicken.",
        "zh": "好选择！我要宫保鸡丁。"
      },
      {
        "role": "Lily",
        "en": "Should we order some rice?",
        "zh": "我们要不要点些米饭？"
      },
      {
        "role": "Mike",
        "en": "Yes, two bowls of rice, please.",
        "zh": "好的，请来两碗米饭。"
      },
      {
        "role": "Lily",
        "en": "How about some vegetables? The mapo tofu looks nice.",
        "zh": "来点蔬菜怎么样？麻婆豆腐看起来不错。"
      },
      {
        "role": "Mike",
        "en": "Sure. And maybe a hot and sour soup.",
        "zh": "当然。也许再来个酸辣汤。"
      },
      {
        "role": "Lily",
        "en": "That is a great idea. I love hot and sour soup.",
        "zh": "好主意。我喜欢酸辣汤。"
      },
      {
        "role": "Mike",
        "en": "Excuse me, we are ready to order.",
        "zh": "你好，我们准备好点餐了。"
      },
      {
        "role": "Lily",
        "en": "We would like three dishes, two bowls of rice, and one soup.",
        "zh": "我们想要三个菜，两碗米饭和一份汤。"
      }
    ]
  },
  {
    "id": 83,
    "category": "restaurant",
    "title": "At a Fast Food Restaurant 快餐店",
    "scene": "Tom和Jack在快餐店点汉堡和薯条。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Jack"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "What would you like to eat, Jack?",
        "zh": "你想吃什么，杰克？"
      },
      {
        "role": "Jack",
        "en": "I want a hamburger and some fries.",
        "zh": "我想要一个汉堡和一些薯条。"
      },
      {
        "role": "Tom",
        "en": "Do you want a drink too?",
        "zh": "你也要喝的吗？"
      },
      {
        "role": "Jack",
        "en": "Yes, a cola, please. What about you?",
        "zh": "是的，请来一杯可乐。你呢？"
      },
      {
        "role": "Tom",
        "en": "I will have a chicken burger and a milkshake.",
        "zh": "我要一个鸡肉汉堡和一杯奶昔。"
      },
      {
        "role": "Jack",
        "en": "Should we get a combo meal? It is cheaper.",
        "zh": "我们要不要点套餐？便宜一些。"
      },
      {
        "role": "Tom",
        "en": "Good idea. Two combo meals, please.",
        "zh": "好主意。请来两份套餐。"
      },
      {
        "role": "Jack",
        "en": "Do they have toys in the kids meal?",
        "zh": "儿童餐有玩具吗？"
      },
      {
        "role": "Tom",
        "en": "I think so. Let me ask.",
        "zh": "我想有。让我问一下。"
      },
      {
        "role": "Jack",
        "en": "Cool! I hope it is a car!",
        "zh": "太酷了！希望是个小汽车！"
      }
    ]
  },
  {
    "id": 84,
    "category": "restaurant",
    "title": "At a Coffee Shop 咖啡店",
    "scene": "Lily和Ann在咖啡店点饮品。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Lily",
      "Ann"
    ],
    "lines": [
      {
        "role": "Lily",
        "en": "Let me buy you a coffee, Ann.",
        "zh": "我请你喝咖啡吧，安。"
      },
      {
        "role": "Ann",
        "en": "Thank you, Lily. But I do not like coffee.",
        "zh": "谢谢你，莉莉。但我不喜欢咖啡。"
      },
      {
        "role": "Lily",
        "en": "They have tea and juice too.",
        "zh": "他们也有茶和果汁。"
      },
      {
        "role": "Ann",
        "en": "I would like a hot chocolate, please.",
        "zh": "我想要一杯热巧克力。"
      },
      {
        "role": "Lily",
        "en": "Great choice. I will have a latte.",
        "zh": "好选择。我要一杯拿铁。"
      },
      {
        "role": "Ann",
        "en": "Can I have some cake with that?",
        "zh": "我可以配一些蛋糕吗？"
      },
      {
        "role": "Lily",
        "en": "Of course. The chocolate cake here is wonderful.",
        "zh": "当然可以。这儿的巧克力蛋糕很棒。"
      },
      {
        "role": "Ann",
        "en": "Then I will take a piece of chocolate cake.",
        "zh": "那我要一块巧克力蛋糕。"
      },
      {
        "role": "Lily",
        "en": "Let us find a seat by the window.",
        "zh": "我们找个靠窗的位子吧。"
      },
      {
        "role": "Ann",
        "en": "Perfect. I love this coffee shop!",
        "zh": "太好了。我喜欢这家咖啡店！"
      }
    ]
  },
  {
    "id": 85,
    "category": "restaurant",
    "title": "At a Bubble Tea Shop 奶茶店",
    "scene": "Tom和Lily在奶茶店点奶茶。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Lily"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Do you want to get some bubble tea?",
        "zh": "你想喝点奶茶吗？"
      },
      {
        "role": "Lily",
        "en": "Yes! I love bubble tea. What flavors do they have?",
        "zh": "想！我喜欢奶茶。他们有什么口味的？"
      },
      {
        "role": "Tom",
        "en": "They have milk tea, fruit tea, and matcha tea.",
        "zh": "有奶茶、水果茶和抹茶。"
      },
      {
        "role": "Lily",
        "en": "I want a mango fruit tea, please.",
        "zh": "我要一杯芒果水果茶。"
      },
      {
        "role": "Tom",
        "en": "What sugar level do you want?",
        "zh": "你要几分糖？"
      },
      {
        "role": "Lily",
        "en": "Half sugar, please. Less sugar is healthier.",
        "zh": "半糖。少糖更健康。"
      },
      {
        "role": "Tom",
        "en": "Do you want boba pearls in it?",
        "zh": "要加珍珠吗？"
      },
      {
        "role": "Lily",
        "en": "Yes, add boba pearls, please.",
        "zh": "要，请加珍珠。"
      },
      {
        "role": "Tom",
        "en": "I will have a classic milk tea with less ice.",
        "zh": "我要一杯少冰的经典奶茶。"
      },
      {
        "role": "Lily",
        "en": "Great. Let us pay and wait!",
        "zh": "太好了。我们付钱等一下吧！"
      }
    ]
  },
  {
    "id": 86,
    "category": "restaurant",
    "title": "Breakfast at a Shop 早餐店",
    "scene": "Mom带Tom去早餐店吃早饭。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Mom"
    ],
    "lines": [
      {
        "role": "Mom",
        "en": "Good morning, Tom. What do you want for breakfast?",
        "zh": "早上好，汤姆。你早饭想吃什么？"
      },
      {
        "role": "Tom",
        "en": "I want some dumplings and soy milk, please.",
        "zh": "我想要一些包子和豆浆。"
      },
      {
        "role": "Mom",
        "en": "Do you want steamed buns too?",
        "zh": "你也要馒头吗？"
      },
      {
        "role": "Tom",
        "en": "No, thank you. I am not very hungry today.",
        "zh": "不了，谢谢。我今天不太饿。"
      },
      {
        "role": "Mom",
        "en": "How about an egg? You need protein in the morning.",
        "zh": "来个鸡蛋怎么样？早上需要蛋白质。"
      },
      {
        "role": "Tom",
        "en": "OK, one boiled egg, please.",
        "zh": "好的，请来一个煮鸡蛋。"
      },
      {
        "role": "Mom",
        "en": "I will have rice porridge and a fried dough stick.",
        "zh": "我要一碗粥和一根油条。"
      },
      {
        "role": "Tom",
        "en": "That smells so good! Can we eat here?",
        "zh": "闻起来好香！我们能在这里吃吗？"
      },
      {
        "role": "Mom",
        "en": "Sure. Let us find a small table.",
        "zh": "当然。我们找张小桌子吧。"
      },
      {
        "role": "Tom",
        "en": "This breakfast shop is the best!",
        "zh": "这家早餐店是最好的！"
      }
    ]
  },
  {
    "id": 87,
    "category": "restaurant",
    "title": "At an Ice Cream Shop 冰激凌店",
    "scene": "Lily和Sister去冰激凌店买冰激凌。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Lily",
      "Sister"
    ],
    "lines": [
      {
        "role": "Lily",
        "en": "It is so hot today. Let us get some ice cream!",
        "zh": "今天好热。我们去买冰激凌吧！"
      },
      {
        "role": "Sister",
        "en": "Yes! I love ice cream. Can I have two scoops?",
        "zh": "好！我喜欢冰激凌。我可以要两个球吗？"
      },
      {
        "role": "Lily",
        "en": "One scoop is enough, I think.",
        "zh": "我觉得一个球就够了。"
      },
      {
        "role": "Sister",
        "en": "What flavors can I choose?",
        "zh": "我可以选什么口味？"
      },
      {
        "role": "Lily",
        "en": "They have chocolate, strawberry, vanilla, and mint.",
        "zh": "有巧克力、草莓、香草和薄荷味。"
      },
      {
        "role": "Sister",
        "en": "I want strawberry and chocolate, please!",
        "zh": "我要草莓和巧克力味的！"
      },
      {
        "role": "Lily",
        "en": "I will have vanilla in a cone.",
        "zh": "我要一个香草甜筒。"
      },
      {
        "role": "Sister",
        "en": "Can I get sprinkles on top?",
        "zh": "我可以上面撒彩针糖吗？"
      },
      {
        "role": "Lily",
        "en": "Sure. Here is some money for the ice cream.",
        "zh": "当然。这是买冰激凌的钱。"
      },
      {
        "role": "Sister",
        "en": "Thank you, Lily! You are the best sister!",
        "zh": "谢谢你，莉莉！你是最棒的姐姐！"
      }
    ]
  },
  {
    "id": 88,
    "category": "restaurant",
    "title": "At a Bakery 面包店",
    "scene": "Tom和Mom去面包店买面包。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Mom"
    ],
    "lines": [
      {
        "role": "Mom",
        "en": "We need to buy some bread for tomorrow.",
        "zh": "我们需要买些面包明天吃。"
      },
      {
        "role": "Tom",
        "en": "Can I pick some too?",
        "zh": "我也可以选一些吗？"
      },
      {
        "role": "Mom",
        "en": "Of course. But only two pieces.",
        "zh": "当然可以。但只能选两个。"
      },
      {
        "role": "Tom",
        "en": "I want this chocolate cake. It looks yummy!",
        "zh": "我要这个巧克力蛋糕。看起来好好吃！"
      },
      {
        "role": "Mom",
        "en": "That is too sweet for breakfast. Pick some bread.",
        "zh": "那个当早饭太甜了。选些面包吧。"
      },
      {
        "role": "Tom",
        "en": "OK. How about this red bean bread?",
        "zh": "好吧。这个红豆面包怎么样？"
      },
      {
        "role": "Mom",
        "en": "Good choice. I will take the whole wheat bread.",
        "zh": "好选择。我要全麦面包。"
      },
      {
        "role": "Tom",
        "en": "Can we also get some croissants?",
        "zh": "我们也可以买些牛角包吗？"
      },
      {
        "role": "Mom",
        "en": "Sure. Two croissants, please.",
        "zh": "当然。请来两个牛角包。"
      },
      {
        "role": "Tom",
        "en": "I love the smell of this bakery!",
        "zh": "我喜欢这家面包店的香味！"
      }
    ]
  },
  {
    "id": 89,
    "category": "restaurant",
    "title": "Eating Hot Pot 火锅店",
    "scene": "Mike和Tom在火锅店点锅底和食材。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mike",
      "Tom"
    ],
    "lines": [
      {
        "role": "Mike",
        "en": "I am so hungry. Let us eat hot pot today!",
        "zh": "我好饿。我们今天吃火锅吧！"
      },
      {
        "role": "Tom",
        "en": "Great idea! What soup base do you want?",
        "zh": "好主意！你想要什么锅底？"
      },
      {
        "role": "Mike",
        "en": "I want spicy soup. Do you like spicy food?",
        "zh": "我要辣锅。你喜欢吃辣吗？"
      },
      {
        "role": "Tom",
        "en": "Not really. Can we get half and half?",
        "zh": "不太能吃。我们可以点半半锅吗？"
      },
      {
        "role": "Mike",
        "en": "Sure! Half spicy and half mushroom soup.",
        "zh": "当然！一半辣锅一半菌汤锅。"
      },
      {
        "role": "Tom",
        "en": "Let us get some beef, fish balls, and vegetables.",
        "zh": "我们点些牛肉、鱼丸和蔬菜吧。"
      },
      {
        "role": "Mike",
        "en": "I also want some noodles and tofu.",
        "zh": "我还想要些面条和豆腐。"
      },
      {
        "role": "Tom",
        "en": "Do not forget the mushrooms!",
        "zh": "别忘了蘑菇！"
      },
      {
        "role": "Mike",
        "en": "OK. This is going to be a great meal!",
        "zh": "好的。这顿饭一定会很棒！"
      },
      {
        "role": "Tom",
        "en": "I cannot wait to start eating!",
        "zh": "我迫不及待想开始吃了！"
      }
    ]
  },
  {
    "id": 90,
    "category": "restaurant",
    "title": "At a BBQ Restaurant 烧烤店",
    "scene": "Jack和Mike在烧烤店点烤串。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Jack",
      "Mike"
    ],
    "lines": [
      {
        "role": "Jack",
        "en": "This BBQ place smells amazing!",
        "zh": "这家烧烤店闻起来太香了！"
      },
      {
        "role": "Mike",
        "en": "Let us sit outside. I love eating outside.",
        "zh": "我们坐外面吧。我喜欢在室外吃。"
      },
      {
        "role": "Jack",
        "en": "What should we order?",
        "zh": "我们点什么？"
      },
      {
        "role": "Mike",
        "en": "I want some lamb skewers and chicken wings.",
        "zh": "我要一些羊肉串和鸡翅。"
      },
      {
        "role": "Jack",
        "en": "I would like some corn and mushrooms too.",
        "zh": "我还想要一些玉米和蘑菇。"
      },
      {
        "role": "Mike",
        "en": "Do you want spicy or not spicy?",
        "zh": "你要辣的还是不辣的？"
      },
      {
        "role": "Jack",
        "en": "A little spicy, please.",
        "zh": "微辣吧。"
      },
      {
        "role": "Mike",
        "en": "Let us also get some sodas.",
        "zh": "我们再要点汽水吧。"
      },
      {
        "role": "Jack",
        "en": "Good idea. Two sodas, please.",
        "zh": "好主意。请来两杯汽水。"
      },
      {
        "role": "Mike",
        "en": "I am so hungry. Food cannot come fast enough!",
        "zh": "我太饿了。食物怎么还不上来！"
      }
    ]
  },
  {
    "id": 91,
    "category": "restaurant",
    "title": "At a Buffet 自助餐",
    "scene": "Lily和Tom去吃自助餐。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Lily",
      "Tom"
    ],
    "lines": [
      {
        "role": "Lily",
        "en": "Wow! Look at all this food!",
        "zh": "哇！看这这么多食物！"
      },
      {
        "role": "Tom",
        "en": "I know. I do not know what to eat first.",
        "zh": "是啊。我都不知道先吃什么好。"
      },
      {
        "role": "Lily",
        "en": "Let me get some salad and fruit.",
        "zh": "我先去拿些沙拉和水果。"
      },
      {
        "role": "Tom",
        "en": "I will get some pizza and fried rice.",
        "zh": "我去拿些披萨和炒饭。"
      },
      {
        "role": "Lily",
        "en": "Do not take too much at one time.",
        "zh": "一次不要拿太多。"
      },
      {
        "role": "Tom",
        "en": "Why not? It is a buffet!",
        "zh": "为什么？这是自助餐啊！"
      },
      {
        "role": "Lily",
        "en": "Because we can go back for more later.",
        "zh": "因为等下还可以再来拿。"
      },
      {
        "role": "Tom",
        "en": "That makes sense. I will start with a little.",
        "zh": "有道理。我少拿一点开始吧。"
      },
      {
        "role": "Lily",
        "en": "Save room for dessert!",
        "zh": "留点肚子吃甜点！"
      },
      {
        "role": "Tom",
        "en": "I already see the cake. I am so excited!",
        "zh": "我已经看到蛋糕了。好激动！"
      }
    ]
  },
  {
    "id": 92,
    "category": "restaurant",
    "title": "Ordering Takeout 外卖点餐",
    "scene": "Mike用手机点外卖。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mike",
      "Mom"
    ],
    "lines": [
      {
        "role": "Mike",
        "en": "Mom, I am hungry. Can we order some food?",
        "zh": "妈妈，我饿了。我们可以点些外卖吗？"
      },
      {
        "role": "Mom",
        "en": "OK. What do you want to eat?",
        "zh": "好的。你想吃什么？"
      },
      {
        "role": "Mike",
        "en": "Can we order fried chicken?",
        "zh": "我们可以点炸鸡吗？"
      },
      {
        "role": "Mom",
        "en": "Fried chicken is not very healthy. How about noodles?",
        "zh": "炸鸡不太健康。面条怎么样？"
      },
      {
        "role": "Mike",
        "en": "OK, beef noodles, please.",
        "zh": "好吧，我要牛肉面。"
      },
      {
        "role": "Mom",
        "en": "I will order a vegetable dish and some rice.",
        "zh": "我要点一个蔬菜和米饭。"
      },
      {
        "role": "Mike",
        "en": "How long will it take?",
        "zh": "要等多久？"
      },
      {
        "role": "Mom",
        "en": "About thirty minutes, the app says.",
        "zh": "手机上显示大约三十分钟。"
      },
      {
        "role": "Mike",
        "en": "That is fast. I will set the table.",
        "zh": "真快。我去摆桌子。"
      },
      {
        "role": "Mom",
        "en": "Good boy. Wash your hands first!",
        "zh": "好孩子。先去洗手！"
      }
    ]
  },
  {
    "id": 93,
    "category": "restaurant",
    "title": "Waiting in Line at a Restaurant 餐厅排队",
    "scene": "Tom和Lily在餐厅门口排队等位。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Lily"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Wow, there are so many people here!",
        "zh": "哇，这里好多人！"
      },
      {
        "role": "Lily",
        "en": "We need to wait. Let me get a number.",
        "zh": "我们需要等一下。我去拿个号。"
      },
      {
        "role": "Tom",
        "en": "What number did you get?",
        "zh": "你拿到几号了？"
      },
      {
        "role": "Lily",
        "en": "We are number twenty-three.",
        "zh": "我们是23号。"
      },
      {
        "role": "Tom",
        "en": "They are calling number fifteen now.",
        "zh": "现在在叫15号。"
      },
      {
        "role": "Lily",
        "en": "So we have about eight groups ahead of us.",
        "zh": "所以我们前面大概还有8桌。"
      },
      {
        "role": "Tom",
        "en": "That might take a while. I am getting hungry.",
        "zh": "可能要等一会儿。我饿了。"
      },
      {
        "role": "Lily",
        "en": "Here, have a snack while we wait.",
        "zh": "来，我们等的时候先吃点零食。"
      },
      {
        "role": "Tom",
        "en": "Thank you. How long do you think we will wait?",
        "zh": "谢谢。你觉得我们要等多久？"
      },
      {
        "role": "Lily",
        "en": "Maybe twenty minutes. Let me check the app.",
        "zh": "大概二十分钟。让我看看手机。"
      }
    ]
  },
  {
    "id": 94,
    "category": "restaurant",
    "title": "Birthday Dinner 生日聚餐",
    "scene": "朋友们为Mike举办生日聚餐。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Mike"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Happy birthday, Mike! We are so happy you are here!",
        "zh": "生日快乐，迈克！很高兴你来！"
      },
      {
        "role": "Mike",
        "en": "Thank you, Tom! This restaurant is beautiful!",
        "zh": "谢谢你，汤姆！这家餐厅真漂亮！"
      },
      {
        "role": "Tom",
        "en": "We ordered your favorite pizza.",
        "zh": "我们点了你最喜欢的披萨。"
      },
      {
        "role": "Mike",
        "en": "You are the best friends ever!",
        "zh": "你们是最好的朋友！"
      },
      {
        "role": "Tom",
        "en": "And here is a birthday cake for you!",
        "zh": "还有这是给你的生日蛋糕！"
      },
      {
        "role": "Mike",
        "en": "Wow! It has candles on it! Can I make a wish?",
        "zh": "哇！上面有蜡烛！我可以许愿吗？"
      },
      {
        "role": "Tom",
        "en": "Of course! Close your eyes and make a wish.",
        "zh": "当然可以！闭上眼睛许个愿吧。"
      },
      {
        "role": "Mike",
        "en": "I wish we will always be good friends.",
        "zh": "我希望我们永远是好朋友。"
      },
      {
        "role": "Tom",
        "en": "Now blow out the candles!",
        "zh": "现在吹蜡烛吧！"
      },
      {
        "role": "Mike",
        "en": "This is the best birthday dinner ever!",
        "zh": "这是最棒的生日聚餐！"
      }
    ]
  },
  {
    "id": 95,
    "category": "restaurant",
    "title": "Family Dinner Out 家庭聚餐",
    "scene": "一家人去餐厅吃晚餐。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Dad",
      "Tom"
    ],
    "lines": [
      {
        "role": "Dad",
        "en": "Tonight we are eating out as a family.",
        "zh": "今晚我们全家出去吃饭。"
      },
      {
        "role": "Tom",
        "en": "Where are we going, Dad?",
        "zh": "我们去哪里，爸爸？"
      },
      {
        "role": "Dad",
        "en": "To that new Chinese restaurant near our school.",
        "zh": "去学校附近那家新开的中餐厅。"
      },
      {
        "role": "Tom",
        "en": "Oh, I heard it is very good!",
        "zh": "哦，我听说那家很好吃！"
      },
      {
        "role": "Dad",
        "en": "Your mom has already booked a table.",
        "zh": "你妈妈已经订好位子了。"
      },
      {
        "role": "Tom",
        "en": "Can I order my favorite sweet and sour fish?",
        "zh": "我可以点我最喜欢的糖醋鱼吗？"
      },
      {
        "role": "Dad",
        "en": "Sure. Grandma and Grandpa are coming too.",
        "zh": "当然可以。爷爷奶奶也来。"
      },
      {
        "role": "Tom",
        "en": "Really? I have not seen them for a long time!",
        "zh": "真的吗？我很久没见到他们了！"
      },
      {
        "role": "Dad",
        "en": "Yes. It will be a wonderful family dinner.",
        "zh": "是的。会是一顿美好的家庭聚餐。"
      },
      {
        "role": "Tom",
        "en": "I cannot wait! Let me go get ready!",
        "zh": "我等不及了！我去准备一下！"
      }
    ]
  },
  {
    "id": 96,
    "category": "restaurant",
    "title": "Dinner with Classmates 同学聚餐",
    "scene": "Tom和几个同学放学后一起去吃饭。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Jack"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "School is over! Are you hungry, Jack?",
        "zh": "放学了！你饿了吗，杰克？"
      },
      {
        "role": "Jack",
        "en": "Very hungry! Let us go eat something.",
        "zh": "好饿！我们去吃点东西吧。"
      },
      {
        "role": "Tom",
        "en": "Do you want to try the new noodle shop?",
        "zh": "你想试试那家新开的面馆吗？"
      },
      {
        "role": "Jack",
        "en": "Sure. I heard their noodles are really good.",
        "zh": "好啊。听说他们的面条很好吃。"
      },
      {
        "role": "Tom",
        "en": "Let us ask Lily and Ann to come too.",
        "zh": "我们叫莉莉和安也一起来吧。"
      },
      {
        "role": "Jack",
        "en": "Great idea! The more the better!",
        "zh": "好主意！人越多越好！"
      },
      {
        "role": "Tom",
        "en": "I will pay this time. You can pay next time.",
        "zh": "这次我请客。下次你请。"
      },
      {
        "role": "Jack",
        "en": "Thank you, Tom. You are so kind!",
        "zh": "谢谢你，汤姆。你真好！"
      },
      {
        "role": "Tom",
        "en": "What kind of noodles do you like?",
        "zh": "你喜欢吃什么面？"
      },
      {
        "role": "Jack",
        "en": "Beef noodles, of course!",
        "zh": "当然是牛肉面！"
      }
    ]
  },
  {
    "id": 97,
    "category": "restaurant",
    "title": "Asking for Takeout Bag 要求打包",
    "scene": "Tom和Lily吃完饭要求打包剩菜。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Lily"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "I am so full. I cannot eat any more.",
        "zh": "我太饱了。我吃不下了。"
      },
      {
        "role": "Lily",
        "en": "Me too. But we still have a lot of food left.",
        "zh": "我也是。但我们还有很多菜没吃完。"
      },
      {
        "role": "Tom",
        "en": "Do not waste it. Let us ask for a takeout bag.",
        "zh": "别浪费。我们叫个打包袋吧。"
      },
      {
        "role": "Lily",
        "en": "Good idea. Excuse me, could we have a box, please?",
        "zh": "好主意。你好，请给我们一个打包盒。"
      },
      {
        "role": "Tom",
        "en": "Can we have two boxes? One for the rice and one for the meat.",
        "zh": "可以给我们两个盒子吗？一个装米饭，一个装肉。"
      },
      {
        "role": "Lily",
        "en": "We can take the food home and eat it tomorrow.",
        "zh": "我们可以带回家明天吃。"
      },
      {
        "role": "Tom",
        "en": "Leftover food sometimes tastes even better.",
        "zh": "剩菜有时候更好吃。"
      },
      {
        "role": "Lily",
        "en": "That is true. We just need to put it in the fridge.",
        "zh": "确实。我们只需要放进冰箱。"
      },
      {
        "role": "Tom",
        "en": "Here is some money for the boxes.",
        "zh": "这是打包盒的钱。"
      },
      {
        "role": "Lily",
        "en": "Thank you. Let us go home now.",
        "zh": "谢谢。我们现在回家吧。"
      }
    ]
  },
  {
    "id": 98,
    "category": "restaurant",
    "title": "Allergy and Food Restrictions 过敏忌口",
    "scene": "Lily在餐厅告诉服务员自己的过敏情况。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Lily",
      "Tom"
    ],
    "lines": [
      {
        "role": "Lily",
        "en": "Excuse me. I have a food allergy.",
        "zh": "你好。我有食物过敏。"
      },
      {
        "role": "Tom",
        "en": "What are you allergic to?",
        "zh": "你对什么过敏？"
      },
      {
        "role": "Lily",
        "en": "I am allergic to peanuts. I cannot eat peanuts at all.",
        "zh": "我对花生过敏。我完全不能吃花生。"
      },
      {
        "role": "Tom",
        "en": "I understand. Does this dish have peanuts in it?",
        "zh": "我明白了。这道菜里有花生吗？"
      },
      {
        "role": "Lily",
        "en": "What about the sauce? Sometimes peanuts are hidden in sauce.",
        "zh": "酱汁呢？有时候花生会藏在酱汁里。"
      },
      {
        "role": "Tom",
        "en": "Good question. Let me check with the kitchen.",
        "zh": "好问题。我去厨房确认一下。"
      },
      {
        "role": "Lily",
        "en": "Thank you. I also cannot eat seafood.",
        "zh": "谢谢。我也不能吃海鲜。"
      },
      {
        "role": "Tom",
        "en": "No problem. The chicken dish is safe for you.",
        "zh": "没问题。鸡肉这道菜对你来说是安全的。"
      },
      {
        "role": "Lily",
        "en": "That sounds great. I will have the chicken please.",
        "zh": "听起来不错。我要鸡肉。"
      },
      {
        "role": "Tom",
        "en": "Your food will be ready soon. Enjoy your meal!",
        "zh": "您的菜很快就好。请慢用！"
      }
    ]
  },
  {
    "id": 99,
    "category": "restaurant",
    "title": "Ordering Extra Food 要求加餐",
    "scene": "Mike和Jack在餐厅吃到一半想加菜。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mike",
      "Jack"
    ],
    "lines": [
      {
        "role": "Mike",
        "en": "Jack, are you still hungry?",
        "zh": "杰克，你还饿吗？"
      },
      {
        "role": "Jack",
        "en": "A little bit. The food is so good!",
        "zh": "有一点。这菜太好吃了！"
      },
      {
        "role": "Mike",
        "en": "Do you want to order some more?",
        "zh": "你想再点一些吗？"
      },
      {
        "role": "Jack",
        "en": "Can we get another plate of dumplings?",
        "zh": "我们可以再要一盘饺子吗？"
      },
      {
        "role": "Mike",
        "en": "Sure. I also want to try the fried rice.",
        "zh": "当然。我也想尝尝炒饭。"
      },
      {
        "role": "Jack",
        "en": "And maybe some more juice? I am thirsty.",
        "zh": "也许再要些果汁？我渴了。"
      },
      {
        "role": "Mike",
        "en": "Let me call the waiter. Excuse me!",
        "zh": "我叫服务员。你好！"
      },
      {
        "role": "Jack",
        "en": "We would like to order some more food, please.",
        "zh": "我们想再加些菜。"
      },
      {
        "role": "Mike",
        "en": "One plate of dumplings, one fried rice, and two juices.",
        "zh": "一盘饺子，一份炒饭，两杯果汁。"
      },
      {
        "role": "Jack",
        "en": "Thank you! We are so hungry today!",
        "zh": "谢谢！我们今天太饿了！"
      }
    ]
  },
  {
    "id": 100,
    "category": "restaurant",
    "title": "Paying the Bill 结账买单",
    "scene": "Tom和Lily吃完饭准备结账。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Lily"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "That was a delicious meal. I am so full!",
        "zh": "真好吃。我吃得好饱！"
      },
      {
        "role": "Lily",
        "en": "Me too. Should we pay the bill now?",
        "zh": "我也是。我们现在结账吧？"
      },
      {
        "role": "Tom",
        "en": "Yes. Excuse me, can we have the check, please?",
        "zh": "好的。你好，请买单。"
      },
      {
        "role": "Lily",
        "en": "How much is it?",
        "zh": "多少钱？"
      },
      {
        "role": "Tom",
        "en": "It is eighty-five yuan in total.",
        "zh": "一共八十五元。"
      },
      {
        "role": "Lily",
        "en": "Do you want to split the bill?",
        "zh": "你要AA制吗？"
      },
      {
        "role": "Tom",
        "en": "No, it is my treat today. My pleasure!",
        "zh": "不用，今天我请客。我的荣幸！"
      },
      {
        "role": "Lily",
        "en": "Thank you, Tom! That is very kind of you.",
        "zh": "谢谢你，汤姆！你太好了。"
      },
      {
        "role": "Tom",
        "en": "I can pay by phone. Do they take mobile pay?",
        "zh": "我可以用手机付。他们接受手机支付吗？"
      },
      {
        "role": "Lily",
        "en": "Yes. Let me scan the QR code on the table.",
        "zh": "是的。让我扫一下桌上的二维码。"
      }
    ]
  },
  {
    "id": 101,
    "category": "hospital",
    "title": "Having a Cold and Fever 感冒发烧",
    "scene": "Mom带Tom去看医生，Tom感冒发烧了。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mom",
      "Doctor"
    ],
    "lines": [
      {
        "role": "Mom",
        "en": "Doctor, my son has a fever and a bad cough.",
        "zh": "医生，我儿子发烧了，咳嗽很厉害。"
      },
      {
        "role": "Doctor",
        "en": "How long has he been sick?",
        "zh": "他病了多久了？"
      },
      {
        "role": "Mom",
        "en": "Since yesterday morning.",
        "zh": "从昨天早上开始。"
      },
      {
        "role": "Doctor",
        "en": "Let me check his temperature. It is thirty-eight degrees.",
        "zh": "我量一下他的体温。三十八度。"
      },
      {
        "role": "Mom",
        "en": "Is it serious?",
        "zh": "严重吗？"
      },
      {
        "role": "Doctor",
        "en": "Do not worry. It is a common cold.",
        "zh": "别担心。就是普通感冒。"
      },
      {
        "role": "Mom",
        "en": "What medicine should he take?",
        "zh": "他应该吃什么药？"
      },
      {
        "role": "Doctor",
        "en": "Take this medicine three times a day after meals.",
        "zh": "这药每天三次，饭后吃。"
      },
      {
        "role": "Mom",
        "en": "Does he need to stay home from school?",
        "zh": "他需要请假不去上学吗？"
      },
      {
        "role": "Doctor",
        "en": "Yes, rest at home for two days and drink more water.",
        "zh": "是的，在家休息两天，多喝水。"
      }
    ]
  },
  {
    "id": 102,
    "category": "hospital",
    "title": "Seeing the Dentist 牙疼看牙",
    "scene": "Lily牙疼去看牙医。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Lily",
      "Dentist"
    ],
    "lines": [
      {
        "role": "Lily",
        "en": "Doctor, my tooth really hurts.",
        "zh": "医生，我的牙好疼。"
      },
      {
        "role": "Dentist",
        "en": "Which tooth is it? Show me, please.",
        "zh": "哪颗牙？请给我看看。"
      },
      {
        "role": "Lily",
        "en": "This one on the left. It hurts when I eat.",
        "zh": "左边这颗。吃东西的时候特别疼。"
      },
      {
        "role": "Dentist",
        "en": "Open your mouth wide, please. Let me take a look.",
        "zh": "请张大嘴巴。我看看。"
      },
      {
        "role": "Lily",
        "en": "Is it bad, Doctor?",
        "zh": "很严重吗，医生？"
      },
      {
        "role": "Dentist",
        "en": "You have a small hole in this tooth. It is a cavity.",
        "zh": "你这颗牙上有个小洞。是蛀牙。"
      },
      {
        "role": "Lily",
        "en": "Oh no! Do I need to get it fixed?",
        "zh": "糟糕！需要补牙吗？"
      },
      {
        "role": "Dentist",
        "en": "Yes. Do not worry, it will not hurt. I will be gentle.",
        "zh": "需要。别担心，不会疼的。我会很轻的。"
      },
      {
        "role": "Lily",
        "en": "How can I stop it from happening again?",
        "zh": "我怎样防止再蛀牙呢？"
      },
      {
        "role": "Dentist",
        "en": "Brush your teeth twice a day and eat less candy.",
        "zh": "每天刷两次牙，少吃糖。"
      }
    ]
  },
  {
    "id": 103,
    "category": "hospital",
    "title": "Eye Checkup 眼睛检查",
    "scene": "Tom去医院做眼睛检查。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Doctor"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Doctor, I cannot see the board clearly at school.",
        "zh": "医生，我在学校看不清黑板。"
      },
      {
        "role": "Doctor",
        "en": "How long has this been happening?",
        "zh": "这种情况多久了？"
      },
      {
        "role": "Tom",
        "en": "About two weeks. My eyes feel tired.",
        "zh": "大约两周了。我的眼睛感觉累。"
      },
      {
        "role": "Doctor",
        "en": "Please sit here and cover your left eye.",
        "zh": "请坐在这里，遮住左眼。"
      },
      {
        "role": "Tom",
        "en": "OK. What should I do?",
        "zh": "好的。我该做什么？"
      },
      {
        "role": "Doctor",
        "en": "Read the letters on the chart from top to bottom.",
        "zh": "从上到下读表上的字母。"
      },
      {
        "role": "Tom",
        "en": "E, F, P, T, O, Z... I cannot see the last line.",
        "zh": "E, F, P, T, O, Z... 最后一行看不清了。"
      },
      {
        "role": "Doctor",
        "en": "Now try with both eyes. Can you see better?",
        "zh": "现在两只眼睛一起看。好一些了吗？"
      },
      {
        "role": "Tom",
        "en": "Yes, a little better.",
        "zh": "好一些了。"
      },
      {
        "role": "Doctor",
        "en": "You need glasses. Do not read in the dark.",
        "zh": "你需要戴眼镜了。不要在暗处看书。"
      }
    ]
  },
  {
    "id": 104,
    "category": "hospital",
    "title": "Stomach Problems 肠胃不适",
    "scene": "Mike肚子疼去看医生。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mike",
      "Doctor"
    ],
    "lines": [
      {
        "role": "Mike",
        "en": "Doctor, my stomach hurts a lot.",
        "zh": "医生，我肚子好疼。"
      },
      {
        "role": "Doctor",
        "en": "When did it start hurting?",
        "zh": "什么时候开始疼的？"
      },
      {
        "role": "Mike",
        "en": "Last night after dinner.",
        "zh": "昨晚晚饭后。"
      },
      {
        "role": "Doctor",
        "en": "What did you eat for dinner?",
        "zh": "你晚饭吃了什么？"
      },
      {
        "role": "Mike",
        "en": "I ate some ice cream and cold noodles.",
        "zh": "我吃了一些冰激凌和冷面。"
      },
      {
        "role": "Doctor",
        "en": "That might be the reason. Too much cold food is bad.",
        "zh": "可能就是这个原因。吃太多冷食不好。"
      },
      {
        "role": "Mike",
        "en": "Do I need to take any medicine?",
        "zh": "我需要吃药吗？"
      },
      {
        "role": "Doctor",
        "en": "Yes. Take this stomach medicine twice a day.",
        "zh": "需要。这胃药每天吃两次。"
      },
      {
        "role": "Mike",
        "en": "Can I go to school tomorrow?",
        "zh": "我明天能去上学吗？"
      },
      {
        "role": "Doctor",
        "en": "Stay home and rest. Eat warm food and drink hot water.",
        "zh": "在家休息。吃温热的食物，喝热水。"
      }
    ]
  },
  {
    "id": 105,
    "category": "hospital",
    "title": "Getting a Vaccine 打疫苗",
    "scene": "Mom带Lily去打疫苗。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Lily",
      "Nurse"
    ],
    "lines": [
      {
        "role": "Nurse",
        "en": "Good morning, Lily. Are you here for your vaccine?",
        "zh": "早上好，莉莉。你是来打疫苗的吗？"
      },
      {
        "role": "Lily",
        "en": "Yes, but I am a little scared.",
        "zh": "是的，但我有点害怕。"
      },
      {
        "role": "Nurse",
        "en": "Do not worry. It will be very quick.",
        "zh": "别担心。很快就好了。"
      },
      {
        "role": "Lily",
        "en": "Will it hurt a lot?",
        "zh": "会很疼吗？"
      },
      {
        "role": "Nurse",
        "en": "Just a little pinch. Like an ant biting you.",
        "zh": "就像蚂蚁咬一下。只有一点点疼。"
      },
      {
        "role": "Lily",
        "en": "OK. I will be brave.",
        "zh": "好的。我会勇敢的。"
      },
      {
        "role": "Nurse",
        "en": "Hold out your left arm. Good girl!",
        "zh": "伸出左臂。真乖！"
      },
      {
        "role": "Lily",
        "en": "That was not so bad!",
        "zh": "没那么疼嘛！"
      },
      {
        "role": "Nurse",
        "en": "You did great! Press this cotton ball for a few minutes.",
        "zh": "你真棒！按住这个棉球几分钟。"
      },
      {
        "role": "Lily",
        "en": "Thank you, Nurse. That was easy!",
        "zh": "谢谢你，护士。很简单！"
      }
    ]
  },
  {
    "id": 106,
    "category": "hospital",
    "title": "Health Checkup 体检",
    "scene": "Tom去学校做年度体检。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Nurse"
    ],
    "lines": [
      {
        "role": "Nurse",
        "en": "Next, please. What is your name?",
        "zh": "下一位。你叫什么名字？"
      },
      {
        "role": "Tom",
        "en": "My name is Tom. I am in Grade Five.",
        "zh": "我叫汤姆。我上五年级。"
      },
      {
        "role": "Nurse",
        "en": "First, let me check your height and weight.",
        "zh": "首先，我量一下你的身高和体重。"
      },
      {
        "role": "Tom",
        "en": "OK. How tall am I?",
        "zh": "好的。我多高？"
      },
      {
        "role": "Nurse",
        "en": "You are one hundred and forty centimeters tall.",
        "zh": "你身高一百四十厘米。"
      },
      {
        "role": "Tom",
        "en": "Am I taller than last year?",
        "zh": "我比去年高了吗？"
      },
      {
        "role": "Nurse",
        "en": "Yes, you grew five centimeters. Now let me check your eyes.",
        "zh": "是的，你长了五厘米。现在检查眼睛。"
      },
      {
        "role": "Tom",
        "en": "I hope my eyes are still good.",
        "zh": "希望我的眼睛还好。"
      },
      {
        "role": "Nurse",
        "en": "Your eyesight is fine. Remember to exercise more.",
        "zh": "你的视力没问题。记得多运动。"
      },
      {
        "role": "Tom",
        "en": "Thank you, Nurse!",
        "zh": "谢谢你，护士！"
      }
    ]
  },
  {
    "id": 107,
    "category": "hospital",
    "title": "Broken Bone Emergency 骨折看急诊",
    "scene": "Jack摔伤了手臂，被送到急诊室。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Jack",
      "Doctor"
    ],
    "lines": [
      {
        "role": "Jack",
        "en": "Doctor, I fell off my bike and my arm hurts!",
        "zh": "医生，我从自行车上摔下来，手臂好疼！"
      },
      {
        "role": "Doctor",
        "en": "Let me see. Can you move your fingers?",
        "zh": "让我看看。你能动手指吗？"
      },
      {
        "role": "Jack",
        "en": "Yes, but my arm really hurts when I try.",
        "zh": "能，但尝试动的时候手臂很疼。"
      },
      {
        "role": "Doctor",
        "en": "We need to take an X-ray first.",
        "zh": "我们需要先拍个X光片。"
      },
      {
        "role": "Jack",
        "en": "Is it broken, Doctor?",
        "zh": "骨折了吗，医生？"
      },
      {
        "role": "Doctor",
        "en": "It is just a small crack, not a full break.",
        "zh": "只是轻微骨裂，没有完全骨折。"
      },
      {
        "role": "Jack",
        "en": "Do I need a cast?",
        "zh": "我需要打石膏吗？"
      },
      {
        "role": "Doctor",
        "en": "Yes. You will wear it for about four weeks.",
        "zh": "需要。你需要戴大约四周。"
      },
      {
        "role": "Jack",
        "en": "Can I still go to school?",
        "zh": "我还能去上学吗？"
      },
      {
        "role": "Doctor",
        "en": "Yes, but do not run or play sports for a while.",
        "zh": "可以，但暂时不要跑步或做运动。"
      }
    ]
  },
  {
    "id": 108,
    "category": "hospital",
    "title": "Getting Medicine at the Pharmacy 药房取药",
    "scene": "Mom带Tom去药房取药。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mom",
      "Pharmacist"
    ],
    "lines": [
      {
        "role": "Mom",
        "en": "Hello. I need to pick up some medicine.",
        "zh": "你好。我需要取药。"
      },
      {
        "role": "Pharmacist",
        "en": "Can I see your prescription, please?",
        "zh": "请给我看一下处方。"
      },
      {
        "role": "Mom",
        "en": "Here you go. The doctor said Tom has a cold.",
        "zh": "给你。医生说汤姆感冒了。"
      },
      {
        "role": "Pharmacist",
        "en": "OK. Here is the cough syrup and the fever medicine.",
        "zh": "好的。这是止咳糖浆和退烧药。"
      },
      {
        "role": "Mom",
        "en": "How should he take these?",
        "zh": "他应该怎么吃？"
      },
      {
        "role": "Pharmacist",
        "en": "The cough syrup: two spoons, three times a day.",
        "zh": "止咳糖浆：每次两勺，每天三次。"
      },
      {
        "role": "Mom",
        "en": "And the fever medicine?",
        "zh": "那退烧药呢？"
      },
      {
        "role": "Pharmacist",
        "en": "One pill when his temperature is above thirty-eight degrees.",
        "zh": "体温超过三十八度时吃一片。"
      },
      {
        "role": "Mom",
        "en": "Does he need to take it with food?",
        "zh": "需要饭后吃吗？"
      },
      {
        "role": "Pharmacist",
        "en": "Yes, take it after meals. He will get well soon.",
        "zh": "是的，饭后吃。他很快就会好的。"
      }
    ]
  },
  {
    "id": 109,
    "category": "hospital",
    "title": "Making an Appointment 预约挂号",
    "scene": "Lily打电话给医院预约看病。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Lily",
      "Receptionist"
    ],
    "lines": [
      {
        "role": "Receptionist",
        "en": "Good morning. This is City Hospital. How can I help you?",
        "zh": "早上好。这里是市医院。请问有什么可以帮您？"
      },
      {
        "role": "Lily",
        "en": "Hi. I want to make an appointment with Dr. Wang.",
        "zh": "你好。我想预约王医生。"
      },
      {
        "role": "Receptionist",
        "en": "What day would you like to come?",
        "zh": "您想哪天来？"
      },
      {
        "role": "Lily",
        "en": "This Thursday, if possible.",
        "zh": "如果可以的话，这周四。"
      },
      {
        "role": "Receptionist",
        "en": "Dr. Wang is available at ten in the morning.",
        "zh": "王医生上午十点有空。"
      },
      {
        "role": "Lily",
        "en": "Ten o'clock is perfect. Thank you.",
        "zh": "十点很完美。谢谢。"
      },
      {
        "role": "Receptionist",
        "en": "Can I have your name and phone number?",
        "zh": "请问您的姓名和电话号码？"
      },
      {
        "role": "Lily",
        "en": "My name is Lily. My number is 555-1234.",
        "zh": "我叫莉莉。电话是555-1234。"
      },
      {
        "role": "Receptionist",
        "en": "Please arrive fifteen minutes early to register.",
        "zh": "请提前十五分钟到挂号。"
      },
      {
        "role": "Lily",
        "en": "I will. Thank you very much!",
        "zh": "好的。非常感谢！"
      }
    ]
  },
  {
    "id": 110,
    "category": "hospital",
    "title": "Paying at the Hospital 缴费",
    "scene": "Tom在医院帮妈妈缴费。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Cashier"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Excuse me. Where can I pay for the medicine?",
        "zh": "你好。请问在哪里缴费？"
      },
      {
        "role": "Cashier",
        "en": "Right here. Can I see your prescription?",
        "zh": "就在这里。请给我看一下处方。"
      },
      {
        "role": "Tom",
        "en": "Here it is. How much do I need to pay?",
        "zh": "给你。我需要付多少钱？"
      },
      {
        "role": "Cashier",
        "en": "The total is fifty-six yuan.",
        "zh": "一共五十六元。"
      },
      {
        "role": "Tom",
        "en": "Can I pay by phone?",
        "zh": "我可以用手机付吗？"
      },
      {
        "role": "Cashier",
        "en": "Yes, scan this QR code.",
        "zh": "可以，扫这个二维码。"
      },
      {
        "role": "Tom",
        "en": "OK. I have paid. Here is the receipt.",
        "zh": "好的。我已经付了。这是收据。"
      },
      {
        "role": "Cashier",
        "en": "Thank you. Take this paper to the pharmacy.",
        "zh": "谢谢。拿这张单子去药房取药。"
      },
      {
        "role": "Tom",
        "en": "Is the pharmacy on the first floor?",
        "zh": "药房在一楼吗？"
      },
      {
        "role": "Cashier",
        "en": "Yes, go straight and turn left. You will see it.",
        "zh": "是的，直走左转就看到了。"
      }
    ]
  },
  {
    "id": 111,
    "category": "hospital",
    "title": "Visiting a Friend in Hospital 住院探望",
    "scene": "Lily去医院探望住院的同学Mike。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Lily",
      "Mike"
    ],
    "lines": [
      {
        "role": "Lily",
        "en": "Hi, Mike! How are you feeling today?",
        "zh": "嗨，迈克！你今天感觉怎么样？"
      },
      {
        "role": "Mike",
        "en": "Much better, Lily. Thank you for coming!",
        "zh": "好多了，莉莉。谢谢你来！"
      },
      {
        "role": "Lily",
        "en": "I brought you some fruits and a book.",
        "zh": "我给你带了些水果和一本书。"
      },
      {
        "role": "Mike",
        "en": "That is so nice of you! I was bored in here.",
        "zh": "你真好！我在这里好无聊。"
      },
      {
        "role": "Lily",
        "en": "When can you go home?",
        "zh": "你什么时候能回家？"
      },
      {
        "role": "Mike",
        "en": "The doctor says maybe in three days.",
        "zh": "医生说可能三天后。"
      },
      {
        "role": "Lily",
        "en": "That is not too long. We all miss you at school.",
        "zh": "不算太长。学校里大家都很想你。"
      },
      {
        "role": "Mike",
        "en": "I miss you all too. How is the homework?",
        "zh": "我也想你们。作业怎么样？"
      },
      {
        "role": "Lily",
        "en": "Do not worry about homework. Just get well!",
        "zh": "别担心作业。好好养病！"
      },
      {
        "role": "Mike",
        "en": "Thank you, Lily. You are a true friend!",
        "zh": "谢谢你，莉莉。你真是好朋友！"
      }
    ]
  },
  {
    "id": 112,
    "category": "hospital",
    "title": "Nurse Taking Temperature 护士量体温",
    "scene": "护士来给Tom量体温和血压。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Nurse",
      "Tom"
    ],
    "lines": [
      {
        "role": "Nurse",
        "en": "Good morning, Tom. I need to check your temperature.",
        "zh": "早上好，汤姆。我需要量一下你的体温。"
      },
      {
        "role": "Tom",
        "en": "OK. Do I put this under my arm?",
        "zh": "好的。是放在腋下吗？"
      },
      {
        "role": "Nurse",
        "en": "Yes, that is right. Hold it still for three minutes.",
        "zh": "对的。保持不动三分钟。"
      },
      {
        "role": "Tom",
        "en": "Am I still having a fever?",
        "zh": "我还在发烧吗？"
      },
      {
        "role": "Nurse",
        "en": "Your temperature is thirty-seven point two. Almost normal.",
        "zh": "你的体温三十七点二度。差不多正常了。"
      },
      {
        "role": "Tom",
        "en": "That is good news! Can I go home today?",
        "zh": "好消息！我今天能回家吗？"
      },
      {
        "role": "Nurse",
        "en": "The doctor will decide that later.",
        "zh": "医生稍后会决定的。"
      },
      {
        "role": "Tom",
        "en": "I really miss my mom and dad.",
        "zh": "我真的很想爸爸妈妈。"
      },
      {
        "role": "Nurse",
        "en": "I know. They will come to see you this afternoon.",
        "zh": "我知道。他们下午会来看你。"
      },
      {
        "role": "Tom",
        "en": "Thank you, Nurse. You are very kind.",
        "zh": "谢谢你，护士。你很善良。"
      }
    ]
  },
  {
    "id": 113,
    "category": "hospital",
    "title": "Doctor Prescribing Medicine 医生开药",
    "scene": "医生给Lily开药并交代用法。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Doctor",
      "Lily"
    ],
    "lines": [
      {
        "role": "Doctor",
        "en": "Lily, I am going to give you some medicine.",
        "zh": "莉莉，我给你开一些药。"
      },
      {
        "role": "Lily",
        "en": "OK, Doctor. How many pills do I take?",
        "zh": "好的，医生。我要吃几片药？"
      },
      {
        "role": "Doctor",
        "en": "These are antibiotics. Take one pill twice a day.",
        "zh": "这是消炎药。每天两次，每次一片。"
      },
      {
        "role": "Lily",
        "en": "For how many days?",
        "zh": "要吃几天？"
      },
      {
        "role": "Doctor",
        "en": "For five days. Do not stop even if you feel better.",
        "zh": "吃五天。即使感觉好了也不要停。"
      },
      {
        "role": "Lily",
        "en": "Can I take it on an empty stomach?",
        "zh": "可以空腹吃吗？"
      },
      {
        "role": "Doctor",
        "en": "No, take it after breakfast and after dinner.",
        "zh": "不行，早饭后和晚饭后吃。"
      },
      {
        "role": "Lily",
        "en": "Are there any side effects?",
        "zh": "有什么副作用吗？"
      },
      {
        "role": "Doctor",
        "en": "You might feel a little sleepy. That is normal.",
        "zh": "你可能会觉得有点困。那很正常。"
      },
      {
        "role": "Lily",
        "en": "Thank you, Doctor. I understand now.",
        "zh": "谢谢医生。我明白了。"
      }
    ]
  },
  {
    "id": 114,
    "category": "hospital",
    "title": "Counseling Session 心理咨询",
    "scene": "Tom和学校心理咨询师谈话。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Counselor"
    ],
    "lines": [
      {
        "role": "Counselor",
        "en": "Hello, Tom. How have you been feeling lately?",
        "zh": "你好，汤姆。你最近感觉怎么样？"
      },
      {
        "role": "Tom",
        "en": "I have been feeling a little sad and worried.",
        "zh": "我感觉有点难过和担心。"
      },
      {
        "role": "Counselor",
        "en": "Can you tell me what is making you feel that way?",
        "zh": "能告诉我是什么让你有这样的感觉吗？"
      },
      {
        "role": "Tom",
        "en": "I am worried about my exams. I am afraid I will do badly.",
        "zh": "我担心考试。我害怕考不好。"
      },
      {
        "role": "Counselor",
        "en": "It is normal to feel worried. Everyone feels that way sometimes.",
        "zh": "担心是正常的。每个人有时候都会有这种感觉。"
      },
      {
        "role": "Tom",
        "en": "What can I do to feel better?",
        "zh": "我怎样才能感觉好一些？"
      },
      {
        "role": "Counselor",
        "en": "Try to study a little every day. Do not wait until the last day.",
        "zh": "尝试每天学一点。不要等到最后一天。"
      },
      {
        "role": "Tom",
        "en": "I also have trouble sleeping at night.",
        "zh": "我晚上也睡不好。"
      },
      {
        "role": "Counselor",
        "en": "Try reading a book before bed. It helps you relax.",
        "zh": "睡前试试看书。那能帮你放松。"
      },
      {
        "role": "Tom",
        "en": "Thank you. I feel better after talking to you.",
        "zh": "谢谢你。跟你聊完我感觉好多了。"
      }
    ]
  },
  {
    "id": 115,
    "category": "hospital",
    "title": "Traditional Chinese Medicine 中医看诊",
    "scene": "Grandma带Tom去看中医。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Doctor"
    ],
    "lines": [
      {
        "role": "Doctor",
        "en": "Come in, sit down. What seems to be the problem?",
        "zh": "进来，请坐。有什么不舒服的？"
      },
      {
        "role": "Tom",
        "en": "I have been coughing for two weeks.",
        "zh": "我咳嗽两周了。"
      },
      {
        "role": "Doctor",
        "en": "Let me feel your pulse. Put your wrist here.",
        "zh": "我给你号个脉。把手腕放这里。"
      },
      {
        "role": "Tom",
        "en": "Can you tell what is wrong from my pulse?",
        "zh": "从脉象能看出什么问题吗？"
      },
      {
        "role": "Doctor",
        "en": "Yes. You also need to show me your tongue.",
        "zh": "能。你还需要给我看看舌头。"
      },
      {
        "role": "Tom",
        "en": "Like this?",
        "zh": "这样吗？"
      },
      {
        "role": "Doctor",
        "en": "Good. I will prescribe some herbal medicine for you.",
        "zh": "好的。我给你开些中药。"
      },
      {
        "role": "Tom",
        "en": "Does Chinese medicine taste bad?",
        "zh": "中药很难喝吗？"
      },
      {
        "role": "Doctor",
        "en": "It can be bitter, but it works very well.",
        "zh": "可能有点苦，但效果很好。"
      },
      {
        "role": "Tom",
        "en": "I will drink it. I want to get well soon.",
        "zh": "我会喝的。我想快点好起来。"
      }
    ]
  },
  {
    "id": 116,
    "category": "hospital",
    "title": "Allergy Symptoms 过敏症状",
    "scene": "Lily身上起红疹子去看医生。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Lily",
      "Doctor"
    ],
    "lines": [
      {
        "role": "Lily",
        "en": "Doctor, I have red spots all over my arms.",
        "zh": "医生，我手臂上全是红疹子。"
      },
      {
        "role": "Doctor",
        "en": "When did the spots appear?",
        "zh": "疹子什么时候出现的？"
      },
      {
        "role": "Lily",
        "en": "This morning. They are very itchy.",
        "zh": "今天早上。非常痒。"
      },
      {
        "role": "Doctor",
        "en": "Did you eat anything new or go anywhere yesterday?",
        "zh": "你昨天吃了什么新东西或者去了哪里？"
      },
      {
        "role": "Lily",
        "en": "I went to the park. There were many flowers.",
        "zh": "我去了公园。那里有很多花。"
      },
      {
        "role": "Doctor",
        "en": "You might be allergic to pollen. It is spring.",
        "zh": "你可能对花粉过敏。现在是春天。"
      },
      {
        "role": "Lily",
        "en": "What should I do?",
        "zh": "我该怎么办？"
      },
      {
        "role": "Doctor",
        "en": "Take this allergy medicine once a day.",
        "zh": "这抗过敏药每天吃一次。"
      },
      {
        "role": "Lily",
        "en": "Will the spots go away?",
        "zh": "疹子会消失吗？"
      },
      {
        "role": "Doctor",
        "en": "Yes, in a few days. Try to stay away from flowers.",
        "zh": "会的，过几天就好。尽量远离花。"
      }
    ]
  },
  {
    "id": 117,
    "category": "hospital",
    "title": "Sports Injury 运动受伤",
    "scene": "Mike踢球时扭伤了脚去看医生。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mike",
      "Doctor"
    ],
    "lines": [
      {
        "role": "Mike",
        "en": "Doctor, I hurt my foot during a soccer game.",
        "zh": "医生，我踢足球时脚受伤了。"
      },
      {
        "role": "Doctor",
        "en": "How did it happen?",
        "zh": "怎么弄伤的？"
      },
      {
        "role": "Mike",
        "en": "I was running and I twisted my ankle.",
        "zh": "我在跑步时扭到了脚踝。"
      },
      {
        "role": "Doctor",
        "en": "Let me see. Can you stand on it?",
        "zh": "让我看看。你能站上去吗？"
      },
      {
        "role": "Mike",
        "en": "It hurts too much. I cannot put any weight on it.",
        "zh": "太疼了。我没办法用力。"
      },
      {
        "role": "Doctor",
        "en": "It does not look broken. But it is badly swollen.",
        "zh": "看起来没有骨折。但是肿得很厉害。"
      },
      {
        "role": "Mike",
        "en": "What should I do?",
        "zh": "我该怎么办？"
      },
      {
        "role": "Doctor",
        "en": "Put some ice on it and rest your foot.",
        "zh": "冰敷一下，让脚休息。"
      },
      {
        "role": "Mike",
        "en": "How long until I can play soccer again?",
        "zh": "多久才能再踢球？"
      },
      {
        "role": "Doctor",
        "en": "About two weeks. Do not rush it.",
        "zh": "大概两周。别着急。"
      }
    ]
  },
  {
    "id": 118,
    "category": "hospital",
    "title": "Skin Problem 皮肤问题",
    "scene": "Jack脸上长了痘痘去看皮肤科医生。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Jack",
      "Doctor"
    ],
    "lines": [
      {
        "role": "Jack",
        "en": "Doctor, I have some red bumps on my face.",
        "zh": "医生，我脸上长了一些红色的痘痘。"
      },
      {
        "role": "Doctor",
        "en": "How long have you had them?",
        "zh": "长了多久了？"
      },
      {
        "role": "Jack",
        "en": "About one month. They will not go away.",
        "zh": "大约一个月了。一直不好。"
      },
      {
        "role": "Doctor",
        "en": "Do you touch your face a lot with your hands?",
        "zh": "你经常用手摸脸吗？"
      },
      {
        "role": "Jack",
        "en": "Yes, I think I do. Is that bad?",
        "zh": "是的，我想是的。这不好吗？"
      },
      {
        "role": "Doctor",
        "en": "Your hands have a lot of germs. Try not to touch your face.",
        "zh": "手上有很多细菌。尽量不要摸脸。"
      },
      {
        "role": "Jack",
        "en": "What else should I do?",
        "zh": "我还应该做什么？"
      },
      {
        "role": "Doctor",
        "en": "Wash your face twice a day with warm water.",
        "zh": "每天用温水洗两次脸。"
      },
      {
        "role": "Jack",
        "en": "Should I use any cream?",
        "zh": "我需要涂什么药膏吗？"
      },
      {
        "role": "Doctor",
        "en": "Yes, use this cream every night before bed.",
        "zh": "需要，每晚睡前涂这个药膏。"
      }
    ]
  },
  {
    "id": 119,
    "category": "hospital",
    "title": "Sore Throat 喉咙疼",
    "scene": "Ann嗓子疼去看医生。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Ann",
      "Doctor"
    ],
    "lines": [
      {
        "role": "Ann",
        "en": "Doctor, my throat hurts when I swallow.",
        "zh": "医生，我咽东西的时候嗓子疼。"
      },
      {
        "role": "Doctor",
        "en": "Let me look at your throat. Open wide and say ah.",
        "zh": "我看看你的嗓子。张大嘴说\"啊\"。"
      },
      {
        "role": "Ann",
        "en": "Ahhh... Does it look bad?",
        "zh": "啊——... 看起来严重吗？"
      },
      {
        "role": "Doctor",
        "en": "Your throat is a little red and swollen.",
        "zh": "你的嗓子有点红肿。"
      },
      {
        "role": "Ann",
        "en": "Is it a cold or something worse?",
        "zh": "是感冒还是更严重？"
      },
      {
        "role": "Doctor",
        "en": "It looks like a sore throat from a cold.",
        "zh": "看起来是感冒引起的嗓子疼。"
      },
      {
        "role": "Ann",
        "en": "What medicine should I take?",
        "zh": "我应该吃什么药？"
      },
      {
        "role": "Doctor",
        "en": "Gargle with warm salt water twice a day.",
        "zh": "每天用温盐水漱口两次。"
      },
      {
        "role": "Ann",
        "en": "Anything else I can do?",
        "zh": "还有什么我能做的吗？"
      },
      {
        "role": "Doctor",
        "en": "Drink warm water and do not eat spicy food.",
        "zh": "喝温水，不要吃辣的食物。"
      }
    ]
  },
  {
    "id": 120,
    "category": "hospital",
    "title": "Follow-up Visit 复诊随访",
    "scene": "Tom感冒好了来医院复诊。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Doctor"
    ],
    "lines": [
      {
        "role": "Doctor",
        "en": "Hello, Tom. How are you feeling today?",
        "zh": "你好，汤姆。你今天感觉怎么样？"
      },
      {
        "role": "Tom",
        "en": "Much better, Doctor. I do not have a fever anymore.",
        "zh": "好多了，医生。我已经不发烧了。"
      },
      {
        "role": "Doctor",
        "en": "That is good. Are you still coughing?",
        "zh": "那很好。还在咳嗽吗？"
      },
      {
        "role": "Tom",
        "en": "A little, but not as much as before.",
        "zh": "还有一点，但不像之前那么厉害了。"
      },
      {
        "role": "Doctor",
        "en": "Let me listen to your breathing. Breathe in deeply.",
        "zh": "我听听你的呼吸。深吸一口气。"
      },
      {
        "role": "Tom",
        "en": "Like this?",
        "zh": "这样吗？"
      },
      {
        "role": "Doctor",
        "en": "Good. Your lungs sound clear. You are recovering well.",
        "zh": "好的。你的肺部听起来很清晰。恢复得不错。"
      },
      {
        "role": "Tom",
        "en": "Do I still need to take the medicine?",
        "zh": "我还需要继续吃药吗？"
      },
      {
        "role": "Doctor",
        "en": "Take it for two more days, then you can stop.",
        "zh": "再吃两天，然后就可以停了。"
      },
      {
        "role": "Tom",
        "en": "Thank you, Doctor! I will go back to school tomorrow.",
        "zh": "谢谢医生！我明天就回学校。"
      }
    ]
  },
  {
    "id": 121,
    "category": "family",
    "title": "Breakfast Conversation 早餐对话",
    "scene": "一家人早上在餐桌上吃早餐聊天。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mom",
      "Tom"
    ],
    "lines": [
      {
        "role": "Mom",
        "en": "Good morning, Tom. Time for breakfast!",
        "zh": "早上好，汤姆。该吃早餐了！"
      },
      {
        "role": "Tom",
        "en": "Good morning, Mom. What is for breakfast?",
        "zh": "早上好，妈妈。早餐吃什么？"
      },
      {
        "role": "Mom",
        "en": "I made eggs, bread, and milk today.",
        "zh": "今天做了鸡蛋、面包和牛奶。"
      },
      {
        "role": "Tom",
        "en": "Yummy! My favorite. Can I have some jam?",
        "zh": "好吃！我最喜欢的。能来点果酱吗？"
      },
      {
        "role": "Mom",
        "en": "Sure. Here is the strawberry jam.",
        "zh": "当然。这是草莓果酱。"
      },
      {
        "role": "Tom",
        "en": "What time is it? I do not want to be late.",
        "zh": "几点了？我不想迟到。"
      },
      {
        "role": "Mom",
        "en": "It is seven o'clock. You have plenty of time.",
        "zh": "七点了。你有的是时间。"
      },
      {
        "role": "Tom",
        "en": "Did you pack my lunch?",
        "zh": "你给我装午饭了吗？"
      },
      {
        "role": "Mom",
        "en": "Yes. A sandwich, an apple, and some juice.",
        "zh": "装了。一个三明治、一个苹果和一些果汁。"
      },
      {
        "role": "Tom",
        "en": "Thank you, Mom. I will wash my face and brush my teeth.",
        "zh": "谢谢你，妈妈。我去洗脸刷牙。"
      }
    ]
  },
  {
    "id": 122,
    "category": "family",
    "title": "Dinner Chat 晚餐聊天",
    "scene": "一家人晚上边吃晚饭边聊天。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Dad",
      "Lily"
    ],
    "lines": [
      {
        "role": "Dad",
        "en": "How was school today, Lily?",
        "zh": "今天学校怎么样，莉莉？"
      },
      {
        "role": "Lily",
        "en": "It was great! We had a fun PE class.",
        "zh": "很好！我们上了有趣的体育课。"
      },
      {
        "role": "Dad",
        "en": "What did you do in PE class?",
        "zh": "你们体育课做了什么？"
      },
      {
        "role": "Lily",
        "en": "We played basketball. I scored three points!",
        "zh": "我们打篮球了。我得了三分！"
      },
      {
        "role": "Dad",
        "en": "That is wonderful! I am proud of you.",
        "zh": "太棒了！我为你骄傲。"
      },
      {
        "role": "Lily",
        "en": "Dad, can we play basketball together this weekend?",
        "zh": "爸爸，这周末我们能一起打篮球吗？"
      },
      {
        "role": "Dad",
        "en": "Of course. Saturday morning sounds good.",
        "zh": "当然可以。周六上午不错。"
      },
      {
        "role": "Lily",
        "en": "Mom, this soup is delicious. What is in it?",
        "zh": "妈妈，这个汤好喝。里面放了什么？"
      },
      {
        "role": "Dad",
        "en": "Your mom makes the best soup in the world.",
        "zh": "你妈妈做的汤是世界上最好喝的。"
      },
      {
        "role": "Lily",
        "en": "I agree! Can I have some more, please?",
        "zh": "同意！我能再要一些吗？"
      }
    ]
  },
  {
    "id": 123,
    "category": "family",
    "title": "Doing Chores Together 做家务",
    "scene": "Mom让Tom帮忙做家务。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mom",
      "Tom"
    ],
    "lines": [
      {
        "role": "Mom",
        "en": "Tom, it is time to do some chores.",
        "zh": "汤姆，该做些家务了。"
      },
      {
        "role": "Tom",
        "en": "OK, Mom. What do you want me to do?",
        "zh": "好的，妈妈。你想让我做什么？"
      },
      {
        "role": "Mom",
        "en": "Can you sweep the floor in the living room?",
        "zh": "你能扫一下客厅的地吗？"
      },
      {
        "role": "Tom",
        "en": "Sure. I will do it right now.",
        "zh": "当然。我现在就去。"
      },
      {
        "role": "Mom",
        "en": "After that, can you take out the trash?",
        "zh": "扫完之后，你能倒一下垃圾吗？"
      },
      {
        "role": "Tom",
        "en": "No problem. I will do both.",
        "zh": "没问题。两个我都做。"
      },
      {
        "role": "Mom",
        "en": "Thank you. I am cleaning the kitchen.",
        "zh": "谢谢你。我在打扫厨房。"
      },
      {
        "role": "Tom",
        "en": "Mom, where should I put the trash bag?",
        "zh": "妈妈，垃圾袋放哪里？"
      },
      {
        "role": "Mom",
        "en": "There is a big bin outside the door.",
        "zh": "门外有一个大垃圾桶。"
      },
      {
        "role": "Tom",
        "en": "Got it. We make a great team, Mom!",
        "zh": "明白了。我们配合得很好，妈妈！"
      }
    ]
  },
  {
    "id": 124,
    "category": "family",
    "title": "Watching TV Together 看电视剧",
    "scene": "一家人在客厅一起看电视。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Dad",
      "Lily"
    ],
    "lines": [
      {
        "role": "Dad",
        "en": "Lily, do you want to watch TV with me?",
        "zh": "莉莉，你想和我一起看电视吗？"
      },
      {
        "role": "Lily",
        "en": "Yes! Can we watch the animal show?",
        "zh": "想！我们能看动物节目吗？"
      },
      {
        "role": "Dad",
        "en": "Sure. Let me find the channel.",
        "zh": "当然。我来找频道。"
      },
      {
        "role": "Lily",
        "en": "Look at those pandas! They are so cute!",
        "zh": "看那些熊猫！太可爱了！"
      },
      {
        "role": "Dad",
        "en": "They eat bamboo all day. Pandas are very special.",
        "zh": "它们整天吃竹子。熊猫很特别。"
      },
      {
        "role": "Lily",
        "en": "I want to see a real panda someday.",
        "zh": "我希望有一天能见到真正的熊猫。"
      },
      {
        "role": "Dad",
        "en": "Maybe we can go to the panda reserve this vacation.",
        "zh": "也许这个假期我们可以去熊猫基地。"
      },
      {
        "role": "Lily",
        "en": "Really? That would be amazing!",
        "zh": "真的吗？那太棒了！"
      },
      {
        "role": "Dad",
        "en": "But first, finish your homework.",
        "zh": "不过首先，你要先完成作业。"
      },
      {
        "role": "Lily",
        "en": "OK, Dad. I will do it right after the show.",
        "zh": "好的，爸爸。节目看完我马上就做。"
      }
    ]
  },
  {
    "id": 125,
    "category": "family",
    "title": "Helping with Homework 辅导作业",
    "scene": "Dad辅导Tom做数学作业。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Dad",
      "Tom"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Dad, can you help me with my math homework?",
        "zh": "爸爸，你能帮我做数学作业吗？"
      },
      {
        "role": "Dad",
        "en": "Of course. Which question is hard?",
        "zh": "当然可以。哪道题难？"
      },
      {
        "role": "Tom",
        "en": "This word problem. I do not understand it.",
        "zh": "这道应用题。我不理解。"
      },
      {
        "role": "Dad",
        "en": "Let me read it. OK, you need to find the total cost.",
        "zh": "我读一下。好的，你需要算出总价。"
      },
      {
        "role": "Tom",
        "en": "There are three pencils at two yuan each. Right?",
        "zh": "三支铅笔，每支两元。对吗？"
      },
      {
        "role": "Dad",
        "en": "Yes. So how much is three times two?",
        "zh": "对。那三乘以二等于多少？"
      },
      {
        "role": "Tom",
        "en": "Six yuan. Oh, that is easy!",
        "zh": "六元。哦，很简单嘛！"
      },
      {
        "role": "Dad",
        "en": "Now add the notebook which costs five yuan.",
        "zh": "现在加上五元的笔记本。"
      },
      {
        "role": "Tom",
        "en": "Six plus five is eleven. The answer is eleven yuan!",
        "zh": "六加五等于十一。答案是十一元！"
      },
      {
        "role": "Dad",
        "en": "Great job! You just needed to read it more carefully.",
        "zh": "做得好！你只需要更仔细地读题。"
      }
    ]
  },
  {
    "id": 126,
    "category": "family",
    "title": "Planning a Weekend Trip 周末出游计划",
    "scene": "一家人讨论周末去哪里玩。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mom",
      "Tom"
    ],
    "lines": [
      {
        "role": "Mom",
        "en": "What do you want to do this weekend?",
        "zh": "这周末你们想做什么？"
      },
      {
        "role": "Tom",
        "en": "Can we go to the amusement park?",
        "zh": "我们可以去游乐园吗？"
      },
      {
        "role": "Mom",
        "en": "That is a good idea. The weather will be nice.",
        "zh": "好主意。天气会很好。"
      },
      {
        "role": "Tom",
        "en": "I want to ride the roller coaster!",
        "zh": "我想坐过山车！"
      },
      {
        "role": "Mom",
        "en": "Are you brave enough for that?",
        "zh": "你有胆量坐吗？"
      },
      {
        "role": "Tom",
        "en": "Yes! I am not scared at all!",
        "zh": "有！我一点都不怕！"
      },
      {
        "role": "Mom",
        "en": "OK. We will also need to bring some snacks and water.",
        "zh": "好的。我们还需要带些零食和水。"
      },
      {
        "role": "Tom",
        "en": "I can help pack the bags. What should I bring?",
        "zh": "我可以帮忙装包。我该带什么？"
      },
      {
        "role": "Mom",
        "en": "Sunscreen, a hat, and your water bottle.",
        "zh": "防晒霜、帽子和你的水杯。"
      },
      {
        "role": "Tom",
        "en": "I am so excited! This will be the best weekend!",
        "zh": "我太激动了！这将是最好的周末！"
      }
    ]
  },
  {
    "id": 127,
    "category": "family",
    "title": "Discussing Pocket Money 讨论零花钱",
    "scene": "Tom和Dad讨论零花钱的事情。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Dad"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Dad, can I have some more pocket money?",
        "zh": "爸爸，可以多给我一些零花钱吗？"
      },
      {
        "role": "Dad",
        "en": "How much do you get every week now?",
        "zh": "你现在每周拿多少？"
      },
      {
        "role": "Tom",
        "en": "Twenty yuan. But it is not enough.",
        "zh": "二十元。但不够用。"
      },
      {
        "role": "Dad",
        "en": "What do you spend it on?",
        "zh": "你都花在什么上了？"
      },
      {
        "role": "Tom",
        "en": "I buy some snacks and a new comic book sometimes.",
        "zh": "我买些零食，有时候买新的漫画书。"
      },
      {
        "role": "Dad",
        "en": "How about you save some money each week?",
        "zh": "你每周存一些钱怎么样？"
      },
      {
        "role": "Tom",
        "en": "I want to save for a new bike.",
        "zh": "我想存钱买一辆新自行车。"
      },
      {
        "role": "Dad",
        "en": "That is a good goal. I will give you thirty yuan a week.",
        "zh": "好目标。我每周给你三十元。"
      },
      {
        "role": "Tom",
        "en": "Thank you, Dad! I will save half of it.",
        "zh": "谢谢你，爸爸！我会存一半的。"
      },
      {
        "role": "Dad",
        "en": "That is very responsible. I am proud of you.",
        "zh": "很有责任心。我为你骄傲。"
      }
    ]
  },
  {
    "id": 128,
    "category": "family",
    "title": "Taking Care of a Pet 养宠物",
    "scene": "一家人讨论养宠物的事情。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mom",
      "Lily"
    ],
    "lines": [
      {
        "role": "Lily",
        "en": "Mom, can we get a pet?",
        "zh": "妈妈，我们能养一只宠物吗？"
      },
      {
        "role": "Mom",
        "en": "What kind of pet do you want?",
        "zh": "你想养什么宠物？"
      },
      {
        "role": "Lily",
        "en": "I really want a puppy. They are so cute!",
        "zh": "我很想要一只小狗。它们好可爱！"
      },
      {
        "role": "Mom",
        "en": "A dog needs a lot of care. Are you ready for that?",
        "zh": "狗需要很多照顾。你准备好了吗？"
      },
      {
        "role": "Lily",
        "en": "Yes! I will walk it every day and feed it.",
        "zh": "准备好了！我会每天遛它、喂它。"
      },
      {
        "role": "Mom",
        "en": "Who will clean up after it?",
        "zh": "谁负责打扫呢？"
      },
      {
        "role": "Lily",
        "en": "I will! I promise to take good care of it.",
        "zh": "我来！我保证会好好照顾它。"
      },
      {
        "role": "Mom",
        "en": "OK. Let us go to the animal shelter this weekend.",
        "zh": "好吧。这周末我们去动物收容所看看。"
      },
      {
        "role": "Lily",
        "en": "Really? I am so happy!",
        "zh": "真的吗？我太开心了！"
      },
      {
        "role": "Mom",
        "en": "But remember, a pet is a big responsibility.",
        "zh": "但记住，养宠物是很大的责任。"
      }
    ]
  },
  {
    "id": 129,
    "category": "family",
    "title": "Family Meeting 家庭会议",
    "scene": "全家人坐在一起开家庭会议。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Dad",
      "Mom"
    ],
    "lines": [
      {
        "role": "Dad",
        "en": "Everyone, let us have a family meeting.",
        "zh": "大家注意，我们开个家庭会议。"
      },
      {
        "role": "Mom",
        "en": "What do you want to talk about?",
        "zh": "你想谈什么？"
      },
      {
        "role": "Dad",
        "en": "Summer vacation is coming. Let us plan a trip.",
        "zh": "暑假快到了。我们来计划一次旅行。"
      },
      {
        "role": "Mom",
        "en": "That sounds great. Where should we go?",
        "zh": "听起来不错。我们去哪里？"
      },
      {
        "role": "Dad",
        "en": "We could go to the beach or the mountains.",
        "zh": "我们可以去海边或者山里。"
      },
      {
        "role": "Mom",
        "en": "The beach would be fun for the kids.",
        "zh": "海边对孩子们来说会很有趣。"
      },
      {
        "role": "Dad",
        "en": "And we can also visit Grandma on the way.",
        "zh": "而且我们还可以顺路去看奶奶。"
      },
      {
        "role": "Mom",
        "en": "She would love that. How many days should we go?",
        "zh": "她一定很高兴。我们去几天？"
      },
      {
        "role": "Dad",
        "en": "Five days should be enough.",
        "zh": "五天应该够了。"
      },
      {
        "role": "Mom",
        "en": "Let me check the dates and book a hotel.",
        "zh": "我来查一下日期，订个酒店。"
      }
    ]
  },
  {
    "id": 130,
    "category": "family",
    "title": "Siblings Arguing and Making Up 兄弟姐妹吵架和好",
    "scene": "Tom和Sister因为玩具吵架后又和好。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Sister"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Give me back my toy! You always take my things!",
        "zh": "把我的玩具还给我！你总是拿我的东西！"
      },
      {
        "role": "Sister",
        "en": "I was just playing with it. You never let me play!",
        "zh": "我只是玩一下。你从来不让我玩！"
      },
      {
        "role": "Tom",
        "en": "Because you break everything!",
        "zh": "因为你什么东西都会弄坏！"
      },
      {
        "role": "Sister",
        "en": "I do not! You are so mean to me!",
        "zh": "我才不会！你对我太刻薄了！"
      },
      {
        "role": "Tom",
        "en": "I am sorry I yelled at you.",
        "zh": "对不起我对你大喊大叫了。"
      },
      {
        "role": "Sister",
        "en": "I am sorry too. I should have asked first.",
        "zh": "我也对不起。我应该先问你。"
      },
      {
        "role": "Tom",
        "en": "Do you want to play together?",
        "zh": "你想一起玩吗？"
      },
      {
        "role": "Sister",
        "en": "Yes. Can we build a tower with the blocks?",
        "zh": "想。我们用积木搭一座塔好不好？"
      },
      {
        "role": "Tom",
        "en": "Good idea. Let me help you.",
        "zh": "好主意。我来帮你。"
      },
      {
        "role": "Sister",
        "en": "You are the best brother in the world!",
        "zh": "你是世界上最好的哥哥！"
      }
    ]
  },
  {
    "id": 131,
    "category": "family",
    "title": "Moving to a New Home 搬家",
    "scene": "一家人在打包东西准备搬家。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mom",
      "Tom"
    ],
    "lines": [
      {
        "role": "Mom",
        "en": "Tom, please help me pack your books into this box.",
        "zh": "汤姆，请帮我把你的书装进这个箱子里。"
      },
      {
        "role": "Tom",
        "en": "OK, Mom. Do I need to pack all of them?",
        "zh": "好的，妈妈。全部都要装吗？"
      },
      {
        "role": "Mom",
        "en": "Pack the books you read often. The rest can go in a big box.",
        "zh": "常看的书装起来。剩下的放大箱子里。"
      },
      {
        "role": "Tom",
        "en": "I am going to miss this room.",
        "zh": "我会想念这个房间的。"
      },
      {
        "role": "Mom",
        "en": "I know. But our new home has a bigger room for you.",
        "zh": "我知道。但我们新家给你准备了更大的房间。"
      },
      {
        "role": "Tom",
        "en": "Really? Can I paint the walls blue?",
        "zh": "真的吗？我可以把墙刷成蓝色吗？"
      },
      {
        "role": "Mom",
        "en": "We can talk about that. First, finish packing.",
        "zh": "这个可以商量。先把东西装好。"
      },
      {
        "role": "Tom",
        "en": "Mom, what should I do with these old toys?",
        "zh": "妈妈，这些旧玩具怎么办？"
      },
      {
        "role": "Mom",
        "en": "Keep the ones you like. We can give the rest away.",
        "zh": "喜欢的留下。其他的可以送人。"
      },
      {
        "role": "Tom",
        "en": "I am excited about the new home now!",
        "zh": "我现在对新家很期待了！"
      }
    ]
  },
  {
    "id": 132,
    "category": "family",
    "title": "Celebrating Chinese New Year 过年过节",
    "scene": "全家人准备过年，贴春联、包红包。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Grandma",
      "Tom"
    ],
    "lines": [
      {
        "role": "Grandma",
        "en": "Tom, come here. Help Grandma put up the couplets.",
        "zh": "汤姆，过来。帮奶奶贴春联。"
      },
      {
        "role": "Tom",
        "en": "OK, Grandma! This one says \"Happy New Year\"!",
        "zh": "好的，奶奶！这个写的是\"新年快乐\"！"
      },
      {
        "role": "Grandma",
        "en": "Very good! Can you read the other one?",
        "zh": "真棒！你能读另一张吗？"
      },
      {
        "role": "Tom",
        "en": "It says \"Good luck and happiness\"!",
        "zh": "上面写的是\"吉祥如意\"！"
      },
      {
        "role": "Grandma",
        "en": "Now Grandma has a red envelope for you.",
        "zh": "现在奶奶给你一个红包。"
      },
      {
        "role": "Tom",
        "en": "Thank you, Grandma! Can I open it?",
        "zh": "谢谢奶奶！我可以打开吗？"
      },
      {
        "role": "Grandma",
        "en": "You can open it on New Year morning.",
        "zh": "大年初一早上再打开。"
      },
      {
        "role": "Tom",
        "en": "What are we having for dinner tonight?",
        "zh": "今晚年夜饭吃什么？"
      },
      {
        "role": "Grandma",
        "en": "Fish, dumplings, and many of your favorites!",
        "zh": "鱼、饺子，还有好多你爱吃的！"
      },
      {
        "role": "Tom",
        "en": "I love Chinese New Year! It is the best holiday!",
        "zh": "我喜欢过年！这是最好的节日！"
      }
    ]
  },
  {
    "id": 133,
    "category": "family",
    "title": "Making Dumplings 包饺子",
    "scene": "全家人一起包饺子。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mom",
      "Lily"
    ],
    "lines": [
      {
        "role": "Mom",
        "en": "Lily, come and help me make dumplings.",
        "zh": "莉莉，来帮妈妈包饺子。"
      },
      {
        "role": "Lily",
        "en": "I want to learn! How do I start?",
        "zh": "我想学！怎么开始？"
      },
      {
        "role": "Mom",
        "en": "First, take a piece of dough and roll it flat.",
        "zh": "首先，拿一块面团擀平。"
      },
      {
        "role": "Lily",
        "en": "Like this? It looks like a small circle.",
        "zh": "这样吗？看起来像一个小圆片。"
      },
      {
        "role": "Mom",
        "en": "Good. Now put some filling in the middle.",
        "zh": "很好。现在在中间放些馅料。"
      },
      {
        "role": "Lily",
        "en": "How much filling should I put?",
        "zh": "我该放多少馅？"
      },
      {
        "role": "Mom",
        "en": "Not too much. Now fold it and pinch the edges.",
        "zh": "不要太多。现在对折，把边捏紧。"
      },
      {
        "role": "Lily",
        "en": "Mine does not look as pretty as yours.",
        "zh": "我包的没有你的好看。"
      },
      {
        "role": "Mom",
        "en": "It is your first time. You will get better!",
        "zh": "你第一次包。会越来越好的！"
      },
      {
        "role": "Lily",
        "en": "I put a coin in one! Whoever gets it will be lucky!",
        "zh": "我在一个里面放了硬币！谁吃到就幸运！"
      }
    ]
  },
  {
    "id": 134,
    "category": "family",
    "title": "Family Game Night 家庭游戏",
    "scene": "一家人晚上一起玩桌游。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Dad",
      "Tom"
    ],
    "lines": [
      {
        "role": "Dad",
        "en": "It is Friday night! Game night!",
        "zh": "周五晚上！游戏之夜！"
      },
      {
        "role": "Tom",
        "en": "Yes! What are we playing tonight?",
        "zh": "太好了！今晚玩什么？"
      },
      {
        "role": "Dad",
        "en": "How about a board game? I got a new one.",
        "zh": "玩桌游怎么样？我买了一个新的。"
      },
      {
        "role": "Tom",
        "en": "What is it called?",
        "zh": "叫什么名字？"
      },
      {
        "role": "Dad",
        "en": "It is called \"Word Race\". You need to spell words fast.",
        "zh": "叫\"单词竞速\"。你需要快速拼写单词。"
      },
      {
        "role": "Tom",
        "en": "That sounds fun. I am good at spelling!",
        "zh": "听起来很有趣。我擅长拼写！"
      },
      {
        "role": "Dad",
        "en": "We will see about that. Let me read the rules.",
        "zh": "那可不一定。我来读一下规则。"
      },
      {
        "role": "Tom",
        "en": "Can Mom play too?",
        "zh": "妈妈也能一起玩吗？"
      },
      {
        "role": "Dad",
        "en": "Of course. The more players, the better!",
        "zh": "当然。人越多越好！"
      },
      {
        "role": "Tom",
        "en": "I am going to win tonight!",
        "zh": "今晚我一定要赢！"
      }
    ]
  },
  {
    "id": 135,
    "category": "family",
    "title": "Cleaning Up the Room 整理房间",
    "scene": "Mom让Lily整理自己的房间。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mom",
      "Lily"
    ],
    "lines": [
      {
        "role": "Mom",
        "en": "Lily, your room is very messy. Please clean it up.",
        "zh": "莉莉，你的房间很乱。请收拾一下。"
      },
      {
        "role": "Lily",
        "en": "But Mom, I will do it later. I am busy now.",
        "zh": "但是妈妈，我等一下再做。我现在很忙。"
      },
      {
        "role": "Mom",
        "en": "You said that yesterday. Please do it now.",
        "zh": "你昨天也这么说。请现在就做。"
      },
      {
        "role": "Lily",
        "en": "OK. Where should I start?",
        "zh": "好吧。我从哪里开始？"
      },
      {
        "role": "Mom",
        "en": "First, put all the books on the shelf.",
        "zh": "首先，把所有的书放到书架上。"
      },
      {
        "role": "Lily",
        "en": "And then?",
        "zh": "然后呢？"
      },
      {
        "role": "Mom",
        "en": "Put your dirty clothes in the laundry basket.",
        "zh": "把脏衣服放到洗衣篮里。"
      },
      {
        "role": "Lily",
        "en": "Should I make my bed too?",
        "zh": "我也要铺床吗？"
      },
      {
        "role": "Mom",
        "en": "Yes. A clean room makes you feel happy.",
        "zh": "要的。干净的房间让人心情好。"
      },
      {
        "role": "Lily",
        "en": "You are right. My room looks much better now!",
        "zh": "你说得对。我的房间现在看起来好多了！"
      }
    ]
  },
  {
    "id": 136,
    "category": "family",
    "title": "Preparing for a Birthday Party 生日派对准备",
    "scene": "全家人在准备Tom的生日派对。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mom",
      "Dad"
    ],
    "lines": [
      {
        "role": "Mom",
        "en": "Tom's birthday is tomorrow. We need to get ready.",
        "zh": "明天是汤姆的生日。我们需要准备一下。"
      },
      {
        "role": "Dad",
        "en": "Did you buy the birthday cake?",
        "zh": "你买生日蛋糕了吗？"
      },
      {
        "role": "Mom",
        "en": "Yes. It is a chocolate cake with his name on it.",
        "zh": "买了。是一个巧克力蛋糕，上面有他的名字。"
      },
      {
        "role": "Dad",
        "en": "What about the decorations?",
        "zh": "装饰呢？"
      },
      {
        "role": "Mom",
        "en": "I bought some balloons and a \"Happy Birthday\" banner.",
        "zh": "我买了一些气球和\"生日快乐\"横幅。"
      },
      {
        "role": "Dad",
        "en": "Should we buy some snacks and drinks for his friends?",
        "zh": "我们要给他的朋友买些零食和饮料吗？"
      },
      {
        "role": "Mom",
        "en": "Good idea. Juice, chips, and some fruit.",
        "zh": "好主意。果汁、薯片和一些水果。"
      },
      {
        "role": "Dad",
        "en": "What time are the kids coming?",
        "zh": "孩子们几点来？"
      },
      {
        "role": "Mom",
        "en": "Three in the afternoon. We have plenty of time.",
        "zh": "下午三点。我们有的是时间。"
      },
      {
        "role": "Dad",
        "en": "Let us start decorating early tomorrow morning.",
        "zh": "我们明早早点开始装饰吧。"
      }
    ]
  },
  {
    "id": 137,
    "category": "family",
    "title": "Asking for Help with Homework 写作业求助",
    "scene": "Lily写作业遇到困难向哥哥Tom求助。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Lily",
      "Tom"
    ],
    "lines": [
      {
        "role": "Lily",
        "en": "Tom, can you help me with my English homework?",
        "zh": "汤姆，你能帮我做英语作业吗？"
      },
      {
        "role": "Tom",
        "en": "Sure, Lily. Which part is difficult?",
        "zh": "当然，莉莉。哪部分难？"
      },
      {
        "role": "Lily",
        "en": "I do not know how to spell \"beautiful\".",
        "zh": "我不知道\"beautiful\"怎么拼。"
      },
      {
        "role": "Tom",
        "en": "It is B-E-A-U-T-I-F-U-L. Think of it as \"be-a-u-ti-ful\".",
        "zh": "是B-E-A-U-T-I-F-U-L。可以拆成\"be-a-u-ti-ful\"来记。"
      },
      {
        "role": "Lily",
        "en": "Oh, that helps a lot! What about \"Wednesday\"?",
        "zh": "哦，这很有帮助！\"Wednesday\"呢？"
      },
      {
        "role": "Tom",
        "en": "W-E-D-N-E-S-D-A-Y. Many people misspell this one.",
        "zh": "W-E-D-N-E-S-D-A-Y。很多人都会拼错这个。"
      },
      {
        "role": "Lily",
        "en": "The \"d\" is silent, right?",
        "zh": "\"d\"不发音，对吗？"
      },
      {
        "role": "Tom",
        "en": "Yes! You are getting the hang of it.",
        "zh": "对！你开始掌握窍门了。"
      },
      {
        "role": "Lily",
        "en": "Thank you, Tom. You are a great teacher.",
        "zh": "谢谢你，汤姆。你是个好老师。"
      },
      {
        "role": "Tom",
        "en": "Anytime. Just keep practicing every day.",
        "zh": "随时帮忙。只要每天坚持练习就好。"
      }
    ]
  },
  {
    "id": 138,
    "category": "family",
    "title": "Bedtime Story 睡前故事",
    "scene": "Dad给Tom讲睡前故事。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Dad",
      "Tom"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Dad, can you tell me a story before I go to sleep?",
        "zh": "爸爸，我睡前能给我讲个故事吗？"
      },
      {
        "role": "Dad",
        "en": "Of course. What kind of story do you want?",
        "zh": "当然可以。你想听什么故事？"
      },
      {
        "role": "Tom",
        "en": "A story about a brave little rabbit!",
        "zh": "一个勇敢的小兔子的故事！"
      },
      {
        "role": "Dad",
        "en": "Once upon a time, there was a little rabbit named Ruby.",
        "zh": "从前，有一只小兔子叫露比。"
      },
      {
        "role": "Tom",
        "en": "Was Ruby brave?",
        "zh": "露比勇敢吗？"
      },
      {
        "role": "Dad",
        "en": "Yes. One day, she found a lost bird in the forest.",
        "zh": "很勇敢。有一天，她在森林里发现了一只迷路的小鸟。"
      },
      {
        "role": "Tom",
        "en": "What did she do?",
        "zh": "她做了什么？"
      },
      {
        "role": "Dad",
        "en": "She was scared but she still helped the bird find its way home.",
        "zh": "她很害怕，但还是帮小鸟找到了回家的路。"
      },
      {
        "role": "Tom",
        "en": "She is so brave! I want to be like Ruby.",
        "zh": "她真勇敢！我想像露比一样。"
      },
      {
        "role": "Dad",
        "en": "You are brave too. Now close your eyes and sleep well.",
        "zh": "你也很勇敢。现在闭上眼睛，好好睡吧。"
      }
    ]
  },
  {
    "id": 139,
    "category": "family",
    "title": "Planning a Family Trip 家庭旅行计划",
    "scene": "一家人围坐在一起讨论暑假旅行计划。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Dad",
      "Lily"
    ],
    "lines": [
      {
        "role": "Dad",
        "en": "Let us talk about our summer trip. Any ideas?",
        "zh": "我们来讨论暑假旅行吧。有什么想法？"
      },
      {
        "role": "Lily",
        "en": "I want to go to the beach and swim in the sea!",
        "zh": "我想去海边，在大海里游泳！"
      },
      {
        "role": "Dad",
        "en": "The beach is a great idea. Mom loves the sea too.",
        "zh": "去海边是个好主意。妈妈也喜欢大海。"
      },
      {
        "role": "Lily",
        "en": "Can we stay in a hotel near the beach?",
        "zh": "我们可以住在海边的酒店吗？"
      },
      {
        "role": "Dad",
        "en": "Yes. I will look for a nice hotel with a pool.",
        "zh": "可以。我来找一个带泳池的酒店。"
      },
      {
        "role": "Lily",
        "en": "How many days will we stay?",
        "zh": "我们住几天？"
      },
      {
        "role": "Dad",
        "en": "About four days. We will leave on Monday.",
        "zh": "大概四天。我们周一出发。"
      },
      {
        "role": "Lily",
        "en": "Should I pack my swimsuit and sunglasses?",
        "zh": "我需要带泳衣和太阳镜吗？"
      },
      {
        "role": "Dad",
        "en": "Yes. Make a list so you do not forget anything.",
        "zh": "需要。列一个清单，这样就不会忘东西了。"
      },
      {
        "role": "Lily",
        "en": "I cannot wait! This summer is going to be awesome!",
        "zh": "我等不及了！这个暑假一定会很棒！"
      }
    ]
  },
  {
    "id": 140,
    "category": "family",
    "title": "Spring Cleaning 大扫除",
    "scene": "全家人一起做大扫除，迎接新年。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mom",
      "Tom"
    ],
    "lines": [
      {
        "role": "Mom",
        "en": "Today is spring cleaning day. Everyone needs to help!",
        "zh": "今天是大扫除日。每个人都要帮忙！"
      },
      {
        "role": "Tom",
        "en": "OK, Mom. What should I do?",
        "zh": "好的，妈妈。我该做什么？"
      },
      {
        "role": "Mom",
        "en": "Can you wipe the windows in your room?",
        "zh": "你能擦一下你房间的窗户吗？"
      },
      {
        "role": "Tom",
        "en": "Sure. Where is the cloth?",
        "zh": "当然。抹布在哪里？"
      },
      {
        "role": "Mom",
        "en": "Here you go. Use some water and soap.",
        "zh": "给你。用水和肥皂。"
      },
      {
        "role": "Tom",
        "en": "The windows are so dirty. When did we last clean them?",
        "zh": "窗户好脏。我们上次擦是什么时候？"
      },
      {
        "role": "Mom",
        "en": "It has been a while. That is why we need spring cleaning!",
        "zh": "有一段时间了。所以我们需要大扫除！"
      },
      {
        "role": "Tom",
        "en": "My windows look so clean now!",
        "zh": "我的窗户现在好干净！"
      },
      {
        "role": "Mom",
        "en": "Great job! Can you also help me move the sofa?",
        "zh": "做得好！你能帮我挪一下沙发吗？"
      },
      {
        "role": "Tom",
        "en": "No problem. Let me clean under the sofa too!",
        "zh": "没问题。让我把沙发下面也打扫一下！"
      }
    ]
  },
  {
    "id": 141,
    "category": "sports",
    "title": "Playing Basketball 打篮球",
    "scene": "Tom和Mike在操场上打篮球，练习投篮和传球。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Mike"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Hey Mike, do you want to play basketball after school?",
        "zh": "嘿Mike，放学后想打篮球吗？"
      },
      {
        "role": "Mike",
        "en": "Sure! I love basketball. Let me get my ball.",
        "zh": "当然！我喜欢篮球。让我去拿球。"
      },
      {
        "role": "Tom",
        "en": "Great! I will practice shooting today.",
        "zh": "太好了！我今天练习投篮。"
      },
      {
        "role": "Mike",
        "en": "Can you pass me the ball first?",
        "zh": "你能先传给我球吗？"
      },
      {
        "role": "Tom",
        "en": "Here you go. Catch it!",
        "zh": "给你。接住！"
      },
      {
        "role": "Mike",
        "en": "Nice pass! Now I will shoot.",
        "zh": "传球不错！现在我来投篮。"
      },
      {
        "role": "Tom",
        "en": "Good shot! You are getting better.",
        "zh": "好球！你进步了。"
      },
      {
        "role": "Mike",
        "en": "Thanks! Let us play one-on-one.",
        "zh": "谢谢！我们来一对一吧。"
      },
      {
        "role": "Tom",
        "en": "OK. First one to score five points wins.",
        "zh": "好的。先得五分的赢。"
      },
      {
        "role": "Mike",
        "en": "You are on! Let us go!",
        "zh": "一言为定！开始吧！"
      }
    ]
  },
  {
    "id": 142,
    "category": "sports",
    "title": "Playing Soccer 踢足球",
    "scene": "Jack和Leo在草地上踢足球，练习传球和射门。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Jack",
      "Leo"
    ],
    "lines": [
      {
        "role": "Jack",
        "en": "Leo, let us play soccer on the field!",
        "zh": "Leo，我们去草地上踢足球吧！"
      },
      {
        "role": "Leo",
        "en": "Good idea! I want to practice kicking.",
        "zh": "好主意！我想练习踢球。"
      },
      {
        "role": "Jack",
        "en": "I will be the goalkeeper. You try to score.",
        "zh": "我来当守门员。你试着射门。"
      },
      {
        "role": "Leo",
        "en": "Are you ready? Here I come!",
        "zh": "你准备好了吗？我来了！"
      },
      {
        "role": "Jack",
        "en": "Nice kick! But I caught it.",
        "zh": "踢得好！但是我接住了。"
      },
      {
        "role": "Leo",
        "en": "Oh no! Let me try again.",
        "zh": "噢不！让我再试一次。"
      },
      {
        "role": "Jack",
        "en": "This time I will kick and you defend.",
        "zh": "这次我来踢，你来防守。"
      },
      {
        "role": "Leo",
        "en": "OK, I am ready. Kick it!",
        "zh": "好的，我准备好了。踢吧！"
      },
      {
        "role": "Jack",
        "en": "Goal! Haha, you missed it!",
        "zh": "进球了！哈哈，你没接住！"
      },
      {
        "role": "Leo",
        "en": "Wow, that was fast! Let us keep playing.",
        "zh": "哇，太快了！我们继续踢吧。"
      }
    ]
  },
  {
    "id": 143,
    "category": "sports",
    "title": "Swimming Class 游泳课",
    "scene": "Amy和Lily在游泳池上游泳课，学习自由泳。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Amy",
      "Lily"
    ],
    "lines": [
      {
        "role": "Amy",
        "en": "Lily, are you coming to swimming class today?",
        "zh": "Lily，你今天来上游泳课吗？"
      },
      {
        "role": "Lily",
        "en": "Yes! I am a little nervous though.",
        "zh": "来！不过我有点紧张。"
      },
      {
        "role": "Amy",
        "en": "Do not worry. The water is not deep here.",
        "zh": "别担心。这里的水不深。"
      },
      {
        "role": "Lily",
        "en": "Can you teach me how to float?",
        "zh": "你能教我怎么漂浮吗？"
      },
      {
        "role": "Amy",
        "en": "Sure. Lie on your back and relax your body.",
        "zh": "当然。仰面躺下，放松身体。"
      },
      {
        "role": "Lily",
        "en": "Like this? Oh, I am floating!",
        "zh": "像这样吗？噢，我飘起来了！"
      },
      {
        "role": "Amy",
        "en": "Great! Now move your arms like this.",
        "zh": "太好了！现在像我这样划手臂。"
      },
      {
        "role": "Lily",
        "en": "It is hard, but I will keep trying.",
        "zh": "很难，但我会继续练习。"
      },
      {
        "role": "Amy",
        "en": "You are doing well. Let us swim to the other side.",
        "zh": "你做得很好。我们游到对面去吧。"
      },
      {
        "role": "Lily",
        "en": "OK. Swimming is fun!",
        "zh": "好的。游泳真有趣！"
      }
    ]
  },
  {
    "id": 144,
    "category": "sports",
    "title": "Morning Running 晨跑",
    "scene": "Dad带Ben去公园晨跑，锻炼身体。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Ben",
      "Dad"
    ],
    "lines": [
      {
        "role": "Dad",
        "en": "Ben, wake up! It is time for our morning run.",
        "zh": "Ben，起床了！该去晨跑了。"
      },
      {
        "role": "Ben",
        "en": "Oh Dad, I am so sleepy. Can I sleep more?",
        "zh": "噢爸爸，我好困。能多睡一会儿吗？"
      },
      {
        "role": "Dad",
        "en": "Come on! Running makes you strong and healthy.",
        "zh": "快点！跑步让你强壮又健康。"
      },
      {
        "role": "Ben",
        "en": "OK, OK. Give me one minute.",
        "zh": "好吧好吧。给我一分钟。"
      },
      {
        "role": "Dad",
        "en": "Let us stretch first. Touch your toes.",
        "zh": "我们先拉伸一下。弯腰摸脚趾。"
      },
      {
        "role": "Ben",
        "en": "Ouch! That hurts a little.",
        "zh": "哎！有点疼。"
      },
      {
        "role": "Dad",
        "en": "It is normal. Now let us jog slowly.",
        "zh": "这很正常。现在我们慢慢跑起来。"
      },
      {
        "role": "Ben",
        "en": "Wow, the morning air is so fresh.",
        "zh": "哇，早晨的空气真新鲜。"
      },
      {
        "role": "Dad",
        "en": "Yes! Let us run two laps around the park.",
        "zh": "是啊！我们在公园跑两圈吧。"
      },
      {
        "role": "Ben",
        "en": "I feel great now. Running is not bad!",
        "zh": "我现在感觉很好。跑步还不错！"
      }
    ]
  },
  {
    "id": 145,
    "category": "sports",
    "title": "Playing Table Tennis 打乒乓球",
    "scene": "Sam和Tim在体育馆打乒乓球，来回对打。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Sam",
      "Tim"
    ],
    "lines": [
      {
        "role": "Sam",
        "en": "Tim, do you have a ping pong paddle?",
        "zh": "Tim，你有乒乓球拍吗？"
      },
      {
        "role": "Tim",
        "en": "Yes, I have two. Let us play!",
        "zh": "有，我有两个。我们打吧！"
      },
      {
        "role": "Sam",
        "en": "I will serve first. Watch out!",
        "zh": "我先发球。小心！"
      },
      {
        "role": "Tim",
        "en": "Nice serve! I will hit it back.",
        "zh": "好球！我打回去。"
      },
      {
        "role": "Sam",
        "en": "Oh, I missed it. It was too fast.",
        "zh": "噢，我没接住。太快了。"
      },
      {
        "role": "Tim",
        "en": "Try to watch the ball carefully.",
        "zh": "试着仔细看球。"
      },
      {
        "role": "Sam",
        "en": "OK, my turn to serve again.",
        "zh": "好的，我又发球了。"
      },
      {
        "role": "Tim",
        "en": "Good spin! You are getting better, Sam.",
        "zh": "旋转球不错！你进步了，Sam。"
      },
      {
        "role": "Sam",
        "en": "Thanks! This is so much fun.",
        "zh": "谢谢！真好玩。"
      },
      {
        "role": "Tim",
        "en": "Let us play for ten more minutes!",
        "zh": "我们再打十分钟吧！"
      }
    ]
  },
  {
    "id": 146,
    "category": "sports",
    "title": "Learning to Ride a Bike 学骑自行车",
    "scene": "Mom教Emma骑自行车，去掉辅助轮。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Emma",
      "Mom"
    ],
    "lines": [
      {
        "role": "Emma",
        "en": "Mom, can you take off the training wheels today?",
        "zh": "妈妈，今天能把辅助轮拆了吗？"
      },
      {
        "role": "Mom",
        "en": "Are you sure? You might fall.",
        "zh": "你确定吗？你可能会摔倒的。"
      },
      {
        "role": "Emma",
        "en": "I am ready. I want to ride like a big kid!",
        "zh": "我准备好了。我想像大孩子一样骑！"
      },
      {
        "role": "Mom",
        "en": "OK. Hold the handlebars tight.",
        "zh": "好吧。紧紧握住车把。"
      },
      {
        "role": "Emma",
        "en": "I am scared. What if I fall?",
        "zh": "我害怕。万一摔了怎么办？"
      },
      {
        "role": "Mom",
        "en": "Do not worry. I will hold the back of the bike.",
        "zh": "别担心。我会扶着车后座。"
      },
      {
        "role": "Emma",
        "en": "OK, I am pedaling now. Do not let go!",
        "zh": "好的，我踩踏板了。别松手！"
      },
      {
        "role": "Mom",
        "en": "You are doing great! Keep pedaling!",
        "zh": "你做得很好！继续踩！"
      },
      {
        "role": "Emma",
        "en": "Mom, are you still holding?",
        "zh": "妈妈，你还在扶着吗？"
      },
      {
        "role": "Mom",
        "en": "I let go a while ago! You are riding by yourself!",
        "zh": "我早就松手了！你在自己骑呢！"
      },
      {
        "role": "Emma",
        "en": "Wow! I did it! I can ride a bike!",
        "zh": "哇！我做到了！我会骑自行车了！"
      }
    ]
  },
  {
    "id": 147,
    "category": "sports",
    "title": "Sports Day Sign-up 运动会报名",
    "scene": "Anna和Coach在报名处讨论参加哪些比赛项目。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Anna",
      "Coach"
    ],
    "lines": [
      {
        "role": "Anna",
        "en": "Coach, I want to sign up for Sports Day!",
        "zh": "教练，我想报名运动会！"
      },
      {
        "role": "Coach",
        "en": "Great! What event do you want to join?",
        "zh": "太好了！你想参加什么项目？"
      },
      {
        "role": "Anna",
        "en": "Can I join the 100-meter race?",
        "zh": "我能参加100米赛跑吗？"
      },
      {
        "role": "Coach",
        "en": "Sure. You run very fast. Do you want another event?",
        "zh": "当然可以。你跑得很快。还想参加别的项目吗？"
      },
      {
        "role": "Anna",
        "en": "How about the long jump?",
        "zh": "跳远怎么样？"
      },
      {
        "role": "Coach",
        "en": "That is a good idea. You are also good at jumping.",
        "zh": "好主意。你也很擅长跳跃。"
      },
      {
        "role": "Anna",
        "en": "Can I also join the relay race?",
        "zh": "我也能参加接力赛吗？"
      },
      {
        "role": "Coach",
        "en": "Let me check. Yes, we need one more runner.",
        "zh": "我看看。可以，我们还差一个人。"
      },
      {
        "role": "Anna",
        "en": "Awesome! I will practice hard.",
        "zh": "太棒了！我会努力练习的。"
      },
      {
        "role": "Coach",
        "en": "I know you will do great, Anna!",
        "zh": "我知道你会表现很好的，Anna！"
      }
    ]
  },
  {
    "id": 148,
    "category": "sports",
    "title": "PE Class Warm-up 体育课热身",
    "scene": "Teacher带领学生们在体育课前做热身运动。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Teacher",
      "Lucy"
    ],
    "lines": [
      {
        "role": "Teacher",
        "en": "Class, line up! It is time for PE.",
        "zh": "同学们，排队！体育课时间到了。"
      },
      {
        "role": "Lucy",
        "en": "Teacher, can I go get some water first?",
        "zh": "老师，我能先去喝点水吗？"
      },
      {
        "role": "Teacher",
        "en": "After warm-up, OK? Now let us stretch.",
        "zh": "热身后好吗？现在我们做拉伸。"
      },
      {
        "role": "Lucy",
        "en": "OK. What should we do first?",
        "zh": "好的。我们首先做什么？"
      },
      {
        "role": "Teacher",
        "en": "Raise your arms up and stretch to the left.",
        "zh": "举起手臂，向左伸展。"
      },
      {
        "role": "Lucy",
        "en": "Like this, Teacher?",
        "zh": "像这样吗，老师？"
      },
      {
        "role": "Teacher",
        "en": "Yes, perfect! Now stretch to the right.",
        "zh": "对，完美！现在向右伸展。"
      },
      {
        "role": "Lucy",
        "en": "This feels good. I was stiff from sitting all day.",
        "zh": "感觉很舒服。坐了一整天身体都僵了。"
      },
      {
        "role": "Teacher",
        "en": "Now let us do ten jumping jacks.",
        "zh": "现在我们做十个开合跳。"
      },
      {
        "role": "Lucy",
        "en": "One, two, three... I feel warm already!",
        "zh": "一、二、三……我已经觉得热了！"
      }
    ]
  },
  {
    "id": 149,
    "category": "sports",
    "title": "Cheering at a Game 比赛加油",
    "scene": "Kate和Dan在看台上为校队加油助威。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Kate",
      "Dan"
    ],
    "lines": [
      {
        "role": "Kate",
        "en": "Dan, the game is about to start!",
        "zh": "Dan，比赛要开始了！"
      },
      {
        "role": "Dan",
        "en": "I know! I am so excited. Go, Team Blue!",
        "zh": "我知道！我好激动。蓝队加油！"
      },
      {
        "role": "Kate",
        "en": "Look, our school is running with the ball!",
        "zh": "看，我们学校的人带着球在跑！"
      },
      {
        "role": "Dan",
        "en": "Run, run! You can do it!",
        "zh": "跑啊，跑啊！你能行的！"
      },
      {
        "role": "Kate",
        "en": "Oh no, the other team got the ball.",
        "zh": "噢不，对方拿到了球。"
      },
      {
        "role": "Dan",
        "en": "It is OK. Our defense is strong.",
        "zh": "没关系。我们的防守很强。"
      },
      {
        "role": "Kate",
        "en": "Yes! He passed it to Jack!",
        "zh": "是的！他传给了Jack！"
      },
      {
        "role": "Dan",
        "en": "Shoot! Shoot the ball!",
        "zh": "射门！射门！"
      },
      {
        "role": "Kate",
        "en": "Goal! We scored!",
        "zh": "进球了！我们得分了！"
      },
      {
        "role": "Dan",
        "en": "That was amazing! Let us cheer louder!",
        "zh": "太精彩了！我们大声加油！"
      },
      {
        "role": "Kate",
        "en": "We are winning! This is the best game ever!",
        "zh": "我们要赢了！这是最棒的一场比赛！"
      }
    ]
  },
  {
    "id": 150,
    "category": "sports",
    "title": "After-School Exercise 课后锻炼",
    "scene": "Kevin和Eric放学后在操场锻炼身体。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Kevin",
      "Eric"
    ],
    "lines": [
      {
        "role": "Kevin",
        "en": "Eric, do you want to exercise after school?",
        "zh": "Eric，放学后想锻炼吗？"
      },
      {
        "role": "Eric",
        "en": "Sure. What do you want to do?",
        "zh": "好啊。你想做什么？"
      },
      {
        "role": "Kevin",
        "en": "Let us do push-ups first. I can do twenty.",
        "zh": "我们先做俯卧撑吧。我能做二十个。"
      },
      {
        "role": "Eric",
        "en": "Twenty? I can only do ten.",
        "zh": "二十个？我只能做十个。"
      },
      {
        "role": "Kevin",
        "en": "That is OK. Let us start together.",
        "zh": "没关系。我们一起开始吧。"
      },
      {
        "role": "Eric",
        "en": "One, two, three... this is hard!",
        "zh": "一、二、三……好难！"
      },
      {
        "role": "Kevin",
        "en": "Keep going! You can do five more.",
        "zh": "坚持住！你还能再做五个。"
      },
      {
        "role": "Eric",
        "en": "Done! My arms are shaking.",
        "zh": "做完了！我的手臂在抖。"
      },
      {
        "role": "Kevin",
        "en": "Now let us do sit-ups. Lie on your back.",
        "zh": "现在我们做仰卧起坐。躺下来。"
      },
      {
        "role": "Eric",
        "en": "OK. Let us count together. One, two, three...",
        "zh": "好的。我们一起数。一、二、三……"
      },
      {
        "role": "Kevin",
        "en": "Great job! Let us do this every day.",
        "zh": "做得好！我们每天都这样锻炼吧。"
      }
    ]
  },
  {
    "id": 151,
    "category": "sports",
    "title": "Learning to Jump Rope 学跳绳",
    "scene": "Mia在教Sara学跳绳，从基础开始。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mia",
      "Sara"
    ],
    "lines": [
      {
        "role": "Mia",
        "en": "Sara, do you know how to jump rope?",
        "zh": "Sara，你会跳绳吗？"
      },
      {
        "role": "Sara",
        "en": "Not really. I always trip on the rope.",
        "zh": "不太会。我总是被绳子绊倒。"
      },
      {
        "role": "Mia",
        "en": "Let me teach you. Hold one handle in each hand.",
        "zh": "我来教你。每只手拿一个把手。"
      },
      {
        "role": "Sara",
        "en": "OK. What should I do with my feet?",
        "zh": "好的。脚要怎么放？"
      },
      {
        "role": "Mia",
        "en": "Stand with your feet together. Swing the rope over.",
        "zh": "双脚并拢站立。把绳子甩过去。"
      },
      {
        "role": "Sara",
        "en": "Like this? Oops, I stepped on it.",
        "zh": "像这样吗？哎呀，我踩到绳子了。"
      },
      {
        "role": "Mia",
        "en": "That is OK. Try again. Jump when the rope comes.",
        "zh": "没关系。再试一次。绳子过来的时候跳。"
      },
      {
        "role": "Sara",
        "en": "One... two... three! I did three jumps!",
        "zh": "一……二……三！我跳了三个！"
      },
      {
        "role": "Mia",
        "en": "You did it! Now keep going.",
        "zh": "你做到了！继续跳。"
      },
      {
        "role": "Sara",
        "en": "This is fun! I want to practice more.",
        "zh": "真好玩！我想多练习。"
      }
    ]
  },
  {
    "id": 152,
    "category": "sports",
    "title": "Playing Badminton 打羽毛球",
    "scene": "Grace和Helen在公园里打羽毛球。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Grace",
      "Helen"
    ],
    "lines": [
      {
        "role": "Grace",
        "en": "Helen, let us play badminton in the park!",
        "zh": "Helen，我们去公园打羽毛球吧！"
      },
      {
        "role": "Helen",
        "en": "Sure! I brought my rackets and a birdie.",
        "zh": "好啊！我带了球拍和羽毛球。"
      },
      {
        "role": "Grace",
        "en": "I will serve first. Ready?",
        "zh": "我先发球。准备好了吗？"
      },
      {
        "role": "Helen",
        "en": "Ready! Hit it to me!",
        "zh": "准备好了！打过来吧！"
      },
      {
        "role": "Grace",
        "en": "Here you go! That went too high.",
        "zh": "来了！打太高了。"
      },
      {
        "role": "Helen",
        "en": "It is OK. I got it! Here it comes back.",
        "zh": "没关系。我接到了！打回去了。"
      },
      {
        "role": "Grace",
        "en": "Nice one! We had a long rally.",
        "zh": "好球！我们打了好几个来回。"
      },
      {
        "role": "Helen",
        "en": "My arm is getting tired. Let us take a break.",
        "zh": "我的手臂有点累了。我们休息一下吧。"
      },
      {
        "role": "Grace",
        "en": "Good idea. Do you want some water?",
        "zh": "好主意。要喝点水吗？"
      },
      {
        "role": "Helen",
        "en": "Yes, please. That was a good game!",
        "zh": "好的，谢谢。这局打得真好！"
      }
    ]
  },
  {
    "id": 153,
    "category": "sports",
    "title": "Gymnastics Practice 体操训练",
    "scene": "Coach在指导Nina做体操基础动作训练。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Nina",
      "Coach"
    ],
    "lines": [
      {
        "role": "Nina",
        "en": "Coach, I want to practice my cartwheel today.",
        "zh": "教练，我今天想练习侧翻。"
      },
      {
        "role": "Coach",
        "en": "Good! First, let us do a warm-up.",
        "zh": "好的！首先，我们做一下热身。"
      },
      {
        "role": "Nina",
        "en": "Should I stretch my arms and legs?",
        "zh": "我要伸展手臂和腿吗？"
      },
      {
        "role": "Coach",
        "en": "Yes. Raise your arms and reach for the sky.",
        "zh": "对。举起手臂，向天空伸展。"
      },
      {
        "role": "Nina",
        "en": "Done. Now can I try the cartwheel?",
        "zh": "好了。现在可以试侧翻了吗？"
      },
      {
        "role": "Coach",
        "en": "Put your hands on the mat and kick your legs over.",
        "zh": "把双手放在垫子上，把腿翻过去。"
      },
      {
        "role": "Nina",
        "en": "I am afraid I will fall.",
        "zh": "我怕会摔倒。"
      },
      {
        "role": "Coach",
        "en": "I will stand right next to you. Go ahead.",
        "zh": "我会站在你旁边。去吧。"
      },
      {
        "role": "Nina",
        "en": "OK, here I go! Did I do it right?",
        "zh": "好的，我来了！我做对了吗？"
      },
      {
        "role": "Coach",
        "en": "Perfect! Your legs were straight. Try one more.",
        "zh": "完美！你的腿很直。再来一次。"
      },
      {
        "role": "Nina",
        "en": "I feel so proud. Gymnastics is fun!",
        "zh": "我感到很骄傲。体操真有趣！"
      }
    ]
  },
  {
    "id": 154,
    "category": "sports",
    "title": "Skateboarding 滑板",
    "scene": "Max在教Zoe学滑板，从站上板开始。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Max",
      "Zoe"
    ],
    "lines": [
      {
        "role": "Zoe",
        "en": "Max, can you teach me how to skateboard?",
        "zh": "Max，你能教我滑板吗？"
      },
      {
        "role": "Max",
        "en": "Of course! First, put one foot on the board.",
        "zh": "当然可以！首先，把一只脚放在板上。"
      },
      {
        "role": "Zoe",
        "en": "Like this? It feels wobbly.",
        "zh": "像这样吗？感觉摇摇晃晃的。"
      },
      {
        "role": "Max",
        "en": "Bend your knees a little. That helps you balance.",
        "zh": "膝盖稍微弯曲。那样有助于保持平衡。"
      },
      {
        "role": "Zoe",
        "en": "OK, I feel better now. What is next?",
        "zh": "好的，我现在感觉好多了。下一步呢？"
      },
      {
        "role": "Max",
        "en": "Push off with your other foot gently.",
        "zh": "用另一只脚轻轻蹬地。"
      },
      {
        "role": "Zoe",
        "en": "Whoa! I am moving! It is so fast!",
        "zh": "哇！我在动了！好快！"
      },
      {
        "role": "Max",
        "en": "You are doing great! Now try to stop.",
        "zh": "你做得很好！现在试着停下来。"
      },
      {
        "role": "Zoe",
        "en": "How do I stop? I am scared!",
        "zh": "怎么停？我害怕！"
      },
      {
        "role": "Max",
        "en": "Just put your back foot on the ground.",
        "zh": "把后脚放在地上就好了。"
      },
      {
        "role": "Zoe",
        "en": "I stopped! That was so cool!",
        "zh": "我停下来了！太酷了！"
      }
    ]
  },
  {
    "id": 155,
    "category": "sports",
    "title": "Skiing 滑雪",
    "scene": "Oliver和爸爸去滑雪场，学习基本滑雪技巧。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Oliver",
      "Dad"
    ],
    "lines": [
      {
        "role": "Oliver",
        "en": "Dad, look at all the snow! I can not wait to ski!",
        "zh": "爸爸，看这雪！我等不及要滑雪了！"
      },
      {
        "role": "Dad",
        "en": "Me too! But first, put on your goggles and gloves.",
        "zh": "我也是！但首先，戴上护目镜和手套。"
      },
      {
        "role": "Oliver",
        "en": "OK. These skis are really long.",
        "zh": "好的。这些滑雪板好长啊。"
      },
      {
        "role": "Dad",
        "en": "Keep your knees bent and lean forward a little.",
        "zh": "膝盖弯曲，身体微微前倾。"
      },
      {
        "role": "Oliver",
        "en": "Like a superhero pose?",
        "zh": "像超级英雄的姿势吗？"
      },
      {
        "role": "Dad",
        "en": "Ha ha, yes! Now try to slide slowly.",
        "zh": "哈哈，对！现在试着慢慢滑。"
      },
      {
        "role": "Oliver",
        "en": "I am sliding! This is so fun!",
        "zh": "我在滑！太好玩了！"
      },
      {
        "role": "Dad",
        "en": "Do not go too fast. Make a pizza shape with your skis.",
        "zh": "不要太快。把滑雪板摆成披萨形状。"
      },
      {
        "role": "Oliver",
        "en": "Pizza shape? Oh, it slows me down!",
        "zh": "披萨形状？噢，我慢下来了！"
      },
      {
        "role": "Dad",
        "en": "That is right! It is called the snowplow.",
        "zh": "对！这叫犁式刹车。"
      },
      {
        "role": "Oliver",
        "en": "I love skiing! Can we come again tomorrow?",
        "zh": "我喜欢滑雪！明天还能来吗？"
      }
    ]
  },
  {
    "id": 156,
    "category": "sports",
    "title": "Fishing 钓鱼",
    "scene": "Grandpa带Ryan去湖边钓鱼，耐心等待鱼上钩。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Ryan",
      "Grandpa"
    ],
    "lines": [
      {
        "role": "Grandpa",
        "en": "Ryan, come sit here. Let us go fishing today.",
        "zh": "Ryan，过来坐这里。我们今天去钓鱼。"
      },
      {
        "role": "Ryan",
        "en": "Fishing? Do we have fishing rods?",
        "zh": "钓鱼？我们有鱼竿吗？"
      },
      {
        "role": "Grandpa",
        "en": "Yes, I brought two. Here is yours.",
        "zh": "有，我带了两根。这是你的。"
      },
      {
        "role": "Ryan",
        "en": "What should I put on the hook?",
        "zh": "钩子上要放什么？"
      },
      {
        "role": "Grandpa",
        "en": "Use this worm. Be careful, it is wiggly.",
        "zh": "用这条蚯蚓。小心，它在动。"
      },
      {
        "role": "Ryan",
        "en": "Yuck! OK, I put it on. Now what?",
        "zh": "好恶心！好的，放上去了。现在呢？"
      },
      {
        "role": "Grandpa",
        "en": "Cast your line into the water and wait.",
        "zh": "把线抛到水里，然后等。"
      },
      {
        "role": "Ryan",
        "en": "This is boring. How long do we wait?",
        "zh": "这好无聊啊。要等多久？"
      },
      {
        "role": "Grandpa",
        "en": "Fishing teaches patience. Oh, I got a bite!",
        "zh": "钓鱼教人耐心。噢，有鱼上钩了！"
      },
      {
        "role": "Ryan",
        "en": "Wow! Pull it in! It is so big!",
        "zh": "哇！拉上来！好大啊！"
      }
    ]
  },
  {
    "id": 157,
    "category": "sports",
    "title": "Climbing a Tree 爬树",
    "scene": "Jake和Ethan在公园里比赛爬树，看谁爬得高。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Jake",
      "Ethan"
    ],
    "lines": [
      {
        "role": "Jake",
        "en": "Ethan, look at that big tree. I bet I can climb it!",
        "zh": "Ethan，看那棵大树。我打赌我能爬上去！"
      },
      {
        "role": "Ethan",
        "en": "Are you sure? It looks pretty high.",
        "zh": "你确定吗？看起来好高啊。"
      },
      {
        "role": "Jake",
        "en": "Watch me. I will grab that branch first.",
        "zh": "看我的。我先抓那根树枝。"
      },
      {
        "role": "Ethan",
        "en": "Be careful! Put your foot on that knot.",
        "zh": "小心！脚踩那个树结上。"
      },
      {
        "role": "Jake",
        "en": "Good idea. I am going up!",
        "zh": "好主意。我在往上了！"
      },
      {
        "role": "Ethan",
        "en": "Wow, you are really high now. Can you see far?",
        "zh": "哇，你现在很高了。能看远吗？"
      },
      {
        "role": "Jake",
        "en": "Yes! I can see the playground from here!",
        "zh": "能！我能从这里看到操场！"
      },
      {
        "role": "Ethan",
        "en": "That is so cool. I want to try too!",
        "zh": "太酷了。我也想试试！"
      },
      {
        "role": "Jake",
        "en": "OK, come up slowly. Use the lower branches.",
        "zh": "好的，慢慢上来。用下面的树枝。"
      },
      {
        "role": "Ethan",
        "en": "This is fun! We are like monkeys!",
        "zh": "真好玩！我们像猴子一样！"
      }
    ]
  },
  {
    "id": 158,
    "category": "sports",
    "title": "Relay Race 接力赛",
    "scene": "Team Red的四名队员讨论接力赛的策略。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Lily",
      "Tom"
    ],
    "lines": [
      {
        "role": "Lily",
        "en": "Tom, we have the relay race tomorrow. Are you ready?",
        "zh": "Tom，我们明天有接力赛。准备好了吗？"
      },
      {
        "role": "Tom",
        "en": "I think so. Who runs first?",
        "zh": "我觉得可以。谁跑第一棒？"
      },
      {
        "role": "Lily",
        "en": "I will run first because I have a fast start.",
        "zh": "我跑第一棒，因为我起跑快。"
      },
      {
        "role": "Tom",
        "en": "Then I will run second. I am good at sprinting.",
        "zh": "那我来跑第二棒。我擅长短跑。"
      },
      {
        "role": "Lily",
        "en": "Good. What about passing the baton?",
        "zh": "好。传接力棒怎么办？"
      },
      {
        "role": "Tom",
        "en": "Let us practice. You hand it to me from your right hand.",
        "zh": "我们练一下吧。你用右手递给我。"
      },
      {
        "role": "Lily",
        "en": "OK, here I come. Ready?",
        "zh": "好的，我来了。准备好了吗？"
      },
      {
        "role": "Tom",
        "en": "Ready! I got it! Nice handoff!",
        "zh": "准备好了！我接到了！交接得很好！"
      },
      {
        "role": "Lily",
        "en": "We need to practice a few more times.",
        "zh": "我们需要多练几次。"
      },
      {
        "role": "Tom",
        "en": "Yes. I know we will win tomorrow!",
        "zh": "对。我知道我们明天会赢的！"
      }
    ]
  },
  {
    "id": 159,
    "category": "sports",
    "title": "Basketball Game 篮球比赛",
    "scene": "Tom和Mike在篮球比赛中互相配合进攻。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Mike"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Mike, the game starts in five minutes!",
        "zh": "Mike，比赛还有五分钟开始！"
      },
      {
        "role": "Mike",
        "en": "I am ready. What position are you playing?",
        "zh": "我准备好了。你打什么位置？"
      },
      {
        "role": "Tom",
        "en": "I will play guard. You play center.",
        "zh": "我打后卫。你打中锋。"
      },
      {
        "role": "Mike",
        "en": "OK. I will stay near the basket.",
        "zh": "好的。我待在篮筐附近。"
      },
      {
        "role": "Tom",
        "en": "When I drive in, pass the ball to you.",
        "zh": "我突破进去的时候，把球传给你。"
      },
      {
        "role": "Mike",
        "en": "Smart plan! Let us do it!",
        "zh": "聪明的策略！就这么办！"
      },
      {
        "role": "Tom",
        "en": "Here we go! I got the ball!",
        "zh": "开始吧！我拿到球了！"
      },
      {
        "role": "Mike",
        "en": "I am open! Pass it here!",
        "zh": "我没人防守！传给我！"
      },
      {
        "role": "Tom",
        "en": "Here you go! Shoot it!",
        "zh": "给你！投篮！"
      },
      {
        "role": "Mike",
        "en": "Yes! Score! We make a great team!",
        "zh": "进了！得分了！我们配合得真棒！"
      }
    ]
  },
  {
    "id": 160,
    "category": "sports",
    "title": "Sports Day Awards 运动会颁奖",
    "scene": "运动会结束后，Teacher给获胜的同学颁发奖牌。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Teacher",
      "Ben"
    ],
    "lines": [
      {
        "role": "Teacher",
        "en": "Everyone, please gather around for the awards.",
        "zh": "大家请过来集合，颁奖仪式开始了。"
      },
      {
        "role": "Ben",
        "en": "Teacher, who won the 100-meter race?",
        "zh": "老师，谁赢了100米赛跑？"
      },
      {
        "role": "Teacher",
        "en": "Ben, you came in first! Come up here.",
        "zh": "Ben，你是第一名！上来吧。"
      },
      {
        "role": "Ben",
        "en": "Me? Really? I can not believe it!",
        "zh": "我？真的吗？我不敢相信！"
      },
      {
        "role": "Teacher",
        "en": "You ran so fast. Here is your gold medal.",
        "zh": "你跑得非常快。这是你的金牌。"
      },
      {
        "role": "Ben",
        "en": "Thank you so much! I practiced every day.",
        "zh": "太感谢了！我每天都练习。"
      },
      {
        "role": "Teacher",
        "en": "Your hard work paid off. We are all proud of you.",
        "zh": "你的努力有了回报。我们都为你骄傲。"
      },
      {
        "role": "Ben",
        "en": "Can I thank my mom? She cheered for me today.",
        "zh": "我能谢谢我妈妈吗？她今天给我加油了。"
      },
      {
        "role": "Teacher",
        "en": "Of course. And congratulations to all the winners!",
        "zh": "当然可以。恭喜所有获奖的同学！"
      },
      {
        "role": "Ben",
        "en": "This is the best day ever!",
        "zh": "这是最棒的一天！"
      }
    ]
  },
  {
    "id": 161,
    "category": "party",
    "title": "Birthday Party Invitation 生日派对邀请",
    "scene": "Lily想邀请好朋友Emma参加自己的生日派对。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Lily",
      "Emma"
    ],
    "lines": [
      {
        "role": "Lily",
        "en": "Emma, guess what? My birthday is next Saturday!",
        "zh": "Emma，你猜怎么着？我下周六过生日！"
      },
      {
        "role": "Emma",
        "en": "Really? Happy early birthday! Are you having a party?",
        "zh": "真的吗？提前祝你生日快乐！你要办派对吗？"
      },
      {
        "role": "Lily",
        "en": "Yes! I am having a party at home. Can you come?",
        "zh": "对！我在家办派对。你能来吗？"
      },
      {
        "role": "Emma",
        "en": "I would love to! What time does it start?",
        "zh": "我很想去！几点开始？"
      },
      {
        "role": "Lily",
        "en": "It starts at three in the afternoon.",
        "zh": "下午三点开始。"
      },
      {
        "role": "Emma",
        "en": "What should I bring? A gift?",
        "zh": "我该带什么？礼物吗？"
      },
      {
        "role": "Lily",
        "en": "Just yourself! But if you want, bring your favorite snack.",
        "zh": "人来就好！不过如果你想，可以带最爱的零食。"
      },
      {
        "role": "Emma",
        "en": "Great! Will there be a cake?",
        "zh": "太好了！会有蛋糕吗？"
      },
      {
        "role": "Lily",
        "en": "Of course! My mom is making a chocolate cake.",
        "zh": "当然！我妈妈要做巧克力蛋糕。"
      },
      {
        "role": "Emma",
        "en": "Yummy! I can not wait!",
        "zh": "好馋！我等不及了！"
      }
    ]
  },
  {
    "id": 162,
    "category": "party",
    "title": "Attending a Party 参加派对",
    "scene": "Tom来到Mike家参加派对，和主人打招呼。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Mike"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Hi Mike! Happy birthday! This is for you.",
        "zh": "嗨Mike！生日快乐！这是给你的。"
      },
      {
        "role": "Mike",
        "en": "Thank you, Tom! Come on in!",
        "zh": "谢谢你，Tom！快进来！"
      },
      {
        "role": "Tom",
        "en": "Wow, your house looks so nice. Are those balloons?",
        "zh": "哇，你家布置得好漂亮。那些是气球吗？"
      },
      {
        "role": "Mike",
        "en": "Yes! My sister helped me decorate. Do you want some juice?",
        "zh": "对！我妹妹帮我布置的。你要喝果汁吗？"
      },
      {
        "role": "Tom",
        "en": "Yes, please. Is everyone here already?",
        "zh": "好的，谢谢。大家都到了吗？"
      },
      {
        "role": "Mike",
        "en": "Almost. Lucy and Jack are coming soon.",
        "zh": "差不多了。Lucy和Jack马上就来。"
      },
      {
        "role": "Tom",
        "en": "What games are we going to play?",
        "zh": "我们要玩什么游戏？"
      },
      {
        "role": "Mike",
        "en": "We will play musical chairs and pin the tail on the donkey.",
        "zh": "我们要玩抢椅子和给驴贴尾巴。"
      },
      {
        "role": "Tom",
        "en": "I love those games! This party is going to be fun.",
        "zh": "我喜欢那些游戏！这个派对一定很好玩。"
      },
      {
        "role": "Mike",
        "en": "Thanks for coming, Tom. Let us enjoy the party!",
        "zh": "谢谢你来，Tom。我们好好玩吧！"
      }
    ]
  },
  {
    "id": 163,
    "category": "party",
    "title": "Meeting New Friends 介绍新朋友",
    "scene": "新同学Lucy来到班级，Anna热情地介绍自己。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Anna",
      "Lucy"
    ],
    "lines": [
      {
        "role": "Anna",
        "en": "Hi! You must be the new student. I am Anna.",
        "zh": "嗨！你一定是新同学。我是Anna。"
      },
      {
        "role": "Lucy",
        "en": "Hi Anna. I am Lucy. I just moved here.",
        "zh": "嗨Anna。我是Lucy。我刚搬来这里。"
      },
      {
        "role": "Anna",
        "en": "Where did you move from?",
        "zh": "你从哪里搬来的？"
      },
      {
        "role": "Lucy",
        "en": "I moved from Shanghai. Everything is new to me.",
        "zh": "我从上海搬来。这里的一切对我来说都是新的。"
      },
      {
        "role": "Anna",
        "en": "Do not worry. Everyone here is very friendly.",
        "zh": "别担心。这里的人都很好。"
      },
      {
        "role": "Lucy",
        "en": "That is good to hear. What do you like to do for fun?",
        "zh": "听到这个真好。你平时喜欢做什么？"
      },
      {
        "role": "Anna",
        "en": "I like reading and drawing. What about you?",
        "zh": "我喜欢看书和画画。你呢？"
      },
      {
        "role": "Lucy",
        "en": "I love swimming and playing the piano.",
        "zh": "我喜欢游泳和弹钢琴。"
      },
      {
        "role": "Anna",
        "en": "Cool! Do you want to sit with me at lunch?",
        "zh": "酷！你想中午和我一起吃饭吗？"
      },
      {
        "role": "Lucy",
        "en": "Yes, I would love that. Thank you, Anna!",
        "zh": "好啊，我很愿意。谢谢你，Anna！"
      }
    ]
  },
  {
    "id": 164,
    "category": "party",
    "title": "Playing Board Games 玩桌游",
    "scene": "Ben和Dan在客厅一起玩大富翁桌游。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Ben",
      "Dan"
    ],
    "lines": [
      {
        "role": "Ben",
        "en": "Dan, do you want to play Monopoly?",
        "zh": "Dan，你想玩大富翁吗？"
      },
      {
        "role": "Dan",
        "en": "Sure! I love board games. Let me set it up.",
        "zh": "当然！我喜欢桌游。我来摆好。"
      },
      {
        "role": "Ben",
        "en": "I want to be the car. What do you want?",
        "zh": "我要汽车。你要什么？"
      },
      {
        "role": "Dan",
        "en": "I will be the dog. Can I go first?",
        "zh": "我要小狗。我能先走吗？"
      },
      {
        "role": "Ben",
        "en": "OK, roll the dice.",
        "zh": "好的，掷骰子吧。"
      },
      {
        "role": "Dan",
        "en": "I got a six! I am moving six spaces.",
        "zh": "我掷了六！我前进六格。"
      },
      {
        "role": "Ben",
        "en": "You landed on Park Place. That is my property!",
        "zh": "你到了公园广场。那是我的地盘！"
      },
      {
        "role": "Dan",
        "en": "Oh no! How much do I pay you?",
        "zh": "噢不！我要付你多少钱？"
      },
      {
        "role": "Ben",
        "en": "Twenty dollars, please.",
        "zh": "二十块，谢谢。"
      },
      {
        "role": "Dan",
        "en": "This game is so fun. Let us play again next time!",
        "zh": "这个游戏真好玩。下次我们再玩！"
      }
    ]
  },
  {
    "id": 165,
    "category": "party",
    "title": "Singing at KTV 唱KTV",
    "scene": "Mia和朋友们在KTV唱歌，互相鼓励点歌。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mia",
      "Kate"
    ],
    "lines": [
      {
        "role": "Mia",
        "en": "Kate, this KTV room is so cool!",
        "zh": "Kate，这个KTV房间好酷！"
      },
      {
        "role": "Kate",
        "en": "I know! What song do you want to sing first?",
        "zh": "是啊！你想先唱什么歌？"
      },
      {
        "role": "Mia",
        "en": "Can I sing \"Let It Go\"?",
        "zh": "我能唱《随它吧》吗？"
      },
      {
        "role": "Kate",
        "en": "Yes! That is a great song. You go first.",
        "zh": "能！那首歌很棒。你先唱。"
      },
      {
        "role": "Mia",
        "en": "I am a little nervous. What if I sing badly?",
        "zh": "我有点紧张。如果我唱得不好怎么办？"
      },
      {
        "role": "Kate",
        "en": "Do not worry! Just have fun. We are all friends here.",
        "zh": "别担心！开心就好。我们都是朋友。"
      },
      {
        "role": "Mia",
        "en": "OK, here I go!",
        "zh": "好的，我开始了！"
      },
      {
        "role": "Kate",
        "en": "Wow, you sing really well! Can we sing together?",
        "zh": "哇，你唱得真好！我们能一起唱吗？"
      },
      {
        "role": "Mia",
        "en": "Of course! Let us pick a duet song.",
        "zh": "当然！我们选一首合唱歌曲吧。"
      },
      {
        "role": "Kate",
        "en": "How about \"You Are My Sunshine\"?",
        "zh": "《你是我的阳光》怎么样？"
      },
      {
        "role": "Mia",
        "en": "Perfect! I love that song!",
        "zh": "完美！我喜欢那首歌！"
      }
    ]
  },
  {
    "id": 166,
    "category": "party",
    "title": "Inviting Friends to a Movie 约看电影",
    "scene": "Sam约Ryan周末一起去看电影。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Sam",
      "Ryan"
    ],
    "lines": [
      {
        "role": "Sam",
        "en": "Ryan, are you free this Saturday?",
        "zh": "Ryan，这周六你有空吗？"
      },
      {
        "role": "Ryan",
        "en": "I think so. What is up?",
        "zh": "应该有。什么事？"
      },
      {
        "role": "Sam",
        "en": "Do you want to go see a movie with me?",
        "zh": "你想和我一起去看电影吗？"
      },
      {
        "role": "Ryan",
        "en": "Sure! What movie are we watching?",
        "zh": "好啊！我们看什么电影？"
      },
      {
        "role": "Sam",
        "en": "There is a new animation about space robots.",
        "zh": "有一部新的太空机器人动画片。"
      },
      {
        "role": "Ryan",
        "en": "That sounds awesome! What time is the show?",
        "zh": "听起来太棒了！几点放映？"
      },
      {
        "role": "Sam",
        "en": "There is a show at two o clock in the afternoon.",
        "zh": "下午两点有一场。"
      },
      {
        "role": "Ryan",
        "en": "Can we get popcorn too?",
        "zh": "我们也能买爆米花吗？"
      },
      {
        "role": "Sam",
        "en": "Of course! We can get popcorn and cola.",
        "zh": "当然！我们可以买爆米花和可乐。"
      },
      {
        "role": "Ryan",
        "en": "Great! I will meet you at the cinema at one thirty.",
        "zh": "太好了！我一点半在电影院等你。"
      }
    ]
  },
  {
    "id": 167,
    "category": "party",
    "title": "Park Picnic 公园野餐",
    "scene": "Mom带Amy和Ben去公园野餐，准备食物。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Amy",
      "Mom"
    ],
    "lines": [
      {
        "role": "Mom",
        "en": "Kids, today we are going on a picnic in the park!",
        "zh": "孩子们，今天我们去公园野餐！"
      },
      {
        "role": "Amy",
        "en": "Yay! Can I help pack the food?",
        "zh": "好耶！我能帮忙装食物吗？"
      },
      {
        "role": "Mom",
        "en": "Sure. Please put the sandwiches in the basket.",
        "zh": "当然。请把三明治放进篮子里。"
      },
      {
        "role": "Amy",
        "en": "Done! What else do we need?",
        "zh": "好了！还需要什么？"
      },
      {
        "role": "Mom",
        "en": "Bring some apples, juice boxes, and napkins.",
        "zh": "带些苹果、果汁盒和餐巾纸。"
      },
      {
        "role": "Amy",
        "en": "Should we bring a blanket to sit on?",
        "zh": "我们要带坐的毯子吗？"
      },
      {
        "role": "Mom",
        "en": "Good thinking! Yes, grab the big red blanket.",
        "zh": "想得好！对，拿那块大红色的毯子。"
      },
      {
        "role": "Amy",
        "en": "Can Ben come too?",
        "zh": "Ben也能来吗？"
      },
      {
        "role": "Mom",
        "en": "Of course! Ben, get your shoes on. We are leaving.",
        "zh": "当然！Ben，穿好鞋子。我们要出发了。"
      },
      {
        "role": "Amy",
        "en": "This is going to be the best picnic ever!",
        "zh": "这一定会是最棒的野餐！"
      }
    ]
  },
  {
    "id": 168,
    "category": "party",
    "title": "Playing Hide and Seek 玩捉迷藏",
    "scene": "Lily和朋友们在公园里玩捉迷藏。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Lily",
      "Jack"
    ],
    "lines": [
      {
        "role": "Lily",
        "en": "Let us play hide and seek! Who wants to be it?",
        "zh": "我们来玩捉迷藏！谁来当找人的？"
      },
      {
        "role": "Jack",
        "en": "I will count! Everyone hide!",
        "zh": "我来数数！大家快藏好！"
      },
      {
        "role": "Lily",
        "en": "Close your eyes and count to twenty.",
        "zh": "闭上眼睛，数到二十。"
      },
      {
        "role": "Jack",
        "en": "One, two, three... Ready or not, here I come!",
        "zh": "一、二、三……准备好了吗，我来了！"
      },
      {
        "role": "Lily",
        "en": "I am hiding behind the big tree. Do not find me!",
        "zh": "我藏在大树后面。别找到我！"
      },
      {
        "role": "Jack",
        "en": "I see your shoes behind the tree! Found you!",
        "zh": "我看到你的鞋在大树后面了！找到你了！"
      },
      {
        "role": "Lily",
        "en": "Oh no! You are too good at this game.",
        "zh": "噢不！你太擅长这个游戏了。"
      },
      {
        "role": "Jack",
        "en": "Now it is your turn to count. Go hide, Lily!",
        "zh": "现在轮到你数数了。去藏起来吧，Lily！"
      },
      {
        "role": "Lily",
        "en": "You better hide well. I will find you!",
        "zh": "你最好藏好。我会找到你的！"
      },
      {
        "role": "Jack",
        "en": "We will see! This is so much fun!",
        "zh": "走着瞧！这真好玩！"
      }
    ]
  },
  {
    "id": 169,
    "category": "party",
    "title": "Sharing Snacks 分享零食",
    "scene": "课间休息时，Zoe和Chloe互相分享零食。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Zoe",
      "Chloe"
    ],
    "lines": [
      {
        "role": "Zoe",
        "en": "Chloe, I brought some cookies today. Do you want one?",
        "zh": "Chloe，我今天带了饼干。你要吃一个吗？"
      },
      {
        "role": "Chloe",
        "en": "Yes, please! They look delicious.",
        "zh": "好啊，谢谢！看起来好好吃。"
      },
      {
        "role": "Zoe",
        "en": "My mom baked them last night. Try one!",
        "zh": "我妈妈昨晚烤的。尝一个吧！"
      },
      {
        "role": "Chloe",
        "en": "Mmm, so good! I have some fruit. Want to share?",
        "zh": "嗯，太好吃了！我带了水果。想分享吗？"
      },
      {
        "role": "Zoe",
        "en": "Sure! What kind of fruit?",
        "zh": "好啊！什么水果？"
      },
      {
        "role": "Chloe",
        "en": "Strawberries and grapes. They are very sweet.",
        "zh": "草莓和葡萄。很甜的。"
      },
      {
        "role": "Zoe",
        "en": "I love strawberries! This is a fair trade.",
        "zh": "我最喜欢草莓了！这是公平交换。"
      },
      {
        "role": "Chloe",
        "en": "Can I have a glass of milk too?",
        "zh": "我也能喝杯牛奶吗？"
      },
      {
        "role": "Zoe",
        "en": "Here you go. Sharing makes everything taste better.",
        "zh": "给你。分享让东西更好吃。"
      },
      {
        "role": "Chloe",
        "en": "I agree! Let us sit together at lunch every day.",
        "zh": "我同意！我们每天中午坐在一起吧。"
      }
    ]
  },
  {
    "id": 170,
    "category": "party",
    "title": "Exchanging Gifts 交换礼物",
    "scene": "圣诞节班级里举行交换礼物的活动。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Helen"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Helen, it is time for the gift exchange!",
        "zh": "Helen，交换礼物的时间到了！"
      },
      {
        "role": "Helen",
        "en": "I am so excited! What did you bring?",
        "zh": "我好激动！你带了什么？"
      },
      {
        "role": "Tom",
        "en": "It is a secret. You will find out when you open it.",
        "zh": "这是个秘密。你打开就知道了。"
      },
      {
        "role": "Helen",
        "en": "I brought a book. I hope someone likes reading.",
        "zh": "我带了一本书。希望有人喜欢看书。"
      },
      {
        "role": "Tom",
        "en": "That is a great gift! Let us draw names from the hat.",
        "zh": "很棒的礼物！我们从帽子里抽名字吧。"
      },
      {
        "role": "Helen",
        "en": "I picked... Tom! This is for you, Tom.",
        "zh": "我抽到了……Tom！这是给你的，Tom。"
      },
      {
        "role": "Tom",
        "en": "Thank you, Helen! Let me open it.",
        "zh": "谢谢你，Helen！让我打开看看。"
      },
      {
        "role": "Helen",
        "en": "Do you like it? It is a science book.",
        "zh": "你喜欢吗？是一本科学书。"
      },
      {
        "role": "Tom",
        "en": "I love science! This is the best gift ever!",
        "zh": "我喜欢科学！这是最好的礼物！"
      },
      {
        "role": "Helen",
        "en": "I am so glad! Merry Christmas, Tom!",
        "zh": "我太高兴了！圣诞快乐，Tom！"
      }
    ]
  },
  {
    "id": 171,
    "category": "party",
    "title": "Thanksgiving Dinner 感恩节",
    "scene": "一家人围坐在餐桌旁，准备享用感恩节晚餐。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Emma",
      "Dad"
    ],
    "lines": [
      {
        "role": "Dad",
        "en": "Emma, can you help me set the table?",
        "zh": "Emma，你能帮我摆餐桌吗？"
      },
      {
        "role": "Emma",
        "en": "Sure, Dad! What do we need?",
        "zh": "当然，爸爸！我们需要什么？"
      },
      {
        "role": "Dad",
        "en": "Put the plates, forks, and knives out for everyone.",
        "zh": "把盘子、叉子和刀摆出来给每个人。"
      },
      {
        "role": "Emma",
        "en": "Done! Wow, the turkey looks amazing!",
        "zh": "好了！哇，火鸡看起来太棒了！"
      },
      {
        "role": "Dad",
        "en": "Mom spent all day cooking. What are you thankful for?",
        "zh": "妈妈做了一整天。你感恩什么？"
      },
      {
        "role": "Emma",
        "en": "I am thankful for my family and good food!",
        "zh": "我感恩我的家人和美食！"
      },
      {
        "role": "Dad",
        "en": "I am thankful for all of you too.",
        "zh": "我也感恩你们每一个人。"
      },
      {
        "role": "Emma",
        "en": "Can we eat now? I am so hungry!",
        "zh": "我们可以吃了吗？我好饿！"
      },
      {
        "role": "Dad",
        "en": "Yes! Let everyone sit down first.",
        "zh": "可以了！先让大家坐下。"
      },
      {
        "role": "Emma",
        "en": "Happy Thanksgiving, everyone!",
        "zh": "感恩节快乐，大家！"
      }
    ]
  },
  {
    "id": 172,
    "category": "party",
    "title": "Visiting a Friend's Home 去朋友家做客",
    "scene": "第一次去同学家做客。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Guest",
      "Host"
    ],
    "lines": [
      {
        "role": "Host",
        "en": "Come in, come in! I am so glad you could come to my home.",
        "zh": "快进来，快进来！很高兴你能来我家。"
      },
      {
        "role": "Guest",
        "en": "Thank you for inviting me! Your home is really nice and clean.",
        "zh": "谢谢你的邀请！你家真的很干净很漂亮。"
      },
      {
        "role": "Host",
        "en": "Please sit down on the sofa. Would you like something to drink?",
        "zh": "请坐在沙发上。你想喝点什么？"
      },
      {
        "role": "Guest",
        "en": "A glass of water would be great. Oh, what a cute cat!",
        "zh": "一杯水就好。哦，好可爱的猫！"
      },
      {
        "role": "Host",
        "en": "That is my cat Mimi. You can pet her if you want. She is very friendly.",
        "zh": "那是我的猫咪咪。如果你想的话可以摸摸她。她很友善的。"
      },
      {
        "role": "Guest",
        "en": "She is so soft! I brought some fruit for your family. Here you go.",
        "zh": "她好柔软！我给你家人带了一些水果。给你。"
      },
      {
        "role": "Host",
        "en": "Oh, you should not have! But thank you so much. That is very kind of you.",
        "zh": "哎呀，你太客气了！非常感谢。你真好。"
      },
      {
        "role": "Guest",
        "en": "Let me take off my shoes. Should I put them by the door?",
        "zh": "我脱一下鞋。应该放在门口吗？"
      },
      {
        "role": "Host",
        "en": "Yes, please. Make yourself at home. Let me show you my room!",
        "zh": "是的，请放在门口。当自己家一样。我带你看看我的房间！"
      }
    ]
  },
  {
    "id": 173,
    "category": "party",
    "title": "Introducing People 介绍朋友认识",
    "scene": "把两个不认识的朋友互相介绍。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Alice",
      "Bob",
      "Cindy"
    ],
    "lines": [
      {
        "role": "Alice",
        "en": "Hi Bob! I am so happy to see you here. There is someone I want you to meet.",
        "zh": "嗨Bob！很高兴在这里见到你。有个人我想介绍给你认识。"
      },
      {
        "role": "Alice",
        "en": "Bob, this is Cindy. She is my classmate. Cindy, this is Bob. We are in the same art club.",
        "zh": "Bob，这是Cindy。她是我的同学。Cindy，这是Bob。我们在同一个美术社团。"
      },
      {
        "role": "Bob",
        "en": "Hi Cindy! Nice to meet you. Alice has told me a lot about you.",
        "zh": "嗨Cindy！很高兴认识你。Alice跟我说了很多关于你的事。"
      },
      {
        "role": "Cindy",
        "en": "Nice to meet you too, Bob! Alice says you are really good at drawing.",
        "zh": "我也很高兴认识你，Bob！Alice说你画画特别好。"
      },
      {
        "role": "Bob",
        "en": "I like drawing, but Cindy, I heard you play the piano very well.",
        "zh": "我喜欢画画，不过Cindy，我听说你钢琴弹得很好。"
      },
      {
        "role": "Cindy",
        "en": "I have been playing for five years. Do you play any instruments, Bob?",
        "zh": "我学了五年了。Bob，你会演奏什么乐器吗？"
      },
      {
        "role": "Bob",
        "en": "I play the guitar a little bit. Maybe we can perform together sometime!",
        "zh": "我会弹一点吉他。也许以后我们可以一起表演！"
      },
      {
        "role": "Alice",
        "en": "That would be amazing! You two have a lot in common. Let us sit down and chat.",
        "zh": "那太棒了！你们俩有很多共同点。我们坐下来聊聊吧。"
      },
      {
        "role": "Cindy",
        "en": "Sounds great! I am sure we will be good friends.",
        "zh": "听起来不错！我相信我们会成为好朋友的。"
      }
    ]
  },
  {
    "id": 174,
    "category": "party",
    "title": "New Year Party 新年聚会",
    "scene": "全家人聚在一起迎接新年倒计时。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Grace",
      "Mom"
    ],
    "lines": [
      {
        "role": "Grace",
        "en": "Mom, what time is it? Is it almost midnight?",
        "zh": "妈妈，几点了？快到午夜了吗？"
      },
      {
        "role": "Mom",
        "en": "It is eleven fifty. Ten more minutes!",
        "zh": "十一点五十了。还有十分钟！"
      },
      {
        "role": "Grace",
        "en": "I made a New Year wish. Can I tell you?",
        "zh": "我许了新年愿望。能告诉你吗？"
      },
      {
        "role": "Mom",
        "en": "You can tell me after the countdown.",
        "zh": "倒计时之后再说吧。"
      },
      {
        "role": "Grace",
        "en": "OK! Everyone, get ready!",
        "zh": "好的！大家准备好！"
      },
      {
        "role": "Mom",
        "en": "Ten, nine, eight, seven...",
        "zh": "十、九、八、七……"
      },
      {
        "role": "Grace",
        "en": "Six, five, four, three...",
        "zh": "六、五、四、三……"
      },
      {
        "role": "Mom",
        "en": "Two, one! Happy New Year!",
        "zh": "二、一！新年快乐！"
      },
      {
        "role": "Grace",
        "en": "Happy New Year, Mom! I love you!",
        "zh": "新年快乐，妈妈！我爱你！"
      },
      {
        "role": "Mom",
        "en": "I love you too! Let us eat the cake together.",
        "zh": "我也爱你！我们一起吃蛋糕吧。"
      }
    ]
  },
  {
    "id": 175,
    "category": "party",
    "title": "Graduation Party 毕业派对",
    "scene": "同学们举办毕业派对，拍照留念，互相祝福。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Kevin",
      "Anna"
    ],
    "lines": [
      {
        "role": "Kevin",
        "en": "Anna, can you believe we are graduating?",
        "zh": "Anna，你敢相信我们就要毕业了吗？"
      },
      {
        "role": "Anna",
        "en": "I know! It feels like yesterday we started school.",
        "zh": "是啊！感觉就像昨天才开始上学一样。"
      },
      {
        "role": "Kevin",
        "en": "I will miss you so much. You are my best friend.",
        "zh": "我会很想你的。你是我最好的朋友。"
      },
      {
        "role": "Anna",
        "en": "I will miss you too. Let us take a picture together.",
        "zh": "我也会想你的。我们一起拍张照吧。"
      },
      {
        "role": "Kevin",
        "en": "OK, stand next to me. Say cheese!",
        "zh": "好的，站我旁边。说茄子！"
      },
      {
        "role": "Anna",
        "en": "Cheese! This photo will be my favorite.",
        "zh": "茄子！这张照片会成为我的最爱。"
      },
      {
        "role": "Kevin",
        "en": "What middle school are you going to?",
        "zh": "你要去哪个中学？"
      },
      {
        "role": "Anna",
        "en": "I am going to Sunshine Middle School.",
        "zh": "我要去阳光中学。"
      },
      {
        "role": "Kevin",
        "en": "I am going there too! We will still be together!",
        "zh": "我也是！我们还能在一起！"
      },
      {
        "role": "Anna",
        "en": "Really? That is wonderful! Best day ever!",
        "zh": "真的吗？太好了！最棒的一天！"
      }
    ]
  },
  {
    "id": 176,
    "category": "party",
    "title": "Welcoming a New Classmate 欢迎新同学",
    "scene": "班级同学为刚转来的新同学举办欢迎活动。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Teacher",
      "Oliver"
    ],
    "lines": [
      {
        "role": "Teacher",
        "en": "Class, we have a new student today. His name is Oliver.",
        "zh": "同学们，今天有一位新同学。他叫Oliver。"
      },
      {
        "role": "Oliver",
        "en": "Hi everyone. I am happy to meet you all.",
        "zh": "大家好。很高兴见到你们。"
      },
      {
        "role": "Teacher",
        "en": "Oliver, where are you from?",
        "zh": "Oliver，你从哪里来？"
      },
      {
        "role": "Oliver",
        "en": "I am from Beijing. I just moved to this city.",
        "zh": "我从北京来。我刚搬来这个城市。"
      },
      {
        "role": "Teacher",
        "en": "Let us all welcome Oliver! He likes playing soccer.",
        "zh": "我们一起欢迎Oliver！他喜欢踢足球。"
      },
      {
        "role": "Oliver",
        "en": "Yes! Do we have a soccer team here?",
        "zh": "对！这里有足球队吗？"
      },
      {
        "role": "Teacher",
        "en": "We do! I am sure you will enjoy it here.",
        "zh": "有的！我相信你会喜欢这里的。"
      },
      {
        "role": "Oliver",
        "en": "Thank you, Teacher. Everyone seems very nice.",
        "zh": "谢谢老师。大家看起来都很友好。"
      },
      {
        "role": "Teacher",
        "en": "Lily, can you show Oliver around the school?",
        "zh": "Lily，你能带Oliver参观一下学校吗？"
      },
      {
        "role": "Oliver",
        "en": "Thank you! I hope we can be good friends.",
        "zh": "谢谢！希望我们能成为好朋友。"
      }
    ]
  },
  {
    "id": 177,
    "category": "party",
    "title": "Group Discussion 小组讨论分工",
    "scene": "同学们在小组讨论中分配各自的任务。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Sara"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Sara, we need to finish our group project by Friday.",
        "zh": "Sara，我们需要在周五前完成小组项目。"
      },
      {
        "role": "Sara",
        "en": "Yes. What is our topic about?",
        "zh": "是的。我们的主题是什么？"
      },
      {
        "role": "Tom",
        "en": "It is about protecting the environment.",
        "zh": "关于保护环境。"
      },
      {
        "role": "Sara",
        "en": "OK. How should we divide the work?",
        "zh": "好的。我们怎么分工？"
      },
      {
        "role": "Tom",
        "en": "I can do the research and find information online.",
        "zh": "我可以做调研，在网上找资料。"
      },
      {
        "role": "Sara",
        "en": "I am good at drawing. I can make the poster.",
        "zh": "我擅长画画。我来做海报。"
      },
      {
        "role": "Tom",
        "en": "Great! What about the presentation?",
        "zh": "太好了！汇报部分呢？"
      },
      {
        "role": "Sara",
        "en": "We can practice together. You speak the first part.",
        "zh": "我们可以一起练习。你讲第一部分。"
      },
      {
        "role": "Tom",
        "en": "And you do the second part. Let us meet after school tomorrow.",
        "zh": "你讲第二部分。我们明天放学后碰面。"
      },
      {
        "role": "Sara",
        "en": "Good idea. We make a great team!",
        "zh": "好主意。我们合作很默契！"
      }
    ]
  },
  {
    "id": 178,
    "category": "party",
    "title": "Working on a Project Together 合作做项目",
    "scene": "Amy和Peter一起动手做一个科学实验模型。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Amy",
      "Peter"
    ],
    "lines": [
      {
        "role": "Amy",
        "en": "Peter, did you bring the cardboard and glue?",
        "zh": "Peter，你带硬纸板和胶水了吗？"
      },
      {
        "role": "Peter",
        "en": "Yes, I have everything in my bag. What are we building?",
        "zh": "带了，都在我包里。我们要做什么？"
      },
      {
        "role": "Amy",
        "en": "A model of the solar system for science class.",
        "zh": "科学课的太阳系模型。"
      },
      {
        "role": "Peter",
        "en": "Cool! How many planets do we need to make?",
        "zh": "酷！我们需要做几个星球？"
      },
      {
        "role": "Amy",
        "en": "Eight planets. You make the big ones.",
        "zh": "八个。你做大的那个。"
      },
      {
        "role": "Peter",
        "en": "OK, I will make Jupiter and Saturn.",
        "zh": "好的，我来做木星和土星。"
      },
      {
        "role": "Amy",
        "en": "I will paint the sun. Pass me the yellow paint.",
        "zh": "我来画太阳。把黄色颜料给我。"
      },
      {
        "role": "Peter",
        "en": "Here you go. Should I use the scissors now?",
        "zh": "给你。我现在用剪刀吗？"
      },
      {
        "role": "Amy",
        "en": "Yes. Be careful with the scissors. Let me help you.",
        "zh": "对。小心剪刀。我来帮你。"
      },
      {
        "role": "Peter",
        "en": "This looks amazing! We will get an A for sure!",
        "zh": "这看起来太棒了！我们肯定会得A！"
      }
    ]
  },
  {
    "id": 179,
    "category": "party",
    "title": "Taking a Group Photo 拍合照",
    "scene": "春游时，大家一起拍集体照留念。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Teacher",
      "Mia"
    ],
    "lines": [
      {
        "role": "Teacher",
        "en": "Everyone, let us take a group photo before we leave!",
        "zh": "大家，我们走之前拍张合照吧！"
      },
      {
        "role": "Mia",
        "en": "Teacher, where should we stand?",
        "zh": "老师，我们应该站在哪里？"
      },
      {
        "role": "Teacher",
        "en": "Stand in three rows. Shorter students in front.",
        "zh": "站成三排。矮的同学在前面。"
      },
      {
        "role": "Mia",
        "en": "I am short. I will stand in the front row.",
        "zh": "我很矮。我站前排。"
      },
      {
        "role": "Teacher",
        "en": "Good. Can someone hold this flower for the photo?",
        "zh": "好。谁能在拍照时拿这束花？"
      },
      {
        "role": "Mia",
        "en": "I can hold it! I will put it right in the middle.",
        "zh": "我来拿！我把它放在正中间。"
      },
      {
        "role": "Teacher",
        "en": "Everyone look at the camera and smile!",
        "zh": "大家看镜头，笑一笑！"
      },
      {
        "role": "Mia",
        "en": "Teacher, wait! My hair is messy. Let me fix it.",
        "zh": "老师，等等！我头发乱了。让我弄一下。"
      },
      {
        "role": "Teacher",
        "en": "OK, are you ready now? Say cheese!",
        "zh": "好的，现在准备好了吗？说茄子！"
      },
      {
        "role": "Mia",
        "en": "Cheese! This will be a beautiful photo!",
        "zh": "茄子！这一定是一张很美的照片！"
      }
    ]
  },
  {
    "id": 180,
    "category": "party",
    "title": "Saying Goodbye 告别送别",
    "scene": "好朋友要转学了，同学们在校门口依依惜别。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Emma",
      "Jack"
    ],
    "lines": [
      {
        "role": "Emma",
        "en": "Jack, I heard you are moving to another city.",
        "zh": "Jack，听说你要搬到另一个城市去了。"
      },
      {
        "role": "Jack",
        "en": "Yes, I am leaving next week. I feel sad.",
        "zh": "是的，我下周就要走了。我很难过。"
      },
      {
        "role": "Emma",
        "en": "Me too. We have been friends for three years.",
        "zh": "我也是。我们做了三年的朋友了。"
      },
      {
        "role": "Jack",
        "en": "I will never forget you, Emma.",
        "zh": "我永远不会忘记你，Emma。"
      },
      {
        "role": "Emma",
        "en": "I made you a farewell card. Here it is.",
        "zh": "我给你做了一张告别卡片。在这里。"
      },
      {
        "role": "Jack",
        "en": "Thank you! Can you write your phone number on it?",
        "zh": "谢谢你！你能把电话号码写在上面吗？"
      },
      {
        "role": "Emma",
        "en": "Of course. I will call you every weekend.",
        "zh": "当然。我每个周末都给你打电话。"
      },
      {
        "role": "Jack",
        "en": "And I will send you photos of my new school.",
        "zh": "我也会给你发新学校的照片。"
      },
      {
        "role": "Emma",
        "en": "Promise me we will stay friends forever.",
        "zh": "答应我，我们永远都是朋友。"
      },
      {
        "role": "Jack",
        "en": "I promise. Take care, Emma. I will miss you!",
        "zh": "我答应。保重，Emma。我会想你的！"
      }
    ]
  },
  {
    "id": 181,
    "category": "emergency",
    "title": "Lost and Asking Police 迷路找警察",
    "scene": "Lily在商场里迷路了，向警察叔叔求助。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Lily",
      "Officer"
    ],
    "lines": [
      {
        "role": "Lily",
        "en": "Excuse me, officer. I am lost.",
        "zh": "打扰了，警察叔叔。我迷路了。"
      },
      {
        "role": "Officer",
        "en": "Do not worry, little girl. What is your name?",
        "zh": "别担心，小朋友。你叫什么名字？"
      },
      {
        "role": "Lily",
        "en": "My name is Lily. I cannot find my mom.",
        "zh": "我叫Lily。我找不到妈妈了。"
      },
      {
        "role": "Officer",
        "en": "Can you tell me your mom's phone number?",
        "zh": "你能告诉我你妈妈的电话号码吗？"
      },
      {
        "role": "Lily",
        "en": "Yes, it is one-three-eight-five-five-five-six-six-seven-seven.",
        "zh": "能，是一三八五五五六六七七。"
      },
      {
        "role": "Officer",
        "en": "Good girl. Where did you last see your mom?",
        "zh": "真乖。你最后一次看到妈妈是在哪里？"
      },
      {
        "role": "Lily",
        "en": "Near the toy store on the second floor.",
        "zh": "在二楼玩具店附近。"
      },
      {
        "role": "Officer",
        "en": "I will call your mom. Stay here with me.",
        "zh": "我给你妈妈打电话。你留在这里和我在一起。"
      },
      {
        "role": "Lily",
        "en": "Thank you, officer. I am scared.",
        "zh": "谢谢警察叔叔。我好害怕。"
      },
      {
        "role": "Officer",
        "en": "Do not be afraid. Your mom is coming soon.",
        "zh": "不要怕。你妈妈马上就来了。"
      }
    ]
  },
  {
    "id": 182,
    "category": "emergency",
    "title": "Calling for Help 打急救电话",
    "scene": "Ben发现爷爷突然不舒服，打电话求助。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Ben",
      "Operator"
    ],
    "lines": [
      {
        "role": "Ben",
        "en": "Hello? I need help! My grandpa fell down!",
        "zh": "你好？我需要帮助！我爷爷摔倒了！"
      },
      {
        "role": "Operator",
        "en": "Calm down, sweetie. Where are you?",
        "zh": "别着急，小朋友。你在哪里？"
      },
      {
        "role": "Ben",
        "en": "I am at home. The address is twenty-three Apple Street.",
        "zh": "我在家。地址是苹果街23号。"
      },
      {
        "role": "Operator",
        "en": "Is your grandpa awake? Can he talk?",
        "zh": "你爷爷清醒吗？他能说话吗？"
      },
      {
        "role": "Ben",
        "en": "He is awake but he says his leg hurts a lot.",
        "zh": "他清醒，但他说腿很疼。"
      },
      {
        "role": "Operator",
        "en": "OK. Do not move him. An ambulance is on the way.",
        "zh": "好的。不要移动他。救护车已经在路上了。"
      },
      {
        "role": "Ben",
        "en": "How long will it take?",
        "zh": "要多久到？"
      },
      {
        "role": "Operator",
        "en": "About ten minutes. Stay on the phone with me.",
        "zh": "大约十分钟。别挂电话，陪我说说话。"
      },
      {
        "role": "Ben",
        "en": "OK. I put a blanket on him to keep him warm.",
        "zh": "好的。我给他盖了毯子保暖。"
      },
      {
        "role": "Operator",
        "en": "You are very brave. The ambulance is almost here.",
        "zh": "你很勇敢。救护车快到了。"
      }
    ]
  },
  {
    "id": 183,
    "category": "emergency",
    "title": "Fire Escape 火灾逃生",
    "scene": "发生火灾，Tom和妈妈迅速从家里撤离。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Mom"
    ],
    "lines": [
      {
        "role": "Mom",
        "en": "Tom, wake up! There is a fire in the kitchen!",
        "zh": "Tom，快醒醒！厨房着火了！"
      },
      {
        "role": "Tom",
        "en": "What? I smell smoke! What should we do?",
        "zh": "什么？我闻到烟味了！我们该怎么办？"
      },
      {
        "role": "Mom",
        "en": "Stay low and crawl to the door. The smoke rises up.",
        "zh": "弯下腰，爬到门口。烟是往上飘的。"
      },
      {
        "role": "Tom",
        "en": "OK, I am crawling. Should I take my toys?",
        "zh": "好的，我在爬。我要带上我的玩具吗？"
      },
      {
        "role": "Mom",
        "en": "No! Just follow me. Do not go back for anything.",
        "zh": "不要！跟着我走。不要回头拿任何东西。"
      },
      {
        "role": "Tom",
        "en": "The door handle is hot! Can we open it?",
        "zh": "门把手很烫！我们能开门吗？"
      },
      {
        "role": "Mom",
        "en": "Touch it with the back of your hand first.",
        "zh": "先用手背摸一下。"
      },
      {
        "role": "Tom",
        "en": "It is not too hot. I think it is safe.",
        "zh": "不是太烫。应该是安全的。"
      },
      {
        "role": "Mom",
        "en": "Good. Go outside and call one-one-nine!",
        "zh": "好。出去之后打119！"
      },
      {
        "role": "Tom",
        "en": "I will run to our neighbor's house. Be careful, Mom!",
        "zh": "我去邻居家。小心，妈妈！"
      }
    ]
  },
  {
    "id": 184,
    "category": "emergency",
    "title": "Earthquake Safety 地震避险",
    "scene": "教室里突然发生地震，Teacher指导学生避险。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Teacher",
      "Lucy"
    ],
    "lines": [
      {
        "role": "Lucy",
        "en": "Teacher, the ground is shaking!",
        "zh": "老师，地在抖！"
      },
      {
        "role": "Teacher",
        "en": "Everyone, get under your desks right now!",
        "zh": "大家，马上躲到桌子下面！"
      },
      {
        "role": "Lucy",
        "en": "I am scared! Should I run outside?",
        "zh": "我好害怕！我要跑出去吗？"
      },
      {
        "role": "Teacher",
        "en": "No! Stay under the desk. Protect your head.",
        "zh": "不要！待在桌子下面。保护头部。"
      },
      {
        "role": "Lucy",
        "en": "I am using my backpack to cover my head.",
        "zh": "我用书包盖住头了。"
      },
      {
        "role": "Teacher",
        "en": "Good girl. Stay away from the windows.",
        "zh": "好孩子。离窗户远一点。"
      },
      {
        "role": "Lucy",
        "en": "Is it getting stronger or weaker?",
        "zh": "震动是变强了还是变弱了？"
      },
      {
        "role": "Teacher",
        "en": "It is stopping now. Stay calm, everyone.",
        "zh": "现在快停了。大家保持冷静。"
      },
      {
        "role": "Lucy",
        "en": "Can we go out now, Teacher?",
        "zh": "老师，我们现在可以出去吗？"
      },
      {
        "role": "Teacher",
        "en": "Yes. Line up and walk out slowly. Do not run.",
        "zh": "可以。排队慢慢走出去。不要跑。"
      }
    ]
  },
  {
    "id": 185,
    "category": "emergency",
    "title": "Finding an Injured Person 发现有人受伤",
    "scene": "Sam在公园里发现一个小朋友摔倒了，去帮他。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Sam",
      "Ryan"
    ],
    "lines": [
      {
        "role": "Sam",
        "en": "Hey, are you OK? I saw you fall.",
        "zh": "嘿，你还好吗？我看到你摔倒了。"
      },
      {
        "role": "Ryan",
        "en": "My knee hurts. I think I scraped it.",
        "zh": "我的膝盖好疼。好像擦破了。"
      },
      {
        "role": "Sam",
        "en": "Let me see. It is bleeding a little.",
        "zh": "让我看看。有一点流血。"
      },
      {
        "role": "Ryan",
        "en": "It stings! What should I do?",
        "zh": "好痛！我该怎么办？"
      },
      {
        "role": "Sam",
        "en": "I have some tissues. Let me wipe it clean first.",
        "zh": "我有纸巾。让我先擦干净。"
      },
      {
        "role": "Ryan",
        "en": "Ouch! That hurts a lot.",
        "zh": "哎！好疼。"
      },
      {
        "role": "Sam",
        "en": "I know. Let me put my band-aid on it.",
        "zh": "我知道。让我把创可贴贴上。"
      },
      {
        "role": "Ryan",
        "en": "Thank you. Do you think I need a doctor?",
        "zh": "谢谢你。你觉得我需要看医生吗？"
      },
      {
        "role": "Sam",
        "en": "It is just a small scrape. You will be fine.",
        "zh": "只是小擦伤。你会没事的。"
      },
      {
        "role": "Ryan",
        "en": "You are very kind. Can you help me walk home?",
        "zh": "你真好。你能帮我走回家吗？"
      }
    ]
  },
  {
    "id": 186,
    "category": "emergency",
    "title": "Lost in the Mall 走失找妈妈",
    "scene": "Amy在超市里和妈妈走散了，向店员求助。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Amy",
      "Clerk"
    ],
    "lines": [
      {
        "role": "Amy",
        "en": "Excuse me. I cannot find my mom.",
        "zh": "打扰了。我找不到我妈妈了。"
      },
      {
        "role": "Clerk",
        "en": "How did you get separated from her?",
        "zh": "你怎么和她走散的？"
      },
      {
        "role": "Amy",
        "en": "I was looking at the toys and she was buying fruit.",
        "zh": "我在看玩具，她在买水果。"
      },
      {
        "role": "Clerk",
        "en": "It is OK. Do you know her name or phone number?",
        "zh": "没关系。你知道她的名字或电话号码吗？"
      },
      {
        "role": "Amy",
        "en": "I know her phone number. It is one-three-six...",
        "zh": "我知道她的电话号码。是一三六……"
      },
      {
        "role": "Clerk",
        "en": "Good. I will make an announcement over the speaker.",
        "zh": "很好。我用广播通知一下。"
      },
      {
        "role": "Amy",
        "en": "Will my mom hear it?",
        "zh": "我妈妈能听到吗？"
      },
      {
        "role": "Clerk",
        "en": "Yes. I will say your name and where you are.",
        "zh": "能。我会说你的名字和你在哪里。"
      },
      {
        "role": "Amy",
        "en": "OK. I will wait here. I promise not to wander.",
        "zh": "好的。我在这里等。我保证不乱走。"
      },
      {
        "role": "Clerk",
        "en": "Stay right here. Your mom will come soon.",
        "zh": "就在这里等着。你妈妈很快就来。"
      }
    ]
  },
  {
    "id": 187,
    "category": "emergency",
    "title": "Lost Backpack 丢了书包",
    "scene": "Mike放学后发现书包不见了，到处寻找。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Mike",
      "Teacher"
    ],
    "lines": [
      {
        "role": "Mike",
        "en": "Teacher, I cannot find my backpack!",
        "zh": "老师，我找不到我的书包了！"
      },
      {
        "role": "Teacher",
        "en": "When did you last see it?",
        "zh": "你最后一次看到它是什么时候？"
      },
      {
        "role": "Mike",
        "en": "I left it in the classroom after school.",
        "zh": "放学后我把它留在教室了。"
      },
      {
        "role": "Teacher",
        "en": "Let us go back to the classroom and look.",
        "zh": "我们回教室去找找。"
      },
      {
        "role": "Mike",
        "en": "It is not here. Maybe someone took it by mistake.",
        "zh": "不在这里。也许有人拿错了。"
      },
      {
        "role": "Teacher",
        "en": "What color is your backpack?",
        "zh": "你的书包是什么颜色的？"
      },
      {
        "role": "Mike",
        "en": "It is blue with a dinosaur on it.",
        "zh": "蓝色的，上面有恐龙图案。"
      },
      {
        "role": "Teacher",
        "en": "Let me ask the other teachers. Do not worry.",
        "zh": "我去问问其他老师。别担心。"
      },
      {
        "role": "Mike",
        "en": "My homework is inside. I hope someone finds it.",
        "zh": "我的作业在里面。希望能有人找到。"
      },
      {
        "role": "Teacher",
        "en": "I found it! Someone turned it in at the office.",
        "zh": "找到了！有人把它交到了办公室。"
      }
    ]
  },
  {
    "id": 188,
    "category": "emergency",
    "title": "Broken Bicycle 自行车坏了",
    "scene": "Jack骑自行车时轮胎瘪了，不知道怎么办。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Jack",
      "Dad"
    ],
    "lines": [
      {
        "role": "Jack",
        "en": "Dad, something is wrong with my bike!",
        "zh": "爸爸，我的自行车有问题！"
      },
      {
        "role": "Dad",
        "en": "What happened? Pull over to the side.",
        "zh": "怎么了？靠边停下。"
      },
      {
        "role": "Jack",
        "en": "The tire is flat. I think it hit a nail.",
        "zh": "轮胎瘪了。好像扎到钉子了。"
      },
      {
        "role": "Dad",
        "en": "Let me take a look. Yes, there is a hole in the tire.",
        "zh": "让我看看。是的，轮胎上有个洞。"
      },
      {
        "role": "Jack",
        "en": "Can we fix it here?",
        "zh": "我们能在这里修吗？"
      },
      {
        "role": "Dad",
        "en": "We need a patch kit. I have one in the car.",
        "zh": "我们需要补胎工具。我车里有一个。"
      },
      {
        "role": "Jack",
        "en": "How long will it take to fix?",
        "zh": "修好要多久？"
      },
      {
        "role": "Dad",
        "en": "About ten minutes. Help me take the wheel off.",
        "zh": "大约十分钟。帮我拆下轮子。"
      },
      {
        "role": "Jack",
        "en": "OK, here you go. Can I learn how to fix it?",
        "zh": "好的，给你。我能学怎么修吗？"
      },
      {
        "role": "Dad",
        "en": "Of course. Next time you can do it yourself.",
        "zh": "当然。下次你就能自己修了。"
      }
    ]
  },
  {
    "id": 189,
    "category": "emergency",
    "title": "Sudden Rainstorm 暴雨避雨",
    "scene": "Zoe和Kate在外面玩时突然下起暴雨，赶紧找地方避雨。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Zoe",
      "Kate"
    ],
    "lines": [
      {
        "role": "Zoe",
        "en": "Kate, look at those dark clouds!",
        "zh": "Kate，看那些乌云！"
      },
      {
        "role": "Kate",
        "en": "Oh no, it is starting to rain! We need to find shelter!",
        "zh": "噢不，开始下雨了！我们得找地方避雨！"
      },
      {
        "role": "Zoe",
        "en": "Quick, run to that bus stop over there!",
        "zh": "快，跑到那个公交站去！"
      },
      {
        "role": "Kate",
        "en": "I am so wet already! The rain is really heavy!",
        "zh": "我已经淋湿了！雨好大！"
      },
      {
        "role": "Zoe",
        "en": "We made it. Are you OK, Kate?",
        "zh": "我们到了。你还好吗，Kate？"
      },
      {
        "role": "Kate",
        "en": "I am fine, but I am freezing. I wish I had a jacket.",
        "zh": "我没事，但我好冷。我真希望带了外套。"
      },
      {
        "role": "Zoe",
        "en": "I have an umbrella in my bag. Let me share it.",
        "zh": "我包里有把伞。我们共用吧。"
      },
      {
        "role": "Kate",
        "en": "Thanks! Should we call someone to pick us up?",
        "zh": "谢谢！我们要打电话叫人来接我们吗？"
      },
      {
        "role": "Zoe",
        "en": "Good idea. Let me call my mom.",
        "zh": "好主意。我给我妈妈打电话。"
      },
      {
        "role": "Kate",
        "en": "Next time we should check the weather before going out!",
        "zh": "下次出门前我们应该看看天气预报！"
      }
    ]
  },
  {
    "id": 190,
    "category": "emergency",
    "title": "Chased by a Dog 被狗追赶",
    "scene": "Ben在走路时被一只大狗追赶，不知道该怎么办。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Ben",
      "Mom"
    ],
    "lines": [
      {
        "role": "Ben",
        "en": "Mom, help! That dog is chasing me!",
        "zh": "妈妈，救命！那只狗在追我！"
      },
      {
        "role": "Mom",
        "en": "Do not run! Stand still and do not look at it.",
        "zh": "不要跑！站住，别看它。"
      },
      {
        "role": "Ben",
        "en": "But I am scared! It keeps barking at me.",
        "zh": "但我害怕！它一直冲我叫。"
      },
      {
        "role": "Mom",
        "en": "Slowly walk backward. Do not make sudden movements.",
        "zh": "慢慢向后退。不要有突然的动作。"
      },
      {
        "role": "Ben",
        "en": "OK, I am walking backward. Is it following me?",
        "zh": "好的，我在后退。它跟着我吗？"
      },
      {
        "role": "Mom",
        "en": "It is stopping now. Good job, Ben.",
        "zh": "它在停下来了。做得好，Ben。"
      },
      {
        "role": "Ben",
        "en": "That was so scary. Whose dog is that?",
        "zh": "太吓人了。那是谁家的狗？"
      },
      {
        "role": "Mom",
        "en": "I do not know. Stay close to me.",
        "zh": "我不知道。靠近我。"
      },
      {
        "role": "Ben",
        "en": "What should I do if a dog chases me again?",
        "zh": "如果又有狗追我该怎么办？"
      },
      {
        "role": "Mom",
        "en": "Never run. Stay calm and slowly walk away.",
        "zh": "千万别跑。保持冷静，慢慢走开。"
      }
    ]
  },
  {
    "id": 191,
    "category": "emergency",
    "title": "Locked Out 被锁门外",
    "scene": "Sara放学回家发现门被锁了，进不去家。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Sara",
      "Neighbor"
    ],
    "lines": [
      {
        "role": "Sara",
        "en": "Oh no! The door is locked. Mom is not home yet.",
        "zh": "噢不！门锁了。妈妈还没回来。"
      },
      {
        "role": "Neighbor",
        "en": "Sara, are you OK? Do you need help?",
        "zh": "Sara，你还好吗？需要帮忙吗？"
      },
      {
        "role": "Sara",
        "en": "Yes, Mrs. Wang. I am locked out of my house.",
        "zh": "是的，王阿姨。我被锁在门外了。"
      },
      {
        "role": "Neighbor",
        "en": "Do you have a key in your bag?",
        "zh": "你包里有钥匙吗？"
      },
      {
        "role": "Sara",
        "en": "Let me check. No, I must have left it inside.",
        "zh": "让我找找。没有，一定是忘在屋里了。"
      },
      {
        "role": "Neighbor",
        "en": "Do you know your mom's phone number?",
        "zh": "你知道你妈妈的电话号码吗？"
      },
      {
        "role": "Sara",
        "en": "Yes, I do. Can I use your phone?",
        "zh": "知道。我可以用你的手机吗？"
      },
      {
        "role": "Neighbor",
        "en": "Of course. Come inside my house and make the call.",
        "zh": "当然可以。来我家里打电话吧。"
      },
      {
        "role": "Sara",
        "en": "Thank you so much, Mrs. Wang. Mom said she will be back in ten minutes.",
        "zh": "太感谢了，王阿姨。妈妈说她十分钟后回来。"
      },
      {
        "role": "Neighbor",
        "en": "You can wait here. Would you like some juice?",
        "zh": "你可以在这里等。要喝果汁吗？"
      }
    ]
  },
  {
    "id": 192,
    "category": "emergency",
    "title": "Stuck in an Elevator 电梯故障",
    "scene": "Tom和Dad乘电梯时电梯突然停住了，被困在电梯里。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Dad"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Dad, the elevator stopped! We are stuck!",
        "zh": "爸爸，电梯停了！我们被困住了！"
      },
      {
        "role": "Dad",
        "en": "Stay calm. Press the alarm button.",
        "zh": "保持冷静。按警报按钮。"
      },
      {
        "role": "Tom",
        "en": "I pressed it. Will someone come?",
        "zh": "我按了。会有人来吗？"
      },
      {
        "role": "Dad",
        "en": "Yes, the building staff will get the call.",
        "zh": "会的，大楼工作人员会接到通知。"
      },
      {
        "role": "Tom",
        "en": "It is dark and scary in here.",
        "zh": "里面好黑好吓人。"
      },
      {
        "role": "Dad",
        "en": "Do not worry. The lights will come back on.",
        "zh": "别担心。灯会重新亮的。"
      },
      {
        "role": "Tom",
        "en": "What if no one comes for a long time?",
        "zh": "如果很久都没人来怎么办？"
      },
      {
        "role": "Dad",
        "en": "I have my phone. Let me call for help too.",
        "zh": "我有手机。我也打电话求助。"
      },
      {
        "role": "Tom",
        "en": "I hear someone outside! They are talking to us!",
        "zh": "我听到外面有声音！他们在和我们说话！"
      },
      {
        "role": "Dad",
        "en": "Good, help is here. They will open the door soon.",
        "zh": "太好了，救兵来了。他们很快就会打开门。"
      }
    ]
  },
  {
    "id": 193,
    "category": "emergency",
    "title": "Food Poisoning 食物中毒",
    "scene": "Anna吃了不干净的食物后肚子疼，妈妈带她去看医生。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Anna",
      "Doctor"
    ],
    "lines": [
      {
        "role": "Mom",
        "en": "Doctor, my daughter has a bad stomachache.",
        "zh": "医生，我女儿肚子很疼。"
      },
      {
        "role": "Anna",
        "en": "My tummy hurts and I feel like throwing up.",
        "zh": "我的肚子好疼，还想吐。"
      },
      {
        "role": "Doctor",
        "en": "When did it start? What did you eat today?",
        "zh": "什么时候开始的？你今天吃了什么？"
      },
      {
        "role": "Anna",
        "en": "I ate some ice cream from the street vendor.",
        "zh": "我吃了路边小摊的冰淇淋。"
      },
      {
        "role": "Doctor",
        "en": "Did the ice cream look fresh?",
        "zh": "那个冰淇淋看起来新鲜吗？"
      },
      {
        "role": "Anna",
        "en": "It was melted a little. Maybe it was bad.",
        "zh": "有一点化了。可能是不好的。"
      },
      {
        "role": "Doctor",
        "en": "It sounds like food poisoning. You need to drink water.",
        "zh": "听起来像是食物中毒。你需要多喝水。"
      },
      {
        "role": "Anna",
        "en": "Will I get better soon?",
        "zh": "我很快会好吗？"
      },
      {
        "role": "Doctor",
        "en": "Yes. I will give you some medicine. Take it after meals.",
        "zh": "会的。我给你开些药。饭后吃。"
      },
      {
        "role": "Anna",
        "en": "Thank you, Doctor. I will not eat street food again.",
        "zh": "谢谢医生。我再也不吃路边摊了。"
      }
    ]
  },
  {
    "id": 194,
    "category": "emergency",
    "title": "Witnessing a Traffic Accident 看到交通事故",
    "scene": "Eric在路上看到一辆车撞到了自行车，赶紧过去帮忙。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Eric",
      "Officer"
    ],
    "lines": [
      {
        "role": "Eric",
        "en": "Officer! There was an accident over there!",
        "zh": "警察叔叔！那边出事故了！"
      },
      {
        "role": "Officer",
        "en": "Are you hurt? Can you tell me what happened?",
        "zh": "你受伤了吗？能告诉我发生了什么吗？"
      },
      {
        "role": "Eric",
        "en": "I am fine. A car hit a man on a bicycle.",
        "zh": "我没事。一辆汽车撞了一个骑自行车的人。"
      },
      {
        "role": "Officer",
        "en": "Where exactly did it happen?",
        "zh": "具体在哪个位置？"
      },
      {
        "role": "Eric",
        "en": "Right at the corner of Main Street and Park Road.",
        "zh": "就在主街和公园路的拐角处。"
      },
      {
        "role": "Officer",
        "en": "Is the man OK?",
        "zh": "那个人还好吗？"
      },
      {
        "role": "Eric",
        "en": "He can stand but his knee is bleeding.",
        "zh": "他能站起来但膝盖在流血。"
      },
      {
        "role": "Officer",
        "en": "Thank you for telling me. I will go there right now.",
        "zh": "谢谢你告诉我。我马上过去。"
      },
      {
        "role": "Eric",
        "en": "Someone already called one-two-zero.",
        "zh": "已经有人打了120了。"
      },
      {
        "role": "Officer",
        "en": "Good. You did the right thing by coming to me.",
        "zh": "很好。你来找我是对的。"
      }
    ]
  },
  {
    "id": 195,
    "category": "emergency",
    "title": "Calling Parents for Help 打电话找爸妈",
    "scene": "放学后没人来接，打电话给爸妈。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Child",
      "Mom"
    ],
    "lines": [
      {
        "role": "Child",
        "en": "Mom, it is me. School is over, but I cannot find Dad.",
        "zh": "妈妈，是我。放学了，但是我找不到爸爸。"
      },
      {
        "role": "Mom",
        "en": "Oh no! Are you still at the school gate?",
        "zh": "哎呀！你还在学校门口吗？"
      },
      {
        "role": "Child",
        "en": "Yes, I have been waiting for twenty minutes. All the other kids have gone home.",
        "zh": "是的，我已经等了二十分钟了。其他小朋友都回家了。"
      },
      {
        "role": "Mom",
        "en": "Do not worry, sweetie. I will call Dad right now. Can you stay inside the school?",
        "zh": "别担心，宝贝。我马上给爸爸打电话。你能待在学校里面吗？"
      },
      {
        "role": "Child",
        "en": "Okay. But I am a little hungry. I did not eat my snack this afternoon.",
        "zh": "好的。但是我有点饿。我今天下午没吃零食。"
      },
      {
        "role": "Mom",
        "en": "Go to the school office and tell the teacher you are waiting. They will take care of you.",
        "zh": "你去学校办公室，告诉老师你在等人。他们会照顾你的。"
      },
      {
        "role": "Child",
        "en": "Good idea. The school office is just next to the library. I know where it is.",
        "zh": "好主意。学校办公室就在图书馆旁边。我知道在哪里。"
      },
      {
        "role": "Mom",
        "en": "Dad just messaged me. He is stuck in traffic. He will be there in fifteen minutes.",
        "zh": "爸爸刚给我发了消息。他堵车了。他十五分钟后就到。"
      },
      {
        "role": "Child",
        "en": "Okay, I will wait in the office. Thank you, Mom!",
        "zh": "好的，我在办公室等。谢谢你，妈妈！"
      }
    ]
  },
  {
    "id": 196,
    "category": "emergency",
    "title": "Missing the School Bus 错过校车",
    "scene": "Sam起床晚了，错过了校车，需要想办法去学校。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Sam",
      "Dad"
    ],
    "lines": [
      {
        "role": "Sam",
        "en": "Dad! I missed the school bus! What do I do?",
        "zh": "爸爸！我错过校车了！怎么办？"
      },
      {
        "role": "Dad",
        "en": "How late are you? What time is it now?",
        "zh": "你晚了多久？现在几点了？"
      },
      {
        "role": "Sam",
        "en": "It is seven thirty. The bus left at seven fifteen.",
        "zh": "七点半了。校车七点一刻就走了。"
      },
      {
        "role": "Dad",
        "en": "Do not panic. I can drive you to school.",
        "zh": "别慌。我可以开车送你去学校。"
      },
      {
        "role": "Sam",
        "en": "Will we make it in time for class?",
        "zh": "我们能赶上上课吗？"
      },
      {
        "role": "Dad",
        "en": "School starts at eight. We have thirty minutes.",
        "zh": "八点上课。我们还有三十分钟。"
      },
      {
        "role": "Sam",
        "en": "I am sorry, Dad. I overslept this morning.",
        "zh": "对不起爸爸。我今早睡过头了。"
      },
      {
        "role": "Dad",
        "en": "It is OK. Set two alarms tonight so it does not happen again.",
        "zh": "没关系。今晚定两个闹钟，免得再发生。"
      },
      {
        "role": "Sam",
        "en": "I will. Thank you for driving me.",
        "zh": "我会的。谢谢你开车送我。"
      },
      {
        "role": "Dad",
        "en": "Let us go! Grab your bag and hurry!",
        "zh": "走吧！拿上书包，快！"
      }
    ]
  },
  {
    "id": 197,
    "category": "emergency",
    "title": "Falling into Water 掉进水里",
    "scene": "Max在河边玩耍时不小心掉进水里，大喊救命。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Max",
      "Coach"
    ],
    "lines": [
      {
        "role": "Max",
        "en": "Help! Help! I fell in the water!",
        "zh": "救命！救命！我掉进水里了！"
      },
      {
        "role": "Coach",
        "en": "Max! Stay calm! Try to hold on to that branch!",
        "zh": "Max！冷静！尽量抓住那根树枝！"
      },
      {
        "role": "Max",
        "en": "I am trying! The water is so cold!",
        "zh": "我在努力！水好冷！"
      },
      {
        "role": "Coach",
        "en": "Do not splash around. Stay still and float on your back.",
        "zh": "不要乱扑腾。保持不动，仰面漂浮。"
      },
      {
        "role": "Max",
        "en": "I can not touch the bottom. It is deep!",
        "zh": "我踩不到底。好深！"
      },
      {
        "role": "Coach",
        "en": "Kick your legs gently toward the shore.",
        "zh": "轻轻踢腿，朝岸边游。"
      },
      {
        "role": "Max",
        "en": "I am kicking! I am moving closer!",
        "zh": "我在踢腿！我在靠近！"
      },
      {
        "role": "Coach",
        "en": "That is it! Keep going. I will reach my hand out.",
        "zh": "对！继续。我伸手过来拉你。"
      },
      {
        "role": "Max",
        "en": "Got your hand! Pull me up!",
        "zh": "抓住你的手了！拉我上去！"
      },
      {
        "role": "Coach",
        "en": "You are safe now. Let me get you a towel.",
        "zh": "你现在安全了。我去给你拿毛巾。"
      }
    ]
  },
  {
    "id": 198,
    "category": "emergency",
    "title": "Bee Sting 被蜜蜂蛰了",
    "scene": "Grace在花园里被蜜蜂蛰了手，爸爸帮她处理。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Grace",
      "Dad"
    ],
    "lines": [
      {
        "role": "Grace",
        "en": "Ouch! Dad, something stung my hand!",
        "zh": "哎！爸爸，什么东西蛰了我的手！"
      },
      {
        "role": "Dad",
        "en": "Let me see. Oh, it is a bee sting.",
        "zh": "让我看看。噢，是蜜蜂蛰的。"
      },
      {
        "role": "Grace",
        "en": "It hurts so much! My hand is swelling up!",
        "zh": "好疼！我的手肿起来了！"
      },
      {
        "role": "Dad",
        "en": "Do not scratch it. Let me get the stinger out.",
        "zh": "别挠。让我把刺拔出来。"
      },
      {
        "role": "Grace",
        "en": "Is there a stinger still in my hand?",
        "zh": "手上还有刺吗？"
      },
      {
        "role": "Dad",
        "en": "Yes. Let me scrape it off with this card.",
        "zh": "有。我用这张卡片刮掉。"
      },
      {
        "role": "Grace",
        "en": "Ow! Are you sure you got it all out?",
        "zh": "哎！你确定都拔出来了吗？"
      },
      {
        "role": "Dad",
        "en": "Yes. Now let me wash it and put some ice on it.",
        "zh": "确定。现在让我洗一下，放些冰块。"
      },
      {
        "role": "Grace",
        "en": "The ice feels better. Will it stop hurting?",
        "zh": "冰块感觉好多了。还会疼吗？"
      },
      {
        "role": "Dad",
        "en": "Yes, it will feel better soon. Next time wear gloves in the garden.",
        "zh": "会好的，很快就不疼了。下次在花园里戴手套。"
      }
    ]
  },
  {
    "id": 199,
    "category": "emergency",
    "title": "Nosebleed 流鼻血处理",
    "scene": "Daniel在教室里突然流鼻血，同桌帮他处理。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Daniel",
      "Teacher"
    ],
    "lines": [
      {
        "role": "Daniel",
        "en": "Teacher! My nose is bleeding!",
        "zh": "老师！我的鼻子在流血！"
      },
      {
        "role": "Teacher",
        "en": "Do not tilt your head back, Daniel. Sit up straight.",
        "zh": "别仰头，Daniel。坐直。"
      },
      {
        "role": "Daniel",
        "en": "It is bleeding a lot. I am scared.",
        "zh": "流了好多血。我好害怕。"
      },
      {
        "role": "Teacher",
        "en": "It is OK. Pinch your nose with your thumb and finger.",
        "zh": "没关系。用拇指和食指捏住鼻子。"
      },
      {
        "role": "Daniel",
        "en": "Like this? Should I lean forward?",
        "zh": "像这样吗？我应该往前倾吗？"
      },
      {
        "role": "Teacher",
        "en": "Yes, lean forward slightly. Breathe through your mouth.",
        "zh": "对，微微前倾。用嘴呼吸。"
      },
      {
        "role": "Daniel",
        "en": "How long do I need to hold it?",
        "zh": "我需要捏多久？"
      },
      {
        "role": "Teacher",
        "en": "About ten minutes. Let me get you some tissue.",
        "zh": "大约十分钟。我去给你拿纸巾。"
      },
      {
        "role": "Daniel",
        "en": "It is stopping now. Thank you, Teacher.",
        "zh": "现在不流了。谢谢老师。"
      },
      {
        "role": "Teacher",
        "en": "Good. Go wash your face and drink some water.",
        "zh": "很好。去洗洗脸，喝点水。"
      }
    ]
  },
  {
    "id": 200,
    "category": "emergency",
    "title": "Heatstroke 中暑处理",
    "scene": "Tim在夏天户外运动时感到头晕恶心，朋友帮他人阴凉处休息。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tim",
      "Sam"
    ],
    "lines": [
      {
        "role": "Tim",
        "en": "Sam, I feel dizzy. My head hurts.",
        "zh": "Sam，我觉得头晕。头好疼。"
      },
      {
        "role": "Sam",
        "en": "Tim, your face is really red! Let us get out of the sun.",
        "zh": "Tim，你脸好红！我们离开太阳底下。"
      },
      {
        "role": "Tim",
        "en": "I feel sick. I think I need to sit down.",
        "zh": "我想吐。我觉得需要坐下。"
      },
      {
        "role": "Sam",
        "en": "Come to the shade under the tree. Sit here.",
        "zh": "来树荫下面。坐这里。"
      },
      {
        "role": "Tim",
        "en": "I am so thirsty. Do you have any water?",
        "zh": "我好渴。你有水吗？"
      },
      {
        "role": "Sam",
        "en": "Yes, drink slowly. Do not drink too fast.",
        "zh": "有，慢慢喝。不要太急。"
      },
      {
        "role": "Tim",
        "en": "Thanks. I think I played too long in the sun.",
        "zh": "谢谢。我想是太阳下玩太久了。"
      },
      {
        "role": "Sam",
        "en": "You might have a heatstroke. Let me wet this towel.",
        "zh": "你可能中暑了。我把毛巾弄湿。"
      },
      {
        "role": "Tim",
        "en": "That feels better on my forehead.",
        "zh": "放在额头上舒服多了。"
      },
      {
        "role": "Sam",
        "en": "Rest here. I will go get some help from the nurse.",
        "zh": "在这里休息。我去叫校医来帮忙。"
      }
    ]
  },
  {
    "id": 201,
    "category": "daily",
    "title": "Getting a Haircut 剪头发",
    "scene": "理发店和理发师沟通。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Customer",
      "Barber"
    ],
    "lines": [
      {
        "role": "Customer",
        "en": "Hello, I would like to get a haircut, please.",
        "zh": "你好，我想剪个头发。"
      },
      {
        "role": "Barber",
        "en": "Sure, please sit down. How would you like it cut?",
        "zh": "好的，请坐。您想怎么剪？"
      },
      {
        "role": "Customer",
        "en": "Just a little shorter on the sides, please. Not too short.",
        "zh": "两边稍微剪短一点就好。不要剪太短。"
      },
      {
        "role": "Barber",
        "en": "No problem. Do you want me to wash your hair first?",
        "zh": "没问题。要我先帮您洗个头吗？"
      },
      {
        "role": "Customer",
        "en": "Yes, please. And can you use the shampoo that smells like oranges?",
        "zh": "好的。能用那个橙子味的洗发水吗？"
      },
      {
        "role": "Barber",
        "en": "Of course. Are you happy with the length in the front?",
        "zh": "当然可以。前面的长度您满意吗？"
      },
      {
        "role": "Customer",
        "en": "Please trim the bangs a little bit. They are getting into my eyes.",
        "zh": "请把刘海稍微修一下。有点扎眼睛了。"
      },
      {
        "role": "Barber",
        "en": "All done. How does it look?",
        "zh": "好了。看起来怎么样？"
      },
      {
        "role": "Customer",
        "en": "It looks great! Thank you so much.",
        "zh": "看起来棒极了！非常感谢。"
      }
    ]
  },
  {
    "id": 202,
    "category": "daily",
    "title": "Receiving a Package 收快递",
    "scene": "在家门口收快递。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Customer",
      "Courier"
    ],
    "lines": [
      {
        "role": "Courier",
        "en": "Hello! You have a package. Are you the person named on the order?",
        "zh": "你好！你有一个快递。你是收件人吗？"
      },
      {
        "role": "Customer",
        "en": "Yes, that is me. Let me see. What is inside?",
        "zh": "是的，是我。让我看看。里面是什么？"
      },
      {
        "role": "Courier",
        "en": "It is from Shanghai. Please sign your name here.",
        "zh": "是从上海寄来的。请在这里签个名。"
      },
      {
        "role": "Customer",
        "en": "Okay, let me grab a pen. Do I need to show you my ID?",
        "zh": "好的，我拿支笔。需要出示身份证吗？"
      },
      {
        "role": "Courier",
        "en": "No, a signature is enough this time. The package is not too heavy.",
        "zh": "不用，这次签个名就够了。这个包裹不太重。"
      },
      {
        "role": "Customer",
        "en": "That is great. Oh wait, I think there should be two packages.",
        "zh": "太好了。哦等等，应该有两个包裹才对。"
      },
      {
        "role": "Courier",
        "en": "Let me check my list. Yes, you are right. The other one is in the truck.",
        "zh": "我查一下清单。是的，你说得对。另一个在车上。"
      },
      {
        "role": "Customer",
        "en": "I will wait here. Take your time.",
        "zh": "我在这里等。不着急。"
      },
      {
        "role": "Courier",
        "en": "Here you go. Have a nice day!",
        "zh": "给你。祝你有美好的一天！"
      }
    ]
  },
  {
    "id": 203,
    "category": "daily",
    "title": "Daily Commute 日常通勤",
    "scene": "讨论怎么上学/上班。",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Lily"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Lily, how do you get to school every morning?",
        "zh": "Lily，你每天早上怎么去上学？"
      },
      {
        "role": "Lily",
        "en": "I usually ride my bike. It takes about fifteen minutes.",
        "zh": "我通常骑自行车。大概需要十五分钟。"
      },
      {
        "role": "Tom",
        "en": "That is fast. I take the bus because my home is far away.",
        "zh": "真快。我坐公交车，因为我家离得很远。"
      },
      {
        "role": "Lily",
        "en": "How long does it take by bus?",
        "zh": "坐公交车要多长时间？"
      },
      {
        "role": "Tom",
        "en": "About thirty minutes, but the bus is often crowded in the morning.",
        "zh": "大概三十分钟，但是早上公交车经常很挤。"
      },
      {
        "role": "Lily",
        "en": "That is tough. Sometimes my dad drives me when it rains.",
        "zh": "那真辛苦。下雨的时候我爸爸会开车送我。"
      },
      {
        "role": "Tom",
        "en": "I wish I could walk to school. It is good exercise.",
        "zh": "真希望我能走路去上学。那是很好的锻炼。"
      },
      {
        "role": "Lily",
        "en": "You could get off one stop earlier and walk the rest of the way.",
        "zh": "你可以提前一站下车，然后走剩下的路。"
      },
      {
        "role": "Tom",
        "en": "That is a great idea! I will try it tomorrow.",
        "zh": "好主意！我明天就试试。"
      }
    ]
  },
  {
    "id": 204,
    "category": "workplace",
    "title": "Job Interview 面试求职",
    "scene": "在一家科技公司面试",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Interviewer",
      "Candidate"
    ],
    "lines": [
      {
        "role": "Interviewer",
        "en": "Good morning. Please have a seat.",
        "zh": "早上好，请坐。"
      },
      {
        "role": "Candidate",
        "en": "Thank you for having me today.",
        "zh": "感谢您今天让我来面试。"
      },
      {
        "role": "Interviewer",
        "en": "So, tell me a little about yourself.",
        "zh": "那么，请简单介绍一下你自己。"
      },
      {
        "role": "Candidate",
        "en": "I graduated last year and have been working as a marketing assistant.",
        "zh": "我去年毕业，一直担任市场助理。"
      },
      {
        "role": "Interviewer",
        "en": "Why do you want to leave your current job?",
        "zh": "你为什么想离开现在的工作？"
      },
      {
        "role": "Candidate",
        "en": "I am looking for more challenges and opportunities to grow.",
        "zh": "我想寻找更多挑战和成长机会。"
      },
      {
        "role": "Interviewer",
        "en": "What are your strengths?",
        "zh": "你的优势是什么？"
      },
      {
        "role": "Candidate",
        "en": "I am good at teamwork and always meet deadlines.",
        "zh": "我擅长团队合作，而且总能按时完成任务。"
      },
      {
        "role": "Interviewer",
        "en": "Do you have any questions for us?",
        "zh": "你有什么问题想问我们吗？"
      },
      {
        "role": "Candidate",
        "en": "Yes, what does a typical day look like in this role?",
        "zh": "有的，这个岗位的日常工作是怎样的？"
      }
    ]
  },
  {
    "id": 205,
    "category": "workplace",
    "title": "First Day at Work 第一天上班",
    "scene": "新员工入职第一天",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "New Employee",
      "Manager"
    ],
    "lines": [
      {
        "role": "New Employee",
        "en": "Good morning. I am the new hire, Alex.",
        "zh": "早上好，我是新员工Alex。"
      },
      {
        "role": "Manager",
        "en": "Welcome! Let me show you around the office.",
        "zh": "欢迎！我带你参观一下办公室。"
      },
      {
        "role": "New Employee",
        "en": "Thank you. Where is my desk?",
        "zh": "谢谢，我的工位在哪里？"
      },
      {
        "role": "Manager",
        "en": "Right over here. Your computer is already set up.",
        "zh": "就在这里，你的电脑已经设置好了。"
      },
      {
        "role": "New Employee",
        "en": "Great. What time do we usually have lunch?",
        "zh": "太好了。我们通常几点吃午饭？"
      },
      {
        "role": "Manager",
        "en": "Most people go at noon. The cafeteria is on the third floor.",
        "zh": "大多数人中午去。食堂在三楼。"
      },
      {
        "role": "New Employee",
        "en": "I see. Who should I ask if I have questions?",
        "zh": "明白了。如果有问题我应该问谁？"
      },
      {
        "role": "Manager",
        "en": "You can come to me anytime. Also, Sarah will be your mentor.",
        "zh": "你可以随时来找我。另外，Sarah会是你的导师。"
      },
      {
        "role": "New Employee",
        "en": "That is very helpful. Thank you so much.",
        "zh": "这很有帮助，非常感谢。"
      }
    ]
  },
  {
    "id": 206,
    "category": "workplace",
    "title": "Asking for Leave 请假",
    "scene": "员工向老板请假",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Employee",
      "Boss"
    ],
    "lines": [
      {
        "role": "Employee",
        "en": "Excuse me, do you have a minute?",
        "zh": "打扰一下，您有空吗？"
      },
      {
        "role": "Boss",
        "en": "Sure. What is it?",
        "zh": "当然，什么事？"
      },
      {
        "role": "Employee",
        "en": "I would like to request two days off next week.",
        "zh": "我想申请下周休两天假。"
      },
      {
        "role": "Boss",
        "en": "May I ask why?",
        "zh": "能问一下原因吗？"
      },
      {
        "role": "Employee",
        "en": "My mother is visiting, and I want to show her around the city.",
        "zh": "我妈妈要来看我，我想带她逛逛。"
      },
      {
        "role": "Boss",
        "en": "That sounds reasonable. Is your work covered?",
        "zh": "这很合理。你的工作有人接替吗？"
      },
      {
        "role": "Employee",
        "en": "Yes, I have already talked to Lisa. She will help.",
        "zh": "是的，我已经和Lisa说好了，她会帮忙。"
      },
      {
        "role": "Boss",
        "en": "Alright, just send me a formal email request.",
        "zh": "好的，给我发一封正式的邮件申请就行。"
      },
      {
        "role": "Employee",
        "en": "Will do. Thank you for understanding.",
        "zh": "好的，感谢您的理解。"
      }
    ]
  },
  {
    "id": 207,
    "category": "workplace",
    "title": "Work Report 工作汇报",
    "scene": "员工向经理汇报工作进展",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Employee",
      "Manager"
    ],
    "lines": [
      {
        "role": "Employee",
        "en": "Hi, here is the weekly report you asked for.",
        "zh": "您好，这是您要的周报。"
      },
      {
        "role": "Manager",
        "en": "Thanks. How is the project going?",
        "zh": "谢谢。项目进展如何？"
      },
      {
        "role": "Employee",
        "en": "We are 80 percent done. The design part is finished.",
        "zh": "我们完成了80%。设计部分已经做完了。"
      },
      {
        "role": "Manager",
        "en": "What about the client feedback?",
        "zh": "客户反馈怎么样？"
      },
      {
        "role": "Employee",
        "en": "They are happy with the layout but want to change the colors.",
        "zh": "他们对布局满意，但想修改颜色。"
      },
      {
        "role": "Manager",
        "en": "Can we finish the changes by Friday?",
        "zh": "我们能在周五前完成修改吗？"
      },
      {
        "role": "Employee",
        "en": "I think so. I will confirm with the team today.",
        "zh": "应该可以。我今天会和团队确认。"
      },
      {
        "role": "Manager",
        "en": "Good. Please keep me updated.",
        "zh": "好的，有进展随时告诉我。"
      },
      {
        "role": "Employee",
        "en": "No problem. I will send an update tomorrow.",
        "zh": "没问题，我明天会发进展更新。"
      }
    ]
  },
  {
    "id": 208,
    "category": "workplace",
    "title": "Discussing a Project 讨论项目",
    "scene": "两位同事讨论新项目方案",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Colleague A",
      "Colleague B"
    ],
    "lines": [
      {
        "role": "Colleague A",
        "en": "Have you read the new project brief?",
        "zh": "你看过新的项目简报了吗？"
      },
      {
        "role": "Colleague B",
        "en": "Yes, but I think the deadline is too tight.",
        "zh": "看了，但我觉得截止日期太紧了。"
      },
      {
        "role": "Colleague A",
        "en": "I agree. We need at least two more weeks.",
        "zh": "我同意。我们至少还需要两周。"
      },
      {
        "role": "Colleague B",
        "en": "Should we talk to the project manager about it?",
        "zh": "我们应该和项目经理谈谈吗？"
      },
      {
        "role": "Colleague A",
        "en": "Definitely. Also, who do you think should lead the team?",
        "zh": "当然。另外，你觉得谁应该带领团队？"
      },
      {
        "role": "Colleague B",
        "en": "Maybe David? He has the most experience.",
        "zh": "也许是David？他经验最丰富。"
      },
      {
        "role": "Colleague A",
        "en": "Good idea. Let us prepare a proposal together.",
        "zh": "好主意。我们一起准备一份提案吧。"
      },
      {
        "role": "Colleague B",
        "en": "Sure. When should we present it?",
        "zh": "好的。我们什么时候展示？"
      },
      {
        "role": "Colleague A",
        "en": "How about Thursday morning?",
        "zh": "周四上午怎么样？"
      },
      {
        "role": "Colleague B",
        "en": "That works for me.",
        "zh": "我没问题。"
      }
    ]
  },
  {
    "id": 209,
    "category": "workplace",
    "title": "Client Phone Call 客户电话",
    "scene": "销售人员接听客户来电",
    "difficulty": "中等",
    "duration": "2分钟",
    "roles": [
      "Sales",
      "Client"
    ],
    "lines": [
      {
        "role": "Sales",
        "en": "Good afternoon. This is Bright Tech. How may I help you?",
        "zh": "下午好，这里是Bright Tech。有什么可以帮您？"
      },
      {
        "role": "Client",
        "en": "Hi, I am calling about the order I placed last week.",
        "zh": "您好，我打电话是想问一下上周下的订单。"
      },
      {
        "role": "Sales",
        "en": "Of course. Could you give me the order number?",
        "zh": "好的，能给我订单号吗？"
      },
      {
        "role": "Client",
        "en": "It is 88056.",
        "zh": "是88056。"
      },
      {
        "role": "Sales",
        "en": "Thank you. I see it here. It will be shipped tomorrow.",
        "zh": "谢谢。我查到了，明天会发货。"
      },
      {
        "role": "Client",
        "en": "That is good. Can you also send me the invoice by email?",
        "zh": "那很好。能同时把发票发到我邮箱吗？"
      },
      {
        "role": "Sales",
        "en": "Absolutely. What is your email address?",
        "zh": "当然可以。您的邮箱地址是什么？"
      },
      {
        "role": "Client",
        "en": "It is john at greenfield dot com.",
        "zh": "john at greenfield dot com。"
      },
      {
        "role": "Sales",
        "en": "Got it. You will receive it within an hour. Thank you for calling.",
        "zh": "收到了。您会在一小时内收到。感谢您的来电。"
      }
    ]
  },
  {
    "id": 210,
    "category": "workplace",
    "title": "Asking for a Raise 申请加薪",
    "scene": "员工向老板申请加薪",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Employee",
      "Boss"
    ],
    "lines": [
      {
        "role": "Employee",
        "en": "Could we talk about my salary when you are free?",
        "zh": "您有空的时候，能聊聊我的工资吗？"
      },
      {
        "role": "Boss",
        "en": "Sure. What is on your mind?",
        "zh": "当然可以，你想说什么？"
      },
      {
        "role": "Employee",
        "en": "I have been here for two years and my responsibilities have grown a lot.",
        "zh": "我已经入职两年了，职责增加了很多。"
      },
      {
        "role": "Boss",
        "en": "That is true. You have done great work.",
        "zh": "确实如此，你工作做得很好。"
      },
      {
        "role": "Employee",
        "en": "Thank you. I was hoping we could discuss a raise.",
        "zh": "谢谢。我希望我们能谈谈加薪的事。"
      },
      {
        "role": "Boss",
        "en": "I understand. What number do you have in mind?",
        "zh": "我理解。你期望的涨幅是多少？"
      },
      {
        "role": "Employee",
        "en": "I was thinking of a 10 percent increase.",
        "zh": "我想涨10%。"
      },
      {
        "role": "Boss",
        "en": "I cannot promise that right now, but I will look into it.",
        "zh": "我现在不能承诺，但我会考虑的。"
      },
      {
        "role": "Employee",
        "en": "I appreciate it. Please let me know your decision.",
        "zh": "非常感谢。有决定请告诉我。"
      }
    ]
  },
  {
    "id": 211,
    "category": "workplace",
    "title": "Office Small Talk 办公室闲聊",
    "scene": "同事在茶水间聊天",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Tom",
      "Lily"
    ],
    "lines": [
      {
        "role": "Tom",
        "en": "Hey Lily, how was your weekend?",
        "zh": "嗨Lily，周末过得怎么样？"
      },
      {
        "role": "Lily",
        "en": "Pretty good. I just stayed home and watched some movies.",
        "zh": "还不错。我就待在家里看了几部电影。"
      },
      {
        "role": "Tom",
        "en": "Nice. Anything good?",
        "zh": "不错啊。有什么好看的？"
      },
      {
        "role": "Lily",
        "en": "Yes, a new comedy on Netflix. You should check it out.",
        "zh": "有的，Netflix上一部新喜剧。你应该看看。"
      },
      {
        "role": "Tom",
        "en": "I will. By the way, are you going to the team lunch tomorrow?",
        "zh": "我会的。对了，你明天去团队午餐吗？"
      },
      {
        "role": "Lily",
        "en": "Of course. I heard the new Italian place is really good.",
        "zh": "当然。听说那家新开的意大利餐厅很棒。"
      },
      {
        "role": "Tom",
        "en": "I have heard that too. I am looking forward to it.",
        "zh": "我也听说了。我很期待。"
      },
      {
        "role": "Lily",
        "en": "Me too. It is nice to take a break from work.",
        "zh": "我也是。能从工作中休息一下真好。"
      },
      {
        "role": "Tom",
        "en": "Totally. See you there then.",
        "zh": "完全同意。那明天见。"
      }
    ]
  },
  {
    "id": 212,
    "category": "workplace",
    "title": "Team Meeting 团队会议",
    "scene": "团队每周例会",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Leader",
      "Member"
    ],
    "lines": [
      {
        "role": "Leader",
        "en": "Everyone here? Let us get started.",
        "zh": "都到齐了吗？我们开始吧。"
      },
      {
        "role": "Member",
        "en": "I am here. Sorry, Mark is running a bit late.",
        "zh": "我到了。抱歉，Mark会晚一点。"
      },
      {
        "role": "Leader",
        "en": "Okay. First, let us review last week's goals.",
        "zh": "好的。首先，回顾一下上周的目标。"
      },
      {
        "role": "Member",
        "en": "We finished the website update on time.",
        "zh": "我们按时完成了网站更新。"
      },
      {
        "role": "Leader",
        "en": "Great job. What about this week's focus?",
        "zh": "干得好。这周的重点是什么？"
      },
      {
        "role": "Member",
        "en": "We need to prepare the presentation for the client.",
        "zh": "我们需要为客户准备演示文稿。"
      },
      {
        "role": "Leader",
        "en": "Right. Who will take the lead on that?",
        "zh": "对。谁来做主要负责人？"
      },
      {
        "role": "Member",
        "en": "I can do it. I already have some ideas.",
        "zh": "我可以做。我已经有一些想法了。"
      },
      {
        "role": "Leader",
        "en": "Perfect. Let us meet again on Wednesday to check progress.",
        "zh": "很好。我们周三再碰一下，检查进展。"
      }
    ]
  },
  {
    "id": 213,
    "category": "workplace",
    "title": "Handling a Complaint 处理投诉",
    "scene": "经理处理客户投诉",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Manager",
      "Customer"
    ],
    "lines": [
      {
        "role": "Customer",
        "en": "I am very unhappy with the service I received.",
        "zh": "我对收到的服务非常不满意。"
      },
      {
        "role": "Manager",
        "en": "I am sorry to hear that. Please tell me what happened.",
        "zh": "很抱歉听到这个。请告诉我发生了什么。"
      },
      {
        "role": "Customer",
        "en": "My order arrived late and the package was damaged.",
        "zh": "我的订单送晚了，而且包装还破损了。"
      },
      {
        "role": "Manager",
        "en": "That is completely unacceptable. I sincerely apologize.",
        "zh": "这完全不能接受。我真诚地向您道歉。"
      },
      {
        "role": "Customer",
        "en": "I want a full refund.",
        "zh": "我要全额退款。"
      },
      {
        "role": "Manager",
        "en": "Of course. I will process that right away.",
        "zh": "当然。我立刻为您办理。"
      },
      {
        "role": "Customer",
        "en": "And I hope this does not happen again.",
        "zh": "而且我希望这种事不要再发生。"
      },
      {
        "role": "Manager",
        "en": "I assure you we will improve our delivery process.",
        "zh": "我向您保证，我们会改进配送流程。"
      },
      {
        "role": "Customer",
        "en": "Thank you for handling this quickly.",
        "zh": "感谢您迅速处理。"
      }
    ]
  },
  {
    "id": 214,
    "category": "workplace",
    "title": "Resignation Talk 辞职谈话",
    "scene": "员工向老板提出辞职",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Employee",
      "Boss"
    ],
    "lines": [
      {
        "role": "Employee",
        "en": "Do you have a moment? I need to talk to you about something important.",
        "zh": "您有空吗？有件重要的事想和您谈。"
      },
      {
        "role": "Boss",
        "en": "Sure. What is going on?",
        "zh": "当然，怎么了？"
      },
      {
        "role": "Employee",
        "en": "I have decided to resign from my position.",
        "zh": "我决定辞职了。"
      },
      {
        "role": "Boss",
        "en": "That is unexpected. May I ask why?",
        "zh": "这很突然。能问一下原因吗？"
      },
      {
        "role": "Employee",
        "en": "I have received an offer to study abroad for my master's degree.",
        "zh": "我收到了出国读硕士的录取通知。"
      },
      {
        "role": "Boss",
        "en": "I see. That is a great opportunity. When is your last day?",
        "zh": "明白了。这是个好机会。你最后工作日是什么时候？"
      },
      {
        "role": "Employee",
        "en": "I can stay until the end of next month to help with the transition.",
        "zh": "我可以做到下个月底，帮忙过渡。"
      },
      {
        "role": "Boss",
        "en": "I appreciate that. You will be missed here.",
        "zh": "非常感谢。我们会想念你的。"
      },
      {
        "role": "Employee",
        "en": "Thank you for everything. I have learned so much here.",
        "zh": "感谢您的一切。我在这里学到了很多。"
      }
    ]
  },
  {
    "id": 215,
    "category": "workplace",
    "title": "Working Overtime 加班",
    "scene": "两位同事一起加班",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Employee",
      "Colleague"
    ],
    "lines": [
      {
        "role": "Employee",
        "en": "Still here? I thought I was the only one.",
        "zh": "还在？我以为只有我一个人。"
      },
      {
        "role": "Colleague",
        "en": "Same here. This report is due tomorrow morning.",
        "zh": "我也是。这份报告明早要交。"
      },
      {
        "role": "Employee",
        "en": "I know the feeling. I have been working on it since 5 PM.",
        "zh": "我懂。我从下午五点就开始弄了。"
      },
      {
        "role": "Colleague",
        "en": "Have you had dinner yet?",
        "zh": "你吃晚饭了吗？"
      },
      {
        "role": "Employee",
        "en": "No. Want to order some takeout together?",
        "zh": "还没。一起点外卖吗？"
      },
      {
        "role": "Colleague",
        "en": "Good idea. My treat tonight.",
        "zh": "好主意。今晚我请客。"
      },
      {
        "role": "Employee",
        "en": "That is very kind. Thanks!",
        "zh": "太好了，谢谢！"
      },
      {
        "role": "Colleague",
        "en": "No problem. We can finish this faster if we work together.",
        "zh": "不客气。我们一起做会更快完成。"
      },
      {
        "role": "Employee",
        "en": "Deal. Let us get it done and go home.",
        "zh": "一言为定。做完早点回家。"
      }
    ]
  },
  {
    "id": 216,
    "category": "workplace",
    "title": "Business Trip Prep 出差准备",
    "scene": "员工和助理准备出差",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Employee",
      "Assistant"
    ],
    "lines": [
      {
        "role": "Employee",
        "en": "I need to prepare for the Shanghai trip next Monday.",
        "zh": "我需要准备下周一去上海的出差。"
      },
      {
        "role": "Assistant",
        "en": "Sure. Have you booked the flight and hotel?",
        "zh": "好的。机票和酒店订了吗？"
      },
      {
        "role": "Employee",
        "en": "Not yet. Can you help me with that?",
        "zh": "还没。你能帮我订一下吗？"
      },
      {
        "role": "Assistant",
        "en": "Of course. What time do you prefer to leave?",
        "zh": "当然。您希望几点出发？"
      },
      {
        "role": "Employee",
        "en": "The morning flight around 9 AM would be best.",
        "zh": "早上9点左右的航班最好。"
      },
      {
        "role": "Assistant",
        "en": "Got it. And for the hotel, near the client's office?",
        "zh": "明白。酒店要订在客户办公室附近吗？"
      },
      {
        "role": "Employee",
        "en": "Yes, that would be more convenient.",
        "zh": "是的，那样更方便。"
      },
      {
        "role": "Assistant",
        "en": "I will also print the meeting agenda and materials.",
        "zh": "我还会把会议议程和资料打印出来。"
      },
      {
        "role": "Employee",
        "en": "Perfect. Please send me the itinerary once it is ready.",
        "zh": "太好了。准备好后请把行程发给我。"
      }
    ]
  },
  {
    "id": 217,
    "category": "workplace",
    "title": "Training a New Hire 培训新人",
    "scene": "资深员工培训新人",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Trainer",
      "Newcomer"
    ],
    "lines": [
      {
        "role": "Trainer",
        "en": "Welcome aboard. I will be training you this week.",
        "zh": "欢迎加入。这周由我来培训你。"
      },
      {
        "role": "Newcomer",
        "en": "Thank you. I am excited to learn.",
        "zh": "谢谢。我很期待学习。"
      },
      {
        "role": "Trainer",
        "en": "First, let me show you how to use our internal system.",
        "zh": "首先，我教你如何使用我们的内部系统。"
      },
      {
        "role": "Newcomer",
        "en": "Is it similar to the one I used at my old company?",
        "zh": "它和我以前公司用的系统类似吗？"
      },
      {
        "role": "Trainer",
        "en": "A little, but there are some differences. I will walk you through it.",
        "zh": "有一点，但有些地方不同。我会一步步教你。"
      },
      {
        "role": "Newcomer",
        "en": "That would be great. Should I take notes?",
        "zh": "太好了。我需要做笔记吗？"
      },
      {
        "role": "Trainer",
        "en": "Yes, please do. It will help you remember the steps.",
        "zh": "是的，请记下来。这能帮你记住操作步骤。"
      },
      {
        "role": "Newcomer",
        "en": "Got it. How long does the training usually take?",
        "zh": "明白了。培训通常需要多久？"
      },
      {
        "role": "Trainer",
        "en": "About three days. Then you will shadow me on real tasks.",
        "zh": "大约三天。然后你会跟着我实操。"
      }
    ]
  },
  {
    "id": 218,
    "category": "workplace",
    "title": "Performance Review 绩效评估",
    "scene": "经理和员工进行年度绩效评估",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Manager",
      "Employee"
    ],
    "lines": [
      {
        "role": "Manager",
        "en": "It is time for your annual review. Please have a seat.",
        "zh": "该做年度评估了。请坐。"
      },
      {
        "role": "Employee",
        "en": "Thank you. I have been looking forward to this.",
        "zh": "谢谢。我一直期待着这次评估。"
      },
      {
        "role": "Manager",
        "en": "Overall, you have had a strong year. Your sales numbers are up 15 percent.",
        "zh": "总体来说，你这一年表现很好。销售额增长了15%。"
      },
      {
        "role": "Employee",
        "en": "I am glad to hear that. I worked really hard on those accounts.",
        "zh": "很高兴听到这个。我在那些客户上花了很多心思。"
      },
      {
        "role": "Manager",
        "en": "However, I would like to see you improve your time management.",
        "zh": "不过，我希望你在时间管理方面有所提高。"
      },
      {
        "role": "Employee",
        "en": "I understand. Sometimes I spend too long on details.",
        "zh": "我明白。有时候我在细节上花太多时间。"
      },
      {
        "role": "Manager",
        "en": "Exactly. Let us set a goal to work on that next quarter.",
        "zh": "没错。我们定个目标，下个季度重点改进。"
      },
      {
        "role": "Employee",
        "en": "That sounds like a good plan. I will work on it.",
        "zh": "这计划很好。我会努力的。"
      },
      {
        "role": "Manager",
        "en": "Great. Keep up the good work.",
        "zh": "很好。继续保持。"
      }
    ]
  },
  {
    "id": 219,
    "category": "workplace",
    "title": "Team Dinner 团队聚餐",
    "scene": "同事们在餐厅聚餐",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Colleague A",
      "Colleague B"
    ],
    "lines": [
      {
        "role": "Colleague A",
        "en": "This place has great reviews. I am glad we picked it.",
        "zh": "这家餐厅评价很好。很高兴我们选了这里。"
      },
      {
        "role": "Colleague B",
        "en": "Me too. The atmosphere is really nice.",
        "zh": "我也是。氛围很不错。"
      },
      {
        "role": "Colleague A",
        "en": "What are you going to order?",
        "zh": "你打算点什么？"
      },
      {
        "role": "Colleague B",
        "en": "I think I will try the grilled salmon.",
        "zh": "我想试试烤三文鱼。"
      },
      {
        "role": "Colleague A",
        "en": "That sounds good. I might get the pasta.",
        "zh": "听起来不错。我可能点意面。"
      },
      {
        "role": "Colleague B",
        "en": "By the way, congratulations on finishing the project.",
        "zh": "对了，恭喜你完成了那个项目。"
      },
      {
        "role": "Colleague A",
        "en": "Thanks! It was a team effort, really.",
        "zh": "谢谢！这其实是团队的努力。"
      },
      {
        "role": "Colleague B",
        "en": "Still, you did an amazing job. Here is to us!",
        "zh": "不过，你做得太棒了。为我们干杯！"
      }
    ]
  },
  {
    "id": 220,
    "category": "workplace",
    "title": "Writing an Email 写英文邮件",
    "scene": "员工向导师请教如何写英文邮件",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Employee",
      "Mentor"
    ],
    "lines": [
      {
        "role": "Employee",
        "en": "Could you help me with this email to our client?",
        "zh": "您能帮我看看这封给客户的邮件吗？"
      },
      {
        "role": "Mentor",
        "en": "Sure. Let me take a look.",
        "zh": "当然，让我看看。"
      },
      {
        "role": "Employee",
        "en": "I want to ask for a meeting but I do not want to sound too direct.",
        "zh": "我想请求会面，但不想听起来太直接。"
      },
      {
        "role": "Mentor",
        "en": "Instead of \"I want,\" try \"I would like to schedule.\" It is more polite.",
        "zh": "不要用\"I want\"，试试\"I would like to schedule\"，这样更礼貌。"
      },
      {
        "role": "Employee",
        "en": "That makes sense. What about the closing?",
        "zh": "有道理。结尾怎么写呢？"
      },
      {
        "role": "Mentor",
        "en": "Use \"Best regards\" or \"Sincerely\" for formal emails.",
        "zh": "正式邮件用\"Best regards\"或\"Sincerely\"。"
      },
      {
        "role": "Employee",
        "en": "Got it. Should I mention the deadline in the first sentence?",
        "zh": "明白了。我需要在第一句提到截止日期吗？"
      },
      {
        "role": "Mentor",
        "en": "Yes, but keep it brief. People are busy.",
        "zh": "是的，但要简短。大家都很忙。"
      },
      {
        "role": "Employee",
        "en": "Thank you so much. This is really helpful.",
        "zh": "非常感谢。这很有帮助。"
      }
    ]
  },
  {
    "id": 221,
    "category": "workplace",
    "title": "Company Party 公司年会",
    "scene": "公司年会上HR和员工聊天",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "HR",
      "Employee"
    ],
    "lines": [
      {
        "role": "HR",
        "en": "Great turnout tonight. Are you having a good time?",
        "zh": "今晚人真多。你玩得开心吗？"
      },
      {
        "role": "Employee",
        "en": "Yes, the food is amazing and the music is great.",
        "zh": "开心，食物很棒，音乐也很赞。"
      },
      {
        "role": "HR",
        "en": "Did you see the CEO's speech?",
        "zh": "你看到CEO的演讲了吗？"
      },
      {
        "role": "Employee",
        "en": "I did. It was really inspiring.",
        "zh": "看了，非常鼓舞人心。"
      },
      {
        "role": "HR",
        "en": "We have some fun games later. Will you join?",
        "zh": "待会儿有一些有趣的游戏。你会参加吗？"
      },
      {
        "role": "Employee",
        "en": "Definitely. I heard there are prizes too.",
        "zh": "当然。听说还有奖品。"
      },
      {
        "role": "HR",
        "en": "Yes, gift cards and extra vacation days.",
        "zh": "是的，礼品卡和额外假期。"
      },
      {
        "role": "Employee",
        "en": "Wow, I am even more excited now.",
        "zh": "哇，我现在更兴奋了。"
      },
      {
        "role": "HR",
        "en": "Good luck then. Enjoy the rest of the night.",
        "zh": "那祝你好运。享受今晚剩下的时光吧。"
      }
    ]
  },
  {
    "id": 222,
    "category": "workplace",
    "title": "Handover Work 交接工作",
    "scene": "离职员工向接替者交接工作",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Leaving",
      "Replacement"
    ],
    "lines": [
      {
        "role": "Leaving",
        "en": "I have prepared everything for the handover. Let me show you.",
        "zh": "我已经准备好了交接材料。让我给你介绍一下。"
      },
      {
        "role": "Replacement",
        "en": "Thank you. I really appreciate you taking the time.",
        "zh": "谢谢。真的很感谢您花时间。"
      },
      {
        "role": "Leaving",
        "en": "No problem. Here is a list of all ongoing projects.",
        "zh": "不客气。这是所有进行中的项目清单。"
      },
      {
        "role": "Replacement",
        "en": "Got it. Which one is the most urgent?",
        "zh": "明白了。哪个最紧急？"
      },
      {
        "role": "Leaving",
        "en": "The client report due next Friday. I have done about half.",
        "zh": "下周五要交的客户报告。我已经完成了一半。"
      },
      {
        "role": "Replacement",
        "en": "I see. Who should I contact if I have questions?",
        "zh": "明白了。如果有问题我该联系谁？"
      },
      {
        "role": "Leaving",
        "en": "You can reach out to David on the third floor.",
        "zh": "你可以找三楼的David。"
      },
      {
        "role": "Replacement",
        "en": "Perfect. I will also check these shared folders.",
        "zh": "很好。我也会查看这些共享文件夹。"
      },
      {
        "role": "Leaving",
        "en": "Yes, all files are organized there. Good luck in your new role.",
        "zh": "是的，所有文件都整理在那里了。祝你在新岗位上好运。"
      }
    ]
  },
  {
    "id": 223,
    "category": "workplace",
    "title": "Finding an Internship 找实习",
    "scene": "学生在招聘会上和招聘人员交流",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Student",
      "Recruiter"
    ],
    "lines": [
      {
        "role": "Student",
        "en": "Hi, I am a junior at City University. Are you hiring interns?",
        "zh": "您好，我是城市大学的大三学生。你们在招实习生吗？"
      },
      {
        "role": "Recruiter",
        "en": "Yes, we have openings in marketing and design.",
        "zh": "是的，市场和设计部门都有空缺。"
      },
      {
        "role": "Student",
        "en": "I am majoring in marketing. What does the internship involve?",
        "zh": "我学的是市场专业。实习内容包括什么？"
      },
      {
        "role": "Recruiter",
        "en": "You will help with social media, campaigns, and market research.",
        "zh": "你会协助社交媒体、营销活动和市场调研。"
      },
      {
        "role": "Student",
        "en": "That sounds perfect. How long is the internship?",
        "zh": "听起来很合适。实习期多长？"
      },
      {
        "role": "Recruiter",
        "en": "It is a three-month program, starting in July.",
        "zh": "为期三个月，七月开始。"
      },
      {
        "role": "Student",
        "en": "Great, that fits my summer break. How do I apply?",
        "zh": "太好了，正好是我的暑假。怎么申请呢？"
      },
      {
        "role": "Recruiter",
        "en": "Just send your resume and portfolio to this email.",
        "zh": "把简历和作品集发到这个邮箱就行。"
      },
      {
        "role": "Student",
        "en": "Thank you. I will send it today.",
        "zh": "谢谢。我今天就会发过去。"
      }
    ]
  },
  {
    "id": 224,
    "category": "online",
    "title": "Online Shopping Return 网购退换货",
    "scene": "在电商APP上申请退货",
    "difficulty": "中等",
    "duration": "2分钟",
    "roles": [
      "Customer",
      "Online Service"
    ],
    "lines": [
      {
        "speaker": "Customer",
        "line": "Hi, I want to return this jacket. It is too small for me.",
        "trans": "你好，我想退这件夹克。它对我来说太小了。"
      },
      {
        "speaker": "Online Service",
        "line": "No problem. May I have your order number, please?",
        "trans": "没问题。请提供您的订单号，好吗？"
      },
      {
        "speaker": "Customer",
        "line": "Sure, it is 2024-AB-8876.",
        "trans": "好的，订单号是2024-AB-8876。"
      },
      {
        "speaker": "Online Service",
        "line": "Thank you. We can offer a free return within seven days. Would you like a refund or an exchange?",
        "trans": "谢谢。我们可以在七天内提供免费退货。您想要退款还是换货？"
      },
      {
        "speaker": "Customer",
        "line": "I would like a refund, please. I already bought another one.",
        "trans": "我想要退款。我已经买了另一件了。"
      },
      {
        "speaker": "Online Service",
        "line": "Alright. Please pack the item and our courier will pick it up tomorrow.",
        "trans": "好的。请把商品打包好，我们的快递员明天会上门取件。"
      },
      {
        "speaker": "Customer",
        "line": "Do I need to pay for the return shipping?",
        "trans": "我需要支付退货运费吗？"
      },
      {
        "speaker": "Online Service",
        "line": "No, it is free for quality issues or size problems. The refund will be back in three days.",
        "trans": "不需要，因质量问题或尺码问题退货是免费的。退款会在三天内到账。"
      },
      {
        "speaker": "Customer",
        "line": "Great, thank you so much for your help.",
        "trans": "太好了，非常感谢您的帮助。"
      },
      {
        "speaker": "Online Service",
        "line": "You are welcome. Have a nice day!",
        "trans": "不客气。祝您有愉快的一天！"
      }
    ]
  },
  {
    "id": 225,
    "category": "online",
    "title": "Food Delivery App 外卖APP点餐",
    "scene": "通过外卖平台点餐并与骑手沟通",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "User",
      "Rider"
    ],
    "lines": [
      {
        "speaker": "User",
        "line": "Hello, I just ordered food from your app. How long will it take?",
        "trans": "你好，我刚在你们APP上点了外卖。大概多久能送到？"
      },
      {
        "speaker": "Rider",
        "line": "Hi, I am your delivery driver. It should arrive in about twenty minutes.",
        "trans": "您好，我是您的骑手。大概二十分钟左右送到。"
      },
      {
        "speaker": "User",
        "line": "Please put it at the front desk. I am in a meeting right now.",
        "trans": "请放在前台就好。我现在正在开会。"
      },
      {
        "speaker": "Rider",
        "line": "Got it. By the way, the soup may be a little warm. Please be careful.",
        "trans": "好的。顺便说一下，汤可能有点烫，请小心。"
      },
      {
        "speaker": "User",
        "line": "Thanks for the reminder. I will ask my colleague to get it.",
        "trans": "谢谢提醒。我会让同事去取。"
      },
      {
        "speaker": "Rider",
        "line": "I have arrived. The front desk said they will take it upstairs.",
        "trans": "我到了。前台说他们会送上楼。"
      },
      {
        "speaker": "User",
        "line": "Perfect. I will check it soon. Did you bring chopsticks and napkins?",
        "trans": "太好了。我一会儿就去看。你带了筷子和纸巾吗？"
      },
      {
        "speaker": "Rider",
        "line": "Yes, they are inside the bag. Please leave a good review if you can.",
        "trans": "带了，都在袋子里。如果可以的话，请给个好评。"
      },
      {
        "speaker": "User",
        "line": "Of course. The food looks great. Thank you!",
        "trans": "一定。食物看起来不错。谢谢你！"
      }
    ]
  },
  {
    "id": 226,
    "category": "online",
    "title": "Live Shopping 直播带货",
    "scene": "直播间购物互动",
    "difficulty": "中等",
    "duration": "2分钟",
    "roles": [
      "Host",
      "Viewer"
    ],
    "lines": [
      {
        "speaker": "Host",
        "line": "Welcome back, everyone! Today we have a special deal on these wireless earbuds.",
        "trans": "欢迎大家回来！今天我们这款无线耳机有特价活动。"
      },
      {
        "speaker": "Viewer",
        "line": "How much are they? Can you test the sound quality?",
        "trans": "多少钱？能试一下音质吗？"
      },
      {
        "speaker": "Host",
        "line": "Only thirty-nine dollars today, down from seventy-nine! Listen to this sound test.",
        "trans": "今天只要39美元，原价79美元！来听听这个音质测试。"
      },
      {
        "speaker": "Viewer",
        "line": "Wow, that sounds pretty good. Do they come in black?",
        "trans": "哇，听起来不错。有黑色的吗？"
      },
      {
        "speaker": "Host",
        "line": "Yes, we have black, white, and blue. Type your color in the chat, and I will hold one for you.",
        "trans": "有的，有黑色、白色和蓝色。在评论区打出颜色，我帮您留一个。"
      },
      {
        "speaker": "Viewer",
        "line": "Black, please. I want two pairs. Is the shipping free?",
        "trans": "请给我黑色。我想要两副。包邮吗？"
      },
      {
        "speaker": "Host",
        "line": "Free shipping for two or more! Add to cart now and check out in ten minutes before the deal ends.",
        "trans": "两副以上包邮！现在就加入购物车，十分钟内付款，活动就结束了。"
      },
      {
        "speaker": "Viewer",
        "line": "Okay, I just placed the order. Thanks for the discount!",
        "trans": "好的，我刚下单了。谢谢优惠！"
      },
      {
        "speaker": "Host",
        "line": "Thank you for the order! I will send a small gift with your package. See you next time!",
        "trans": "感谢您的订单！我会随包裹送一个小礼物。下次再见！"
      }
    ]
  },
  {
    "id": 227,
    "category": "online",
    "title": "Online Class 网课学习",
    "scene": "学生与老师在线课堂互动",
    "difficulty": "中等",
    "duration": "2分钟",
    "roles": [
      "Student",
      "Teacher"
    ],
    "lines": [
      {
        "speaker": "Student",
        "line": "Good morning, Ms. Lee. I am having trouble with today's grammar lesson.",
        "trans": "早上好，李老师。今天的语法课我有点跟不上。"
      },
      {
        "speaker": "Teacher",
        "line": "Good morning, Tom. Which part is confusing you? The present perfect tense?",
        "trans": "早上好，Tom。哪部分让你困惑？是现在完成时吗？"
      },
      {
        "speaker": "Student",
        "line": "Yes, I do not know when to use \"have been\" and \"have gone\".",
        "trans": "是的，我不知道什么时候用\"have been\"，什么时候用\"have gone\"。"
      },
      {
        "speaker": "Teacher",
        "line": "Great question. \"Have been\" means you visited and came back. \"Have gone\" means you are still there.",
        "trans": "好问题。\"Have been\"表示你去过并已回来。\"Have gone\"表示你还在那里。"
      },
      {
        "speaker": "Student",
        "line": "Oh, I see. So if my dad is at the office, I say he has gone to work?",
        "trans": "哦，我明白了。那如果我爸爸在办公室，我说他has gone to work？"
      },
      {
        "speaker": "Teacher",
        "line": "Exactly! And if he came back, you say he has been to work today.",
        "trans": "完全正确！如果他回来了，你就说he has been to work today。"
      },
      {
        "speaker": "Student",
        "line": "That makes sense. Can you send me the practice worksheet?",
        "trans": "明白了。您能把练习作业发给我吗？"
      },
      {
        "speaker": "Teacher",
        "line": "Sure, I will upload it to the class folder after this session.",
        "trans": "当然，这节课结束后我会上传到班级文件夹。"
      },
      {
        "speaker": "Student",
        "line": "Thank you so much. I will review it tonight.",
        "trans": "非常感谢。我今晚就复习。"
      },
      {
        "speaker": "Teacher",
        "line": "You are doing great. Keep it up!",
        "trans": "你表现很棒。继续加油！"
      }
    ]
  },
  {
    "id": 228,
    "category": "online",
    "title": "Posting on Social Media 社交媒体发照片",
    "scene": "两个朋友讨论发社交媒体照片",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Friend A",
      "Friend B"
    ],
    "lines": [
      {
        "speaker": "Friend A",
        "line": "Hey, I just posted our trip photos on Instagram. Did you see them?",
        "trans": "嘿，我刚把我们的旅行照片发在Instagram上了。你看到了吗？"
      },
      {
        "speaker": "Friend B",
        "line": "Yes! That sunset photo is amazing. Which filter did you use?",
        "trans": "看到了！那张日落照片太美了。你用了什么滤镜？"
      },
      {
        "speaker": "Friend A",
        "line": "I used \"Warm Glow.\" It made the colors look really nice.",
        "trans": "我用的\"Warm Glow\"滤镜。让颜色看起来很好看。"
      },
      {
        "speaker": "Friend B",
        "line": "Can you tag me? I want to share it on my story too.",
        "trans": "你能标记我吗？我也想分享到我的快拍上。"
      },
      {
        "speaker": "Friend A",
        "line": "I already tagged you. Check your notifications.",
        "trans": "我已经标记你了。去看看你的通知。"
      },
      {
        "speaker": "Friend B",
        "line": "Oh, there it is. But wait, I look a little weird in the third photo. Can you crop it?",
        "trans": "哦，看到了。等等，第三张照片里我看起来有点奇怪。你能裁剪一下吗？"
      },
      {
        "speaker": "Friend A",
        "line": "No worries. I will delete that one and post a better version.",
        "trans": "没问题。我删掉那张，发一个更好的版本。"
      },
      {
        "speaker": "Friend B",
        "line": "Thanks. You always take the best pictures.",
        "trans": "谢谢。你总是拍出最好的照片。"
      },
      {
        "speaker": "Friend A",
        "line": "We make a great team. Next time, you take the photos and I will smile!",
        "trans": "我们配合得很好。下次你来拍照，我来笑！"
      }
    ]
  },
  {
    "id": 229,
    "category": "online",
    "title": "Video Call 视频通话",
    "scene": "儿子与妈妈视频通话",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Son",
      "Mom"
    ],
    "lines": [
      {
        "speaker": "Son",
        "line": "Hi Mom, can you hear me? The connection is a bit slow.",
        "trans": "妈，你能听到吗？网络有点慢。"
      },
      {
        "speaker": "Mom",
        "line": "Yes, I can see you! Are you eating well? You look a little thin.",
        "trans": "能听到，能看到你！吃得好吗？你看起来有点瘦。"
      },
      {
        "speaker": "Son",
        "line": "I am fine, Mom. I eat at the school cafeteria every day. The food is pretty good.",
        "trans": "我挺好的，妈。我每天都在学校食堂吃饭。饭菜还不错。"
      },
      {
        "speaker": "Mom",
        "line": "That is good. Did you wash the new sweater I sent you?",
        "trans": "那就好。我给你寄的新毛衣你洗了吗？"
      },
      {
        "speaker": "Son",
        "line": "Not yet. I will wash it this weekend. Thanks for sending it.",
        "trans": "还没。我这周末洗。谢谢你寄过来。"
      },
      {
        "speaker": "Mom",
        "line": "It is getting cold. Remember to wear it. And do not stay up too late.",
        "trans": "天冷了。记得穿上。还有不要睡太晚。"
      },
      {
        "speaker": "Son",
        "line": "I know, Mom. I am doing well in my classes too. Do not worry.",
        "trans": "我知道，妈。我功课也挺好的。别担心。"
      },
      {
        "speaker": "Mom",
        "line": "That is my boy. I will transfer some money to your account tomorrow.",
        "trans": "这才是我的好孩子。我明天往你账户转点钱。"
      },
      {
        "speaker": "Son",
        "line": "You do not have to, Mom. I have enough. But thank you.",
        "trans": "不用了，妈。我够花的。不过还是谢谢你。"
      },
      {
        "speaker": "Mom",
        "line": "Take care, son. Call me again next week.",
        "trans": "照顾好自己，儿子。下周再给我打视频。"
      }
    ]
  },
  {
    "id": 230,
    "category": "online",
    "title": "Signing Up 注册账号",
    "scene": "用户注册新网站账号",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "User",
      "System"
    ],
    "lines": [
      {
        "speaker": "User",
        "line": "I want to create an account. Where do I click?",
        "trans": "我想创建一个账号。应该点哪里？"
      },
      {
        "speaker": "System",
        "line": "Welcome. Please click \"Sign Up\" at the top right corner.",
        "trans": "欢迎。请点击右上角的\"注册\"。"
      },
      {
        "speaker": "User",
        "line": "Okay, I clicked it. Now it asks for my email and password.",
        "trans": "好的，我点了。现在让我输入邮箱和密码。"
      },
      {
        "speaker": "System",
        "line": "Please enter a valid email address. Your password must be at least eight characters with one number.",
        "trans": "请输入有效的邮箱地址。密码至少八位，并包含一个数字。"
      },
      {
        "speaker": "User",
        "line": "I entered my email. Is \"Sunshine123\" okay for the password?",
        "trans": "我输入了邮箱。密码用\"Sunshine123\"可以吗？"
      },
      {
        "speaker": "System",
        "line": "That password is acceptable. Please confirm it by typing it again.",
        "trans": "该密码可用。请再次输入以确认。"
      },
      {
        "speaker": "User",
        "line": "Done. Now it says I need to verify my email. I will check my inbox.",
        "trans": "好了。现在提示我需要验证邮箱。我去看看收件箱。"
      },
      {
        "speaker": "System",
        "line": "A verification code has been sent. Please enter the code within ten minutes.",
        "trans": "验证码已发送。请在十分钟内输入。"
      },
      {
        "speaker": "User",
        "line": "I got the code. It is 482916. I entered it.",
        "trans": "我收到验证码了。是482916。我输入了。"
      },
      {
        "speaker": "System",
        "line": "Verification successful. Your account is ready. Welcome aboard!",
        "trans": "验证成功。您的账号已创建。欢迎加入！"
      }
    ]
  },
  {
    "id": 231,
    "category": "online",
    "title": "Forgot Password 忘记密码",
    "scene": "用户忘记密码，寻求客服帮助",
    "difficulty": "中等",
    "duration": "2分钟",
    "roles": [
      "User",
      "Support"
    ],
    "lines": [
      {
        "speaker": "User",
        "line": "Hi, I forgot my password and I cannot log in. Can you help me?",
        "trans": "你好，我忘记密码了，登不上。你能帮我吗？"
      },
      {
        "speaker": "Support",
        "line": "Of course. Do you still have access to the email linked to your account?",
        "trans": "当然。您还能访问账号绑定的邮箱吗？"
      },
      {
        "speaker": "User",
        "line": "Yes, I do. I can open my email app.",
        "trans": "是的，可以。我能打开邮箱APP。"
      },
      {
        "speaker": "Support",
        "line": "Great. Please click \"Forgot Password\" on the login page and enter your email.",
        "trans": "很好。请在登录页面点击\"忘记密码\"，然后输入您的邮箱。"
      },
      {
        "speaker": "User",
        "line": "I did that. Now I am waiting for the reset link.",
        "trans": "我点了。现在我在等重置链接。"
      },
      {
        "speaker": "Support",
        "line": "Please check your inbox and spam folder. The email should arrive in two minutes.",
        "trans": "请查看收件箱和垃圾邮件文件夹。邮件应该在两分钟内到达。"
      },
      {
        "speaker": "User",
        "line": "I found it in the spam folder. I clicked the link. Now it asks for a new password.",
        "trans": "我在垃圾邮件里找到了。我点了链接。现在让我输入新密码。"
      },
      {
        "speaker": "Support",
        "line": "Perfect. Please create a strong password that you have not used before.",
        "trans": "很好。请设置一个您之前未使用过的强密码。"
      },
      {
        "speaker": "User",
        "line": "I set a new one. I just logged in successfully. Thank you!",
        "trans": "我设置好了。刚刚成功登录了。谢谢！"
      },
      {
        "speaker": "Support",
        "line": "You are welcome. For security, please enable two-factor authentication next time.",
        "trans": "不客气。为了安全，下次请开启双重验证。"
      }
    ]
  },
  {
    "id": 232,
    "category": "online",
    "title": "Online Customer Service 在线客服",
    "scene": "顾客咨询在线客服关于订单问题",
    "difficulty": "中等",
    "duration": "2分钟",
    "roles": [
      "Customer",
      "Agent"
    ],
    "lines": [
      {
        "speaker": "Customer",
        "line": "Hi, my order was supposed to arrive yesterday, but I have not received it yet.",
        "trans": "你好，我的订单昨天就该到了，但我还没收到。"
      },
      {
        "speaker": "Agent",
        "line": "I am sorry for the delay. May I have your order number to check the status?",
        "trans": "很抱歉延误了。请提供订单号，我帮您查一下状态。"
      },
      {
        "speaker": "Customer",
        "line": "It is 559320. I also got a message saying it was shipped, but no tracking updates.",
        "trans": "订单号是559320。我还收到消息说已发货，但没有物流更新。"
      },
      {
        "speaker": "Agent",
        "line": "Let me check. It seems the package is stuck at the local sorting center due to bad weather.",
        "trans": "让我查一下。包裹似乎因为恶劣天气滞留在当地分拣中心了。"
      },
      {
        "speaker": "Customer",
        "line": "When do you think it will be delivered? I need it for a trip this weekend.",
        "trans": "你觉得什么时候能送到？我这周末旅行要用。"
      },
      {
        "speaker": "Agent",
        "line": "It should be delivered by Friday at the latest. I will also add a priority note to your order.",
        "trans": "最晚周五应该能送到。我还会给您的订单加急处理。"
      },
      {
        "speaker": "Customer",
        "line": "That would be helpful. If it is late, can I get a refund?",
        "trans": "那太好了。如果还是晚了，我能退款吗？"
      },
      {
        "speaker": "Agent",
        "line": "If it arrives after Friday, we will refund the shipping fee and offer a ten percent discount on your next order.",
        "trans": "如果周五之后送达，我们会退还运费，并给您的下一单打九折。"
      },
      {
        "speaker": "Customer",
        "line": "That sounds fair. I will wait until Friday then. Thank you.",
        "trans": "听起来合理。那我就等到周五。谢谢。"
      }
    ]
  },
  {
    "id": 233,
    "category": "online",
    "title": "Watching Short Videos 看短视频",
    "scene": "两个朋友一起看短视频并讨论",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Friend A",
      "Friend B"
    ],
    "lines": [
      {
        "speaker": "Friend A",
        "line": "Have you seen this funny cat video? It has ten million views!",
        "trans": "你看过这个搞笑的猫咪视频吗？有一千万播放量！"
      },
      {
        "speaker": "Friend B",
        "line": "Oh my gosh, the cat is dancing to the music. That is hilarious.",
        "trans": "天哪，这只猫跟着音乐跳舞。太好笑了。"
      },
      {
        "speaker": "Friend A",
        "line": "I can watch short videos for hours. This app knows exactly what I like.",
        "trans": "我可以看短视频看好几个小时。这个APP太懂我喜欢什么了。"
      },
      {
        "speaker": "Friend B",
        "line": "The algorithm is scary. One minute I am watching cooking, then it shows me travel videos.",
        "trans": "算法太可怕了。前一分钟我还在看烹饪，然后它就给我推旅行视频。"
      },
      {
        "speaker": "Friend A",
        "line": "I know, right? I just spent fifty minutes on this app and did not even notice.",
        "trans": "是吧？我刚在这个APP上花了五十分钟，都没意识到。"
      },
      {
        "speaker": "Friend B",
        "line": "We should set a timer. Too much screen time is bad for our eyes.",
        "trans": "我们应该设个定时。看太久屏幕对眼睛不好。"
      },
      {
        "speaker": "Friend A",
        "line": "Good idea. Let me watch this last one, then we will stop.",
        "trans": "好主意。让我再看最后一个，然后我们就停下来。"
      },
      {
        "speaker": "Friend B",
        "line": "That is what you always say. Two hours later, you are still scrolling.",
        "trans": "你总是这么说。两小时后，你还在刷。"
      },
      {
        "speaker": "Friend A",
        "line": "Okay, okay, I will close the app now. Let us go for a walk instead.",
        "trans": "好了好了，我现在就关掉APP。我们去散步吧。"
      }
    ]
  },
  {
    "id": 234,
    "category": "online",
    "title": "Gaming with Friends 游戏开黑",
    "scene": "两个朋友组队打游戏语音交流",
    "difficulty": "中等",
    "duration": "2分钟",
    "roles": [
      "Player A",
      "Player B"
    ],
    "lines": [
      {
        "speaker": "Player A",
        "line": "Can you hear me? I am going to rush the left side. Cover me.",
        "trans": "能听到吗？我要从左边冲过去。掩护我。"
      },
      {
        "speaker": "Player B",
        "line": "Loud and clear. I will snipe from the rooftop. Watch out for the enemy behind the truck.",
        "trans": "很清楚。我会在屋顶狙击。小心卡车后面的敌人。"
      },
      {
        "speaker": "Player A",
        "line": "I see him. I will throw a smoke grenade. Get ready to shoot when he runs out.",
        "trans": "我看到他了。我要扔烟雾弹。他跑出来时准备射击。"
      },
      {
        "speaker": "Player B",
        "line": "Got it. Three, two, one... now! I hit him! Good teamwork.",
        "trans": "收到。三、二、一……现在！我打中了！配合真好。"
      },
      {
        "speaker": "Player A",
        "line": "Nice shot! Let us grab the supply box and heal up. My health is low.",
        "trans": "打得好！我们去拿补给箱，回复一下。我血量很低了。"
      },
      {
        "speaker": "Player B",
        "line": "There is a first-aid kit here. I will share it with you. Also pick up some ammo.",
        "trans": "这里有急救包。我分给你。再捡点弹药。"
      },
      {
        "speaker": "Player A",
        "line": "Thanks. The final circle is closing. We should move to the safe zone now.",
        "trans": "谢谢。决赛圈在收缩了。我们该进安全区了。"
      },
      {
        "speaker": "Player B",
        "line": "I see a car. Let us drive there. We have a good chance to win this match.",
        "trans": "我看到一辆车。我们开车过去。这局我们很有机会赢。"
      },
      {
        "speaker": "Player A",
        "line": "Let us do this. Victory belongs to us!",
        "trans": "冲吧。胜利属于我们！"
      }
    ]
  },
  {
    "id": 235,
    "category": "online",
    "title": "Price Comparison 网购比价",
    "scene": "朋友之间讨论网购比价经验",
    "difficulty": "中等",
    "duration": "2分钟",
    "roles": [
      "Shopper",
      "Friend"
    ],
    "lines": [
      {
        "speaker": "Shopper",
        "line": "I want to buy this laptop, but the price is different on every website.",
        "trans": "我想买这台笔记本电脑，但每个网站价格都不一样。"
      },
      {
        "speaker": "Friend",
        "line": "Have you tried a price comparison app? It shows the best deal across stores.",
        "trans": "你用过比价APP吗？它能显示各个店铺的最优惠价格。"
      },
      {
        "speaker": "Shopper",
        "line": "Good idea. I checked three sites so far. Site A is cheapest, but the reviews are bad.",
        "trans": "好主意。到目前为止我查了三个网站。A网站最便宜，但评价很差。"
      },
      {
        "speaker": "Friend",
        "line": "Do not just look at the price. Check the seller rating and return policy too.",
        "trans": "不要只看价格。也看看卖家评分和退货政策。"
      },
      {
        "speaker": "Shopper",
        "line": "You are right. Site B costs twenty dollars more, but the seller has five stars and free returns.",
        "trans": "你说得对。B网站贵二十美元，但卖家是五星，而且免费退货。"
      },
      {
        "speaker": "Friend",
        "line": "Also check if there is a coupon code. Sometimes you can save another ten percent.",
        "trans": "再看看有没有优惠券。有时候还能再省百分之十。"
      },
      {
        "speaker": "Shopper",
        "line": "I found a code \"SAVE10\" on a discount website. Let me try it at checkout.",
        "trans": "我在一个折扣网站上找到了代码\"SAVE10\"。我结账时试试。"
      },
      {
        "speaker": "Friend",
        "line": "Smart move. And use a cashback site if you can. You will get some money back later.",
        "trans": "聪明。如果可以的话，再用返利网站。之后还能拿回一些钱。"
      },
      {
        "speaker": "Shopper",
        "line": "The code worked! I saved thirty dollars in total. Thanks for the tips.",
        "trans": "优惠券有效！我一共省了三十美元。谢谢你的建议。"
      }
    ]
  },
  {
    "id": 236,
    "category": "online",
    "title": "Downloading an App 下载APP",
    "scene": "朋友推荐并指导下载新APP",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "User",
      "Friend"
    ],
    "lines": [
      {
        "speaker": "User",
        "line": "I heard about a new app for learning languages. What is it called again?",
        "trans": "我听说有一个新的语言学习APP。它叫什么来着？"
      },
      {
        "speaker": "Friend",
        "line": "It is called \"LingoDaily.\" You can find it in the app store.",
        "trans": "叫\"LingoDaily\"。你可以在应用商店里找到。"
      },
      {
        "speaker": "User",
        "line": "I searched for it, but there are many similar apps. Which icon is the right one?",
        "trans": "我搜索了，但很多类似的APP。哪个图标才是对的？"
      },
      {
        "speaker": "Friend",
        "line": "The real one has a green owl on a yellow background. Make sure it has over ten million downloads.",
        "trans": "正版是一个黄色背景上有一只绿色猫头鹰。确保它有一千万以上的下载量。"
      },
      {
        "speaker": "User",
        "line": "Found it! I will tap \"Install.\" How much storage does it need?",
        "trans": "找到了！我点\"安装\"。它需要多少存储空间？"
      },
      {
        "speaker": "Friend",
        "line": "About two hundred megabytes. It should finish in a minute if your Wi-Fi is good.",
        "trans": "大约两百兆。如果Wi-Fi好，一分钟就能下完。"
      },
      {
        "speaker": "User",
        "line": "It is downloading now. Do I need to create an account or can I use it as a guest?",
        "trans": "正在下载。我需要注册账号，还是可以直接游客使用？"
      },
      {
        "speaker": "Friend",
        "line": "You can try it as a guest, but creating an account saves your progress.",
        "trans": "你可以先游客试用，但注册账号能保存学习进度。"
      },
      {
        "speaker": "User",
        "line": "Okay, I will sign up with my email. This looks fun. Thanks for recommending it!",
        "trans": "好的，我用邮箱注册。看起来很有趣。谢谢推荐！"
      }
    ]
  },
  {
    "id": 237,
    "category": "online",
    "title": "Slow Internet 网络卡顿求助",
    "scene": "用户向网络技术人员求助",
    "difficulty": "中等",
    "duration": "2分钟",
    "roles": [
      "User",
      "Technician"
    ],
    "lines": [
      {
        "speaker": "User",
        "line": "Hi, my internet is extremely slow. I cannot even watch a video without buffering.",
        "trans": "你好，我的网络特别慢。连看视频都一直缓冲。"
      },
      {
        "speaker": "Technician",
        "line": "I understand. Are you using Wi-Fi or a wired connection right now?",
        "trans": "我了解。您现在用的是Wi-Fi还是有线连接？"
      },
      {
        "speaker": "User",
        "line": "I am on Wi-Fi. My phone and laptop are both very slow.",
        "trans": "我用的是Wi-Fi。手机和笔记本电脑都很慢。"
      },
      {
        "speaker": "Technician",
        "line": "Please try restarting your router first. Unplug it for thirty seconds, then plug it back in.",
        "trans": "请先重启路由器。拔掉电源三十秒，然后再插上。"
      },
      {
        "speaker": "User",
        "line": "I did that. It is still slow. My video call keeps dropping.",
        "trans": "我试过了。还是很慢。我的视频通话一直掉线。"
      },
      {
        "speaker": "Technician",
        "line": "Let me run a remote test. Your download speed is only five megabits. It should be one hundred.",
        "trans": "让我远程测试一下。您的下载速度只有5兆。应该是100兆。"
      },
      {
        "speaker": "User",
        "line": "That explains it. Is there a problem with the line or the router?",
        "trans": "这就说得通了。是线路问题还是路由器问题？"
      },
      {
        "speaker": "Technician",
        "line": "It seems like a line issue in your area. A technician will visit tomorrow morning to fix it.",
        "trans": "看起来是您所在区域的线路问题。明天上午会有技术人员上门维修。"
      },
      {
        "speaker": "User",
        "line": "Will I be charged for the repair? I pay my bill on time every month.",
        "trans": "维修要收费吗？我每个月都按时缴费。"
      },
      {
        "speaker": "Technician",
        "line": "No, this is a network issue on our side. The repair is completely free.",
        "trans": "不，这是我们这边的网络故障。维修完全免费。"
      }
    ]
  },
  {
    "id": 238,
    "category": "online",
    "title": "Booking Movie Tickets 订电影票",
    "scene": "用户通过APP预订电影票",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "User",
      "App"
    ],
    "lines": [
      {
        "speaker": "User",
        "line": "I want to book two tickets for the seven-thirty show of Action Hero tonight.",
        "trans": "我想订今晚七点半《Action Hero》的两张票。"
      },
      {
        "speaker": "App",
        "line": "Searching for showtimes. The seven-thirty show is available at City Center Cinema.",
        "trans": "正在搜索场次。七点半的场次在市中心影院还有票。"
      },
      {
        "speaker": "User",
        "line": "Are there any good seats left? I prefer the middle of the theater.",
        "trans": "还有好座位吗？我喜欢坐影厅中间。"
      },
      {
        "speaker": "App",
        "line": "Rows eight to ten have available seats. Row nine, seats five and six are in the center.",
        "trans": "第八到十排还有座位。第九排五号、六号在正中间。"
      },
      {
        "speaker": "User",
        "line": "Those sound perfect. How much is the total for two tickets?",
        "trans": "听起来很完美。两张票一共多少钱？"
      },
      {
        "speaker": "App",
        "line": "Each ticket is fifteen dollars. The total is thirty dollars. Would you like to add popcorn and drinks?",
        "trans": "每张票15美元。一共30美元。您要加爆米花和饮料吗？"
      },
      {
        "speaker": "User",
        "line": "No, just the tickets. I will pay with my saved credit card.",
        "trans": "不用，只要票。我用已保存的信用卡付款。"
      },
      {
        "speaker": "App",
        "line": "Payment successful. Your QR code tickets are ready. Please show them at the entrance.",
        "trans": "付款成功。您的二维码电影票已生成。请在入口处出示。"
      },
      {
        "speaker": "User",
        "line": "Can I get a refund if I cannot make it tonight?",
        "trans": "如果我今晚去不了，能退票吗？"
      },
      {
        "speaker": "App",
        "line": "Yes, you can get a full refund if you cancel at least one hour before the show starts.",
        "trans": "可以，如果您在电影开场前至少一小时取消，可获得全额退款。"
      }
    ]
  },
  {
    "id": 239,
    "category": "online",
    "title": "Online Doctor 在线医疗咨询",
    "scene": "患者通过在线平台咨询医生",
    "difficulty": "中等",
    "duration": "2分钟",
    "roles": [
      "Patient",
      "Doctor"
    ],
    "lines": [
      {
        "speaker": "Patient",
        "line": "Hello, Doctor. I have had a headache and a slight fever for two days. Should I be worried?",
        "trans": "您好，医生。我头疼和轻微发烧已经两天了。我应该担心吗？"
      },
      {
        "speaker": "Doctor",
        "line": "Hello. What is your temperature? And do you have any other symptoms like cough or sore throat?",
        "trans": "您好。您的体温是多少？还有其他症状吗，比如咳嗽或喉咙痛？"
      },
      {
        "speaker": "Patient",
        "line": "It is about thirty-eight degrees. I have a runny nose, but no cough.",
        "trans": "大约38度。我有点流鼻涕，但没有咳嗽。"
      },
      {
        "speaker": "Doctor",
        "line": "It sounds like a common cold or mild flu. Rest and drink plenty of water. Are you allergic to any medicine?",
        "trans": "听起来像是普通感冒或轻度流感。多休息，多喝水。您对什么药物过敏吗？"
      },
      {
        "speaker": "Patient",
        "line": "No, I am not allergic to anything. Can I take something for the fever?",
        "trans": "不，我什么都不过敏。我能吃点退烧药吗？"
      },
      {
        "speaker": "Doctor",
        "line": "You can take acetaminophen every six hours if needed. Do not exceed the recommended dose.",
        "trans": "如果需要，您可以每六小时服用一次对乙酰氨基酚。不要超过推荐剂量。"
      },
      {
        "speaker": "Patient",
        "line": "Should I come to the hospital if the fever does not go down?",
        "trans": "如果烧不退，我应该来医院吗？"
      },
      {
        "speaker": "Doctor",
        "line": "If the fever lasts more than three days or goes above thirty-nine degrees, please visit a clinic for a check-up.",
        "trans": "如果发烧持续超过三天或超过39度，请来诊所检查。"
      },
      {
        "speaker": "Patient",
        "line": "Understood. I will rest and monitor my temperature. Thank you, Doctor.",
        "trans": "明白了。我会休息并监测体温。谢谢您，医生。"
      },
      {
        "speaker": "Doctor",
        "line": "You are welcome. Take care, and feel free to contact us again if you need more help.",
        "trans": "不客气。保重，如果需要更多帮助，请随时联系我们。"
      }
    ]
  },
  {
    "id": 240,
    "category": "online",
    "title": "Buying Secondhand Online 网购二手",
    "scene": "二手平台上买卖双方沟通",
    "difficulty": "中等",
    "duration": "2分钟",
    "roles": [
      "Buyer",
      "Seller"
    ],
    "lines": [
      {
        "speaker": "Buyer",
        "line": "Hi, I am interested in your desk chair. Is it still available?",
        "trans": "你好，我对你的办公椅感兴趣。还在吗？"
      },
      {
        "speaker": "Seller",
        "line": "Yes, it is available. I bought it last year, but I am moving abroad so I need to sell it.",
        "trans": "还在。我去年买的，但我要出国了，所以得卖掉。"
      },
      {
        "speaker": "Buyer",
        "line": "Can you send me more photos? I want to see if there are any scratches or damage.",
        "trans": "能多发几张照片吗？我想看看有没有划痕或损坏。"
      },
      {
        "speaker": "Seller",
        "line": "Sure, I will upload them in the chat. There is a small scratch on the armrest, but nothing serious.",
        "trans": "当然，我发到聊天里。扶手上有个小划痕，但不严重。"
      },
      {
        "speaker": "Buyer",
        "line": "I saw the photos. The price is eighty dollars. Can you go down to sixty?",
        "trans": "我看到照片了。标价80美元。能降到60吗？"
      },
      {
        "speaker": "Seller",
        "line": "The lowest I can do is seventy. It is almost new and the original price was two hundred.",
        "trans": "最低70。它几乎全新，原价是200美元。"
      },
      {
        "speaker": "Buyer",
        "line": "Seventy works. Can you deliver it to my apartment? I live ten minutes away.",
        "trans": "70可以。你能送到我公寓吗？我住在十分钟路程外。"
      },
      {
        "speaker": "Seller",
        "line": "I can drop it off this Saturday morning. Cash or mobile payment is fine.",
        "trans": "我周六上午可以送过去。现金或手机支付都可以。"
      },
      {
        "speaker": "Buyer",
        "line": "Mobile payment is better. I will send you the address. See you on Saturday!",
        "trans": "手机支付更好。我把地址发给你。周六见！"
      },
      {
        "speaker": "Seller",
        "line": "See you then. I will clean it before I bring it over.",
        "trans": "到时候见。我会在送过去之前把它擦干净。"
      }
    ]
  },
  {
    "id": 241,
    "category": "online",
    "title": "Tipping a Streamer 直播打赏",
    "scene": "朋友讨论是否给主播打赏",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Viewer",
      "Friend"
    ],
    "lines": [
      {
        "speaker": "Viewer",
        "line": "I have been watching this streamer every night. She is so funny and talented.",
        "trans": "我每晚都在看这个主播。她又有趣又有才华。"
      },
      {
        "speaker": "Friend",
        "line": "I know her. She plays games and sings too. Have you ever sent her a gift?",
        "trans": "我知道她。她玩游戏还会唱歌。你给过她礼物吗？"
      },
      {
        "speaker": "Viewer",
        "line": "I sent a small gift once. It cost five dollars. She read my name out loud and said thank you.",
        "trans": "我送过一次小礼物。花了五美元。她大声念了我的名字，还说了谢谢。"
      },
      {
        "speaker": "Friend",
        "line": "That is nice. But I think tipping can be addictive. Some people spend too much money on it.",
        "trans": "挺好的。但我觉得打赏容易上瘾。有些人在上面花太多钱。"
      },
      {
        "speaker": "Viewer",
        "line": "You are right. I set a monthly budget of twenty dollars for gifts. I never go over it.",
        "trans": "你说得对。我设了每月20美元的礼物预算。从不超过。"
      },
      {
        "speaker": "Friend",
        "line": "That is a smart way to enjoy it. Does she get most of the money or does the platform take a lot?",
        "trans": "这是享受它的聪明方式。她能拿到大部分钱，还是平台抽成很多？"
      },
      {
        "speaker": "Viewer",
        "line": "The platform takes half, so she gets about fifty percent. I think it is fair.",
        "trans": "平台拿一半，所以她能拿到大约50%。我觉得还算合理。"
      },
      {
        "speaker": "Friend",
        "line": "I prefer to support creators by buying their merchandise instead. It feels more real.",
        "trans": "我更喜欢通过买创作者的周边来支持他们。感觉更实在。"
      },
      {
        "speaker": "Viewer",
        "line": "That is another good way. I might buy her T-shirt next month. It has her cute logo on it.",
        "trans": "这也是个好方式。我下个月可能买她的T恤。上面有她可爱的标志。"
      }
    ]
  },
  {
    "id": 242,
    "category": "online",
    "title": "Study App Check-in 学习打卡",
    "scene": "学生向朋友展示学习打卡APP",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Student",
      "Friend"
    ],
    "lines": [
      {
        "speaker": "Student",
        "line": "Look at my study app. I have checked in for thirty days in a row!",
        "trans": "看我的学习APP。我已经连续打卡三十天了！"
      },
      {
        "speaker": "Friend",
        "line": "That is impressive! What happens if you miss a day? Do you lose your streak?",
        "trans": "太厉害了！如果你漏了一天会怎么样？连胜纪录会断吗？"
      },
      {
        "speaker": "Student",
        "line": "Yes, the streak resets to zero. But I can use a \"freeze card\" to save it if I have one.",
        "trans": "是的，连胜会归零。但如果我有\"冻结卡\"，可以用它来保住纪录。"
      },
      {
        "speaker": "Friend",
        "line": "How do you earn those cards? I tried this app but I always forget to check in.",
        "trans": "你怎么获得那些卡片？我试过这个APP，但我总是忘记打卡。"
      },
      {
        "speaker": "Student",
        "line": "You get a freeze card every seven days. And if you study with friends, you remind each other.",
        "trans": "每七天你能获得一张冻结卡。而且如果你和朋友一起学习，可以互相提醒。"
      },
      {
        "speaker": "Friend",
        "line": "That sounds fun. Let us start a study group. We can share our daily progress.",
        "trans": "听起来很有趣。我们组个学习小组吧。可以每天分享学习进度。"
      },
      {
        "speaker": "Student",
        "line": "Great idea! I learned fifty new words this week. What about you?",
        "trans": "好主意！我这周学了五十个新单词。你呢？"
      },
      {
        "speaker": "Friend",
        "line": "I only read two chapters of my book. I need to step up my game.",
        "trans": "我只读了两章书。我得加把劲了。"
      },
      {
        "speaker": "Student",
        "line": "We can set a daily goal together. Let us aim for thirty minutes of reading every day.",
        "trans": "我们可以一起设定每日目标。目标定为每天阅读三十分钟吧。"
      },
      {
        "speaker": "Friend",
        "line": "Deal! Let me download the app and join your group right now.",
        "trans": "一言为定！我这就下载APP，加入你的小组。"
      }
    ]
  },
  {
    "id": 243,
    "category": "online",
    "title": "Avoiding Online Scams 网络防骗",
    "scene": "父母提醒青少年注意网络安全",
    "difficulty": "中等",
    "duration": "2分钟",
    "roles": [
      "Parent",
      "Teen"
    ],
    "lines": [
      {
        "speaker": "Parent",
        "line": "Honey, I need to talk to you about something important. Be careful when you are online.",
        "trans": "宝贝，我要跟你谈件重要的事。上网的时候要小心。"
      },
      {
        "speaker": "Teen",
        "line": "What do you mean, Mom? I do not talk to strangers or anything.",
        "trans": "什么意思，妈？我不会和陌生人聊天什么的。"
      },
      {
        "speaker": "Parent",
        "line": "That is good. But scams can look real. If someone sends you a link saying you won a prize, do not click it.",
        "trans": "很好。但诈骗看起来可以非常真实。如果有人发链接说你中奖了，不要点。"
      },
      {
        "speaker": "Teen",
        "line": "I have seen those before. They ask for my password or bank info. I never give those out.",
        "trans": "我之前见过那些。它们要我输入密码或银行信息。我从不给出去。"
      },
      {
        "speaker": "Parent",
        "line": "I am proud of you. Also, if someone online asks to meet in person, tell me right away.",
        "trans": "我为你骄傲。另外，如果网上有人要见面，马上告诉我。"
      },
      {
        "speaker": "Teen",
        "line": "Of course, I would never do that. But what about buying stuff online? Is that safe?",
        "trans": "当然，我绝不会那样做。那网购呢？安全吗？"
      },
      {
        "speaker": "Parent",
        "line": "Only buy from trusted websites. Look for the lock icon next to the website address.",
        "trans": "只在可信的网站购买。查看网址旁边有没有锁形图标。"
      },
      {
        "speaker": "Teen",
        "line": "I know that one. It means the website is secure. I learned it in school.",
        "trans": "我知道那个。意思是网站是安全的。我在学校学过。"
      },
      {
        "speaker": "Parent",
        "line": "Perfect. If something feels strange, stop and ask. It is better to be safe than sorry.",
        "trans": "太好了。如果有什么感觉不对劲，停下来问问。安全第一。"
      },
      {
        "speaker": "Teen",
        "line": "I will, Mom. Thanks for looking out for me. I will be careful.",
        "trans": "我会的，妈。谢谢你的关心。我会小心的。"
      }
    ]
  },
  {
    "id": 244,
    "category": "adultlife",
    "title": "Renting an Apartment 租房看房",
    "scene": "在房产中介看房",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Tenant",
      "Agent"
    ],
    "lines": [
      {
        "speaker": "Tenant",
        "content": "Hi, I saw your listing online. Is this apartment still available?",
        "cn": "你好，我在网上看到你们的房源。这间公寓还出租吗？"
      },
      {
        "speaker": "Agent",
        "content": "Yes, it is. It has one bedroom, one living room, and a nice kitchen. Would you like to take a look?",
        "cn": "是的，还在。它有一间卧室、一间客厅和一个不错的厨房。你想看看吗？"
      },
      {
        "speaker": "Tenant",
        "content": "Sure. How much is the rent per month?",
        "cn": "好的。月租金是多少？"
      },
      {
        "speaker": "Agent",
        "content": "The rent is eight hundred and fifty dollars a month, including water and gas. But electricity is not included.",
        "cn": "月租850美元，包含水费和燃气费。但不包含电费。"
      },
      {
        "speaker": "Tenant",
        "content": "That sounds reasonable. Can I see the bathroom?",
        "cn": "听起来合理。我可以看看浴室吗？"
      },
      {
        "speaker": "Agent",
        "content": "Of course. It is right here. The shower works very well, and there is a washing machine in the corner.",
        "cn": "当然可以。就在这儿。淋浴很好用，角落里还有一台洗衣机。"
      },
      {
        "speaker": "Tenant",
        "content": "I like it. Is the neighborhood safe and quiet at night?",
        "cn": "我喜欢。这个社区晚上安全安静吗？"
      },
      {
        "speaker": "Agent",
        "content": "Yes, it is very safe. There is a park nearby and a supermarket just two blocks away.",
        "cn": "是的，非常安全。附近有个公园，超市离这儿只有两个街区。"
      },
      {
        "speaker": "Tenant",
        "content": "Great. When can I move in?",
        "cn": "太好了。我什么时候可以搬进来？"
      },
      {
        "speaker": "Agent",
        "content": "You can move in anytime after the first of next month. Let me know if you want to sign the lease today.",
        "cn": "下个月一号之后随时都可以。如果你今天想签租约，请告诉我。"
      }
    ]
  },
  {
    "id": 245,
    "category": "adultlife",
    "title": "Talking to the Landlord 和房东谈租金",
    "scene": "在房东家里谈租金",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Tenant",
      "Landlord"
    ],
    "lines": [
      {
        "speaker": "Tenant",
        "content": "Mr. Smith, I really like the apartment, but the rent is a bit high for me. Could you lower it a little?",
        "cn": "史密斯先生，我真的很喜欢这间公寓，但租金对我来说有点高。你能稍微降低一点吗？"
      },
      {
        "speaker": "Landlord",
        "content": "I understand, but the price is already fair for this area. The apartment is newly renovated.",
        "cn": "我理解，但这个价格在这个区域已经很公道了。公寓是刚装修过的。"
      },
      {
        "speaker": "Tenant",
        "content": "I know, but I am a long-term tenant. If I sign a one-year lease, would you consider a discount?",
        "cn": "我知道，但我是长期租户。如果我签一年租约，你能考虑给点优惠吗？"
      },
      {
        "speaker": "Landlord",
        "content": "That is a good point. How about I reduce the rent by thirty dollars per month if you pay on time every month?",
        "cn": "说得有道理。如果你每月按时交租，我每月减30美元怎么样？"
      },
      {
        "speaker": "Tenant",
        "content": "Thank you. Could you also include the internet fee in the rent? It would make things easier for me.",
        "cn": "谢谢。那能把网费也包含在租金里吗？这样对我来说更方便。"
      },
      {
        "speaker": "Landlord",
        "content": "I can include the internet, but the rent will only drop by fifteen dollars instead of thirty. Is that okay?",
        "cn": "我可以包含网费，但租金只能减15美元而不是30美元。可以吗？"
      },
      {
        "speaker": "Tenant",
        "content": "Deal. Can I pay the deposit by credit card?",
        "cn": "成交。我可以用信用卡付押金吗？"
      },
      {
        "speaker": "Landlord",
        "content": "Yes, that is fine. I will prepare the contract, and you can sign it tomorrow.",
        "cn": "可以。我会准备合同，你明天来签字。"
      },
      {
        "speaker": "Tenant",
        "content": "Perfect. Thank you for being so understanding.",
        "cn": "太好了。谢谢你的理解。"
      },
      {
        "speaker": "Landlord",
        "content": "You are welcome. I hope you enjoy living here.",
        "cn": "不客气。希望你住得愉快。"
      }
    ]
  },
  {
    "id": 246,
    "category": "adultlife",
    "title": "Buying a House 买房咨询",
    "scene": "在房产公司咨询买房",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Buyer",
      "Agent"
    ],
    "lines": [
      {
        "speaker": "Buyer",
        "content": "I am looking for a house with three bedrooms and a garden. Do you have anything in this area?",
        "cn": "我想找一套有三间卧室和花园的房子。你们这个区域有合适的吗？"
      },
      {
        "speaker": "Agent",
        "content": "Yes, we have a lovely house in a quiet neighborhood. It has three bedrooms, two bathrooms, and a small backyard.",
        "cn": "有的，我们在一个安静的社区有一套不错的房子。三间卧室、两间浴室，还有一个小后院。"
      },
      {
        "speaker": "Buyer",
        "content": "How old is the house? I do not want to deal with too many repairs.",
        "cn": "这房子多少年房龄了？我不想太多维修问题。"
      },
      {
        "speaker": "Agent",
        "content": "It was built ten years ago, but the previous owner renovated it two years ago. Everything is in good condition.",
        "cn": "建于十年前，但前业主两年前重新装修过。一切状况良好。"
      },
      {
        "speaker": "Buyer",
        "content": "What is the asking price?",
        "cn": "要价是多少？"
      },
      {
        "speaker": "Agent",
        "content": "The owner is asking three hundred and fifty thousand dollars. It is negotiable.",
        "cn": "业主要价35万美元。价格可以商量。"
      },
      {
        "speaker": "Buyer",
        "content": "Can I arrange a home inspection before making an offer?",
        "cn": "我可以在出价前安排一次房屋检查吗？"
      },
      {
        "speaker": "Agent",
        "content": "Absolutely. I can schedule it for next Monday if that works for you.",
        "cn": "当然。如果方便的话，我可以安排下周一。"
      },
      {
        "speaker": "Buyer",
        "content": "Great. Also, is the school district good here? I have two kids.",
        "cn": "很好。另外，这里的学区好吗？我有两个孩子。"
      },
      {
        "speaker": "Agent",
        "content": "Yes, the elementary school is top-rated, and the high school is just five minutes away by car.",
        "cn": "是的，小学排名很高，高中开车只需五分钟。"
      }
    ]
  },
  {
    "id": 247,
    "category": "adultlife",
    "title": "Home Renovation 房屋装修",
    "scene": "和装修承包商讨论装修方案",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Owner",
      "Contractor"
    ],
    "lines": [
      {
        "speaker": "Owner",
        "content": "I want to renovate my kitchen and bathroom. Can you give me an estimate?",
        "cn": "我想装修厨房和浴室。你能给我个报价吗？"
      },
      {
        "speaker": "Contractor",
        "content": "Sure. Do you have a design in mind, or do you need our designer to help?",
        "cn": "当然。你有设计想法吗，还是需要我们设计师帮忙？"
      },
      {
        "speaker": "Owner",
        "content": "I have some ideas from Pinterest. I want modern cabinets and a walk-in shower.",
        "cn": "我在Pinterest上有些想法。我想要现代橱柜和一个步入式淋浴间。"
      },
      {
        "speaker": "Contractor",
        "content": "That sounds nice. Based on your ideas, the estimate would be around twenty thousand dollars.",
        "cn": "听起来不错。根据你的想法，估价大约是两万美元。"
      },
      {
        "speaker": "Owner",
        "content": "That is more than I expected. Can we use cheaper materials without losing quality?",
        "cn": "比我想象的高。我们能不能用便宜一点的材料但质量不打折？"
      },
      {
        "speaker": "Contractor",
        "content": "Yes, we can suggest some mid-range brands. That could save you about three thousand dollars.",
        "cn": "可以，我们可以推荐一些中等价位的品牌。那样能帮你省大概三千美元。"
      },
      {
        "speaker": "Owner",
        "content": "How long will the renovation take? I need to plan where to stay.",
        "cn": "装修要多长时间？我需要安排住的地方。"
      },
      {
        "speaker": "Contractor",
        "content": "It should take about six weeks. We can start next Monday if you approve the plan.",
        "cn": "大约需要六周。如果你同意方案，我们可以下周一开工。"
      },
      {
        "speaker": "Owner",
        "content": "Okay, let me think about it tonight. Can I call you tomorrow?",
        "cn": "好的，我今晚考虑一下。明天给你打电话可以吗？"
      },
      {
        "speaker": "Contractor",
        "content": "Of course. Take your time. I will send you the detailed plan by email this evening.",
        "cn": "当然。慢慢来。我今晚会把详细方案发邮件给你。"
      }
    ]
  },
  {
    "id": 248,
    "category": "adultlife",
    "title": "Buying a Car 买车咨询",
    "scene": "在汽车4S店看车",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Buyer",
      "Dealer"
    ],
    "lines": [
      {
        "speaker": "Buyer",
        "content": "I am looking for a reliable family car. What would you recommend?",
        "cn": "我想买一辆可靠的家用车。你有什么推荐？"
      },
      {
        "speaker": "Dealer",
        "content": "This SUV is very popular. It has great safety ratings and plenty of space for a family of five.",
        "cn": "这款SUV很受欢迎。安全评级很高，而且空间足够五口之家使用。"
      },
      {
        "speaker": "Buyer",
        "content": "What is the fuel consumption like? I commute every day.",
        "cn": "油耗怎么样？我每天要通勤。"
      },
      {
        "speaker": "Dealer",
        "content": "It does about thirty miles per gallon. It is quite fuel-efficient for its size.",
        "cn": "每加仑大概能跑30英里。对于这个尺寸的车来说，算是很省油了。"
      },
      {
        "speaker": "Buyer",
        "content": "Can I take it for a test drive? I want to see how it feels on the road.",
        "cn": "我可以试驾一下吗？我想看看上路的感觉。"
      },
      {
        "speaker": "Dealer",
        "content": "Absolutely. Let me get the keys. We have a test route near the highway.",
        "cn": "当然可以。我去拿钥匙。我们高速公路附近有一条试驾路线。"
      },
      {
        "speaker": "Buyer",
        "content": "I like the driving experience. What is the price after all taxes and fees?",
        "cn": "我喜欢这个驾驶体验。含所有税费后的总价是多少？"
      },
      {
        "speaker": "Dealer",
        "content": "The total price is twenty-eight thousand five hundred dollars. We also offer zero-interest financing for three years.",
        "cn": "总价是两万八千五百美元。我们还提供三年零息贷款。"
      },
      {
        "speaker": "Buyer",
        "content": "That sounds good. Can I trade in my old car? It is a 2015 sedan.",
        "cn": "听起来不错。我可以用旧车置换吗？是一辆2015年的轿车。"
      },
      {
        "speaker": "Dealer",
        "content": "Yes, we accept trade-ins. Let me evaluate your car, and we can give you an offer.",
        "cn": "可以，我们接受置换。让我评估一下你的车，然后给你报价。"
      }
    ]
  },
  {
    "id": 249,
    "category": "adultlife",
    "title": "Car Maintenance 汽车保养",
    "scene": "在汽修店做保养",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Owner",
      "Mechanic"
    ],
    "lines": [
      {
        "speaker": "Owner",
        "content": "My car is making a strange noise when I brake. Can you check it?",
        "cn": "我的车刹车时会发出奇怪的声音。你能检查一下吗？"
      },
      {
        "speaker": "Mechanic",
        "content": "Sure. Let me take a look. When did you last replace the brake pads?",
        "cn": "好的。让我看看。你上次换刹车片是什么时候？"
      },
      {
        "speaker": "Owner",
        "content": "I think it was about two years ago. I do not drive that much.",
        "cn": "大概两年前吧。我开得不多。"
      },
      {
        "speaker": "Mechanic",
        "content": "The brake pads are worn out. You need new ones. The rotors are still okay though.",
        "cn": "刹车片磨损了。你需要换新的。不过刹车盘还凑合。"
      },
      {
        "speaker": "Owner",
        "content": "How much will it cost to replace the brake pads?",
        "cn": "换刹车片要多少钱？"
      },
      {
        "speaker": "Mechanic",
        "content": "It will be one hundred and twenty dollars for the parts and labor. I can do it today.",
        "cn": "零件加人工一共120美元。我今天就能换好。"
      },
      {
        "speaker": "Owner",
        "content": "Okay, please go ahead. Also, can you change the oil and check the tires?",
        "cn": "好的，请换吧。另外，你能换机油并检查一下轮胎吗？"
      },
      {
        "speaker": "Mechanic",
        "content": "No problem. The oil change is fifty dollars, and the tire check is free. Total is one hundred and seventy dollars.",
        "cn": "没问题。换机油50美元，检查轮胎免费。总共170美元。"
      },
      {
        "speaker": "Owner",
        "content": "That is fine. How long will it take? I can wait in the waiting area.",
        "cn": "可以。需要多久？我可以在休息区等。"
      },
      {
        "speaker": "Mechanic",
        "content": "About an hour. I will call you when it is ready. Please have a seat and enjoy some coffee.",
        "cn": "大概一小时。好了我叫你。请坐，喝杯咖啡。"
      }
    ]
  },
  {
    "id": 250,
    "category": "adultlife",
    "title": "Blind Date 相亲见面",
    "scene": "在咖啡馆相亲",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Man",
      "Woman"
    ],
    "lines": [
      {
        "speaker": "Man",
        "content": "Hi, you must be Sarah. I am Tom. Nice to meet you. I hope you did not wait too long.",
        "cn": "你好，你一定是莎拉。我是汤姆。很高兴认识你。希望你没等太久。"
      },
      {
        "speaker": "Woman",
        "content": "Hi Tom, nice to meet you too. I just arrived five minutes ago. This cafe looks cozy.",
        "cn": "你好汤姆，我也很高兴认识你。我刚到五分钟。这家咖啡馆看起来很温馨。"
      },
      {
        "speaker": "Man",
        "content": "Yes, I come here often. So, what do you do for work? My friend told me you are a teacher.",
        "cn": "是的，我经常来。那你做什么工作？我朋友告诉我你是老师。"
      },
      {
        "speaker": "Woman",
        "content": "That is right. I teach English at a high school. It is challenging but rewarding. How about you?",
        "cn": "没错。我在高中教英语。很有挑战性但也很 rewarding。你呢？"
      },
      {
        "speaker": "Man",
        "content": "I work as a software engineer at a tech company. I mostly work from home these days.",
        "cn": "我在一家科技公司做软件工程师。最近我 mostly 在家办公。"
      },
      {
        "speaker": "Woman",
        "content": "That sounds nice. What do you like to do in your free time? Any hobbies?",
        "cn": "听起来不错。你空闲时间喜欢做什么？有什么爱好？"
      },
      {
        "speaker": "Man",
        "content": "I enjoy hiking and photography. I also like trying new restaurants on weekends. What about you?",
        "cn": "我喜欢徒步和摄影。周末也喜欢尝试新餐厅。你呢？"
      },
      {
        "speaker": "Woman",
        "content": "I love reading and baking. I recently started learning how to play the guitar.",
        "cn": "我喜欢读书和烘焙。最近开始学弹吉他。"
      },
      {
        "speaker": "Man",
        "content": "That is great. I have been thinking about learning guitar too. Maybe we can practice together sometime.",
        "cn": "太好了。我也一直想学吉他。也许以后我们可以一起练习。"
      },
      {
        "speaker": "Woman",
        "content": "That would be fun. I would like that. Would you like to order some dessert?",
        "cn": "那会很开心。我很乐意。你要不要点些甜点？"
      }
    ]
  },
  {
    "id": 251,
    "category": "adultlife",
    "title": "Dating Dinner 约会吃饭",
    "scene": "在餐厅约会吃饭",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Boyfriend",
      "Girlfriend"
    ],
    "lines": [
      {
        "speaker": "Boyfriend",
        "content": "I made a reservation for us at this Italian restaurant. I heard the pasta here is amazing.",
        "cn": "我在这家意大利餐厅订了位。我听说这里的意面很棒。"
      },
      {
        "speaker": "Girlfriend",
        "content": "I have been wanting to try this place. The atmosphere is so romantic with the candlelight.",
        "cn": "我一直想来试试这家店。烛光下的氛围好浪漫。"
      },
      {
        "speaker": "Boyfriend",
        "content": "I am glad you like it. Would you like some wine, or would you prefer sparkling water?",
        "cn": "你喜欢就好。你想喝点红酒，还是气泡水？"
      },
      {
        "speaker": "Girlfriend",
        "content": "Just sparkling water for now. I want to enjoy the food with a clear head. What are you going to order?",
        "cn": "现在先气泡水吧。我想清醒地享受美食。你要点什么？"
      },
      {
        "speaker": "Boyfriend",
        "content": "I think I will get the seafood pasta. The waiter said it is the chef's special today.",
        "cn": "我想我要海鲜意面。服务员说今天是厨师特别推荐。"
      },
      {
        "speaker": "Girlfriend",
        "content": "That sounds delicious. I will go with the mushroom risotto. I love creamy dishes.",
        "cn": "听起来很美味。我要蘑菇烩饭。我喜欢奶油口味的菜。"
      },
      {
        "speaker": "Boyfriend",
        "content": "Perfect. Oh, I also ordered a tiramisu for us to share later. It is your favorite, right?",
        "cn": "完美。哦，我还点了一份提拉米苏我们待会儿分享。是你最喜欢的，对吧？"
      },
      {
        "speaker": "Girlfriend",
        "content": "You remembered! That is so sweet of you. This evening is already wonderful.",
        "cn": "你记得！你真好。这个晚上已经很美好了。"
      },
      {
        "speaker": "Boyfriend",
        "content": "I just wanted to make you happy. You work so hard, and you deserve a nice night out.",
        "cn": "我只是想让你开心。你工作那么辛苦，值得拥有一个美好的夜晚。"
      },
      {
        "speaker": "Girlfriend",
        "content": "Thank you, love. I feel really lucky to be here with you tonight.",
        "cn": "谢谢你，亲爱的。今晚能和你在一起，我真的觉得很幸运。"
      }
    ]
  },
  {
    "id": 252,
    "category": "adultlife",
    "title": "Marriage Proposal 求婚",
    "scene": "在公园求婚",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Man",
      "Woman"
    ],
    "lines": [
      {
        "speaker": "Man",
        "content": "Emma, we have been together for five years. You have made every day of my life brighter.",
        "cn": "艾玛，我们在一起五年了。你让我生命中的每一天都更加明亮。"
      },
      {
        "speaker": "Woman",
        "content": "That is so sweet. You are making me blush. What is going on?",
        "cn": "太甜了。你让我脸红了。怎么了？"
      },
      {
        "speaker": "Man",
        "content": "I want to spend the rest of my life with you. I cannot imagine my future without you in it.",
        "cn": "我想和你共度余生。我无法想象没有你的未来。"
      },
      {
        "speaker": "Woman",
        "content": "Are you serious? I feel the same way, but I did not expect this tonight.",
        "cn": "你是认真的吗？我也有同样的感觉，但我没想到今晚。"
      },
      {
        "speaker": "Man",
        "content": "I have been planning this for months. I wanted everything to be perfect for you.",
        "cn": "我策划了好几个月。我想让一切都对你完美。"
      },
      {
        "speaker": "Woman",
        "content": "You are already perfect to me. Look at you, you are nervous and adorable right now.",
        "cn": "你对我来说已经够完美了。看看你，现在又紧张又可爱。"
      },
      {
        "speaker": "Man",
        "content": "Emma, will you marry me? Will you be my partner, my best friend, forever?",
        "cn": "艾玛，你愿意嫁给我吗？你愿意成为我的伴侣、我最好的朋友，直到永远吗？"
      },
      {
        "speaker": "Woman",
        "content": "Yes, a thousand times yes! I love you so much. This is the happiest moment of my life.",
        "cn": "愿意，一千次愿意！我太爱你了。这是我一生中最幸福的时刻。"
      },
      {
        "speaker": "Man",
        "content": "I love you too. Let us put this ring on your finger. It fits perfectly.",
        "cn": "我也爱你。让我们把这个戒指戴在你手指上。尺寸正好。"
      },
      {
        "speaker": "Woman",
        "content": "It is beautiful. I am going to call my mom right now. She is going to be so excited!",
        "cn": "太美了。我现在就给我妈打电话。她一定会非常激动的！"
      }
    ]
  },
  {
    "id": 253,
    "category": "adultlife",
    "title": "Wedding Planning 婚礼筹备",
    "scene": "和婚礼策划师讨论婚礼方案",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Bride",
      "Planner"
    ],
    "lines": [
      {
        "speaker": "Bride",
        "content": "We want a small outdoor wedding with about fifty guests. Is that possible in spring?",
        "cn": "我们想要一个大约五十人的小型户外婚礼。春天办可以吗？"
      },
      {
        "speaker": "Planner",
        "content": "Absolutely. Spring is a beautiful season for outdoor weddings. Do you have a venue in mind?",
        "cn": "当然可以。春天是户外婚礼的好季节。你有心仪的场地吗？"
      },
      {
        "speaker": "Bride",
        "content": "We are thinking about the garden at the Rose Hotel. It looks lovely in photos.",
        "cn": "我们在考虑玫瑰酒店的花园。照片里看起来很美。"
      },
      {
        "speaker": "Planner",
        "content": "That is a popular choice. I can check their availability for May or June. What is your budget?",
        "cn": "那是个很受欢迎的选择。我可以查一下五月或六月有没有空档。你的预算多少？"
      },
      {
        "speaker": "Bride",
        "content": "We would like to keep it under fifteen thousand dollars. Is that realistic?",
        "cn": "我们想控制在15,000美元以内。现实吗？"
      },
      {
        "speaker": "Planner",
        "content": "Yes, for fifty guests, that is very doable. We can find a nice package within your budget.",
        "cn": "可以，五十位宾客的话完全能做到。我们可以在预算内找到不错的套餐。"
      },
      {
        "speaker": "Bride",
        "content": "Great. Can you also help with flowers and decorations? I want a romantic and simple style.",
        "cn": "太好了。你还能帮忙安排花艺和装饰吗？我想要浪漫简约的风格。"
      },
      {
        "speaker": "Planner",
        "content": "Of course. I will prepare a mood board for you. Soft colors and fairy lights would be perfect.",
        "cn": "当然。我会给你准备一份 mood board。柔和的颜色和串灯会很完美。"
      },
      {
        "speaker": "Bride",
        "content": "That sounds dreamy. When can we meet again to discuss the menu and music?",
        "cn": "听起来很梦幻。我们什么时候可以再见面讨论菜单和音乐？"
      },
      {
        "speaker": "Planner",
        "content": "How about next Tuesday? I will have all the details ready by then.",
        "cn": "下周二怎么样？到时候我会把所有细节准备好。"
      }
    ]
  },
  {
    "id": 254,
    "category": "adultlife",
    "title": "Parenting Tips 育儿经验",
    "scene": "父母在家讨论育儿",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Mom",
      "Dad"
    ],
    "lines": [
      {
        "speaker": "Mom",
        "content": "I think our daughter is spending too much time on her tablet. We need to set some limits.",
        "cn": "我觉得女儿在平板电脑上花太多时间了。我们得设一些限制。"
      },
      {
        "speaker": "Dad",
        "content": "I agree. How about one hour on weekdays and two hours on weekends? That seems fair.",
        "cn": "我同意。工作日一小时，周末两小时怎么样？听起来比较公平。"
      },
      {
        "speaker": "Mom",
        "content": "That sounds good. But we also need to offer other activities. Maybe she can join a sports class?",
        "cn": "听起来不错。但我们也得提供其他活动。也许她可以参加体育班？"
      },
      {
        "speaker": "Dad",
        "content": "She mentioned wanting to try swimming. There is a community pool nearby with lessons for kids.",
        "cn": "她提到过想学游泳。附近有个社区游泳池，有儿童课程。"
      },
      {
        "speaker": "Mom",
        "content": "Perfect. It is good for her health and she will make new friends too. What about homework?",
        "cn": "完美。对她的健康有好处，她还能交到新朋友。那作业呢？"
      },
      {
        "speaker": "Dad",
        "content": "We should help her build a routine. Homework first, then playtime. Consistency is key.",
        "cn": "我们应该帮她建立规律。先做作业，再玩。一致性是关键。"
      },
      {
        "speaker": "Mom",
        "content": "You are right. Also, let us read to her every night before bed. It helps with language skills.",
        "cn": "你说得对。还有，我们每晚睡前给她读书吧。这对语言能力有帮助。"
      },
      {
        "speaker": "Dad",
        "content": "I love reading bedtime stories. It is my favorite part of the day. We are doing okay, are not we?",
        "cn": "我喜欢读睡前故事。这是我最喜欢的一刻。我们做得还不错，对吧？"
      },
      {
        "speaker": "Mom",
        "content": "We are doing great. Parenting is hard, but we are a good team. I am proud of us.",
        "cn": "我们做得很好。育儿不容易，但我们是个好团队。我为我们骄傲。"
      },
      {
        "speaker": "Dad",
        "content": "Me too. Let us keep supporting each other and doing our best for our kids.",
        "cn": "我也是。让我们继续互相支持，为孩子做到最好。"
      }
    ]
  },
  {
    "id": 255,
    "category": "adultlife",
    "title": "Taking Child to Hospital 带孩子看病",
    "scene": "在儿科诊所",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Parent",
      "Doctor"
    ],
    "lines": [
      {
        "speaker": "Parent",
        "content": "Doctor, my son has had a fever for two days. It goes up to 39 degrees at night.",
        "cn": "医生，我儿子发烧两天了。晚上烧到39度。"
      },
      {
        "speaker": "Doctor",
        "content": "I see. Does he have any other symptoms, like cough, sore throat, or stomach pain?",
        "cn": "明白了。他还有其他症状吗，比如咳嗽、喉咙痛或肚子疼？"
      },
      {
        "speaker": "Parent",
        "content": "He has a slight cough and says his throat hurts when he swallows. He is not eating much.",
        "cn": "有点咳嗽，他说吞咽时喉咙痛。他吃得不多。"
      },
      {
        "speaker": "Doctor",
        "content": "Let me check his throat and listen to his lungs. Please sit him on the examination bed.",
        "cn": "让我检查一下他的喉咙和听一下肺部。请让他坐到检查床上。"
      },
      {
        "speaker": "Parent",
        "content": "Sure. Come here, sweetheart. The doctor is going to help you feel better.",
        "cn": "好的。过来，宝贝。医生会帮你感觉好起来的。"
      },
      {
        "speaker": "Doctor",
        "content": "It looks like a throat infection, probably viral. His lungs are clear, which is good news.",
        "cn": "看起来是咽喉感染，可能是病毒性的。肺部没问题，这是个好消息。"
      },
      {
        "speaker": "Parent",
        "content": "Do we need antibiotics? Or can we just give him fever medicine at home?",
        "cn": "我们需要抗生素吗？还是在家给他吃退烧药就行？"
      },
      {
        "speaker": "Doctor",
        "content": "No antibiotics needed for now. Give him acetaminophen for the fever and make sure he drinks plenty of water.",
        "cn": "目前不需要抗生素。给他吃对乙酰氨基酚退烧，并确保多喝水。"
      },
      {
        "speaker": "Parent",
        "content": "How long until he gets better? Should we bring him back if the fever continues?",
        "cn": "多久能好？如果发烧继续，我们要带他回来吗？"
      },
      {
        "speaker": "Doctor",
        "content": "He should feel better in three to five days. If the fever lasts more than five days, bring him back.",
        "cn": "三到五天应该能好转。如果发烧持续超过五天，再带他回来。"
      }
    ]
  },
  {
    "id": 256,
    "category": "adultlife",
    "title": "Pet Grooming 宠物美容",
    "scene": "在宠物美容店",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Owner",
      "Groomer"
    ],
    "lines": [
      {
        "speaker": "Owner",
        "content": "Hi, I would like to get my golden retriever groomed. He is a bit messy after playing in the park.",
        "cn": "你好，我想给我的金毛美容。他在公园玩完之后有点脏。"
      },
      {
        "speaker": "Groomer",
        "content": "No problem at all. We can give him a full bath, a haircut, and trim his nails. Does that sound good?",
        "cn": "完全没问题。我们可以给他全身洗澡、剪毛和剪指甲。可以吗？"
      },
      {
        "speaker": "Owner",
        "content": "Yes, please. Can you also clean his ears? He has been scratching them lately.",
        "cn": "好的，请吧。你还能清理一下他的耳朵吗？他最近一直在挠耳朵。"
      },
      {
        "speaker": "Groomer",
        "content": "Sure. Ear cleaning is included. We will check if there is any infection too.",
        "cn": "当然。清理耳朵包含在内。我们也会检查是否有感染。"
      },
      {
        "speaker": "Owner",
        "content": "How long will it take? I can come back to pick him up later.",
        "cn": "需要多久？我可以过会儿再来接他。"
      },
      {
        "speaker": "Groomer",
        "content": "For a full grooming package, it usually takes about two hours. We will call you when he is ready.",
        "cn": "全套美容通常需要大约两小时。好了我们会打电话通知你。"
      },
      {
        "speaker": "Owner",
        "content": "What is the total cost? And do you have any special shampoo for sensitive skin?",
        "cn": "总共多少钱？你们有适合敏感皮肤的特殊洗发水吗？"
      },
      {
        "speaker": "Groomer",
        "content": "The total is sixty dollars. We do have a mild oatmeal shampoo that is great for sensitive skin.",
        "cn": "一共60美元。我们确实有温和的燕麦洗发水，很适合敏感皮肤。"
      },
      {
        "speaker": "Owner",
        "content": "Perfect, please use that one. He sometimes gets itchy after regular shampoo.",
        "cn": "太好了，请用那个。他有时候用普通洗发水会痒。"
      },
      {
        "speaker": "Groomer",
        "content": "Noted. We will take good care of him. He looks like a sweet dog. See you in two hours!",
        "cn": "记下了。我们会好好照顾他的。他看起来很温顺。两小时后见！"
      }
    ]
  },
  {
    "id": 257,
    "category": "adultlife",
    "title": "Opening a Bank Account 银行开户",
    "scene": "在银行柜台开户",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Customer",
      "Banker"
    ],
    "lines": [
      {
        "speaker": "Customer",
        "content": "Hello, I would like to open a savings account. I just moved to this city for work.",
        "cn": "你好，我想开一个储蓄账户。我刚搬到这个城市工作。"
      },
      {
        "speaker": "Banker",
        "content": "Welcome! We would be happy to help. Do you have your ID and proof of address with you?",
        "cn": "欢迎！我们很乐意帮忙。你带身份证和地址证明了吗？"
      },
      {
        "speaker": "Customer",
        "content": "Yes, here is my passport and my rental agreement. Is that enough?",
        "cn": "带了，这是我的护照和租房合同。够了吗？"
      },
      {
        "speaker": "Banker",
        "content": "That is perfect. We offer two types of savings accounts. One has no monthly fee but lower interest. The other has a small fee but higher interest.",
        "cn": "非常完美。我们提供两种储蓄账户。一种没有月费但利率较低，另一种有小额月费但利率较高。"
      },
      {
        "speaker": "Customer",
        "content": "I think I will go with the no-fee account. I do not have a large balance right now.",
        "cn": "我想选无月费的账户。我目前余额不多。"
      },
      {
        "speaker": "Banker",
        "content": "Good choice. You can always upgrade later. How much would you like to deposit today?",
        "cn": "好选择。以后随时可以升级。你今天想存多少？"
      },
      {
        "speaker": "Customer",
        "content": "I will deposit one thousand dollars. Can I also set up online banking today?",
        "cn": "我存1000美元。我今天还能开通网上银行吗？"
      },
      {
        "speaker": "Banker",
        "content": "Yes, I can set that up for you right now. You will receive a debit card in the mail within five business days.",
        "cn": "可以，我现在就能帮你开通。你将在五个工作日内收到借记卡。"
      },
      {
        "speaker": "Customer",
        "content": "Great. Is there a mobile app for checking my balance and transferring money?",
        "cn": "太好了。有手机应用可以查余额和转账吗？"
      },
      {
        "speaker": "Banker",
        "content": "Yes, our app is very easy to use. I will show you how to download it before you leave.",
        "cn": "有的，我们的应用很容易使用。你走之前我会教你下载。"
      }
    ]
  },
  {
    "id": 258,
    "category": "adultlife",
    "title": "Financial Advice 理财咨询",
    "scene": "和理财顾问讨论投资方案",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Client",
      "Advisor"
    ],
    "lines": [
      {
        "speaker": "Client",
        "content": "I have saved about twenty thousand dollars, and I want to invest it wisely. Where should I start?",
        "cn": "我存了大约两万美元，想明智地投资。我应该从哪里开始？"
      },
      {
        "speaker": "Advisor",
        "content": "That is a great first step. Do you have an emergency fund already? We usually recommend six months of expenses set aside first.",
        "cn": "这是很好的第一步。你已经有应急基金了吗？我们通常建议先预留六个月的开支。"
      },
      {
        "speaker": "Client",
        "content": "Yes, I have about ten thousand in my savings for emergencies. So this twenty thousand is extra.",
        "cn": "是的，我储蓄里大约有一万美元作为应急。所以这额外的两万美元是富余的。"
      },
      {
        "speaker": "Advisor",
        "content": "Excellent. How do you feel about risk? Are you comfortable with some ups and downs, or do you prefer stability?",
        "cn": "很好。你对风险怎么看？你对一些波动感到舒适，还是更喜欢稳定？"
      },
      {
        "speaker": "Client",
        "content": "I can handle some risk, but I do not want to lose my sleep over it. Maybe a balanced approach?",
        "cn": "我能承受一些风险，但不想为此睡不着觉。也许平衡型的方案？"
      },
      {
        "speaker": "Advisor",
        "content": "I would suggest a mix of low-cost index funds and some bonds. This gives you growth with less risk.",
        "cn": "我建议混合低成本的指数基金和一些债券。这样既能增长，风险又较低。"
      },
      {
        "speaker": "Client",
        "content": "That sounds reasonable. What about retirement accounts? Should I open an IRA?",
        "cn": "听起来合理。那退休账户呢？我应该开个人退休账户吗？"
      },
      {
        "speaker": "Advisor",
        "content": "Absolutely. An IRA has tax advantages. If your employer offers a 401k match, start with that first.",
        "cn": "当然。个人退休账户有税收优惠。如果你的雇主提供401k匹配，先从那个开始。"
      },
      {
        "speaker": "Client",
        "content": "My employer does match up to five percent. I will increase my contribution. Thank you for the advice.",
        "cn": "我的雇主确实匹配到5%。我会提高我的缴纳比例。谢谢你的建议。"
      },
      {
        "speaker": "Advisor",
        "content": "You are welcome. I will prepare a personalized plan for you. Let us meet again next week to review it.",
        "cn": "不客气。我会为你准备一份个性化计划。我们下周再见，一起审查。"
      }
    ]
  },
  {
    "id": 259,
    "category": "adultlife",
    "title": "Insurance Consultation 保险咨询",
    "scene": "在保险公司咨询",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Customer",
      "Agent"
    ],
    "lines": [
      {
        "speaker": "Customer",
        "content": "I am looking for health insurance. I just started a new job, but it does not offer benefits yet.",
        "cn": "我想买健康保险。我刚找到新工作，但暂时还没有福利。"
      },
      {
        "speaker": "Agent",
        "content": "I understand. We have several individual plans. Do you need coverage for just yourself or your family too?",
        "cn": "我理解。我们有几种个人保险计划。你需要只保你自己，还是也包括家人？"
      },
      {
        "speaker": "Customer",
        "content": "Just myself for now. My wife has insurance through her job. What are the monthly premiums?",
        "cn": "目前就我自己。我妻子通过她工作有保险。月保费是多少？"
      },
      {
        "speaker": "Agent",
        "content": "For a basic plan, it is about two hundred dollars a month. It covers doctor visits and emergency care. A better plan is three hundred and fifty.",
        "cn": "基础计划大约每月200美元。涵盖门诊和急救。更好的计划是350美元。"
      },
      {
        "speaker": "Customer",
        "content": "What is the difference between the two? Is the better plan worth the extra cost?",
        "cn": "两者有什么区别？更好的计划值这个额外的费用吗？"
      },
      {
        "speaker": "Agent",
        "content": "The better plan covers prescription drugs and has a lower deductible. If you take regular medicine, it saves money.",
        "cn": "更好的计划涵盖处方药，自付额更低。如果你经常吃药，这样更省钱。"
      },
      {
        "speaker": "Customer",
        "content": "I do not take regular medicine, so the basic plan might be enough. What about dental?",
        "cn": "我不经常吃药，所以基础计划可能就够了。那牙齿保险呢？"
      },
      {
        "speaker": "Agent",
        "content": "Dental insurance is usually separate. We can bundle it with your health plan for an extra twenty-five dollars a month.",
        "cn": "牙齿保险通常是分开的。我们可以把它和健康计划捆绑，每月额外25美元。"
      },
      {
        "speaker": "Customer",
        "content": "Let me think about the dental part. Can I sign up for the basic health plan today?",
        "cn": "牙齿部分让我考虑一下。我今天可以签基础健康计划吗？"
      },
      {
        "speaker": "Agent",
        "content": "Yes, we can start the application now. Coverage will begin on the first of next month.",
        "cn": "可以，我们现在就可以开始申请。保险下个月一号生效。"
      }
    ]
  },
  {
    "id": 260,
    "category": "adultlife",
    "title": "Moving House 搬家",
    "scene": "和搬家工人沟通",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Mover",
      "Owner"
    ],
    "lines": [
      {
        "speaker": "Owner",
        "content": "Hi, I need to move from my apartment to a new house about ten miles away. Can you help?",
        "cn": "你好，我需要从我的公寓搬到大约十英里外的新房子。你能帮忙吗？"
      },
      {
        "speaker": "Mover",
        "content": "Of course. How many rooms of furniture do you have? And are there any large items like a piano or a big fridge?",
        "cn": "当然。你有几个房间的家当？有没有大件物品比如钢琴或大冰箱？"
      },
      {
        "speaker": "Owner",
        "content": "It is a two-bedroom apartment. No piano, but we do have a large sofa and a king-size bed.",
        "cn": "两居室的公寓。没有钢琴，但我们有一个大沙发和一张特大号床。"
      },
      {
        "speaker": "Mover",
        "content": "That is manageable. We usually charge by the hour. The rate is one hundred and twenty dollars per hour for two movers and a truck.",
        "cn": " manageable。我们通常按小时收费。两个搬运工加一辆卡车，每小时120美元。"
      },
      {
        "speaker": "Owner",
        "content": "How long do you think it will take? We have packed most of the boxes already.",
        "cn": "你觉得需要多久？我们已经把大部分箱子打包好了。"
      },
      {
        "speaker": "Mover",
        "content": "If everything is packed, it should take about four to five hours. We also wrap the furniture to protect it.",
        "cn": "如果都打包好了，大概需要四到五小时。我们还会包裹家具以防损坏。"
      },
      {
        "speaker": "Owner",
        "content": "Good. Do you also disassemble and reassemble furniture? Our bed needs to be taken apart.",
        "cn": "好的。你们还拆卸和组装家具吗？我们的床需要拆下来。"
      },
      {
        "speaker": "Mover",
        "content": "Yes, we include basic disassembly and reassembly in our service. No extra charge for that.",
        "cn": "是的，我们的服务包含基础的拆卸和组装。不额外收费。"
      },
      {
        "speaker": "Owner",
        "content": "Perfect. When is your earliest available date? I need to move next weekend.",
        "cn": "完美。你最早什么时候有空？我下周末需要搬家。"
      },
      {
        "speaker": "Mover",
        "content": "We have slots available on Saturday morning. I can book you in for 8 a.m. Is that okay?",
        "cn": "我们周六上午有空档。我可以帮你预订上午8点。可以吗？"
      }
    ]
  },
  {
    "id": 261,
    "category": "adultlife",
    "title": "Paying Utility Bills 水电费缴费",
    "scene": "和房东确认水电费",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Tenant",
      "Landlord"
    ],
    "lines": [
      {
        "speaker": "Tenant",
        "content": "Mr. Johnson, I received the utility bill for last month. It seems higher than usual. Can we go through it together?",
        "cn": "约翰逊先生，我收到了上个月的水电费账单。看起来比平时高。我们能一起看看吗？"
      },
      {
        "speaker": "Landlord",
        "content": "Sure, let me check my records. The electric bill was one hundred and twenty dollars, water was forty, and gas was thirty-five.",
        "cn": "好的，让我查一下记录。电费120美元，水费40美元，燃气费35美元。"
      },
      {
        "speaker": "Tenant",
        "content": "That is one hundred and ninety-five in total. Last month it was only one hundred and fifty. Why did it go up so much?",
        "cn": "总共195美元。上个月才150美元。为什么涨这么多？"
      },
      {
        "speaker": "Landlord",
        "content": "It is winter now, so the heating is on more. Also, you used the dryer a lot, which uses a lot of electricity.",
        "cn": "现在是冬天，暖气开得多。而且你用了很长时间的烘干机，很耗电。"
      },
      {
        "speaker": "Tenant",
        "content": "I see. I did not realize the dryer used that much power. Is there anything I can do to save money?",
        "cn": "我明白了。我没意识到烘干机这么耗电。有什么办法可以省钱吗？"
      },
      {
        "speaker": "Landlord",
        "content": "You can air-dry clothes when possible, and keep the thermostat at sixty-eight degrees. That helps a lot.",
        "cn": "你可以尽量自然晾干衣服，并把恒温器调到68华氏度。这能帮很大忙。"
      },
      {
        "speaker": "Tenant",
        "content": "Good tips. Can I pay the bill through an app or do I need to transfer money to your account?",
        "cn": "好建议。我可以通过应用付款，还是必须转账到你的账户？"
      },
      {
        "speaker": "Landlord",
        "content": "You can use Venmo or bank transfer. Either way is fine. Just send me a screenshot when it is done.",
        "cn": "你可以用Venmo或银行转账。哪种都行。付完后给我发个截图就好。"
      },
      {
        "speaker": "Tenant",
        "content": "I will pay today. Also, should I expect the same amount next month, or will it change?",
        "cn": "我今天会付。另外，下个月账单大概也一样吗，还是会变？"
      },
      {
        "speaker": "Landlord",
        "content": "It should be similar until spring. Once the weather gets warmer, the bill will go down again.",
        "cn": "到春天之前应该差不多。天气变暖后，账单会再次下降。"
      }
    ]
  },
  {
    "id": 262,
    "category": "adultlife",
    "title": "Garbage Sorting 垃圾分类",
    "scene": "邻居之间讨论垃圾分类",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Neighbor",
      "Neighbor"
    ],
    "lines": [
      {
        "speaker": "Neighbor",
        "content": "Hi there, I noticed you are new to the building. Do you know about the garbage sorting rules here?",
        "cn": "你好，我注意到你是新搬来的。你知道这里的垃圾分类规定吗？"
      },
      {
        "speaker": "Neighbor",
        "content": "Not really. I saw four different colored bins, but I am not sure what goes where. Can you help me?",
        "cn": "不太清楚。我看到四个不同颜色的垃圾桶，但不知道什么垃圾该扔哪里。你能帮我吗？"
      },
      {
        "speaker": "Neighbor",
        "content": "Of course. The blue bin is for recyclables like paper, plastic bottles, and cans. The green bin is for food waste.",
        "cn": "当然。蓝色桶是放可回收物，比如纸、塑料瓶和易拉罐。绿色桶是厨余垃圾。"
      },
      {
        "speaker": "Neighbor",
        "content": "What about the brown bin? It looks bigger than the others.",
        "cn": "那棕色桶呢？看起来比其他的大。"
      },
      {
        "speaker": "Neighbor",
        "content": "The brown bin is for general waste. Things that cannot be recycled or composted go in there. The yellow one is for glass.",
        "cn": "棕色桶是其他垃圾。不能回收或堆肥的东西扔那里。黄色桶是放玻璃的。"
      },
      {
        "speaker": "Neighbor",
        "content": "That makes sense. What about pizza boxes? Are they recyclable?",
        "cn": "明白了。那披萨盒呢？可以回收吗？"
      },
      {
        "speaker": "Neighbor",
        "content": "Only if they are clean. If they have grease or food on them, they go in the brown bin. The same goes for used napkins.",
        "cn": "干净的可以。如果有油污或食物残渣，就扔棕色桶。用过的餐巾纸也一样。"
      },
      {
        "speaker": "Neighbor",
        "content": "Good to know. I want to do it right. When is the garbage collection day?",
        "cn": "知道了。我想做对。垃圾收集日是哪天？"
      },
      {
        "speaker": "Neighbor",
        "content": "Recycling is collected every Tuesday and Friday. General waste is every Monday, Wednesday, and Saturday.",
        "cn": "可回收物每周二和周五收。其他垃圾是每周一、三、六。"
      },
      {
        "speaker": "Neighbor",
        "content": "Thank you so much. I really appreciate your help. This neighborhood seems very friendly.",
        "cn": "非常感谢。我真的很感激你的帮助。这个社区看起来很友好。"
      }
    ]
  },
  {
    "id": 263,
    "category": "adultlife",
    "title": "Community Event 社区活动",
    "scene": "在社区活动中心",
    "difficulty": "中等",
    "duration": "2.5分钟",
    "roles": [
      "Resident",
      "Volunteer"
    ],
    "lines": [
      {
        "speaker": "Resident",
        "content": "Excuse me, I heard there is a community event this weekend. What is it about?",
        "cn": "打扰一下，我听说这个周末有个社区活动。是关于什么的？"
      },
      {
        "speaker": "Volunteer",
        "content": "Yes, we are hosting a neighborhood cleanup and a potluck picnic. Everyone is welcome to join.",
        "cn": "是的，我们要举办社区清洁和 potluck 野餐。欢迎大家参加。"
      },
      {
        "speaker": "Resident",
        "content": "That sounds fun. What time does it start, and where should I meet everyone?",
        "cn": "听起来很有趣。什么时候开始，我应该在哪里和大家碰面？"
      },
      {
        "speaker": "Volunteer",
        "content": "We will meet at the community garden at 9 a.m. on Saturday. We will clean the park until noon, then have lunch together.",
        "cn": "我们周六上午9点在社区花园集合。我们会清洁公园到中午，然后一起吃午饭。"
      },
      {
        "speaker": "Resident",
        "content": "I would love to help. Do I need to bring anything, like cleaning supplies or gloves?",
        "cn": "我很乐意帮忙。我需要带什么吗，比如清洁用品或手套？"
      },
      {
        "speaker": "Volunteer",
        "content": "We have gloves and bags, but if you have a reusable water bottle, bring it to stay hydrated. Also, bring a dish for the potluck.",
        "cn": "我们有手套和袋子，但如果你有可重复使用的水瓶，带上保持水分。另外，带一道菜来参加potluck。"
      },
      {
        "speaker": "Resident",
        "content": "I can make my famous pasta salad. My neighbors always love it. How many people usually come?",
        "cn": "我可以做我出名的意面沙拉。邻居们都很喜欢吃。通常来多少人？"
      },
      {
        "speaker": "Volunteer",
        "content": "Usually around thirty to forty people. It is a great way to meet neighbors and make new friends.",
        "cn": "通常大约30到40人。这是认识邻居和交新朋友的好方式。"
      },
      {
        "speaker": "Resident",
        "content": "I have been wanting to get more involved in the community. Can I also sign up to volunteer regularly?",
        "cn": "我一直想更多地参与社区活动。我也可以报名定期做志愿者吗？"
      },
      {
        "speaker": "Volunteer",
        "content": "Absolutely! We have a volunteer group that meets monthly. I will add you to our email list. Welcome to the community!",
        "cn": "当然可以！我们有一个每月聚会的志愿者小组。我会把你加到我们的邮件列表里。欢迎加入社区！"
      }
    ]
  },
  {
    "id": 264,
    "category": "services",
    "title": "Withdrawing Money 银行取款",
    "scene": "在银行柜台取款",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Customer",
      "Teller"
    ],
    "lines": [
      {
        "role": "Teller",
        "en": "Good morning. How may I help you today?",
        "zh": "早上好。请问今天有什么可以帮您的？"
      },
      {
        "role": "Customer",
        "en": "I'd like to withdraw five hundred dollars from my savings account.",
        "zh": "我想从我的储蓄账户取五百美元。"
      },
      {
        "role": "Teller",
        "en": "Sure. May I see your ID and bank card, please?",
        "zh": "好的。请出示您的身份证和银行卡。"
      },
      {
        "role": "Customer",
        "en": "Here you go. Is there a withdrawal fee?",
        "zh": "给您。有取款手续费吗？"
      },
      {
        "role": "Teller",
        "en": "No, there isn't. Please enter your PIN on the keypad.",
        "zh": "没有。请在键盘上输入您的密码。"
      },
      {
        "role": "Customer",
        "en": "Done. Could I get some smaller bills, please?",
        "zh": "好了。可以给我一些零钱吗？"
      },
      {
        "role": "Teller",
        "en": "Of course. Would you like twenties and tens?",
        "zh": "当然可以。您要二十美元和十美元的面额吗？"
      },
      {
        "role": "Customer",
        "en": "Yes, that's perfect. Thank you so much.",
        "zh": "是的，太好了。非常感谢。"
      },
      {
        "role": "Teller",
        "en": "Here's your cash, card, and receipt. Have a great day.",
        "zh": "这是您的现金、卡和收据。祝您愉快。"
      }
    ]
  },
  {
    "id": 265,
    "category": "services",
    "title": "Bank Transfer 银行转账",
    "scene": "在银行办理转账业务",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Customer",
      "Teller"
    ],
    "lines": [
      {
        "role": "Teller",
        "en": "Hello. What can I do for you today?",
        "zh": "您好。今天有什么可以帮您的？"
      },
      {
        "role": "Customer",
        "en": "I need to make a wire transfer to my friend's account.",
        "zh": "我需要给我朋友的账户转一笔电汇。"
      },
      {
        "role": "Teller",
        "en": "Do you have the recipient's account number and bank details?",
        "zh": "您有收款人的账号和银行信息吗？"
      },
      {
        "role": "Customer",
        "en": "Yes, I have everything written down here.",
        "zh": "有的，我都写在这里了。"
      },
      {
        "role": "Teller",
        "en": "How much would you like to transfer?",
        "zh": "您想转多少钱？"
      },
      {
        "role": "Customer",
        "en": "Two thousand dollars. How long will it take to arrive?",
        "zh": "两千美元。多久能到账？"
      },
      {
        "role": "Teller",
        "en": "Domestic transfers usually arrive within one business day.",
        "zh": "国内转账通常在一个工作日内到账。"
      },
      {
        "role": "Customer",
        "en": "Great. Is there a transfer fee for this amount?",
        "zh": "好的。这个金额有转账手续费吗？"
      },
      {
        "role": "Teller",
        "en": "Yes, it's fifteen dollars. Please sign this form.",
        "zh": "有的，十五美元。请在这张表上签字。"
      },
      {
        "role": "Customer",
        "en": "Here you go. Thank you for your help.",
        "zh": "给您。谢谢您的帮助。"
      }
    ]
  },
  {
    "id": 266,
    "category": "services",
    "title": "Passport Application 护照办理",
    "scene": "在护照办理中心申请护照",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Applicant",
      "Officer"
    ],
    "lines": [
      {
        "role": "Officer",
        "en": "Good afternoon. Are you here to apply for a passport?",
        "zh": "下午好。您是来申请护照的吗？"
      },
      {
        "role": "Applicant",
        "en": "Yes, it's my first time applying.",
        "zh": "是的，这是我第一次申请。"
      },
      {
        "role": "Officer",
        "en": "Please fill out this form and provide proof of citizenship.",
        "zh": "请填写这张表格并提供公民身份证明。"
      },
      {
        "role": "Applicant",
        "en": "I have my birth certificate and driver's license with me.",
        "zh": "我带了我的出生证明和驾照。"
      },
      {
        "role": "Officer",
        "en": "Perfect. Do you have your passport photo ready?",
        "zh": "很好。您准备好护照照片了吗？"
      },
      {
        "role": "Applicant",
        "en": "Yes, I took one at the photo booth earlier.",
        "zh": "是的，我早些时候在拍照亭拍了。"
      },
      {
        "role": "Officer",
        "en": "Good. The fee is one hundred and thirty dollars.",
        "zh": "好的。费用是一百三十美元。"
      },
      {
        "role": "Applicant",
        "en": "Here's the payment. How long will it take to process?",
        "zh": "这是费用。办理需要多长时间？"
      },
      {
        "role": "Officer",
        "en": "About six to eight weeks. We'll mail it to your address.",
        "zh": "大约六到八周。我们会寄到您的地址。"
      },
      {
        "role": "Applicant",
        "en": "Thank you. I really appreciate your help.",
        "zh": "谢谢。非常感谢您的帮助。"
      }
    ]
  },
  {
    "id": 267,
    "category": "services",
    "title": "ID Card Replacement 身份证补办",
    "scene": "在政府服务大厅补办身份证",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Resident",
      "Officer"
    ],
    "lines": [
      {
        "role": "Officer",
        "en": "Welcome. How can I assist you today?",
        "zh": "欢迎。今天有什么可以帮您的？"
      },
      {
        "role": "Resident",
        "en": "I lost my ID card and I need to apply for a replacement.",
        "zh": "我的身份证丢了，需要补办一张。"
      },
      {
        "role": "Officer",
        "en": "I'm sorry to hear that. When did you lose it?",
        "zh": "很遗憾听到这个消息。您什么时候丢的？"
      },
      {
        "role": "Resident",
        "en": "I think it was stolen yesterday at the shopping mall.",
        "zh": "我想是昨天在商场被偷了。"
      },
      {
        "role": "Officer",
        "en": "Did you report it to the police?",
        "zh": "您报警了吗？"
      },
      {
        "role": "Resident",
        "en": "Yes, I filed a police report this morning.",
        "zh": "是的，我今天早上报了案。"
      },
      {
        "role": "Officer",
        "en": "Good. Please fill out this replacement form and take a new photo.",
        "zh": "好的。请填写这张补办申请表并拍一张新照片。"
      },
      {
        "role": "Resident",
        "en": "How much is the replacement fee?",
        "zh": "补办费用是多少？"
      },
      {
        "role": "Officer",
        "en": "It's twenty-five dollars. Your new card will be ready in two weeks.",
        "zh": "二十五美元。您的新卡两周后就能办好。"
      },
      {
        "role": "Resident",
        "en": "Thank you. I'll pick it up then.",
        "zh": "谢谢。到时候我来取。"
      }
    ]
  },
  {
    "id": 268,
    "category": "services",
    "title": "Reporting to Police 警察局报案",
    "scene": "在警察局向警察报案",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Victim",
      "Police"
    ],
    "lines": [
      {
        "role": "Police",
        "en": "Good evening. What brings you to the station?",
        "zh": "晚上好。您来警察局有什么事？"
      },
      {
        "role": "Victim",
        "en": "I'd like to report a theft. My bike was stolen this afternoon.",
        "zh": "我想报一起盗窃案。我的自行车今天下午被偷了。"
      },
      {
        "role": "Police",
        "en": "I'm sorry to hear that. Can you tell me where it happened?",
        "zh": "很遗憾。您能告诉我在哪里发生的吗？"
      },
      {
        "role": "Victim",
        "en": "It was parked outside the library on Main Street.",
        "zh": "它停在主街图书馆外面。"
      },
      {
        "role": "Police",
        "en": "What time did you notice it was missing?",
        "zh": "您什么时候发现它不见的？"
      },
      {
        "role": "Victim",
        "en": "Around four o'clock when I came out of the library.",
        "zh": "大约四点钟，我从图书馆出来的时候。"
      },
      {
        "role": "Police",
        "en": "Can you describe the bike for me?",
        "zh": "您能描述一下自行车吗？"
      },
      {
        "role": "Victim",
        "en": "It's a red mountain bike with a black seat and a white basket.",
        "zh": "是一辆红色的山地车，黑色座椅，白色篮子。"
      },
      {
        "role": "Police",
        "en": "Thank you. Please fill out this report form and we'll look into it.",
        "zh": "谢谢。请填写这张报案表，我们会调查的。"
      }
    ]
  },
  {
    "id": 269,
    "category": "services",
    "title": "Legal Consultation 法律咨询",
    "scene": "在律师事务所咨询法律问题",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Client",
      "Lawyer"
    ],
    "lines": [
      {
        "role": "Lawyer",
        "en": "Please have a seat. What brings you in today?",
        "zh": "请坐。今天您来有什么事？"
      },
      {
        "role": "Client",
        "en": "I need some advice about a rental dispute with my landlord.",
        "zh": "我需要一些关于我和房东租赁纠纷的建议。"
      },
      {
        "role": "Lawyer",
        "en": "I see. Can you give me more details about the situation?",
        "zh": "明白了。您能告诉我更多细节吗？"
      },
      {
        "role": "Client",
        "en": "My landlord is refusing to return my security deposit.",
        "zh": "我的房东拒绝退还我的押金。"
      },
      {
        "role": "Lawyer",
        "en": "Did you cause any damage to the property?",
        "zh": "您对房屋造成了什么损坏吗？"
      },
      {
        "role": "Client",
        "en": "No, I left the apartment in perfect condition.",
        "zh": "没有，我把公寓保持得很好。"
      },
      {
        "role": "Lawyer",
        "en": "Do you have photos of the apartment before you moved out?",
        "zh": "您有搬出去之前的公寓照片吗？"
      },
      {
        "role": "Client",
        "en": "Yes, I took pictures of every room.",
        "zh": "有的，我每个房间都拍了照。"
      },
      {
        "role": "Lawyer",
        "en": "That's very helpful. We can send a formal demand letter.",
        "zh": "这很有帮助。我们可以发一封正式的催款函。"
      },
      {
        "role": "Client",
        "en": "Thank you. What are your fees for this service?",
        "zh": "谢谢。这项服务的费用是多少？"
      }
    ]
  },
  {
    "id": 270,
    "category": "services",
    "title": "Nail Salon 美甲店",
    "scene": "在美甲店做美甲",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Customer",
      "Nail Artist"
    ],
    "lines": [
      {
        "role": "Nail Artist",
        "en": "Hi there! Welcome in. Do you have an appointment?",
        "zh": "嗨！欢迎光临。您有预约吗？"
      },
      {
        "role": "Customer",
        "en": "Yes, I booked a manicure for three o'clock.",
        "zh": "有的，我预约了三点的美甲。"
      },
      {
        "role": "Nail Artist",
        "en": "Great. Please choose a color from our collection.",
        "zh": "好的。请从我们的色板中选一个颜色。"
      },
      {
        "role": "Customer",
        "en": "I'd like this soft pink. Can you add some glitter too?",
        "zh": "我想要这个浅粉色。能再加一些亮片吗？"
      },
      {
        "role": "Nail Artist",
        "en": "Of course. Would you like a French tip as well?",
        "zh": "当然可以。您还想做法式美甲吗？"
      },
      {
        "role": "Customer",
        "en": "No, just the solid color with glitter is fine.",
        "zh": "不用了，纯色加亮片就好。"
      },
      {
        "role": "Nail Artist",
        "en": "Perfect. Please relax your hands. This won't take long.",
        "zh": "好的。请放松您的手。不会花很长时间的。"
      },
      {
        "role": "Customer",
        "en": "How long does the polish usually last?",
        "zh": "指甲油通常能保持多久？"
      },
      {
        "role": "Nail Artist",
        "en": "About two weeks if you're careful. Here you go, all done!",
        "zh": "如果您小心的话大约两周。好了，完成了！"
      },
      {
        "role": "Customer",
        "en": "They look beautiful! Thank you so much.",
        "zh": "太好看了！非常感谢。"
      }
    ]
  },
  {
    "id": 271,
    "category": "services",
    "title": "Beauty Salon 美容院",
    "scene": "在美容院做面部护理",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Customer",
      "Beautician"
    ],
    "lines": [
      {
        "role": "Beautician",
        "en": "Welcome! What treatment are you interested in today?",
        "zh": "欢迎！今天您想做什么项目？"
      },
      {
        "role": "Customer",
        "en": "I'd like a deep cleansing facial. My skin feels really dry.",
        "zh": "我想做一个深层清洁面部护理。我的皮肤感觉很干。"
      },
      {
        "role": "Beautician",
        "en": "I understand. Do you have any allergies I should know about?",
        "zh": "我明白了。您有什么过敏情况我需要了解的吗？"
      },
      {
        "role": "Customer",
        "en": "No, I don't. My skin is just sensitive sometimes.",
        "zh": "没有。只是我的皮肤有时候比较敏感。"
      },
      {
        "role": "Beautician",
        "en": "I'll use a gentle, hydrating mask for you then.",
        "zh": "那我给您用一款温和保湿的面膜。"
      },
      {
        "role": "Customer",
        "en": "Sounds good. How long does the treatment take?",
        "zh": "听起来不错。这个护理需要多长时间？"
      },
      {
        "role": "Beautician",
        "en": "About sixty minutes. Please lie down and relax.",
        "zh": "大约六十分钟。请躺下来放松。"
      },
      {
        "role": "Customer",
        "en": "That feels so refreshing. What products do you use?",
        "zh": "感觉很清爽。你们用的是什么产品？"
      },
      {
        "role": "Beautician",
        "en": "We use all natural, organic skincare products.",
        "zh": "我们使用的是全天然有机护肤品。"
      },
      {
        "role": "Customer",
        "en": "Wonderful. I'll definitely come back again.",
        "zh": "太棒了。我一定会再来的。"
      }
    ]
  },
  {
    "id": 272,
    "category": "services",
    "title": "Gym Membership 健身房办卡",
    "scene": "在健身房咨询并办理会员卡",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Customer",
      "Trainer"
    ],
    "lines": [
      {
        "role": "Trainer",
        "en": "Hey there! Are you interested in joining our gym?",
        "zh": "嗨！您有兴趣加入我们健身房吗？"
      },
      {
        "role": "Customer",
        "en": "Yes, I'm thinking about getting a membership. What plans do you offer?",
        "zh": "是的，我在考虑办会员。你们有什么方案？"
      },
      {
        "role": "Trainer",
        "en": "We have monthly, quarterly, and annual memberships.",
        "zh": "我们有月卡、季卡和年卡。"
      },
      {
        "role": "Customer",
        "en": "How much is the monthly membership?",
        "zh": "月卡多少钱？"
      },
      {
        "role": "Trainer",
        "en": "It's forty-nine dollars per month. The annual plan is the best deal.",
        "zh": "每月四十九美元。年卡是最划算的。"
      },
      {
        "role": "Customer",
        "en": "What facilities can I use with the membership?",
        "zh": "办了会员可以使用哪些设施？"
      },
      {
        "role": "Trainer",
        "en": "You get access to all equipment, the pool, and group classes.",
        "zh": "您可以使用所有器械、游泳池和团体课程。"
      },
      {
        "role": "Customer",
        "en": "That sounds great. Do you offer a free trial first?",
        "zh": "听起来不错。你们有免费试用的机会吗？"
      },
      {
        "role": "Trainer",
        "en": "Yes, you can try it free for three days before deciding.",
        "zh": "有的，您可以先免费试用三天再做决定。"
      },
      {
        "role": "Customer",
        "en": "Perfect. I'll start with the trial and then sign up.",
        "zh": "太好了。我先试用，然后办会员。"
      }
    ]
  },
  {
    "id": 273,
    "category": "services",
    "title": "Yoga Class 瑜伽课",
    "scene": "在瑜伽馆上瑜伽课",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Student",
      "Instructor"
    ],
    "lines": [
      {
        "role": "Instructor",
        "en": "Welcome everyone. Please roll out your mats and sit comfortably.",
        "zh": "欢迎大家。请铺开瑜伽垫，舒适地坐下。"
      },
      {
        "role": "Student",
        "en": "Excuse me, I'm new here. Is this class suitable for beginners?",
        "zh": "不好意思，我是新来的。这个课程适合初学者吗？"
      },
      {
        "role": "Instructor",
        "en": "Absolutely. This is a gentle flow class for all levels.",
        "zh": "当然。这是一节适合所有水平的温和流瑜伽课。"
      },
      {
        "role": "Student",
        "en": "Good to know. Should I bring my own mat next time?",
        "zh": "知道了。下次我需要带自己的瑜伽垫吗？"
      },
      {
        "role": "Instructor",
        "en": "We provide mats, but you're welcome to bring your own.",
        "zh": "我们提供瑜伽垫，但您也可以带自己的。"
      },
      {
        "role": "Instructor",
        "en": "Let's begin. Inhale deeply and raise your arms above your head.",
        "zh": "让我们开始吧。深吸气，将手臂举过头顶。"
      },
      {
        "role": "Student",
        "en": "I'm not very flexible. Is that okay?",
        "zh": "我不是很有柔韧性。没关系吗？"
      },
      {
        "role": "Instructor",
        "en": "That's perfectly fine. Just do what feels comfortable for you.",
        "zh": "完全没关系。只要做您觉得舒服的动作就好。"
      },
      {
        "role": "Instructor",
        "en": "Now exhale and fold forward. Don't push yourself too hard.",
        "zh": "现在呼气，身体向前弯。不要勉强自己。"
      },
      {
        "role": "Student",
        "en": "This feels really relaxing. Thank you for the guidance.",
        "zh": "这感觉很放松。谢谢您的指导。"
      }
    ]
  },
  {
    "id": 274,
    "category": "services",
    "title": "Hair Dyeing 理发店烫染",
    "scene": "在理发店染发",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Customer",
      "Stylist"
    ],
    "lines": [
      {
        "role": "Stylist",
        "en": "Hi! What are we doing with your hair today?",
        "zh": "嗨！今天想怎么弄头发？"
      },
      {
        "role": "Customer",
        "en": "I want to dye my hair a lighter brown. Can you help me choose a shade?",
        "zh": "我想把头发染成浅棕色。你能帮我选一个色号吗？"
      },
      {
        "role": "Stylist",
        "en": "Sure. Based on your skin tone, this warm caramel brown would look great.",
        "zh": "当然。根据您的肤色，这个暖焦糖棕色会很好看。"
      },
      {
        "role": "Customer",
        "en": "I like that color. Will I need to bleach my hair first?",
        "zh": "我喜欢那个颜色。需要先漂发吗？"
      },
      {
        "role": "Stylist",
        "en": "Not necessarily. Your natural color is light enough already.",
        "zh": "不一定。您的自然发色已经够浅了。"
      },
      {
        "role": "Customer",
        "en": "Great. How long will the whole process take?",
        "zh": "太好了。整个过程需要多长时间？"
      },
      {
        "role": "Stylist",
        "en": "About two hours including the color processing time.",
        "zh": "大约两个小时，包括上色处理时间。"
      },
      {
        "role": "Customer",
        "en": "Will the color fade quickly?",
        "zh": "颜色会很快褪色吗？"
      },
      {
        "role": "Stylist",
        "en": "It should last about six to eight weeks with proper care.",
        "zh": "如果护理得当，应该能保持六到八周。"
      },
      {
        "role": "Customer",
        "en": "Okay, let's go ahead. I'm excited to see the result.",
        "zh": "好的，我们开始吧。我很期待看到效果。"
      }
    ]
  },
  {
    "id": 275,
    "category": "services",
    "title": "Dry Cleaning 干洗店",
    "scene": "在干洗店送洗衣服",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Customer",
      "Shopkeeper"
    ],
    "lines": [
      {
        "role": "Shopkeeper",
        "en": "Good morning. How can I help you today?",
        "zh": "早上好。今天有什么可以帮您的？"
      },
      {
        "role": "Customer",
        "en": "I have a few items that need dry cleaning.",
        "zh": "我有几件衣服需要干洗。"
      },
      {
        "role": "Shopkeeper",
        "en": "No problem. Let me take a look at them.",
        "zh": "没问题。让我看一下。"
      },
      {
        "role": "Customer",
        "en": "This is a wool coat, and these are two silk blouses.",
        "zh": "这是一件羊毛大衣，这两件是丝绸衬衫。"
      },
      {
        "role": "Shopkeeper",
        "en": "I see. Do you have any stains you want me to pay special attention to?",
        "zh": "明白了。有没有什么污渍需要我特别注意的？"
      },
      {
        "role": "Customer",
        "en": "Yes, there's a coffee stain on the sleeve of the coat.",
        "zh": "有的，大衣袖子上有一个咖啡渍。"
      },
      {
        "role": "Shopkeeper",
        "en": "I'll make a note of that. We'll do our best to remove it.",
        "zh": "我会记下来。我们会尽力去除的。"
      },
      {
        "role": "Customer",
        "en": "When can I pick them up?",
        "zh": "我什么时候可以来取？"
      },
      {
        "role": "Shopkeeper",
        "en": "They'll be ready by Thursday after three o'clock.",
        "zh": "周四下午三点以后就可以来取了。"
      },
      {
        "role": "Customer",
        "en": "Perfect. Thank you very much.",
        "zh": "太好了。非常感谢。"
      }
    ]
  },
  {
    "id": 276,
    "category": "services",
    "title": "Phone Repair 修手机",
    "scene": "在手机维修店修理手机",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Customer",
      "Repairman"
    ],
    "lines": [
      {
        "role": "Repairman",
        "en": "Hi. What seems to be the problem with your phone?",
        "zh": "嗨。您的手机出了什么问题？"
      },
      {
        "role": "Customer",
        "en": "The screen is cracked and the battery dies really fast.",
        "zh": "屏幕裂了，而且电池耗电很快。"
      },
      {
        "role": "Repairman",
        "en": "Let me take a quick look at it.",
        "zh": "让我快速检查一下。"
      },
      {
        "role": "Repairman",
        "en": "Yes, the screen is badly damaged. The battery is also worn out.",
        "zh": "是的，屏幕损坏很严重。电池也老化了。"
      },
      {
        "role": "Customer",
        "en": "How much will it cost to replace both?",
        "zh": "两样都换要多少钱？"
      },
      {
        "role": "Repairman",
        "en": "The screen replacement is eighty dollars and the battery is forty.",
        "zh": "换屏幕八十美元，换电池四十美元。"
      },
      {
        "role": "Customer",
        "en": "That's reasonable. How long will the repair take?",
        "zh": "价格还可以。修好多长时间？"
      },
      {
        "role": "Repairman",
        "en": "I can have it ready for you in about an hour.",
        "zh": "大约一个小时后就能修好。"
      },
      {
        "role": "Customer",
        "en": "Great. Will you back up my data first?",
        "zh": "好的。您会先备份我的数据吗？"
      },
      {
        "role": "Repairman",
        "en": "Yes, we always back up data before doing any repairs.",
        "zh": "是的，我们在维修前都会备份数据的。"
      }
    ]
  },
  {
    "id": 277,
    "category": "services",
    "title": "Getting Glasses 配眼镜",
    "scene": "在眼镜店配眼镜",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Customer",
      "Optician"
    ],
    "lines": [
      {
        "role": "Optician",
        "en": "Welcome. Are you here for an eye exam or to pick out glasses?",
        "zh": "欢迎。您是来验光还是来挑眼镜的？"
      },
      {
        "role": "Customer",
        "en": "Both, actually. I think I need a stronger prescription.",
        "zh": "两者都需要。我觉得我需要更高度数的镜片。"
      },
      {
        "role": "Optician",
        "en": "Let's start with the eye exam then. Please read the letters on the chart.",
        "zh": "那我们先验光吧。请读出视力表上的字母。"
      },
      {
        "role": "Customer",
        "en": "E, F, P, T... They're getting a bit blurry now.",
        "zh": "E、F、P、T……后面的有点模糊了。"
      },
      {
        "role": "Optician",
        "en": "Thank you. Your prescription has changed slightly. Let's look at some frames.",
        "zh": "谢谢。您的度数有轻微变化。我们来挑一下镜框吧。"
      },
      {
        "role": "Customer",
        "en": "I prefer lightweight frames. What do you recommend?",
        "zh": "我喜欢轻一点的镜框。您有什么推荐？"
      },
      {
        "role": "Optician",
        "en": "These titanium frames are very light and durable.",
        "zh": "这些钛合金镜框很轻而且很耐用。"
      },
      {
        "role": "Customer",
        "en": "They look nice. Can I try them on?",
        "zh": "看起来不错。我可以试戴一下吗？"
      },
      {
        "role": "Optician",
        "en": "Of course. They suit your face shape very well.",
        "zh": "当然可以。它们很适合您的脸型。"
      },
      {
        "role": "Customer",
        "en": "I'll take these. When will they be ready?",
        "zh": "我就要这副了。什么时候能做好？"
      }
    ]
  },
  {
    "id": 278,
    "category": "services",
    "title": "Photo Studio 照相馆",
    "scene": "在照相馆拍证件照",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Customer",
      "Photographer"
    ],
    "lines": [
      {
        "role": "Photographer",
        "en": "Hi there. What kind of photos do you need today?",
        "zh": "嗨。今天您需要什么类型的照片？"
      },
      {
        "role": "Customer",
        "en": "I need passport photos for my visa application.",
        "zh": "我需要签证申请的护照照片。"
      },
      {
        "role": "Photographer",
        "en": "Got it. What size do you need?",
        "zh": "明白了。您需要什么尺寸？"
      },
      {
        "role": "Customer",
        "en": "Two by two inches with a white background.",
        "zh": "两英寸乘两英寸，白色背景。"
      },
      {
        "role": "Photographer",
        "en": "No problem. Please stand here and face the camera.",
        "zh": "没问题。请站在这里，面向相机。"
      },
      {
        "role": "Customer",
        "en": "Should I smile or keep a neutral expression?",
        "zh": "我应该微笑还是保持中性表情？"
      },
      {
        "role": "Photographer",
        "en": "For passport photos, a neutral expression is usually required.",
        "zh": "护照照片通常需要中性表情。"
      },
      {
        "role": "Photographer",
        "en": "Ready? One, two, three. Great shot!",
        "zh": "准备好了吗？一、二、三。拍得不错！"
      },
      {
        "role": "Customer",
        "en": "Can I see how it turned out?",
        "zh": "我能看看效果吗？"
      },
      {
        "role": "Photographer",
        "en": "Sure. Here it is. If you like it, I'll print four copies for you.",
        "zh": "当然。这是照片。如果您满意，我给您打印四张。"
      }
    ]
  },
  {
    "id": 279,
    "category": "services",
    "title": "Driving School 驾校报名",
    "scene": "在驾校报名学开车",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Student",
      "Instructor"
    ],
    "lines": [
      {
        "role": "Instructor",
        "en": "Good afternoon. Are you here to sign up for driving lessons?",
        "zh": "下午好。您是来报名学开车的吗？"
      },
      {
        "role": "Student",
        "en": "Yes, I've never driven before and I want to get my license.",
        "zh": "是的，我以前从没开过车，想考驾照。"
      },
      {
        "role": "Instructor",
        "en": "Great. We offer packages with ten, fifteen, or twenty lessons.",
        "zh": "太好了。我们有十节、十五节和二十节课的套餐。"
      },
      {
        "role": "Student",
        "en": "How much is the fifteen-lesson package?",
        "zh": "十五节课的套餐多少钱？"
      },
      {
        "role": "Instructor",
        "en": "It's four hundred and fifty dollars, including the road test fee.",
        "zh": "四百五十美元，包含路考费用。"
      },
      {
        "role": "Student",
        "en": "That sounds good. How long does the whole course take?",
        "zh": "听起来不错。整个课程需要多长时间？"
      },
      {
        "role": "Instructor",
        "en": "Most students finish in about six to eight weeks.",
        "zh": "大多数学生在六到八周内完成。"
      },
      {
        "role": "Student",
        "en": "Can I choose my lesson schedule?",
        "zh": "我可以选择上课时间吗？"
      },
      {
        "role": "Instructor",
        "en": "Yes, we offer flexible scheduling on weekdays and weekends.",
        "zh": "可以，我们工作日和周末都有灵活的时间安排。"
      },
      {
        "role": "Student",
        "en": "Perfect. I'd like to sign up for the fifteen-lesson package.",
        "zh": "太好了。我要报十五节课的套餐。"
      }
    ]
  },
  {
    "id": 280,
    "category": "services",
    "title": "Exam Registration 报名考试",
    "scene": "在考试中心报名参加考试",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Student",
      "Staff"
    ],
    "lines": [
      {
        "role": "Staff",
        "en": "Hello. How can I help you today?",
        "zh": "您好。今天有什么可以帮您的？"
      },
      {
        "role": "Student",
        "en": "I'd like to register for the TOEFL exam next month.",
        "zh": "我想报名参加下个月的托福考试。"
      },
      {
        "role": "Staff",
        "en": "Certainly. Do you have an account on the registration website?",
        "zh": "好的。您在报名网站上有账号吗？"
      },
      {
        "role": "Student",
        "en": "Yes, I created one last week.",
        "zh": "有的，我上周注册了一个。"
      },
      {
        "role": "Staff",
        "en": "Good. Please log in and select your preferred test date and location.",
        "zh": "好的。请登录并选择您偏好的考试日期和地点。"
      },
      {
        "role": "Student",
        "en": "I'd like to take it on October 15th at the downtown center.",
        "zh": "我想在十月十五号市中心考点考。"
      },
      {
        "role": "Staff",
        "en": "Let me check availability. Yes, that date is open.",
        "zh": "让我查一下是否有名额。是的，那个日期还有名额。"
      },
      {
        "role": "Student",
        "en": "How much is the registration fee?",
        "zh": "报名费是多少？"
      },
      {
        "role": "Staff",
        "en": "The fee is two hundred and thirty-five dollars.",
        "zh": "费用是二百三十五美元。"
      },
      {
        "role": "Student",
        "en": "Here's the payment. Thank you for your help.",
        "zh": "这是费用。谢谢您的帮助。"
      }
    ]
  },
  {
    "id": 281,
    "category": "services",
    "title": "Volunteering 志愿者服务",
    "scene": "在社区服务中心报名参加志愿者",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Volunteer",
      "Coordinator"
    ],
    "lines": [
      {
        "role": "Coordinator",
        "en": "Hi! Thanks for coming in. Are you interested in volunteering?",
        "zh": "嗨！感谢您过来。您对志愿服务感兴趣吗？"
      },
      {
        "role": "Volunteer",
        "en": "Yes, I'd love to help out in my free time.",
        "zh": "是的，我想在空闲时间帮忙。"
      },
      {
        "role": "Coordinator",
        "en": "That's wonderful. What kind of work are you interested in?",
        "zh": "太棒了。您对什么类型的工作感兴趣？"
      },
      {
        "role": "Volunteer",
        "en": "I'm good with kids, so maybe something at the after-school program.",
        "zh": "我擅长和孩子相处，所以也许可以在课后活动项目中帮忙。"
      },
      {
        "role": "Coordinator",
        "en": "Perfect timing. We need tutors for homework help every Tuesday.",
        "zh": "时机正好。我们每周二需要辅导作业的志愿者。"
      },
      {
        "role": "Volunteer",
        "en": "Tuesday works for me. What time should I be there?",
        "zh": "周二我可以。我应该几点到？"
      },
      {
        "role": "Coordinator",
        "en": "From four to six in the afternoon. We provide training too.",
        "zh": "下午四点到六点。我们也会提供培训。"
      },
      {
        "role": "Volunteer",
        "en": "Great. Do I need to fill out an application form?",
        "zh": "太好了。我需要填写申请表吗？"
      },
      {
        "role": "Coordinator",
        "en": "Yes, please. We also need to run a quick background check.",
        "zh": "是的，请填一下。我们还需要做一个简单的背景调查。"
      },
      {
        "role": "Volunteer",
        "en": "No problem. I'm excited to get started!",
        "zh": "没问题。我很期待开始！"
      }
    ]
  },
  {
    "id": 282,
    "category": "services",
    "title": "Blood Donation 献血",
    "scene": "在献血中心献血",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Donor",
      "Nurse"
    ],
    "lines": [
      {
        "role": "Nurse",
        "en": "Welcome! Is this your first time donating blood?",
        "zh": "欢迎！这是您第一次献血吗？"
      },
      {
        "role": "Donor",
        "en": "Yes, it is. I'm a little nervous.",
        "zh": "是的。我有点紧张。"
      },
      {
        "role": "Nurse",
        "en": "Don't worry. The process is quick and safe. Please have a seat.",
        "zh": "别担心。过程很快也很安全。请坐。"
      },
      {
        "role": "Nurse",
        "en": "I need to ask you some health questions first.",
        "zh": "我需要先问您一些健康问题。"
      },
      {
        "role": "Donor",
        "en": "Sure, go ahead.",
        "zh": "好的，请说。"
      },
      {
        "role": "Nurse",
        "en": "Have you eaten today? It's important not to donate on an empty stomach.",
        "zh": "您今天吃东西了吗？空腹献血是不行的。"
      },
      {
        "role": "Donor",
        "en": "Yes, I had breakfast about two hours ago.",
        "zh": "吃了，大约两小时前吃的早餐。"
      },
      {
        "role": "Nurse",
        "en": "Perfect. Please roll up your sleeve. You'll feel a small pinch.",
        "zh": "很好。请卷起袖子。您会感觉到轻微的刺痛。"
      },
      {
        "role": "Donor",
        "en": "That wasn't too bad. How long does the donation take?",
        "zh": "没那么疼。献血需要多长时间？"
      },
      {
        "role": "Nurse",
        "en": "About ten minutes. You're doing great. Thank you for saving lives!",
        "zh": "大约十分钟。您做得很好。感谢您拯救生命！"
      }
    ]
  },
  {
    "id": 283,
    "category": "services",
    "title": "Overdue Library Book 图书馆逾期还书",
    "scene": "在图书馆归还逾期书籍",
    "difficulty": "简单",
    "duration": "2分钟",
    "roles": [
      "Student",
      "Librarian"
    ],
    "lines": [
      {
        "role": "Librarian",
        "en": "Hi. How can I help you today?",
        "zh": "嗨。今天有什么可以帮您的？"
      },
      {
        "role": "Student",
        "en": "I need to return these books. I'm afraid they're overdue.",
        "zh": "我需要还这几本书。恐怕已经逾期了。"
      },
      {
        "role": "Librarian",
        "en": "Let me check. Yes, they were due back five days ago.",
        "zh": "让我查一下。是的，它们五天前就到期了。"
      },
      {
        "role": "Student",
        "en": "I'm really sorry. I had exams and completely forgot.",
        "zh": "非常抱歉。我在考试，完全忘了。"
      },
      {
        "role": "Librarian",
        "en": "It's okay. We charge fifty cents per day for each overdue book.",
        "zh": "没关系。每本逾期书籍我们每天收五十美分。"
      },
      {
        "role": "Student",
        "en": "So that would be five dollars in total?",
        "zh": "所以总共是五美元？"
      },
      {
        "role": "Librarian",
        "en": "That's correct. You can pay at the front desk.",
        "zh": "对的。您可以在前台付款。"
      },
      {
        "role": "Student",
        "en": "Here's the money. Will this affect my borrowing privileges?",
        "zh": "这是钱。这会影响我的借书权限吗？"
      },
      {
        "role": "Librarian",
        "en": "No, not this time. But please try to return books on time in the future.",
        "zh": "不会，这次不会。但以后请尽量按时还书。"
      },
      {
        "role": "Student",
        "en": "I will. Thank you for your understanding.",
        "zh": "我会的。谢谢您的理解。"
      }
    ]
  }
];

// 本地存储工具函数
const Storage = {
  getFavorites() {
    const data = localStorage.getItem('dialogue_favorites');
    return data ? JSON.parse(data) : [];
  },
  addFavorite(id) {
    const favorites = this.getFavorites();
    if (!favorites.includes(id)) {
      favorites.push(id);
      localStorage.setItem('dialogue_favorites', JSON.stringify(favorites));
    }
  },
  removeFavorite(id) {
    const favorites = this.getFavorites().filter(f => f !== id);
    localStorage.setItem('dialogue_favorites', JSON.stringify(favorites));
  },
  isFavorite(id) {
    return this.getFavorites().includes(id);
  },
  getProgress(id) {
    const data = localStorage.getItem('dialogue_progress_' + id);
    return data ? JSON.parse(data) : { currentLine: 0, completed: false };
  },
  saveProgress(id, progress) {
    localStorage.setItem('dialogue_progress_' + id, JSON.stringify(progress));
  },
  // 已完成标记
  getCompleted() {
    const data = localStorage.getItem('dialogue_completed');
    return data ? JSON.parse(data) : [];
  },
  setCompleted(id) {
    const completed = this.getCompleted();
    if (!completed.includes(id)) {
      completed.push(id);
      localStorage.setItem('dialogue_completed', JSON.stringify(completed));
    }
    // 同步更新 progress
    const progress = this.getProgress(id);
    progress.completed = true;
    this.saveProgress(id, progress);
  },
  unsetCompleted(id) {
    const completed = this.getCompleted().filter(c => c !== id);
    localStorage.setItem('dialogue_completed', JSON.stringify(completed));
    // 同步更新 progress
    const progress = this.getProgress(id);
    progress.completed = false;
    this.saveProgress(id, progress);
  },
  isCompleted(id) {
    return this.getCompleted().includes(id);
  }
};


