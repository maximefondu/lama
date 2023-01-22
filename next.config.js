const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true
    },
    webpack(config) {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@components': path.resolve('components'),
            '@libs': path.resolve('libs')
        }

        return config
    }
}

module.exports = nextConfig
