import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <span>Imon App</span>
      <ul className="list">
        <li className="listItem">
          <img src="https://images.pexels.com/photos/3112898/pexels-photo-3112898.jpeg?cs=srgb&dl=pexels-disha-sheta-3112898.jpg&fm=jpg" alt="" className="avatar" />
        </li>
        <li className="listItem">John Doe</li>
        <li className="listItem">Logout</li>
      </ul>
    </div>
  )
}

export default Navbar