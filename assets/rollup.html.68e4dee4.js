import{_ as n,g as s}from"./app.4ab03ca3.js";var a="/docs/assets/1.2b2fb59e.png";const p={},e=s(`<h1 id="\u4F7F\u7528rollup\u6253\u5305vue3" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528rollup\u6253\u5305vue3" aria-hidden="true">#</a> \u4F7F\u7528rollup\u6253\u5305vue3</h1><p>\u672C\u6B21\u6211\u4EEC\u4F7F\u7528<code>rollup</code>\u53BB\u6253\u5305<code>vue3</code></p><h2 id="\u51C6\u5907\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907\u9636\u6BB5" aria-hidden="true">#</a> \u51C6\u5907\u9636\u6BB5</h2><ol><li>\u521B\u5EFA\u4E00\u4E2A<code>vue3</code>\u7684\u9879\u76EE</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token function">pnpm</span> init vue@next

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u9009\u62E9\u9879\u5982\u4E0B\uFF1A</p><p><img src="`+a+`" alt="\u622A\u5C4F2022-01-20 \u4E0B\u53489.11.55"></p><ol start="2"><li>\u8FDB\u5165\u9879\u76EE\u5B89\u88C5\u4F9D\u8D56</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FDB\u5165\u76EE\u5F55</span>
<span class="token builtin class-name">cd</span> rollup-vue3
<span class="token comment"># \u5B89\u88C5</span>
<span class="token function">pnpm</span> i
<span class="token comment"># \u5B89\u88C5rollup\u76F8\u5173\u4F9D\u8D56</span>
<span class="token function">pnpm</span> <span class="token function">add</span> rollup @rollup/plugin-node-resolve rollup-plugin-css-only rollup-plugin-esbuild rollup-plugin-typescript2 rollup-plugin-vue @vue/compiler-sfc esbuild  @types/bluebird ts-toolbelt -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u51C6\u5907\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907\u7EC4\u4EF6" aria-hidden="true">#</a> \u51C6\u5907\u7EC4\u4EF6</h2><p>\u6211\u4EEC\u5148\u5229\u7528<code>src/components/HelloWord.vue</code>\u7EC4\u4EF6\u8FDB\u884C\u6253\u5305\uFF0C\u6211\u4EEC<code>components</code>\u4E0B\u521B\u5EFA\u4E00\u4E2A<code>hello.ts</code>\u7684<code>ts</code>\u6587\u4EF6\uFF0C\u6CE8\u518C\u5E76\u5BFC\u51FA\u6211\u4EEC\u7684<code>HelloWord.vue</code>\u7EC4\u4EF6\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>
<span class="token keyword">import</span> HelloWord <span class="token keyword">from</span> <span class="token string">&quot;./HelloWorld.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> App <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">install</span><span class="token punctuation">(</span>app<span class="token operator">:</span> App<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;HelloWord&quot;</span><span class="token punctuation">,</span> HelloWord<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> HelloWord <span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u7F16\u5199rollup-config-ts\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199rollup-config-ts\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u7F16\u5199<code>rollup.config.ts</code>\u914D\u7F6E\u6587\u4EF6</h2><blockquote><p>\u5728\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A<code>rollup.config.ts</code>\u914D\u7F6E\u6587\u4EF6\uFF0C\u6DFB\u52A0\u5982\u4E0B\u7684\u4EE3\u7801</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;rollup&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> nodeResolve <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-node-resolve&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// eslint-disable-next-line @typescript-eslint/ban-ts-comment</span>
<span class="token comment">// @ts-ignore</span>
<span class="token keyword">import</span> css <span class="token keyword">from</span> <span class="token string">&quot;rollup-plugin-css-only&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> esbuild <span class="token keyword">from</span> <span class="token string">&quot;rollup-plugin-esbuild&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&quot;rollup-plugin-vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    input<span class="token operator">:</span> <span class="token string">&quot;src/components/hello.ts&quot;</span><span class="token punctuation">,</span>
    external<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// \u7528\u6765\u7F16\u8BD1vue\u6587\u4EF6</span>
        <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// \u7528\u6765\u652F\u6301\u83B7\u53D6node_modules\u4E2D\u7684\u5305</span>
        <span class="token function">nodeResolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// \u6253\u5305vue\u6587\u4EF6\u4E2D\u7684css</span>
        <span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span> output<span class="token operator">:</span> <span class="token string">&quot;hello.css&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// \u5904\u7406ts</span>
        <span class="token function">esbuild</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            target<span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    output<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            file<span class="token operator">:</span> <span class="token string">&quot;dist/hello.es.js&quot;</span><span class="token punctuation">,</span>
            format<span class="token operator">:</span> <span class="token string">&quot;esm&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>\u7136\u540E\u6211\u4EEC\u5728<code>package.json</code>\u4E0B\u914D\u7F6E\u6253\u5305\u547D\u4EE4</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;build:rollup&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rollup -c rollup.config.ts&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6267\u884C\u6253\u5305\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">pnpm</span> build:rollup
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>\u6211\u4EEC\u53D1\u73B0\u5728\u6211\u4EEC\u7684\u6839\u76EE\u5F55\u4E2D\u751F\u6210\u4E86\u4E00\u4E2A<code>dist</code>\u6587\u4EF6\u5939\uFF0C\u5305\u542B\u4E86\u6211\u4EEC\u914D\u7F6E\u7684<code>css</code>\u548C<code>js</code>\u6587\u4EF6\uFF0C\u8BC1\u660E\u6253\u5305\u6210\u529F</p></blockquote><h2 id="\u914D\u7F6Ejsx" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Ejsx" aria-hidden="true">#</a> \u914D\u7F6E<code>jsx</code></h2><p>\u8FD9\u91CC\u6211\u4EEC\u9700\u8981\u4F7F\u7528<code>babel</code>\u548C<code>rollup-plugin-vue</code>\u8FDB\u884C\u7F16\u8BD1<code>tsx</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token function">pnpm</span> <span class="token function">add</span> @rollup/plugin-babel @babel/core @babel/plugin-transform-runtime @vue/babel-plugin-jsx @babel/preset-env -D
 
<span class="token function">pnpm</span> <span class="token function">add</span> @babel/runtime

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u914D\u7F6E<code>rollup.config.ts</code>\u6587\u4EF6\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;rollup&quot;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&quot;rollup-plugin-vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> css <span class="token keyword">from</span> <span class="token string">&quot;rollup-plugin-css-only&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> nodeResolve <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-node-resolve&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> babel <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-babel&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">DEFAULT_EXTENSIONS</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@babel/core&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> esbuild <span class="token keyword">from</span> <span class="token string">&quot;rollup-plugin-esbuild&quot;</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    input<span class="token operator">:</span><span class="token string">&quot;src/index.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7531\u4E8E\u9700\u8981\u5B89\u88C5babel-runtime\u7684\u73AF\u5883\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u79FB\u9664\u4E00\u4E0Bbabel\u7684\u8FD0\u884C\u65F6\u7684\u73AF\u5883</span>
    external<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">@babel\\/runtime</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    output<span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            format<span class="token operator">:</span><span class="token string">&quot;esm&quot;</span><span class="token punctuation">,</span>
            file<span class="token operator">:</span><span class="token string">&quot;dist/index.js&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    plugins<span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">nodeResolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">esbuild</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            target<span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span>
            jsx<span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">babel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            babelHelpers<span class="token operator">:</span> <span class="token string">&quot;runtime&quot;</span><span class="token punctuation">,</span>
            extensions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token constant">DEFAULT_EXTENSIONS</span><span class="token punctuation">,</span> <span class="token string">&quot;.vue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.tsx&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            presets<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">[</span>
                    <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        modules<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@vue/babel-plugin-jsx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;@babel/plugin-transform-runtime&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h2 id="\u914D\u7F6Etypescript\u751F\u6210d-ts" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Etypescript\u751F\u6210d-ts" aria-hidden="true">#</a> \u914D\u7F6E<code>typescript</code>\u751F\u6210<code>d.ts</code></h2><p>\u6211\u4EEC\u5728\u4F7F\u7528\u5176\u4ED6\u7EC4\u4EF6\u5E93\u7684\u65F6\u5019\u53D1\u73B0\u90FD\u4F1A\u6709\u53CB\u597D\u7684\u4EE3\u7801\u63D0\u793A\uFF0C\u5176\u4E2D\u6700\u4E3B\u8981\u7684\u5C31\u662F<code>ts</code>\u7684\u7C7B\u578B\u5904\u7406\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u8FD8\u9700\u8981\u4F7F\u7528<code>ts</code>\u63D2\u4EF6\u751F\u6210<code>d.ts</code>\u6587\u4EF6\u3002</p><p>\u9996\u5148\u6211\u4EEC\u9700\u8981\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u589E\u52A0\u4E00\u4E2A<code>tsconfig.json</code>\u6587\u4EF6\uFF0C\u914D\u7F6E\u4FE1\u606F\u5927\u81F4\u5982\u4E0B\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;useDefineForClassFields&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;isolatedModules&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;jsx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;resolveJsonModule&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;@/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/*&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dom&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dom.iterable&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;scripthost&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipLibCheck&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u7136\u540E\u5728<code>rollup.config.ts</code>\u4E2D\u6DFB\u52A0\u5982\u4E0B\u7684\u63D2\u4EF6\u548C\u914D\u7F6E\u4FE1\u606F</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;rollup&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// \u589E\u91CF\u914D\u7F6E</span>
    <span class="token function">typescript</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// \u8986\u76D6\u6839\u76EE\u5F55\u4E0B\u7684tsconfig</span>
      tsconfigOverride<span class="token operator">:</span> <span class="token punctuation">{</span>
        compilerOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u914D\u7F6E\u751F\u6210declaration</span>
          declaration<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// \u914D\u7F6E\u5305\u542B\u7684ts\u6587\u4EF6</span>
        include<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/**/*.ts&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u7136\u540E\u6211\u4EEC\u518D\u6B21\u6253\u5305\u7684\u65F6\u5019\uFF0C\u53D1\u73B0\u4F1A\u6B63\u5E38\u751F\u6210<code>ts</code>\u6587\u4EF6\u4E86\u3002</p>`,32);function t(o,l){return e}var u=n(p,[["render",t],["__file","rollup.html.vue"]]);export{u as default};