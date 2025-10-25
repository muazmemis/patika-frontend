import { Button, Container, Heading, HStack } from '@chakra-ui/react'

export default function Navbar() {
  return (
    <Container centerContent>
      <HStack gap={30}>
        <Heading>My Page</Heading>
        <Button>Login</Button>
      </HStack>
    </Container>
  )
}
