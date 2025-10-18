import { NextRequest, NextResponse } from 'next/server'

type Data = {
  name: string
  apiURL?: string
}

export async function GET(request: NextRequest) {
  return NextResponse.json({
    name: 'Jhon Doe',
    apiURL: process.env.API_URL,
  } as Data)
}
