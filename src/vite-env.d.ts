/// <reference types="vite/client" />


declare global {
    interface ImportMetaEnv {
        readonly VITE_RECIPE_API_KEY: string;
    }
}

// 수정못하도록
interface ImportMetaEnv {
    readonly env: ImportMetaEnv;
}
