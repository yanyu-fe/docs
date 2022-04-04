import{_ as t,r as c,o,a as r,b as n,e,F as l,g as p,f as s}from"./app.4ab03ca3.js";const u={},i=p('<h1 id="\u5B66\u4E60\u642D\u5EFAdrone\u5E73\u53F0" tabindex="-1"><a class="header-anchor" href="#\u5B66\u4E60\u642D\u5EFAdrone\u5E73\u53F0" aria-hidden="true">#</a> \u5B66\u4E60\u642D\u5EFAdrone\u5E73\u53F0</h1><p>\u672C\u6B21\u642D\u5EFA<code>drone</code>\u5E73\u53F0\u662F\u57FA\u4E8E<code>gitea</code>\u5B9E\u73B0\u7684\uFF0C\u540E\u671F\u6211\u4EEC\u4F1A\u653E\u4E00\u671F\u5173\u4E8E<code>gitea</code>\u642D\u5EFA\u7684\u89C6\u9891\uFF0C\u672C\u6B21\u6211\u4EEC\u6765\u5B66\u4E60\u4E00\u4E0B\u5982\u4F55\u642D\u5EFA\u4E00\u4E2A<code>drone</code>\u5E73\u53F0\u3002</p><p>\u524D\u63D0\u6761\u4EF6\u662F\u6211\u4EEC\u5DF2\u7ECF\u5B89\u88C5\u4E86<code>docker</code>+<code>docker-compose</code>\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86\u5B89\u88C5\u5730\u5740\uFF0C\u81EA\u884C\u5B89\u88C5\u4E00\u4E0B\uFF0C\u8FD9\u91CC\u4E0D\u518D\u8D58\u8FF0\uFF1A</p>',3),m=s("docker\u5B89\u88C5\uFF1A "),d={href:"https://www.runoob.com/docker/centos-docker-install.html",target:"_blank",rel:"noopener noreferrer"},b=s("docker"),k=s("docker-compose\u5B89\u88C5\uFF1A "),x={href:"https://www.runoob.com/docker/docker-compose.html",target:"_blank",rel:"noopener noreferrer"},h=s("docker-compose"),_=p(`<h2 id="\u521B\u5EFAdocker-compose-yml" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAdocker-compose-yml" aria-hidden="true">#</a> \u521B\u5EFA<code>docker-compose.yml</code></h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> drone
<span class="token builtin class-name">cd</span> drone
<span class="token function">touch</span> docker-compose.yml
<span class="token function">vim</span> docker-compose.yml
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="gitea\u521B\u5EFA\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#gitea\u521B\u5EFA\u5E94\u7528" aria-hidden="true">#</a> gitea\u521B\u5EFA\u5E94\u7528</h2><p>\u8FD9\u91CC\u5EFA\u8BAE\u4F7F\u7528\u7BA1\u7406\u5458\u8D26\u53F7\u521B\u5EFA</p><p>\u627E\u5230 \u8BBE\u7F6E-&gt;\u5E94\u7528-&gt;\u521B\u5EFA\u65B0\u7684 OAuth2 \u5E94\u7528\u7A0B\u5E8F</p><p>\u8F93\u5165\u5E94\u7528\u540D\u79F0\u548C\u91CD\u5B9A\u5411URL\u5373\u53EF\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5E94\u7528\u540D\u79F0\uFF1Aci

\u91CD\u5B9A\u5411URL\uFF1Ahttps://ci.xxx.cn/login
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token comment"># \u5BB9\u5668\u540D\u79F0</span>
  <span class="token key atrule">fan-drone-server</span><span class="token punctuation">:</span>
    <span class="token comment"># \u6784\u5EFA\u6240\u4F7F\u7528\u7684\u955C\u50CF</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> drone/drone<span class="token punctuation">:</span><span class="token number">1</span>
    <span class="token comment"># \u6620\u5C04\u5BB9\u5668\u518580\u7AEF\u53E3\u5230\u5BBF\u4E3B\u673A\u76848188\u7AEF\u53E3</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8188<span class="token punctuation">:</span><span class="token number">80</span>
    <span class="token comment"># \u6620\u5C04\u5BB9\u5668\u5185/data\u76EE\u5F55\u5230\u5BBF\u4E3B\u673A\u7684/data/drone\u76EE\u5F55</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /data/drone<span class="token punctuation">:</span>/data
    <span class="token comment"># \u5BB9\u5668\u968Fdocker\u81EA\u52A8\u542F\u52A8</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token comment"># Gitea \u670D\u52A1\u5668\u5730\u5740</span>
      <span class="token punctuation">-</span> DRONE_GITEA_SERVER=https<span class="token punctuation">:</span>//git.xxx.cn
      <span class="token comment"># Gitea OAuth2\u5BA2\u6237\u7AEFID</span>
      <span class="token punctuation">-</span> DRONE_GITEA_CLIENT_ID=d8xxxxxxxxxxx74d
      <span class="token comment"># Gitea OAuth2\u5BA2\u6237\u7AEF\u5BC6\u94A5</span>
      <span class="token punctuation">-</span> DRONE_GITEA_CLIENT_SECRET=F5H2exxxxxxxxxxx
      <span class="token comment"># drone\u7684\u5171\u4EAB\u5BC6\u94A5</span>
      <span class="token punctuation">-</span> DRONE_RPC_SECRET=edfa129exxxxxxxx2a0
      <span class="token comment"># drone\u7684\u4E3B\u673A\u540D</span>
      <span class="token punctuation">-</span> DRONE_SERVER_HOST=ci.xxxx.cn
      <span class="token comment"># \u5916\u90E8\u534F\u8BAE\u65B9\u6848\u53EF\u4EE5\u662Fhttp\u6216\u8005https</span>
      <span class="token punctuation">-</span> DRONE_SERVER_PROTO=https
      <span class="token comment"># \u521B\u5EFA\u7BA1\u7406\u5458\u8D26\u6237\uFF0C\u8FD9\u91CC\u5BF9\u5E94\u4E3Agitea\u7684\u7528\u6237\u540D</span>
      <span class="token punctuation">-</span> DRONE_USER_CREATE=username<span class="token punctuation">:</span>xxxx<span class="token punctuation">,</span>admin<span class="token punctuation">:</span><span class="token boolean important">true</span>

  <span class="token key atrule">fan-docker-runner</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> drone/drone<span class="token punctuation">-</span>runner<span class="token punctuation">-</span>docker<span class="token punctuation">:</span><span class="token number">1</span>
    <span class="token comment"># \u540C\u6837\u5C063000\u7AEF\u53E3\u5411\u5916\u6620\u5C04</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8189<span class="token punctuation">:</span><span class="token number">3000</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token comment"># \u4F9D\u8D56\u54EA\u4E2Aserver</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> fan<span class="token punctuation">-</span>drone<span class="token punctuation">-</span>server
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /var/run/docker.sock<span class="token punctuation">:</span>/var/run/docker.sock
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token comment"># \u7528\u4E8E\u8FDE\u63A5\u5230Drone\u670D\u52A1\u5668\u7684\u534F\u8BAE\u3002\u8BE5\u503C\u5FC5\u987B\u662Fhttp\u6216https\u3002</span>
      <span class="token punctuation">-</span> DRONE_RPC_PROTO=https
      <span class="token comment"># \u7528\u4E8E\u8FDE\u63A5\u5230Drone\u670D\u52A1\u5668\u7684\u4E3B\u673A\u540D</span>
      <span class="token punctuation">-</span> DRONE_RPC_HOST=ci.xxx.cn
      <span class="token comment"># Drone\u670D\u52A1\u5668\u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1\u7684\u5171\u4EAB\u5BC6\u94A5\uFF0C\u548C\u4E0A\u9762\u8BBE\u7F6E\u4E00\u6837</span>
      <span class="token punctuation">-</span> DRONE_RPC_SECRET=xxxxxxxxx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h2 id="\u542F\u52A8\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u5BB9\u5668" aria-hidden="true">#</a> \u542F\u52A8\u5BB9\u5668</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5728\u521B\u5EFAdocker-compose.yml\u7684\u6587\u4EF6\u5939\u4E0B\u542F\u52A8</span>
<span class="token function">docker-compose</span> up -d
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5982\u679C\u914D\u7F6E\u6CA1\u95EE\u9898\uFF0C\u542F\u52A8\u57FA\u672C\u90FD\u662F\u6CA1\u95EE\u9898\u7684\u3002</p><p>\u63A5\u4E0B\u6765\u8BBF\u95EE\u57DF\u540D\uFF1Ahttps://ci.xxx.cn\u5982\u679C\u53EF\u4EE5\u6B63\u5E38\u8BBF\u95EE\uFF0C\u5C31\u4EE3\u8868\u5DF2\u7ECF\u5B8C\u6210\u90E8\u7F72\u4E86</p>`,13);function g(E,v){const a=c("ExternalLinkIcon");return o(),r(l,null,[i,n("p",null,[m,n("a",d,[b,e(a)])]),n("p",null,[k,n("a",x,[h,e(a)])]),_],64)}var y=t(u,[["render",g],["__file","drone.html.vue"]]);export{y as default};
