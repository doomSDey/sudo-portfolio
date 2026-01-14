import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/lib/config';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: 'Sudipta Dey | Founding Engineer',
  description: 'Founding Engineer scaling products from zero to millions. Built platforms processing 100M+ events/year. Scaled apps to 100K+ downloads across 4 countries.',
  keywords: ['Founding Engineer', 'Full Stack Developer', 'React', 'Next.js', 'FastAPI', 'Mobile Development', 'Flutter', 'Startup Engineer', 'IIT Kanpur', 'Technical Consultant'],
  authors: [{ name: 'Sudipta Dey', url: SITE_CONFIG.url }],
  creator: 'Sudipta Dey',
  openGraph: {
    title: 'Sudipta Dey | Founding Engineer',
    description: 'Founding Engineer scaling products from zero to millions.',
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: 'Sudipta Dey Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sudipta Dey | Founding Engineer',
    description: 'Founding Engineer scaling products from zero to millions.',
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
      email: 'dey.sudipta@outlook.in',
      jobTitle: 'Founding Engineer',
      worksFor: {
        '@type': 'Organization',
        name: 'Transpacks Technologies',
        description: 'IIT Kanpur incubated startup',
      },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'SMIT',
      },
      knowsAbout: [
        'Python', 'Kotlin', 'TypeScript', 'FastAPI', 'Flutter',
        'React', 'Next.js', 'GCP', 'AWS', 'System Design',
        'Mobile Development', 'Machine Learning', 'Computer Vision'
      ],
      sameAs: [
        'https://www.linkedin.com/in/sudipta-dey/',
        'https://x.com/Doom_S_Dey',
        'https://github.com/doomSDey',
        'https://medium.com/@sdptd20'
      ],
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
      name: 'Sudipta Dey | Founding Engineer',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable content" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
