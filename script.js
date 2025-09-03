// 博客文章数据
const blogPosts = [
    {
        id: 1,
        title: "JavaScript ES6+ 新特性详解",
        excerpt: "本文详细介绍了JavaScript ES6及后续版本中引入的重要新特性，包括箭头函数、解构赋值、模板字符串、Promise、async/await等。",
        content: `<p>JavaScript作为前端开发的核心语言，自ES6（ECMAScript 2015）版本开始，引入了许多强大的新特性，极大地提升了开发效率和代码质量。本文将详细介绍这些新特性及其应用场景。</p>
        
        <h2>箭头函数</h2>
        <p>箭头函数是ES6中引入的一种新的函数定义方式，它提供了更简洁的语法：</p>
        <pre><code>// 传统函数
function add(a, b) {
    return a + b;
}

// 箭头函数
const add = (a, b) => a + b;</code></pre>
        
        <p>箭头函数不仅语法更简洁，还有一个重要特点：它不绑定自己的this，而是继承自外层作用域。这在回调函数中特别有用。</p>
        
        <h2>解构赋值</h2>
        <p>解构赋值允许我们从数组或对象中提取值，并赋给变量：</p>
        <pre><code>// 数组解构
const [a, b] = [1, 2];

// 对象解构
const {name, age} = {name: '张三', age: 30};</code></pre>
        
        <h2>模板字符串</h2>
        <p>模板字符串提供了更灵活的字符串拼接方式：</p>
        <pre><code>const name = '张三';
const greeting = \`你好，\${name}！今天是\${new Date().toLocaleDateString()}。\`;</code></pre>
        
        <h2>Promise和async/await</h2>
        <p>Promise和async/await为JavaScript提供了更优雅的异步编程方式：</p>
        <pre><code>// Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('数据获取成功'), 1000);
    });
}

fetchData().then(data => console.log(data));

// async/await
async function getData() {
    const data = await fetchData();
    console.log(data);
}</code></pre>
        
        <p>除了上述特性，ES6+还引入了模块系统、类、迭代器、生成器等众多新特性，这些特性共同使JavaScript成为一门更强大、更易用的编程语言。</p>`,
        author: "张三",
        date: "2025-06-15",
        category: "技术",
        tags: ["JavaScript", "ES6", "前端"],
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        featured: true
    },
    {
        id: 2,
        title: "CSS Grid 布局完全指南",
        excerpt: "CSS Grid是CSS中最强大的布局系统之一，本文将详细介绍CSS Grid的基本概念、使用方法和最佳实践。",
        content: `<p>CSS Grid布局提供了一个基于网格的布局系统，具有行和列，使设计网页布局变得更加容易。它是目前最强大的CSS布局系统。</p>
        
        <h2>Grid容器和Grid项目</h2>
        <p>要使用Grid布局，首先需要创建一个Grid容器，然后将其子元素变为Grid项目：</p>
        <pre><code>.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
}</code></pre>
        
        <h2>网格线、网格轨道和网格区域</h2>
        <p>Grid布局由网格线、网格轨道和网格区域组成：</p>
        <ul>
            <li><strong>网格线</strong>：构成网格结构的分界线。</li>
            <li><strong>网格轨道</strong>：两条相邻网格线之间的空间。</li>
            <li><strong>网格区域</strong>：四条网格线包围的总空间。</li>
        </ul>
        
        <h2>Grid属性详解</h2>
        <p>Grid容器和Grid项目有许多属性可以控制布局：</p>
        <pre><code>.container {
    display: grid;
    grid-template-columns: 100px 1fr 100px;
    grid-template-rows: 50px 1fr 50px;
    grid-gap: 10px;
    grid-template-areas: 
        "header header header"
        "sidebar main aside"
        "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }</code></pre>
        
        <h2>响应式Grid布局</h2>
        <p>使用Grid布局可以轻松创建响应式设计：</p>
        <pre><code>.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
}</code></pre>
        
        <p>CSS Grid布局为网页设计提供了前所未有的灵活性和控制力，结合Flexbox使用，可以解决几乎所有的布局问题。</p>`,
        author: "李四",
        date: "2025-05-20",
        category: "技术",
        tags: ["CSS", "Grid", "布局"],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        featured: true
    },
    {
        id: 3,
        title: "我的旅行日记：云南之行",
        excerpt: "记录我在云南的美好时光，从昆明的石林到大理的洱海，再到丽江的古城，每一处风景都让人流连忘返。",
        content: `<p>今年春天，我有幸去云南旅行了一周，这片神奇的土地给我留下了深刻的印象。从昆明的石林到大理的洱海，再到丽江的古城，每一处风景都让人流连忘返。</p>
        
        <h2>昆明：石林的奇观</h2>
        <p>昆明是云南的省会，也是我此行的第一站。最让我印象深刻的是石林，那里有成千上万的石灰岩柱，宛如一片石头森林。走在石林中，仿佛置身于一个神秘的世界。</p>
        
        <blockquote>石林是大自然的杰作，每一块石头都有自己独特的形状和故事。</blockquote>
        
        <h2>大理：洱海的宁静</h2>
        <p>从昆明坐高铁到大理只需要两个小时，沿途的风景非常美丽。大理的洱海是我见过最美的湖泊之一，湖水清澈见底，周围环绕着苍山。</p>
        
        <p>我在大理古城住了一家民宿，每天早上可以听到鸟儿的歌声，晚上可以看到满天繁星。这里的生活节奏很慢，让人感到非常放松。</p>
        
        <h2>丽江：古城的魅力</h2>
        <p>丽江古城是我此行的最后一站，也是我最喜欢的地方。古城里的建筑保存完好，石板路、小桥流水、纳西族的文化，都让我深深着迷。</p>
        
        <p>晚上，古城里灯火通明，酒吧里传来阵阵音乐声，游客们在街上漫步，享受着这美好的夜晚。我在一家小酒吧里听了一晚上的民谣，那种感觉非常美妙。</p>
        
        <h2>旅行感悟</h2>
        <p>这次云南之行让我明白，旅行不仅仅是看风景，更是一种心灵的放松和成长。在旅途中，我遇到了很多有趣的人，听到了很多动人的故事，这些都成为了我宝贵的回忆。</p>
        
        <p>云南，这片神奇的土地，我会再来的！</p>`,
        author: "王五",
        date: "2025-04-10",
        category: "旅行",
        tags: ["旅行", "云南", "日记"],
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        featured: false
    },
    {
        id: 4,
        title: "《人类简史》读后感",
        excerpt: "《人类简史》是以色列历史学家尤瓦尔·赫拉利的著作，这本书从认知革命、农业革命到科学革命，全面梳理了人类历史的发展脉络。",
        content: `<p>《人类简史》是以色列历史学家尤瓦尔·赫拉利的著作，这本书从认知革命、农业革命到科学革命，全面梳理了人类历史的发展脉络。读完这本书，我对人类历史有了全新的认识。</p>
        
        <h2>认知革命：虚构故事的力量</h2>
        <p>书中提到，约7万年前，智人经历了认知革命，开始能够创造并相信虚构的故事。这种能力使智人能够大规模合作，从而战胜其他人类物种，成为地球的主宰。</p>
        
        <blockquote>正是这种创造和相信虚构故事的能力，使智人能够形成大规模的合作网络，从而征服世界。</blockquote>
        
        <h2>农业革命：史上最大的骗局</h2>
        <p>作者将农业革命称为"史上最大的骗局"，因为虽然农业使食物总量增加，但并没有改善个体的生活质量。相反，农民比采集者工作更辛苦，饮食更单一，更容易受到疾病和饥荒的威胁。</p>
        
        <p>这个观点让我重新思考了"进步"的含义。我们通常认为历史是向前发展的，但这种发展并不一定带来个体幸福感的提升。</p>
        
        <h2>科学革命：承认无知</h2>
        <p>科学革命的起点是承认无知。与传统的知识体系不同，科学承认我们不知道很多事，并且愿意通过观察和实验来获取新知识。这种态度使人类能够在短短几百年内取得前所未有的成就。</p>
        
        <h2>思考与启示</h2>
        <p>读完《人类简史》，我最大的感受是：人类的历史并不是线性的进步过程，而是一系列偶然事件的集合。我们今天所认为的"理所当然"，在历史的长河中可能只是昙花一现。</p>
        
        <p>这本书也让我反思现代生活的意义。在追求经济增长和技术进步的同时，我们是否忽略了更重要的东西？幸福、满足感、与他人的联系，这些才是真正构成生活质量的因素。</p>
        
        <p>《人类简史》不仅是一本历史书，更是一本哲学书。它让我们思考：我们从哪里来？我们现在在哪里？我们要到哪里去？这些问题，值得每个人深思。</p>`,
        author: "赵六",
        date: "2025-03-05",
        category: "读书",
        tags: ["读书", "人类简史", "历史"],
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        featured: false
    },
    {
        id: 5,
        title: "前端性能优化技巧",
        excerpt: "前端性能优化是提升用户体验的关键，本文将介绍一些实用的前端性能优化技巧，包括资源加载优化、渲染优化和代码优化等。",
        content: `<p>前端性能优化是提升用户体验的关键，一个快速响应的网站能够显著提高用户满意度和转化率。本文将介绍一些实用的前端性能优化技巧，帮助你的网站跑得更快。</p>
        
        <h2>资源加载优化</h2>
        <p>资源加载是前端性能的重要环节，以下是一些优化技巧：</p>
        
        <h3>压缩资源</h3>
        <p>压缩CSS、JavaScript和图片资源可以显著减少文件大小，加快加载速度：</p>
        <pre><code>// 使用工具压缩CSS和JavaScript
// CSS: cssnano, clean-css
// JavaScript: UglifyJS, Terser
// 图片: ImageOptim, TinyPNG</code></pre>
        
        <h3>使用CDN</h3>
        <p>内容分发网络（CDN）可以将你的资源分发到全球各地的服务器，让用户从最近的服务器加载资源，减少延迟：</p>
        <pre><code><!-- 使用CDN加载jQuery -->
<script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script></code></pre>
        
        <h3>懒加载</h3>
        <p>对于图片和其他非关键资源，可以使用懒加载技术，只有当用户滚动到它们附近时才加载：</p>
        <pre><code><img src="placeholder.jpg" data-src="actual-image.jpg" class="lazyload">

<script>
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('img.lazyload');
    
    const lazyLoad = function() {
        lazyImages.forEach(img => {
            if (img.getBoundingClientRect().top <= window.innerHeight && img.getBoundingClientRect().bottom >= 0) {
                img.src = img.dataset.src;
                img.classList.remove('lazyload');
            }
        });
    };
    
    window.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
    lazyLoad();
});
</script></code></pre>
        
        <h2>渲染优化</h2>
        <p>渲染性能直接影响用户体验，以下是一些优化技巧：</p>
        
        <h3>避免强制同步布局</h3>
        <p>强制同步布局会导致浏览器进行不必要的布局计算，影响性能：</p>
        <pre><code>// 不好的做法
function badExample() {
    const div = document.createElement('div');
    document.body.appendChild(div);
    console.log(div.offsetHeight); // 触发强制同步布局
    div.style.width = '100px';
    console.log(div.offsetHeight); // 再次触发强制同步布局
}

// 好的做法
function goodExample() {
    const div = document.createElement('div');
    div.style.width = '100px';
    document.body.appendChild(div);
    console.log(div.offsetHeight); // 只触发一次布局
}</code></pre>
        
        <h3>使用requestAnimationFrame</h3>
        <p>对于动画和视觉变化，使用requestAnimationFrame可以确保它们在浏览器的重绘周期中运行，提高性能：</p>
        <pre><code>function animate() {
    // 更新动画状态
    updateAnimation();
    
    // 请求下一帧
    requestAnimationFrame(animate);
}

// 开始动画
requestAnimationFrame(animate);</code></pre>
        
        <h2>代码优化</h2>
        <p>优化JavaScript代码可以提高执行效率，以下是一些技巧：</p>
        
        <h3>避免内存泄漏</h3>
        <p>内存泄漏会导致浏览器占用越来越多的内存，最终影响性能：</p>
        <pre><code>// 不好的做法：事件监听器没有移除
function attachEvent() {
    const button = document.getElementById('myButton');
    button.addEventListener('click', function() {
        console.log('Button clicked');
    });
}

// 好的做法：移除不需要的事件监听器
function attachEvent() {
    const button = document.getElementById('myButton');
    const handleClick = function() {
        console.log('Button clicked');
    };
    button.addEventListener('click', handleClick);
    
    // 当不再需要时
    return function cleanup() {
        button.removeEventListener('click', handleClick);
    };
}</code></pre>
        
        <h3>使用Web Workers</h3>
        <p>对于CPU密集型任务，可以使用Web Workers在后台线程中运行，避免阻塞主线程：</p>
        <pre><code>// 主线程
const worker = new Worker('worker.js');
worker.postMessage({ data: largeDataSet });
worker.onmessage = function(e) {
    console.log('Result:', e.data);
};

// worker.js
self.onmessage = function(e) {
    const result = processData(e.data);
    self.postMessage(result);
};

function processData(data) {
    // 处理大数据集
    return result;
}</code></pre>
        
        <h2>总结</h2>
        <p>前端性能优化是一个系统性的工程，需要从资源加载、渲染和代码执行等多个方面进行优化。通过应用上述技巧，你可以显著提高网站的加载速度和响应性能，为用户提供更好的体验。</p>
        
        <p>记住，性能优化是一个持续的过程，需要定期监测和改进。使用性能监测工具（如Lighthouse、WebPageTest等）可以帮助你发现性能瓶颈，并针对性地进行优化。</p>`,
        author: "张三",
        date: "2025-02-18",
        category: "技术",
        tags: ["前端", "性能优化", "JavaScript"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        featured: true
    },
    {
        id: 6,
        title: "如何培养阅读习惯",
        excerpt: "阅读是一种宝贵的学习和娱乐方式，但在快节奏的现代生活中，很多人发现自己很难坚持阅读。本文分享一些培养阅读习惯的实用方法。",
        content: `<p>阅读是一种宝贵的学习和娱乐方式，它可以开阔我们的视野，丰富我们的知识，提升我们的思维能力。但在快节奏的现代生活中，很多人发现自己很难坚持阅读。本文将分享一些培养阅读习惯的实用方法，帮助你重新爱上阅读。</p>
        
        <h2>找到你感兴趣的书籍</h2>
        <p>培养阅读习惯的第一步是找到你真正感兴趣的书籍。不要强迫自己读那些你认为"应该读"但不感兴趣的书。从你喜欢的主题开始，无论是科幻小说、历史传记，还是自助成长类书籍。</p>
        
        <blockquote>阅读应该是一种享受，而不是一种负担。找到你喜欢的书籍，是培养阅读习惯的关键。</blockquote>
        
        <h2>设定现实的阅读目标</h2>
        <p>设定一个现实的阅读目标可以帮助你保持动力。这个目标不一定要很大，比如每天读10页，每周读一本书，或者每月读两本书。关键是设定一个你可以坚持的目标，并逐步提高。</p>
        
        <h3>创建阅读计划</h3>
        <p>创建一个阅读计划可以帮助你更好地管理时间。比如，你可以决定每天早上通勤时读15分钟，或者睡前读30分钟。将阅读纳入你的日常安排，就像安排其他重要活动一样。</p>
        
        <h2>创造适合阅读的环境</h2>
        <p>一个舒适的阅读环境可以大大提高阅读体验。找一个安静、光线充足的地方，准备一杯茶或咖啡，让自己感到放松和舒适。减少干扰，比如关闭手机通知，远离电视和电脑。</p>
        
        <h2>尝试不同的阅读方式</h2>
        <p>传统的纸质书并不是唯一的阅读方式。你可以尝试电子书、有声书，或者订阅杂志和报纸。不同的阅读方式适合不同的场景和偏好，找到最适合你的方式。</p>
        
        <h3>利用碎片时间</h3>
        <p>现代生活中有很多碎片时间，比如通勤、排队、等待等。利用这些时间进行阅读，可以积少成多。电子书和手机阅读应用特别适合这种场景。</p>
        
        <h2>加入阅读社区</h2>
        <p>加入阅读社区或读书俱乐部可以增加阅读的乐趣和动力。与他人分享阅读体验，讨论书籍内容，可以获得新的见解和视角。社交媒体上也有很多阅读社区，你可以找到志同道合的读者。</p>
        
        <h2>记录你的阅读</h2>
        <p>记录你读过的书籍和阅读感受，可以帮助你更好地消化和吸收内容。你可以写读书笔记、书评，或者在社交媒体上分享你的阅读体验。这不仅可以帮助你记忆，也可以激励你继续阅读。</p>
        
        <h2>奖励自己</h2>
        <p>当你完成一个阅读目标时，给自己一个小奖励。这可以是买一本新书，享受一顿美食，或者做一些你喜欢的事情。奖励机制可以增强你的动力，使阅读成为一种积极的体验。</p>
        
        <h2>不要有压力</h2>
        <p>最重要的是，不要给自己太大压力。如果某一天你没有完成阅读目标，不要自责。阅读是一种享受，而不是一种任务。有时候，你可能需要休息一下，或者换一本书。关键是保持对阅读的热爱和兴趣。</p>
        
        <h2>总结</h2>
        <p>培养阅读习惯需要时间和耐心，但一旦养成，它将成为你生活中宝贵的一部分。通过找到感兴趣的书籍，设定现实的目标，创造适合的环境，尝试不同的方式，加入社区，记录阅读，奖励自己，以及保持轻松的心态，你可以逐步培养起持久的阅读习惯。</p>
        
        <p>记住，阅读是一场旅程，而不是一场比赛。享受这个过程，让书籍成为你生活中的良师益友。</p>`,
        author: "李四",
        date: "2025-01-22",
        category: "生活",
        tags: ["阅读", "习惯", "生活"],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        featured: false
    }
];

// 评论数据
const comments = {
    1: [
        {
            id: 1,
            author: "小明",
            date: "2025-06-16",
            content: "这篇文章写得非常好，对ES6+新特性的介绍很全面，特别是对Promise和async/await的解释，让我对异步编程有了更深入的理解。"
        },
        {
            id: 2,
            author: "小红",
            date: "2025-06-17",
            content: "作为前端开发新手，这篇文章对我帮助很大。我已经开始在实际项目中使用箭头函数和解构赋值，确实让代码变得更简洁了。"
        }
    ],
    2: [
        {
            id: 1,
            author: "设计师小王",
            date: "2025-05-21",
            content: "CSS Grid确实是布局的利器，自从学会了Grid，我再也不用为复杂的布局发愁了。文章中的例子很实用，谢谢分享！"
        }
    ],
    3: [
        {
            id: 1,
            author: "旅行爱好者",
            date: "2025-04-11",
            content: "云南真是个美丽的地方，我也去过，特别是洱海，太美了！看了你的文章，仿佛又回到了那段美好的时光。"
        },
        {
            id: 2,
            author: "小李",
            date: "2025-04-12",
            content: "写得真好，我也想去云南旅行了！请问你在大理住的民宿叫什么名字？可以推荐一下吗？"
        }
    ]
};

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 判断当前页面
    if (document.querySelector('.main-content') && !document.querySelector('.categories-page')) {
        // 首页
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        
        if (category) {
            // 显示特定分类的文章
            loadCategoryPosts(decodeURIComponent(category));
        } else {
            // 显示所有文章
            loadFeaturedPosts();
            loadRecentPosts();
        }
    } else if (document.querySelector('.post-detail')) {
        // 文章详情页
        loadPostDetail();
        loadComments();
        setupCommentForm();
    } else if (document.querySelector('.categories-page')) {
        // 分类页面
        loadCategories();
    } else if (document.querySelector('.contact-page')) {
        // 联系页面
        setupContactForm();
        loadLatestComments();
    }
});

// 加载精选文章
function loadFeaturedPosts() {
    const featuredPostsContainer = document.querySelector('.featured-posts .post-grid');
    if (!featuredPostsContainer) return;
    
    const featuredPosts = blogPosts.filter(post => post.featured);
    
    featuredPosts.forEach(post => {
        const postCard = createPostCard(post);
        featuredPostsContainer.appendChild(postCard);
    });
}

// 加载最新文章
function loadRecentPosts() {
    const recentPostsContainer = document.querySelector('.recent-posts .post-list');
    if (!recentPostsContainer) return;
    
    // 按日期排序，最新的在前
    const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    sortedPosts.forEach(post => {
        const postListItem = createPostListItem(post);
        recentPostsContainer.appendChild(postListItem);
    });
}

// 创建文章卡片
function createPostCard(post) {
    const card = document.createElement('div');
    card.className = 'post-card';
    card.innerHTML = `
        <div class="post-card-image">
            <img src="${post.image}" alt="${post.title}">
        </div>
        <div class="post-card-content">
            <h3 class="post-card-title">${post.title}</h3>
            <p class="post-card-excerpt">${post.excerpt}</p>
            <div class="post-card-meta">
                <span class="date">${formatDate(post.date)}</span>
                <span class="category">${post.category}</span>
            </div>
        </div>
    `;
    
    // 添加点击事件，跳转到文章详情页
    card.addEventListener('click', function() {
        window.location.href = `post.html?id=${post.id}`;
    });
    
    return card;
}

// 创建文章列表项
function createPostListItem(post) {
    const listItem = document.createElement('div');
    listItem.className = 'post-list-item';
    listItem.innerHTML = `
        <div class="post-list-item-image">
            <img src="${post.image}" alt="${post.title}">
        </div>
        <div class="post-list-item-content">
            <h3 class="post-list-item-title">${post.title}</h3>
            <p class="post-list-item-excerpt">${post.excerpt}</p>
            <div class="post-list-item-meta">
                <span class="author">${post.author}</span>
                <span class="date">${formatDate(post.date)}</span>
                <span class="category">${post.category}</span>
            </div>
        </div>
    `;
    
    // 添加点击事件，跳转到文章详情页
    listItem.addEventListener('click', function() {
        window.location.href = `post.html?id=${post.id}`;
    });
    
    return listItem;
}

// 加载文章详情
function loadPostDetail() {
    // 从URL获取文章ID
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    
    if (!postId) return;
    
    // 查找文章
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;
    
    // 填充文章内容
    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-author').textContent = post.author;
    document.getElementById('post-date').textContent = formatDate(post.date);
    document.getElementById('post-category').textContent = post.category;
    document.getElementById('post-content').innerHTML = post.content;
    
    // 添加标签
    const tagsContainer = document.getElementById('post-tags');
    if (tagsContainer) {
        post.tags.forEach(tag => {
            const tagElement = document.createElement('a');
            tagElement.href = '#';
            tagElement.textContent = tag;
            tagsContainer.appendChild(tagElement);
        });
    }
    
    // 设置文章导航
    setupPostNavigation(postId);
    
    // 加载相关文章
    loadRelatedPosts(post);
}

// 设置文章导航
function setupPostNavigation(currentPostId) {
    const prevPostLink = document.querySelector('.prev-post');
    const nextPostLink = document.querySelector('.next-post');
    
    // 查找当前文章的索引
    const currentIndex = blogPosts.findIndex(p => p.id === currentPostId);
    
    if (currentIndex > 0) {
        const prevPost = blogPosts[currentIndex - 1];
        prevPostLink.href = `post.html?id=${prevPost.id}`;
        prevPostLink.textContent = `上一篇：${prevPost.title}`;
    } else {
        prevPostLink.style.display = 'none';
    }
    
    if (currentIndex < blogPosts.length - 1) {
        const nextPost = blogPosts[currentIndex + 1];
        nextPostLink.href = `post.html?id=${nextPost.id}`;
        nextPostLink.textContent = `下一篇：${nextPost.title}`;
    } else {
        nextPostLink.style.display = 'none';
    }
}

// 加载相关文章
function loadRelatedPosts(currentPost) {
    const relatedPostsContainer = document.querySelector('.related-posts');
    if (!relatedPostsContainer) return;
    
    // 查找同分类的文章
    const relatedPosts = blogPosts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3);
    
    if (relatedPosts.length === 0) {
        // 如果没有同分类的文章，则显示最新的文章
        const latestPosts = [...blogPosts]
            .filter(p => p.id !== currentPost.id)
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 3);
        
        latestPosts.forEach(post => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="post.html?id=${post.id}">${post.title}</a>`;
            relatedPostsContainer.appendChild(listItem);
        });
    } else {
        relatedPosts.forEach(post => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="post.html?id=${post.id}">${post.title}</a>`;
            relatedPostsContainer.appendChild(listItem);
        });
    }
}

// 加载评论
function loadComments() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    
    if (!postId) return;
    
    const commentsContainer = document.getElementById('comments-list');
    if (!commentsContainer) return;
    
    const postComments = comments[postId] || [];
    
    if (postComments.length === 0) {
        commentsContainer.innerHTML = '<p>暂无评论，来发表第一个评论吧！</p>';
        return;
    }
    
    postComments.forEach(comment => {
        const commentElement = createCommentElement(comment);
        commentsContainer.appendChild(commentElement);
    });
}

// 创建评论元素
function createCommentElement(comment) {
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    commentDiv.innerHTML = `
        <div class="comment-header">
            <span class="comment-author">${comment.author}</span>
            <span class="comment-date">${formatDate(comment.date)}</span>
        </div>
        <div class="comment-content">${comment.content}</div>
    `;
    return commentDiv;
}

// 设置评论表单
function setupCommentForm() {
    const commentForm = document.getElementById('comment-form');
    if (!commentForm) return;
    
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const urlParams = new URLSearchParams(window.location.search);
        const postId = parseInt(urlParams.get('id'));
        
        if (!postId) return;
        
        const name = document.getElementById('comment-name').value;
        const email = document.getElementById('comment-email').value;
        const content = document.getElementById('comment-content').value;
        
        // 创建新评论
        const newComment = {
            id: Date.now(),
            author: name,
            date: new Date().toISOString().split('T')[0],
            content: content
        };
        
        // 添加到评论数据
        if (!comments[postId]) {
            comments[postId] = [];
        }
        comments[postId].push(newComment);
        
        // 清空表单
        commentForm.reset();
        
        // 重新加载评论
        const commentsContainer = document.getElementById('comments-list');
        commentsContainer.innerHTML = '';
        loadComments();
        
        // 显示成功消息
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = '评论发表成功！';
        successMessage.style.color = '#28a745';
        successMessage.style.marginTop = '10px';
        commentForm.appendChild(successMessage);
        
        // 3秒后移除成功消息
        setTimeout(() => {
            successMessage.remove();
        }, 3000);
    });
}

// 格式化日期
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// 加载分类页面内容
function loadCategories() {
    const categoriesContainer = document.getElementById('categories-container');
    if (!categoriesContainer) return;
    
    // 获取所有分类
    const categories = {};
    blogPosts.forEach(post => {
        if (!categories[post.category]) {
            categories[post.category] = {
                name: post.category,
                count: 0,
                posts: []
            };
        }
        categories[post.category].count++;
        categories[post.category].posts.push(post);
    });
    
    // 分类信息
    const categoryInfo = {
        '技术': {
            description: '分享最新的技术文章、编程技巧和开发经验。',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        '生活': {
            description: '记录生活中的点滴感悟和美好瞬间。',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        '旅行': {
            description: '分享旅行中的见闻、风景和体验。',
            image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        '读书': {
            description: '分享读书笔记、书评和阅读感悟。',
            image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        }
    };
    
    // 创建分类卡片
    Object.keys(categories).forEach(categoryName => {
        const category = categories[categoryName];
        const info = categoryInfo[categoryName] || {
            description: '探索更多精彩内容。',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        };
        
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.innerHTML = `
            <div class="category-card-image">
                <img src="${info.image}" alt="${categoryName}">
            </div>
            <div class="category-card-content">
                <h3 class="category-card-title">
                    ${categoryName}
                    <span class="category-card-count">${category.count}</span>
                </h3>
                <p class="category-card-description">${info.description}</p>
                <div class="category-card-posts">
                    ${category.posts.slice(0, 3).map(post =>
                        `<a href="post.html?id=${post.id}">${post.title}</a>`
                    ).join('')}
                </div>
            </div>
        `;
        
        // 添加点击事件，跳转到分类筛选页面
        categoryCard.addEventListener('click', function() {
            // 这里可以实现跳转到分类筛选页面，或者显示该分类下的所有文章
            window.location.href = `index.html?category=${encodeURIComponent(categoryName)}`;
        });
        
        categoriesContainer.appendChild(categoryCard);
    });
}

// 设置联系表单
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // 在实际应用中，这里应该发送数据到服务器
        // 这里仅模拟表单提交
        
        // 清空表单
        contactForm.reset();
        
        // 显示成功消息
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = '消息发送成功！我会尽快回复您。';
        successMessage.style.color = '#28a745';
        successMessage.style.marginTop = '15px';
        successMessage.style.padding = '10px';
        successMessage.style.backgroundColor = '#d4edda';
        successMessage.style.borderRadius = '4px';
        contactForm.appendChild(successMessage);
        
        // 5秒后移除成功消息
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    });
}

// 加载最新评论
function loadLatestComments() {
    const latestCommentsContainer = document.querySelector('.latest-comments');
    if (!latestCommentsContainer) return;
    
    // 获取所有评论并按日期排序
    const allComments = [];
    Object.keys(comments).forEach(postId => {
        comments[postId].forEach(comment => {
            allComments.push({
                ...comment,
                postId: postId
            });
        });
    });
    
    // 按日期排序，最新的在前
    allComments.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // 只显示最新的3条评论
    const latestComments = allComments.slice(0, 3);
    
    if (latestComments.length === 0) {
        latestCommentsContainer.innerHTML = '<li>暂无评论</li>';
        return;
    }
    
    latestComments.forEach(comment => {
        const commentItem = document.createElement('li');
        commentItem.innerHTML = `
            <div class="comment-item">
                <div class="comment-author">${comment.author}</div>
                <div class="comment-excerpt">${comment.content}</div>
            </div>
        `;
        latestCommentsContainer.appendChild(commentItem);
    });
}

// 加载特定分类的文章
function loadCategoryPosts(categoryName) {
    // 更新页面标题
    const pageTitle = document.querySelector('.featured-posts h2');
    if (pageTitle) {
        pageTitle.textContent = `分类：${categoryName}`;
    }
    
    // 隐藏最新文章部分
    const recentPostsSection = document.querySelector('.recent-posts');
    if (recentPostsSection) {
        recentPostsSection.style.display = 'none';
    }
    
    // 加载该分类的文章
    const featuredPostsContainer = document.querySelector('.featured-posts .post-grid');
    if (!featuredPostsContainer) return;
    
    const categoryPosts = blogPosts.filter(post => post.category === categoryName);
    
    if (categoryPosts.length === 0) {
        featuredPostsContainer.innerHTML = '<p>该分类下暂无文章。</p>';
        return;
    }
    
    categoryPosts.forEach(post => {
        const postCard = createPostCard(post);
        featuredPostsContainer.appendChild(postCard);
    });
}