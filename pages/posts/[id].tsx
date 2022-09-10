import { Container, Heading, Text } from '@chakra-ui/react'
import { getAllPostIds, getPostById, Post } from '@lib/posts'
import Layout from '@components/layouts/article'
import Date from '@components/date'
import MDXWrapper from '@components/mdx-wrapper'
import Tags from '@components/tag'

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
  const { title, tags } = post
  return (
    <Layout title={title}>
      <Container maxW="container.lg">
        <Heading as="h1" size="2xl" my={6} variant="post-title">
          {title}
        </Heading>
        <Text>
          Last updated at <Date dateString={post.updatedDate} />
        </Text>
        {tags?.map(tag => {
          return <Tags key={tag} name={tag} fontSize="1em" />
        })}
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
