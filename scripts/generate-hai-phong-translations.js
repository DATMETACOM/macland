/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs')
const path = require('path')

const root = process.cwd()
const dataPath = path.join(root, 'public', 'data.json')
const locales = ['en', 'zh', 'ko', 'ja']
const preserveManualSlugs = new Set([
  'chuyen-nhuong-khu-cong-nghiep-trang-due-hai-phong',
  'chuyen-nhuong-khu-cong-nghiep-nam-dinh-vu-khu-1-hai-phong',
  'chuyen-nhuong-khu-cong-nghiep-nam-dinh-vu-khu-2-hai-phong',
  'chuyen-nhuong-khu-cong-nghiep-vsip-hai-phong',
  'chuyen-nhuong-khu-cong-nghiep-nam-cau-kien-hai-phong',
  'chuyen-nhuong-khu-cong-nghiep-nhat-ban-hai-phong',
  'chuyen-nhuong-khu-cong-nghiep-an-duong-hai-phong',
  'chuyen-nhuong-khu-cong-nghiep-do-son-hai-phong',
  'chuyen-nhuong-deep-c-hai-phong-i-khu-cong-nghiep-dinh-vu',
  'chuyen-nhuong-khu-cong-nghiep-mp-dinh-vu-hai-phong',
  'chuyen-nhuong-khu-cong-nghiep-va-dich-vu-hang-hai-hai-phong',
  'sap-mo-ban-khu-cong-nghiep-trang-due-3-hai-phong',
  'cho-thue-10-000m2-nha-xuong-kcn-an-duong-hai-phong',
  'nha-xuong-tai-kcn-deep-c-2-201',
  'nha-xuong-kcn-deep-c-ii-001',
  'nha-xuong-tai-ccn-tan-lien-a',
  'chuyen-nhuong-1-8ha-gan-kcn-nomura-hai-phong',
  'chuyen-nhuong-du-an-2-1ha-an-lao-hai-phong',
  'chuyen-nhuong-5-1ha-kcn-deep-c3-hai-phong',
  'cho-thue-5000m2-nha-xuong-kcn-dinh-vu-hai-phong',
  'cho-thue-5000m2-nha-xuong-an-lao-hai-phong',
])
const localePaths = Object.fromEntries(
  locales.map((locale) => [locale, path.join(root, 'data', 'product-translations', `${locale}.json`)])
)

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`)
}

function normalizeText(value) {
  return (value || '').replace(/\s+/g, ' ').trim()
}

function stripDiacritics(value) {
  return normalizeText(value)
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
}

function isHaiPhongProduct(product) {
  const titleSlugSearch = [
    product.slug,
    product.title,
    product.location?.province,
    product.location?.district,
  ].join(' ')

  if (/hai phong|hải phòng/i.test(titleSlugSearch)) {
    return true
  }

  const address = normalizeText(product.location?.address)
  if (!address || address.length > 140) {
    return false
  }

  if (/cách cảng hải phòng|hai phong ~|hải phòng ~/i.test(address)) {
    return false
  }

  return /tp\.?\s*hải phòng|thành phố hải phòng|hai phong city|hải phòng\.?$/i.test(address)
}

function detectStatus(product) {
  const title = normalizeText(product.title)
  if (/^\[CHUYỂN NHƯỢNG\]/i.test(title) || /chuyển nhượng/i.test(title) || /bán gấp/i.test(title)) return 'transfer'
  if (/^\[SẮP MỞ BÁN\]/i.test(title)) return 'coming'
  if (/^cho thuê/i.test(title)) return 'lease'
  return 'general'
}

function getTypeLabel(type, locale) {
  const labels = {
    en: {
      'khu-cong-nghiep': 'Industrial Park',
      'cum-cong-nghiep': 'Industrial Cluster',
      'nha-xuong': 'Factory',
    },
    zh: {
      'khu-cong-nghiep': '工业园',
      'cum-cong-nghiep': '工业集群',
      'nha-xuong': '厂房',
    },
    ko: {
      'khu-cong-nghiep': '산업단지',
      'cum-cong-nghiep': '산업클러스터',
      'nha-xuong': '공장',
    },
    ja: {
      'khu-cong-nghiep': '工業団地',
      'cum-cong-nghiep': '工業クラスター',
      'nha-xuong': '工場',
    },
  }

  return labels[locale][type] || type
}

function extractName(product) {
  const title = normalizeText(product.title)
    .replace(/^\[(CHUYỂN NHƯỢNG|SẮP MỞ BÁN)\]\s*/i, '')
    .replace(/^Cho thuê\s*/i, '')
    .replace(/^Chuyển nhượng\s*/i, '')
    .replace(/^Cần chuyển nhượng\s*/i, '')
    .replace(/^Bán gấp\s*/i, '')
    .replace(/^Siêu phẩm\s*/i, '')
    .replace(/^Tổng quan\s*/i, '')
    .replace(/^Sở hữu\s*/i, '')

  const replacements = [
    [/^mặt bằng nhà xưởng tại\s+/i, ''],
    [/^nhà xưởng sản xuất tại\s+/i, ''],
    [/^nhà xưởng tại\s+/i, ''],
    [/^(\d+[.,]?\d*\s*(?:ha|m2|m²))\s+trong\s+/i, '$1 in '],
    [/^lô đất\s+/i, 'Land plot '],
    [/^đất\s+/i, 'Land '],
  ]

  let result = title
  for (const [pattern, replacement] of replacements) {
    result = result.replace(pattern, replacement)
  }

  return normalizeText(stripDiacritics(result))
}

function buildAssetDisplayName(product) {
  const raw = extractName(product)
  let name = raw
    .replace(/^khu cong nghiep\s+/i, '')
    .replace(/^cum cong nghiep\s+/i, '')
    .replace(/^kcn\s+/i, '')
    .replace(/^ccn\s+/i, '')
    .replace(/\bthanh pho hai phong\b/gi, '')
    .replace(/\btinh hai phong\b/gi, '')
    .replace(/\bhai phong\b/gi, '')
    .replace(/\bKhu A\b/gi, 'Zone A')
    .replace(/\bKhu B\b/gi, 'Zone B')
    .replace(/\bGiai doan\b/gi, 'Phase')
    .replace(/\s+-\s+/g, ' - ')
    .replace(/\s{2,}/g, ' ')
    .trim()

  if (!name) {
    name = raw
  }

  return name
}

function appendHaiPhong(value) {
  const text = normalizeText(value.replace(/\s*,\s*$/g, ''))
  return /hai phong/i.test(text) ? text : `${text}, Hai Phong`
}

function buildEnglishTitle(product, status) {
  const name = buildAssetDisplayName(product)
  if (status === 'lease') return appendHaiPhong(name)
  if (product.type === 'nha-xuong' && /factory|nha xuong/i.test(name)) return appendHaiPhong(name)
  if (product.type === 'khu-cong-nghiep' || product.type === 'cum-cong-nghiep') {
    return `Industrial premises at ${appendHaiPhong(`${name} ${getTypeLabel(product.type, 'en')}`)}`
  }
  if (/land|ha\b|m2\b/i.test(name)) return appendHaiPhong(name)
  return `${appendHaiPhong(name)} industrial property`
}

function buildLocalTitle(product, locale) {
  const name = buildAssetDisplayName(product)
  const locationPrefix = locale === 'zh' ? '海防 ' : locale === 'ko' ? '하이퐁 ' : locale === 'ja' ? 'ハイフォン ' : ''
  const typeLabel = getTypeLabel(product.type, locale)

  if (locale === 'zh') {
    if (product.type === 'nha-xuong') return `${locationPrefix}${name} ${typeLabel}`
    return `${locationPrefix}${name} ${typeLabel}工业场地`
  }

  if (locale === 'ko') {
    if (product.type === 'nha-xuong') return `${locationPrefix}${name} ${typeLabel}`
    return `${locationPrefix}${name} ${typeLabel} 산업용 부지`
  }

  if (locale === 'ja') {
    if (product.type === 'nha-xuong') return `${locationPrefix}${name} ${typeLabel}`
    return `${locationPrefix}${name} ${typeLabel}の産業用地`
  }

  return buildEnglishTitle(product, detectStatus(product))
}

function fallbackAddress(product) {
  return normalizeText(product.location?.address || product.location?.district || product.location?.province || 'Hai Phong City.')
}

function buildEntry(product, locale) {
  const status = detectStatus(product)
  const displayName = buildAssetDisplayName(product)
  const typeLabelEn = getTypeLabel(product.type, 'en')
  const address = fallbackAddress(product)
  const namedAssetEn = product.type === 'nha-xuong'
    ? appendHaiPhong(displayName)
    : appendHaiPhong(`${displayName} ${typeLabelEn}`)

  const descriptions = {
    en: {
      transfer: `${namedAssetEn} is a transfer listing in Hai Phong, suitable for investors seeking industrial premises, factory space or land with an existing operating context.`,
      coming: `${namedAssetEn} is an upcoming industrial listing in Hai Phong, suitable for investors preparing early land banking or expansion plans.`,
      lease: `${namedAssetEn} is a for-lease industrial asset in Hai Phong, suitable for manufacturing, storage or industrial operations depending on the property configuration.`,
      general: `${namedAssetEn} is an industrial real estate listing associated with Hai Phong, relevant for investors evaluating industrial parks, clusters, factories or land supply in the area.`,
    },
    zh: {
      transfer: `${displayName} 是海防的转让类工业项目，适合评估工业场地、厂房或土地机会的投资者。`,
      coming: `${displayName} 是海防的待推出工业项目，适合提前布局新增工业供给的投资者。`,
      lease: `${displayName} 是海防的出租类工业物业，适合制造、仓储或工业运营用户。`,
      general: `${displayName} 是与海防相关的工业地产项目，适合评估工业园、工业集群、厂房或土地机会的用户。`,
    },
    ko: {
      transfer: `${displayName} 는 하이퐁의 양도형 산업 부동산 매물로, 산업용 부지, 공장 또는 토지 기회를 검토하는 투자자에게 적합합니다.`,
      coming: `${displayName} 는 하이퐁의 출시 예정 산업 매물로, 신규 산업 공급을 선점하려는 투자자에게 적합합니다.`,
      lease: `${displayName} 는 하이퐁의 임대형 산업 자산으로, 제조, 보관 또는 산업 운영 사용자에게 적합합니다.`,
      general: `${displayName} 는 하이퐁과 연계된 산업용 부동산 매물로, 산업단지, 산업클러스터, 공장 또는 토지 공급을 검토하는 사용자에게 적합합니다.`,
    },
    ja: {
      transfer: `${displayName} はハイフォンの譲渡型産業不動産案件で、産業用地、工場、土地機会を検討する投資家に適しています。`,
      coming: `${displayName} はハイフォンの今後供給予定の産業案件で、新規供給を先行確保したい投資家に適しています。`,
      lease: `${displayName} はハイフォンの賃貸型産業資産で、製造、保管、産業運営用途に適しています。`,
      general: `${displayName} はハイフォン関連の工業不動産案件で、工業団地、工業クラスター、工場、土地供給を比較検討するユーザーに適しています。`,
    },
  }

  const bodies = {
    en: [
      'I. Overview',
      `${namedAssetEn} is positioned as a ${status === 'lease' ? 'for-lease' : status === 'transfer' ? 'transfer' : status === 'coming' ? 'pipeline' : 'general'} ${typeLabelEn.toLowerCase()} listing linked to Hai Phong. It can support industrial expansion, manufacturing setup, warehouse use or long-term land planning depending on the underlying asset.`,
      '',
      'II. Location and asset context',
      `Current reference location: ${address}.`,
      'The property is being prioritized within the Hai Phong portfolio because it matches the city’s industrial growth, logistics connectivity and investor demand profile.',
      '',
      'III. Suitable users',
      status === 'lease'
        ? 'Suitable for manufacturers, warehouse users and industrial tenants that need ready-to-occupy or near-term operating space.'
        : status === 'coming'
          ? 'Suitable for investors and industrial users planning ahead for future supply and medium-term expansion.'
          : 'Suitable for investors, manufacturers and industrial users assessing transfer, acquisition or expansion opportunities in Hai Phong.',
    ].join('\n'),
    zh: [
      '一、项目概况',
      `${displayName} 被定位为海防重点工业项目之一，适合根据具体资产形态用于制造、仓储、工业扩张或中长期土地规划。`,
      '',
      '二、区位与资产背景',
      `当前参考地址：${address}`,
      '该项目被纳入海防优先清单，主要因为其符合当地工业增长、物流连接和投资需求方向。',
      '',
      '三、适合对象',
      status === 'lease'
        ? '适合需要可快速投入使用空间的制造企业、仓储用户和工业承租方。'
        : status === 'coming'
          ? '适合提前规划未来供给和中期扩张的投资者与工业用户。'
          : '适合正在评估转让、收购或扩张机会的投资者、制造商和工业用户。',
    ].join('\n'),
    ko: [
      'I. 개요',
      `${displayName} 는 하이퐁 우선 포트폴리오 내 산업 자산으로 분류되며, 실제 자산 형태에 따라 제조, 창고, 산업 확장 또는 중장기 용지 확보에 활용될 수 있습니다.`,
      '',
      'II. 입지 및 자산 맥락',
      `현재 기준 주소: ${address}`,
      '이 자산은 하이퐁의 산업 성장, 물류 연결성과 투자 수요에 부합해 우선 관리 대상으로 분류됩니다.',
      '',
      'III. 적합 사용자',
      status === 'lease'
        ? '즉시 또는 단기 운영이 가능한 공간이 필요한 제조기업, 창고 사용자와 산업 임차인에게 적합합니다.'
        : status === 'coming'
          ? '향후 공급을 선제적으로 검토하며 중기 확장을 준비하는 투자자와 산업 사용자에게 적합합니다.'
          : '하이퐁에서 양도, 인수 또는 확장 기회를 검토하는 투자자, 제조기업 및 산업 사용자에게 적합합니다.',
    ].join('\n'),
    ja: [
      'I. 概要',
      `${displayName} はハイフォン優先ポートフォリオに含まれる産業資産であり、実際の資産形態に応じて製造、倉庫、拡張、または中長期の用地計画に活用できます。`,
      '',
      'II. 立地と資産背景',
      `現在の参考所在地: ${address}`,
      '本案件は、ハイフォンの工業成長、物流接続性、投資需要に合致するため優先対象として扱われています。',
      '',
      'III. 想定ユーザー',
      status === 'lease'
        ? '短期または即時稼働可能なスペースを必要とする製造企業、倉庫ユーザー、産業テナントに適しています。'
        : status === 'coming'
          ? '将来供給を先行検討し、中期的な拡張を準備する投資家や産業ユーザーに適しています。'
          : 'ハイフォンで譲渡、取得、拡張機会を検討する投資家、製造業、産業ユーザーに適しています。',
    ].join('\n'),
  }

  const entry = {
    title: locale === 'en' ? buildEnglishTitle(product, status) : buildLocalTitle(product, locale),
    content: {
      description: descriptions[locale][status],
      full_content: bodies[locale],
    },
    location: {
      address: locale === 'en'
        ? address
        : locale === 'zh'
          ? address
          : locale === 'ko'
            ? address
            : address,
    },
  }

  return entry
}

const source = readJson(dataPath)
const items = source.products.filter(isHaiPhongProduct)
const localeData = Object.fromEntries(locales.map((locale) => [locale, readJson(localePaths[locale])]))

for (const product of items) {
  for (const locale of locales) {
    if (preserveManualSlugs.has(product.slug) && localeData[locale][product.slug]) {
      continue
    }

    if (!preserveManualSlugs.has(product.slug) || !localeData[locale][product.slug]) {
      localeData[locale][product.slug] = buildEntry(product, locale)
    }
  }
}

for (const locale of locales) {
  writeJson(localePaths[locale], localeData[locale])
  console.log(`${locale}: ${Object.keys(localeData[locale]).length}`)
}
