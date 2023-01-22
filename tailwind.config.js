/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{jsx,tsx}', './components/**/*.{jsx,tsx}'],
    theme: {
        screens: {
            full: {
                max: '2450px'
            },
            hd: {
                max: '1920px'
            },
            wide: {
                max: '1380px'
            },
            desktop: {
                max: '1020px'
            },
            tablet: {
                max: '768px'
            },
            phablet: {
                max: '640px'
            },
            mobile: {
                max: '480px'
            },
            menu: {
                max: '1310px'
            }
        },
        colors: {
            current: 'currentColor',
            transparent: 'transparent',
            white: '#ffffff',
            main: '#303030',
            primary: '#369FFF',
            grey: {
                200: '#F4F4F4',
                600: '#BDBDBD'
            }
        },
        fontFamily: {
            main: ['Mark Pro', 'sans-serif']
        },
        fontSize: {
            xxs: '1.2rem',
            xs: '1.4rem',
            sm: '1.6rem',
            md: '1.8rem',
            xl: '2.4rem',
            '2xl': '2.8rem',
            '3xl': '3.2rem'
        },
        borderRadius: {
            none: 0,
            DEFAULT: '4px',
            md: '8px'
        },
        extend: {}
    },
    plugins: []
}
