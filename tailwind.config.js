/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            primary: {
                peanut: '#FCF7E5',
                cheese: '#F7C544',
                chocolate: '#2A1208',
            },
            font: '#0F0F0F',
            error: '#EC0707',
            access: '#28D464',
            white: '#FFFFFF',
            black: '#0F0F0F',
            gray: {
                300: '#D3D3D3',
                500: '#ACACAC',
            },
        },
        fontFamily: {
            sans: ['SOYOMapleBoldTTF', 'sans-serif'],
        },
        fontSize: {
            extraSmall: '10px',
            small: '12px',
            medium: '14px',
            large: '18px',
            extraLarge: '24px',
            superLarge: '28px',
        },
        fontWeight: {
            light: 300,
            regular: 500,
            bold: 700,
        },
        extend: {
            boxShadow: {
                container: '-5px -5px 10px #fff, 5px 5px 10px #C2B47F',
                drop: '-5px -5px 10px #fff, 5px 5px 8px #C2B47F',
                inner: 'inset 5px 5px 10px #C2B47F, inset -5px -5px 10px #fff',
                dropPurple: '-5px -5px 10px #6565F4, 5px 5px 8px #2F2FC5',
                innerPurple: 'inset 5px 5px 10px #2F2FC5, inset -5px -5px 10px #6565F4',
            },
        },
    },
    plugins: [],
};
