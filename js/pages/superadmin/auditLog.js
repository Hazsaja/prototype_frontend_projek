export function renderAuditLog() {
    return `
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 25px;">
            <div>
                <h2 style="font-size: 22px; font-weight: 700; color: var(--primary-dark); margin-bottom: 5px;">Log Aktivitas Sistem</h2>
                <p style="font-size: 13px; color: #6b7280; margin: 0;">Laporan rekam jejak aktivitas operasional pengguna pada sistem AbsenKu.</p>
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
            <div style="border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse; text-align: left; min-width: 900px;">
                    <thead style="background: #fef3c7;">
                        <tr>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">NO</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">WAKTU</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">USER</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">ROLE</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">AKTIVITAS</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">DETAIL</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase; text-align: right;">IP ADDRESS</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${generateAuditRow(1, '2026-09-23 07:45', 'Bu Siti Rahmawati', 'Guru', 'Login', 'Berhasil masuk ke sistem', '192.168.1.10')}
                        ${generateAuditRow(2, '2026-09-23 08:02', 'Bu Siti Rahmawati', 'Guru', 'Submit Absensi', 'Kelas 7A - Bahasa Indonesia', '192.168.1.10')}
                        ${generateAuditRow(3, '2026-09-23 08:15', 'Admin Sekolah', 'Super Admin', 'Edit Siswa', 'Mengubah data Aditya Pratama', '192.168.1.1')}
                        ${generateAuditRow(4, '2026-09-23 09:20', 'Pak Ahmad Faisal', 'Guru', 'Login', 'Berhasil masuk ke sistem', '192.168.1.15')}
                        ${generateAuditRow(5, '2026-09-23 09:30', 'Pak Ahmad Faisal', 'Guru', 'Submit Absensi', 'Kelas 7A - Matematika', '192.168.1.15')}
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
                <span style="font-size: 12px; color: #6b7280;">Menampilkan 1-5 dari 1,420 baris log</span>
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

function generateAuditRow(no, waktu, user, role, aktivitas, detail, ip) {
    const rolePill = role === 'Super Admin' 
        ? '<span style="display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 600; background: #dcfce7; color: #166534;">Super Admin</span>'
        : '<span style="display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 600; background: #eff6ff; color: #1d4ed8;">Guru</span>';
        
    return `
        <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 16px 20px; font-size: 13px; color: #6b7280;">${no}</td>
            <td style="padding: 16px 20px; font-size: 13px; color: #6b7280;">${waktu}</td>
            <td style="padding: 16px 20px; font-size: 13px; font-weight: 700; color: var(--primary-blue);">${user}</td>
            <td style="padding: 16px 20px;">${rolePill}</td>
            <td style="padding: 16px 20px; font-size: 13px; font-weight: 600; color: var(--primary-dark);">${aktivitas}</td>
            <td style="padding: 16px 20px; font-size: 13px; color: #6b7280;">${detail}</td>
            <td style="padding: 16px 20px; font-size: 13px; color: #9ca3af; text-align: right;">${ip}</td>
        </tr>
    `;
}
