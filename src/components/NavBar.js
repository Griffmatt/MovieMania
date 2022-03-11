import React from 'react'

function NavBar() {
  return (
    <div className="navBar">
      <nav className="navItems">
        <a href="/"><h1><span className="titleMovie">M</span>ovie<span className="titleMania">M</span>ania</h1></a>
        <div className="navLinks">
          <a href="/">Home</a>
            <a href="/favorite-movies">Favorites</a>
            <a href="/">About</a>
            <a href="/search-movies">Search</a>
        </div>
      </nav>
    </div>
  )
}

export default NavBar