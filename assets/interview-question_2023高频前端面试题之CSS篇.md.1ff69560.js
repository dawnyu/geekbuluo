import{_ as e,C as s,o as a,c as n,H as l,w as i,k as p,a as o,Q as t}from"./chunks/framework.f92cd432.js";const r=JSON.parse('{"title":"2022高频前端面试题——CSS篇","description":"","frontmatter":{"createTime":"2022/11/08","tags":"面试题,css,面试题集合"},"headers":[],"relativePath":"interview-question/2023高频前端面试题之CSS篇.md","filePath":"全部文档/前端面试题/面试真题/2023高频前端面试题之CSS篇.md","lastUpdated":1696860910000}'),c={name:"interview-question/2023高频前端面试题之CSS篇.md"},d=p("h1",{id:"_2022高频前端面试题——css篇",tabindex:"-1"},[o("2022高频前端面试题——CSS篇 "),p("a",{class:"header-anchor",href:"#_2022高频前端面试题——css篇","aria-label":'Permalink to "2022高频前端面试题——CSS篇"'},"​")],-1),m=t('<h2 id="_1-px-和-em-的区别" tabindex="-1">1. px 和 em 的区别 <a class="header-anchor" href="#_1-px-和-em-的区别" aria-label="Permalink to &quot;1\\. px 和 em 的区别&quot;">​</a></h2><p><strong>📢 参考回答：</strong></p><p><code>px</code>全称<code>pixel</code>像素，是相对于屏幕分辨率而言的，它是一个绝对单位，但同时具有一定的相对性。因为在同一个设备上每个像素代表的物理长度是固定不变的，这点表现的是绝对性。但是在不同的设备之间每个设备像素所代表的物理长度是可以变化的，这点表现的是相对性</p><p><code>em</code>是一个相对长度单位，具体的大小需要相对于父元素计算，比如父元素的字体大小为80px，那么子元素1em就表示大小和父元素一样为80px，0.5em就表示字体大小是父元素的一半为40px</p><h2 id="_2-vw、vh-是什么" tabindex="-1">2. <em>vw、vh</em> 是什么？ <a class="header-anchor" href="#_2-vw、vh-是什么" aria-label="Permalink to &quot;2\\. _vw、vh_ 是什么？&quot;">​</a></h2><p><strong>📢 参考回答：</strong></p><p><em>vw</em> 和 <em>vh</em> 是 <em>CSS3</em> 新单位，即 <em>view width</em> 可视窗口宽度 和 <em>view height</em> 可视窗口高度。1_vw_就等于可视窗口宽度的百分之一，1_vh_ 就等于可视窗口高度的百分之一。</p><h2 id="_3-介绍下-bfc-及其应用" tabindex="-1">3.  介绍下 <em>BFC</em> 及其应用 <a class="header-anchor" href="#_3-介绍下-bfc-及其应用" aria-label="Permalink to &quot;3\\.  介绍下 _BFC_ 及其应用&quot;">​</a></h2><p><strong>📢 参考回答：</strong></p><p>所谓 <em>BFC</em>，指的是一个独立的布局环境，<em>BFC</em> 内部的元素布局与外部互不影响。</p><p>触发 <em>BFC</em> 的方式有很多，常见的有：</p><ul><li>设置浮动</li><li><em>overflow</em> 设置为 <em>auto、scroll、hidden</em></li><li><em>positon</em> 设置为 <em>absolute、fixed</em></li></ul><p>常见的 <em>BFC</em> 应用有：</p><ul><li>解决浮动元素令父元素高度坍塌的问题</li><li>解决非浮动元素被浮动元素覆盖问题</li><li>解决外边距垂直方向重合的问题</li></ul><h2 id="_4-介绍下-bfc、ifc、gfc-和-ffc" tabindex="-1">4. 介绍下 <em>BFC、IFC、GFC</em> 和 <em>FFC</em> <a class="header-anchor" href="#_4-介绍下-bfc、ifc、gfc-和-ffc" aria-label="Permalink to &quot;4\\. 介绍下 _BFC、IFC、GFC_ 和 _FFC_&quot;">​</a></h2><p><strong>📢 参考回答：</strong></p><ul><li><em>BFC</em>：块级格式上下文，指的是一个独立的布局环境，<em>BFC</em> 内部的元素布局与外部互不影响。</li><li><em>IFC</em>：行内格式化上下文，将一块区域以行内元素的形式来格式化。</li><li><em>GFC</em>：网格布局格式化上下文，将一块区域以 <em>grid</em> 网格的形式来格式化</li><li><em>FFC</em>：弹性格式化上下文，将一块区域以弹性盒的形式来格式化</li></ul><h2 id="_5-flex-布局如何使用" tabindex="-1">5. <em>flex</em> 布局如何使用？ <a class="header-anchor" href="#_5-flex-布局如何使用" aria-label="Permalink to &quot;5\\. _flex_ 布局如何使用？&quot;">​</a></h2><p><strong>📢 参考回答：</strong></p><p>flex 是 Flexible Box 的缩写，意为&quot;弹性布局&quot;。指定容器display: flex即可。</p><p>容器有以下属性：flex-direction，flex-wrap，flex-flow，justify-content，align-items，align-content。</p><ul><li>flex-direction属性决定主轴的方向；</li><li>flex-wrap属性定义，如果一条轴线排不下，如何换行；</li><li>flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap；</li><li>justify-content属性定义了项目在主轴上的对齐方式。</li><li>align-items属性定义项目在交叉轴上如何对齐。</li><li>align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。</li></ul><p>项目（子元素）也有一些属性：order，flex-grow，flex-shrink，flex-basis，flex，align-self。</p><ul><li>order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。</li><li>flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。</li><li>flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。</li><li>flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。</li><li>flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。</li><li>align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 <em>auto</em>，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。</li></ul><h2 id="_6-分析比较-opacity-0、visibility-hidden、display-none-优劣和适用场景" tabindex="-1">6. 分析比较 <em>opacity: 0、visibility: hidden、display: none</em> 优劣和适用场景 <a class="header-anchor" href="#_6-分析比较-opacity-0、visibility-hidden、display-none-优劣和适用场景" aria-label="Permalink to &quot;6\\. 分析比较 _opacity: 0、visibility: hidden、display: none_ 优劣和适用场景&quot;">​</a></h2><p><strong>📢 参考回答：</strong></p><ul><li><p>结构： display:none: 会让元素完全从渲染树中消失，渲染的时候不占据任何空间, 不能点击， visibility: hidden:不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，不能点击 opacity: 0: 不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，可以点击</p></li><li><p>继承： display: none和opacity: 0：是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示。 visibility: hidden：是继承属性，子孙节点消失由于继承了hidden，通过设置visibility: visible;可以让子孙节点显式。</p></li><li><p>性能： displaynone : 修改元素会造成文档回流,读屏器不会读取display: none元素内容，性能消耗较大 visibility:hidden: 修改元素只会造成本元素的重绘,性能消耗较少读屏器读取visibility: hidden元素内容 opacity: 0 ： 修改元素会造成重绘，性能消耗较少</p></li></ul><h2 id="_7-如何用-css-或-js-实现多行文本溢出省略效果-考虑兼容性" tabindex="-1">7. 如何用 <em>css</em> 或 <em>js</em> 实现多行文本溢出省略效果，考虑兼容性 <a class="header-anchor" href="#_7-如何用-css-或-js-实现多行文本溢出省略效果-考虑兼容性" aria-label="Permalink to &quot;7\\. 如何用 _css_ 或 _js_ 实现多行文本溢出省略效果，考虑兼容性&quot;">​</a></h2><p><strong>📢 参考回答：</strong></p><p>CSS 实现方式</p><p>单行：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">overflow: hidden;</span></span>\n<span class="line"><span style="color:#e1e4e8;">text-overflow:ellipsis;</span></span>\n<span class="line"><span style="color:#e1e4e8;">white-space: nowrap;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">overflow: hidden;</span></span>\n<span class="line"><span style="color:#24292e;">text-overflow:ellipsis;</span></span>\n<span class="line"><span style="color:#24292e;">white-space: nowrap;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>多行：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">display: -webkit-box;</span></span>\n<span class="line"><span style="color:#e1e4e8;">-webkit-box-orient: vertical;</span></span>\n<span class="line"><span style="color:#e1e4e8;">-webkit-line-clamp: 3; //行数</span></span>\n<span class="line"><span style="color:#e1e4e8;">overflow: hidden;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">display: -webkit-box;</span></span>\n<span class="line"><span style="color:#24292e;">-webkit-box-orient: vertical;</span></span>\n<span class="line"><span style="color:#24292e;">-webkit-line-clamp: 3; //行数</span></span>\n<span class="line"><span style="color:#24292e;">overflow: hidden;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>兼容：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">p{position: relative; line-height: 20px; max-height: 40px;overflow: hidden;}</span></span>\n<span class="line"><span style="color:#e1e4e8;">p::after{content: &quot;...&quot;; position: absolute; bottom: 0; right: 0; padding-left: 40px;</span></span>\n<span class="line"><span style="color:#e1e4e8;">background: -webkit-linear-gradient(left, transparent, #fff 55%);</span></span>\n<span class="line"><span style="color:#e1e4e8;">background: -o-linear-gradient(right, transparent, #fff 55%);</span></span>\n<span class="line"><span style="color:#e1e4e8;">background: -moz-linear-gradient(right, transparent, #fff 55%);</span></span>\n<span class="line"><span style="color:#e1e4e8;">background: linear-gradient(to right, transparent, #fff 55%);</span></span>\n<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">p{position: relative; line-height: 20px; max-height: 40px;overflow: hidden;}</span></span>\n<span class="line"><span style="color:#24292e;">p::after{content: &quot;...&quot;; position: absolute; bottom: 0; right: 0; padding-left: 40px;</span></span>\n<span class="line"><span style="color:#24292e;">background: -webkit-linear-gradient(left, transparent, #fff 55%);</span></span>\n<span class="line"><span style="color:#24292e;">background: -o-linear-gradient(right, transparent, #fff 55%);</span></span>\n<span class="line"><span style="color:#24292e;">background: -moz-linear-gradient(right, transparent, #fff 55%);</span></span>\n<span class="line"><span style="color:#24292e;">background: linear-gradient(to right, transparent, #fff 55%);</span></span>\n<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>JS 实现方式：</p><ul><li>使用split + 正则表达式将单词与单个文字切割出来存入words</li><li>加上 &#39;...&#39;</li><li>判断scrollHeight与clientHeight，超出的话就从words中pop一个出来</li></ul><h2 id="_8-居中为什么要使用-transform-为什么不使用-marginleft-top-阿里" tabindex="-1">8. 居中为什么要使用 <em>transform</em>（为什么不使用 <em>marginLeft/Top</em>）（阿里） <a class="header-anchor" href="#_8-居中为什么要使用-transform-为什么不使用-marginleft-top-阿里" aria-label="Permalink to &quot;8\\. 居中为什么要使用 _transform_（为什么不使用 _marginLeft/Top_）（阿里）&quot;">​</a></h2><p><strong>📢 参考回答：</strong></p><p>transform 属于合成属性（composite property），对合成属性进行 transition/animation 动画将会创建一个合成层（composite layer），这使得被动画元素在一个独立的层中进行动画。通常情况下，浏览器会将一个层的内容先绘制进一个位图中，然后再作为纹理（texture）上传到 GPU，只要该层的内容不发生改变，就没必要进行重绘（repaint），浏览器会通过重新复合（recomposite）来形成一个新的帧。</p><p>top/left属于布局属性，该属性的变化会导致重排（reflow/relayout），所谓重排即指对这些节点以及受这些节点影响的其它节点，进行CSS计算-&gt;布局-&gt;重绘过程，浏览器需要为整个层进行重绘并重新上传到 GPU，造成了极大的性能开销。</p><h2 id="_9-介绍下粘性布局-sticky-网易" tabindex="-1">9. 介绍下粘性布局（<em>sticky</em>）（网易） <a class="header-anchor" href="#_9-介绍下粘性布局-sticky-网易" aria-label="Permalink to &quot;9\\. 介绍下粘性布局（_sticky_）（网易）&quot;">​</a></h2><p><strong>📢 参考回答：</strong></p><p>position 中的 sticky 值是 CSS3 新增的，设置了 sticky 值后，在屏幕范围（viewport）时该元素的位置并不受到定位影响（设置是top、left等属性无效），当该元素的位置将要移出偏移范围时，定位又会变成fixed，根据设置的left、top等属性成固定位置的效果。</p><p>sticky 属性值有以下几个特点：</p><ul><li>该元素并不脱离文档流，仍然保留元素原本在文档流中的位置。</li><li>当元素在容器中被滚动超过指定的偏移值时，元素在容器内固定在指定位置。亦即如果你设置了top: 50px，那么在sticky元素到达距离相对定位的元素顶部50px的位置时固定，不再向上移动。</li><li>元素固定的相对偏移是相对于离它最近的具有滚动框的祖先元素，如果祖先元素都不可以滚动，那么是相对于viewport来计算元素的偏移量</li></ul><h2 id="_10-说出-space-between-和-space-around-的区别-携程" tabindex="-1">10. 说出 <em>space-between</em> 和 <em>space-around</em> 的区别？（携程） <a class="header-anchor" href="#_10-说出-space-between-和-space-around-的区别-携程" aria-label="Permalink to &quot;10\\. 说出 _space-between_ 和 _space-around_ 的区别？（携程）&quot;">​</a></h2><p><strong>📢 参考回答：</strong></p><p>这个是 <em>flex</em> 布局的内容，其实就是一个边距的区别，按水平布局来说，<code>space-between</code>是两端对齐，在左右两侧没有边距，而<code>space-around</code>是每个 子项目左右方向的 margin 相等，所以两个item中间的间距会比较大。</p><h2 id="_11-css3-中-transition-和-animation-的属性分别有哪些-哔哩哔哩" tabindex="-1">11. <em>CSS3</em> 中 <em>transition</em> 和 <em>animation</em> 的属性分别有哪些（哔哩哔哩） <a class="header-anchor" href="#_11-css3-中-transition-和-animation-的属性分别有哪些-哔哩哔哩" aria-label="Permalink to &quot;11\\. _CSS3_ 中 _transition_ 和 _animation_ 的属性分别有哪些（哔哩哔哩）&quot;">​</a></h2><p><strong>📢 参考回答：</strong></p><p><em>transition</em> 过渡动画：</p><ul><li><em>transition-property</em>：指定过渡的 <em>CSS</em> 属性</li><li><em>transition-duration</em>：指定过渡所需的完成时间</li><li><em>transition-timing-function</em>：指定过渡函数</li><li><em>transition-delay</em>：指定过渡的延迟时间</li></ul><p><em>animation</em> 关键帧动画：</p><ul><li><em>animation-name</em>：指定要绑定到选择器的关键帧的名称</li><li><em>animation-duration</em>：动画指定需要多少秒或毫秒完成</li><li><em>animation-timing-function</em>：设置动画将如何完成一个周期</li><li><em>animation-delay</em>：设置动画在启动前的延迟间隔</li><li><em>animation-iteration-count</em>：定义动画的播放次数</li><li><em>animation-direction</em>：指定是否应该轮流反向播放动画</li><li><em>animation-fill-mode</em>：规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式</li><li><em>animation-play-state</em>：指定动画是否正在运行或已暂停</li></ul><h2 id="_12-分析比较-opacity-0、visibility-hidden、display-none-优劣和适用场景" tabindex="-1">12. 分析比较 <em>opacity: 0、visibility: hidden、display: none</em> 优劣和适用场景 <a class="header-anchor" href="#_12-分析比较-opacity-0、visibility-hidden、display-none-优劣和适用场景" aria-label="Permalink to &quot;12\\. 分析比较 _opacity: 0、visibility: hidden、display: none_ 优劣和适用场景&quot;">​</a></h2><p><strong>📢 参考回答：</strong></p><ol><li>display: none (不占空间，不能点击)（场景，显示出原来这里不存在的结构）</li><li>visibility: hidden（占据空间，不能点击）（场景：显示不会导致页面结构发生变动，不会撑开）</li><li>opacity: 0（占据空间，可以点击）（场景：可以跟transition搭配）</li></ol><h2 id="_13-讲一下-png8、png16、png32-的区别-并简单讲讲-png-的压缩原理" tabindex="-1">13. 讲一下_png8、png16、png32_的区别，并简单讲讲 <em>png</em> 的压缩原理 <a class="header-anchor" href="#_13-讲一下-png8、png16、png32-的区别-并简单讲讲-png-的压缩原理" aria-label="Permalink to &quot;13\\. 讲一下_png8、png16、png32_的区别，并简单讲讲 _png_ 的压缩原理&quot;">​</a></h2><p><strong>📢 参考回答：</strong></p><p>PNG图片主要有三个类型，分别为 PNG 8/ PNG 24 / PNG 32。</p><ul><li><code>PNG 8</code>：PNG 8中的8，其实指的是8bits，相当于用2^8（2的8次方）大小来存储一张图片的颜色种类，2^8等于256，也就是说PNG 8能存储256种颜色，一张图片如果颜色种类很少，将它设置成PNG 8得图片类型是非常适合的。</li><li><code>PNG 24</code>：PNG 24中的24，相当于3乘以8 等于 24，就是用三个8bits分别去表示 R（红）、G（绿）、B（蓝）。R(0-255),G(0-255),B(0-255)，可以表达256乘以256乘以256=16777216种颜色的图片，这样PNG 24就能比PNG 8表示色彩更丰富的图片。但是所占用的空间相对就更大了。</li><li><code>PNG 32</code>：PNG 32中的32，相当于PNG 24 加上 8bits的透明颜色通道，就相当于R（红）、G（绿）、B（蓝）、A（透明）。R(0~255),G(0~255),B(0~255),A(0~255)。比PNG 24多了一个A（透明），也就是说PNG 32能表示跟PNG 24一样多的色彩，并且还支持256种透明的颜色，能表示更加丰富的图片颜色类型。</li></ul><p>PNG图片的压缩，分两个阶段：</p><ul><li><code>预解析（Prediction）</code>：这个阶段就是对png图片进行一个预处理，处理后让它更方便后续的压缩。</li><li><code>压缩（Compression）</code>：执行Deflate压缩，该算法结合了 LZ77 算法和 Huffman 算法对图片进行编码。</li></ul><h2 id="_14-如何用-css-实现一个三角形" tabindex="-1">14. 如何用 <em>CSS</em> 实现一个三角形 <a class="header-anchor" href="#_14-如何用-css-实现一个三角形" aria-label="Permalink to &quot;14\\. 如何用 _CSS_ 实现一个三角形&quot;">​</a></h2><p><strong>📢 参考回答：</strong></p><p>可以利用 border 属性</p><p>利用盒模型的 <code>border</code> 属性上下左右边框交界处会呈现出平滑的斜线这个特点，通过设置不同的上下左右边框宽度或者颜色即可得到三角形或者梯形。</p><p>如果想实现其中的任一个三角形，把其他方向上的 <code>border-color</code> 都设置成透明即可。</p><p>示例代码如下：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div&gt;&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div&gt;&lt;/div&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">div{</span></span>\n<span class="line"><span style="color:#e1e4e8;">width: 0;</span></span>\n<span class="line"><span style="color:#e1e4e8;">height: 0;</span></span>\n<span class="line"><span style="color:#e1e4e8;">border: 10px solid red;</span></span>\n<span class="line"><span style="color:#e1e4e8;">border-top-color: transparent;</span></span>\n<span class="line"><span style="color:#e1e4e8;">border-left-color: transparent;</span></span>\n<span class="line"><span style="color:#e1e4e8;">border-right-color: transparent;</span></span>\n<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">div{</span></span>\n<span class="line"><span style="color:#24292e;">width: 0;</span></span>\n<span class="line"><span style="color:#24292e;">height: 0;</span></span>\n<span class="line"><span style="color:#24292e;">border: 10px solid red;</span></span>\n<span class="line"><span style="color:#24292e;">border-top-color: transparent;</span></span>\n<span class="line"><span style="color:#24292e;">border-left-color: transparent;</span></span>\n<span class="line"><span style="color:#24292e;">border-right-color: transparent;</span></span>\n<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_15-如何实现一个自适应的正方形" tabindex="-1">15. 如何实现一个自适应的正方形 <a class="header-anchor" href="#_15-如何实现一个自适应的正方形" aria-label="Permalink to &quot;15\\. 如何实现一个自适应的正方形&quot;">​</a></h2><p><strong>📢 参考回答：</strong></p><p><strong>方法1：利用 CSS3 的 vw 单位</strong></p><p><code>vw</code> 会把视口的宽度平均分为 100 份</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.square {</span></span>\n<span class="line"><span style="color:#e1e4e8;"> width: 10vw;</span></span>\n<span class="line"><span style="color:#e1e4e8;"> height: 10vw;</span></span>\n<span class="line"><span style="color:#e1e4e8;"> background: red;</span></span>\n<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.square {</span></span>\n<span class="line"><span style="color:#24292e;"> width: 10vw;</span></span>\n<span class="line"><span style="color:#24292e;"> height: 10vw;</span></span>\n<span class="line"><span style="color:#24292e;"> background: red;</span></span>\n<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>方法2：利用 margin 或者 padding 的百分比计算是参照父元素的 width 属性</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.square {</span></span>\n<span class="line"><span style="color:#e1e4e8;"> width: 10%;</span></span>\n<span class="line"><span style="color:#e1e4e8;"> padding-bottom: 10%; </span></span>\n<span class="line"><span style="color:#e1e4e8;"> height: 0; // 防止内容撑开多余的高度</span></span>\n<span class="line"><span style="color:#e1e4e8;"> background: red;</span></span>\n<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.square {</span></span>\n<span class="line"><span style="color:#24292e;"> width: 10%;</span></span>\n<span class="line"><span style="color:#24292e;"> padding-bottom: 10%; </span></span>\n<span class="line"><span style="color:#24292e;"> height: 0; // 防止内容撑开多余的高度</span></span>\n<span class="line"><span style="color:#24292e;"> background: red;</span></span>\n<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="_16-清除浮动的方法" tabindex="-1">16. 清除浮动的方法 <a class="header-anchor" href="#_16-清除浮动的方法" aria-label="Permalink to &quot;16\\. 清除浮动的方法&quot;">​</a></h2><p><strong>📢 参考回答：</strong></p><ul><li><p>clear 清除浮动（添加空div法）在浮动元素下方添加空div，并给该元素写css样式： <code>{clear:both;height:0;overflow:hidden;}</code></p></li><li><p>给浮动元素父级设置高度</p></li><li><p>父级同时浮动（需要给父级同级元素添加浮动）</p></li><li><p>父级设置成inline-block，其margin: 0 auto居中方式失效</p></li><li><p>给父级添加overflow:hidden 清除浮动方法</p></li><li><p>万能清除法 after 伪类清浮动（现在主流方法，推荐使用）</p></li></ul><h2 id="_17-说说两种盒模型以及区别" tabindex="-1">17. 说说两种盒模型以及区别 <a class="header-anchor" href="#_17-说说两种盒模型以及区别" aria-label="Permalink to &quot;17\\. 说说两种盒模型以及区别&quot;">​</a></h2><p><strong>📢 参考回答：</strong></p><p>盒模型也称为框模型，就是从盒子顶部俯视所得的一张平面图，用于描述元素所占用的空间。它有两种盒模型，W3C盒模型和IE盒模型（IE6以下，不包括IE6以及怪异模式下的IE5.5+）</p><p>理论上两者的主要区别是二者的盒子宽高是否包括元素的边框和内边距。当用CSS给给某个元素定义高或宽时，IE盒模型中内容的宽或高将会包含内边距和边框，而W3C盒模型并不会。</p><h2 id="_18-如何触发重排和重绘" tabindex="-1">18. 如何触发重排和重绘？ <a class="header-anchor" href="#_18-如何触发重排和重绘" aria-label="Permalink to &quot;18\\. 如何触发重排和重绘？&quot;">​</a></h2><p><strong>📢 参考回答：</strong></p><p>任何改变用来构建渲染树的信息都会导致一次重排或重绘：</p><ul><li>添加、删除、更新DOM节点</li><li>通过display: none隐藏一个DOM节点-触发重排和重绘</li><li>通过visibility: hidden隐藏一个DOM节点-只触发重绘，因为没有几何变化</li><li>移动或者给页面中的DOM节点添加动画</li><li>添加一个样式表，调整样式属性</li><li>用户行为，例如调整窗口大小，改变字号，或者滚动。</li></ul><h2 id="_19-重绘与重排的区别" tabindex="-1">19. 重绘与重排的区别？ <a class="header-anchor" href="#_19-重绘与重排的区别" aria-label="Permalink to &quot;19\\. 重绘与重排的区别？&quot;">​</a></h2><p><strong>📢 参考回答：</strong></p><p><strong>重排:</strong> 部分渲染树（或者整个渲染树）需要重新分析并且节点尺寸需要重新计算，表现为重新生成布局，重新排列元素</p><p><strong>重绘:</strong> 由于节点的几何属性发生改变或者由于样式发生改变，例如改变元素背景色时，屏幕上的部分内容需要更新，表现为某些元素的外观被改变</p><p>单单改变元素的外观，肯定不会引起网页重新生成布局，但当浏览器完成重排之后，将会重新绘制受到此次重排影响的部分</p><p>重排和重绘代价是高昂的，它们会破坏用户体验，并且让UI展示非常迟缓，而相比之下重排的性能影响更大，在两者无法避免的情况下，一般我们宁可选择代价更小的重绘。</p><p>『重绘』不一定会出现『重排』，『重排』必然会出现『重绘』。</p><h2 id="_20-如何优化图片" tabindex="-1">20. 如何优化图片 <a class="header-anchor" href="#_20-如何优化图片" aria-label="Permalink to &quot;20\\. 如何优化图片&quot;">​</a></h2><p><strong>📢 参考回答：</strong></p><ol><li><p>对于很多装饰类图片，尽量不用图片，因为这类修饰图片完全可以用 CSS 去代替。</p></li><li><p>对于移动端来说，屏幕宽度就那么点，完全没有必要去加载原图浪费带宽。一般图片都用 CDN 加载，可以计算出适配屏幕的宽度，然后去请求相应裁剪好的图片。</p></li><li><p>小图使用 <em>base64</em> 格式</p></li><li><p>将多个图标文件整合到一张图片中（雪碧图）</p></li><li><p>选择正确的图片格式：</p></li></ol><ul><li>对于能够显示 WebP 格式的浏览器尽量使用 WebP 格式。因为 WebP 格式具有更好的图像数据压缩算法，能带来更小的图片体积，而且拥有肉眼识别无差异的图像质量，缺点就是兼容性并不好</li><li>小图使用 PNG，其实对于大部分图标这类图片，完全可以使用 SVG 代替</li><li>照片使用 JPEG</li></ul><h2 id="_21-你能描述一下渐进增强和优雅降级之间的不同吗" tabindex="-1">21. 你能描述一下渐进增强和优雅降级之间的不同吗? <a class="header-anchor" href="#_21-你能描述一下渐进增强和优雅降级之间的不同吗" aria-label="Permalink to &quot;21\\. 你能描述一下渐进增强和优雅降级之间的不同吗?&quot;">​</a></h2><p><strong>📢 参考回答：</strong></p><p><strong>渐进增强 （progressive enhancement）</strong>：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。</p><p><strong>优雅降级 （graceful degradation）</strong>：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。</p><p><code>区别</code>：优雅降级是从复杂的现状开始，并试图减少用户体验的供给，而渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要。降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带。</p><h2 id="_22-css3-新增了那些东西" tabindex="-1">22. <em>CSS3</em> 新增了那些东西？ <a class="header-anchor" href="#_22-css3-新增了那些东西" aria-label="Permalink to &quot;22\\. _CSS3_ 新增了那些东西？&quot;">​</a></h2><p><strong>📢 参考回答：</strong></p><p><strong>CSS3</strong> 新增东西众多，这里列举出一些关键的新增内容：</p><ul><li><p>选择器</p></li><li><p>盒子模型属性：<em>border-radius、box-shadow、border-image</em></p></li><li><p>背景：<em>background-size、background-origin、background-clip</em></p></li><li><p>文本效果：<em>text-shadow、word-wrap</em></p></li><li><p>颜色：新增 <em>RGBA，HSLA</em> 模式</p></li><li><p>渐变：线性渐变、径向渐变</p></li><li><p>字体：<em>@font-face</em></p></li><li><p>2D/3D转换：<em>transform、transform-origin</em></p></li><li><p>过渡与动画：<em>transition、@keyframes、animation</em></p></li><li><p>多列布局</p></li><li><p>媒体查询</p></li></ul><h2 id="_23-隐藏页面中的某个元素的方法有哪些" tabindex="-1">23. 隐藏页面中的某个元素的方法有哪些？ <a class="header-anchor" href="#_23-隐藏页面中的某个元素的方法有哪些" aria-label="Permalink to &quot;23\\. 隐藏页面中的某个元素的方法有哪些？&quot;">​</a></h2><p><strong>📢 参考回答：</strong></p><p><strong>隐藏类型</strong></p><p>屏幕并不是唯一的输出机制，比如说屏幕上看不见的元素（隐藏的元素），其中一些依然能够被读屏软件阅读出来（因为读屏软件依赖于可访问性树来阐述）。为了消除它们之间的歧义，我们将其归为三大类：</p><ul><li>完全隐藏：元素从渲染树中消失，不占据空间。</li><li>视觉上的隐藏：屏幕中不可见，占据空间。</li><li>语义上的隐藏：读屏软件不可读，但正常占据空。</li></ul><p><strong>完全隐藏</strong></p><p>(1) display 属性</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"> display: none;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"> display: none;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>(2) hidden 属性 HTML5 新增属性，相当于 display: none</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div hidden&gt;&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div hidden&gt;&lt;/div&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>视觉上的隐藏</strong></p><p>(1) 设置 posoition 为 absolute 或 fixed，\b通过设置 top、left 等值，将其移出可视区域。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">position:absolute;</span></span>\n<span class="line"><span style="color:#e1e4e8;">left: -99999px;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">position:absolute;</span></span>\n<span class="line"><span style="color:#24292e;">left: -99999px;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>(2) 设置 position 为 relative，通过设置 top、left 等值，将其移出可视区域。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">position: relative;</span></span>\n<span class="line"><span style="color:#e1e4e8;">left: -99999px;</span></span>\n<span class="line"><span style="color:#e1e4e8;">height: 0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">position: relative;</span></span>\n<span class="line"><span style="color:#24292e;">left: -99999px;</span></span>\n<span class="line"><span style="color:#24292e;">height: 0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>(3) 设置 margin 值，将其移出可视区域范围（可视区域占位）。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">margin-left: -99999px;</span></span>\n<span class="line"><span style="color:#e1e4e8;">height: 0;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">margin-left: -99999px;</span></span>\n<span class="line"><span style="color:#24292e;">height: 0;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>语义上隐藏</strong></p><p><em>aria-hidden 属性</em></p><p>读屏软件不可读，占据空间，可见。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;div aria-hidden=&quot;true&quot;&gt;&lt;/div&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;div aria-hidden=&quot;true&quot;&gt;&lt;/div&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',132);const h=e(c,[["render",function(e,p,o,t,r,c){const h=s("ArticleMetadata"),b=s("ClientOnly");return a(),n("div",null,[d,l(b,null,{default:i((()=>[l(h)])),_:1}),m])}]]);export{r as __pageData,h as default};
