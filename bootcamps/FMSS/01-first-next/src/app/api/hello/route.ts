import { NextRequest, NextResponse } from 'next/server'

interface User {
  id: number
  name: string
  email: string
  phone: string
  website: string
}

type Data = {
  name: string
  apiURL?: string
  users?: any[]
  userId?: string
  queryString?: Record<string, string | string[]>
  query?: string
  params?: string
}

const USER_API_URL = 'https://jsonplaceholder.typicode.com/users'

export async function GET(request: NextRequest, response: NextResponse<Data>) {
  const userId = request.nextUrl.searchParams.get('id')
  const userResponse = await fetch(`${USER_API_URL}/${userId}`)
    .then((res) => res.json())
    .then((user: User) => {
      console.log('user response: ', user.name)
      return NextResponse.json({ user: user as unknown as User })
    })
    .catch((error) => {
      console.log(error)
      return NextResponse.json({ error: error })
    })

  return NextResponse.json(userResponse)

  // return NextResponse.json({
  //   queryString: Object.fromEntries(request.nextUrl.searchParams.entries()),
  //   query: request.nextUrl.searchParams.get('name'),
  //   params: request.nextUrl.pathname.split('/').pop(),
  // })

  // return NextResponse.json({
  //   name: 'Jhon Doe',
  //   apiURL: process.env.API_URL,
  // } as Data)
}
