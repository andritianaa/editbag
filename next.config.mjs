/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'uxlt1rgsyw87msad.public.blob.vercel-storage.com',
                port: '',
                pathname: '/**/**',
            },
        ],
    },
};

export default nextConfig;
