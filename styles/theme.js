import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#1a1b1e',
        color: 'white'
      }
    }
  },
  components: {
    Card: {
      baseStyle: {
        container: {
          bg: '#25262b',
          borderRadius: 'xl',
          overflow: 'hidden',
          transition: 'transform 0.2s',
          _hover: {
            transform: 'translateY(-5px)'
          }
        }
      }
    }
  }
});

export default theme;
