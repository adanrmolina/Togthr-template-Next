// next.config.js
const isStatic = process.env.NEXT_EXPORT === 'true'; // usaremos esto en build y export

module.exports = {
  // Para que next/image funcione en export estático (Next 12)
  images: { unoptimized: true },

  // Si NO estamos haciendo build/export estático, entonces habilita i18n
  ...(isStatic ? {} : {
    i18n: {
      locales: ['en', 'es'],
      defaultLocale: 'es',
      localeDetection: false,
    }
  })
};
