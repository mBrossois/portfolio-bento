export type ProjectLinks = {
    code?: string
    website?: string
}

export type ProjectDetails = {
    name: string,
    description: string,
    status: 'In progress' | 'Done',
    image: string,
    links: ProjectLinks
    tags: Array<ProjectTags>
}

export type ProjectsOverview = {
    projects: Array<ProjectDetails>
}

export type ProjectTags = 
    'vue' | 'nuxt' | 'ts' | 'js' | 
    'vite' | 'supabase' | 'nuxt module' | 
    'html' | 'css'