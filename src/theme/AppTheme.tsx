import { ReactNode, useMemo } from 'react';

import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { customizations } from './customizations';
import { colorSchemes } from './themePrimitives';

interface AppThemeProps {
  children: ReactNode;
}

export const AppTheme = (props: AppThemeProps) => {
  const { children } = props;
  const theme = useMemo(
    () =>
      createTheme({
        colorSchemes,
        components: customizations
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
