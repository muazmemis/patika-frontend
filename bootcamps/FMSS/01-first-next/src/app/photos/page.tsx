import { Box, Grid, GridItem } from '@chakra-ui/react'

export default function Photos() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      Fotoğraflar
      <Grid templateColumns="repeat(5, 1fr)" gap={10}>
        {[...Array(20)].map((_) => (
          <GridItem w="100%" bg="blue.500">
            <Box>
              <img src="https://picsum.photos/200" alt="" />
            </Box>
          </GridItem>
        ))}
      </Grid>
    </main>
  )
}
