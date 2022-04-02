import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#F7F7F7', '#202023')(props),
      overflow: 'overlay',
      fallbacks: [{ overflow: 'auto' }]
    },
    '.mdx-prose': {
      h1: {
        fontSize: '1.5em',
        my: '4',
        fontWeight: 'bold'
      },
      p: {
        fontSize: 'md',
        lineHeight: '1.4'
      },
      a: {
        color: '#539FBF'
      }
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      },
      'post-title': {
        fontFamily: "var(--chakra-fonts-body)"
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63d3')(props),
      textUnderlineOffset: 3
    }),
    variants: {
      'list-item': props => ({
        color: mode('#000', '#fff')(props),
        _hover: {
          textDecoration: 'none'
        }
      })
    }
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  glassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
})

export default theme
