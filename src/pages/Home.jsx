import React from 'react'
import HomeComponent from '../componets/home/HomeComponent'
import HomeComponentWhenLoggedIn from '../componets/home/HomeComponentWhenLoggedIn';
import { useSelector } from 'react-redux'

export default function Home() {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      {isLoggedIn && (<HomeComponentWhenLoggedIn />)}
      {!isLoggedIn && (<HomeComponent />)}
    </>
  )
}
