import{_ as e,r as p,o as t,a as c,b as n,e as r,F as l,g as o,f as s}from"./app.4ab03ca3.js";var i="/docs/assets/1.8bd94709.png";const d={},u=o(`<h1 id="\u521B\u5EFA\u4E00\u4E2Ataro\u7684\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2Ataro\u7684\u9879\u76EE" aria-hidden="true">#</a> \u521B\u5EFA\u4E00\u4E2Ataro\u7684\u9879\u76EE</h1><p><code>taro</code>\u521A\u6B63\u5F0F\u53D1\u5E03<code>3.4.x</code>\u7248\u672C\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u5C06\u4E00\u8D77\u5B66\u4E60\u4E00\u4E0B\uFF0C\u5982\u4F55\u4F7F\u7528<code>vue3 + pina + taro + typescript</code>\u5B9E\u73B0\u5F00\u53D1\u8DE8\u7AEF\u5C0F\u7A0B\u5E8F\u3002</p><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>\u5982\u679C\u60A8\u4E4B\u524D\u5DF2\u7ECF\u5B89\u88C5\u8FC7\u4E86taro\uFF0C\u82E5\u4E0D\u662F<code>taro3.4.x</code>\u7248\u672C\u7684\u8BF7\u5230\u5168\u5C40\u7684<code>node_modules</code>\u53BB\u5220\u9664\u5E76\u901A\u8FC7\u4EE5\u4E0B\u7684\u6B65\u9AA4\u91CD\u65B0\u5B89\u88C5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment"># \u4F7F\u7528 npm \u5B89\u88C5 CLI</span>
$ <span class="token function">npm</span> <span class="token function">install</span> -g @tarojs/cli

<span class="token comment"># OR \u4F7F\u7528 yarn \u5B89\u88C5 CLI</span>
$ <span class="token function">yarn</span> global <span class="token function">add</span> @tarojs/cli

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">\u5EFA\u8BAE</p><p>\u5B98\u65B9\u4E5F\u7ED9\u51FA\u6211\u4EEC\u5EFA\u8BAE\uFF0C\u5982\u679C\u5728\u5B89\u88C5<code>sass</code>\u7684\u65F6\u5019\u62A5\u9519\u4E86\uFF0C\u9700\u8981\u6211\u4EEC\u914D\u7F6E\u4E00\u4E0B<code>sass</code>\u7684\u955C\u50CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token function">npm</span> <span class="token function">install</span> -g mirror-config-china
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><h2 id="\u521B\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a> \u521B\u5EFA\u9879\u76EE</h2><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u9700\u8981\u4F7F\u7528<code>taro</code>\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
taro init template-vue3

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6211\u4EEC\u6309\u7167\u4E0B\u9762\u7684\u6B65\u9AA4\u8FDB\u884C\u9009\u62E9\uFF1A</p><p><img src="`+i+`" alt="1.png"></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>css</code>\u9884\u5904\u7406\u5668\u53EF\u4EE5\u6309\u7167\u81EA\u5DF1\u7684\u559C\u597D\uFF0C\u6211\u8FD9\u91CC\u9009\u7528\u7684\u662Fless</p></div><p>\u6700\u540E\u62C9\u53D6\u4EE3\u7801\u540E\uFF0C\u6211\u4EEC\u9009\u62E9\u9ED8\u8BA4\u6A21\u677F\uFF0C\u7B49\u5F85\u5B89\u88C5\u5373\u53EF\u3002</p><h2 id="\u914D\u7F6Epinia" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Epinia" aria-hidden="true">#</a> \u914D\u7F6E<code>pinia</code></h2><p>\u9996\u5148\u6211\u4EEC\u5B89\u88C5\u4E00\u4E0B<code>taro-plugin-pinia</code>\u63D2\u4EF6\u6765\u652F\u6301<code>pinia</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> taro-plugin-pinia
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5728<code>config/index.js</code>\u4E2D\u7684<code>plugins</code>\u4E2D\u589E\u52A0\u63D2\u4EF6<code>taro-plugin-pinia</code></p><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u5B89\u88C5<code>pinia</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> pinia
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u6211\u4EEC\u5728<code>src/app.ts</code>\u4E0B\u914D\u7F6E\u52A0\u8F7D\u4E00\u4E0B<code>pinia</code></p><div class="language-diff ext-diff line-numbers-mode"><pre class="language-diff"><code>import { createApp } from &#39;vue&#39;
import &#39;./app.less&#39;
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> import { createPinia } from &quot;pinia&quot;
</span></span>const App = createApp({
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> onShow () {},
</span><span class="token prefix unchanged"> </span><span class="token line"> // \u5165\u53E3\u7EC4\u4EF6\u4E0D\u9700\u8981\u5B9E\u73B0 render \u65B9\u6CD5\uFF0C\u5373\u4F7F\u5B9E\u73B0\u4E86\u4E5F\u4F1A\u88AB taro \u6240\u8986\u76D6
</span></span>})

<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> App.use(createPinia());
</span></span>export default App

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u7F16\u5199stores" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199stores" aria-hidden="true">#</a> \u7F16\u5199<code>stores</code></h2><p>\u5728<code>src/stores</code>\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A<code>user.ts</code>\uFF0C\u6211\u4EEC\u7528\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\u6765\u505A\u6F14\u793A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;pinia&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> userStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    userId<span class="token operator">:</span><span class="token keyword">null</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  getters<span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">getUserId</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>userId
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  actions<span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">setUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>userId <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u6211\u4EEC\u5728<code>src/pages/index/index.vue</code>\u4E2D\u8FDB\u884C\u4F7F\u7528</p><div class="language-diff ext-diff line-numbers-mode"><pre class="language-diff"><code>
<span class="token deleted-arrow deleted"><span class="token prefix deleted">&lt;</span><span class="token line">template&gt;
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> &lt;view class=&quot;index&quot;&gt;
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    &lt;text&gt;\u7528\u6237\u7684id\u4E3A\uFF1A{{getUserId}}&lt;/text&gt;
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> &lt;/view&gt;
</span></span><span class="token deleted-arrow deleted"><span class="token prefix deleted">&lt;</span><span class="token line">/template&gt;
</span></span>
<span class="token deleted-arrow deleted"><span class="token prefix deleted">&lt;</span><span class="token line">script lang=&quot;ts&quot;&gt;
</span></span>import { ref,defineComponent } from &#39;vue&#39;
import &#39;./index.less&#39;
<span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> import {userStore} from &quot;../../stores/user&quot;;
</span><span class="token prefix inserted">+</span><span class="token line"> import { storeToRefs } from &quot;pinia&quot;
</span></span>export default defineComponent({
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> setup () {
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">    const store = userStore();
</span><span class="token prefix inserted">+</span><span class="token line">    // \u83B7\u53D6\u7528\u6237\u7684id
</span><span class="token prefix inserted">+</span><span class="token line">    const { getUserId } =storeToRefs(store);
</span><span class="token prefix inserted">+</span><span class="token line">    // \u8BBE\u7F6E\u7528\u6237\u7684id
</span><span class="token prefix inserted">+</span><span class="token line">    store.setUserId();
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   const msg = ref(&#39;Hello world&#39;)
</span><span class="token prefix unchanged"> </span><span class="token line">   return {
</span><span class="token prefix unchanged"> </span><span class="token line">     msg,
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">      getUserId
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   }
</span><span class="token prefix unchanged"> </span><span class="token line"> }
</span></span>})
<span class="token deleted-arrow deleted"><span class="token prefix deleted">&lt;</span><span class="token line">/script&gt;
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F\uFF1A</p><p>\u7531\u4E8E\u5728<code>pinia</code>\u4E2D\u4E0D\u80FD\u505A\u89E3\u6784\uFF08\u89E3\u6784\u540E\u4F1A\u5BFC\u81F4\u54CD\u5E94\u5F0F\u5931\u6548\uFF09\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u901A\u8FC7<code>pinia</code>\u5B98\u65B9\u63D0\u4F9B\u7684<code>storeToRefs</code>\u8FDB\u884C\u7ED3\u6784<code>state</code>\u548C<code>getters</code>\uFF0C\u4F46\u662F\u4E0D\u80FD\u89E3\u6784<code>actions</code>\u3002</p></div><h2 id="\u7ED3\u675F" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u675F" aria-hidden="true">#</a> \u7ED3\u675F</h2>`,28),b=s("\u5230\u6B64\u4E3A\u6B62\u6211\u4EEC\u5C31\u5B8C\u6210\u4E86\u4E00\u4E2A"),m=n("code",null,"pinia + vue3 + typescript",-1),k=s("\u7684\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u7684\u9879\u76EE\u3002"),g={href:"https://github.com/yanyu-fe/taro-vue3-template.git",target:"_blank",rel:"noopener noreferrer"},h=s("\u6A21\u677F\u4ED3\u5E93"),f=n("p",null,"\u76EE\u524D\u6D4B\u8BD5\u4F7F\u7528\u7684\u5C0F\u7A0B\u5E8F\u4E3A\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\uFF0C\u517C\u5BB9\u6027\u6D4B\u8BD5\u672A\u5B8C\u5584\uFF0C\u6B22\u8FCE\u63D0\u51FA\u610F\u89C1\u548C\u5EFA\u8BAE\u3002",-1);function x(v,_){const a=p("ExternalLinkIcon");return t(),c(l,null,[u,n("p",null,[b,m,k,n("a",g,[h,r(a)])]),f],64)}var y=e(d,[["render",x],["__file","create-project.html.vue"]]);export{y as default};
