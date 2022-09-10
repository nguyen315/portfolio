import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props: React.ComponentProps<any>) => ({
    body: {
      bg: mode('#F7F7F7', '#202023')(props),
      overflow: 'overlay',
      fallbacks: [{ overflow: 'auto' }],
      '--transition-func': 'cubic-bezier',
      '--link-hover': '#2f3ab2'
    },
    '.mdx-prose': {
      fontSize: 'xl',
      lineHeight: '1.4',
      h1: {
        fontSize: '1.5em',
        fontWeight: 'bold',
        my: '5'
      },
      h4: {
        fontSize: '1.1em',
        fontWeight: 'bold',
        my: '2'
      },
      p: {
        marginBottom: '30px'
      },
      a: {
        color: '#539FBF'
      },
      code: {
        backgroundColor: mode('#091e4214', '#424345')(props),
        borderRadius: '0.375rem',
        fontSize: '16px',
        padding: '0.1em 0.25em'
      },
      pre: {
        backgroundColor: mode('#091e4214', '#424345')(props),
        borderRadius: '0.5rem',
        padding: '0.5em',
        marginBottom: '0.5em',
        code: {
          backgroundColor: 'transparent',
          padding: '0'
        }
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
        fontFamily: 'var(--chakra-fonts-body)'
      }
    }
  },
  Link: {
    baseStyle: (props: React.ComponentProps<any>) => ({
      color: mode('#3d7aed', '#ff63d3')(props),
      textUnderlineOffset: 3,
      _focus: {
        boxShadow: 'none'
      }
    }),
    variants: {
      'list-item': (props: React.ComponentProps<any>) => ({
        color: mode('#000', '#fff')(props),
        _hover: {
          textDecoration: 'none',
          color: 'var(--link-hover)'
        },
        transition: 'all 100ms var(--transition-func)'
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
  initialColorMode: 'light',
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
