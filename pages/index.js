import Head from 'next/head'
import { Box, Container, Grid, Heading, Text, VStack, HStack, Avatar, Link, IconButton } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGithub, FaTwitter, FaDiscord, FaDownload } from 'react-icons/fa'
import { SiPatreon, SiKofi } from 'react-icons/si'
import ModCard from '../components/ModCard'
import { getCurseForgeProjects } from '../lib/curseforge'

const MotionBox = motion(Box)
const HERO_BG = 'linear-gradient(120deg, #6a5af9 0%, #c957e6 100%)'

export default function Home({ mods, dataError }) {
  const totalDownloads = mods.reduce((sum, mod) => sum + mod.downloads, 0)

  return (
    <Box minH="100vh" bgGradient="linear(120deg, #1a1b1e 0%, #23243a 100%)">
      <Head>
        <title>Buuz135&apos;s Minecraft Mods</title>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Buuz135" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Box
        as={motion.div}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        w="100%"
        py={{ base: 10, md: 16 }}
        bgGradient={HERO_BG}
        color="white"
        boxShadow="lg"
        mb={10}
      >
        <Container maxW="container.lg">
          <VStack spacing={6} align="center">
            <Avatar size="2xl" src="https://static-cdn.jtvnw.net/jtv_user_pictures/83fa4b8a-3183-4142-bc89-2bfa33da8483-profile_image-300x300.png" name="Buuz135" boxShadow="xl" border="4px solid white" />
            <Heading as="h1" size="2xl" fontWeight="extrabold" letterSpacing="tight">
              Buuz135
            </Heading>
            <HStack spacing={2} align="center">
              <Box as="span" fontSize="2xl" fontWeight="bold" color="white" display="flex" alignItems="center">
                <FaDownload style={{ marginRight: 8 }} />
                {totalDownloads.toLocaleString('en-US')} total downloads
              </Box>
            </HStack>
            <Text fontSize="xl" color="whiteAlpha.900" textAlign="center" maxW="2xl">
              Minecraft Mod Developer | Automation, Storage, and Quality of Life Mods
            </Text>
            <HStack spacing={4}>
              <Link href="https://github.com/Buuz135" isExternal>
                <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" variant="ghost" color="white" _hover={{ bg: 'whiteAlpha.300' }} />
              </Link>
              <Link href="https://discord.gg/4tPfwjn" isExternal>
                <IconButton aria-label="Discord" icon={<FaDiscord />} size="lg" variant="ghost" color="white" _hover={{ bg: 'whiteAlpha.300' }} />
              </Link>
              <Link href="https://twitter.com/Buuz135mods" isExternal>
                <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" variant="ghost" color="white" _hover={{ bg: 'whiteAlpha.300' }} />
              </Link>
              <Link href="https://ko-fi.com/buuz135" isExternal>
                <IconButton aria-label="Ko-fi" icon={<SiKofi />} size="lg" variant="ghost" color="white" _hover={{ bg: 'pink.300' }} />
              </Link>
              <Link href="https://www.patreon.com/buuz135" isExternal>
                <IconButton aria-label="Patreon" icon={<SiPatreon />} size="lg" variant="ghost" color="white" _hover={{ bg: 'orange.400' }} />
              </Link>
            </HStack>
          </VStack>
        </Container>
      </Box>

      <Container maxW="container.xl" py={10}>
        <VStack spacing={10} align="stretch">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <VStack spacing={4} textAlign="center" mb={10}>
              <Heading as="h2" size="xl" bgGradient="linear(to-r, purple.400, pink.400)" bgClip="text">
                My Minecraft Mods
              </Heading>
              <Text color="gray.300" fontSize="lg">
                Explore my collection of mods designed to enhance your Minecraft experience.
              </Text>
              {dataError && (
                <Text color="red.300" fontSize="md">
                  Live CurseForge data is temporarily unavailable. Please reload the page in a moment.
                </Text>
              )}
            </VStack>
          </MotionBox>

          <Grid
            templateColumns={{
              base: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)'
            }}
            gap={6}
            justifyContent="center"
          >
            {mods.map((mod, index) => (
              <MotionBox
                key={mod.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.05, 1) }}
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

export async function getServerSideProps({ res }) {
  res.setHeader('Cache-Control', 'no-store, max-age=0')

  try {
    const mods = await getCurseForgeProjects()

    return {
      props: {
        mods,
        dataError: false
      }
    }
  } catch (error) {
    console.error('Unable to load CurseForge projects', error)

    return {
      props: {
        mods: [],
        dataError: true
      }
    }
  }
}
