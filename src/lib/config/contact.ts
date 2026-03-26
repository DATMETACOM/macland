export const publicContact = {
  phones: [
    {
      raw: '+84856068856',
      href: 'tel:+84856068856',
      display: '+84 856 068 856',
    },
    {
      raw: '+84936834444',
      href: 'tel:+84936834444',
      display: '+84 936 834 444',
    },
    {
      raw: '+84936762386',
      href: 'tel:+84936762386',
      display: '+84 936 762 386',
    },
  ],
  email: 'info@macland.vn',
  emailHref: 'mailto:info@macland.vn',
  address: 'TLA-505 Đường Tương Lai, Vinhomes Royal Vũ Yên, Hải Phòng',
} as const

export const primaryPhone = publicContact.phones[0]
