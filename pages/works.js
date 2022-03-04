import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
      </Container>
    </Layout>
  )
}

export default Works
