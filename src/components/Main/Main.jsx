import Content from './Content/Content.jsx'
import Sidebar from './Sidebar.jsx'

function Main({ sidebar, children }) {
  return (
    <main>
      <Sidebar>{sidebar}</Sidebar>
      <Content>{children}</Content>
    </main>
  )
}

export default Main
