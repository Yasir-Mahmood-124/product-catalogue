import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1E1E1B',
      contrastText: '#F5EDD6',
    },
    secondary: {
      main: '#B8922A',
      contrastText: '#1A1A17',
    },
    background: {
      default: '#F5EDD6',
      paper: '#FAF4E8',
    },
    text: {
      primary: '#1A1A17',
      secondary: '#5C5647',
    },
  },
  typography: {
    fontFamily: 'var(--font-lora), "Lora", Georgia, serif',
    h1: {
      fontFamily: 'var(--font-cormorant), "Cormorant Garamond", Georgia, serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontFamily: 'var(--font-cormorant), "Cormorant Garamond", Georgia, serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: 'var(--font-cormorant), "Cormorant Garamond", Georgia, serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'var(--font-cormorant), "Cormorant Garamond", Georgia, serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: 'var(--font-cormorant), "Cormorant Garamond", Georgia, serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: 'var(--font-cormorant), "Cormorant Garamond", Georgia, serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily: 'var(--font-lora), "Lora", Georgia, serif',
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: 'var(--font-lora), "Lora", Georgia, serif',
      lineHeight: 1.6,
    },
    button: {
      fontFamily: 'var(--font-lora), "Lora", Georgia, serif',
      letterSpacing: '0.1em',
      textTransform: 'uppercase' as const,
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '10px 28px',
          fontWeight: 600,
          fontSize: '0.8rem',
          letterSpacing: '0.12em',
        },
        containedPrimary: {
          backgroundColor: '#B8922A',
          color: '#1A1A17',
          '&:hover': {
            backgroundColor: '#9E7A20',
          },
        },
        containedSecondary: {
          backgroundColor: '#F5EDD6',
          color: '#1A1A17',
          '&:hover': {
            backgroundColor: '#EDE3C4',
          },
        },
        outlinedPrimary: {
          borderColor: '#B8922A',
          color: '#B8922A',
          '&:hover': {
            borderColor: '#9E7A20',
            backgroundColor: 'rgba(184,146,42,0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none',
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 0,
          backgroundColor: '#1E1E1B',
          border: '1px solid rgba(184,146,42,0.3)',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#F5EDD6',
          fontFamily: 'var(--font-lora), "Lora", Georgia, serif',
          fontSize: '0.875rem',
          letterSpacing: '0.04em',
          '&:hover': {
            backgroundColor: 'rgba(184,146,42,0.15)',
            color: '#B8922A',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(184,146,42,0.25)',
        },
      },
    },
  },
});

export default theme;
