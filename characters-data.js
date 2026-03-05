// Complete characters data from the full table
const allCharacters = [
    // 核心人物与家人 (8人)
    { id: "01", category: "核心", name: "梅诺基奥", nameIt: "Domenico Scandella", role: "磨坊主、木匠", desc: "本书主人公，因其独特的宇宙起源论和对教会的批判两次受审，最终被处火刑", chapter: "全书", isMain: true },
    { id: "02", category: "核心", name: "朱安内", nameIt: "Zuane", role: "磨坊主", desc: "梅诺基奥之父", chapter: "第1章" },
    { id: "03", category: "核心", name: "梅内加", nameIt: "Menega", role: "-", desc: "梅诺基奥之母", chapter: "第1章" },
    { id: "04", category: "核心", name: "齐安诺托", nameIt: "Ziannuto Scandella", role: "-", desc: "梅诺基奥之子，在梅第一次受审期间四处奔走救父，后在梅二次受审前去世", chapter: "第4,5,47,56章" },
    { id: "05", category: "核心", name: "斯特凡诺", nameIt: "Stefano Scandella", role: "-", desc: "梅诺基奥之子，曾与父合租磨坊", chapter: "第48,62章" },
    { id: "06", category: "核心", name: "焦万娜", nameIt: "Giovanna Scandella", role: "-", desc: "梅诺基奥之女，嫁妆公证文件是确定梅诺基奥死期的重要证据", chapter: "第1,62章" },
    { id: "07", category: "核心", name: "巴斯蒂安", nameIt: "Bastian Scandella", role: "-", desc: "梅诺基奥堂兄弟，曾借书给梅诺基奥", chapter: "第13,34章" },
    { id: "08", category: "核心", name: "多梅尼科·格尔巴", nameIt: "Domenico Gerbas", role: "-", desc: "梅诺基奥叔父，曾借给梅诺基奥《圣经》和《圣人传奇》", chapter: "第13章" },
    
    // 宗教法庭、教会官员与司法人员 (13人)
    { id: "09", category: "宗教权威", name: "詹巴蒂斯塔·马罗", nameIt: "Giambattista Maro", role: "副庭长、咏祷司铎", desc: "第一次审判的主要讯问者，试图用神学逻辑指出梅诺基奥言论的矛盾", chapter: "第1,3,35章", isCard: true },
    { id: "10", category: "宗教权威", name: "费利切·达·蒙特法尔科", nameIt: "Felice da Montefalco", role: "宗教法庭庭长", desc: "签署逮捕令并主持了对梅诺基奥的多次审讯", chapter: "第2,5章", isCard: true },
    { id: "11", category: "宗教权威", name: "杰罗拉莫·阿斯泰奥", nameIt: "Gerolamo Asteo", role: "审判官、庭长", desc: "主持了对梅诺基奥的第二次审判，态度严厉，对其进行了刑讯", chapter: "第23,49,51,52章", isCard: true },
    { id: "12", category: "宗教权威", name: "奥多里科·乌莱", nameIt: "Odorico Vorai", role: "教区神父", desc: "最初的匿名告发者，曾追求梅的女儿遭拒，后被梅的亲属赶走", chapter: "第1,2,49章", isCard: true },
    { id: "13", category: "宗教权威", name: "乔瓦尼·达尼埃莱·梅尔基奥里", nameIt: "Giovanni Daniele Melchiori", role: "教区神父", desc: "梅的童年好友，曾有异端嫌疑，后接任蒙特雷阿莱神父并为梅提供协助", chapter: "第2,37,48,55章" },
    { id: "14", category: "宗教权威", name: "马泰奥·萨努多", nameIt: "Matteo Sanudo", role: "康科迪亚主教", desc: "曾视察蒙特雷阿莱，发现梅诺基奥欠下教区债务", chapter: "第47,48章" },
    { id: "15", category: "宗教权威", name: "朱利奥·安东尼奥·桑托罗", nameIt: "Giulio Antonio Santoro", role: "圣塞韦里纳红衣主教", desc: "教廷最高宗教法庭资深成员，多次写信督促严办并处决梅诺基奥", chapter: "第62章", isCard: true },
    { id: "16", category: "宗教权威", name: "克莱门特八世", nameIt: "Clement VIII", role: "教皇", desc: "亲自介入此案，在第二次审判末期要求对梅处以死刑", chapter: "第62章" },
    { id: "17", category: "宗教权威", name: "阿戈斯蒂诺·皮塞西", nameIt: "Agostino Pisensi", role: "法庭委任律师", desc: "在第二次审判中为梅诺基奥进行辩护，主张其行为源于愚昧无知", chapter: "第56章" },
    { id: "18", category: "宗教权威", name: "库尔齐奥·切利纳", nameIt: "Curzio Cellina", role: "书记员、神父", desc: "证人，在第二次审判中提到梅诺基奥经常不穿忏悔服并发表古怪言论", chapter: "第45,49章" },
    { id: "19", category: "宗教权威", name: "瓦莱里奥·特拉波拉", nameIt: "Valerio Trapola", role: "副主教", desc: "参与了对梅诺基奥的第二次审判", chapter: "第51章" },
    { id: "20", category: "宗教权威", name: "弗劳·安德里亚", nameIt: "Fra Andrea", role: "宗教法庭特派员", desc: "参与了早期对梅诺基奥的取证", chapter: "第5章" },
    
    // 证人、村民与当地人物 (15人)
    { id: "21", category: "证人", name: "弗朗切斯科·法塞塔", nameIt: "Francesco Fasseta", role: "村民、亲戚", desc: "证人，称梅诺基奥总爱争论信仰，并同去威尼斯", chapter: "第1,2,19章" },
    { id: "22", category: "证人", name: "多梅尼科·梅尔基奥里", nameIt: "Domenico Melchiori", role: "鞋匠", desc: "证人，曾劝梅诺基奥不要讨论他不理解的学问", chapter: "第1,2章" },
    { id: "23", category: "证人", name: "朱利亚诺·斯特凡努特", nameIt: "Giuliano Stefanut", role: "村民", desc: "曾多次劝阻梅诺基奥，但在法庭上承认自己'挺喜欢他'", chapter: "第1,2,4章" },
    { id: "24", category: "证人", name: "安德里亚·比奥尼马", nameIt: "Andrea Bionima", role: "教士", desc: "证人，曾借书给梅诺基奥，记录了梅关于'面团'的亵渎言论", chapter: "第2,6,20章" },
    { id: "25", category: "证人", name: "乔瓦尼·波沃莱多", nameIt: "Giovanni Povoledo", role: "村民", desc: "证人，将梅诺基奥定性为'路德教派'，并复述了其'奶酪'比喻", chapter: "第2,25章" },
    { id: "26", category: "证人", name: "梅尔基奥雷·格尔巴斯", nameIt: "Melchiorre Gerbas", role: "木匠", desc: "梅诺基奥唯一的追随者，因重复梅的异端言论受审", chapter: "第13,41章", isCard: true },
    { id: "27", category: "证人", name: "卢纳尔多·西门", nameIt: "Lunardo Simon", role: "乐师", desc: "在乌迪内广场与梅谈话并将其告发，两人都曾于节日演奏乐器", chapter: "第49,50章" },
    { id: "28", category: "证人", name: "西门(犹太人)", nameIt: "Simon the Jew", role: "皈依者", desc: "曾与梅诺基奥彻夜长谈，提到梅读过一本'最美好的书'（古兰经）", chapter: "第9,50章" },
    { id: "29", category: "证人", name: "米歇尔·德尔·图尔科", nameIt: "Michele del Turco", role: "旅店老板", desc: "称梅诺基奥的观点比异教徒还坏，多次听闻其亵渎言论", chapter: "第51章" },
    { id: "30", category: "证人", name: "丹尼尔·伊阿科梅尔", nameIt: "Daniel Iacomel", role: "村民", desc: "梅诺基奥曾问他'你觉得上帝是什么'，并得到梅的否定性回答", chapter: "第28,51章" },
    { id: "31", category: "证人", name: "焦万·弗朗切斯科", nameIt: "Giovanni Francesco", role: "当地伯爵、领主", desc: "梅诺基奥曾试图说服他关于信仰平等的三只戒指理论", chapter: "第48,57,59章" },
    { id: "32", category: "证人", name: "亚历山德罗·波利切雷托", nameIt: "Alessandro Policreto", role: "律师", desc: "曾建议梅诺基奥向宗教法庭自首", chapter: "第2,59章" },
    { id: "33", category: "证人", name: "焦万·巴蒂斯塔·德·帕尔维", nameIt: "Giovan Battista de Palvi", role: "监狱看守", desc: "证实梅诺基奥在狱中表现良好，并常暗中听其祷告", chapter: "前言,第47章" },
    { id: "34", category: "证人", name: "达尼埃尔·法塞塔", nameIt: "Daniele Fassetta", role: "村民", desc: "证人，称梅诺基奥曾说'空气是上帝'", chapter: "第2,5章" },
    { id: "35", category: "证人", name: "安东尼奥·法塞塔", nameIt: "Antonio Fassetta", role: "村民", desc: "曾与梅一同上山，梅称皇后比圣母大", chapter: "第2章注释" },
    
    // 书籍作者、思想家及历史人物 (18人)
    { id: "36", category: "思想家", name: "尼古拉·达·波尔恰", nameIt: "Nicola da Porcia", role: "画家、异端分子", desc: "梅诺基奥的'思想导师'之一，借给他《十日谈》等禁书", chapter: "第10,23章", isCard: true },
    { id: "37", category: "思想家", name: "约翰·曼德维尔", nameIt: "John Mandeville", role: "旅行家/作者", desc: "其《游记》极大扩展了梅的相对主义视野，让梅'深受困扰'", chapter: "第20,21章" },
    { id: "38", category: "思想家", name: "薄伽丘", nameIt: "Giovanni Boccaccio", role: "作家", desc: "《十日谈》作者。其'三只戒指'的故事是梅诺基奥宽容理论的来源", chapter: "第23章" },
    { id: "39", category: "思想家", name: "马丁·路德", nameIt: "Martin Luther", role: "宗教改革领袖", desc: "梅被视为其追随者，福雷斯蒂编年史中对其评价影响了梅", chapter: "第9,40章" },
    { id: "40", category: "思想家", name: "米格尔·塞尔维特", nameIt: "Michael Servetus", role: "医生、异端", desc: "梅关于'圣灵即上帝之气'的观点与他的论著惊人相似", chapter: "第32章" },
    { id: "41", category: "思想家", name: "斯科利奥", nameIt: "Scolio", role: "农民、诗人", desc: "卢卡地区异端，著有《七年纪》，其观点与梅具有共同的大众文化根基", chapter: "第58章" },
    { id: "42", category: "思想家", name: "皮吉诺", nameIt: "Pellegrino Baroni", role: "磨坊主、异端", desc: "萨维尼亚诺磨坊主，观点与梅高度重合，是另一位'梅诺基奥'", chapter: "第59,60章", isCard: true },
    { id: "43", category: "思想家", name: "卡米洛·雷纳托", nameIt: "Camillo Renato", role: "异端分子", desc: "'灵魂长眠论'传播者，其理论通过梅尔基奥里间接影响了梅", chapter: "第37,60章" },
    { id: "44", category: "思想家", name: "蓬波纳齐", nameIt: "Pietro Pomponazzi", role: "哲学家", desc: "帕多瓦大学教授，探讨灵魂不死问题，其思想间接渗入大众阶层", chapter: "第37,59章" },
    { id: "45", category: "思想家", name: "但丁", nameIt: "Dante Alighieri", role: "诗人", desc: "《神曲》作者，梅诺基奥宇宙论中可能潜伏着他的诗句回响", chapter: "第27,58章" },
    { id: "46", category: "思想家", name: "雅各布·达·沃拉吉纳", nameIt: "Jacobus de Voragine", role: "主教、作家", desc: "《黄金传奇》作者，梅阅读并扭曲了其中圣母葬礼的故事", chapter: "第12,17章" },
    { id: "47", category: "思想家", name: "阿基莱·博基", nameIt: "Achille Bocchi", role: "人文主义者", desc: "其寓意画集中出现了与梅诺基奥相似的亵渎双关语", chapter: "第51章" },
    { id: "48", category: "思想家", name: "福雷斯蒂", nameIt: "Jacopo Foresti", role: "编年史家", desc: "《编年史增补》作者，梅从中了解了路德和古代哲学家", chapter: "第25,40,52章" },
    { id: "49", category: "思想家", name: "阿威罗伊", nameIt: "Averroes", role: "哲学家", desc: "其关于灵魂与主动知识的理论是该时代异端思想的历史背景", chapter: "第37,60章" },
    { id: "50", category: "思想家", name: "穆罕默德", nameIt: "Mohammed", role: "先知", desc: "《古兰经》相关人物。梅诺基奥对其法律和天堂观感兴趣", chapter: "第20,58章" },
    { id: "51", category: "思想家", name: "亚历山德罗·卡拉维亚", nameIt: "Alessandro Caravia", role: "珠宝匠", desc: "《卡拉维亚之梦》作者，书中通过小丑讽刺教会腐败", chapter: "第10章" },
    { id: "52", category: "思想家", name: "赞博洛", nameIt: "Zanpolo", role: "小丑", desc: "卡拉维亚书中的主人公，其在地狱的经历被梅诺基奥牢记", chapter: "第10章" },
    { id: "53", category: "思想家", name: "吉罗拉莫·加拉泰奥", nameIt: "Girolamo Galateo", role: "隐修士", desc: "传播灵魂沉眠学说的异端", chapter: "第37章" },
    { id: "54", category: "思想家", name: "安东尼奥·斯科蒂拉罗", nameIt: "Antonio Scottilaro", role: "异端分子", desc: "费利切审判官信件中真正指代的人物，梅诺基奥常与其混淆", chapter: "前言,第62章" }
];

// Bible figures and scholars data can be added similarly
