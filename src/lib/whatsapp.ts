import { siteConfig } from '../siteConfig';

export const whatsappLink = (message: string) =>
  `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(message)}`;

export const openWhatsApp = (message: string) => {
  window.location.assign(whatsappLink(message));
};
