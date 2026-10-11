import Logo from './Logo.jsx'
import Navigation from './Navigation/Navigation.jsx'

function Header({ navigationItems = [] }) {
  return (
    <header>
      <Logo />
      <Navigation items={navigationItems} />
    </header>
  )
}

export default Header
