/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MYSQL_HOST: "127.0.0.1",
    HOST: "http://localhost:3000",
    MYSQL_PORT: "3306",
    MYSQL_DATABASE: "bdkdrell_test",
    MYSQL_USER: "bdkdrell_bdkdrell",
    MYSQL_PASSWORD: "QWERTasdfg12345!",
  },
};

module.exports = nextConfig;
