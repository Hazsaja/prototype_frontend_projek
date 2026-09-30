export function renderJadwalKelas() {
    return `
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 25px;">
            <div>
                <h2 style="font-size: 22px; font-weight: 700; color: var(--primary-dark); margin-bottom: 5px;">Jadwal Mata Pelajaran</h2>
                <p style="font-size: 13px; color: #6b7280; margin: 0;">Kelola dan atur jadwal kegiatan belajar mengajar berdasarkan kelas dan ruang.</p>
            </div>
            <div style="display: flex; gap: 10px;">
                <button style="font-size: 12px; font-weight: 600; color: var(--primary-dark); background: transparent; border: none; cursor: pointer;">DATA CONTOH</button>
                <button id="btn-tambah-jadwal-kelas" style="display: flex; align-items: center; gap: 8px; padding: 10px 20px; background: var(--primary-dark); color: #fff; border: none; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer;">
                    <i class="fas fa-plus" style="font-size: 12px;"></i> Tambah Jadwal
                </button>
            </div>
        </div>

        <!-- List Section -->
        <div class="card" style="padding: 25px 30px;">
            <!-- Filters -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <div style="display: flex; gap: 15px; align-items: center; flex: 1;">
                    <div style="width: 300px;">
                        <input type="text" placeholder="Cari jadwal kelas..." style="width: 100%; padding: 10px 15px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 13px; outline: none;">
                    </div>
                    <div style="width: 150px;">
                        <select style="width: 100%; padding: 10px 15px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 13px; outline: none; background: #fff; color: var(--primary-dark);">
                            <option>Semua Hari</option>
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
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">NO</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">KELAS</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">MATA PELAJARAN</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">GURU</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">HARI</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">JAM MULAI</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">JAM SELESAI</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase; text-align: right;">AKSI</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${generateJadwalRow(1, '7A', 'Bahasa Indonesia', 'Bu Siti Rahmawati S.Pd', 'Senin', '07:30', '09:00')}
                        ${generateJadwalRow(2, '7A', 'Matematika', 'Pak Ahmad Faisal S.Pd', 'Senin', '09:15', '10:45')}
                        ${generateJadwalRow(3, '7B', 'Bahasa Indonesia', 'Bu Siti Rahmawati S.Pd', 'Selasa', '07:30', '09:00')}
                        ${generateJadwalRow(4, '7B', 'IPA', 'Bu Dewi Lestari S.Pd', 'Selasa', '09:15', '10:45')}
                        ${generateJadwalRow(5, '7C', 'Bahasa Inggris', 'Pak Budi Santoso S.Pd', 'Rabu', '07:30', '09:00')}
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
                <span style="font-size: 12px; color: #6b7280;">Menampilkan 1-5 dari 24 data jadwal</span>
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

function generateJadwalRow(no, kelas, mapel, guru, hari, mulai, selesai) {
    return `
        <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 16px 20px; font-size: 13px; color: #6b7280;">${no}</td>
            <td style="padding: 16px 20px; font-size: 13px; font-weight: 700; color: var(--primary-blue);">${kelas}</td>
            <td style="padding: 16px 20px; font-size: 13px; font-weight: 600; color: var(--primary-dark);">${mapel}</td>
            <td style="padding: 16px 20px; font-size: 13px; color: #6b7280;">${guru}</td>
            <td style="padding: 16px 20px; font-size: 13px; color: #6b7280;">${hari}</td>
            <td style="padding: 16px 20px; font-size: 13px; color: #6b7280;">${mulai}</td>
            <td style="padding: 16px 20px; font-size: 13px; color: #6b7280;">${selesai}</td>
            <td style="padding: 16px 20px; text-align: right;">
                <div style="display: flex; justify-content: flex-end; gap: 8px;">
                    <button class="btn-edit-jadwal-kelas" style="padding: 6px 14px; background: #fff; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 12px; font-weight: 600; color: var(--primary-dark); cursor: pointer;">Edit</button>
                    <button style="padding: 6px 14px; background: #fef2f2; border: 1px solid #fca5a5; border-radius: 6px; font-size: 12px; font-weight: 600; color: #dc2626; cursor: pointer;">Hapus</button>
                </div>
            </td>
        </tr>
    `;
}
