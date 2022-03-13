import { Container, Heading } from '@chakra-ui/react'
import Layout from '@components/layouts/article'
import matter from 'gray-matter'

const PostTemplate = ({ content, data }) => {
  const frontmatter = data

  return (
    <Layout title="Posts">
      <Container maxW="container.lg">
        <Heading as="h3" size="lg" my={6}>
          {frontmatter.title}
        </Heading>
        <div>{content}</div>
      </Container>
    </Layout>
  )
}

PostTemplate.getInitialProps = async context => {
  const { slug } = context.query

  const data = matter(content.default)

  return { ...data }
}

export default PostTemplate
