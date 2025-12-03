import type { ProjectDetails } from '@/types/Projects';


export const projects: Array<ProjectDetails> = [
    {
        name: 'Portfolio',
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
    },
    {
        name: 'Birds on mousemove',
        description: 'A simple JS application that will draw flying birds on the screen when you move your mouse.',
        status: 'Done',
        image: '/bird.png',
        links: {
            code: 'https://github.com/mBrossois/birds-on-mouse',
            website: 'https://layton-bday-puzzle.netlify.app/'
        },
        tags: ['html', 'css', 'js'],
        tagColor: 'white'
    },
        {
        name: 'Airbnb',
        description: 'Info about our airbnb, not active anymore. It has general info, 3d pictures of the airbnb & a map with interesting places.',
        status: 'Done',
        image: '/airbnb.png',
        links: {
            code: 'https://github.com/mBrossois/airbnb-travel-nest',
            website: 'https://travel-nest-lyon.netlify.app/'
        },
        tags: ['html', 'css', 'js', 'vite'],
        tagColor: 'black'
    }
]