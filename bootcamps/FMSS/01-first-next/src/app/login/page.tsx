'use client'
import { useAuthContext } from '@/context/auth-context'
import { Button } from '@chakra-ui/react'
import { redirect } from 'next/navigation'

function Login() {
  const authContext = useAuthContext()

  return (
    <div>
      <h1>Giriş yapınız</h1>
      <Button
        type="button"
        onClick={() => {
          authContext.setAuthState({ token: 'qwe' })
          redirect('/home')
        }}
      >
        click me
      </Button>
    </div>
  )
}

export default Login
