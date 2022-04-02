import PropTypes from 'prop-types'
import {
  Box,
  Flex,
  Heading,
  Icon,
  Link,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { FiFolder } from 'react-icons/fi'
import { IoLogoGithub } from 'react-icons/io'

const Wrapper = styled(Flex)`
  transition: transform ease 0.5s;
  &:hover {
    transform: translate(0, -2px);
  }

  &:hover a#title {
    color: ${({ theme }) =>
      useColorModeValue(theme.colors.teal['500'], theme.colors.teal['200'])};
    text-decoration: none;
  }
`

const TechStackText = styled(Text)`
  display: inline-block;
  margin-right: 0.75rem;
`

const LinkIcon = styled(Link)`
  &:active,
  &:focus {
    box-shadow: none;
  }
`

const ProjectItem = ({ title, description, github, href, techs }) => {
  return (
    <Wrapper
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      height="300px"
      px={5}
      py={7}
      borderRadius={5}
      direction="column"
    >
      <Flex justify="space-between" align="center" mb={4}>
        <Box>
          <Icon
            w={10}
            h={10}
            as={FiFolder}
            color={useColorModeValue('teal.500', 'teal.200')}
          />
        </Box>
        <LinkIcon
          href={github}
          target="_blank"
          color={useColorModeValue('black', 'white')}
        >
          <Icon w={7} h={7} as={IoLogoGithub}></Icon>
        </LinkIcon>
      </Flex>

      <Box>
        <Link
          href={href || github}
          target="_blank"
          id="title"
          color={useColorModeValue('black', 'white')}
        >
          <Heading as="h4" size="md" mb={4}>
            {title}
          </Heading>
        </Link>
        <Text fontSize="sm">{description}</Text>
      </Box>

      <Box sx={{ marginTop: 'auto' }}>
        {techs &&
          techs.map((tech, index) => (
            <TechStackText key={index} fontFamily="mono" fontSize="xs">
              {tech}
            </TechStackText>
          ))}
      </Box>
    </Wrapper>
  )
}

ProjectItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  github: PropTypes.string.isRequired,
  href: PropTypes.string,
  techs: PropTypes.arrayOf(PropTypes.string)
}

export default ProjectItem
