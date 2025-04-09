const tariffData = {
    "chn": {  // 使用ISO 3166-1 alpha-3国家代码
        "name": "中国",
        "englishName": "China",
        "tariffRate": 104,
        "effectiveDate": "2024年5月14日",
        "affectedCompanies": [
            {
                "name": "苹果",
                "ticker": "AAPL",
                "reason": "供应链高度集中在中国"
            },
            {
                "name": "特斯拉",
                "ticker": "TSLA",
                "reason": "零部件进口和潜在的中国报复措施"
            },
            {
                "name": "星巴克",
                "ticker": "SBUX",
                "reason": "在中国有大量市场业务"
            }
        ]
    },
    "vnm": {
        "name": "越南",
        "englishName": "Vietnam",
        "tariffRate": 46,
        "effectiveDate": "2025年4月9日",
        "affectedCompanies": [
            {
                "name": "耐克",
                "ticker": "NKE",
                "reason": "主要鞋类制造业务"
            },
            {
                "name": "斯凯奇",
                "ticker": "SKX",
                "reason": "大量鞋类生产"
            },
            {
                "name": "英特尔",
                "ticker": "INTC",
                "reason": "不断增长的半导体组装业务"
            }
        ]
    },
    "khm": {
        "name": "柬埔寨",
        "englishName": "Cambodia",
        "tariffRate": 49,
        "effectiveDate": "2025年4月9日",
        "affectedCompanies": [
            {
                "name": "盖普",
                "ticker": "GPS",
                "reason": "服装采购和制造"
            },
            {
                "name": "威富集团",
                "ticker": "VFC",
                "reason": "纺织品和服装生产"
            }
        ]
    },
    "twn": {
        "name": "台湾",
        "englishName": "Taiwan",
        "tariffRate": 32,
        "effectiveDate": "2025年4月9日",
        "affectedCompanies": [
            {
                "name": "英伟达",
                "ticker": "NVDA",
                "reason": "依赖台积电进行半导体制造"
            },
            {
                "name": "AMD",
                "ticker": "AMD",
                "reason": "半导体设计和制造依赖"
            },
            {
                "name": "高通",
                "ticker": "QCOM",
                "reason": "移动芯片制造的关键供应商"
            }
        ]
    },
    "tha": {
        "name": "泰国",
        "englishName": "Thailand",
        "tariffRate": 36,
        "effectiveDate": "2025年4月9日",
        "affectedCompanies": [
            {
                "name": "西部数据",
                "ticker": "WDC",
                "reason": "硬盘制造业务"
            },
            {
                "name": "希捷",
                "ticker": "STX",
                "reason": "存储设备生产设施"
            }
        ]
    },
    "jpn": {
        "name": "日本",
        "englishName": "Japan",
        "tariffRate": 24,
        "effectiveDate": "2025年4月9日",
        "affectedCompanies": [
            {
                "name": "丰田",
                "ticker": "TM",
                "reason": "向美国市场出口车辆"
            },
            {
                "name": "本田",
                "ticker": "HMC",
                "reason": "汽车和摩托车出口"
            },
            {
                "name": "索尼",
                "ticker": "SONY",
                "reason": "消费电子和游戏硬件"
            }
        ]
    },
    "deu": {
        "name": "德国",
        "englishName": "Germany",
        "tariffRate": 20,
        "effectiveDate": "2025年4月9日",
        "affectedCompanies": [
            {
                "name": "路威酩轩",
                "ticker": "LVMUY",
                "reason": "奢侈品出口至美国"
            },
            {
                "name": "宝马",
                "ticker": "BMWYY",
                "reason": "欧盟生产的汽车出口"
            },
            {
                "name": "大众",
                "ticker": "VWAGY",
                "reason": "向美国市场出口车辆"
            }
        ]
    },
    "fra": {
        "name": "法国",
        "englishName": "France",
        "tariffRate": 20,
        "effectiveDate": "2025年4月9日",
        "affectedCompanies": [
            {
                "name": "路威酩轩",
                "ticker": "LVMUY",
                "reason": "奢侈品出口至美国"
            },
            {
                "name": "开云集团",
                "ticker": "PPRUY",
                "reason": "时尚和奢侈品出口"
            },
            {
                "name": "空中客车",
                "ticker": "EADSY",
                "reason": "飞机和航空航天组件"
            }
        ]
    },
    "ita": {
        "name": "意大利",
        "englishName": "Italy",
        "tariffRate": 20,
        "effectiveDate": "2025年4月9日",
        "affectedCompanies": [
            {
                "name": "法拉利",
                "ticker": "RACE",
                "reason": "豪华车辆出口"
            },
            {
                "name": "普拉达",
                "ticker": "PRDSY",
                "reason": "时尚和配饰出口"
            }
        ]
    },
    "esp": {
        "name": "西班牙",
        "englishName": "Spain",
        "tariffRate": 20,
        "effectiveDate": "2025年4月9日",
        "affectedCompanies": [
            {
                "name": "Inditex (Zara)",
                "ticker": "IDEXY",
                "reason": "时尚零售和制造"
            }
        ]
    },
    "zaf": {
        "name": "南非",
        "englishName": "South Africa",
        "tariffRate": 30,
        "effectiveDate": "2025年4月9日"
    },
    "gbr": {
        "name": "英国",
        "englishName": "United Kingdom",
        "tariffRate": 10,
        "effectiveDate": "2025年4月5日",
        "affectedCompanies": [
            {
                "name": "葛兰素史克",
                "ticker": "GSK",
                "reason": "制药产品出口至美国"
            },
            {
                "name": "博柏利",
                "ticker": "BURBY",
                "reason": "奢侈时尚出口"
            }
        ]
    },
    "sgp": {
        "name": "新加坡",
        "englishName": "Singapore",
        "tariffRate": 10,
        "effectiveDate": "2025年4月5日",
        "affectedCompanies": [
            {
                "name": "博通",
                "ticker": "AVGO",
                "reason": "半导体业务"
            }
        ]
    },
    "bra": {
        "name": "巴西",
        "englishName": "Brazil",
        "tariffRate": 10,
        "effectiveDate": "2025年4月5日",
        "affectedCompanies": [
            {
                "name": "淡水河谷",
                "ticker": "VALE",
                "reason": "矿业和金属出口"
            },
            {
                "name": "巴西航空工业",
                "ticker": "ERJ",
                "reason": "飞机制造"
            }
        ]
    },
    "aus": {
        "name": "澳大利亚",
        "englishName": "Australia",
        "tariffRate": 10,
        "effectiveDate": "2025年4月5日",
        "affectedCompanies": [
            {
                "name": "必和必拓",
                "ticker": "BHP",
                "reason": "矿产和资源出口"
            }
        ]
    },
    "nzl": {
        "name": "新西兰",
        "englishName": "New Zealand",
        "tariffRate": 10,
        "effectiveDate": "April 5, 2025",
        "affectedCompanies": [
            {
                "name": "Fisher & Paykel Healthcare",
                "ticker": "FSPKF",
                "reason": "Medical device exports"
            }
        ]
    },
    "tur": {
        "name": "土耳其",
        "englishName": "Turkey",
        "tariffRate": 10,
        "effectiveDate": "April 5, 2025"
    },
    "col": {
        "name": "哥伦比亚",
        "englishName": "Colombia",
        "tariffRate": 10,
        "effectiveDate": "April 5, 2025",
        "affectedCompanies": [
            {
                "name": "Ecopetrol",
                "ticker": "EC",
                "reason": "Energy sector exports"
            }
        ]
    },
    "arg": {
        "name": "阿根廷",
        "englishName": "Argentina",
        "tariffRate": 10,
        "effectiveDate": "April 5, 2025",
        "affectedCompanies": [
            {
                "name": "Tenaris",
                "ticker": "TS",
                "reason": "Steel pipe manufacturing for energy sector"
            }
        ]

    },
    "mex": {
        "name": "墨西哥",
        "englishName": "Mexico",
        "tariffRate": 25,
        "effectiveDate": "Previous Orders",
        "affectedCompanies": [
            {
                "name": "Cemex",
                "ticker": "CX",
                "reason": "Building materials exports"
            },
            {
                "name": "America Movil",
                "ticker": "AMX",
                "reason": "Telecommunications services"
            }
        ]
    },
    "can": {
        "name": "加拿大",
        "englishName": "Canada",
        "tariffRate": 25,
        "effectiveDate": "Previous Orders",
        "affectedCompanies": [
            {
                "name": "Canadian National Railway",
                "ticker": "CNI",
                "reason": "Cross-border transportation services"
            },
            {
                "name": "Barrick Gold",
                "ticker": "GOLD",
                "reason": "Mining operations and exports"
            }
        ]
    },
    "sau": {
        "name": "沙特阿拉伯",
        "englishName": "Saudi Arabia",
        "tariffRate": 10,
        "effectiveDate": "April 5, 2025",
        "affectedCompanies": [
            {
                "name": "Saudi Aramco",
                "ticker": "2222.SR",
                "reason": "Oil exports and energy sector cooperation"
            }
        ]
    },
    "are": {
        "name": "阿联酋",
        "englishName": "United Arab Emirates",
        "tariffRate": 10,
        "effectiveDate": "April 5, 2025",
        "affectedCompanies": [
            {
                "name": "Emirates Global Aluminium",
                "ticker": "Private",
                "reason": "Aluminum exports"
            }
        ]
    },
    "slv":{
        "name": "萨尔瓦多",
        "englishName": "El Salvador",
        "tariffRate": 10,
        "effectiveDate": "April 5, 2025"
    },
    "kor": {
        "name": "韩国",
        "englishName": "South Korea",
        "tariffRate": 25,
        "effectiveDate": "2025年4月9日",
        "affectedCompanies": [
            {
                "name": "三星电子",
                "ticker": "SSNLF",
                "reason": "电子产品和半导体"
            },
            {
                "name": "现代汽车",
                "ticker": "HYMTF",
                "reason": "汽车出口至美国"
            },
            {
                "name": "LG电子",
                "ticker": "LGEIY",
                "reason": "家电和电子产品"
            }
        ]
    },
    "ind": {
        "name": "印度",
        "englishName": "India",
        "tariffRate": 15,
        "effectiveDate": "2025年4月9日",
        "affectedCompanies": [
            {
                "name": "塔塔集团",
                "ticker": "多个",
                "reason": "钢铁和IT服务出口"
            },
            {
                "name": "威普罗",
                "ticker": "WIT",
                "reason": "IT外包服务"
            }
        ]
    },
    "mys": {
        "name": "马来西亚",
        "englishName": "Malaysia",
        "tariffRate": 30,
        "effectiveDate": "2025年4月9日",
        "affectedCompanies": [
            {
                "name": "Top Glove",
                "ticker": "TPGVF",
                "reason": "医疗用品制造"
            }
        ]
    },
    "idn": {
        "name": "印度尼西亚",
        "englishName": "Indonesia",
        "tariffRate": 30,
        "effectiveDate": "2025年4月9日",
        "affectedCompanies": [
            {
                "name": "GOTO Group",
                "ticker": "GOTO.JK",
                "reason": "数字经济服务"
            }
        ]
    },
    "rus": {
        "name": "俄罗斯",
        "englishName": "Russia",
        "tariffRate": 45,
        "effectiveDate": "2025年4月9日",
        "affectedCompanies": [
            {
                "name": "俄罗斯石油",
                "ticker": "ROSN.ME",
                "reason": "能源和原材料出口"
            }
        ]
    }
};
