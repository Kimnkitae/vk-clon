import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-logo">
          <Link to="/feed">
            <img src="src/assets/icons/logo.svg" alt="Logo" />
          </Link>
        </div>
        <div className="header-nav">
          <input type="text" placeholder="Search" />
        </div>
        <div className="header-profile">
          <img></img>
        </div>
      </header>
    </>

  )
}

export default Header