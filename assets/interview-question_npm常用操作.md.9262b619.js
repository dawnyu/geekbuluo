import{_ as a,C as s,o as e,c as n,H as l,w as p,k as o,a as r,Q as i}from"./chunks/framework.f92cd432.js";const c=JSON.parse('{"title":"常用操作","description":"","frontmatter":{"createTime":"2022/10/24","tags":"npm"},"headers":[],"relativePath":"interview-question/npm常用操作.md","filePath":"全部文档/前端面试题/npm/npm常用操作.md","lastUpdated":1696860910000}'),t={name:"interview-question/npm常用操作.md"},d=o("h1",{id:"常用操作",tabindex:"-1"},[r("常用操作 "),o("a",{class:"header-anchor",href:"#常用操作","aria-label":'Permalink to "常用操作"'},"​")],-1),h=i('<h2 id="登录" tabindex="-1">登录 <a class="header-anchor" href="#登录" aria-label="Permalink to &quot;登录&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm login </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> npm adduser</span></span>\n<span class="line"><span style="color:#E1E4E8;">npm login</span></span>\n<span class="line"><span style="color:#E1E4E8;">npm adduser</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm login </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> npm adduser</span></span>\n<span class="line"><span style="color:#24292E;">npm login</span></span>\n<span class="line"><span style="color:#24292E;">npm adduser</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="docs-查看某个包的文档" tabindex="-1">docs 查看某个包的文档 <a class="header-anchor" href="#docs-查看某个包的文档" aria-label="Permalink to &quot;docs 查看某个包的文档&quot;">​</a></h2><h3 id="查看某个包的文档" tabindex="-1">查看某个包的文档 <a class="header-anchor" href="#查看某个包的文档" aria-label="Permalink to &quot;查看某个包的文档&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm docs [package</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">name]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm docs [package</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">name]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="查看某个包的官网" tabindex="-1">查看某个包的官网 <a class="header-anchor" href="#查看某个包的官网" aria-label="Permalink to &quot;查看某个包的官网&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm home [package</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">name]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm home [package</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">name]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="info-查看一个包的详细信息" tabindex="-1">info 查看一个包的详细信息 <a class="header-anchor" href="#info-查看一个包的详细信息" aria-label="Permalink to &quot;info  查看一个包的详细信息&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm v [package</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">name]</span></span>\n<span class="line"><span style="color:#E1E4E8;"># or</span></span>\n<span class="line"><span style="color:#E1E4E8;">npm view [package</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">name]</span></span>\n<span class="line"><span style="color:#E1E4E8;">npm info [package</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">name]</span></span>\n<span class="line"><span style="color:#E1E4E8;">npm show [package</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">name]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm v [package</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">name]</span></span>\n<span class="line"><span style="color:#24292E;"># or</span></span>\n<span class="line"><span style="color:#24292E;">npm view [package</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">name]</span></span>\n<span class="line"><span style="color:#24292E;">npm info [package</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">name]</span></span>\n<span class="line"><span style="color:#24292E;">npm show [package</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">name]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="star-收藏项目" tabindex="-1">star 收藏项目 <a class="header-anchor" href="#star-收藏项目" aria-label="Permalink to &quot;star 收藏项目&quot;">​</a></h2><h3 id="主要是用来收藏项目" tabindex="-1">主要是用来收藏项目 <a class="header-anchor" href="#主要是用来收藏项目" aria-label="Permalink to &quot;主要是用来收藏项目&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm star  [package</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">name]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm star  [package</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">name]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="取消收藏" tabindex="-1">取消收藏 <a class="header-anchor" href="#取消收藏" aria-label="Permalink to &quot;取消收藏&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm unstar [package</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">name]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm unstar [package</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">name]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="查看收藏列表" tabindex="-1">查看收藏列表 <a class="header-anchor" href="#查看收藏列表" aria-label="Permalink to &quot;查看收藏列表&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm stars</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm stars</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="versions-查看某个包的所有版本" tabindex="-1">versions 查看某个包的所有版本 <a class="header-anchor" href="#versions-查看某个包的所有版本" aria-label="Permalink to &quot;versions 查看某个包的所有版本&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm v [package</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">name] versions</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm v [package</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">name] versions</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="本地开发的-npm-包如何调试" tabindex="-1">本地开发的 npm 包如何调试 <a class="header-anchor" href="#本地开发的-npm-包如何调试" aria-label="Permalink to &quot;本地开发的 npm 包如何调试&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm install . </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">g</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A737D;">// 在某个项目中安装本地包</span></span>\n<span class="line"><span style="color:#E1E4E8;">npm install ..</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">Path</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">xxPackageName</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm install . </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">g</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A737D;">// 在某个项目中安装本地包</span></span>\n<span class="line"><span style="color:#24292E;">npm install ..</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">Path</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">xxPackageName</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="publish-发布包" tabindex="-1">publish 发布包 <a class="header-anchor" href="#publish-发布包" aria-label="Permalink to &quot;publish 发布包&quot;">​</a></h2><p>首先，你得在本地登录 登录完成后，发布自己开发的工具包，只需简单的三步！ 注意:使用淘宝源会报错，要改回默认源</p><h3 id="记得每次发布前-修改下版本号" tabindex="-1">记得每次发布前，修改下版本号 <a class="header-anchor" href="#记得每次发布前-修改下版本号" aria-label="Permalink to &quot;记得每次发布前，修改下版本号&quot;">​</a></h3><p>npm version [版本号]</p><p>然后当前目录执行npm publish就好了</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm publish</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm publish</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="取消发布包" tabindex="-1">取消发布包 <a class="header-anchor" href="#取消发布包" aria-label="Permalink to &quot;取消发布包&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm unpublish [package</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">name] </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">f</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm unpublish [package</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">name] </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">f</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="取消发布包的指定版本" tabindex="-1">取消发布包的指定版本 <a class="header-anchor" href="#取消发布包的指定版本" aria-label="Permalink to &quot;取消发布包的指定版本&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm unpublish [package</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">name]@version</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm unpublish [package</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">name]@version</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="deprecate-弃用包" tabindex="-1">deprecate 弃用包 <a class="header-anchor" href="#deprecate-弃用包" aria-label="Permalink to &quot;deprecate 弃用包&quot;">​</a></h2><h3 id="弃用整个包" tabindex="-1">弃用整个包 <a class="header-anchor" href="#弃用整个包" aria-label="Permalink to &quot;弃用整个包&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm deprecate </span><span style="color:#F97583;">package-</span><span style="color:#E1E4E8;">name  </span><span style="color:#9ECBFF;">&#39;弃用信息&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm deprecate </span><span style="color:#D73A49;">package-</span><span style="color:#24292E;">name  </span><span style="color:#032F62;">&#39;弃用信息&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="弃用包的单个版本" tabindex="-1">弃用包的单个版本 <a class="header-anchor" href="#弃用包的单个版本" aria-label="Permalink to &quot;弃用包的单个版本&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm deprecate </span><span style="color:#F97583;">package-</span><span style="color:#E1E4E8;">name@version  </span><span style="color:#9ECBFF;">&#39;弃用信息&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm deprecate </span><span style="color:#D73A49;">package-</span><span style="color:#24292E;">name@version  </span><span style="color:#032F62;">&#39;弃用信息&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="取消弃用操作" tabindex="-1">取消弃用操作 <a class="header-anchor" href="#取消弃用操作" aria-label="Permalink to &quot;取消弃用操作&quot;">​</a></h3><h4 id="将弃用消息改为空字符串即可" tabindex="-1">将弃用消息改为空字符串即可 <a class="header-anchor" href="#将弃用消息改为空字符串即可" aria-label="Permalink to &quot;将弃用消息改为空字符串即可&quot;">​</a></h4><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm deprecate </span><span style="color:#F97583;">package-</span><span style="color:#E1E4E8;">name </span><span style="color:#9ECBFF;">&#39;&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm deprecate </span><span style="color:#D73A49;">package-</span><span style="color:#24292E;">name </span><span style="color:#032F62;">&#39;&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="其他操作" tabindex="-1">其他操作 <a class="header-anchor" href="#其他操作" aria-label="Permalink to &quot;其他操作&quot;">​</a></h2><h3 id="查看项目中那些包过时" tabindex="-1">查看项目中那些包过时 <a class="header-anchor" href="#查看项目中那些包过时" aria-label="Permalink to &quot;查看项目中那些包过时&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm outdated</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm outdated</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="查看本地中那些包过时" tabindex="-1">查看本地中那些包过时 <a class="header-anchor" href="#查看本地中那些包过时" aria-label="Permalink to &quot;查看本地中那些包过时&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm outdated  </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">g  </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">depth</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm outdated  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">g  </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">depth</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="列出-node-modules-中的所有包" tabindex="-1">列出 node_modules 中的所有包 <a class="header-anchor" href="#列出-node-modules-中的所有包" aria-label="Permalink to &quot;列出 node_modules 中的所有包&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">ls node_modules</span></span>\n<span class="line"><span style="color:#E1E4E8;">dir node_modules</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">ls node_modules</span></span>\n<span class="line"><span style="color:#24292E;">dir node_modules</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="审计项目中所有包的安全漏洞" tabindex="-1">审计项目中所有包的安全漏洞 <a class="header-anchor" href="#审计项目中所有包的安全漏洞" aria-label="Permalink to &quot;审计项目中所有包的安全漏洞&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm audit</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm audit</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="这个命令依赖-package-lock-json-文件-所以如果你用的是yarn需要使用下面的命令" tabindex="-1">这个命令依赖 package-lock.json 文件,所以如果你用的是yarn需要使用下面的命令 <a class="header-anchor" href="#这个命令依赖-package-lock-json-文件-所以如果你用的是yarn需要使用下面的命令" aria-label="Permalink to &quot;这个命令依赖 package-lock.json 文件,所以如果你用的是yarn需要使用下面的命令&quot;">​</a></h4><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">yarn audit</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">yarn audit</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="执行后会列出有问题的包" tabindex="-1">执行后会列出有问题的包 <a class="header-anchor" href="#执行后会列出有问题的包" aria-label="Permalink to &quot;执行后会列出有问题的包&quot;">​</a></h3><ul><li>Critical 需要立即解决的!</li><li>High 需要尽快解决!</li><li>Moderate 在时间允许的情况下解决</li><li>Low 随便你,不慌不燥不急不忙</li></ul><h3 id="检测一下当前镜像源的延迟" tabindex="-1">检测一下当前镜像源的延迟 <a class="header-anchor" href="#检测一下当前镜像源的延迟" aria-label="Permalink to &quot;检测一下当前镜像源的延迟&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm ping</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm ping</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="检测当前-node-和-npm-存在的问题-👇" tabindex="-1">检测当前 node 和 npm 存在的问题 👇 <a class="header-anchor" href="#检测当前-node-和-npm-存在的问题-👇" aria-label="Permalink to &quot;检测当前 node 和 npm 存在的问题 👇&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm doctor</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm doctor</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',55);const u=a(t,[["render",function(a,o,r,i,c,t){const u=s("ArticleMetadata"),m=s("ClientOnly");return e(),n("div",null,[d,l(m,null,{default:p((()=>[l(u)])),_:1}),h])}]]);export{c as __pageData,u as default};
