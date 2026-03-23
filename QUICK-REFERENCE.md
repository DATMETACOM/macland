# 🚀 Macland Web - Quick Reference

> **Session:** March 22, 2026
> **Status:** ✅ MVP Complete
> **Full Docs:** [SESSION-LOG.md](../.claude/projects/-Users-datmar-projects-Macland/memory/SESSION-LOG.md)

---

## 🎯 Quick Start

```bash
# Start dev server
npm run dev

# Open in browser
open http://localhost:3000
```

---

## 📂 Key Files

| File | Purpose |
|------|---------|
| `src/app/(routes)/page.tsx` | Homepage |
| `src/lib/data/products.ts` | Data functions |
| `src/components/layout/Header.tsx` | Navigation |
| `next.config.ts` | Next.js config |
| `DESIGN-SYSTEM.md` | UI/UX guidelines |

---

## 🐛 Quick Fixes

### Images not loading?
```bash
cp -r ../macland-extract/images/* public/images/products/
```

### Dev server stuck?
```bash
pkill -f "next dev" && npm run dev
```

### Styling broken?
```bash
rm -rf .next && npm run dev
```

---

## 📊 Stats

- **Pages:** 6
- **Products:** 359
- **Images:** 15,000+
- **Load Time:** < 100ms

---

## 🎨 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

---

## 📝 Next Steps

1. **Priority:** Search functionality
2. **Priority:** Contact form integration
3. **Optional:** Deploy to Vercel
4. **Optional:** Add analytics

---

## 📞 Help

**Full Documentation:** [SESSION-LOG.md](../.claude/projects/-Users-datmar-projects-Macland/memory/SESSION-LOG.md)

**Quick Memory:** [MEMORY.md](../.claude/projects/-Users-datmar-projects-Macland/memory/MEMORY.md)

**Project Root:** `/Users/datmar/projects/Macland/macland-web/`
