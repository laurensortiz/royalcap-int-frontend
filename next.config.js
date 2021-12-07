module.exports = {
  reactStrictMode: false,
  i18n: {
    locales: ['en', 'es', 'ru'],
    defaultLocale: 'es',
    domains: [
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
