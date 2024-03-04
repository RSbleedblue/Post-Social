import React from 'react'
import { Outlet } from 'react-router-dom'

export default function layout() {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}
