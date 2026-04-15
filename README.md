# 🎶 爻舜的奇奇怪怪个人主页 (Kō Shun's Personal Website)

<div align="center">

![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Tech](https://img.shields.io/badge/Tech-HTML5%20%7C%20CSS3%20%7C%20VanillaJS-yellow?style=for-the-badge)
![Vibe](https://img.shields.io/badge/Vibe-Warm%20%26%20Healing-pink?style=for-the-badge)

<p align="center">
  <a href="#-现代化的部署架构-deployment-architecture">部署架构</a> •
  <a href="#-核心亮点-features">核心亮点</a> •
  <a href="#-自动化工具链-automation-tools">自动化工具链</a> •
  <a href="#-目录结构-structure">目录结构</a> •
  <a href="#-食用指南-getting-started">食用指南</a>
</p>

</div>

> [cite_start]✨ **"用声音记录生活，用代码（虽然是现学的）记录发癫。"** [cite: 2, 103]
>
> [cite_start]这里是 **爻舜 (Kō Shun)** 的数字后花园 [cite: 2, 103][cite_start]。作为一个主修医学、副业唱见、偶尔客串前端开发的 06 年 INFP，我把热爱、碎碎念、"奇怪切片"以及**熬夜掉的头发**都塞进了这个网页里 [cite: 2, 103]。

---

## 📖 项目简介 (Introduction)

[cite_start]本项目是一个**纯静态、无依赖、高性能**的个人作品集网站（含独立资源子站） [cite: 2, 103]。

[cite_start]在这个 React/Vue 满天飞的时代，本项目坚持“返璞归真”，完全使用原生 **HTML5, CSS3, JavaScript (ES6+)** 编写 [cite: 2, 103][cite_start]。这不仅是为了追求极致的加载速度（毕竟服务器只有 2 核 2G），更是为了证明：**只要脑洞够大，原生 JS 也能搓出 3A 级的交互动效** [cite: 2, 103]。

---

## 🛠️ 现代化的部署架构 (Deployment Architecture)

[cite_start]本项目采用 **“轻量化 Repo + 云端 Assets”** 的架构，旨在平衡 GitHub Pages 的存储限制与无损音频的高码率需求 [cite: 113]：

* [cite_start]**核心代码**：部署于 GitHub Pages，通过 `<head>` 预加载脚本实现 **Anti-Flicker (防闪烁)** 黑夜模式切换 [cite: 113]。
* [cite_start]**多媒体资源**：全部无损音源脱离 Git 追踪，挂载于 **GitHub Releases** [cite: 113][cite_start]。通过 Python 自动化工具链实现全站链接的远程重定向 [cite: 113][cite_start]。主仓库仅保留核心代码与提取出的 40 张封面图，体积从 GB 级缩减至 MB 级 [cite: 112]。
* [cite_start]**全静态托管**：完美运行于 GitHub Pages，无需任何服务端配置 [cite: 112]。

---

## ⚡ 核心亮点 (Features)

[cite_start]这里是给面试官或者技术宅看的，证明我不是只会写 `console.log` [cite: 3, 104]。

* [cite_start]**🎵 磁吸式悬浮播放器 (Magnetic Music Player)**：一个完全手搓的全局音频组件，利用向量计算鼠标位置实现“靠近即吸附、远离即回弹”的物理手感 [cite: 3, 101, 104][cite_start]。音量调节采用旋转交互，阻尼感适中，且带有动态光晕反馈 [cite: 3, 104]。
* [cite_start]**📂 资源小仓库 (The Resource Sub-site)**：实现了 SPA (单页应用) 级的体验 [cite: 3, 104][cite_start]。不仅有平滑飞跃的 FLIP 英雄转场，更是基于 `getBoundingClientRect` 的空间坐标转换算法，实现了从“网格卡片”到“沉浸式详情”的无缝衔接 [cite: 104, 113]。
* [cite_start]**🌌 物理惯性无限画廊 (Physics-based Gallery)**：相册滑动不仅仅是动画，它包含了瞬时速度计算与**动量因子 (Momentum Factor)**，模拟了真实世界的摩擦力衰减 [cite: 113][cite_start]。同时采用双向预加载 (Double-ended Buffering) 算法，彻底消除白边 [cite: 101, 105]。
* [cite_start]**⌨️ DOM 安全打字机**：采用了“先完整渲染 DOM 再逐节点揭晓文本”的策略，完美解决了原生打字机特效无法解析 HTML 链接的通病 [cite: 113]。
* [cite_start]**🌓 极致黑夜模式 (Ultimate Dark Mode)**：通过 `<head>` 里的预加载脚本，在 DOM 渲染前锁定主题，彻底解决了刷新页面时“白屏一闪而过”的通病 [cite: 4, 105][cite_start]。切换按钮实现了一个基于 `@keyframes` 的果冻弹跳 (Jelly Bounce) 动画 [cite: 4, 105]。
* [cite_start]**🥚 隐藏彩蛋 (Easter Eggs)**：尝试连续点击头像 5 次，屏幕会炸开五颜六色的纸屑（Confetti），并弹出一个写给你的感谢卡片 [cite: 4, 105]。

---

## 🐍 自动化工具链 (Automation Tools)

[cite_start]在部署过程中实际使用了多个自动化脚本，实现“一键上线”的工程化体验 [cite: 112, 113]：

* [cite_start]**`extract_only_covers.py`**：自动化从海量源文件中根据 ID 映射提取并重命名 40 张精美封面 [cite: 112]。
* [cite_start]**`fix_audio_links.py`**：智能替换本地路径为 GitHub Release 远程直链，实现全站链接的一键“通电” [cite: 112]。
* [cite_start]**`final_link_mapper.py`**：处理中英文映射冲突，确保 42 个云端资源精准对接 [cite: 112]。

---

## 💻 技术栈 (Tech Stack)

[cite_start]主打一个“手搓”，拒绝臃肿的 `node_modules` [cite: 5, 106]。

* [cite_start]**核心**：Semantic HTML5, CSS3 Variables, Vanilla JavaScript (ES6+) [cite: 5, 106]。
* [cite_start]**布局**：Flexbox, CSS Grid (响应式网格), CSS Scrollbar Gutter [cite: 5, 106]。
* [cite_start]**动画**：CSS Transitions (贝塞尔曲线调教), Keyframes, FLIP Technique, Canvas (粒子特效) [cite: 5, 106]。
* [cite_start]**字体**：`Nunito`, `ZCOOL KuaiLe`, 以及手写风格的 `演示佛系体` [cite: 5, 106]。

---

## 📂 目录结构 (Structure)

[cite_start]模块化设计，主站、子站、播放器逻辑完全分离，互不干扰 [cite: 5, 106]。

```text
personal-website/
├── index.html             # 🏠 主站入口
├── style.css              # 全局核心样式 & 黑夜模式变量
├── script.js              # 主站逻辑 (视频加载、交互特效)
├── player.js / .css       # 🎵 全局播放器模块
├── gallery.js / .css      # 🌌 物理相册模块
├── easter-egg.js / .css   # 🥚 彩蛋模块
├── songs.js               # 🎵 播放器歌单 (已对接云端无损音源)
├── download/              # 📂 资源子站 (SPA 级交互体验)
│   ├── index.html         # 下载页入口
│   ├── style.css          # 下载页样式 (卡片网格、RGB边框、FLIP动画)
│   ├── script.js          # 下载页逻辑 (负责 FLIP 动画与打字机逻辑)
│   └── resources.js       # 💾 核心数据库 (已全面切换远程直链)
└── Picture/covers/        # 🖼️ 自动化提取的 40 张专属封面 (由 ID 强行区分)
```

---

## 🚀 食用指南 (Getting Started)

[cite_start]不需要 `npm`，不需要 `build`，开箱即用 [cite: 6, 107]。

1. 克隆仓库：`git clone https://github.com/Yao-Shun-Ya/Yao-Shun-Ya.github.io.git`
2. [cite_start]双击 `index.html` 直接打开（推荐使用 VS Code 的 "Live Server" 插件运行，体验更佳） [cite: 6, 107, 108]。
3. [cite_start]**Done.** [cite: 6, 107]

---

## 🎨 设计哲学 (Design Philosophy)

> [cite_start]**"Warmth in the Glitch"** [cite: 8, 109]

* [cite_start]**视觉风格**：整体采用微拟物 (Neuomorphism) 与波普艺术的结合。白天是温暖的米色点阵纸风格，夜晚则是赛博朋克的 RGB 霓虹风格 [cite: 8, 109]。
* [cite_start]**交互原则**：“拒绝生硬”。每一个按钮点击都要有果冻般的回弹，每一个弹窗关闭都要有“软着陆”的淡出，每一次拖拽都要符合物理惯性 [cite: 8, 109]。
* [cite_start]**情感化设计**：配合俏皮的文案，打破互联网的冰冷感，还原一个真实的、鲜活的男大精神状态 [cite: 8, 109]。

---

## 🚧 待办事项 (To-Do List)

* [cite_start]**集成网易云 API**：目前是手动链接，未来希望能做一个迷你的播放器条 [cite: 9, 110]。
* [cite_start]**更多彩蛋**：比如点击头像 10 次会触发一些奇怪的特效（正在构思中） [cite: 9, 110]。
* [cite_start]**性能优化**：把现有的 JPG/PNG 全部转为 WebP 格式 [cite: 9, 110]。
* [cite_start]**3D 元素**：考虑引入 Three.js 做一个 3D 的音符背景 [cite: 9, 110]。

---

## 📜 许可证与致谢 (License & Acknowledgements)

[cite_start]本项目采用 **MIT License** [cite: 10, 111][cite_start]。你可以随意修改、复制、商用，但请保留我的署名（毕竟代码也是我辛辛苦苦敲的呜呜） [cite: 10, 111]。

* [cite_start]感谢 **Gemini** 的倾力相助，果然好用 [cite: 10, 111]。
* [cite_start]感谢 **我自己** 吃苦耐劳干到第二天早上六点半 [cite: 10, 111]。
* [cite_start]感谢 **StackOverflow** 和 **MDN**，没有你们就没有这个网站 [cite: 10, 111]。

<p align="center">
  Made with <span style="color: #e25555;">&hearts;</span> and lots of ☕ by <b>爻舜 (Yao Shun)</b>
  <br>
  <i>2026 · Sichuan, China</i>
</p>
