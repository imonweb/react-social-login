import React from "react"
import { Link } from "react-router-dom"

const Navbar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self")
  }

  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Imon App
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            {/* <img src="https://images.pexels.com/photos/3112898/pexels-photo-3112898.jpeg?cs=srgb&dl=pexels-disha-sheta-3112898.jpg&fm=jpg" alt="" className="avatar" /> */}
            <img src={user.photos[0].value} alt="" className="avatar" />
          </li>
          <li className="listItem">{user.displayName}</li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link className="link" to="login">
          Login
        </Link>
      )}
    </div>
  )
}

export default Navbar
