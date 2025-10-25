import Header from '../../components/Header'

export default function About() {
  const users = [
    {
      id: 1,
      name: 'John Doe',
      age: 20,
    },
    {
      id: 2,
      name: 'Jane Doe',
      age: 21,
    },
  ]

  return (
    <>
      <h1 className="flex justify-center">About</h1>
      {users.map((user) => (
        <Header key={user.id} username={user.name} age={user.age} />
      ))}
    </>
  )
}
