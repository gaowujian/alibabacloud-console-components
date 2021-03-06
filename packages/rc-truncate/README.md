# @alicloud/console-components-truncate

用于截断超长文本。

## 基本用法

比较常见的使用方式：
[MDXInstruction:importDemo:BasicDemo](./stories/basic.tsx)

根据容器的宽度自动截断：
[MDXInstruction:importDemo:AutoWidthDemo](./stories/auto-width.tsx)

在宽度截断模式下，可以截断任何可渲染元素，不只是 string：
[MDXInstruction:importDemo:NonStringDemo](./stories/non-string.tsx)

可以自定义省略符号。不过注意，如果省略符号不是`...`的话，会在**宽度截断模式**下造成“字符在中间被截断”（在浏览器中没办法支持那么“智能”的截断）：
[MDXInstruction:importDemo:CustomOmissionDemo](./stories/custom-omission.tsx)

每当 children 变化的时候，Truncate 会自动检查是否需要截断：
[MDXInstruction:importDemo:DynamicChildrenDemo](./stories/dynamic-children.tsx)

可以自定义 tootip 的 max-width：
[MDXInstruction:importDemo:TooltipMaxWidthDemo](./stories/tooltip-max-width.tsx)

设置 tooltip 样式：
[MDXInstruction:importDemo:PopupStyleDemo](./stories/popupStyle.tsx)

## APIs

[MDXInstruction:renderInterface:ITruncateProps](./api-json/api.json)
