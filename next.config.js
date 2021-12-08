module.exports = {
  reactStrictMode: false,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
    domains: [
      {
        domain: 'royalcap-int.by',
        defaultLocale: 'ru',
        locales: ['ru'],
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
