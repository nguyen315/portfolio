import { Container, Heading } from '@chakra-ui/react'
import { getAllPostIds, getPostById, Post } from '@lib/posts'
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

export const getStaticProps = async ({
  params
}: {
  params: { id: string }
}) => {
  const { id } = params
  const post = await getPostById(id)

  return {
    props: {
      post
    }
  }
}

const Post = ({ post }: { post: Post }) => {
  return (
    <Layout title={post.title}>
      <Container maxW="container.lg">
        <Heading as="h1" size="2xl" my={6} variant="post-title">
          {post.title}
        </Heading>
        <Date dateString={post.date} />
        <MDXWrapper>
          <div
            dangerouslySetInnerHTML={{ __html: post.contentHtml as string }}
          ></div>
        </MDXWrapper>
      </Container>
    </Layout>
  )
}

export default Post
