import React from 'react'

function Navber() {
  return (
    
<nav className="navbar bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand  text-light">Navbar</a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
  )
}

export default Navber