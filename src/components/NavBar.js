import React, {useState} from 'react'
import profileImage from "./../Images/profileImage.png"
import {NavLink} from 'react-router-dom'


function NavBar() {
  const [user, setUser] = useState()
  const [ active, setActive] = useState(false)
  return (
    <div className="navBar">
      <nav className="navItems">
        <a href="/"><h1><span className="titleMovie">M</span>ovie<span className="titleMania">M</span>ania</h1></a>
        <ul className={`navLinks ${active?"active":""}`}>
          <li><NavLink to="/" onClick={()=>setActive(!active)}>Home</NavLink></li>
          <li><NavLink to="/search-movies" onClick={()=>setActive(!active)}>Search</NavLink></li>
          <li><NavLink to="/favorite-movies" onClick={()=>setActive(!active)}>Profile</NavLink></li>
          <li>{user?<NavLink to="/profile" onClick={()=>setActive(!active)}><img src={profileImage} alt="Profile" width={35} height={35}/></NavLink>:<NavLink to="/login" onClick={()=>setActive(!active)}>Login</NavLink>}</li>
        </ul>
        <div className={`hamburger ${active?"active":""}`} onClick={()=>setActive(!active)}>
          <span className="bar"/>
          <span className="bar"/>
          <span className="bar"/>
        </div>
      </nav>
    </div>
  )
}

export default NavBar