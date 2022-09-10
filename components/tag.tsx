import { Box, Text } from '@chakra-ui/react'
import { getTagColor, Tag } from '@lib/tags'
import styled from '@emotion/styled'

const TagBox = styled(Box)`
  border: 1px solid transparent;
  border-radius: 0.3em;
  display: inline-block;
  padding: 0.2em 0.4em;
  font-size: ${props => props.fontSize};

  &:hover {
    /* 19 for 10% opacity */
    background-color: ${props => props.borderColor}19;
    /* 72 for 45% opacity */
    border-color: ${props => props.borderColor}72;
  }
`

const Tags = ({ name, fontSize }: Tag & { fontSize?: string }) => {
  const tagColor = getTagColor(name)
  return (
    <TagBox
      borderColor={tagColor}
      fontSize={fontSize}
      transition="all 100ms var(--transition-func)"
    >
      <Text>
        <Text as="span" color={tagColor}>
          #
        </Text>
        {name}
      </Text>
    </TagBox>
  )
}

export default Tags
