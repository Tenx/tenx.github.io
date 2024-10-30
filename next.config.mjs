/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/tenx.github.io',
    assetPrefix: '/tenx.github.io/',
    distDir: 'docs',
    optimizeFonts: false,
};

export default nextConfig;
