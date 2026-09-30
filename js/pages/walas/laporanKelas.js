export function renderLaporanKelas() {
    return `
        <div class="card" style="margin-bottom: 25px;">
            <div class="report-header">
                <div>
                    <span class="badge" style="background-color: #dcfce7; color: #166534; margin-bottom: 10px; display: inline-block;">Laporan Resmi Wali Kelas</span>
                    <h2 style="font-size: 20px; color: var(--primary-blue); margin-bottom: 5px;">Laporan Rekapitulasi Presensi Siap Cetak</h2>
                    <p style="color: var(--text-muted); font-size: 13px;">Cetak atau ekspor rekap absensi bulanan/semester untuk laporan ke Kepala Sekolah atau Orang Tua Siswa</p>
                </div>
                <div class="d-flex gap-3">
                    <button class="btn-primary" style="background-color: var(--primary-dark);"><i class="fas fa-print"></i> Cetak Laporan</button>
                    <button class="btn-primary" style="background-color: #0d9488;"><i class="fas fa-file-excel"></i> Export Excel</button>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="report-filters">
                <div class="form-group" style="margin-bottom: 0;">
                    <label class="form-label">Periode</label>
                    <select class="form-control">
                        <option>1-30 September 2026</option>
                        <option>Oktober 2026</option>
                    </select>
                </div>
                <div class="form-group" style="margin-bottom: 0;">
                    <label class="form-label">Kelas</label>
                    <select class="form-control">
                        <option>Semua Kelas</option>
                        <option>7A</option>
                        <option>7B</option>
                        <option>7C</option>
                    </select>
                </div>
                <div class="form-group" style="margin-bottom: 0;">
                    <label class="form-label">Mata Pelajaran</label>
                    <select class="form-control">
                        <option>Semua Mata Pelajaran</option>
                        <option>Bahasa Indonesia</option>
                        <option>Matematika</option>
                    </select>
                </div>
                <div class="form-group" style="margin-bottom: 0;">
                    <button class="btn-primary" style="background-color: var(--primary-dark); padding: 10px 30px;">Tampilkan</button>
                </div>
            </div>

            <div class="d-flex justify-content-between align-items-center mb-4 mt-4">
                <h3 style="font-size: 15px; color: var(--primary-blue);">Preview Laporan</h3>
                <div class="d-flex gap-3">
                    <button class="btn-secondary" style="padding: 6px 12px; font-size: 12px;"><i class="far fa-file-pdf"></i> PDF</button>
                    <button class="btn-secondary" style="padding: 6px 12px; font-size: 12px;"><i class="far fa-file-excel"></i> Excel</button>
                    <button class="btn-secondary" style="padding: 6px 12px; font-size: 12px;"><i class="fas fa-print"></i> Cetak</button>
                </div>
            </div>

            <div class="table-container">
                <table class="table">
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>NAMA SISWA</th>
                            <th>KELAS</th>
                            <th>HADIR</th>
                            <th>IZIN</th>
                            <th>SAKIT</th>
                            <th>ALPA</th>
                            <th>PERSENTASE KEHADIRAN</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Siti Aulia</td>
                            <td class="font-bold text-primary" style="color: var(--primary-blue);">7A</td>
                            <td>32</td>
                            <td class="text-success font-bold">0</td>
                            <td class="text-success font-bold">0</td>
                            <td class="text-success font-bold">0</td>
                            <td>100.0%</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Budi Doremi</td>
                            <td class="font-bold text-primary" style="color: var(--primary-blue);">7B</td>
                            <td>30</td>
                            <td class="text-warning font-bold">1</td>
                            <td class="text-primary font-bold">1</td>
                            <td class="text-success font-bold">0</td>
                            <td>95.0%</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Raka Pratama</td>
                            <td class="font-bold text-primary" style="color: var(--primary-blue);">7C</td>
                            <td>31</td>
                            <td class="text-success font-bold">0</td>
                            <td class="text-success font-bold">0</td>
                            <td class="text-warning font-bold">1</td>
                            <td>98.0%</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Salsa Amelia</td>
                            <td class="font-bold text-primary" style="color: var(--primary-blue);">7A</td>
                            <td>32</td>
                            <td class="text-success font-bold">0</td>
                            <td class="text-success font-bold">0</td>
                            <td class="text-success font-bold">0</td>
                            <td>100%</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Fajar Ramadhan</td>
                            <td class="font-bold text-primary" style="color: var(--primary-blue);">8A</td>
                            <td>30</td>
                            <td class="text-success font-bold">0</td>
                            <td class="text-primary font-bold">1</td>
                            <td class="text-warning font-bold">1</td>
                            <td>95.0%</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="pagination-container">
                <div>Menampilkan 1-5 dari 120 rekap absensi</div>
                <div class="pagination">
                    <div class="page-item disabled"><i class="fas fa-chevron-left"></i></div>
                    <div class="page-item active" style="background-color: var(--primary-dark); border-color: var(--primary-dark);">1</div>
                    <div class="page-item">2</div>
                    <div class="page-item"><i class="fas fa-chevron-right"></i></div>
                </div>
            </div>
        </div>
    `;
}
