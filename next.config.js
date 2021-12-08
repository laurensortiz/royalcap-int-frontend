module.exports = {
  reactStrictMode: false,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
    domains: [
      {
        domain: 'royalcap-int.by',
        locales: ['ru'],
        defaultLocale: 'ru',
        http: true,
      },
    ],
  },
}
