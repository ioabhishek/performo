/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
   webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, './'),
      };
  
      return config;
   },
   images: {
      domains: ["img.jagranjosh.com", "images.news18.com", "i.gadgets360cdn.com", "c.ndtvimg.com", "www.livemint.com", "i.ndtvimg.com"],
   },
}

module.exports = nextConfig
