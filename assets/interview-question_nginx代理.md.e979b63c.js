import{_ as s,C as n,o as a,c as l,H as p,w as e,k as o,a as i,Q as r}from"./chunks/framework.80346561.js";const t=JSON.parse('{"title":"Nginx","description":"","frontmatter":{"createTime":"2022/10/13","tag":"nginx"},"headers":[],"relativePath":"interview-question/nginx代理.md","filePath":"s/前端面试题/nginx/nginx代理.md","lastUpdated":1696495218000}'),c={name:"interview-question/nginx代理.md"},E=o("h1",{id:"nginx",tabindex:"-1"},[i("Nginx "),o("a",{class:"header-anchor",href:"#nginx","aria-label":'Permalink to "Nginx"'},"​")],-1),y=r('<h2 id="正向代理" tabindex="-1">正向代理 <a class="header-anchor" href="#正向代理" aria-label="Permalink to &quot;正向代理&quot;">​</a></h2><ul><li><p>一个位于客户端和原始服务器(origin server)之间的服务器，为了从原始服务器取得内容，客户端向代理发送一个请求并指定目标(原始服务器)，然后代理向原始服务器转交请求并将获得的内容返回给客户端。 <img src="/geekbuluo/assets/in.ea6c7eb1.webp" alt="图片"></p></li><li><p>特点：</p><ul><li>代理服务器和客户端处于同一个局域网内；</li><li>客户端明确要访问的服务器地址；</li><li>屏蔽或者隐藏了真实客户端信息。</li></ul></li><li><p>作用：</p><ul><li>访问原来无法访问的资源，如 Google；</li><li>可以做缓存，加速访问资源；</li><li>对客户端访问授权，上网进行认证；</li><li>代理可以记录用户访问记录（上网行为管理），对外隐藏用户信息。</li></ul></li></ul><h2 id="反向代理" tabindex="-1">反向代理 <a class="header-anchor" href="#反向代理" aria-label="Permalink to &quot;反向代理&quot;">​</a></h2><ul><li><p>运行方式是代理服务器接受网络上的连接请求。它将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给网络上请求连接的客户端，此时代理服务器对外就表现为一个服务器。 <img src="data:image/webp;base64,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" alt="图片"></p></li><li><p>特点：</p><ul><li>代理服务器和源站则处于同一个局域网内；</li><li>客户端是无感知代理的存在的，反向代理对外都是透明的；</li><li>隐藏了服务器的信息。</li></ul></li><li><p>作用：</p><ul><li>保证内网的安全，通常将反向代理作为公网访问地址，Web 服务器是内网;；</li><li>负载均衡，通过反向代理服务器来优化网站的负载。</li></ul></li></ul><h3 id="负载均衡" tabindex="-1">负载均衡 <a class="header-anchor" href="#负载均衡" aria-label="Permalink to &quot;负载均衡&quot;">​</a></h3><ul><li>多在高并发情况下需要使用。其原理就是将数据流量分摊到多个服务器执行，减轻每台服务器的压力，多台服务器（集群）完成工作任务，从而提高了数据的吞吐量。</li><li>负载均衡策略：轮询（默认）、加权（权重）、ip_hash、url_hash（第三方）、fair（第三方）</li></ul><h3 id="动静分离" tabindex="-1">动静分离 <a class="header-anchor" href="#动静分离" aria-label="Permalink to &quot;动静分离&quot;">​</a></h3><ul><li>nginx 提供的动静分离是指把动态请求和静态请求分离开，合适的服务器处理相应的请求，使整个服务器系统的性能、效率更高。</li><li>nginx 可以根据配置对不同的请求做不同转发，这是动态分离的基础。静态请求对应的静态资源可以直接放在nginx 上做缓冲，更好的做法是放在相应的缓冲服务器上。动态请求由相应的后端服务器处理。</li><li>基本代码示例：</li></ul><div class="language-nginx vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> { </span></span>\n<span class="line"><span style="color:#E1E4E8;">    ...</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 所有静态请求都由nginx处理，存放目录为html </span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">~</span><span style="color:#E1E4E8;"> </span><span style="color:#DBEDFF;">\\.(gif|jpg|jpeg|png|bmp|swf|css|js)$ </span><span style="color:#E1E4E8;">{ </span></span>\n<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#F97583;"> root </span><span style="color:#E1E4E8;">e:</span><span style="color:#F97583;">\\wwwroot; </span></span>\n<span class="line"><span style="color:#E1E4E8;">    } </span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 所有动态请求都转发给 tomcat 处理 </span></span>\n<span class="line"><span style="color:#E1E4E8;">    location </span><span style="color:#F97583;">~</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">\\.(jsp|do)$ { </span></span>\n<span class="line"><span style="color:#E1E4E8;">        proxy_pass http://test; </span></span>\n<span class="line"><span style="color:#E1E4E8;">    }</span></span>\n<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">server</span><span style="color:#24292E;"> { </span></span>\n<span class="line"><span style="color:#24292E;">    ...</span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 所有静态请求都由nginx处理，存放目录为html </span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">location</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">~</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\\.(gif|jpg|jpeg|png|bmp|swf|css|js)$ </span><span style="color:#24292E;">{ </span></span>\n<span class="line"><span style="color:#24292E;">       </span><span style="color:#D73A49;"> root </span><span style="color:#24292E;">e:</span><span style="color:#D73A49;">\\wwwroot; </span></span>\n<span class="line"><span style="color:#24292E;">    } </span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 所有动态请求都转发给 tomcat 处理 </span></span>\n<span class="line"><span style="color:#24292E;">    location </span><span style="color:#D73A49;">~</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">\\.(jsp|do)$ { </span></span>\n<span class="line"><span style="color:#24292E;">        proxy_pass http://test; </span></span>\n<span class="line"><span style="color:#24292E;">    }</span></span>\n<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',9);const m=s(c,[["render",function(s,o,i,r,t,c){const m=n("ArticleMetadata"),h=n("ClientOnly");return a(),l("div",null,[E,p(h,null,{default:e((()=>[p(m)])),_:1}),y])}]]);export{t as __pageData,m as default};
