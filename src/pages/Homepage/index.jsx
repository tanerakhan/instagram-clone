import React from "react"
import { Link } from "react-router-dom"

export default function Homepage() {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/feed">Feed</Link>
    </div>
  )
}
