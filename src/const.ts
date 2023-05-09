export enum StorageKey {
    token = 'token',
}

export enum Routes {
    pageNotFound = 'pageNotFound',
    default = 'default',
    login = 'login',
}

// export const isProd = process.env.NODE_ENV === 'production'
export const isProd = import.meta.env.MODE === 'production'
export const isDev = import.meta.env.MODE === 'development'
export const isStaging = import.meta.env.MODE === 'staging'
