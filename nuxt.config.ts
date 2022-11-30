export default defineNuxtConfig({
    app : {
        head : {
            charset : 'utf-8',
            viewport : 'width=device-width, initial-scale=1',
            title : 'Caneara',
            link : [
                { rel : 'icon', type : 'image/png', href : '/images/logo.png' },
                { rel : 'stylesheet', href : 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css' },
            ],
            script : [
                { src: 'https://cdn.jsdelivr.net/npm/crypto-js@4.1.1/crypto-js.js' },
            ],
            meta : [

                // General
                { name : 'description', content : 'A software development company.' },

                // Open Graph
                { property : 'og:title',       content: 'Caneara' },
                { property : 'og:description', content: 'A software development company.' },
                { property : 'og:image',       content: 'https://caneara.com/images/card.png' },

                // Twitter
                { name : 'twitter:card',    content : 'summary_large_image' },
                { name : 'twitter:creator', content : '@mattkingshott' },
                { name : 'twitter:site',    content : '@mattkingshott' },

            ],
        },
    },
    css : [
        '~/assets/css/app.css',
    ],
    postcss : {
        plugins : {
            tailwindcss : {},
            autoprefixer : {},
        },
    },
    modules: [
        '@nuxt/content',
    ],
    content : {
        highlight : {
            theme : 'github-light',
            preload: ['diff', 'json', 'js', 'ts', 'css', 'shell', 'html', 'md', 'yaml', 'php'],
        }
    }
})