/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // genera sitio estático al hacer "next build"
  trailingSlash: true,   // crea /ruta/index.html (recomendado en hosting estático)
};
module.exports = nextConfig;
