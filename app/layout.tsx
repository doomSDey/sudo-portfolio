import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { SITE_CONFIG } from '@/lib/config';
import { CONTACT_INFO, SOCIAL_LINKS, TECH_STACK } from '@/lib/data';

// Optimized static fonts with preload for fast loading
const inter = localFont({
  src: [
    {
      path: '../public/fonts/Inter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const jetbrainsMono = localFont({
  src: '../public/fonts/JetBrainsMono-Variable.woff2',
  variable: '--font-mono',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: ['Staff Engineer', 'Founding Engineer', 'Applied AI', 'Backend Systems', 'LLM', 'Next.js', 'FastAPI', 'PostgreSQL', 'LiveKit'],
  authors: [{ name: 'Sudipta Dey', url: SITE_CONFIG.url }],
  creator: 'Sudipta Dey',
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: 'Sudipta Dey Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    creator: SITE_CONFIG.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

// JSON-LD Structured Data for SEO and LLMs
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_CONFIG.url}/#website`,
      url: SITE_CONFIG.url,
      name: 'Sudipta Dey Portfolio',
      description: SITE_CONFIG.description,
      inLanguage: 'en-US',
    },
    {
      '@type': 'Person',
      '@id': `${SITE_CONFIG.url}/#person`,
      name: 'Sudipta Dey',
      url: SITE_CONFIG.url,
      email: CONTACT_INFO.email,
      jobTitle: ['Staff Engineer', 'Founding Engineer'],
      worksFor: [
        { '@type': 'Organization', name: 'Methodic Labs (Deployly)' },
        { '@type': 'Organization', name: 'Checko (Transpacks Technologies Pvt Ltd)' },
      ],
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Sikkim Manipal Institute of Technology',
      },
      knowsAbout: ['Applied AI', 'Backend Systems', ...Object.values(TECH_STACK).flat()],
      sameAs: SOCIAL_LINKS.map(({ href }) => href),
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hyderabad',
        addressCountry: 'India'
      }
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_CONFIG.url}/#profilepage`,
      url: SITE_CONFIG.url,
      name: SITE_CONFIG.title,
      isPartOf: { '@id': `${SITE_CONFIG.url}/#website` },
      about: { '@id': `${SITE_CONFIG.url}/#person` },
      mainEntity: { '@id': `${SITE_CONFIG.url}/#person` },
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Preconnect to YouTube for embedded videos */}
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable content" />
        {/* Template: https://github.com/doomSDey/sudo-portfolio */}
        <meta name="template-author" content="Sudipta Dey" />
        <link rel="author" href="https://sudipta-dey.com" />
      </head>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
