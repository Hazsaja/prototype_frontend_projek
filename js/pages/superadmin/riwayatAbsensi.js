export function renderRiwayatAbsensi() {
    return `
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 25px;">
            <div>
                <h2 style="font-size: 22px; font-weight: 700; color: var(--primary-dark); margin-bottom: 5px;">Riwayat Absensi</h2>
                <p style="font-size: 13px; color: #6b7280; margin: 0;">Lihat detail riwayat absensi siswa secara lengkap.</p>
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
                        <input type="text" placeholder="Cari log aktivitas..." style="width: 100%; padding: 10px 15px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 13px; outline: none;">
                    </div>
                    <div style="width: 150px;">
                        <select style="width: 100%; padding: 10px 15px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 13px; outline: none; background: #fff; color: var(--primary-dark);">
                            <option>Semua Aktivitas</option>
                        </select>
                    </div>
                </div>
                <div>
                    <span style="display: inline-block; padding: 8px 16px; background: #fef3c7; color: #92400e; border-radius: 8px; font-size: 12px; font-weight: 700;">Tahun Ajaran 2026/2027</span>
                </div>
            </div>

            <!-- Table -->
            <div style="border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
                    <thead style="background: #fef3c7;">
                        <tr>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">TANGGAL</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">NAMA SISWA</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">KELAS</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">MATA PELAJARAN</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${generateRiwayatRow('21 Sep 2025', 'Ahmad Fauzi', '7A', 'Matematika', 'HADIR')}
                        ${generateRiwayatRow('21 Sep 2025', 'Ahmad Fauzi', '7A', 'Matematika', 'HADIR')}
                        ${generateRiwayatRow('21 Sep 2025', 'Ahmad Fauzi', '7A', 'Matematika', 'HADIR')}
                        ${generateRiwayatRow('21 Sep 2025', 'Ahmad Fauzi', '7A', 'Matematika', 'HADIR')}
                        ${generateRiwayatRow('21 Sep 2025', 'Ahmad Fauzi', '7A', 'Matematika', 'HADIR')}
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

function generateRiwayatRow(tanggal, nama, kelas, mapel, status) {
    return `
        <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 16px 20px; font-size: 13px; color: #6b7280;">${tanggal}</td>
            <td style="padding: 16px 20px; font-size: 13px; font-weight: 600; color: var(--primary-dark);">${nama}</td>
            <td style="padding: 16px 20px; font-size: 13px; font-weight: 700; color: var(--primary-blue);">${kelas}</td>
            <td style="padding: 16px 20px; font-size: 13px; color: #6b7280;">${mapel}</td>
            <td style="padding: 16px 20px; font-size: 13px; font-weight: 700; color: #10b981;">${status}</td>
        </tr>
    `;
}
