export const SEO_DASHBOARD = {
  TITLE: 'Global Artificial Intelligence (AI) Policy Tracker',
  DESCRIPTION: 'AI Policy Tracker is a project aimed at providing a comprehensive information resource for global AI policy initiatives.',
  KEYWORDS: 'AIPolicyTracker, AI Policy, National Artificial Intelligence, Private AI LLM, Artificial Intelligence news'
}
export const SEO_NEWS = {
  TITLE: 'Artificial Intelligence (AI) Policy Tracker',
  DESCRIPTION: 'Latest news about Artificial Intelligence (AI) Policy Tracker around the globe. Announcements and status reports of Artificial Intelligence projects, analytics, technology reviews, forecasts gathered from several sources in one place.',
  KEYWORDS: 'Artificial Intelligence news, AI Policy, central bank virtual money'
}
export const SEO_CURRENCY = {
  TITLE: 'Artificial Intelligence (AI) Policy Tracker',
  TITLE_TEMPLATE: '%s Artificial Intelligence | AIPolicyTracker',
  DESCRIPTION: '%s National Artificial Intelligence (AI Policy) information',
  KEYWORDS: ''
}
export const SEO_WHATCHLIST = {
  TITLE: 'Watchlist | AIPolicyTracker',
  DESCRIPTION: 'Watchlist with favourites Digital Currencies',
  KEYWORDS: ''
}
export const SEO_TIMELINE = {
  TITLE: 'Global Artificial Intelligence (AI) Policy Tracker Updates Timeline',
  DESCRIPTION: 'AI Policy Tracker is a project aimed at providing a comprehensive information resource for global AI policy initiatives.',
  KEYWORDS: 'AIPolicyTracker, AI Policy, National Artificial Intelligence, Private AI LLM, timeline'
}
export const PREVIEW_IMAGE = 'https://t4dnepal.org.np/wp-content/uploads/2024/07/aipolicytracker_website_banner.jpg'
export const SEO_META_TWITTER = [
  {
    vmid: 'twitter:card',
    name: 'twitter:card',
    content: 'summary'
  },
  {
    vmid: 'twitter:title',
    name: 'twitter:title',
    content: SEO_DASHBOARD.TITLE
  },
  {
    vmid: 'twitter:description',
    name: 'twitter:description',
    content: SEO_DASHBOARD.DESCRIPTION
  },
  {
    vmid: 'twitter:image',
    name: 'twitter:image',
    content: PREVIEW_IMAGE
  }
]

export const SEO_META_OG = [
  {
    vmid: 'og:title',
    name: 'og:title',
    content: SEO_DASHBOARD.TITLE
  },
  {
    vmid: 'og:site_name',
    name: 'og:site_name',
    content: SEO_DASHBOARD.TITLE
  },
  {
    vmid: 'og:type',
    name: 'og:type',
    content: 'website'
  },
  {
    vmid: 'og:description',
    name: 'og:description',
    content: SEO_DASHBOARD.DESCRIPTION
  },
  {
    vmid: 'og:image',
    name: 'og:image',
    content: PREVIEW_IMAGE
  }
]

export const REPLACE_OG_TWITTER_NEWS = [
  {
    vmid: 'twitter:title',
    property: 'twitter:title',
    content: SEO_NEWS.TITLE
  },
  {
    vmid: 'twitter:description',
    property: 'twitter:description',
    content: SEO_NEWS.DESCRIPTION
  },
  {
    vmid: 'og:title',
    property: 'og:title',
    content: SEO_NEWS.TITLE
  },
  {
    vmid: 'og:description',
    property: 'og:description',
    content: SEO_NEWS.DESCRIPTION
  }
]
