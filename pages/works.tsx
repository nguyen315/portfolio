import { Container, Heading } from '@chakra-ui/react'
import Layout from '@components/layouts/article'
import Projects from '@components/projects'

const Works = () => {
  return (
    <Layout title="Works">
      <Container maxW="container.lg">
        <Heading as="h3" size="lg" my={6}>
          Works
        </Heading>
        <Projects />
      </Container>
    </Layout>
  )
}

export default Works
