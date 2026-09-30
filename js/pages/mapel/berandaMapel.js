export function renderBerandaMapel() {
    return `
        <div class="page-header" style="margin-bottom: 25px;">
            <h2 style="font-size: 22px; color: var(--primary-blue); font-weight: 700; margin-bottom: 5px;">Beranda Kelas</h2>
            <p style="color: var(--text-muted); font-size: 13px;">Selamat pagi, Bu Siti! Ambil absensi hari ini dengan cepat.</p>
        </div>

        <div class="card" style="margin-bottom: 25px; padding: 25px;">
            <h3 style="font-size: 18px; color: var(--primary-dark); font-weight: 700; margin-bottom: 10px;">SMPN 1 Tirtajaya — Presensi Digital Mandiri</h3>
            <p style="color: var(--text-muted); font-size: 14px; max-width: 800px; line-height: 1.5;">Gunakan aplikasi AbsenKu untuk melaporkan tingkat kehadiran siswa setiap hari. Mohon selesaikan pelaporan absensi mata pelajaran Bahasa Indonesia sebelum jam sekolah berakhir.</p>
        </div>

        <div class="section-header" style="margin-bottom: 20px;">
            <h3 class="section-title" style="font-size: 16px; font-weight: 700; color: var(--primary-dark); margin-bottom: 5px;">Jadwal Mengajar Anda Hari Ini</h3>
            <p class="section-subtitle" style="color: var(--text-muted); font-size: 13px;">Selasa, 23 September 2026</p>
        </div>

        <div class="class-grid" style="grid-template-columns: repeat(3, 1fr); margin-bottom: 25px;">
            <!-- Kelas 7A -->
            <div class="class-card" style="border: 1px solid var(--border-color); box-shadow: none; display: flex; flex-direction: column;">
                <div class="class-card-header" style="border-bottom: 1px solid var(--border-color); padding-bottom: 15px; margin-bottom: 20px; align-items: center;">
                    <div class="class-card-title" style="margin-bottom: 0;">
                        <h3 style="font-size: 22px; font-weight: 700; color: var(--primary-dark);">Kelas 7A</h3>
                        <p style="font-size: 13px;">Bahasa Indonesia</p>
                    </div>
                    <span class="badge" style="color: #d97706; border: 1px solid #fcd34d; background-color: white; font-weight: 600; padding: 4px 10px; font-size: 10px;">BELUM DISUBMIT</span>
                </div>
                <div class="class-card-time" style="margin-bottom: 25px; font-size: 13px; font-weight: 500;">
                    <i class="far fa-clock" style="margin-right: 5px;"></i> 07.30 - 09.00 WIB
                </div>
                <button class="btn-primary" style="width: 100%; justify-content: center; background-color: var(--accent-yellow); color: var(--primary-dark); font-weight: 600; border: none; margin-top: auto;">
                    Isi Absensi Sekarang <i class="fas fa-arrow-right ml-2"></i>
                </button>
            </div>

            <!-- Kelas 7B -->
            <div class="class-card" style="border: 1px solid var(--border-color); box-shadow: none; display: flex; flex-direction: column;">
                <div class="class-card-header" style="border-bottom: 1px solid var(--border-color); padding-bottom: 15px; margin-bottom: 20px; align-items: center;">
                    <div class="class-card-title" style="margin-bottom: 0;">
                        <h3 style="font-size: 22px; font-weight: 700; color: var(--primary-dark);">Kelas 7B</h3>
                        <p style="font-size: 13px;">Bahasa Indonesia</p>
                    </div>
                    <span class="badge" style="color: #d97706; border: 1px solid #fcd34d; background-color: white; font-weight: 600; padding: 4px 10px; font-size: 10px;">BELUM DISUBMIT</span>
                </div>
                <div class="class-card-time" style="margin-bottom: 25px; font-size: 13px; font-weight: 500;">
                    <i class="far fa-clock" style="margin-right: 5px;"></i> 09.15 - 10.45 WIB
                </div>
                <button class="btn-primary" style="width: 100%; justify-content: center; background-color: var(--accent-yellow); color: var(--primary-dark); font-weight: 600; border: none; margin-top: auto;">
                    Isi Absensi Sekarang <i class="fas fa-arrow-right ml-2"></i>
                </button>
            </div>

            <!-- Kelas 7C -->
            <div class="class-card" style="border: 1px solid var(--border-color); box-shadow: none; display: flex; flex-direction: column;">
                <div class="class-card-header" style="border-bottom: 1px solid var(--border-color); padding-bottom: 15px; margin-bottom: 20px; align-items: center;">
                    <div class="class-card-title" style="margin-bottom: 0;">
                        <h3 style="font-size: 22px; font-weight: 700; color: var(--primary-dark);">Kelas 7C</h3>
                        <p style="font-size: 13px;">Bahasa Indonesia</p>
                    </div>
                    <span class="badge" style="color: #10b981; border: 1px solid #6ee7b7; background-color: #ecfdf5; font-weight: 600; padding: 4px 10px; font-size: 10px;">SUDAH DISUBMIT</span>
                </div>
                <div class="class-card-time" style="margin-bottom: 25px; font-size: 13px; font-weight: 500;">
                    <i class="far fa-clock" style="margin-right: 5px;"></i> 11.00 - 12.30 WIB
                </div>
                <button class="btn-primary" style="width: 100%; justify-content: center; background-color: var(--primary-dark); color: white; font-weight: 600; border: none; margin-top: auto;">
                    Lihat Presensi <i class="fas fa-arrow-right ml-2"></i>
                </button>
            </div>
        </div>

        <div class="card" style="background-color: #fdfbf7; border: 1px solid #f9eed4; padding: 20px; display: flex; align-items: center; gap: 15px;">
            <div style="width: 36px; height: 36px; border-radius: 50%; background-color: #fcebc5; color: #d97706; display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0;">
                <i class="fas fa-info"></i>
            </div>
            <div>
                <div style="font-weight: 700; font-size: 13px; color: var(--primary-dark); margin-bottom: 3px;">Catatan Sistem:</div>
                <div style="font-size: 13px; color: var(--text-muted);">Hubungi Operator TU jika terdapat ketidaksesuaian rombel atau nama kelas dengan jadwal kurikulum sekolah.</div>
            </div>
        </div>
    `;
}
