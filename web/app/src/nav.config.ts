import { Nav } from "./models";

export const NAV_CONFIG: Nav[] = [
    {
      path: '/',
      nav_title: 'Home',
      nav_id: 'home-nav',
      page_title: 'title goes here',
      page_description:
        'description goes here',
      menu: true,
      data: [
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          url: 'url goes here',
          logo: 'logo url goes here',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          image: [
            'img url goes here',
            'img url goes here',
            'img url goes here',
          ],
          name: 'business name goes here',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'street address goes here',
            addressLocality: 'city goes here',
            addressRegion: 'state abbr goes here',
            postalCode: 'postal code goes here',
            addressCountry: 'US',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 'lat as number goes here',
            longitude: 'long as number goes here',
          },
          url: 'url goes here',
          telephone: '+18000000000',
          priceRange: '$',
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '08:30',
              closes: '17:30',
            },
          ],
        },
      ],
      meta: [
        {
          property: 'og:url',
          content: 'url goes here',
        },
        {
          property: 'og:image',
          content: 'url goes here',
        },
        {
          property: 'og:image:secure_url',
          content: 'url goes here',
        },
        {
          property: 'og:image:width',
          content: '1024',
        },
        {
          property: 'og:image:height',
          content: '1024',
        },
        {
          property: 'og:image:alt',
          content: 'alt goes here',
        },
        {
          property: 'twitter:image',
          content: 'url goes here',
        },
        {
          property: 'twitter:image:alt',
          content: 'alt goes here',
        },
        {
          property: 'twitter:card',
          content: 'summary',
        },
      ],
    },
    {
      path: '/about',
      nav_title: 'About',
      nav_id: 'about-nav',
      page_title: 'title goes here',
      page_description:
        'description goes here',
      menu: true,
      data: [
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          url: 'url goes here',
          logo: 'logo url goes here',
        },
      ],
      meta: [
        {
          property: 'og:url',
          content: 'url goes here',
        },
        {
          property: 'og:image',
          content: 'url goes here',
        },
        {
          property: 'og:image:secure_url',
          content: 'url goes here',
        },
        {
          property: 'og:image:width',
          content: '1024',
        },
        {
          property: 'og:image:height',
          content: '1024',
        },
        {
          property: 'og:image:alt',
          content: 'alt goes here',
        },
        {
          property: 'twitter:image',
          content: 'url goes here',
        },
        {
          property: 'twitter:image:alt',
          content: 'alt goes here',
        },
        {
          property: 'twitter:card',
          content: 'summary',
        },
      ],
    },
    {
      path: '/contact',
      nav_title: 'Contact',
      nav_id: 'about-nav',
      page_title: 'title goes here',
      page_description:
        'description goes here',
      menu: true,
      data: [
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          url: 'url goes here',
          logo: 'logo url goes here',
        },
      ],
      meta: [
        {
          property: 'og:url',
          content: 'url goes here',
        },
        {
          property: 'og:image',
          content: 'url goes here',
        },
        {
          property: 'og:image:secure_url',
          content: 'url goes here',
        },
        {
          property: 'og:image:width',
          content: '1024',
        },
        {
          property: 'og:image:height',
          content: '1024',
        },
        {
          property: 'og:image:alt',
          content: 'alt goes here',
        },
        {
          property: 'twitter:image',
          content: 'url goes here',
        },
        {
          property: 'twitter:image:alt',
          content: 'alt goes here',
        },
        {
          property: 'twitter:card',
          content: 'summary',
        },
      ],
    },
]