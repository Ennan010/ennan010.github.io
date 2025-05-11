# 个人主页 | Personal Portfolio Website

[中文](#中文) | [English](#english)

## 中文

这是一个现代化的个人主页项目，专为展示学术和专业背景而设计。采用响应式设计，可在任何设备上完美呈现。项目结构清晰，代码注释完善，便于自定义和二次开发。

### ✨ 特点

- **响应式设计**：完美适配桌面端、平板和移动设备
- **现代化界面**：简洁优雅的UI设计，展示专业形象
- **交互式导航**：平滑滚动和选项卡切换
- **多语言支持**：中英文双语支持，一键切换语言
- **动态背景图片**：根据语言版本自动切换背景图片
- **打字机效果**：首页动态引言展示
- **自定义主题**：易于修改的CSS变量系统
- **模块化结构**：便于扩展和维护
- **背景音乐**：可选的背景音乐功能
- **丰富的展示区域**：个人信息、技能、研究经历、教育背景和项目展示

### 🛠️ 技术栈

- HTML5 (语义化标签)
- CSS3 (Flexbox, Grid, 变量, 动画)
- JavaScript ES6+ (原生JS，无依赖)
- Font Awesome 图标库
- 响应式设计原则
- 移动优先设计方法

### 📁 目录结构

```
.
├── index.html              # 中文主页面
├── index_en.html           # 英文主页面
├── css/                    # 样式文件
│   └── style.css           # 主样式文件
├── js/                     # JavaScript文件
│   ├── main.js             # 主脚本文件
│   ├── quotes.js           # 中文版引言脚本
│   ├── quotes_en.js        # 英文版引言脚本
│   └── language.js         # 语言切换脚本
├── assets/                 # 静态资源
│   ├── images/             # 图片资源
│   ├── audio/              # 音频文件
│   └── docs/               # 文档资源
└── README.md               # 项目说明文档
```

### 🚀 如何部署到GitHub Pages

1. **Fork这个仓库**到你的GitHub账号

2. **克隆到本地进行修改**
   ```bash
   git clone https://github.com/你的用户名/你的仓库名.git
   cd 你的仓库名
   ```

3. **修改内容**：编辑`index.html`、`index_en.html`和其他文件，替换为你的个人信息

4. **提交更改**
   ```bash
   git add .
   git commit -m "个性化我的个人主页"
   git push origin main
   ```

5. **启用GitHub Pages**
   - 进入仓库设置 (Settings)
   - 找到Pages选项
   - 选择main分支作为源
   - 保存后GitHub会提供一个网址

### 🎨 自定义指南

- **更改颜色主题**：编辑`css/style.css`文件中的`:root`变量
- **更换背景图片**：替换`assets/images`中的图片并更新CSS中的路径
- **修改个人信息**：编辑`index.html`和`index_en.html`中的相应部分
- **添加项目**：在项目展示部分添加你的项目链接和描述
- **更改背景音乐**：替换`assets/audio`中的音频文件
- **自定义名言警句**：修改`js/quotes.js`和`js/quotes_en.js`中的引言内容

### 📄 许可证

MIT License

---

## English

This is a modern personal portfolio website designed for showcasing academic and professional backgrounds. It features a responsive design that displays perfectly on any device. The project structure is clean with well-commented code, making it easy to customize and extend.

### ✨ Features

- **Responsive Design**: Perfect display on desktop, tablet, and mobile devices
- **Modern Interface**: Clean and elegant UI design for professional presentation
- **Interactive Navigation**: Smooth scrolling and tab switching
- **Multilingual Support**: Bilingual (Chinese/English) support with one-click language switching
- **Dynamic Background Images**: Automatic background image switch based on language version
- **Typing Effect**: Dynamic quote display on homepage
- **Customizable Theme**: Easy-to-modify CSS variable system
- **Modular Structure**: Easy to extend and maintain
- **Background Music**: Optional background music feature
- **Rich Display Areas**: Personal info, skills, research experience, education, and project showcase

### 🛠️ Tech Stack

- HTML5 (Semantic tags)
- CSS3 (Flexbox, Grid, Variables, Animations)
- JavaScript ES6+ (Vanilla JS, no dependencies)
- Font Awesome icon library
- Responsive design principles
- Mobile-first design approach

### 📁 Directory Structure

```
.
├── index.html              # Chinese main page
├── index_en.html           # English main page
├── css/                    # Style files
│   └── style.css           # Main stylesheet
├── js/                     # JavaScript files
│   ├── main.js             # Main script file
│   ├── quotes.js           # Chinese quotes script
│   ├── quotes_en.js        # English quotes script
│   └── language.js         # Language switching script
├── assets/                 # Static assets
│   ├── images/             # Image resources
│   ├── audio/              # Audio files
│   └── docs/               # Document resources
└── README.md               # Project documentation
```

### 🚀 How to Deploy to GitHub Pages

1. **Fork this repository** to your GitHub account

2. **Clone it locally to make changes**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

3. **Modify content**: Edit `index.html`, `index_en.html` and other files to replace with your personal information

4. **Commit changes**
   ```bash
   git add .
   git commit -m "Personalize my portfolio"
   git push origin main
   ```

5. **Enable GitHub Pages**
   - Go to repository settings
   - Find the Pages option
   - Select main branch as source
   - Save, and GitHub will provide a URL

### 🎨 Customization Guide

- **Change color theme**: Edit `:root` variables in `css/style.css`
- **Replace background images**: Swap images in `assets/images` and update paths in CSS
- **Modify personal information**: Edit the corresponding sections in `index.html` and `index_en.html`
- **Add projects**: Add your project links and descriptions in the projects section
- **Change background music**: Replace audio files in `assets/audio`
- **Customize quotes**: Modify quotes in `js/quotes.js` and `js/quotes_en.js`

### 📄 License

MIT License
