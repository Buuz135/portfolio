const API_URL = 'https://api.curseforge.com/v1/mods/search'
const GAME_ID = 432
const MOD_CLASS_ID = 6
const AUTHOR_ID = 9564587
const PAGE_SIZE = 50
const REQUEST_TIMEOUT = 15000

async function getPage(index, apiKey) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT)
  const query = new URLSearchParams({
    gameId: String(GAME_ID),
    classId: String(MOD_CLASS_ID),
    authorId: String(AUTHOR_ID),
    pageSize: String(PAGE_SIZE),
    index: String(index),
    sortField: '6',
    sortOrder: 'desc'
  })

  try {
    const response = await fetch(`${API_URL}?${query}`, {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
        'x-api-key': apiKey
      },
      signal: controller.signal
    })

    if (!response.ok) {
      throw new Error(`CurseForge API request failed with ${response.status}`)
    }

    return response.json()
  } finally {
    clearTimeout(timeout)
  }
}

function normalizeProject(project) {
  return {
    id: project.id,
    name: project.name,
    description: project.summary || '',
    downloads: project.downloadCount || 0,
    image: project.logo?.thumbnailUrl || project.logo?.url || '',
    url: project.links?.websiteUrl || `https://www.curseforge.com/projects/${project.id}`,
    categories: project.categories?.map(category => category.name) || []
  }
}

export async function getCurseForgeProjects() {
  const apiKey = (process.env.CURSEFORGE_API_KEY || '')
    .trim()
    .replace(/^["']|["']$/g, '')
    .replace(/\\/g, '')

  if (!apiKey) {
    throw new Error('CURSEFORGE_API_KEY is not configured')
  }

  const firstPage = await getPage(0, apiKey)
  const projects = [...firstPage.data]
  const totalCount = firstPage.pagination?.totalCount || projects.length

  for (let index = PAGE_SIZE; index < totalCount; index += PAGE_SIZE) {
    const page = await getPage(index, apiKey)
    projects.push(...page.data)
  }

  return projects
    .map(normalizeProject)
    .sort((left, right) => right.downloads - left.downloads)
}
