# Ke hoach rebrand website sang Haiphongindustrialhub.vn

Ngay tao: 2026-07-29

## 1. Muc tieu

Chuyen website hien tai tu Macland sang thuong hieu moi `Haiphongindustrialhub.vn`, voi dinh vi:

- Nen tang du lieu nha xuong va khu cong nghiep tai Hai Phong.
- Cong cu giup nha dau tu loc, so sanh, gui yeu cau tu van va tiep can thong tin bat dong san cong nghiep.
- Phong cach thiet ke di theo logo moi: cong nghiep, ky thuat, du lieu, sach va tin cay.

Khong nen chi thay text `Macland` bang ten moi. Can dieu chinh lai cau truc noi dung, mau sac, thong diep va uu tien san pham de site doc dung nhu mot hub du lieu cong nghiep Hai Phong.

## 2. Nguon tham chieu noi dung

### EHA Industrial

URL: https://www.ehaindustrial.com/

Cac diem co the hoc theo:

- Thong diep trung tam: giai phap nha xuong xay san, kho xay san va dich vu ho tro nha dau tu.
- Noi dung nen nhan vao Hai Phong, Nam Dinh Vu, logistics, cang bien, ket noi cang Lach Huyen.
- Cac cum noi dung phu hop: one-stop service, phap ly, cap phep, logistics, nhan su, ha tang dong bo, tieu chuan xanh.
- Cach trinh bay du an nen co thong so nhanh: quy mo, dien tich con trong, khoang cach toi cang, trang thai van hanh/sap ra mat.

Luu y: cac so lieu nhu 900 ty VND, 9 ha, 6 ha, 18 km, LEED Gold, 30-45 ngay phap ly chi nen dung neu chung la thong tin duoc phep gan cho Haiphongindustrialhub.vn hoac dung nhu case tham chieu co ghi nguon. Khong nen bien thanh claim cua thuong hieu moi neu chua duoc xac nhan.

### KCN Vietnam

URL: https://kcnvietnam.com/vi/about-us/

Cac diem co the hoc theo:

- Dinh vi "nen tang bat dong san cong nghiep" thay vi chi la website moi gioi.
- Trang Gioi thieu nen co tam nhin, su menh, cach dong hanh cung nha dau tu va dong luc phat trien.
- Noi dung nen noi ro vai tro ket noi he sinh thai: chu dau tu, nha san xuat, logistics, dia phuong, doi tac van hanh.
- Danh muc du an nen duoc trinh bay theo khu vuc/vi tri chien luoc, co thong so tong quan va ban do.

Luu y: so lieu "hon 300 ha" cua KCN Vietnam khong duoc dung nhu so lieu cua website moi neu khong co co so rieng.

## 3. Huong brand moi

### Ten hien thi

- Ten day du: `Hai Phong Industrial Hub`
- Domain/brand short: `Haiphongindustrialhub.vn`
- Tagline theo logo: `Nen tang du lieu nha xuong & KCN`
- Cach viet trong UI:
  - Header: `Hai Phong Industrial Hub`
  - Footer/copyright: `Haiphongindustrialhub.vn`
  - Metadata title: `Hai Phong Industrial Hub - Nen tang du lieu nha xuong & KCN`

### Mau sac tu logo

Can thay he mau Macland do/hong sang he mau moi:

- Navy chu dao: `#071B3A` hoac `#08204A`
- Navy dam cho text/hero: `#020B1F`
- Xanh slate phu: `#4D6575`
- Do cam diem nhan: `#F05A2A`
- Do cam dam hover: `#D9431E`
- Nen sang lanh: `#F5FAFA`
- Duong ky thuat/grid: `#D7DEE2`

Nguyen tac dung mau:

- Navy la mau chinh cho header, footer, title, CTA nen toi.
- Do cam chi dung lam accent: nut chinh, badge, so lieu noi bat, cham/cube nho.
- Nen trang/sang lanh va grid geometric tao cam giac data platform.
- Giam toi da cac class `red-*` hien co tru khi da map lai sang token moi.

### Hinh anh va do hoa

- Logo moi can duoc dua vao `public/` va dung qua `next/image`.
- Hero nen co hinh/nen thuc ve KCN, nha xuong, logistics Hai Phong hoac composition du lieu/ban do, khong dung nen gradient chung chung.
- Co the dung motif isometric cube va line-grid nhu logo lam pattern phu, nhung can tiet che.
- Product cards nen uu tien anh nha xuong/KCN sach, khong watermark ben thu ba theo rule da co.

## 4. Noi dung website moi

### Navigation de xuat

Hien tai:

- Trang chu
- San pham
- Dich vu
- Ve chung toi
- Lien he

De xuat doi thanh:

- Trang chu
- Du lieu KCN
- Nha xuong & Kho
- Dich vu dau tu
- Ve Hub
- Lien he

Neu can giu route hien co de tranh vo SEO/logic:

- `/san-pham` doi label thanh `Du lieu KCN`
- Bo loc trong `/san-pham` can co label gan voi KCN, nha xuong, kho, dat cong nghiep.
- `/dich-vu` doi noi dung thanh `Dich vu dau tu`
- `/ve-chung-toi` doi noi dung thanh `Ve Hub`

### Trang chu

Can thay cac section Macland hien co bang:

1. Hero
   - H1: `Hai Phong Industrial Hub`
   - Subcopy: nen tang du lieu nha xuong, kho va KCN tai Hai Phong cho nha dau tu san xuat/logistics.
   - CTA 1: `Tim mat bang phu hop`
   - CTA 2: `Gui yeu cau tu van`
   - Search quick filter: hinh thuc, khu vuc, dien tich, trang thai.

2. Quick stats
   - So luong listing Hai Phong trong dataset.
   - So KCN/CCN co du lieu.
   - Nhom san pham: nha xuong, kho, dat cong nghiep, KCN.
   - Chi nen dung so lieu tinh tu `public/data.json` hoac so lieu duoc xac nhan.

3. Du lieu noi bat
   - Hien san pham Hai Phong truoc.
   - Card can co: loai hinh, dien tich, vi tri, gia/trang thai, CTA.

4. Vi sao Hai Phong
   - Logistics cang bien.
   - Ket noi khu kinh te va KCN.
   - Loi the cho san xuat, kho van, xuat nhap khau.
   - Can co nguon/du lieu neu dua claim cu the.

5. Dich vu cua Hub
   - Tim kiem vi tri.
   - So sanh mat bang.
   - Ket noi chu dau tu.
   - Ho tro phap ly, logistics va one-stop advisory.

6. CTA cuoi trang
   - Giu form tu van, nhung copy chuyen sang "Nhan shortlist mat bang trong 24h lam viec" neu co the cam ket.

### Trang Du lieu KCN / San pham

Can nang cap tu listing bat dong san chung sang dashboard nhe:

- Search theo ten KCN, quan/huyen, dien tich.
- Filter: loai hinh, dien tich, trang thai, gia, phap ly, vi tri.
- Sort: moi nhat, dien tich lon, gia thap, gan cang/logistics neu co data.
- Uu tien Hai Phong, khong de listing tinh khac len dau.
- Neu website moi chi tap trung Hai Phong, can an hoac tach listing ngoai Hai Phong thanh "mo rong mien Bac" sau.

### Trang chi tiet san pham

Can doi content detail thanh format du lieu:

- Tong quan nhanh.
- Thong so chinh: dien tich, gia, phap ly, tinh trang giao dich, loai hinh.
- Vi tri va ket noi.
- Ha tang: dien, nuoc, xu ly nuoc thai, PCCC, duong noi bo neu co.
- Phu hop nganh: san xuat, kho, logistics, EPE neu co.
- Anh/so do/mat bang.
- CTA: yeu cau ho so, dat lich xem mat bang, nhan bao gia.

### Trang Dich vu dau tu

Noi dung nen follow cac chu de tu EHA va KCN Vietnam:

- Site selection.
- Industrial data and market shortlist.
- Legal and licensing support.
- Factory/warehouse leasing advisory.
- Logistics and customs coordination.
- Expansion and operation support.

Quy trinh nen doi thanh:

1. Tiep nhan nhu cau.
2. Lap shortlist mat bang.
3. Kiem tra phap ly/ha tang.
4. Ket noi chu dau tu va tham quan.
5. Ho tro dam phan, ho so, ban giao.

### Trang Ve Hub

Noi dung nen gom:

- Tam nhin: tro thanh nen tang du lieu bat dong san cong nghiep tap trung vao Hai Phong.
- Su menh: giup nha dau tu ra quyet dinh nhanh hon bang du lieu ro rang, cap nhat va co nguon.
- Cach dong hanh: tu du lieu, shortlist, ket noi chu dau tu den ho tro van hanh.
- Gia tri: minh bach, chinh xac, thuc chien, ket noi he sinh thai.

Khong nen giu claim Macland nhu `15+ nam`, `500+ du an`, `1000+ khach hang` neu khong con phu hop voi brand moi.

### Trang Lien he

Can xac nhan lai:

- So dien thoai moi.
- Email domain moi: vi du `info@haiphongindustrialhub.vn`.
- Dia chi van phong.
- Hotline va gio lam viec.
- Form fields: ho ten, cong ty, email, dien thoai, nhu cau, dien tich, khu vuc quan tam.

## 5. Mapping file can sua

### Brand va metadata

- `src/app/layout.tsx`
  - Metadata title/description.
  - Logo/icon/favicon neu dang khai bao.
- `src/lib/i18n/dictionaries.ts`
  - Tat ca text UI Macland sang Hai Phong Industrial Hub.
  - Vi truoc, sau do en/zh/ko/ja neu tiep tuc i18n.
- `src/lib/config/contact.ts`
  - Email, phone, address moi.
- `README.md`
  - Doi thong tin du an sau khi rebrand.

### Layout va component dung chung

- `src/components/layout/Header.tsx`
  - Logo moi, text brand, nav labels, CTA.
  - Thay red hover/CTA bang navy/orange.
- `src/components/layout/Footer.tsx`
  - Brand, tagline, social links, copyright.
  - Mau footer theo navy logo.
- `src/components/ui/Button.tsx`
  - Neu component hardcode red, can them variant theo brand moi.
- `src/app/globals.css`
  - CSS variables brand moi.
  - Focus ring tu red sang orange/navy.
  - Them utility pattern grid neu can.

### Pages

- `src/app/(routes)/page.tsx`
  - Rebuild homepage theo hub/data platform.
- `src/app/(routes)/san-pham/page.tsx`
  - Listing/filter copy va uu tien Hai Phong.
- `src/app/(routes)/san-pham/[slug]/page.tsx`
  - Detail layout theo thong tin du lieu.
- `src/app/(routes)/dich-vu/page.tsx`
  - Noi dung dich vu dau tu.
- `src/app/(routes)/ve-chung-toi/page.tsx`
  - Tam nhin/su menh/Ve Hub.
- `src/app/(routes)/lien-he/page.tsx`
  - Form/contact info moi.

### Data

- `public/data.json`
  - Khong sua truc tiep neu khong can. Uu tien tao layer/filter.
- `src/lib/data/products.ts`
  - Kiem tra lai rule uu tien Hai Phong.
  - Loai Macland noise trong content.
  - Co the them helper tinh stats theo Hai Phong.
- `src/lib/data/product-utils.ts`
  - Format label loai hinh/trang thai theo copy moi.
- `data/product-translations/*.json`
  - Neu giu i18n, can rebrand overlay cho cac locale.

### Asset

- `logo.jpg`
  - Logo source hien tai dang o root va chua track.
- De xuat copy sang:
  - `public/brand/haiphong-industrial-hub-logo.jpg`
  - `public/brand/haiphong-industrial-hub-mark.png` neu tach duoc mark.
  - `public/brand/haiphong-industrial-hub-og.jpg` cho social share.

## 6. Next.js 16 luu y truoc khi code

`package.json` dang dung Next `16.2.1`, khong phai Next 14 nhu README cu. `AGENTS.md` yeu cau doc guide trong `node_modules/next/dist/docs/` truoc khi viet code.

Kiem tra hien tai: thu muc `node_modules/next/dist/docs/` khong ton tai trong workspace. Truoc khi implement can:

- Kiem tra lai dependency install co day du khong.
- Tim vi tri docs Next 16 trong package neu duoc doi duong dan.
- Neu can, cai lai dependency hoac doi chieu official docs Next 16 truoc khi sua App Router, metadata, image, server components.

## 7. Ke hoach trien khai theo phase

### Phase 1 - Chot content va brand token

- Xac nhan thong tin lien he moi.
- Xac nhan co duoc dung cac so lieu/claim nao tu EHA hay khong.
- Chot ten hien thi va tagline.
- Chot co tap trung 100% Hai Phong hay van hien san pham ngoai Hai Phong.
- Tao brand tokens trong `globals.css` va `DESIGN-SYSTEM.md`.

### Phase 2 - Rebrand khung site

- Header, footer, metadata, favicon/logo.
- Button, focus ring, card hover, badge color.
- Thay toan bo text Macland trong UI dictionary.
- Dam bao mobile header khong overflow voi ten brand dai.

### Phase 3 - Rebuild homepage

- Hero moi co logo/brand signal ro trong viewport dau.
- Quick filter/search.
- Stats tinh tu data that.
- Featured Hai Phong listings.
- Section "Vi sao Hai Phong" va "Dich vu cua Hub".

### Phase 4 - Sua listing va detail

- Filter/sort theo nhu cau nha dau tu.
- Uu tien listing Hai Phong.
- Detail page theo format du lieu, khong con bai viet marketing dai.
- Giu rule khong hien anh watermark ben thu ba.

### Phase 5 - Sua cac trang noi dung

- Dich vu dau tu.
- Ve Hub.
- Lien he.
- Chatbot/contact form copy.
- i18n overlay neu tiep tuc 5 ngon ngu.

### Phase 6 - QA va release

- `npm run lint`
- `npm run build`
- Test desktop/mobile:
  - `/`
  - `/san-pham`
  - `/san-pham/[slug]`
  - `/dich-vu`
  - `/ve-chung-toi`
  - `/lien-he`
- Kiem tra logo render, mau sac, contrast, text wrap.
- Kiem tra form contact.
- Kiem tra metadata/OG.
- Chuan bi domain `Haiphongindustrialhub.vn`.

## 8. Rui ro va diem can xac nhan

- Claim ve dien tich, von dau tu, LEED, thoi gian phap ly, so doi tac: can xac nhan quyen su dung va nguon.
- Data hien co co nhieu san pham ngoai Hai Phong; can quyet dinh an, loc, hay tach khu vuc.
- Noi dung file hien co co dau tieng Viet bi mojibake o nhieu noi; khi sua can dam bao encoding UTF-8 dung.
- Ten brand dai co the gay vo header mobile.
- Logo hien la JPG ngang, can co ban mark/icon rieng cho favicon, mobile logo, OG.
- README va DESIGN-SYSTEM hien khong con dung voi Next 16 va brand moi.

## 9. Checklist hoan thanh

- [ ] Xac nhan contact moi.
- [ ] Xac nhan claims/so lieu duoc dung.
- [ ] Chot scope Hai Phong-only hay mixed inventory.
- [ ] Dua logo vao `public/brand`.
- [ ] Cap nhat design tokens.
- [ ] Rebrand header/footer/metadata.
- [ ] Viet lai dictionary UI tieng Viet.
- [ ] Rebuild homepage.
- [ ] Sua listing/detail theo data hub.
- [ ] Sua dich vu/ve hub/lien he.
- [ ] Cap nhat i18n en/zh/ko/ja neu can.
- [ ] Chay lint/build.
- [ ] QA desktop/mobile.
- [ ] Chuan bi deploy/domain.
