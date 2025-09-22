// next.config.js
const isStatic = process.env.NEXT_EXPORT === 'true';

module.exports = {
  images: { unoptimized: true },
  ...(isStatic ? {} : {
    i18n: {
      locales: ['en', 'es'],
      defaultLocale: 'es',
      localeDetection: false,
    }
  })
};
