import type { ProjectDetails } from '@/types/Projects';


export const projects: Array<ProjectDetails> = [
    {
        name: 'Portfoliio',
        description: 'This is my portfolio and the website you are currently on.',
        status: 'In progress',
        image: '/portfolio.png',
        links: {
            code: 'https://github.com/mBrossois/portfolio-bento'
        },
        tags: [
            'html', 'css', 'ts', 'vue', 'vite'
        ],
        tagColor: 'white'
    },
    {
        name: 'Wedding website',
        description: 'The website for our wedding, for getting general info, setting availability, booking a room and an admin page with insights.',
        status: 'Done',
        image: '/wedding.png',
        links: {
            code: 'https://github.com/mBrossois/wedding',
            website: 'https://wedding.deneutbrossois.com/'
        },
        tags: ['html', 'css', 'ts', 'vue', 'nuxt', 'vite', 'supabase'],
        tagColor: 'black'
    },
    {
        name: 'Nuxt mocking module',
        description: 'A nuxt module used for mocking api requests, which can be implemented as a standalone application or in an existing one.',
        status: 'Done',
        image: '/mocking-module.png',
        links: {
            code: 'https://github.com/mBrossois/nuxt-mocking-module',
            website: 'https://www.npmjs.com/package/nuxt-mocking-module'
        },
        tags: ['html', 'css', 'ts', 'vue', 'nuxt', 'nuxt module', 'vite'],
        tagColor: 'black'
    }
]