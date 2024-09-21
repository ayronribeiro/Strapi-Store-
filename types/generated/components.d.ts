import type { Schema, Attribute } from '@strapi/strapi';

export interface NavLinksNavLinks extends Schema.Component {
  collectionName: 'components_nav_links_nav_links';
  info: {
    displayName: 'navLinks';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
  };
}

export interface HeroSectionHeroSection extends Schema.Component {
  collectionName: 'components_hero_section_hero_sections';
  info: {
    displayName: 'hero section';
    description: '';
  };
  attributes: {
    ordemDaImagem: Attribute.String;
    imagem: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'nav-links.nav-links': NavLinksNavLinks;
      'hero-section.hero-section': HeroSectionHeroSection;
    }
  }
}
