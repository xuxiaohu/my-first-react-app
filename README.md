# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## 本地启动

在项目根目录执行以下命令，安装依赖并启动开发服务器：

```bash
npm ci
npm run dev
```

启动后，在浏览器中打开终端输出的本地地址。按 `Ctrl+C` 可停止开发服务器。

## 生产构建与预览

在项目根目录执行以下命令，安装依赖并生成生产构建：

```bash
npm ci
npm run build
```

构建产物输出到 `dist/` 目录。修改源码后，需要重新运行 `npm run build` 更新构建产物。

构建完成后，可启动本地预览服务器：

```bash
npm run preview
```

在浏览器中打开终端输出的本地地址，检查构建结果。预览服务器仅用于本地验证；部署时应使用 `dist/` 中的静态文件。

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
