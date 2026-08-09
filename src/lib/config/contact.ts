export const publicContact = {
  phones: [
    {
      raw: '+84936834444',
      href: 'tel:+84936834444',
      display: '+84 936 834 444',
    },
  ],
  email: 'info@haiphongindustrialhub.vn',
  emailHref: 'mailto:info@haiphongindustrialhub.vn',
  address: 'TLA-505 Đường Tương Lai, Vinhomes Royal Vũ Yên, Hải Phòng',
} as const

export const primaryPhone = publicContact.phones[0]

export const primaryConsultant = {
  name: 'Đoàn Đình Vượng',
  role: 'Tư vấn khu công nghiệp Hải Phòng',
  image: '/images/team/doan-dinh-vuong.png',
} as const
