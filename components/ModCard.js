import { Box, Image, Text, Link, VStack, HStack, Badge, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

const MotionBox = motion(Box);

const CARD_SIZE = '300px'; // Square image size
const CARD_HEIGHT = '520px'; // Fixed card height for uniformity

function formatDownloads(downloads) {
  if (downloads >= 1_000_000_000) {
    return (downloads / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
  } else if (downloads >= 1_000_000) {
    return (downloads / 1_000_000).toFixed(downloads < 10_000_000 ? 2 : 1).replace(/\.0+$/, '') + 'M';
  } else if (downloads >= 1_000) {
    return (downloads / 1_000).toFixed(downloads < 10_000 ? 2 : 1).replace(/\.0+$/, '') + 'K';
  } else {
    return downloads.toLocaleString();
  }
}

const ModCard = ({ mod }) => {
  return (
    <MotionBox
      as="article"
      bg="#25262b"
      borderRadius="xl"
      overflow="hidden"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      width={CARD_SIZE}
      height={CARD_HEIGHT}
      display="flex"
      flexDirection="column"
      alignItems="center"
      boxShadow="md"
    >
      <Box width="100%" height={CARD_SIZE} position="relative" flexShrink={0}>
        <Image
          src={mod.image}
          alt={mod.name}
          width="100%"
          height={CARD_SIZE}
          objectFit="cover"
        />
        <Box
          position="absolute"
          top={0}
          right={0}
          bg="rgba(0,0,0,0.7)"
          p={2}
          borderBottomLeftRadius="md"
        >
          <HStack spacing={1} align="center">
            <FaDownload />
            <Text fontSize="sm">{formatDownloads(mod.downloads)}</Text>
          </HStack>
        </Box>
      </Box>
      <Box p={4} width="100%" display="flex" flexDirection="column" flexGrow={1} minHeight="0">
        <VStack align="stretch" spacing={2} flexGrow={1} minHeight={0}>
          <Text fontSize="lg" fontWeight="bold" color="white" noOfLines={1}>
            {mod.name}
          </Text>
          <Text color="gray.200" fontSize="sm" noOfLines={2} flexGrow={1}>
            {mod.description}
          </Text>
          <HStack spacing={2} flexWrap="wrap">
            {mod.categories.map((category, index) => (
              <Badge key={index} colorScheme="purple" fontSize="0.7em">
                {category}
              </Badge>
            ))}
          </HStack>
        </VStack>
        <Button
          as={Link}
          href={mod.url}
          isExternal
          leftIcon={<FaExternalLinkAlt />}
          colorScheme="purple"
          variant="solid"
          mt={4}
          width="100%"
          fontWeight="bold"
          _hover={{ textDecoration: 'none', bg: 'purple.600' }}
        >
          View Mod
        </Button>
      </Box>
    </MotionBox>
  );
};

export default ModCard;
