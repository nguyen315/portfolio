import NextLink from 'next/link'
import {
  Container,
  Box,
  Button,
  Heading,
  Image,
  List,
  Link,
  ListItem,
  useColorModeValue,
  Icon,
  Text
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import Section from '@components/section'
import Paragraph from '@components/paragraph'
import Layout from '@components/layouts/article'
import { BioSection, BioYear } from '@components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoGithub, IoLogoFacebook } from 'react-icons/io'
import React from 'react'
import { StyledListItem } from '@components/styled-list-item'

const LinkIcon = styled(Link)`
  position: relative;
  top: 0;
  &:hover svg {
    transform: translate(0, -2px);
  }
  & svg {
    transition: transform ease 0.5s;
  }

  &:active,
  &:focus {
    box-shadow: none;
  }
`

const Page = () => {
  return (
    <Layout>
      <Container maxW="container.lg">
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          my={6}
        >
          Hello, I&apos;m a full-stack developer based in Vietnam!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title" mb={4}>
              Nguyen Ho
            </Heading>
            <Text>A developer love to learn new things</Text>

            <Box mt={2}>
              <LinkIcon href="https://github.com/nguyen315" target="_blank">
                <Icon
                  w={6}
                  h={6}
                  as={IoLogoGithub}
                  color={useColorModeValue('teal.500', 'teal.200')}
                />
              </LinkIcon>
            </Box>
          </Box>

          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            <Image
              borderColor="whiteAlplha.800"
              borderWidth={2}
              borderStyle="solid"
              borderRadius="50%"
              maxWidth="100px"
              display="inline-block"
              src="/images/nguyenho.png"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I&apos;m a full-stack developer based in Ho Chi Minh with a passion
            for building software crafts. Currently, I&apos;m a software
            developer working on NodeJS and ReactJS.
          </Paragraph>
          <Text>
            Here are a few technologies I’ve been working with recently:
          </Text>

          <Box fontFamily="var(--chakra-fonts-mono)" fontSize="sm">
            <List display="flex">
              <StyledListItem w="200px">Javascript (ES6)</StyledListItem>
              <StyledListItem w="200px">NodeJS</StyledListItem>
            </List>
            <List display="flex">
              <StyledListItem w="200px">Typescript</StyledListItem>
              <StyledListItem w="200px">React</StyledListItem>
            </List>
            <List display="flex">
              <StyledListItem w="200px">Rust</StyledListItem>
              <StyledListItem w="200px">React Native</StyledListItem>
            </List>
          </Box>
          <Box my={4}>
            <NextLink href="/works" passHref>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection marginBottom="0.5em">
            <BioYear>2000</BioYear>
            <Box display="block" style={{ textIndent: 0 }}>
              Born in Vietnam
            </Box>
          </BioSection>
          <BioSection marginBottom="0.5em">
            <BioYear>2022</BioYear>
            <Box display="block" style={{ textIndent: 0 }}>
              Completed the Bachelor Program Of Software Engineering in the HCM
              University, University of Science
            </Box>
          </BioSection>
          <Box marginBottom="0.5em">
            <BioSection>
              <BioYear>Jan 2022 - Jan 2023</BioYear>
              <Box display="block" style={{ textIndent: 0 }}>
                Fullstack Software Engineer at <b>Kobiton Vietnam </b>
              </Box>
            </BioSection>
            <List>
              <StyledListItem>
                Implemented features on backend with NodeJS and frontend with
                ReactJS.
              </StyledListItem>
              <StyledListItem>
                Designing and implementing feature webhook, using pub-sub
                messages system Kafka for scalable and better performance on the
                server.
              </StyledListItem>
              <StyledListItem>
                Implementing an installer with Bash Script to help automate and
                reduce the steps needed when installing Kobiton software.
              </StyledListItem>
            </List>
          </Box>
          <Box>
            <BioSection>
              <BioYear>Feb 2023 - Present</BioYear>
              <Box display="block" style={{ textIndent: 0 }}>
                Mobile Software Engineer at <b>Employment Hero</b>
              </Box>
            </BioSection>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Interesting things
          </Heading>
          <List>
            <ListItem>
              The Tao of Programming <Link href="http://www.mit.edu/~xela/tao.html" target="_blank">http://www.mit.edu/~xela/tao.html</Link>
            </ListItem>
            <ListItem>
              Find unused files, dependencies and exports in Javascript projects <Link href="https://github.com/webpro/knip" target="_blank">knip</Link>
            </ListItem>
          </List>
        </Section>


        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List display='flex' flexDirection='row'>
            <ListItem>
              <Link href="https://github.com/nguyen315" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @nguyen315
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.facebook.com/hominhnguyen315/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoFacebook} />}
                >
                  @hominhnguyen315
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>


      </Container>
    </Layout>
  )
}

export default Page
