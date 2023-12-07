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
      domains: ["englishtribuneimages.blob.core.windows.net","drop.ndtv.com","images.cnbctv18.com","edata.ndtv.com","img.jagranjosh.com", "images.news18.com", "i.gadgets360cdn.com", "c.ndtvimg.com", "www.livemint.com", "i.ndtvimg.com", "lh3.googleusercontent.com", "images.firstpost.com", "www.hindustantimes.com", "images.hindustantimes.com","www.tribuneindia.com"],
   },
}

module.exports = nextConfig