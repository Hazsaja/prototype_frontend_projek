export function renderLaporan() {
    return `
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 25px;">
            <div>
                <h2 style="font-size: 22px; font-weight: 700; color: var(--primary-dark); margin-bottom: 5px;">Laporan</h2>
                <p style="font-size: 13px; color: #6b7280; margin: 0;">Lihat dan unduh laporan absensi berdasarkan periode yang diinginkan.</p>
            </div>
        </div>

        <!-- Main Content -->
        <div class="card" style="padding: 25px 30px;">
            <!-- Filters -->
            <div style="display: flex; gap: 20px; align-items: flex-end; margin-bottom: 30px; border-bottom: 1px solid #e5e7eb; padding-bottom: 25px;">
                <div style="flex: 1;">
                    <label style="display: block; font-size: 13px; font-weight: 600; color: var(--primary-dark); margin-bottom: 8px;">Periode</label>
                    <select style="width: 100%; padding: 12px 15px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 13px; outline: none; background: #fff; color: var(--primary-dark);">
                        <option>1-30 September 2025</option>
                    </select>
                </div>
                <div style="flex: 1;">
                    <label style="display: block; font-size: 13px; font-weight: 600; color: var(--primary-dark); margin-bottom: 8px;">Kelas</label>
                    <select style="width: 100%; padding: 12px 15px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 13px; outline: none; background: #fff; color: var(--primary-dark);">
                        <option>Semua Kelas</option>
                    </select>
                </div>
                <div style="flex: 2;">
                    <label style="display: block; font-size: 13px; font-weight: 600; color: var(--primary-dark); margin-bottom: 8px;">Mata Pelajaran</label>
                    <select style="width: 100%; padding: 12px 15px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 13px; outline: none; background: #fff; color: var(--primary-dark);">
                        <option>Semua Mata Pelajaran</option>
                    </select>
                </div>
                <div>
                    <button style="padding: 12px 30px; background: var(--primary-dark); color: #fff; border: none; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer;">Tampilkan</button>
                </div>
            </div>

            <!-- Preview Header -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h3 style="font-size: 16px; font-weight: 700; color: var(--primary-dark); margin: 0;">Preview Laporan</h3>
                <div style="display: flex; gap: 10px;">
                    <button style="display: flex; align-items: center; gap: 8px; padding: 8px 16px; background: #fff; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 12px; font-weight: 600; color: var(--primary-dark); cursor: pointer;">
                        <i class="far fa-file-pdf"></i> PDF
                    </button>
                    <button style="display: flex; align-items: center; gap: 8px; padding: 8px 16px; background: #fff; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 12px; font-weight: 600; color: var(--primary-dark); cursor: pointer;">
                        <i class="far fa-file-excel"></i> Excel
                    </button>
                    <button style="display: flex; align-items: center; gap: 8px; padding: 8px 16px; background: #fff; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 12px; font-weight: 600; color: var(--primary-dark); cursor: pointer;">
                        <i class="fas fa-print"></i> Cetak
                    </button>
                </div>
            </div>

            <!-- Table -->
            <div style="border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
                    <thead style="background: #fef3c7;">
                        <tr>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">NO</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">NAMA SISWA</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">KELAS</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">HADIR</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">IZIN</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">SAKIT</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">ALPA</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">PERSENTASE KEHADIRAN</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${generateLaporanRow(1, 'Siti Aulia', '7A', 32, 0, 0, 0, '100.0%')}
                        ${generateLaporanRow(2, 'Budi Doremi', '7B', 30, 1, 1, 0, '95.0%')}
                        ${generateLaporanRow(3, 'Raka Pratama', '7C', 31, 0, 0, 1, '98.0%')}
                        ${generateLaporanRow(4, 'Salsa Amelia', '7A', 32, 0, 0, 0, '100%')}
                        ${generateLaporanRow(5, 'Fajar Ramadhan', '8A', 30, 0, 1, 1, '95.0%')}
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
                <span style="font-size: 12px; color: #6b7280;">Menampilkan 1-5 dari 120 rekap absensi</span>
                <div style="display: flex; gap: 5px;">
                    <button style="width: 30px; height: 30px; border: none; background: transparent; color: #6b7280; cursor: pointer; font-size: 12px;">&lt;</button>
                    <button style="width: 30px; height: 30px; border: none; background: var(--primary-dark); color: #fff; border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer;">1</button>
                    <button style="width: 30px; height: 30px; border: 1px solid #e5e7eb; background: #fff; color: #6b7280; border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer;">2</button>
                    <button style="width: 30px; height: 30px; border: none; background: transparent; color: #6b7280; cursor: pointer; font-size: 12px;">&gt;</button>
                </div>
            </div>
        </div>
    `;
}

function generateLaporanRow(no, nama, kelas, hadir, izin, sakit, alpa, persen) {
    return `
        <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 16px 20px; font-size: 13px; color: #6b7280;">${no}</td>
            <td style="padding: 16px 20px; font-size: 13px; color: #6b7280;">${nama}</td>
            <td style="padding: 16px 20px; font-size: 13px; font-weight: 700; color: var(--primary-blue);">${kelas}</td>
            <td style="padding: 16px 20px; font-size: 13px; color: #6b7280;">${hadir}</td>
            <td style="padding: 16px 20px; font-size: 13px; font-weight: 600; color: ${izin > 0 ? '#10b981' : '#6b7280'};">${izin}</td>
            <td style="padding: 16px 20px; font-size: 13px; font-weight: 600; color: ${sakit > 0 ? '#10b981' : '#6b7280'};">${sakit}</td>
            <td style="padding: 16px 20px; font-size: 13px; font-weight: 600; color: ${alpa > 0 ? '#f59e0b' : '#6b7280'};">${alpa}</td>
            <td style="padding: 16px 20px; font-size: 13px; color: #6b7280;">${persen}</td>
        </tr>
    `;
}
