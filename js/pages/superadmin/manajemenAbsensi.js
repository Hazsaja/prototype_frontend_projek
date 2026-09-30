export function renderManajemenAbsensi() {
    return `
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 25px;">
            <div>
                <h2 style="font-size: 22px; font-weight: 700; color: var(--primary-dark); margin-bottom: 5px;">Monitoring Absensi</h2>
                <p style="font-size: 13px; color: #6b7280; margin: 0;">Memonitoring status absensi harian kelas yang di-submit oleh guru mata pelajaran.</p>
            </div>
            <div>
                <button style="font-size: 12px; font-weight: 600; color: var(--primary-dark); background: transparent; border: none; cursor: pointer;">DATA CONTOH</button>
            </div>
        </div>

        <!-- List Section -->
        <div class="card" style="padding: 25px 30px;">
            <!-- Filters -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <div style="display: flex; gap: 15px; align-items: center; flex: 1;">
                    <div style="width: 300px;">
                        <input type="text" placeholder="Cari data absensi..." style="width: 100%; padding: 10px 15px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 13px; outline: none;">
                    </div>
                    <div style="width: 150px;">
                        <select style="width: 100%; padding: 10px 15px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 13px; outline: none; background: #fff; color: var(--primary-dark);">
                            <option>Semua Kelas</option>
                        </select>
                    </div>
                </div>
                <div>
                    <span style="display: inline-block; padding: 8px 16px; background: #fef3c7; color: #92400e; border-radius: 8px; font-size: 12px; font-weight: 700;">Tahun Ajaran 2026/2027</span>
                </div>
            </div>

            <!-- Table -->
            <div style="border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; text-align: left; min-width: 900px;">
                    <thead style="background: #fef3c7;">
                        <tr>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">NO</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">KELAS</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">MATA PELAJARAN</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">GURU</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">TANGGAL</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">TOTAL SISWA</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">HADIR</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">IZIN</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">SAKIT</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">ALPA</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">STATUS</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase; text-align: right;">AKSI</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${generateAbsensiRow(1, '7A', 'Bahasa Indonesia', 'Bu Siti Rahmawati', '2026-09-23', 32, 30, 1, 1, 0, 'Sudah Disubmit', 'success')}
                        ${generateAbsensiRow(2, '7B', 'Bahasa Indonesia', 'Bu Siti Rahmawati', '2026-09-23', 30, 26, 4, 0, 0, 'Sudah Disubmit', 'success')}
                        ${generateAbsensiRow(3, '7C', 'Bahasa Indonesia', 'Bu Siti Rahmawati', '2026-09-23', 31, 27, 0, 4, 0, 'Sudah Disubmit', 'success')}
                        ${generateAbsensiRow(4, '7A', 'Matematika', 'Pak Ahmad Faisal', '2026-09-23', 32, 32, 0, 0, 0, 'Sudah Disubmit', 'success')}
                        ${generateAbsensiRow(5, '8A', 'IPA', 'Bu Dewi Lestari', '2026-09-23', 30, 28, 1, 1, 0, 'Belum Disubmit', 'warning')}
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

function generateAbsensiRow(no, kelas, mapel, guru, tanggal, total, hadir, izin, sakit, alpa, status, statusType) {
    const statusStyles = {
        'success': 'background: #e8f5e9; color: #2e7d32;',
        'warning': 'background: #fef3c7; color: #d97706;'
    };
    
    return `
        <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 16px 20px; font-size: 13px; color: #6b7280;">${no}</td>
            <td style="padding: 16px 20px; font-size: 13px; font-weight: 700; color: var(--primary-blue);">${kelas}</td>
            <td style="padding: 16px 20px; font-size: 13px; font-weight: 600; color: var(--primary-dark);">${mapel}</td>
            <td style="padding: 16px 20px; font-size: 13px; color: #6b7280;">${guru}</td>
            <td style="padding: 16px 20px; font-size: 13px; color: #6b7280;">${tanggal}</td>
            <td style="padding: 16px 20px; font-size: 13px; color: #6b7280;">${total}</td>
            <td style="padding: 16px 20px; font-size: 13px; font-weight: 600; color: #10b981;">${hadir}</td>
            <td style="padding: 16px 20px; font-size: 13px; font-weight: 600; color: ${izin > 0 ? '#10b981' : '#6b7280'};">${izin}</td>
            <td style="padding: 16px 20px; font-size: 13px; font-weight: 600; color: ${sakit > 0 ? '#f59e0b' : '#6b7280'};">${sakit}</td>
            <td style="padding: 16px 20px; font-size: 13px; font-weight: 600; color: ${alpa > 0 ? '#ef4444' : '#6b7280'};">${alpa}</td>
            <td style="padding: 16px 20px;">
                <span style="display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 600; ${statusStyles[statusType]}">${status}</span>
            </td>
            <td style="padding: 16px 20px; text-align: right;">
                <button style="padding: 6px 14px; background: #fff; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 12px; font-weight: 600; color: var(--primary-dark); cursor: pointer;">Detail</button>
            </td>
        </tr>
    `;
}
