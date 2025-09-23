import { Components, Theme } from '@mui/material/styles'

export const customizations: Components<Theme> = {
  MuiButtonBase: {
    styleOverrides: {
      root: {
        boxSizing: 'border-box',
        transition: 'all 100ms ease-in'
      }
    }
  },
  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: 'none',
        cursor: 'pointer',
        '&::first-letter': {
          textTransform: 'uppercase'
        }
      }
    }
  }
}
