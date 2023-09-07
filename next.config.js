const { withAxiom } = require('next-axiom');

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        serverComponentsExternalPackages: ["mysql2"],
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            }
        ],
    },
}

module.exports = withAxiom(nextConfig)
