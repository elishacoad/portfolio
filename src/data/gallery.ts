export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface GalleryCategory {
  id: string;
  title: string;
  thumbnail: string;
  images: GalleryImage[];
}

export const galleryCategories: GalleryCategory[] = [
  {
    id: 'ui',
    title: 'User Interfaces',
    thumbnail: '/images/playground/thumbnails/UI-Thumbnail.webp',
    images: [
      {
        id: 'metatrade',
        src: '/images/playground/ui/Metatrade.webp',
        alt: 'Metatrade UI Design'
      },
      {
        id: 'gruvy',
        src: '/images/playground/ui/Gruvy.webp',
        alt: 'Gruvy UI Design',
      },
      {
        id: 'gog',
        src: '/images/playground/ui/Gog.webp',
        alt: 'GOG mobile app concept',
        caption: 'GOG, browse your game collection from your phone (concept)',
      },
      {
        id: 'showly',
        src: '/images/playground/ui/Showly.webp',
        alt: 'Showly UI Design',
      },
      {
        id: 'polymorphic',
        src: '/images/playground/ui/Polymorphic.webp',
        alt: 'Polymorphic UI Design',
      },
      {
        id: 'roxy',
        src: '/images/playground/ui/Roxy.webp',
        alt: 'Roxy UI Design',
      },
      {
        id: 'exhibition-1',
        src: '/images/playground/ui/Exhibition-1.webp',
        alt: 'Senior Exhibition',
        caption: 'Senior Exhibition',
      },
      {
        id: 'exhibition-2',
        src: '/images/playground/ui/Exhibition-2.webp',
        alt: 'Senior Exhibition',
        caption: 'Senior Exhibition',
      },
      {
        id: 'exhibition-3',
        src: '/images/playground/ui/Exhibition-3.webp',
        alt: 'Senior Exhibition',
        caption: 'Senior Exhibition',
      }
    ]
  },
  {
    id: 'logos',
    title: 'Logos',
    thumbnail: '/images/playground/thumbnails/Logos-Thumbnail.webp',
    images: [
      {
        id: 'building-bridges',
        src: '/images/playground/logos/Building-Bridges.webp',
        alt: 'Building Bridges Logo',
      },
      {
        id: 'lore',
        src: '/images/playground/logos/Lore.webp',
        alt: 'Lore Logo',
      },
      {
        id: 'mindflow',
        src: '/images/playground/logos/Mindflow.webp',
        alt: 'Mindflow Logo',
      },
      {
        id: 'continuous-composites',
        src: '/images/playground/logos/Continuous-Composites.webp',
        alt: 'Continuous Composites Logo',
      },
      {
        id: 'midas-logo',
        src: '/images/playground/logos/Midas-Logo.webp',
        alt: 'Midas Logo',
      },
      {
        id: 'tedx',
        src: '/images/playground/logos/Tedx.webp',
        alt: 'TEDx Logo',
      }
    ]
  },
  {
    id: 'illustrations',
    title: 'Illustrations',
    thumbnail: '/images/playground/thumbnails/Illustration-Thumbnail.webp',
    images: [
      {
        id: 'loop',
        src: '/images/playground/illustrations/Loop.webp',
        alt: 'Loop',
      },
      {
        id: 'coda-design-1',
        src: '/images/playground/illustrations/CODA-Design-1.webp',
        alt: 'CODA Design 1',
      },
      {
        id: 'burnt-toast-1',
        src: '/images/playground/illustrations/Burnt-Toast-1.webp',
        alt: 'Burnt Toast 1',
      },
      {
        id: 'profile-pic',
        src: '/images/playground/illustrations/profile-pic.webp',
        alt: 'Profile Picture',
      },
      {
        id: 'midas-1',
        src: '/images/playground/illustrations/Midas-1.webp',
        alt: 'Midas 1',
      },
      {
        id: 'midas-2',
        src: '/images/playground/illustrations/Midas-2.webp',
        alt: 'Midas 2',
      },
      {
        id: 'midas-3',
        src: '/images/playground/illustrations/Midas-3.webp',
        alt: 'Midas 3',
      },
    ]
  },
  {
    id: '3d-design',
    title: '3D Design',
    thumbnail: '/images/playground/thumbnails/3D-Thumbnail.webp',
    images: [
      {
        id: 'composite2',
        src: '/images/playground/illustrations/Composite2.webp',
        alt: 'Composite 2',
      },
      {
        id: 'lab',
        src: '/images/playground/3d/Lab.webp',
        alt: 'Lab',
      },
      {
        id: 'museum',
        src: '/images/playground/3d/Museum.webp',
        alt: 'Museum',
      },
      {
        id: 'mermaid',
        src: '/images/playground/3d/Mermaid.webp',
        alt: 'Mermaid',
      },
      {
        id: 'futurefellow-1',
        src: '/images/playground/3d/FutureFellow-1.webp',
        alt: 'Future Fellow 1',
      },
      {
        id: 'futurefellow-2',
        src: '/images/playground/3d/FutureFellow-2.webp',
        alt: 'Future Fellow 2',
      },
      {
        id: 'continuouos-1',
        src: '/images/playground/3d/Continuouos-1.webp',
        alt: 'Continuouos 1',
      },
      {
        id: 'continuouos-2',
        src: '/images/playground/3d/Continuouos-2.webp',
        alt: 'Continuouos 2',
      },
      {
        id: 'continuouos-3',
        src: '/images/playground/3d/Continuouos-3.webp',
        alt: 'Continuouos 3',
      },
    ]
  }
];
