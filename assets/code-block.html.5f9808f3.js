import{_ as c,d as l,h as C,o as r,a as i,f as s,t as F,b as n,r as p,e as a,w as m,F as D,g as E}from"./app.4ab03ca3.js";const b=l({setup(k){const t=C(0),e=()=>{t.value++};return(o,u)=>(r(),i("div",null,[s(F(t.value)+" ",1),n("button",{onClick:e},"\u589E\u52A0")]))}});var g=c(b,[["__file","test.vue"]]);const B=n("h1",{id:"code-block",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#code-block","aria-hidden":"true"},"#"),s(" code-block")],-1),A=n("code",null,"vuepress-plugin-code-block",-1),h=s("\u662F\u4E00\u4E2A\u57FA\u4E8E"),v={href:"https://v2.vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},_=s("vuepress@next"),f=s("\u7248\u672C\u7684\u4E3B\u9898\u63D2\u4EF6\uFF0C\u4ED6\u4F1A\u5E2E\u52A9\u4F60\u518D\u7F16\u5199\u7EC4\u4EF6\u6587\u6863\u7684\u65F6\u5019\u589E\u52A0"),q=n("code",null,"vue",-1),y=s("\u793A\u4F8B\u3002"),x=s("\u76EE\u524D\u7684\u793A\u4F8B\u6A21\u677F\u662F\u6309\u7167"),w={href:"https://next.antdv.com",target:"_blank",rel:"noopener noreferrer"},N=s("ant-design-vue"),V=s("\u53BB\u5B9E\u73B0\u7684\uFF0C\u611F\u5174\u8DA3\u7684\u5C0F\u4F19\u4F34\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5B9E\u73B0\u3002"),j=E(`<p>\u76EE\u524D\u8FD8\u5728\u5F00\u53D1\u9636\u6BB5\uFF0C\u5E0C\u671B\u5927\u5BB6\u5728\u4F7F\u7528\u7684\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u7684bug\u6216\u8005\u95EE\u95EE\u9898\uFF0C\u6B22\u8FCE\u63D0\u4EA4issue\u548CPR\u3002</p><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>\u5728\u5B89\u88C5\u6B21\u63D2\u4EF6\u4E4B\u524D\uFF0C\u8BF7\u786E\u4FDD\u60A8\u5DF2\u7ECF\u5B89\u88C5\u4E86<code>vuepress@next</code>\u7248\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token function">npm</span> i -D @yanyu-fe/vuepress-plugin-code-block

<span class="token function">yarn</span> <span class="token function">add</span> -D @yanyu-fe/vuepress-plugin-code-block

<span class="token function">pnpm</span> <span class="token function">add</span> -D @yanyu-fe/vuepress-plugin-code-block

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><p>\u5728<code>.vuepress</code>\u6587\u4EF6\u5939\u4E0B\u521B\u5EFA\u4E00\u4E2A<code>config.ts</code>\u6587\u4EF6\uFF0C\u914D\u7F6E\u5982\u4E0B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DefaultThemeOptions<span class="token punctuation">,</span> ViteBundlerOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token generic-function"><span class="token function">defineUserConfig</span><span class="token generic class-name"><span class="token operator">&lt;</span>DefaultThemeOptions<span class="token punctuation">,</span> ViteBundlerOptions<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&quot;\u6587\u6863&quot;</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;@yanyu-fe/vuepress-plugin-code-block&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6CE8\u518C\u5B8C\u6210\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u76F4\u63A5\u5728markdown\u4E2D\u4F7F\u7528\u5566\uFF01</p><h3 id="\u7F16\u5199\u7EC4\u4EF6\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199\u7EC4\u4EF6\u4F8B\u5B50" aria-hidden="true">#</a> \u7F16\u5199\u7EC4\u4EF6\u4F8B\u5B50</h3><ul><li>\u666E\u901Avue\u6587\u4EF6\u652F\u6301</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>demo</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./demo/test.vue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u6D4B\u8BD5demo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">desc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u8FD9\u662F\u4E00\u4E2A\u6D4B\u8BD5\u7684\`demo\`<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>demo</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>tsx(jsx)\u6587\u4EF6\u652F\u6301</li></ul><p>\u76EE\u524D\u5DF2\u7ECF\u652F\u6301\u4E86tsx\u6587\u4EF6</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>demo</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./demo/test.tsx<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u6D4B\u8BD5demo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">desc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u8FD9\u662F\u4E00\u4E2A\u6D4B\u8BD5\u7684\`demo\`<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>demo</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u663E\u793A\u4EE3\u7801\u5757" tabindex="-1"><a class="header-anchor" href="#\u663E\u793A\u4EE3\u7801\u5757" aria-hidden="true">#</a> \u663E\u793A\u4EE3\u7801\u5757</h3><p>\u5F15\u5165\u4E4B\u540E\u53EA\u663E\u793A\u4EE3\u7801\u5757\uFF0C\u4E0D\u9700\u8981\u8F6C\u6362\u4E3A\u793A\u4F8B</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>demo</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./demo/test.tsx<span class="token punctuation">&quot;</span></span> <span class="token attr-name">raw</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>demo</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>demo</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./demo/test.vue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">raw</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>demo</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u5176\u4ED6\u8BED\u8A00\u4F7F\u7528demo\u7EC4\u4EF6\u7684\u5904\u7406\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u8BED\u8A00\u4F7F\u7528demo\u7EC4\u4EF6\u7684\u5904\u7406\u65B9\u6CD5" aria-hidden="true">#</a> \u5176\u4ED6\u8BED\u8A00\u4F7F\u7528<code>demo</code>\u7EC4\u4EF6\u7684\u5904\u7406\u65B9\u6CD5</h3><p>\u76EE\u524D\u5BF9\u4E8E\u5176\u4ED6\u7684\u8BED\u8A00\u5982<code>ts/js/html/css</code>\u7B49\u6587\u4EF6\u8FDB\u884C\u5904\u7406\uFF0C\u76EE\u524D\u53EA\u80FD\u8F6C\u6362\u4E3A\u4EE3\u7801\u5757\u663E\u793A</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>demo</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./demo/test.ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>demo</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="demo\u5C5E\u6027\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#demo\u5C5E\u6027\u652F\u6301" aria-hidden="true">#</a> <code>demo</code>\u5C5E\u6027\u652F\u6301</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>raw</code></td><td><code>boolean</code></td><td><code>false</code></td><td>\u662F\u5426\u663E\u793A\u6E90\u4EE3\u7801\u5757</td></tr><tr><td><code>title</code></td><td><code>string</code></td><td>-</td><td>\u6807\u9898</td></tr><tr><td><code>desc</code></td><td><code>string</code></td><td>-</td><td>\u63CF\u8FF0</td></tr><tr><td><code>src</code></td><td><code>string</code></td><td>-</td><td>\u793A\u4F8B\u7EDD\u5BF9\u8DEF\u5F84</td></tr></tbody></table><p>\u76EE\u524D\u89C4\u5212\u7684\u5C5E\u6027\u8F83\u5C11\uFF0C\u6709\u5C0F\u4F19\u4F34\u53EF\u4EE5\u53C2\u8003\u81EA\u5B9A\u4E49</p><h2 id="\u6F14\u793A" tabindex="-1"><a class="header-anchor" href="#\u6F14\u793A" aria-hidden="true">#</a> \u6F14\u793A</h2><h3 id="\u7EC4\u4EF6\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u4F8B\u5B50" aria-hidden="true">#</a> \u7EC4\u4EF6\u4F8B\u5B50</h3><p>\u8FD9\u91CC\u4F7F\u7528\u4E00\u4E2A\u8BA1\u6570\u5668\u5F53\u505A\u6F14\u793A\u7684\u4F8B\u5B50\uFF1A</p>`,26),O=E(`<h3 id="\u663E\u793A\u4EE3\u7801\u5757-1" tabindex="-1"><a class="header-anchor" href="#\u663E\u793A\u4EE3\u7801\u5757-1" aria-hidden="true">#</a> \u663E\u793A\u4EE3\u7801\u5757</h3><p>\u5F00\u542F\u663E\u793A\u4EE3\u7801\u5757\u513F\u529F\u80FD\uFF0C\u5176\u4ED6\u7684\u5C5E\u6027\u5747\u5931\u6548</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    {{counter}}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u589E\u52A0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  counter<span class="token punctuation">.</span>value <span class="token operator">++</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.button</span><span class="token punctuation">{</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,3),T=l({setup(k){return(t,e)=>{const o=p("NpmBadge"),u=p("ExternalLinkIcon"),d=p("demo");return r(),i(D,null,[B,a(o,{package:"@yanyu-fe/vuepress-plugin-code-block"}),n("p",null,[A,h,n("a",v,[_,a(u)]),f,q,y]),n("p",null,[x,n("a",w,[N,a(u)]),V]),j,a(d,{title:"\u8BA1\u6570\u5668",desc:"%3Cp%3E%E5%9F%BA%E7%A1%80%E7%9A%84%E8%AE%A1%E6%95%B0%E5%99%A8%E7%9A%84%E5%8A%9F%E8%83%BD%3C%2Fp%3E%0A",highlightCode:"%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%7B%7Bcounter%7D%7D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebutton%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eadd%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E5%A2%9E%E5%8A%A0%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ebutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E%22vue%22%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20counter%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E0%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3Eadd%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20counter%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%2B%2B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0A%3Cspan%20class%3D%22token%20selector%22%3E.button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20property%22%3Ecursor%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20pointer%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E",code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%7B%7Bcounter%7D%7D%0A%20%20%20%20%3Cbutton%20%40click%3D%22add%22%3E%E5%A2%9E%E5%8A%A0%3C%2Fbutton%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20%22vue%22%0Aconst%20counter%20%3D%20ref(0)%3B%0Aconst%20add%20%3D%20()%20%3D%3E%20%7B%0A%20%20counter.value%20%2B%2B%20%3B%0A%7D%0A%3C%2Fscript%3E%0A%3Cstyle%3E%0A.button%7B%0A%20%20cursor%3A%20pointer%3B%0A%7D%0A%3C%2Fstyle%3E%0A%0A"},{default:m(()=>[a(g)]),_:1}),O],64)}}});var L=c(T,[["__file","code-block.html.vue"]]);export{L as default};
