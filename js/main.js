// header滚动背景变化效果
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM加载完成，初始化header滚动效果');
    
    // 添加隐藏版权标识
    addHiddenCopyright();
    
    const header = document.querySelector('.hidden-header');
    
    // 监听滚动事件，添加/移除scrolled类
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // 名言警句打字机效果
    const quoteElement = document.getElementById('quote');
    let currentQuoteIndex = 0;
    let isTyping = false;
    
    // 初始化显示当前名言
    setTimeout(() => {
        typeQuote();
    }, 1000);
    
    // 打字效果函数
    function typeQuote() {
        if (isTyping) return;
        
        isTyping = true;
        const currentQuote = quotes[currentQuoteIndex];
        let charIndex = 0;
        
        // 清空当前文本
        quoteElement.textContent = '';
        // 移除可能的内联样式
        quoteElement.style.whiteSpace = '';
        quoteElement.style.borderRight = '';
        quoteElement.style.animation = '';
        
        // 打字速度（毫秒/字符）
        const typingSpeed = 100;
        
        // 创建打字效果
        const typingInterval = setInterval(() => {
            if (charIndex < currentQuote.length) {
                quoteElement.textContent += currentQuote.charAt(charIndex);
                charIndex++;
                
                // 检查文本长度，如果过长则调整样式以允许换行
                if (quoteElement.scrollWidth > quoteElement.clientWidth) {
                    quoteElement.style.whiteSpace = 'normal';
                    quoteElement.style.borderRight = 'none';
                    quoteElement.style.animation = 'none';
                }
            } else {
                clearInterval(typingInterval);
                isTyping = false;
                
                // 完成打字后去除光标效果
                quoteElement.style.borderRight = 'none';
                quoteElement.style.animation = 'none';
                
                console.log('文本显示完成，将在1秒后开始删除');
                
                // 显示完成后固定等待1秒
                setTimeout(() => {
                    // 删除文本
                    deleteQuote();
                }, 1000); // 固定为1秒
            }
        }, typingSpeed);
    }
    
    // 删除效果函数
    function deleteQuote() {
        if (isTyping) return;
        
        isTyping = true;
        const currentText = quoteElement.textContent;
        let charIndex = currentText.length;
        
        // 删除速度（毫秒/字符）- 比打字速度快
        const deletingSpeed = 50;
        
        // 创建删除效果
        const deletingInterval = setInterval(() => {
            if (charIndex > 0) {
                quoteElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                clearInterval(deletingInterval);
                isTyping = false;
                
                // 切换到下一个名言
                currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
                
                // 开始打字下一个名言
                setTimeout(() => {
                    typeQuote();
                }, 500); // 删除完成后等待500ms再开始下一句
            }
        }, deletingSpeed);
    }
});

// 添加隐藏版权标识
function addHiddenCopyright() {
    // 使用不同编码和分散形式存储作者信息
    const authorSignature = [
        [69, 110, 110, 97, 110],  // ASCII编码 "Ennan"
        [48, 49, 48],             // ASCII编码 "010"
        btoa('Ennan010'),         // Base64编码
        Array.from('Ennan010').map(c => c.charCodeAt(0) + 5).map(c => String.fromCharCode(c)).join(''), // 位移编码
        0x456e6e616e303130        // 十六进制表示
    ];
    
    // 添加到window对象的特殊属性中
    Object.defineProperty(window, '_$protect', {
        value: {
            author: 'Ennan010',
            encoded: authorSignature,
            created: new Date().toISOString(),
            license: 'Copyright © ' + new Date().getFullYear() + ' Ennan010. All rights reserved.'
        },
        writable: false,
        enumerable: false,
        configurable: false
    });
    
    // 在DOM中添加隐藏的注释节点
    const authorComment = document.createComment(
        `
        ================================================================
        =       Copyright © ${new Date().getFullYear()} Ennan010       =
        =              All rights reserved                             =
        =  This website and its content are protected by copyright     =
        =  law and international treaties. Unauthorized reproduction   =
        =  or distribution of this website or any portion of it may    =
        =  result in severe civil and criminal penalties.              =
        ================================================================
        `
    );
    document.documentElement.prepend(authorComment);
    
    // 添加隐藏的meta标签
    const metaAuthor = document.createElement('meta');
    metaAuthor.name = 'author';
    metaAuthor.content = 'Ennan010';
    document.head.appendChild(metaAuthor);
    
    const metaCopyright = document.createElement('meta');
    metaCopyright.name = 'copyright';
    metaCopyright.content = `Copyright © ${new Date().getFullYear()} Ennan010`;
    document.head.appendChild(metaCopyright);
    
    // 控制台输出隐藏版权信息，只对打开控制台的人可见
    setTimeout(() => {
        console.log(
            '%c© Ennan010 Portfolio %c- Copyright ' + new Date().getFullYear(),
            'color: #fff; background: #4285f4; padding: 5px 10px; font-weight: bold; border-radius: 3px 0 0 3px;',
            'color: #fff; background: #34a853; padding: 5px 10px; border-radius: 0 3px 3px 0;'
        );
    }, 2000);
    
    // 添加自定义受保护属性
    const protectedData = {
        toString: function() { return "Protected by Ennan010"; },
        valueOf: function() { return "E-n-n-a-n-0-1-0"; },
        signature: [...authorSignature[0], ...authorSignature[1]].map(c => String.fromCharCode(c)).join('')
    };
    
    // 防止修改和删除
    Object.freeze(protectedData);
    
    // 将受保护数据添加到window对象中
    window.__copyright__ = protectedData;
}

// 导航栏滚动效果和背景淡化
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const heroBackground = document.querySelector('.hero-background');
    const scrollPosition = window.scrollY;
    
    // 更新导航栏背景 - 始终保持透明
    navbar.style.backgroundColor = 'transparent'; // 完全透明
    
    // 背景图片淡出效果
    const opacity = Math.max(1 - scrollPosition / (window.innerHeight * 0.7), 0);
    heroBackground.style.opacity = opacity;
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 导航菜单激活状态
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// 选项卡切换功能
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有按钮的激活状态
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // 给当前点击的按钮添加激活状态
            this.classList.add('active');
            
            // 获取目标内容
            const targetTab = this.getAttribute('data-tab');
            
            // 隐藏所有内容
            tabContents.forEach(content => content.classList.remove('active'));
            
            // 显示目标内容
            document.getElementById(targetTab).classList.add('active');
        });
    });
    
    // 技能进度条动画
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkills = function() {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 300);
        });
    };
    
    // 监听选项卡切换来触发技能条动画
    tabButtons.forEach(button => {
        if(button.getAttribute('data-tab') === 'skills') {
            button.addEventListener('click', animateSkills);
        }
    });
    
    // 初始动画
    window.addEventListener('scroll', function skillsAnimation() {
        const skillsSection = document.getElementById('skills');
        if(skillsSection && window.scrollY > skillsSection.offsetTop - window.innerHeight) {
            animateSkills();
            window.removeEventListener('scroll', skillsAnimation);
        }
    });
});

// 联系表单处理
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // 这里可以添加表单提交逻辑
    console.log('Form submitted:', { email, message });
    alert('消息已发送！');
    this.reset();
});

// 音乐播放控制
var isMusicPlaying = true; // 初始状态为未播放
var musicAttempted = false; // 是否已尝试播放音乐
var bgMusic = document.getElementById('bgMusic');
var musicBtn = document.getElementById('musicBtn');

// 尝试播放音乐
function attemptPlayMusic() {
    if (!musicAttempted) {
        musicAttempted = true;
        bgMusic.volume = 0.2; // 设置初始音量
        
        // 监听播放成功事件
        bgMusic.addEventListener('play', function() {
            isMusicPlaying = true;
            updateMusicUI();
        });
        
        // 监听播放暂停事件
        bgMusic.addEventListener('pause', function() {
            isMusicPlaying = false;
            updateMusicUI();
        });
    }
    
    // 切换音乐播放状态
    if (isMusicPlaying) {
        bgMusic.pause();
    } else {
        bgMusic.play().catch(e => console.log('播放失败:', e));
    }
}

// 更新音乐控制UI
function updateMusicUI() {
    if (isMusicPlaying) {
        musicBtn.classList.add('playing');
        musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        musicBtn.classList.remove('playing');
        musicBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

// 音乐按钮点击事件
if (musicBtn) {
    musicBtn.addEventListener('click', function(e) {
        e.preventDefault();
        attemptPlayMusic();
    });
}

// 初始化音乐UI
updateMusicUI();

// 检查音频静音状态和音量
setInterval(function() {
    if (bgMusic && !bgMusic.paused && (bgMusic.muted || bgMusic.volume === 0)) {
        isMusicPlaying = false;
        updateMusicUI();
    }
}, 1000);

// 更新页脚年份
document.addEventListener('DOMContentLoaded', function() {
    // 更新页脚年份
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }
}); 
