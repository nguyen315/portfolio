import { Container, Heading } from '@chakra-ui/react'
import Layout from '@components/layouts/article'
import { getAllPostIds, getPostById } from '@lib/posts'
import Date from '@components/date'

export const getStaticPaths = () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { id } = params
  const post = await getPostById(id)

  return {
    props: {
      post
    }
  }
}

const Post = ({ post }) => {
  return (
    <Layout title={post.title}>
      <Container maxW="container.lg">
        <Heading as="h3" size="lg" my={6}>
          {post.title}
        </Heading>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }}></div>
        <Date dateString={post.date}/>
      </Container>
    </Layout>
  )
}

export default Post
