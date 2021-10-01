module.exports = {
  title: 'Hub USPInovação',
  description: 'Documento com a arquitetura da plataforma',
  base: '/documentation/',
  theme: 'default-prefers-color-scheme',
  head: [
    ['link', { rel: "icon", href: "/favicon.ico" }],
  ],
  plugins: [
    [
      '@vuepress/last-updated',
      {
        dateOptions:{
          hour12: false,
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }
      }
    ]
  ],
  themeConfig: {
    overrideTheme: 'dark',
    logo: '/hub_logo.svg',
    searchPlaceholder: 'Search...',
    nav: [
      { text: 'Front End', link: '/frontend/'},
      { text: 'Back End', link: '/backend/'},
      { text: 'Deployment', link: '/deployment/'}
    ]
  }
}