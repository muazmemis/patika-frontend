'use client'

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_API_URL)

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((res) => res.json())
  //     .then((users: any[]) => {
  //       users.forEach((user: any) => {
  //         const isUserFromUmraniye = user.zipCode === 92300
  //         console.log(user.name)
  //       })
  //     })
  // })

  return (
    <>
      <h1 className="flex justify-center">NextJS 2</h1>
    </>
  )
}
