import { Container, Heading } from '@chakra-ui/react'
import { getAllPostIds, getPostById } from '@lib/posts'
import Layout from '@components/layouts/article'
import Date from '@components/date'
import MDXWrapper from '@components/mdx-wrapper'

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
        <Date dateString={post.date} />
        <MDXWrapper>
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }}></div>
        </MDXWrapper>
      </Container>
    </Layout>
  )
}

export default Post
