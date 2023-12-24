/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    images: {
      loader: 'custom',
      loaderFile: '@/app/libs/imageLoader',
    },
  
  },

 
}

module.exports = nextConfig




const withVideos = require('next-videos')

module.exports = withVideos()