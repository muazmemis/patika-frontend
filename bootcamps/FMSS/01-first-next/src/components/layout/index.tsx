'use client'
import { useAuthContext } from '@/context/auth-context'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'
import Footer from './footer'
import Navbar from './navbar'

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const authContext = useAuthContext()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!authContext.isUserAuthenticated()) {
      if (token) authContext.setAuthState(token)
      redirect('/login')
    }
  })
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
