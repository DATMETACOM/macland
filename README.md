# 🏢 Macland - Bất Động Sản Công Nghiệp

Website bất động sản công nghiệp được xây dựng với **Next.js 14**, **TypeScript**, và **Tailwind CSS**.

## ✨ Tính năng

- ⚡ **Tối ưu hiệu suất**: Next.js App Router với Server Components
- 🎨 **UI đẹp**: Framer Motion animations + Tailwind CSS
- 📱 **Responsive**: Mobile-first design
- 🖼️ **Image Optimization**: Tự động optimize ảnh với Next.js Image
- 🔍 **SEO**: Server-side rendering cho Google indexing
- 📄 **Pagination**: Load sản phẩm theo trang (20 items/trang)
- 🎯 **Type Safety**: TypeScript toàn bộ

## 🚀 Quick Start

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Mở browser tại
http://localhost:3000
```

## 📂 Cấu trúc dự án

```
src/
├── app/                    # Next.js App Router
│   ├── (routes)/          # Route groups
│   │   ├── page.tsx       # Trang chủ
│   │   └── san-pham/      # Trang sản phẩm
│   │       ├── page.tsx   # Listing với pagination
│   │       └── [slug]/    # Dynamic routes cho detail
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── layout/           # Header, Footer
│   ├── product/          # ProductCard
│   └── ui/               # Reusable UI components
├── lib/                  # Utilities
│   ├── data/            # Data fetching functions
│   └── utils/           # Helper functions
└── types/               # TypeScript types
```

## 🎨 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Plus Jakarta Sans

## 📊 Data

Data được lấy từ file `public/data.json` với:
- **359 sản phẩm** bất động sản công nghiệp
- Thông tin chi tiết từng sản phẩm
- Hình ảnh và thumbnails

## 🏗️ Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Static Export
Để export ra static HTML:
1. Update `next.config.ts`: `output: 'export'`
2. Run: `npm run build`
3. Deploy folder `out/`

## ⚡ Performance Optimization

- ✅ Static Generation cho trang detail (top 50 products)
- ✅ Image Optimization với Next.js Image
- ✅ Code Splitting tự động
- ✅ Lazy Loading components
- ✅ Infinite Scroll ready (có thể implement)
- ✅ Server Components để giảm JS bundle

## 🎯 Tính năng kế hoạch

- [ ] Search functionality
- [ ] Advanced filters
- [ ] Infinite scroll
- [ ] Image gallery lightbox
- [ ] Contact form
- [ ] Multi-language support
- [ ] Dark mode

## 📝 License

MIT
