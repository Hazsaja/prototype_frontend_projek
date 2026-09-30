export function renderValidasiAbsen() {
    return `
        <div class="page-header" style="margin-bottom: 25px;">
            <span class="badge badge-outline-warning" style="background-color: #fffbeb; margin-bottom: 15px;">Hak Akses Wali Kelas</span>
            <div class="page-header-actions">
                <div>
                    <h2>Validasi & Koreksi Presensi Siswa</h2>
                    <p>Tinjau pengajuan surat izin/sakit dari wali murid dan selesaikan koreksi ketidaksesuaian absensi dari Guru Mapel</p>
                </div>
                <div class="badge badge-pending" style="padding: 8px 16px; font-size: 13px; border-radius: 20px; font-weight: 600;">
                    <i class="far fa-clock"></i> 2 Pending Validasi
                </div>
            </div>
        </div>

        <div class="validation-grid">
            <div class="validation-card">
                <div class="validation-header">
                    <div class="validation-avatar"><i class="fas fa-user"></i></div>
                    <div>
                        <h3 style="font-size: 16px; color: var(--primary-blue); font-weight: 700;">Budi Setiawan</h3>
                        <p style="font-size: 13px; color: var(--text-muted);">NIS: 260401 - Kelas: 7A</p>
                    </div>
                </div>
                <div class="validation-details">
                    <div class="detail-row">
                        <span class="detail-label">Tanggal Izin:</span>
                        <span class="detail-value">19, September 2026</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Status Awal Mapel:</span>
                        <span class="badge badge-alpha">Alpa - IPA</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Pengajuan Koreksi:</span>
                        <span class="badge badge-sakit">Sakit dengan Surat</span>
                    </div>
                    <div class="validation-note">
                        "Mohon maaf Bu haji, Budi demam sejak pagi. Surat dokter terlampir dari klinik Selamet."
                    </div>
                </div>
                <div class="validation-actions">
                    <button class="btn-secondary" style="justify-content: center; width: 100%;"><i class="fas fa-envelope-open-text"></i> Lihat Surat</button>
                    <button class="btn-primary btn-success" style="justify-content: center; width: 100%;">Validasi dan Simpan</button>
                </div>
            </div>

            <div class="validation-card">
                <div class="validation-header">
                    <div class="validation-avatar"><i class="fas fa-user"></i></div>
                    <div>
                        <h3 style="font-size: 16px; color: var(--primary-blue); font-weight: 700;">Budi Setiawan</h3>
                        <p style="font-size: 13px; color: var(--text-muted);">NIS: 260401 - Kelas: 7A</p>
                    </div>
                </div>
                <div class="validation-details">
                    <div class="detail-row">
                        <span class="detail-label">Tanggal Izin:</span>
                        <span class="detail-value">19, September 2026</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Status Awal Mapel:</span>
                        <span class="badge badge-alpha">Alpa - IPA</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Pengajuan Koreksi:</span>
                        <span class="badge badge-sakit">Sakit dengan Surat</span>
                    </div>
                    <div class="validation-note">
                        "Mohon maaf Bu haji, Budi demam sejak pagi. Surat dokter terlampir dari klinik Selamet."
                    </div>
                </div>
                <div class="validation-actions">
                    <button class="btn-secondary" style="justify-content: center; width: 100%;"><i class="fas fa-envelope-open-text"></i> Lihat Surat</button>
                    <button class="btn-primary btn-success" style="justify-content: center; width: 100%;">Validasi dan Simpan</button>
                </div>
            </div>
        </div>

        <div class="card">
            <h3 style="font-size: 14px; color: var(--primary-blue); font-weight: 700; margin-bottom: 20px;">Riwayat Koreksi Presensi Terakhir</h3>
            <div class="table-container">
                <table class="table">
                    <thead>
                        <tr style="background-color: #fffbeb;">
                            <th>NO</th>
                            <th>Tanggal</th>
                            <th>Nama Siswa</th>
                            <th>Status Sebelum</th>
                            <th>Status Diubah Ke</th>
                            <th>Alasan Koreksi</th>
                            <th>Status Validasi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>19, September 2026</td>
                            <td>Budi Setiawan</td>
                            <td><span class="badge badge-alpha" style="padding: 4px 10px; border-radius: 6px;">Alpa</span></td>
                            <td><span class="badge badge-sakit" style="padding: 4px 10px; border-radius: 6px;">Sakit</span></td>
                            <td>Surat Dokter susulan<br>diserahkan ortu</td>
                            <td><span class="badge badge-verified" style="padding: 4px 10px; border-radius: 6px;">Terverifikasi</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
}
