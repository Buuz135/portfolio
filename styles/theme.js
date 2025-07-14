import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#181926',
        color: 'white',
        minHeight: '100vh',
        background: 'linear-gradient(120deg, #23243a 0%, #1a1b1e 100%)',
      },
      '::selection': {
        background: 'rgba(147, 51, 234, 0.3)',
      },
    },
  },
  components: {
    Card: {
      baseStyle: {
        container: {
          bg: 'rgba(37,38,43,0.85)',
          borderRadius: 'xl',
          overflow: 'hidden',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.08)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          _hover: {
            transform: 'translateY(-8px) scale(1.03)',
            boxShadow: '0 16px 40px 0 rgba(31, 38, 135, 0.37)',
          },
        },
      },
    },
  },
});

export default theme;
