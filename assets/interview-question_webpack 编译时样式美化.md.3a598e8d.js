import{_ as s,C as a,o as e,c as n,H as p,w as l,k as c,a as r,Q as o}from"./chunks/framework.f92cd432.js";const i=JSON.parse('{"title":"webpack 编译时样式美化","description":"","frontmatter":{"createTime":"2022/11/11","tags":"webpack"},"headers":[],"relativePath":"interview-question/webpack 编译时样式美化.md","filePath":"全部文档/前端面试题/webpack/webpack 编译时样式美化.md","lastUpdated":1696860910000}'),t={name:"interview-question/webpack 编译时样式美化.md"},b=c("h1",{id:"webpack-编译时样式美化",tabindex:"-1"},[r("webpack 编译时样式美化 "),c("a",{class:"header-anchor",href:"#webpack-编译时样式美化","aria-label":'Permalink to "webpack 编译时样式美化"'},"​")],-1),g=o('<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8004efe4a7ba4907aea01d6099ab7ab0~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="image.png"></p><p>对比下没有添加特效的，如</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/65ec0f0532e94352b0e652070a6cb4cb~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="image.png"></p><p>差别还是挺大的，尤其是我之前一直是用脚手架去搭项目，突然看到这种还是有点不适应的，有时候甚至都不确定是否编译完全。不过也有人喜欢这种不加修饰的，因人而异吧，那么接下来看看怎么实现的。</p><h3 id="webpack内置插件progressplugin" tabindex="-1">webpack内置插件ProgressPlugin <a class="header-anchor" href="#webpack内置插件progressplugin" aria-label="Permalink to &quot;webpack内置插件ProgressPlugin&quot;">​</a></h3><p>因为是内置的，所以直接在webpack中引入就行 <code>const { ProgressPlugin } = require(&#39;webpack&#39;)</code></p><p>ProgressPlugin包含一个对象ProgressPlugin({}); 结合我们上一篇写的在webpack.config.base.js中</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const { ProgressPlugin } = require(&#39;webpack&#39;);</span></span>\n<span class="line"><span style="color:#e1e4e8;">const handler = (percentage, message, ...args) =&gt; {</span></span>\n<span class="line"><span style="color:#e1e4e8;">  // precentage 表示编译的百分比</span></span>\n<span class="line"><span style="color:#e1e4e8;">  // message就是webpack打包时想告诉我们的消息</span></span>\n<span class="line"><span style="color:#e1e4e8;">  // ...args就是一些其他消息</span></span>\n<span class="line"><span style="color:#e1e4e8;">  console.info(percentage, message, ...args);</span></span>\n<span class="line"><span style="color:#e1e4e8;">};</span></span>\n<span class="line"><span style="color:#e1e4e8;"></span></span>\n<span class="line"><span style="color:#e1e4e8;">在plugin中加入ProgressPlugin这个配置</span></span>\n<span class="line"><span style="color:#e1e4e8;">new ProgressPlugin({</span></span>\n<span class="line"><span style="color:#e1e4e8;">      handler</span></span>\n<span class="line"><span style="color:#e1e4e8;">    })</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const { ProgressPlugin } = require(&#39;webpack&#39;);</span></span>\n<span class="line"><span style="color:#24292e;">const handler = (percentage, message, ...args) =&gt; {</span></span>\n<span class="line"><span style="color:#24292e;">  // precentage 表示编译的百分比</span></span>\n<span class="line"><span style="color:#24292e;">  // message就是webpack打包时想告诉我们的消息</span></span>\n<span class="line"><span style="color:#24292e;">  // ...args就是一些其他消息</span></span>\n<span class="line"><span style="color:#24292e;">  console.info(percentage, message, ...args);</span></span>\n<span class="line"><span style="color:#24292e;">};</span></span>\n<span class="line"><span style="color:#24292e;"></span></span>\n<span class="line"><span style="color:#24292e;">在plugin中加入ProgressPlugin这个配置</span></span>\n<span class="line"><span style="color:#24292e;">new ProgressPlugin({</span></span>\n<span class="line"><span style="color:#24292e;">      handler</span></span>\n<span class="line"><span style="color:#24292e;">    })</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>配置完就是这样的效果</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f7a4f76671b8467a880ec7cd266134e5~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="image.png"> 当然大家可以加一点修饰，console.log()中可以搞个备注啥的，例如</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const handler = (percentage, message, ...args) =&gt; {</span></span>\n<span class="line"><span style="color:#e1e4e8;">  console.info(&#39;进度&#39;+percentage, &#39;处理模块&#39;+message, ...args);</span></span>\n<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const handler = (percentage, message, ...args) =&gt; {</span></span>\n<span class="line"><span style="color:#24292e;">  console.info(&#39;进度&#39;+percentage, &#39;处理模块&#39;+message, ...args);</span></span>\n<span class="line"><span style="color:#24292e;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/766a70c2844e496184b67745ad9629f4~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="image.png"> 比原来的好一点。但是ProgressPlugin配置不只是handler这一个，还有其他配置，如果想要了解可以看webpack官网。<a href="https://link.juejin.cn/?target=https%3A%2F%2Fwebpack.docschina.org%2Fplugins%2Fprogress-plugin%2F%23root" title="https://webpack.docschina.org/plugins/progress-plugin/#root" target="_blank" rel="noreferrer">webpack.docschina.org/plugins/pro…</a></p><h3 id="webpackbar美化" tabindex="-1">WebpackBar美化 <a class="header-anchor" href="#webpackbar美化" aria-label="Permalink to &quot;WebpackBar美化&quot;">​</a></h3><p>先安装WebpackBar,这个包还是很多人在用的</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6ef7d32d212d4cd592084b93e8706780~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="image.png"><br><code>yarn add webpackbar</code></p><p>然后在webpack.config.base.js中</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const WebpackBar = require(&#39;webpackbar&#39;);</span></span>\n<span class="line"><span style="color:#e1e4e8;">plugins: [</span></span>\n<span class="line"><span style="color:#e1e4e8;">new WebpackBar({</span></span>\n<span class="line"><span style="color:#e1e4e8;">      name: &#39;张三王五&#39;,  // 默认为webpack，可以更改</span></span>\n<span class="line"><span style="color:#e1e4e8;">      color: &quot;black&quot;,  // 进度条的颜色，可以自己设置</span></span>\n<span class="line"><span style="color:#e1e4e8;">      basic: false,   // 默认为false，启用一个简单的日志报告器</span></span>\n<span class="line"><span style="color:#e1e4e8;">      // reports: [], //默认为[]自定义配置相当于，设置了这个，其他就会失效</span></span>\n<span class="line"><span style="color:#e1e4e8;">    })</span></span>\n<span class="line"><span style="color:#e1e4e8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const WebpackBar = require(&#39;webpackbar&#39;);</span></span>\n<span class="line"><span style="color:#24292e;">plugins: [</span></span>\n<span class="line"><span style="color:#24292e;">new WebpackBar({</span></span>\n<span class="line"><span style="color:#24292e;">      name: &#39;张三王五&#39;,  // 默认为webpack，可以更改</span></span>\n<span class="line"><span style="color:#24292e;">      color: &quot;black&quot;,  // 进度条的颜色，可以自己设置</span></span>\n<span class="line"><span style="color:#24292e;">      basic: false,   // 默认为false，启用一个简单的日志报告器</span></span>\n<span class="line"><span style="color:#24292e;">      // reports: [], //默认为[]自定义配置相当于，设置了这个，其他就会失效</span></span>\n<span class="line"><span style="color:#24292e;">    })</span></span>\n<span class="line"><span style="color:#24292e;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>效果</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8757db48466149e392c0bb0b28c13378~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="image.png"></p><p>自定义配置reports，如果大家感兴趣可以去试试看,这是包的地址<a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fwebpackbar" title="https://www.npmjs.com/package/webpackbar" target="_blank" rel="noreferrer">www.npmjs.com/package/web…</a></p><p>细心的朋友肯定发现了，打包结束还没有优化，还是这个样子</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d9afe57de5c64669adf3260349cf7164~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="image.png"></p><p>这时候就需要这个插件了</p><h3 id="friendly-errors-webpack-plugin" tabindex="-1">friendly-errors-webpack-plugin <a class="header-anchor" href="#friendly-errors-webpack-plugin" aria-label="Permalink to &quot;friendly-errors-webpack-plugin&quot;">​</a></h3><p>首先下载这个包<br><code>yarn add friendly-errors-webpack-plugin</code></p><p>然后在webpack.config.base.js中</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const FriendlyErrorsWebpackPlugin = require(&#39;friendly-errors-webpack-plugin&#39;);</span></span>\n<span class="line"><span style="color:#e1e4e8;"></span></span>\n<span class="line"><span style="color:#e1e4e8;">plugins: [new FriendlyErrorsWebpackPlugin({</span></span>\n<span class="line"><span style="color:#e1e4e8;">    compilationSuccessInfo: {</span></span>\n<span class="line"><span style="color:#e1e4e8;">      messages: [&#39;张三王五跑起来 http://localhost:5555&#39;]</span></span>\n<span class="line"><span style="color:#e1e4e8;">    },</span></span>\n<span class="line"><span style="color:#e1e4e8;">  })]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const FriendlyErrorsWebpackPlugin = require(&#39;friendly-errors-webpack-plugin&#39;);</span></span>\n<span class="line"><span style="color:#24292e;"></span></span>\n<span class="line"><span style="color:#24292e;">plugins: [new FriendlyErrorsWebpackPlugin({</span></span>\n<span class="line"><span style="color:#24292e;">    compilationSuccessInfo: {</span></span>\n<span class="line"><span style="color:#24292e;">      messages: [&#39;张三王五跑起来 http://localhost:5555&#39;]</span></span>\n<span class="line"><span style="color:#24292e;">    },</span></span>\n<span class="line"><span style="color:#24292e;">  })]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>如图</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ee1a97e58c0b4a228cb8db62973f6fc0~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="image.png"></p><p>效果是有了，但是下面这些信息还是需要删掉，在webpack5，我们需要在webpack.config.base.js配置的对外层加<code>stats: &#39;errors-only&#39;</code>,webpack5之前好像是在devServer中添加quit: false.</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/20139660f19844a083f1bae341513caa~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="image.png"></p><p>最后项目yarn start一下</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bc7ebaafdc6049ee9c3f16da7715e060~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image?" alt="image.png"></p><p>这下控制台干净了，不过这也是最基础的配置。就是不知道配置这些会不会对编译速度变慢，所以我也就配置了一些基础的内容。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>编译样式美化算是弄完了，这些其实网上都可以搜的到，但是这也是我使用webpack必走的一条路，所以记录下来。原本想着是写在上一篇，但是篇幅有点长，所以另起一篇。希望在记录的同时可以帮助到大家，如果文章中有什么错误，都可以评论让我改正。</p>',36);const u=s(t,[["render",function(s,c,r,o,i,t){const u=a("ArticleMetadata"),m=a("ClientOnly");return e(),n("div",null,[b,p(m,null,{default:l((()=>[p(u)])),_:1}),g])}]]);export{i as __pageData,u as default};
