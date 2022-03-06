import { Container, Heading } from '@chakra-ui/react'
import Layout from '@components/layouts/article'
import Projects from '@components/projects'

const Works = () => {
  return (
    <Layout title="Works">
      <Container maxW="container.lg">
        <Heading as="h3" fontSize="26" mb={4}>
          Works
        </Heading>
        <Projects />
      </Container>
    </Layout>
  )
}

export default Works
