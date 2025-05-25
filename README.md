# 🧾 JobTracker

**JobTracker** adalah aplikasi web untuk mencatat dan melacak pekerjaan yang sedang kamu lamar. Aplikasi ini dirancang untuk membantu para pencari kerja agar lebih terorganisir dalam proses melamar kerja dan menghindari kebingungan saat melamar ke banyak perusahaan secara bersamaan.

🌐 [Lihat Aplikasi Live](https://job-tracker-flax-sigma.vercel.app/)

---

## 🎯 Masalah yang Diselesaikan

Banyak pelamar kerja merasa kesulitan melacak proses lamaran mereka, terutama saat melamar ke banyak perusahaan sekaligus. JobTracker membantu menyelesaikan masalah ini dengan menyediakan sistem pencatatan dan pelacakan job yang rapi dan mudah digunakan.

---

## 👥 Target Pengguna

Pelamar kerja yang ingin mencatat, memantau, dan mengelola proses lamaran kerja mereka secara sistematis.

---

## ✨ Fitur Utama

- 🔐 Autentikasi pengguna (Login & Register) menggunakan Clerk
- ➕ Menambahkan job baru
- ✏️ Mengedit dan menghapus job
- 🧾 Filter berdasarkan status, jenis pekerjaan, prioritas, dan lainnya
- 📊 Dashboard statistik untuk memantau jumlah dan status job

---

## 🧱 Teknologi yang Digunakan

### Frontend

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org/)

### Backend & API

- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Supabase](https://supabase.com/) sebagai penyedia database

### Autentikasi

- [Clerk](https://clerk.dev/)

### Deployment

- [Vercel](https://vercel.com/)

---

## ⚙️ Instalasi Lokal

1. **Clone repository ini:**

   ```bash
   git clone https://github.com/username/jobtracker.git
   cd jobtracker
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Buat file environment:**

   Buat file `.env.local` di root folder dan isi dengan:

   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   DB_PASSWORD=your_database_password
   DATABASE_URL=your_database_connection_url
   ```

4. **Generate Prisma Client:**

   ```bash
   npx prisma generate
   ```

5. **Jalankan aplikasi:**

   ```bash
   npm run dev
   # atau
   yarn dev
   ```

---

## 🚀 Deployment

Aplikasi ini telah di-deploy menggunakan [Vercel](https://vercel.com/).

🔗 Live: [https://job-tracker-flax-sigma.vercel.app/](https://job-tracker-flax-sigma.vercel.app/)

---

## 🧪 Status Pengembangan

🚧 Masih dalam tahap pengembangan aktif. Fitur baru dan perbaikan akan terus ditambahkan.

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah lisensi [MIT](https://opensource.org/licenses/MIT).

---

## 🙌 Kontribusi

Kontribusi sangat terbuka! Jika kamu menemukan bug atau memiliki ide untuk fitur baru, silakan buka [Issue](https://github.com/username/jobtracker/issues) atau buat Pull Request.
