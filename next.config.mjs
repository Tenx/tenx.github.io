/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '',
    assetPrefix: '',
    distDir: 'docs',
    optimizeFonts: false,
};

export default nextConfig;
