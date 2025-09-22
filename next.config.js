// next.config.js
const isStatic = process.env.NEXT_EXPORT === 'true'; // lo usaremos en build y export

module.exports = {
  // Para que next/image funcione en export estático (Next 12)
  images: { unoptimized: true },

  // Habilita i18n SOLO cuando NO estamos haciendo build/export estático
  ...(isStatic ? {} : {
    i18n: {
      locales: ['en', 'es'],
      defaultLocale: 'es',
      localeDetection: false,
    }
  })
};
