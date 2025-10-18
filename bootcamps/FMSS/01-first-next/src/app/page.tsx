'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users: any[]) => {
        users.forEach((user: any) => {
          const isUserFromUmraniye = user.zipCode === 92300
          console.log(user.name)
        })
      })
  })

  return (
    <>
      <h1>NextJS</h1>
    </>
  )
}
