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
  Icon
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import Section from '@components/section'
import Paragraph from '@components/paragraph'
import Layout from '@components/layouts/article'
import { BioSection, BioYear } from '@components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io'
import React from 'react'

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
            <Heading as="h2" variant="page-title">
              Nguyen Ho
            </Heading>
            <p> A developer love to learn new things</p>
            <Box>
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
            Nguyen is a full-stack developer based in Ho Chi Minh with a passion
            for building digital services/stuff. Currently, I&apos;m a software
            developer working on NodeJS and ReactJS.
          </Paragraph>
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
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Vietnam
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Completed the Bachelor Program Of Software Engineering in the Ho Chi
            Minh University, University of Science
          </BioSection>
          <BioSection>
            <BioYear>2022 - Present</BioYear>
            Work at Kobiton Vietnam
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
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
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
