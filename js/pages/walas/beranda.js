export function renderBeranda() {
    return `
        <div class="card welcome-card">
            <div class="welcome-info">
                <div class="d-flex align-items-center gap-3 mb-4" style="margin-bottom: 10px;">
                    <i class="far fa-clock text-muted"></i>
                    <span class="text-muted" style="font-size: 13px;">Senin, 28 September 2026</span>
                </div>
                <h2>Selamat Datang, Bu Siti Rahmawati!</h2>
                <p>Anda memiliki <strong>3 Sesi Mengajar</strong> Matematika hari ini.</p>
            </div>
            <div class="status-card" style="min-width: 200px;">
                <span class="status-label">STATUS MENGAJAR HARI INI</span>
                <span class="status-value">1/3 Kelas Disubmit</span>
            </div>
        </div>

        <div class="section-header">
            <h3 class="section-title">Jadwal Mengajar Anda Hari Ini</h3>
            <p class="section-subtitle">Pilih kelas untuk menginput atau memperbarui data kehadiran siswa</p>
        </div>

        <div class="class-grid">
            <!-- Kelas 7A -->
            <div class="class-card">
                <div class="class-card-header">
                    <div class="class-card-title">
                        <h3>Kelas 7A</h3>
                        <p>Bahasa Indonesia</p>
                    </div>
                    <span class="badge badge-outline-warning">BELUM DISUBMIT</span>
                </div>
                <div class="class-card-time">
                    <i class="far fa-clock"></i> 07.30 - 09.00 WIB
                </div>
                <button class="btn-yellow">Isi Absensi Sekarang <i class="fas fa-arrow-right ml-2"></i></button>
            </div>

            <!-- Kelas 7B -->
            <div class="class-card">
                <div class="class-card-header">
                    <div class="class-card-title">
                        <h3>Kelas 7B</h3>
                        <p>Bahasa Indonesia</p>
                    </div>
                    <span class="badge badge-outline-warning">BELUM DISUBMIT</span>
                </div>
                <div class="class-card-time">
                    <i class="far fa-clock"></i> 09.15 - 10.45 WIB
                </div>
                <button class="btn-yellow">Isi Absensi Sekarang <i class="fas fa-arrow-right ml-2"></i></button>
            </div>

            <!-- Kelas 7C -->
            <div class="class-card">
                <div class="class-card-header">
                    <div class="class-card-title">
                        <h3>Kelas 7C</h3>
                        <p>Bahasa Indonesia</p>
                    </div>
                    <span class="badge badge-outline-success" style="color: #10b981; border-color: #10b981; background-color: #ecfdf5;">SUDAH DISUBMIT</span>
                </div>
                <div class="class-card-time">
                    <i class="far fa-clock"></i> 11.00 - 12.30 WIB
                </div>
                <button class="btn-primary" style="width: 100%; justify-content: center;"><i class="far fa-edit"></i> Edit Presensi 7A</button>
            </div>
        </div>

        <div class="alert" style="margin-top: 30px;">
            <div class="alert-icon">
                <i class="fas fa-info"></i>
            </div>
            <div class="alert-content">
                <div class="alert-title">Catatan Sistem:</div>
                <div class="alert-desc">Hubungi Operator TU jika terdapat ketidaksesuaian rombel atau nama kelas dengan jadwal kurikulum sekolah.</div>
            </div>
        </div>
    `;
}
