const isExport = process.env.NEXT_EXPORT === 'true';

const nextConfig = {
  output: 'export',          // Next 13+
  images: { unoptimized: true }, // requerido para export estático si usas next/image
  ...(isExport ? {} : {
    // Solo habilita i18n cuando NO estás haciendo export estático
    i18n: {
      locales: ['es', 'en'],
      defaultLocale: 'es',
    }
  })
};

module.exports = nextConfig;
