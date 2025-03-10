import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBenefits extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefits';
  info: {
    description: '';
    displayName: 'Benefits';
  };
  attributes: {
    list: Schema.Attribute.Component<'shared.item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    list: Schema.Attribute.Component<'shared.faq-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    displayName: 'FaqItem';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_infos';
  info: {
    displayName: 'Info';
  };
  attributes: {
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SharedItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_items';
  info: {
    description: '';
    displayName: 'Item';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedMenuLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_menu_links';
  info: {
    description: '';
    displayName: 'menu_links';
    icon: 'user';
  };
  attributes: {
    extraClass: Schema.Attribute.String;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
    svg: Schema.Attribute.String;
  };
}

export interface SharedPortfolio extends Struct.ComponentSchema {
  collectionName: 'components_shared_portfolios';
  info: {
    description: '';
    displayName: 'Portfolio';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedPriceCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_price_cards';
  info: {
    displayName: 'PriceCard';
  };
  attributes: {
    deadlines: Schema.Attribute.String;
    descr: Schema.Attribute.String;
    price: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSteps extends Struct.ComponentSchema {
  collectionName: 'components_shared_steps';
  info: {
    displayName: 'Steps';
  };
  attributes: {
    list: Schema.Attribute.Component<'shared.item', true>;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.benefits': SharedBenefits;
      'shared.faq': SharedFaq;
      'shared.faq-item': SharedFaqItem;
      'shared.info': SharedInfo;
      'shared.item': SharedItem;
      'shared.menu-links': SharedMenuLinks;
      'shared.portfolio': SharedPortfolio;
      'shared.price-card': SharedPriceCard;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.steps': SharedSteps;
    }
  }
}
