/** @type {import('next').NextConfig} */

const nextConfig  = {
    async redirects() {
        return[
            {
                source: '/',
                destination: '/employee/list',
                permanent: true
            }
        ]
    },
};

export default nextConfig;
