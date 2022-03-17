import * as React from "react"
import { Routes, Route } from "react-router-dom"

/* Components */
import { AuthLayout, DefaultLayout } from "src/components/Layouts"

/* Pages */
import Login from "src/pages/Login"
import Register from "src/pages/Register"
import Feed from "src/pages/Feed"
import Homepage from "src/pages/Homepage"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/login"
        element={
          <AuthLayout classes="login">
            <Login />
          </AuthLayout>
        }
      />
      <Route
        path="/register"
        element={
          <AuthLayout classes="register">
            <Register />
          </AuthLayout>
        }
      />
      <Route
        path="/feed"
        element={
          <DefaultLayout classes="feed">
            <Feed />
          </DefaultLayout>
        }
      />
    </Routes>
  )
}

export default App
