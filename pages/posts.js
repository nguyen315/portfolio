import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Posts = () => {
  return (
    <Layout>
      <Container maxW="container.lg">
        <Heading as="h3" fontSize={20} my={6}>
          Posts
        </Heading>
      </Container>
    </Layout>
  )
}

export default Posts
