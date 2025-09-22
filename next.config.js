// next.config.js
const isExport = process.env.NEXT_EXPORT === 'true';

module.exports = {
  // Necesario para export estático cuando usas next/image en Next 12
  images: { unoptimized: true },

  // Desactiva i18n SOLO durante el export
  ...(isExport ? {} : {
    i18n: {
      locales: ['en', 'es'],
      defaultLocale: 'es',
      localeDetection: false,
    }
  })
};
