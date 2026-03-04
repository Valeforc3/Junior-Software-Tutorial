/* 
This is the Next.js configuration file, it allows you to customize your Next.js application. 
In this configuration, we are enabling the experimental app directory feature, which is a new way to organize your application in Next.js 13 and later versions. 
The app directory provides a more flexible and powerful way to structure your application compared to the traditional pages directory. 
By setting `appDir: true`, we are opting into this new feature, which allows us to take advantage of the latest improvements in Next.js.

This configuration is essential for using the app router and other features that come with the app directory. 
*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,  // Enables app router (though it's default in Next.js 13+)
  },
};

module.exports = nextConfig;