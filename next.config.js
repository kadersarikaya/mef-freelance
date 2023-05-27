/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    ...nextConfig,
    images: {
        domains: ['localhost', 'res.cloudinary.com', 'images.unsplash.com',
    'github.com'],
    },
}
