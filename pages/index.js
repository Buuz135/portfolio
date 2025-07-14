import Head from 'next/head'
import { Box, Container, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import ModCard from '../components/ModCard'

const MotionBox = motion(Box)

export async function getStaticProps() {
  const res = await fetch('https://www.curseforge.com/members/buuz135/projects?page=1&pageSize=100&sortBy=TotalDownloads&sortOrder=Desc');
  const html = await res.text();
  // Parse the HTML to extract mod info with the owner tag
  const modRegex = /<a href=\"(\/minecraft\/mc-mods\/[^\"]+)\"[^>]*>\s*<img[^>]+src=\"([^\"]+)\"[^>]*>[^<]*<\/a>\s*<div[^>]*>\s*<a[^>]*>([^<]+)<\/a>.*?Downloads([\d.,]+)M.*?By\s*<a[^>]*>Buuz135<\/a>.*?<div[^>]*class=\"project-avatar.*?Owner/gs;
  const mods = [];
  let match;
  while ((match = modRegex.exec(html)) !== null) {
    mods.push({
      url: 'https://www.curseforge.com' + match[1],
      image: match[2],
      name: match[3].trim(),
      downloads: Math.round(parseFloat(match[4].replace(/,/g, '')) * 1_000_000),
      description: '', // Description not available in list, can be fetched per mod if needed
      categories: [] // Categories not available in list, can be fetched per mod if needed
    });
  }
  console.log(mods);
  return {
    props: { mods },
    revalidate: 86400 // 24 hours
  };
}

export default function Home({ mods }) {
  return (
    <Box minH="100vh" bg="#1a1b1e">
      <Head>
        <title>Buuz135's Minecraft Mods</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="container.xl" py={10}>
        <VStack spacing={10} align="stretch">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <VStack spacing={4} textAlign="center" mb={10}>
              <Heading as="h1" size="2xl" bgGradient="linear(to-r, purple.400, pink.400)" bgClip="text">
                Buuz135's Minecraft Mods
              </Heading>
              <Text color="gray.400" fontSize="xl">
                Creating innovative solutions for automation and storage
              </Text>
            </VStack>
          </MotionBox>

          <Grid
            templateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)"
            }}
            gap={6}
            justifyContent="center"
          >
            {mods.map((mod, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                display="flex"
                justifyContent="center"
              >
                <ModCard mod={mod} />
              </MotionBox>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  )
}