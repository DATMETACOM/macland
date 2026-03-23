export const publicContact = {
  phones: [
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
  address: 'LTA-505 Đường Tương Lai, Vinhomes Royal Vũ Yên, Hải Phòng',
} as const

export const primaryPhone = publicContact.phones[0]
