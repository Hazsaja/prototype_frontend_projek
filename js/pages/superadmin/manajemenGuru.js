export function renderManajemenGuru() {
    return `
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 25px;">
            <div>
                <h2 style="font-size: 22px; font-weight: 700; color: var(--primary-dark); margin-bottom: 5px;">Data Guru</h2>
                <p style="font-size: 13px; color: #6b7280; margin: 0;">Kelola data, mata pelajaran, dan status akun guru SMPN 1 Tirtajaya.</p>
            </div>
            <div style="display: flex; gap: 10px;">
                <button style="font-size: 12px; font-weight: 600; color: var(--primary-dark); background: transparent; border: none; cursor: pointer;">DATA CONTOH</button>
                <button id="btn-tambah-guru" style="display: flex; align-items: center; gap: 8px; padding: 10px 20px; background: var(--primary-dark); color: #fff; border: none; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer;">
                    <i class="fas fa-plus" style="font-size: 12px;"></i> Tambah Guru
                </button>
            </div>
        </div>

        <!-- Summary Cards -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 25px;">
            <!-- Total Guru -->
            <div style="background: #fff; border-radius: 12px; padding: 22px 24px; border: 1px solid #e5e7eb; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: var(--primary-blue);"></div>
                <div style="font-size: 11px; color: #6b7280; font-weight: 600; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px;">TOTAL GURU</div>
                <div style="font-size: 32px; font-weight: 800; color: var(--primary-dark); margin-bottom: 5px;">56</div>
                <div style="font-size: 12px; color: #9ca3af;">Tahun ajaran 2026/2027</div>
            </div>
            <!-- Guru Aktif -->
            <div style="background: #fff; border-radius: 12px; padding: 22px 24px; border: 1px solid #e5e7eb; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: #34d399;"></div>
                <div style="font-size: 11px; color: #6b7280; font-weight: 600; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px;">GURU AKTIF</div>
                <div style="font-size: 32px; font-weight: 800; color: var(--primary-dark); margin-bottom: 5px;">52</div>
                <div style="font-size: 12px; color: #9ca3af;">Akun dapat digunakan</div>
            </div>
            <!-- Perlu Verifikasi -->
            <div style="background: #fff; border-radius: 12px; padding: 22px 24px; border: 1px solid #e5e7eb; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: #fbbf24;"></div>
                <div style="font-size: 11px; color: #6b7280; font-weight: 600; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px;">PERLU VERIFIKASI</div>
                <div style="font-size: 32px; font-weight: 800; color: var(--primary-dark); margin-bottom: 5px;">4</div>
                <div style="font-size: 12px; color: #9ca3af;">Periksa kelengkapan data</div>
            </div>
        </div>

        <!-- List Section -->
        <div class="card" style="padding: 25px 30px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h3 style="font-size: 16px; font-weight: 700; color: var(--primary-dark); margin: 0;">Daftar Guru</h3>
                <span style="font-size: 12px; color: #6b7280;">5 data ditampilkan dari 56 guru</span>
            </div>

            <!-- Filters -->
            <div style="display: flex; gap: 15px; margin-bottom: 20px; align-items: flex-end;">
                <div style="flex: 2;">
                    <input type="text" placeholder="Cari nama atau NIP guru..." style="width: 100%; padding: 10px 15px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 13px; outline: none;">
                </div>
                <div style="flex: 1;">
                    <label style="display: block; font-size: 12px; font-weight: 600; color: var(--primary-dark); margin-bottom: 5px;">Kelas</label>
                    <select style="width: 100%; padding: 10px 15px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 13px; outline: none; background: #fff; color: var(--primary-dark);">
                        <option>Semua Mapel</option>
                    </select>
                </div>
                <div style="flex: 1;">
                    <label style="display: block; font-size: 12px; font-weight: 600; color: var(--primary-dark); margin-bottom: 5px;">Mata Pelajaran</label>
                    <select style="width: 100%; padding: 10px 15px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 13px; outline: none; background: #fff; color: var(--primary-dark);">
                        <option>Semua Status</option>
                    </select>
                </div>
                <div>
                    <button style="padding: 10px 25px; background: var(--primary-dark); color: #fff; border: none; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer;">Tampilkan</button>
                </div>
            </div>

            <!-- Table -->
            <div style="border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
                    <thead style="background: #fef3c7;">
                        <tr>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">NO</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">NAMA GURU / NIP</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">MATA PELAJARAN</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">KELAS</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">STATUS</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase; text-align: right;">AKSI</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${generateGuruRow(1, 'Bu Siti Rahmawati', 'NIP. 19840212...', 'Bahasa Indonesia', '7A, 8A', 'Aktif', 'success')}
                        ${generateGuruRow(2, 'Budi Santoso', 'NIP. 19790518...', 'Matematika', '7A, 7B', 'Aktif', 'success')}
                        ${generateGuruRow(3, 'Sari Wulandari', 'NIP. 19871103...', 'IPA', '7B, 8A', 'Aktif', 'success')}
                        ${generateGuruRow(4, 'Eko Prasetyo', 'NIP. 19830921...', 'IPS', '8B, 9A', 'Perlu verifikasi', 'warning')}
                        ${generateGuruRow(5, 'Rina Puspitasari', 'NIP. 19901206...', 'Bahasa Inggris', '7C, 8C', 'Aktif', 'success')}
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
                <span style="font-size: 12px; color: #6b7280;">Menampilkan 1-5 dari 56 guru</span>
                <div style="display: flex; gap: 5px;">
                    <button style="width: 30px; height: 30px; border: none; background: transparent; color: #6b7280; cursor: pointer; font-size: 12px;">&lt;</button>
                    <button style="width: 30px; height: 30px; border: none; background: var(--primary-dark); color: #fff; border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer;">1</button>
                    <button style="width: 30px; height: 30px; border: 1px solid #e5e7eb; background: #fff; color: #6b7280; border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer;">2</button>
                    <button style="width: 30px; height: 30px; border: 1px solid #e5e7eb; background: #fff; color: #6b7280; border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer;">3</button>
                    <span style="display: inline-flex; align-items: center; justify-content: center; width: 30px; height: 30px; color: #6b7280; font-size: 12px;">...</span>
                    <button style="width: 30px; height: 30px; border: 1px solid #e5e7eb; background: #fff; color: #6b7280; border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer;">12</button>
                    <button style="width: 30px; height: 30px; border: none; background: transparent; color: #6b7280; cursor: pointer; font-size: 12px;">&gt;</button>
                </div>
            </div>
        </div>
    `;
}

function generateGuruRow(no, name, nip, mapel, kelas, status, statusType) {
    const statusStyles = {
        'success': 'background: #e8f5e9; color: #2e7d32;',
        'warning': 'background: #fef3c7; color: #d97706;'
    };
    
    return `
        <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 16px 20px; font-size: 13px; color: #6b7280;">${no}</td>
            <td style="padding: 16px 20px;">
                <div style="font-size: 13px; font-weight: 600; color: var(--primary-dark);">${name}</div>
                <div style="font-size: 11px; color: #9ca3af; margin-top: 2px;">${nip}</div>
            </td>
            <td style="padding: 16px 20px; font-size: 13px; font-weight: 500; color: var(--primary-dark);">${mapel}</td>
            <td style="padding: 16px 20px; font-size: 13px; color: #6b7280;">${kelas}</td>
            <td style="padding: 16px 20px;">
                <span style="display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 600; ${statusStyles[statusType]}">${status}</span>
            </td>
            <td style="padding: 16px 20px; text-align: right;">
                <div style="display: flex; justify-content: flex-end; gap: 8px;">
                    <button class="btn-edit-guru" style="padding: 6px 14px; background: #fff; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 12px; font-weight: 600; color: var(--primary-dark); cursor: pointer;">Edit</button>
                    <button style="padding: 6px 14px; background: #fef2f2; border: 1px solid #fca5a5; border-radius: 6px; font-size: 12px; font-weight: 600; color: #dc2626; cursor: pointer;">Hapus</button>
                </div>
            </td>
        </tr>
    `;
}
