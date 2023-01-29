import { ListItem, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export interface StyledListItemProps {
  children: React.ReactNode
}

export const StyledListItem = (props: StyledListItemProps) => {
  return (
    <ListItem
      _before={{
        content: '"▹"',
        color: useColorModeValue('teal.500', 'teal.200'),
        mr: 2,
        fontSize: 'sm'
      }}
      style={{
        textIndent: 0
      }}
    >
      {props.children}
    </ListItem>
  )
}
