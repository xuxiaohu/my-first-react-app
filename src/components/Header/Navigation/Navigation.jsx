import NavItem from './NavItem.jsx'

function Navigation({ items = [] }) {
  return (
    <nav aria-label="主导航">
      <ul>
        {items.map(({ href, label }) => (
          <NavItem key={href} href={href}>
            {label}
          </NavItem>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
