import Head from 'next/head'
import { Box, Container, Grid, Heading, Text, VStack, HStack, Avatar, Link, IconButton } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGithub, FaTwitter, FaDiscord, FaDownload } from 'react-icons/fa'
import { SiPatreon, SiKofi } from 'react-icons/si'
import ModCard from '../components/ModCard'

const MotionBox = motion(Box)

const HERO_BG = 'linear-gradient(120deg, #6a5af9 0%, #c957e6 100%)';

/*#codebase Read this page: https://www.curseforge.com/members/buuz135/projects?page=1&pageSize=100&sortBy=TotalDownloads&sortOrder=Desc

Add all of the mod information from my profile that has the owner tag*/

const mods = [

  {
    name: "Industrial Foregoing",
    description: "A collection of machines to make your minecraft builds easier to automate.",
    downloads: 123400000,
    image: "https://media.forgecdn.net/avatars/thumbnails/156/655/256/256/636640433174784536.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/industrial-foregoing",
    categories: ["Technology", "Automation"]
  },
  {
    name: "Titanium",
    description: "Library for Horizon Studio.",
    downloads: 77200000,
    image: "https://media.forgecdn.net/avatars/thumbnails/204/596/256/256/636941376880705827.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/titanium",
    categories: ["Library", "API"]
  },
  {
    name: "FindMe",
    description: "Search for an item in nearby inventories.",
    downloads: 56400000,
    image: "https://media.forgecdn.net/avatars/thumbnails/149/484/256/256/636589738152406559.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/findme",
    categories: ["Utility", "Storage"]
  },
  {
    name: "Refined Storage: Requestify",
    description: "Keep your refined storage stocked with crafteable items.",
    downloads: 40400000,
    image: "https://media.forgecdn.net/avatars/thumbnails/179/817/256/256/636789115663061246.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/rs-requestify",
    categories: ["Storage", "Automation"]
  },
  {
    name: "Functional Storage",
    description: "Your classic storage drawers but with more upgrades!",
    downloads: 34600000,
    image: "https://media.forgecdn.net/avatars/thumbnails/471/410/256/256/637759678200851079.jpeg",
    url: "https://www.curseforge.com/minecraft/mc-mods/functional-storage",
    categories: ["Storage", "Organization"]
  },
  {
    name: "Thaumic JEI",
    description: "A JEI addon for thaumcraft 6.",
    downloads: 31900000,
    image: "https://media.forgecdn.net/avatars/thumbnails/138/833/256/256/636524375193820008.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/thaumic-jei",
    categories: ["Addons", "Thaumcraft"]
  },
  {
    name: "Dark Mode Everywhere",
    description: "Have dark GUIs everywhere with the power of shaders.",
    downloads: 22900000,
    image: "https://media.forgecdn.net/avatars/thumbnails/487/453/256/256/637790648718964338.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/dark-mode-everywhere",
    categories: ["Cosmetic"]
  },
  {
    name: "Emojiful",
    description: "Emojis in minecraft.",
    downloads: 22300000,
    image: "https://media.forgecdn.net/avatars/thumbnails/170/54/256/256/636719401079186770.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/emojiful",
    categories: ["Cosmetic"]
  },
  {
    name: "Portality",
    description: "Thinking through portals.",
    downloads: 17900000,
    image: "https://media.forgecdn.net/avatars/thumbnails/171/955/256/256/636733113858522171.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/portality",
    categories: ["Technology"]
  },
  {
    name: "Together Forever",
    description: "A Team system and API that syncs Advancements and GameStages between players in the team.",
    downloads: 16700000,
    image: "https://media.forgecdn.net/avatars/thumbnails/138/632/256/256/636522999390235364.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/together-forever",
    categories: ["Library", "API"]
  },
  {
    name: "Sushi Go Crafting",
    description: "A food mod for making Sushi!",
    downloads: 13800000,
    image: "https://media.forgecdn.net/avatars/thumbnails/611/143/256/256/637994743156037694.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/sushigocrafting",
    categories: ["Food"]
  },
  {
    name: "ArmoreableMobs",
    description: "Allows you give armor and items to an entity when it spawns using Craftweaker with gamestages support!",
    downloads: 13300000,
    image: "https://media.forgecdn.net/avatars/thumbnails/129/350/256/256/636456583434939168.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/armoreablemobs",
    categories: ["Armor", "Tools", "Weapons"]
  },
  {
    name: "Industrial Foregoing Souls",
    description: "Use Warden's souls to accelerate your machines.",
    downloads: 12000000,
    image: "https://media.forgecdn.net/avatars/thumbnails/867/253/256/256/638280397869447589.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/industrial-foregoing-souls",
    categories: ["Technology", "Magic"]
  },
  {
    name: "Cat Jammies",
    description: "Cats do be jamming to music.",
    downloads: 11600000,
    image: "https://media.forgecdn.net/avatars/thumbnails/329/3/256/256/637453897687679087_animated.gif",
    url: "https://www.curseforge.com/minecraft/mc-mods/cat-jammies",
    categories: ["Cosmetic", "Mobs"]
  },
  {
    name: "DiscordSuite",
    description: "Discord Rich Presence.",
    downloads: 11500000,
    image: "https://media.forgecdn.net/avatars/thumbnails/173/965/256/256/636747325401407773.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/discordsuite",
    categories: ["Integration"]
  },
  {
    name: "Matter Overdrive: Legacy Edition",
    description: "Legacy Edition of the Matter Overdrive Mod.",
    downloads: 10300000,
    image: "https://media.forgecdn.net/avatars/thumbnails/180/512/256/256/636793623986401629.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/matteroverdrive-legacy",
    categories: ["Technology"]
  },
  {
    name: "Water Control Extreme",
    description: "Finite Water Control for 1.12.",
    downloads: 7700000,
    image: "https://media.forgecdn.net/avatars/thumbnails/121/145/256/256/636408319517749909.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/water-control-extreme",
    categories: ["Miscellaneous"]
  },
  {
    name: "Repeatable Trial Vaults",
    description: "Consume a trial key to be able to use the trial vault again.",
    downloads: 5900000,
    image: "https://media.forgecdn.net/avatars/thumbnails/1046/771/256/256/638574943877965895.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/repeatable-trial-vaults",
    categories: ["Utility & QoL"]
  },
  {
    name: "Despawning Spawners",
    description: "Limiting the amount of spawns a spawner can do in its lifetime.",
    downloads: 5900000,
    image: "https://media.forgecdn.net/avatars/thumbnails/109/657/256/256/636381378118095104.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/despawning-spawners",
    categories: ["Miscellaneous"]
  },
  {
    name: "JEI Villagers",
    description: "A JEI addon that helps you to see what villagers have to offer.",
    downloads: 5100000,
    image: "https://media.forgecdn.net/avatars/thumbnails/132/988/256/256/636479745271847923.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/jei-villagers",
    categories: ["Map and Information", "Addons"]
  },
  {
    name: "Seals",
    description: "Display your biggest achievements with style.",
    downloads: 5100000,
    image: "https://media.forgecdn.net/avatars/thumbnails/235/921/256/256/637089135926310296.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/seals",
    categories: ["Cosmetic"]
  },
  {
    name: "Smithing Template Viewer for JEI/EMI",
    description: "View how Smithing Templates would look on armor from JEI/EMI.",
    downloads: 4100000,
    image: "https://media.forgecdn.net/avatars/thumbnails/1111/59/256/256/638662502928358862.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/smithing-template-viewer",
    categories: ["Cosmetic"]
  },
  {
    name: "Soulplied Energistics",
    description: "Transfer Industrial Foregoing Souls through Applied Energistics.",
    downloads: 3400000,
    image: "https://media.forgecdn.net/avatars/thumbnails/1132/687/256/256/638692695631260067.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/soulplied-energistics",
    categories: ["Technology", "Addons"]
  },
  {
    name: "Tamed Summon",
    description: "All the pets with owner.",
    downloads: 1200000,
    image: "https://media.forgecdn.net/avatars/thumbnails/327/111/256/256/637448497156373696.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/tamed-summon",
    categories: ["Cosmetic", "Server Utility"]
  },
  {
    name: "Replication",
    description: "Replicating items without any printing errors.",
    downloads: 1200000,
    image: "https://media.forgecdn.net/avatars/thumbnails/980/270/256/256/638486456329003372_animated.gif",
    url: "https://www.curseforge.com/minecraft/mc-mods/replication",
    categories: ["Technology"]
  },
  {
    name: "Transfer Labels",
    description: "Place labels between blocks to transfer items & fluids.",
    downloads: 1000000,
    image: "https://media.forgecdn.net/avatars/thumbnails/1277/534/256/256/638831015495667324.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/transfer-labels",
    categories: ["Storage", "Automation", "Technology"]
  },
  {
    name: "Salem",
    description: "Fight raids to defend yourself and obtain trinkets.",
    downloads: 196300,
    image: "https://media.forgecdn.net/avatars/thumbnails/450/436/256/256/637711372523134624.jpeg",
    url: "https://www.curseforge.com/minecraft/mc-mods/salem",
    categories: ["Magic"]
  },
  {
    name: "EDX Multipart",
    description: "Adding multipart capabilities to blocks.",
    downloads: 88500,
    image: "https://media.forgecdn.net/avatars/thumbnails/154/196/256/256/636624108852443624.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/edx-multipart",
    categories: ["Cosmetic"]
  },
  {
    name: "Inverted Bed",
    description: "For your night needs.",
    downloads: 37400,
    image: "https://media.forgecdn.net/avatars/thumbnails/179/512/256/256/636786786107455764.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/invertedbed",
    categories: ["Miscellaneous"]
  },
  {
    name: "WorldGen Indicators",
    description: "Add worldgen depending of another worldgen, like ore samples (Using craftweaker).",
    downloads: 36000,
    image: "https://media.forgecdn.net/avatars/thumbnails/171/151/256/256/636727105621055703.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/worldgen-indicators",
    categories: ["CraftTweaker"]
  },
  {
    name: "Bongo In the 90s",
    description: "Makes cats play the bongo.",
    downloads: 12000,
    image: "https://media.forgecdn.net/avatars/thumbnails/178/794/256/256/636780976601646393.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/bongo-in-the-90s",
    categories: ["Miscellaneous"]
  },
  {
    name: "Smelly",
    description: "Make mobs steal items from your inventory like food!",
    downloads: 5500,
    image: "https://media.forgecdn.net/avatars/thumbnails/145/701/256/256/636564543751347381.jpeg",
    url: "https://www.curseforge.com/minecraft/mc-mods/smelly",
    categories: ["Miscellaneous"]
  },
  {
    name: "RaidMeter",
    description: "Displaying your progress with style.",
    downloads: 5300,
    image: "https://media.forgecdn.net/avatars/thumbnails/410/799/256/256/637628146521396839.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/raidmeter",
    categories: ["Twitch Integration"]
  },
  {
    name: "Project 42",
    description: "A simple guide API with a ton of customization without all the GUI hassle.",
    downloads: 3000,
    image: "https://media.forgecdn.net/avatars/thumbnails/177/481/256/256/636771152008244972.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/project-42",
    categories: ["API"]
  },
  {
    name: "OO EE A E A",
    description: "Cats will now spin like the viral tiktok video.",
    downloads: 2300,
    image: "https://media.forgecdn.net/avatars/thumbnails/1128/316/256/256/638686521180185704_animated.gif",
    url: "https://www.curseforge.com/minecraft/mc-mods/oo-ee-a-e-a",
    categories: ["Cosmetic"]
  },
  {
    name: "Materialized",
    description: "Materialized allows you to add any Material to Minecraft just once. Modders and Users can do it but in different ways.",
    downloads: 979,
    image: "https://media.forgecdn.net/avatars/thumbnails/102/980/256/256/636334635141772056.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/materialized",
    categories: ["API", "Library"]
  },
  {
    name: "Modder's Piggy Bank",
    description: "Know who made your favorite mods!",
    downloads: 242,
    image: "https://media.forgecdn.net/avatars/thumbnails/1164/969/256/256/638734852344654813.png",
    url: "https://www.curseforge.com/minecraft/mc-mods/modders-piggy-bank",
    categories: ["Utility & QoL", "Cosmetic"]
  }
];
// Calculate total downloads
const totalDownloads = mods.reduce((sum, mod) => sum + mod.downloads, 0);

export default function Home() {
  return (
    <Box minH="100vh" bgGradient="linear(120deg, #1a1b1e 0%, #23243a 100%)">
      <Head>
        <title>Buuz135's Minecraft Mods</title>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<meta name="apple-mobile-web-app-title" content="Buuz135" />
<link rel="manifest" href="/site.webmanifest" />
      </Head>

      {/* Hero Section */}
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
                {totalDownloads.toLocaleString()} total downloads
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