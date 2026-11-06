# Asisten Pemilik Usaha — Catatan Kerja

## Tujuan dan keluaran

- Tujuan utama: mendapatkan pendanaan dari pemilik untuk membangun dan menguji asisten laporan, bukan memasarkan layanan yang sudah tersedia.
- Format HTML: satu halaman presentasi lanskap dengan masalah bisnis, solusi, keluaran pilot, penggunaan dana, permintaan persetujuan, dan dasar evaluasi investasi. Bukan landing page panjang.
- Pembaca: pemilik usaha Henskristal, bukan tim teknis.
- Keluaran saat ini: proposal singkat di [onepager.md](onepager.md), didukung catatan kerja ini.
- Keluaran HTML: proposal pendanaan satu halaman di [onepager.html](onepager.html).
- Informasi yang masih harus dilengkapi agar siap diputuskan: nominal biaya pembangunan, biaya layanan rutin, durasi, dan penanggung jawab pilot.
- Dokumen ini merupakan usulan, bukan pernyataan bahwa integrasi sudah tersedia atau persetujuan untuk membangunnya.

## Hal yang sudah disampaikan dalam arahan awal

- Membuat lapisan MCP kecil untuk menyediakan akses ke kemampuan admin tertentu.
- Menghubungkannya ke agen chat; Grokbot menjadi pilihan awal yang direncanakan.
- Membantu pemilik menelusuri laporan, data bisnis, informasi penjualan, dan dokumen OneDrive.
- Proposal harus cepat dibaca, berorientasi hasil, dan tidak terlalu teknis.
- Proposal dan catatan kerja menggunakan Bahasa Indonesia.

## Fokus terbaru dari pemilik

- Laporan sesuai permintaan, cukup melalui chat dari ponsel.
- Ringkasan laporan dibaca langsung dalam percakapan, tanpa membuka aplikasi lain.
- Asisten menyertakan berkas CSV (misal: laporan penjualan harian) yang terlampir rapi di dalam chat untuk kebutuhan analisis mendalam di spreadsheet.
- Pengalaman seperti meminta laporan kepada staf, tetapi bisa diakses kapan saja, 24/7.
- Pemilik dapat menentukan sendiri jadwal dan frekuensi pengiriman laporan.
- Fokus utama bukan pencarian dokumen manual, melainkan laporan terangkum dan berkas CSV yang datang saat dibutuhkan.

## Cara penyampaian yang disarankan

**Pesan utama:** tinggal chat, laporan datang. Atur jadwal Anda; laporan yang mengikuti.

Dahulukan kemudahan meminta dan menerima laporan, bukan penjelasan MCP. Contoh percakapan harus terasa seperti pesan kepada staf. Tampilkan dua cara penggunaan: tanya saat perlu dan terima otomatis sesuai jadwal.

Ringkasan harus hadir di chat; tautan sumber hanya pelengkap untuk pemeriksaan lebih lanjut. Jangan menjadikan pembukaan dashboard atau dokumen sebagai langkah wajib untuk membaca laporan yang didukung.

Akses 24/7 dan pengiriman terjadwal merupakan kebutuhan yang diusulkan, bukan kemampuan Grokbot atau sistem saat ini yang sudah diverifikasi. Jangan menjanjikan tanpa gangguan atau menyamakan akses kapan saja dengan data yang selalu real-time. MCP menyediakan akses data; penjadwalan dan pengiriman proaktif perlu didukung layanan terpisah atau fitur bawaan agen chat.

## Pilihan cakupan

1. **Pencarian informasi admin dan folder OneDrive terpilih — disarankan.** Menguji kedua kebutuhan pemilik tanpa menghubungkan seluruh data.
2. **Pencarian informasi admin saja.** Lebih sederhana, tetapi belum menyelesaikan kebutuhan pencarian dokumen.
3. **Akses luas dan kemampuan mengubah data.** Lebih banyak kemampuan, tetapi risiko dan kerumitannya lebih besar; tunda sampai uji coba akses baca terbukti bermanfaat.

Akses hanya-baca merupakan batasan yang diusulkan, belum menjadi ketentuan yang disetujui pemilik.

## Calon pertanyaan untuk uji coba

| Pertanyaan | Hasil yang diharapkan | Hal yang perlu dipastikan |
| --- | --- | --- |
| Bagaimana penjualan bulan ini dibanding bulan lalu? | Angka yang dapat dibandingkan, rentang tanggal, dan sumber | Definisi penjualan, zona waktu, ketersediaan data, dan cara membandingkan periode yang belum selesai |
| Tagihan mana yang perlu segera ditindaklanjuti? | Nilai tagihan belum lunas, umur atau tanggal jatuh tempo, dan tautan catatan | Perbedaan belum lunas dengan lewat jatuh tempo serta batas hak akses |
| Tolong kirim laporan penjualan hari ini. | Angka utama dan ringkasan langsung di chat, beserta periode dan sumber | Definisi laporan, waktu pembaruan data, dan rincian yang diperlukan pemilik |
| Setiap pagi jam 8, kirim ringkasan penjualan kemarin. | Ringkasan otomatis dalam chat pada jadwal yang disepakati | Zona waktu, dukungan pengiriman proaktif, penerima, serta cara mengubah atau menghentikan jadwal |

Contoh bersifat ilustratif, bukan kemampuan integrasi yang sudah diverifikasi.

## Pertanyaan sebelum memperkirakan biaya dan waktu

- Tiga pertanyaan rutin apa yang paling menyita waktu pemilik saat ini?
- Produk atau penerapan apa yang dimaksud dengan “Grokbot”? Apakah mendukung koneksi MCP dan autentikasi pengguna yang dibutuhkan?
- Fungsi admin mana yang dapat disediakan secara aman untuk pencarian hanya-baca?
- Akun atau tenant Microsoft mana yang menyimpan dokumen OneDrive, dan folder mana yang disetujui?
- Laporan mana yang perlu mengambil isi dokumen OneDrive agar ringkasannya dapat dibaca langsung di chat?
- Apakah Grokbot mendukung penjadwalan dan pengiriman pesan otomatis tanpa pemilik mengirim pesan terlebih dahulu?
- Jadwal, zona waktu, dan penerima mana yang diizinkan? Bagaimana pemilik mengubah atau menghentikan pengiriman?
- Target waktu respons dan ketersediaan layanan apa yang realistis untuk kebutuhan 24/7? Bagaimana kegagalan pengiriman diberitahukan?
- Siapa yang boleh menggunakan asisten, dan hak akses apa yang harus tetap diterapkan?
- Data bisnis apa yang boleh dikirim ke penyedia layanan chat? Bagaimana ketentuan penyimpanan dan penggunaannya untuk pelatihan model?
- Berapa anggaran, waktu pengerjaan, dan biaya layanan rutin yang dapat diterima?

## Usulan kriteria keberhasilan — sepakati sebelum pembangunan

- Pilih tiga laporan prioritas dengan jawaban acuan yang sudah diketahui, serta satu jadwal pengiriman untuk uji coba.
- Ringkasan laporan dapat dibaca langsung dalam chat tanpa membuka aplikasi atau dokumen lain; sumber tersedia sebagai pelengkap.
- Permintaan laporan berhasil diuji di luar jam kerja staf; ukur ketersediaan layanan dan waktu respons terhadap target yang disepakati.
- Laporan otomatis dikirim pada jadwal dan zona waktu yang disepakati, dalam toleransi keterlambatan yang ditentukan sebelum uji coba.
- Pemilik dapat mengubah atau menghentikan jadwal; hak akses penerima diperiksa kembali sebelum setiap pengiriman, dan kegagalan kirim dicatat serta diberitahukan tanpa mengirim laporan ganda.
- Bandingkan waktu pencarian melalui chat dengan cara saat ini; tentukan target setelah waktu awal diukur.
- Jawaban berupa angka sesuai dengan sumber untuk filter, periode laporan, dan definisi bisnis yang sama.
- Jawaban yang berhasil menyertakan tautan catatan/dokumen serta tanggal atau periode yang relevan; informasi yang tidak tersedia dinyatakan secara jelas.
- Permintaan tanpa izin ditolak, termasuk upaya mengakses catatan atau berkas di luar cakupan yang disetujui.
- Tidak ada permintaan chat yang dapat mengubah catatan bisnis atau berkas OneDrive.
- Ketentuan penggunaan data oleh penyedia layanan dan kebijakan pencatatan akses disetujui sebelum data rahasia dihubungkan.

## Batasan untuk pembahasan implementasi

- Terapkan hak akses di penghubung, bukan hanya melalui instruksi chat; jangan berikan akun admin bersama dengan akses tanpa batas.
- Perlakukan isi dokumen sebagai informasi, bukan instruksi yang dapat mengubah izin atau menjalankan tindakan.
- Bedakan data langsung, laporan tersimpan, dan tanggal perubahan dokumen; jangan menyebut semua jawaban sebagai data real-time.
- Sistem admin yang ada tetap tersedia untuk pemeriksaan dan kebutuhan yang belum didukung asisten.

## Panduan isi untuk versi HTML

- Targetkan waktu baca dua menit dan satu halaman saat dicetak.
- Urutan presentasi: alasan berinvestasi → ilustrasi solusi → hasil pilot → persetujuan pendanaan dan penggunaan dana → evaluasi dan batas risiko.
- Simpan catatan teknis dan pertanyaan terbuka di sini, bukan di halaman untuk pemilik.
- Jangan mengarang penghematan, ROI, tanggal penyelesaian, harga, atau jaminan akurasi.
- Gunakan tampilan yang jelas berlabel proposal, bukan komunikasi resmi atau situs yang menyamar sebagai perusahaan.
- Gunakan Bahasa Indonesia sesuai permintaan pengguna.

## Keterbatasan konteks

Lokasi wiki yang diberikan tidak tersedia di lingkungan Linux ini. Belum dilakukan riset eksternal, akses produksi, atau validasi integrasi. Arahan pengguna menjadi sumber utama; README backend lokal memberikan konteks terbatas untuk contoh tagihan. Seluruh kemampuan, biaya, dan waktu pengerjaan masih perlu dipastikan saat penentuan cakupan.
