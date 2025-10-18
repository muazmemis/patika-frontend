interface HeaderProps {
  username: string
  age: number
}

export default function Header(props: HeaderProps) {
  return <header>Merhaba {props.username} {props.age}</header>
}
