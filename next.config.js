module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['assets.royalcap-int.com'],
  },
  i18n: {
    locales: ['en', 'es', 'ru'],
    defaultLocale: 'en',
    domains: [
      {
        domain: 'by.royalcap-int.com',
        defaultLocale: 'ru',
        http: true,
      },
      {
        domain: 'royalcap-int.by',
        defaultLocale: 'ru',
        http: true,
      },
      {
        domain: 'www.royalcap-int.by',
        defaultLocale: 'ru',
        http: true,
      },
    ],
  },
}
