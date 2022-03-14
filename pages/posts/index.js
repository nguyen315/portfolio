import { Container, Heading, Link } from '@chakra-ui/react'
import Layout from '@components/layouts/article'
import { getSortedPostsData } from '@lib/posts'
import NextLink from 'next/link'
import Date from '@components/date'

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
    const { date, id, title } = post
    return (
      <li key={id}>
        <NextLink href={`/posts/${id}`} passHref>
          <Link>{title}</Link>
        </NextLink>
        <Date dateString={date} />
      </li>
    )
  })

  return (
    <Layout title="Posts">
      <Container maxW="container.lg">
        <Heading as="h3" size="lg" my={6}>
          Posts
        </Heading>
        <ul>{renderPostsList}</ul>
      </Container>
    </Layout>
  )
}

export default Posts
