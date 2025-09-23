import { PAGES } from '@/constants'
import { Box, Container, Stack, styled, Link } from '@mui/material'
import React from 'react'

const Navbar = styled(Stack)({
  padding: '1.5rem 0.75rem',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export default function Header() {
  return (
    <Box
      component='header'
      sx={{
        backgroundColor: '#747474'
      }}
    >
      <Container>
        <Navbar>
          {PAGES.map(page => (
            <Link color='textSecondary' variant='h5'>
              {page}
            </Link>
          ))}
        </Navbar>
      </Container>
    </Box>
  )
}
