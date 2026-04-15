/* ============================================================
   🎵 歌单配置文件 (songs.js)
   注意：
   1. 格式必须是 { title: "歌名", src: "路径" }
   2. 路径建议使用相对路径，例如 "./download/..."
   ============================================================ */

const MUSIC_DATA = [
    { 
        title: "A Seat For You", 
        src: "https://github.com/Yao-Shun-Ya/Yao-Shun-Ya.github.io/releases/download/v1.0.0-assets/a_seat_for_you.wav" 
    },
    { 
        title: "Ginger", 
        src: "https://github.com/Yao-Shun-Ya/Yao-Shun-Ya.github.io/releases/download/v1.0.0-assets/ginger.wav" 
    },
    { 
        title: "下等马", 
        src: "https://github.com/Yao-Shun-Ya/Yao-Shun-Ya.github.io/releases/download/v1.0.0-assets/xiadengma.wav" 
    },
    { 
        title: "On The Journy (不虚此行)", 
        src: "https://github.com/Yao-Shun-Ya/Yao-Shun-Ya.github.io/releases/download/v1.0.0-assets/on_the_journey.wav" 
    },
    { 
        title: "兔子先生", 
        src: "https://github.com/Yao-Shun-Ya/Yao-Shun-Ya.github.io/releases/download/v1.0.0-assets/tuzi_xiansheng.wav" 
    },
    { 
        title: "卸妆", 
        src: "https://github.com/Yao-Shun-Ya/Yao-Shun-Ya.github.io/releases/download/v1.0.0-assets/xiezhuang.wav" 
    },
    { 
        title: "迎着台风去看海", 
        src: "https://github.com/Yao-Shun-Ya/Yao-Shun-Ya.github.io/releases/download/v1.0.0-assets/taifeng_kanhai.wav" 
    },
    { 
        title: "ねぇねぇねぇ (呐呐呐)", 
        src: "https://github.com/Yao-Shun-Ya/Yao-Shun-Ya.github.io/releases/download/v1.0.0-assets/na_na_na.wav" 
    },
    { 
        title: "喃喃萤火", 
        src: "https://github.com/Yao-Shun-Ya/Yao-Shun-Ya.github.io/releases/download/v1.0.0-assets/nannanyinghuo.wav" 
    },
    { 
        title: "夏天的风", 
        src: "https://github.com/Yao-Shun-Ya/Yao-Shun-Ya.github.io/releases/download/v1.0.0-assets/xia_tian_de_feng.wav" 
    },
    { 
        title: "屑屑", 
        src: "https://github.com/Yao-Shun-Ya/Yao-Shun-Ya.github.io/releases/download/v1.0.0-assets/xiexie.wav" 
    },
    { 
        title: "ほろよい (微醺)", 
        src: "https://github.com/Yao-Shun-Ya/Yao-Shun-Ya.github.io/releases/download/v1.0.0-assets/horoyoi.wav" 
    },
    { 
        title: "我的悲伤是水做的", 
        src: "https://github.com/Yao-Shun-Ya/Yao-Shun-Ya.github.io/releases/download/v1.0.0-assets/beishang_shui.wav" 
    },
    { 
        title: "时光盲盒", 
        src: "https://github.com/Yao-Shun-Ya/Yao-Shun-Ya.github.io/releases/download/v1.0.0-assets/shiguang_manghe.flac" 
    },
    { 
        title: "春水", 
        src: "https://github.com/Yao-Shun-Ya/Yao-Shun-Ya.github.io/releases/download/v1.0.0-assets/chunshui.wav" 
    },
    { 
        title: "未行之路", 
        src: "https://github.com/Yao-Shun-Ya/Yao-Shun-Ya.github.io/releases/download/v1.0.0-assets/weixingzhilu.wav" 
    },
    { 
        title: "消散对白", 
        src: "https://github.com/Yao-Shun-Ya/Yao-Shun-Ya.github.io/releases/download/v1.0.0-assets/xiaosan_duibai.wav" 
    },
    { 
        title: "演 (feat.凯)", 
        src: "https://github.com/Yao-Shun-Ya/Yao-Shun-Ya.github.io/releases/download/v1.0.0-assets/yan.mp3" 
    },
    { 
        title: "啊！美丽卡洛", 
        src: "https://github.com/Yao-Shun-Ya/Yao-Shun-Ya.github.io/releases/download/v1.0.0-assets/meili_kaluo.wav" 
    },
    { 
        title: "芭蕉夜雨", 
        src: "https://github.com/Yao-Shun-Ya/Yao-Shun-Ya.github.io/releases/download/v1.0.0-assets/bajiaoyeyu.wav" 
    },
    { 
        title: "衡山路，宛平路", 
        src: "https://github.com/Yao-Shun-Ya/Yao-Shun-Ya.github.io/releases/download/v1.0.0-assets/hengshan_wanping.wav" 
    },
    { 
        title: "听夜雨", 
        src: "https://github.com/Yao-Shun-Ya/Yao-Shun-Ya.github.io/releases/download/v1.0.0-assets/tingyeyu_ult.wav" 
    },
    { 
        title: "原風景", 
        src: "https://github.com/Yao-Shun-Ya/Yao-Shun-Ya.github.io/releases/download/v1.0.0-assets/yuanfengjing.wav" 
    },
    { 
        title: "织风结", 
        src: "https://github.com/Yao-Shun-Ya/Yao-Shun-Ya.github.io/releases/download/v1.0.0-assets/zhifengjie.wav" 
    },
    { 
        title: "反乌托邦Pt.2", 
        src: "https://github.com/Yao-Shun-Ya/Yao-Shun-Ya.github.io/releases/download/v1.0.0-assets/fawutuobang_pt2.wav" 
    }
    // 👉 复制上面的花括号块，粘贴到这里加新歌...
    // 注意：最后一个花括号后面不要加逗号，虽然加了也没事
];