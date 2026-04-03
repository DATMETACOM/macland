/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs')
const path = require('path')

const root = process.cwd()
const localePaths = Object.fromEntries(
  ['en', 'zh', 'ko', 'ja'].map((locale) => [locale, path.join(root, 'data', 'product-translations', `${locale}.json`)])
)

const translations = {
  en: {
    'chuyen-nhuong-1-8ha-gan-kcn-nomura-hai-phong': {
      title: 'Factory asset of 1.8 hectares near Nomura Industrial Park, Hai Phong',
      content: {
        description: 'A 1.8-hectare transfer asset near Nomura Industrial Park in Hai Phong, outside the industrial park, with 3,000 sq.m of ready-to-operate factory space, 250 sq.m of office space, an existing power substation and clear legal status.',
        full_content: `I. Overview
Code: CN01.
This transfer asset has a total scale of 1.8 hectares near Nomura Industrial Park in Hai Phong, outside the industrial park boundary. It suits companies that need both land bank and a factory that can start operating immediately.

II. Asset scale
Total site area: 1.8 hectares.
Existing factory: 3,000 sq.m, ready for immediate operation.
Office building: 250 sq.m.
An existing power substation is already in place.

III. Key advantages
The property benefits from good transport connectivity for cargo movement.
Its legal status is clear, which supports a fast transaction process.
It is suitable for manufacturers, warehouse operators and investors seeking ready infrastructure.

IV. Asking price
Asking price: USD 2.3 million.`,
      },
      location: {
        province: 'Hai Phong',
        district: 'Near Nomura Industrial Park',
        address: 'Near Nomura Industrial Park in Hai Phong, outside the industrial park; the asset includes an existing factory, office building and power substation.',
      },
      details: {
        occupancy_rate: 'Ready for immediate operation',
      },
      legal: {
        status: 'Clear legal status',
      },
    },
    'chuyen-nhuong-du-an-2-1ha-an-lao-hai-phong': {
      title: 'Factory project of 2.1 hectares in An Lao, Hai Phong',
      content: {
        description: 'A 2.1-hectare transfer project in An Lao, Hai Phong, currently operating 11,000 sq.m of factory space and generating around VND 700 million per month, suitable for investors acquiring an income-producing industrial asset.',
        full_content: `I. Overview
Code: CN02.
This transfer project in An Lao has a scale of 2.1 hectares and suits investors or operators seeking an industrial asset that is already running and generating cash flow.

II. Asset scale
Land area: 2.1 hectares.
Existing operating factory area: 11,000 sq.m.
Current revenue: around VND 700 million per month.
The site includes office facilities and an existing power substation.

III. Key advantages
The location supports labor recruitment in the Hai Phong market.
Transport connectivity is convenient for cargo movement.
Legal documentation is complete and the project includes an automatic fire protection system.

IV. Asking price
Asking price: VND 140 billion.`,
      },
      location: {
        province: 'Hai Phong',
        district: 'An Lao',
        address: 'Located in An Lao, Hai Phong; the site has convenient labor access, good transport connectivity and an existing operating income stream.',
      },
      details: {
        occupancy_rate: '11,000 sq.m currently in operation',
      },
      legal: {
        status: 'Complete legal documents, automatic fire protection system',
      },
    },
    'chuyen-nhuong-5-1ha-kcn-deep-c3-hai-phong': {
      title: 'Industrial land plot of 5.1 hectares at DEEP C3 Industrial Park, Hai Phong',
      content: {
        description: 'A 5.1-hectare industrial land plot at DEEP C3 Industrial Park with site clearance completed, ready for handover, located in the commercial-service zone and about 2 km from Lach Huyen deep-water port.',
        full_content: `I. Overview
Code: CN03.
This 5.1-hectare industrial land plot at DEEP C3 Industrial Park suits companies that need a large site inside an industrial park, with a fast implementation timeline and strong seaport connectivity.

II. Current asset status
Transfer area: 5.1 hectares.
The site is already cleared and can be handed over immediately.
It is suitable for manufacturing, logistics or large-scale warehouse development.

III. Location and connectivity
The plot is located in the commercial-service zone of DEEP C3 Industrial Park.
It is about 2 km from Lach Huyen deep-water port.
This location is appropriate for businesses that prioritize port-based logistics advantages.

IV. Asking price
Asking price: USD 140 per sq.m.`,
      },
      location: {
        province: 'Hai Phong',
        district: 'DEEP C3 Industrial Park',
        address: 'Located at DEEP C3 Industrial Park in Hai Phong, within the commercial-service zone and about 2 km from Lach Huyen deep-water port.',
      },
      details: {
        occupancy_rate: 'Ready for handover',
      },
      legal: {
        status: 'Ready for handover',
      },
    },
    'cho-thue-5000m2-nha-xuong-kcn-dinh-vu-hai-phong': {
      title: '5,000 sq.m factory for lease at Dinh Vu Industrial Park, Hai Phong',
      content: {
        description: 'A 5,000 sq.m factory for lease at Dinh Vu Industrial Park, ready for production or warehouse use immediately, with an additional 4,000 sq.m yard for raw material staging.',
        full_content: `I. Overview
Code: CT01.
This factory for lease at Dinh Vu Industrial Park suits companies that need operating space immediately, either for manufacturing or for warehouse use in Hai Phong's port-linked area.

II. Leasing scale
Factory area: 5,000 sq.m.
The property can be used for production immediately.
It is also suitable for warehouse operations.
An additional open yard area of about 4,000 sq.m is available for raw material staging.

III. Infrastructure and legal status
The site includes supporting works required for operation.
Its legal status is clear.
It is suitable for businesses that need both factory and storage functions in one location.

IV. Asking rent
Quoted rent: USD 5 per sq.m.`,
      },
      location: {
        province: 'Hai Phong',
        district: 'Dinh Vu',
        address: 'Located at Dinh Vu Industrial Park in Hai Phong; suitable for production or warehouse use and includes additional yard space.',
      },
      details: {
        occupancy_rate: 'Ready for immediate operation',
      },
      legal: {
        status: 'Clear legal status',
      },
    },
    'cho-thue-5000m2-nha-xuong-an-lao-hai-phong': {
      title: '5,000 sq.m factory for lease in An Lao, Hai Phong',
      content: {
        description: 'A new 5,000 sq.m factory in An Lao, Hai Phong, scheduled for handover in June 2026, built to modern standards with full fire protection and legal documentation.',
        full_content: `I. Overview
Code: CT02.
This factory for lease in An Lao is suitable for companies planning capacity expansion in 2026 and looking for a new facility with complete operating standards.

II. Asset specifications
Factory area: 5,000 sq.m.
The building is developed to modern factory standards.
The site includes a full fire protection system and complete legal documentation.
Expected handover timeline: June 2026.

III. Key advantages
It suits businesses that want to prepare expansion plans before handover.
The An Lao location supports transport connectivity and labor recruitment within Hai Phong.
The property can be used for production or storage depending on the business model.

IV. Asking rent
Quoted rent: USD 4.8 per sq.m.`,
      },
      location: {
        province: 'Hai Phong',
        district: 'An Lao',
        address: 'Located in An Lao, Hai Phong; a modern standard factory scheduled for handover in June 2026.',
      },
      details: {
        occupancy_rate: 'Handover in June 2026',
      },
      legal: {
        status: 'Complete fire protection and legal documentation',
      },
    },
  },
  zh: {
    'chuyen-nhuong-1-8ha-gan-kcn-nomura-hai-phong': {
      title: '海防 Nomura 工业园周边 1.8 公顷厂房资产',
      content: {
        description: '该转让资产位于海防 Nomura 工业园附近，位于园区外，总规模 1.8 公顷，配有 3,000 平方米可立即投产的厂房、250 平方米办公区、现成变电站及清晰法律手续。',
        full_content: `I. 概况
产品编号：CN01。
该转让资产位于海防 Nomura 工业园附近，处于园区外，总规模 1.8 公顷，适合希望同时获得土地储备与可立即投产厂房的企业。

II. 资产规模
总用地面积：1.8 公顷。
现有厂房：3,000 平方米，可立即投入运营。
办公楼：250 平方米。
已配套电力变压站。

III. 核心优势
交通连接条件良好，便于货物运输。
法律手续清晰，适合快速推进交易。
适合制造企业、仓储物流企业以及希望获得现成基础设施的投资方。

IV. 转让价格
报价：230 万美元。`,
      },
      location: {
        province: '海防',
        district: 'Nomura 工业园周边',
        address: '位于海防 Nomura 工业园附近，园区外，资产已配套厂房、办公楼及电力变压站。',
      },
      details: {
        occupancy_rate: '可立即投入运营',
      },
      legal: {
        status: '法律手续清晰',
      },
    },
    'chuyen-nhuong-du-an-2-1ha-an-lao-hai-phong': {
      title: '海防安老县 2.1 公顷厂房项目',
      content: {
        description: '该转让项目位于海防安老县，占地 2.1 公顷，现有 11,000 平方米厂房正在运营，月收入约 7 亿越盾，适合收购现金流型工业资产的投资者。',
        full_content: `I. 概况
产品编号：CN02。
该转让项目位于安老县，总规模 2.1 公顷，适合希望承接正在运营且已有现金流工业资产的投资者或企业。

II. 资产规模
土地面积：2.1 公顷。
现有运营厂房面积：11,000 平方米。
当前收入约为每月 7 亿越盾。
项目已配套办公区和电力变压站。

III. 核心优势
项目位置有利于招聘劳动力。
交通连接便利，便于货物运输。
法律文件齐全，并已配套自动消防系统。

IV. 转让价格
报价：1,400 亿越盾。`,
      },
      location: {
        province: '海防',
        district: '安老县',
        address: '位于海防安老县，便于招工，交通连接良好，且资产目前已形成运营收入。',
      },
      details: {
        occupancy_rate: '11,000 平方米正在运营',
      },
      legal: {
        status: '法律文件齐全，自动消防系统完备',
      },
    },
    'chuyen-nhuong-5-1ha-kcn-deep-c3-hai-phong': {
      title: '海防 DEEP C3 工业园 5.1 公顷工业用地',
      content: {
        description: '该工业用地位于海防 DEEP C3 工业园，总面积 5.1 公顷，已完成场地整理，可立即交付，位于商贸服务区，距 Lạch Huyện 深水港约 2 公里。',
        full_content: `I. 概况
产品编号：CN03。
该 5.1 公顷工业用地位于 DEEP C3 工业园内，适合需要大面积工业用地、希望快速推进项目并重视港口物流条件的企业。

II. 当前状态
转让面积：5.1 公顷。
场地已整理完成，可立即交付。
适合建设生产基地、物流设施或大型仓储项目。

III. 位置与连接
地块位于 DEEP C3 工业园商贸服务区。
距离 Lạch Huyện 深水港约 2 公里。
该位置特别适合重视港口物流优势的企业。

IV. 转让价格
报价：140 美元/平方米。`,
      },
      location: {
        province: '海防',
        district: 'DEEP C3 工业园',
        address: '位于海防 DEEP C3 工业园商贸服务区，距 Lạch Huyện 深水港约 2 公里。',
      },
      details: {
        occupancy_rate: '可立即交付',
      },
      legal: {
        status: '可立即交付',
      },
    },
    'cho-thue-5000m2-nha-xuong-kcn-dinh-vu-hai-phong': {
      title: '海防亭武工业园 5,000 平方米厂房',
      content: {
        description: '该出租厂房位于海防亭武工业园，面积 5,000 平方米，可立即投产或用作仓库，另有约 4,000 平方米空地可用于原材料集结。',
        full_content: `I. 概况
产品编号：CT01。
该出租厂房位于亭武工业园，适合希望立即投入生产或用作仓储的企业，尤其适合海防港区相关业务。

II. 租赁规模
厂房面积：5,000 平方米。
可立即投入生产。
也可作为货物仓库使用。
另有约 4,000 平方米空地可用于原材料集结。

III. 基础设施与法律状态
项目已配套运营所需的辅助设施。
法律手续清晰。
适合同时需要生产与仓储功能的企业。

IV. 租金报价
报价：5 美元/平方米。`,
      },
      location: {
        province: '海防',
        district: '亭武',
        address: '位于海防亭武工业园，适合生产或仓储使用，并配有额外空地。',
      },
      details: {
        occupancy_rate: '可立即投入运营',
      },
      legal: {
        status: '法律手续清晰',
      },
    },
    'cho-thue-5000m2-nha-xuong-an-lao-hai-phong': {
      title: '海防安老县 5,000 平方米新建厂房',
      content: {
        description: '该新建厂房位于海防安老县，面积 5,000 平方米，预计于 2026 年 6 月交付，按现代标准建设，消防和法律文件齐全。',
        full_content: `I. 概况
产品编号：CT02。
该出租厂房位于安老县，适合计划在 2026 年扩大产能并希望提前锁定新厂房的企业。

II. 资产参数
厂房面积：5,000 平方米。
厂房按现代标准建设。
项目配备完整消防系统及法律文件。
预计交付时间：2026 年 6 月。

III. 核心优势
适合希望在交付前提前准备扩产计划的企业。
安老位置兼顾交通连接与海防劳动力招聘条件。
可根据经营模式用于生产或仓储。

IV. 租金报价
报价：4.8 美元/平方米。`,
      },
      location: {
        province: '海防',
        district: '安老县',
        address: '位于海防安老县，为现代标准厂房，预计于 2026 年 6 月交付。',
      },
      details: {
        occupancy_rate: '2026 年 6 月交付',
      },
      legal: {
        status: '消防与法律文件齐全',
      },
    },
  },
  ko: {
    'chuyen-nhuong-1-8ha-gan-kcn-nomura-hai-phong': {
      title: '하이퐁 노무라 산업단지 인근 1.8ha 공장 자산',
      content: {
        description: '이 양도 자산은 하이퐁 노무라 산업단지 인근의 산업단지 외부에 위치하며, 총 1.8ha 규모로 즉시 가동 가능한 3,000m2 공장, 250m2 사무공간, 변전 설비와 명확한 법적 상태를 갖추고 있습니다.',
        full_content: `I. 개요
매물 코드: CN01.
이 양도 자산은 하이퐁 노무라 산업단지 인근, 산업단지 외부에 위치하며 총 1.8ha 규모입니다. 토지와 즉시 가동 가능한 공장을 함께 확보하려는 기업에 적합합니다.

II. 자산 규모
총 부지 면적: 1.8ha.
기존 공장: 3,000m2, 즉시 운영 가능.
사무동: 250m2.
전력 변전 설비가 이미 갖춰져 있습니다.

III. 핵심 장점
물류 이동에 유리한 교통 연결성을 갖추고 있습니다.
법적 상태가 명확해 거래를 빠르게 진행하기 좋습니다.
제조업체, 창고 운영사, 즉시 사용 가능한 인프라를 찾는 투자자에게 적합합니다.

IV. 매각가
희망가: 230만 USD.`,
      },
      location: {
        province: '하이퐁',
        district: '노무라 산업단지 인근',
        address: '하이퐁 노무라 산업단지 인근의 산업단지 외부에 위치하며, 기존 공장, 사무동, 변전 설비를 포함합니다.',
      },
      details: {
        occupancy_rate: '즉시 운영 가능',
      },
      legal: {
        status: '법적 상태 명확',
      },
    },
    'chuyen-nhuong-du-an-2-1ha-an-lao-hai-phong': {
      title: '하이퐁 안라오 2.1ha 공장 프로젝트',
      content: {
        description: '이 양도 프로젝트는 하이퐁 안라오에 위치하며 2.1ha 규모입니다. 현재 11,000m2 공장이 운영 중이고 월 약 7억 VND의 매출이 발생해 수익형 산업 자산을 찾는 투자자에게 적합합니다.',
        full_content: `I. 개요
매물 코드: CN02.
이 양도 프로젝트는 안라오에 위치한 2.1ha 규모의 산업 자산으로, 이미 운영 중이며 현금흐름이 있는 자산을 인수하려는 투자자나 운영사에 적합합니다.

II. 자산 규모
토지 면적: 2.1ha.
현재 운영 중인 공장 면적: 11,000m2.
현재 매출: 월 약 7억 VND.
부지 내 사무시설과 변전 설비가 갖춰져 있습니다.

III. 핵심 장점
인력 채용 측면에서 유리한 입지입니다.
화물 운송에 편리한 교통 연결성을 갖추고 있습니다.
법적 서류가 완비되어 있고 자동 소방 시스템이 구축되어 있습니다.

IV. 매각가
희망가: 1,400억 VND.`,
      },
      location: {
        province: '하이퐁',
        district: '안라오',
        address: '하이퐁 안라오에 위치하며, 인력 확보와 교통 연결이 편리하고 현재 운영 수익이 발생하고 있습니다.',
      },
      details: {
        occupancy_rate: '11,000m2 운영 중',
      },
      legal: {
        status: '법적 서류 완비, 자동 소방 시스템 구비',
      },
    },
    'chuyen-nhuong-5-1ha-kcn-deep-c3-hai-phong': {
      title: '하이퐁 DEEP C3 산업단지 5.1ha 산업용지',
      content: {
        description: '이 산업용지는 하이퐁 DEEP C3 산업단지에 위치하며 5.1ha 규모입니다. 부지 정리가 완료되어 즉시 인도 가능하고, 상업서비스 구역에 있으며 락후옌 심해항에서 약 2km 거리에 있습니다.',
        full_content: `I. 개요
매물 코드: CN03.
이 5.1ha 산업용지는 DEEP C3 산업단지 내에 위치하며, 대형 부지와 빠른 사업 착수, 항만 물류 접근성을 중시하는 기업에 적합합니다.

II. 현재 자산 상태
양도 면적: 5.1ha.
부지 정리가 완료되어 즉시 인도 가능합니다.
제조시설, 물류시설 또는 대형 창고 개발에 적합합니다.

III. 위치 및 연결성
부지는 DEEP C3 산업단지의 상업서비스 구역에 있습니다.
락후옌 심해항까지 약 2km 거리입니다.
항만 기반 물류 장점을 중시하는 기업에 적합한 위치입니다.

IV. 매각가
희망가: 140 USD/m2.`,
      },
      location: {
        province: '하이퐁',
        district: 'DEEP C3 산업단지',
        address: '하이퐁 DEEP C3 산업단지 상업서비스 구역에 위치하며 락후옌 심해항에서 약 2km 거리입니다.',
      },
      details: {
        occupancy_rate: '즉시 인도 가능',
      },
      legal: {
        status: '즉시 인도 가능',
      },
    },
    'cho-thue-5000m2-nha-xuong-kcn-dinh-vu-hai-phong': {
      title: '하이퐁 딘부 산업단지 5,000m2 공장',
      content: {
        description: '이 임대 공장은 하이퐁 딘부 산업단지에 위치하며 5,000m2 규모로 즉시 생산 또는 창고 용도로 사용할 수 있고, 원자재 적치를 위한 약 4,000m2의 야적장이 추가로 제공됩니다.',
        full_content: `I. 개요
매물 코드: CT01.
이 임대 공장은 딘부 산업단지에 위치하며 즉시 운영이 필요한 기업에 적합합니다. 생산시설 또는 창고 용도로 모두 활용할 수 있으며 하이퐁 항만권과의 연계성이 좋습니다.

II. 임대 규모
공장 면적: 5,000m2.
즉시 생산에 투입할 수 있습니다.
창고 용도로도 사용할 수 있습니다.
원자재 적치를 위한 약 4,000m2의 오픈 야드가 추가로 제공됩니다.

III. 인프라 및 법적 상태
운영에 필요한 부대시설이 갖춰져 있습니다.
법적 상태가 명확합니다.
한 곳에서 생산과 보관 기능을 함께 운영하려는 기업에 적합합니다.

IV. 임대료
제시 임대료: 5 USD/m2.`,
      },
      location: {
        province: '하이퐁',
        district: '딘부',
        address: '하이퐁 딘부 산업단지에 위치하며 생산 또는 창고 용도로 사용할 수 있고 추가 야드 공간이 포함됩니다.',
      },
      details: {
        occupancy_rate: '즉시 운영 가능',
      },
      legal: {
        status: '법적 상태 명확',
      },
    },
    'cho-thue-5000m2-nha-xuong-an-lao-hai-phong': {
      title: '하이퐁 안라오 5,000m2 신축 공장',
      content: {
        description: '이 신축 공장은 하이퐁 안라오에 위치하며 5,000m2 규모입니다. 2026년 6월 인도 예정이며 최신 기준으로 건설되고 소방 및 법적 서류가 완비되어 있습니다.',
        full_content: `I. 개요
매물 코드: CT02.
이 임대 공장은 2026년에 생산능력 확대를 계획하는 기업과, 완전한 운영 기준을 갖춘 신규 시설을 찾는 기업에 적합합니다.

II. 자산 사양
공장 면적: 5,000m2.
공장은 최신 표준에 맞춰 건설됩니다.
소방 시스템과 법적 서류가 완비됩니다.
예상 인도 시점: 2026년 6월.

III. 핵심 장점
인도 전에 증설 계획을 준비하려는 기업에 적합합니다.
안라오 입지는 하이퐁 내 교통 연결성과 인력 확보 측면에서 유리합니다.
사업 모델에 따라 생산 또는 보관 용도로 사용할 수 있습니다.

IV. 임대료
제시 임대료: 4.8 USD/m2.`,
      },
      location: {
        province: '하이퐁',
        district: '안라오',
        address: '하이퐁 안라오에 위치한 현대 표준 공장으로 2026년 6월 인도 예정입니다.',
      },
      details: {
        occupancy_rate: '2026년 6월 인도',
      },
      legal: {
        status: '소방 및 법적 서류 완비',
      },
    },
  },
  ja: {
    'chuyen-nhuong-1-8ha-gan-kcn-nomura-hai-phong': {
      title: 'ハイフォン ノムラ工業団地近接の1.8ha工場資産',
      content: {
        description: '本譲渡案件はハイフォンのノムラ工業団地近接、工業団地外に位置し、総面積 1.8ha、即稼働可能な 3,000m2 の工場、250m2 の事務所、既存変電設備、明確な法的状況を備えています。',
        full_content: `I. 概要
案件コード：CN01。
本譲渡案件はハイフォンのノムラ工業団地近接、工業団地外に位置する総面積 1.8ha の資産です。用地と即稼働可能な工場を同時に確保したい企業に適しています。

II. 資産規模
総敷地面積：1.8ha。
既存工場：3,000m2、即時稼働可能。
事務所棟：250m2。
変電設備がすでに整っています。

III. 主な強み
貨物輸送に適した交通接続を備えています。
法的状況が明確で、取引を迅速に進めやすい案件です。
製造業、倉庫運営会社、即時利用可能なインフラを求める投資家に適しています。

IV. 譲渡価格
希望価格：230万米ドル。`,
      },
      location: {
        province: 'ハイフォン',
        district: 'ノムラ工業団地周辺',
        address: 'ハイフォンのノムラ工業団地近接、工業団地外に位置し、既存工場、事務所棟、変電設備を備えています。',
      },
      details: {
        occupancy_rate: '即稼働可能',
      },
      legal: {
        status: '法的状況明確',
      },
    },
    'chuyen-nhuong-du-an-2-1ha-an-lao-hai-phong': {
      title: 'ハイフォン アンラオの2.1ha工場プロジェクト',
      content: {
        description: '本譲渡プロジェクトはハイフォンのアンラオに位置し、面積は 2.1ha。現在 11,000m2 の工場が稼働中で、月間売上は約 7 億 VND あり、収益性のある産業資産を求める投資家に適しています。',
        full_content: `I. 概要
案件コード：CN02。
本譲渡プロジェクトはアンラオに位置する 2.1ha の産業資産で、すでに稼働中でキャッシュフローのある資産を取得したい投資家や事業者に適しています。

II. 資産規模
土地面積：2.1ha。
稼働中の工場面積：11,000m2。
現在の売上：約 7 億 VND / 月。
敷地内には事務所施設と変電設備があります。

III. 主な強み
労働力確保の面で有利な立地です。
貨物輸送に便利な交通接続を備えています。
法的書類が完備され、自動消防システムも導入されています。

IV. 譲渡価格
希望価格：1,400 億 VND。`,
      },
      location: {
        province: 'ハイフォン',
        district: 'アンラオ',
        address: 'ハイフォンのアンラオに位置し、人材確保と交通接続に優れ、現在も運営収益が発生しています。',
      },
      details: {
        occupancy_rate: '11,000m2 稼働中',
      },
      legal: {
        status: '法的書類完備、自動消防システムあり',
      },
    },
    'chuyen-nhuong-5-1ha-kcn-deep-c3-hai-phong': {
      title: 'ハイフォン DEEP C3工業団地の5.1ha産業用地',
      content: {
        description: '本産業用地はハイフォンの DEEP C3 工業団地に位置し、面積は 5.1ha。造成済みで即時引き渡し可能、商業サービス区画内にあり、ラックフェン深水港から約 2km です。',
        full_content: `I. 概要
案件コード：CN03。
本 5.1ha の産業用地は DEEP C3 工業団地内に位置し、大規模用地、早期着工、港湾物流アクセスを重視する企業に適しています。

II. 現況
譲渡面積：5.1ha。
造成済みで即時引き渡し可能です。
製造拠点、物流施設、大型倉庫プロジェクトに適しています。

III. 立地と接続性
区画は DEEP C3 工業団地の商業サービスエリア内にあります。
ラックフェン深水港まで約 2km です。
港湾物流の優位性を重視する企業に適した立地です。

IV. 譲渡価格
希望価格：140 USD/m2。`,
      },
      location: {
        province: 'ハイフォン',
        district: 'DEEP C3工業団地',
        address: 'ハイフォンの DEEP C3 工業団地商業サービスエリア内に位置し、ラックフェン深水港から約 2km です。',
      },
      details: {
        occupancy_rate: '即時引き渡し可能',
      },
      legal: {
        status: '即時引き渡し可能',
      },
    },
    'cho-thue-5000m2-nha-xuong-kcn-dinh-vu-hai-phong': {
      title: 'ハイフォン ディンブー工業団地の5,000m2工場',
      content: {
        description: '本賃貸工場はハイフォンのディンブー工業団地に位置し、5,000m2 の面積で即時に生産または倉庫用途で利用可能です。さらに原材料集積用として約 4,000m2 のヤードがあります。',
        full_content: `I. 概要
案件コード：CT01。
本賃貸工場はディンブー工業団地に位置し、即時稼働が必要な企業に適しています。生産施設または倉庫のいずれにも利用でき、ハイフォン港湾エリアとの連携にも優れています。

II. 賃貸規模
工場面積：5,000m2。
即時に生産を開始できます。
倉庫用途としても利用可能です。
原材料集積用として約 4,000m2 のオープンヤードがあります。

III. インフラと法的状況
運営に必要な付帯設備が整っています。
法的状況は明確です。
生産と保管を同一拠点で運営したい企業に適しています。

IV. 賃料
提示賃料：5 USD/m2。`,
      },
      location: {
        province: 'ハイフォン',
        district: 'ディンブー',
        address: 'ハイフォンのディンブー工業団地に位置し、生産または倉庫用途に利用でき、追加ヤードスペースも備えています。',
      },
      details: {
        occupancy_rate: '即稼働可能',
      },
      legal: {
        status: '法的状況明確',
      },
    },
    'cho-thue-5000m2-nha-xuong-an-lao-hai-phong': {
      title: 'ハイフォン アンラオの5,000m2新築工場',
      content: {
        description: '本新築工場はハイフォンのアンラオに位置し、面積は 5,000m2。2026年6月引き渡し予定で、最新基準で建設され、消防設備と法的書類が完備されています。',
        full_content: `I. 概要
案件コード：CT02。
本賃貸工場は 2026 年に生産能力拡張を計画している企業や、運営基準が整った新規施設を探している企業に適しています。

II. 資産仕様
工場面積：5,000m2。
工場は最新基準で建設されます。
消防システムと法的書類が完備されます。
想定引き渡し時期：2026年6月。

III. 主な強み
引き渡し前から拡張計画を進めたい企業に適しています。
アンラオの立地は、ハイフォン内で交通接続と労働力確保の両面に優れています。
事業モデルに応じて生産または保管用途で利用できます。

IV. 賃料
提示賃料：4.8 USD/m2。`,
      },
      location: {
        province: 'ハイフォン',
        district: 'アンラオ',
        address: 'ハイフォンのアンラオに位置する最新基準の工場で、2026年6月の引き渡し予定です。',
      },
      details: {
        occupancy_rate: '2026年6月引き渡し',
      },
      legal: {
        status: '消防設備・法的書類完備',
      },
    },
  },
}

for (const [locale, filePath] of Object.entries(localePaths)) {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))

  for (const [slug, entry] of Object.entries(translations[locale])) {
    data[slug] = entry
  }

  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`)
  console.log(`Updated ${locale}: ${Object.keys(translations[locale]).length} entries`)
}
