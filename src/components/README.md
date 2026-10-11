# 组件模板

```text
components/
├── Header/
│   ├── Header.jsx
│   ├── Logo.jsx
│   └── Navigation/
│       ├── Navigation.jsx
│       └── NavItem.jsx
├── Main/
│   ├── Main.jsx
│   ├── Sidebar.jsx
│   └── Content/
│       ├── Content.jsx
│       └── Article.jsx
└── Footer/
    └── Footer.jsx
```

示例组合：

```jsx
import Header from './Header/Header.jsx'
import Main from './Main/Main.jsx'
import Article from './Main/Content/Article.jsx'
import Footer from './Footer/Footer.jsx'

<>
  <Header navigationItems={[{ href: '#about', label: '关于' }]} />
  <Main sidebar={<p>侧边栏内容</p>}>
    <Article title="第一篇文章"><p>文章内容</p></Article>
    <Article title="第二篇文章"><p>文章内容</p></Article>
  </Main>
  <Footer>页脚内容</Footer>
</>
```
