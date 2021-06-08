import React from "react"
import { Link } from "react-router-dom"
import "./Header.scss"
import { ReactComponent as Logo } from "../../assets/WayHyped2.svg"
import { auth } from "../../firebase/firebase.utils"

function Header({ currentUser }) {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="user">
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
            <img src={currentUser.photoURL} alt="User" />
          </div>
        ) : (
          <Link className="option" to="/signin"></Link>
        )}
      </div>
    </div>
  )
}

export default Header
