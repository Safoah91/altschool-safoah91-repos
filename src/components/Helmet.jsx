import React from 'react'
import Head from 'react-helmet'

const DOMAIN = 'https://safoah91.com'
const MAIN_KEYWORDS = 'git, github, remote repository, repositories, router, routes, error boundary, 400, page not found'

const DEFAULT_IMAGE_CARD = `${DOMAIN}/avatar.png`
const DEFAULT_TITLE = 'Safoah91 Repos'
const DEFAULT_DESC = 'This website is to display safoah91 github repositories from github api'

const FAVICON_SOURCE = `${DOMAIN}/favicon.ico`

const POSTFIX_TITLE = `/${DOMAIN}`

const Helmet = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  link,
  keywords = '',
  imageCard = DEFAULT_IMAGE_CARD,
  largeTwitterCard,
  addPostfixTitle,
  noIndex,
  children
}) => {

  let metaTitle

  if (addPostfixTitle) {
    metaTitle = title + POSTFIX_TITLE
  } else {
    metaTitle = title
  }

  const metaDesc = description
  const metaLink = DOMAIN + link


  const metaKeywords = keywords.length > 0 ? MAIN_KEYWORDS + ', ' + keywords : MAIN_KEYWORDS

  let metaImageCard

  if (imageCard.startWith('https') || imageCard.startWith('http')) {
    metaImageCard = imageCard
  } else {
    metaImageCard = DOMAIN + imageCard
  }

  const metaRobots = noIndex ? 'noindex, nofollow' : 'index, follow'

  const twitterCardType = largeTwitterCard ? 'summary_large_image' : 'summary'


  return (
    <Head>
      <html lang='en' />
      <title>{metaTitle}</title>
      <meta name='description' content={metaDesc} />
      <meta name='keywords' content={metaKeywords} />
      <meta name='robots' content={metaRobots} />
      <link rel="canonical" href={metaLink} />
      <meta rel='icon' content={FAVICON_SOURCE} />

      <meta property='og:url' title={metaLink} />
      <meta property='og:title' title={metaTitle} />
      <meta property='og:description' title={metaDesc} />
      <meta property='og:type' title='website' />
      <meta property='og:image' title={metaImageCard} />


      <meta property='twitter:site' title='@stacylamptey' />
      <meta property='twitter:creator' title='@stacylamptey' />
      <meta property='twitter:title' title={metaTitle} />
      <meta property='twitter:description' title={metaDesc} />
      <meta property='twitter:card' title={twitterCardType} />
      <meta property='twitter:image' title={metaImageCard} />

      <meta name='referrer' content='origin-when-crossorigin' />
    </Head>

  )
}

export default Helmet