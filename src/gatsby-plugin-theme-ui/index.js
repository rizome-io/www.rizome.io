const colors = {
  text: '#000',
  white: '#efefef',
  background: '#efefef',
  primary: '#f58c43',
  secondary: '#30c',
  muted: '#f6f6f6',
  modes: {
    dark: {
      bg: "#2e2e2e",
      text: "#fff",
    }
  }
}

export default {
  initialColorModeName: 'light',
  colors,
  space: [
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
    512
  ],
  fonts: {
    body: 'Barlow, Helvetica Neue, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [
    12,
    14,
    16,
    20,
    24,
    32,
    48,
    64,
    96
  ],
  fontWeights: {
    body: 300,
    heading: '300',
    bold: 500
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 700,
      fontSize: 6
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5
    },
    h3: {
      color: 'primary',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    },
    a: {
      color: 'primary'
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    img: {
      maxWidth: '100%'
    },
    navlink: {
      color: colors.modes.dark.text,
      textDecoration: 'none',
      px: [2, 4],
      py: 3,
      ":hover": {
        color: "primary"
      }
    },
    em: {
      fontStyle: 'normal',
      color: 'primary'
    },
    header: {
      bg: 'rgba(50,50,50,90%)',
      borderBottom: `1px solid ${colors.white}`
    }
  }
}

