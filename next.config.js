/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: "mongodb+srv://Saint-Lieu:Nokia4849@cluster0.exzjzxx.mongodb.net/?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
