/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: { unoptimized: true } ,
    env: {
        baseUrl: "https://dummyjson.com"
    }
}

module.exports = nextConfig
