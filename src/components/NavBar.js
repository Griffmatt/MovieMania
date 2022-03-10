import React from 'react'
import SearchBar from './SearchBar'

function NavBar() {
  return (
    <div className="navBar">
        <h1>MovieMania</h1>
        <nav className="navLinks">
            <a href="#">Popular</a>
            <a href="#">Coming Soon</a>
            <a href="#">Favorites</a>
            <SearchBar/>
        </nav>
    </div>
  )
}

export default NavBar