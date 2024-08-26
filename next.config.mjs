/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        POSTGRES_URL: process.env.POSTGRES_URL,
    },
};

export default nextConfig;