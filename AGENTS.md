# AGENTS.md

## 项目概览

这是一个使用 Vite 构建的 React 19 单页应用。项目采用 JavaScript 和 CSS；组件入口在 `src/main.jsx`，主要界面在 `src/App.jsx`，全局样式与页面样式分别位于 `src/index.css` 和 `src/App.css`。

## 开发命令

- `npm run dev`：启动本地开发服务器。
- `npm run build`：生成生产构建；提交前应运行并确保成功。
- `npm run lint`：运行 ESLint；修改 JavaScript/JSX 后应运行。
- `npm run preview`：在本地预览生产构建。

## 代码约定

- 保持现有的 ES module、无分号、单引号和两空格缩进风格。
- 使用函数组件和 React Hooks；优先采用受控且可读的本地状态。
- 新增资源请放在 `src/assets/`，通过 import 引用；不要把二进制资源内联到组件中。
- 保持 JSX 语义化。仅作装饰的图片使用空 `alt`，传达内容的图片应提供描述性 `alt`。
- 外部链接若使用 `target="_blank"`，同时添加 `rel="noreferrer"`。

## 样式约定

- 优先复用 `src/index.css` 中的 CSS 自定义属性，避免重复硬编码颜色、字体和阴影。
- 将全局元素和主题规则放在 `src/index.css`；将页面/组件特有规则放在 `src/App.css` 或对应组件样式文件。
- 维持当前的嵌套 CSS 写法，并为新增交互保留 `:focus-visible` 可见焦点样式。
- 新界面应兼顾窄屏布局，并尊重现有的明暗色主题行为。

## 变更检查

完成实现后，至少运行：

```bash
npm run lint
npm run build
```

如修改了用户可见布局或交互，也应启动 `npm run dev` 进行浏览器验证。
