module.exports = {
  reactStrictMode: false,
  images: {
    domains: ['assets.royalcap-int.com'],
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    domains: [
      // {
      //   domain: 'by.royalcap-int.com',
      //   defaultLocale: 'ru',
      //   http: true,
      // },
      // {
      //   domain: 'royalcap-int.by',
      //   defaultLocale: 'ru',
      //   http: true,
      // },
      // {
      //   domain: 'www.royalcap-int.by',
      //   defaultLocale: 'ru',
      //   http: true,
      // },
    ],
  },
  async redirects() {
    return [
      {
        source: '/es/login',
        permanent: false,
        destination: '/my-royal',
      },
      {
        source: '/es/register',
        permanent: false,
        destination: '/my-royal',
      },
      {
        source: '/en/register',
        permanent: false,
        destination: '/my-royal',
      },
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'my.royalcap-int.com',
          },
        ],
        permanent: false,
        destination: '/my-royal',
      },
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'me.royalcap-int.com',
          },
        ],
        permanent: false,
        destination: '/my-royal',
      },
      {
        source: '/en/login',
        has: [
          {
            type: 'host',
            value: 'my.royalcap-int.com',
          },
        ],
        permanent: false,
        destination: '/my-royal',
      },
    ]
  },
  rewrites: () => [{ source: '/System/Payments/Return/Monetix', destination: '/api/monetix' }],
}
