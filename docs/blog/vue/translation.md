# vue3的translation

## 基本的动画

首先我们先看一下官方给出的例子：

<demo src="./demo/translation-1.vue" title="官方例子" desc="需要注意的是，我们`Translation`仅支持有一个根元素"></demo>

其原理是：

1. 当`DOM`元素被挂载时，将动效加载到该`DOM`元素上。

2. 当`DOM`元素被卸载是，我们不能立即卸载`DOM`元素，我们需要等到附加到该`DOM`元素上的动效执行完成后再卸载它。

 那么一共分为几个步骤呢？

 * `enter-from`:进入的起始状态。在`DOM`元素插入之前添加，在元素插入后的一帧移除。这里实现的原理就是通过`requestAnimationFrame`来实现的。

 * 