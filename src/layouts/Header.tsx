import { PAGES } from '@/constants';
import { Box, Container, Stack, styled, Link } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = styled(Stack)({
  padding: '1.5rem 0.75rem',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
});

export default function Header() {
  const navigate = useNavigate();

  const handleNavLinkClick = (endpoint: string) => {
    navigate(endpoint);
  };

  return (
    <Box
      component='header'
      sx={{
        backgroundColor: '#141414'
      }}
    >
      <Container>
        <Navbar>
          {PAGES.map(page => (
            <Link
              color='textSecondary'
              variant='h5'
              key={'headerKey' + page.caption}
              onClick={() => {
                handleNavLinkClick(page.url);
              }}
            >
              {page.caption}
            </Link>
          ))}
        </Navbar>
      </Container>
    </Box>
  );
}
