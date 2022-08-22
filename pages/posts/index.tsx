import {
  Container,
  Heading,
  Link,
  List,
  ListItem,
  Text
} from '@chakra-ui/react'
import Layout from '@components/layouts/article'
import { getSortedPostsData } from '@lib/posts'
import NextLink from 'next/link'
import Date from '@components/date'
import { Post } from '@lib/posts'

export async function getStaticProps() {
  const sortedPosts: Post[] = getSortedPostsData()

  return {
    props: {
      posts: sortedPosts
    }
  }
}

const Posts = ({ posts }: { posts: Post[] }) => {
  const renderPostsList = posts.map(post => {
    const { date, id, title, summary } = post
    return (
      <ListItem key={id}>
        <NextLink href={`/posts/${id}`} passHref>
          <Link variant="list-item">
            <Heading as="h5" size="md" variant="post-title">
              {title}
            </Heading>
          </Link>
        </NextLink>
        <Text>
          <Date dateString={date} />
        </Text>
        <Text>{summary}</Text>
      </ListItem>
    )
  })

  return (
    <Layout title="Posts">
      <Container maxW="container.lg">
        <Heading as="h3" size="lg" my={6}>
          Posts
        </Heading>
        <List spacing={5}>{renderPostsList}</List>
      </Container>
    </Layout>
  )
}

export default Posts
