import{_ as s,C as a,o as n,c as l,H as p,w as e,k as o,a as r,Q as c}from"./chunks/framework.80346561.js";const t=JSON.parse('{"title":"微信小程序的支付流程","description":"","frontmatter":{"createTime":"2022/10/09","tag":"westore"},"headers":[],"relativePath":"interview-question/微信小程序的支付流程.md","filePath":"s/前端面试题/小程序/微信小程序的支付流程.md","lastUpdated":1696495218000}'),i={name:"interview-question/微信小程序的支付流程.md"},E=o("h1",{id:"微信小程序的支付流程",tabindex:"-1"},[r("微信小程序的支付流程 "),o("a",{class:"header-anchor",href:"#微信小程序的支付流程","aria-label":'Permalink to "微信小程序的支付流程"'},"​")],-1),y=c('<h2 id="一、前言" tabindex="-1">一、前言 <a class="header-anchor" href="#一、前言" aria-label="Permalink to &quot;一、前言&quot;">​</a></h2><p>微信小程序为电商类小程序，提供了非常完善、优秀、安全的支付功能 在小程序内可调用微信的API完成支付功能，方便、快捷</p><h3 id="场景如下图所示" tabindex="-1">场景如下图所示 <a class="header-anchor" href="#场景如下图所示" aria-label="Permalink to &quot;场景如下图所示&quot;">​</a></h3><p><img src="/geekbuluo/assets/pay1.e0fd4e60.webp" alt="图片"></p><p><img src="/geekbuluo/assets/pay2.1e05aab2.webp" alt="图片"></p><ul><li>用户通过分享或扫描二维码进入商户小程序，用户选择购买，完成选购流程</li><li>调起微信支付控件，用户开始输入支付密码</li><li>密码验证通过，支付成功。商户后台得到支付成功的通知</li><li>返回商户小程序，显示购买成功</li><li>微信支付公众号下发支付凭证</li></ul><h2 id="二、流程" tabindex="-1">二、流程 <a class="header-anchor" href="#二、流程" aria-label="Permalink to &quot;二、流程&quot;">​</a></h2><p>以电商小程序为例 支付流程图如下所示： <img src="/geekbuluo/assets/pay3.5c874458.webp" alt="图片"></p><h3 id="具体的做法" tabindex="-1">具体的做法 <a class="header-anchor" href="#具体的做法" aria-label="Permalink to &quot;具体的做法&quot;">​</a></h3><ul><li>打开某小程序，点击直接下单</li><li>wx.login获取用户临时登录凭证code，发送到后端服务器换取openId</li><li>在下单时，小程序需要将购买的商品Id，商品数量，以及用户的openId传送到服务器</li><li>服务器在接收到商品Id、商品数量、openId后，生成服务期订单数据，同时经过一定的签名算法，向微信支付发送请求，获取预付单信息(prepay_id)，同时将获取的数据再次进行相应规则的签名，向小程序端响应必要的信息</li><li>小程序端在获取对应的参数后，调用wx.requestPayment()发起微信支付，唤醒支付工作台，进行支付</li><li>接下来的一些列操作都是由用户来操作的包括了微信支付密码，指纹等验证，确认支付之后执行鉴权调起支付</li><li>鉴权调起支付：在微信后台进行鉴权，微信后台直接返回给前端支付的结果，前端收到返回数据后对支付结果进行展示</li><li>推送支付结果：微信后台在给前端返回支付的结果后，也会向后台也返回一个支付结果，后台通过这个支付结果来更新订单的状态 其中后端响应数据必要的信息则是wx.requestPayment方法所需要的参数，大致如下：</li></ul><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">wx.</span><span style="color:#B392F0;">requestPayment</span><span style="color:#E1E4E8;">({</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 时间戳</span></span>\n<span class="line"><span style="color:#E1E4E8;">  timeStamp: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 随机字符串</span></span>\n<span class="line"><span style="color:#E1E4E8;">  nonceStr: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 统一下单接口返回的 prepay_id 参数值</span></span>\n<span class="line"><span style="color:#E1E4E8;">  package: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 签名类型</span></span>\n<span class="line"><span style="color:#E1E4E8;">  signType: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 签名</span></span>\n<span class="line"><span style="color:#E1E4E8;">  paySign: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 调用成功回调</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;"> () {},</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 失败回调</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fail</span><span style="color:#E1E4E8;"> () {},</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 接口调用结束回调</span></span>\n<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">complete</span><span style="color:#E1E4E8;"> () {}</span></span>\n<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">wx.</span><span style="color:#6F42C1;">requestPayment</span><span style="color:#24292E;">({</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 时间戳</span></span>\n<span class="line"><span style="color:#24292E;">  timeStamp: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 随机字符串</span></span>\n<span class="line"><span style="color:#24292E;">  nonceStr: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 统一下单接口返回的 prepay_id 参数值</span></span>\n<span class="line"><span style="color:#24292E;">  package: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 签名类型</span></span>\n<span class="line"><span style="color:#24292E;">  signType: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 签名</span></span>\n<span class="line"><span style="color:#24292E;">  paySign: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 调用成功回调</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;"> () {},</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 失败回调</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fail</span><span style="color:#24292E;"> () {},</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 接口调用结束回调</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">complete</span><span style="color:#24292E;"> () {}</span></span>\n<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="参数表如下所示" tabindex="-1">参数表如下所示 <a class="header-anchor" href="#参数表如下所示" aria-label="Permalink to &quot;参数表如下所示&quot;">​</a></h3><p><img src="/geekbuluo/assets/pay4.77888063.webp" alt="图片"></p><h2 id="三、结束" tabindex="-1">三、结束 <a class="header-anchor" href="#三、结束" aria-label="Permalink to &quot;三、结束&quot;">​</a></h2><p>小程序支付和以往的网页、APP微信支付大同小异，可以说小程序的支付变得更加简洁，不需要设置支付目录、域名授权等操作</p>',15);const b=s(i,[["render",function(s,o,r,c,t,i){const b=a("ArticleMetadata"),u=a("ClientOnly");return n(),l("div",null,[E,p(u,null,{default:e((()=>[p(b)])),_:1}),y])}]]);export{t as __pageData,b as default};
