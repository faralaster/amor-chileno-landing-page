/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',            // gera site estático em /out
  images: { unoptimized: true } // evita erro do next/image no export
};
module.exports = nextConfig;