import { Container, Heading } from '@chakra-ui/react'
import Layout from '@components/layouts/article'
import { getSortedPostsData } from '@lib/posts'

export async function getStaticProps() {
  const sortedPosts = getSortedPostsData()

  return {
    props: {
      posts: sortedPosts
    }
  }
}

const Posts = ({ posts }) => {
  const renderPostsList = posts.map(post => {
    return <div key={post.id}>{post.title}</div>
  })

  return (
    <Layout title="Posts">
      <Container maxW="container.lg">
        <Heading as="h3" size="lg" my={6}>
          Posts
        </Heading>
        {renderPostsList}
      </Container>
    </Layout>
  )
}

export default Posts
