export function renderTahunAjaran() {
    return `
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 25px;">
            <div>
                <h2 style="font-size: 22px; font-weight: 700; color: var(--primary-dark); margin-bottom: 5px;">Tahun Ajaran</h2>
                <p style="font-size: 13px; color: #6b7280; margin: 0;">Atur status kalender akademik aktif, semester berjalan, dan tanggal rentang waktu sekolah.</p>
            </div>
            <div>
                <button id="btn-tambah-tahun-ajaran" style="display: flex; align-items: center; gap: 8px; padding: 10px 20px; background: var(--primary-dark); color: #fff; border: none; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer;">
                    <i class="fas fa-plus" style="font-size: 12px;"></i> Tambah Tahun Ajaran
                </button>
            </div>
        </div>

        <!-- Summary Cards -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 25px;">
            <div style="background: #fff; border-radius: 12px; padding: 22px 24px; border: 1px solid #e5e7eb; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: var(--primary-blue);"></div>
                <div style="font-size: 11px; color: #6b7280; font-weight: 600; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px;">TAHUN AJARAN SEKARANG</div>
                <div style="font-size: 32px; font-weight: 800; color: var(--primary-dark); margin-bottom: 5px;">2026/2027</div>
                <div style="font-size: 12px; color: #9ca3af;">Semester Ganjil berjalan</div>
            </div>
            <div style="background: #fff; border-radius: 12px; padding: 22px 24px; border: 1px solid #e5e7eb; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: #34d399;"></div>
                <div style="font-size: 11px; color: #6b7280; font-weight: 600; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px;">STATUS AKTIF KALENDER</div>
                <div style="font-size: 32px; font-weight: 800; color: var(--primary-dark); margin-bottom: 5px;">Ganjil 2026</div>
                <div style="font-size: 12px; color: #9ca3af;">Diperbarui 14 Juli 2026</div>
            </div>
            <div style="background: #fff; border-radius: 12px; padding: 22px 24px; border: 1px solid #e5e7eb; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: #f97316;"></div>
                <div style="font-size: 11px; color: #6b7280; font-weight: 600; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px;">TOTAL AKADEMIK LOGS</div>
                <div style="font-size: 32px; font-weight: 800; color: var(--primary-dark); margin-bottom: 5px;">12 Tahun</div>
                <div style="font-size: 12px; color: #9ca3af;">Sistem historis arsip terekam</div>
            </div>
        </div>

        <!-- List Section -->
        <div class="card" style="padding: 25px 30px;">
            <!-- Filters -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <div style="width: 300px;">
                    <input type="text" placeholder="Cari tahun ajaran..." style="width: 100%; padding: 10px 15px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 13px; outline: none;">
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
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">TAHUN AJARAN</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">SEMESTER</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">TANGGAL MULAI</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">TANGGAL SELESAI</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">STATUS</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase; text-align: right;">AKSI</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${generateTahunAjaranRow(1, '2026/2027', 'Ganjil', '2026-07-14', '2026-12-20', 'Aktif', 'success')}
                        ${generateTahunAjaranRow(2, '2026/2027', 'Genap', '2027-01-06', '2027-06-21', 'Akan Datang', 'info')}
                        ${generateTahunAjaranRow(3, '2025/2026', 'Ganjil', '2025-07-14', '2025-12-20', 'Selesai', 'secondary')}
                        ${generateTahunAjaranRow(4, '2025/2026', 'Genap', '2026-01-05', '2026-06-20', 'Selesai', 'secondary')}
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
                <span style="font-size: 12px; color: #6b7280;">Menampilkan 1-4 dari 4 data</span>
                <div style="display: flex; gap: 5px;">
                    <button style="width: 30px; height: 30px; border: none; background: transparent; color: #6b7280; cursor: pointer; font-size: 12px;">&lt;</button>
                    <button style="width: 30px; height: 30px; border: none; background: var(--primary-dark); color: #fff; border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer;">1</button>
                    <button style="width: 30px; height: 30px; border: none; background: transparent; color: #6b7280; cursor: pointer; font-size: 12px;">&gt;</button>
                </div>
            </div>
        </div>
    `;
}

function generateTahunAjaranRow(no, tahun, semester, mulai, selesai, status, statusType) {
    const statusStyles = {
        'success': 'background: #e8f5e9; color: #2e7d32;',
        'info': 'background: #eff6ff; color: #1d4ed8;',
        'secondary': 'background: #f3f4f6; color: #6b7280;'
    };
    
    return `
        <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 16px 20px; font-size: 13px; color: #6b7280;">${no}</td>
            <td style="padding: 16px 20px; font-size: 13px; font-weight: 700; color: var(--primary-blue);">${tahun}</td>
            <td style="padding: 16px 20px; font-size: 13px; color: #6b7280;">${semester}</td>
            <td style="padding: 16px 20px; font-size: 13px; color: #6b7280;">${mulai}</td>
            <td style="padding: 16px 20px; font-size: 13px; color: #6b7280;">${selesai}</td>
            <td style="padding: 16px 20px;">
                <span style="display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 600; ${statusStyles[statusType]}">${status}</span>
            </td>
            <td style="padding: 16px 20px; text-align: right;">
                <div style="display: flex; justify-content: flex-end; gap: 8px;">
                    <button class="btn-edit-tahun-ajaran" style="padding: 6px 14px; background: #fff; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 12px; font-weight: 600; color: var(--primary-dark); cursor: pointer;">Edit</button>
                    <button style="padding: 6px 14px; background: #fef2f2; border: 1px solid #fca5a5; border-radius: 6px; font-size: 12px; font-weight: 600; color: #dc2626; cursor: pointer;">Hapus</button>
                </div>
            </td>
        </tr>
    `;
}
