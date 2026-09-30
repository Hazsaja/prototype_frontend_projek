export function renderManajemenKelas() {
    return `
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 25px;">
            <div>
                <h2 style="font-size: 22px; font-weight: 700; color: var(--primary-dark); margin-bottom: 5px;">Data Kelas</h2>
                <p style="font-size: 13px; color: #6b7280; margin: 0;">Atur kelompok ruang kelas, tingkatan tingkat, dan assign wali kelas untuk pendataan absensi.</p>
            </div>
            <div>
                <button id="btn-tambah-kelas" style="display: flex; align-items: center; gap: 8px; padding: 10px 20px; background: var(--primary-dark); color: #fff; border: none; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer;">
                    <i class="fas fa-plus" style="font-size: 12px;"></i> Tambah Kelas
                </button>
            </div>
        </div>

        <!-- Summary Cards -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 25px;">
            <div style="background: #fff; border-radius: 12px; padding: 22px 24px; border: 1px solid #e5e7eb; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: var(--primary-blue);"></div>
                <div style="font-size: 11px; color: #6b7280; font-weight: 600; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px;">TOTAL RUANG KELAS</div>
                <div style="font-size: 32px; font-weight: 800; color: var(--primary-dark); margin-bottom: 5px;">15</div>
                <div style="font-size: 12px; color: #9ca3af;">Terbagi dalam Tingkat VII, VIII, dan IX</div>
            </div>
            <div style="background: #fff; border-radius: 12px; padding: 22px 24px; border: 1px solid #e5e7eb; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: #3b82f6;"></div>
                <div style="font-size: 11px; color: #6b7280; font-weight: 600; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px;">TINGKAT TERBANYAK</div>
                <div style="font-size: 32px; font-weight: 800; color: var(--primary-dark); margin-bottom: 5px;">Tingkat VII</div>
                <div style="font-size: 12px; color: #9ca3af;">Total 6 Kelas aktif</div>
            </div>
            <div style="background: #fff; border-radius: 12px; padding: 22px 24px; border: 1px solid #e5e7eb; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: #fbbf24;"></div>
                <div style="font-size: 11px; color: #6b7280; font-weight: 600; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px;">RATA-RATA SISWA/KELAS</div>
                <div style="font-size: 32px; font-weight: 800; color: var(--primary-dark); margin-bottom: 5px;">30.5</div>
                <div style="font-size: 12px; color: #9ca3af;">Distribusi jumlah siswa merata</div>
            </div>
        </div>

        <!-- List Section -->
        <div class="card" style="padding: 25px 30px;">
            <!-- Filters -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <div style="display: flex; gap: 15px; align-items: center; flex: 1;">
                    <div style="width: 300px;">
                        <input type="text" placeholder="Cari kelas..." style="width: 100%; padding: 10px 15px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 13px; outline: none;">
                    </div>
                    <div style="width: 150px;">
                        <select style="width: 100%; padding: 10px 15px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 13px; outline: none; background: #fff; color: var(--primary-dark);">
                            <option>Semua Tingkat</option>
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
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">NAMA KELAS</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">TINGKAT</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">WALI KELAS</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">JUMLAH SISWA</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase; text-align: right;">AKSI</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${generateKelasRow(1, 'Kelas 7A', 'VII', 'Bu Siti Rahmawati S.Pd', '32 Siswa')}
                        ${generateKelasRow(2, 'Kelas 7B', 'VII', 'Pak Ahmad Faisal S.Pd', '30 Siswa')}
                        ${generateKelasRow(3, 'Kelas 7C', 'VII', 'Bu Dewi Lestari S.Pd', '31 Siswa')}
                        ${generateKelasRow(4, 'Kelas 8A', 'VIII', 'Pak Budi Santoso S.Pd', '30 Siswa')}
                        ${generateKelasRow(5, 'Kelas 8B', 'VIII', 'Bu Rina Marlina S.Pd', '29 Siswa')}
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
                <span style="font-size: 12px; color: #6b7280;">Menampilkan 1-5 dari 15 data</span>
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

function generateKelasRow(no, kelas, tingkat, wali, jumlah) {
    return `
        <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 16px 20px; font-size: 13px; color: #6b7280;">${no}</td>
            <td style="padding: 16px 20px; font-size: 13px; font-weight: 700; color: var(--primary-blue);">${kelas}</td>
            <td style="padding: 16px 20px; font-size: 13px; color: #6b7280;">${tingkat}</td>
            <td style="padding: 16px 20px; font-size: 13px; font-weight: 600; color: var(--primary-dark);">${wali}</td>
            <td style="padding: 16px 20px; font-size: 13px; color: #6b7280;">${jumlah}</td>
            <td style="padding: 16px 20px; text-align: right;">
                <div style="display: flex; justify-content: flex-end; gap: 8px;">
                    <button class="btn-edit-kelas" style="padding: 6px 14px; background: #fff; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 12px; font-weight: 600; color: var(--primary-dark); cursor: pointer;">Edit</button>
                    <button style="padding: 6px 14px; background: #fef2f2; border: 1px solid #fca5a5; border-radius: 6px; font-size: 12px; font-weight: 600; color: #dc2626; cursor: pointer;">Hapus</button>
                </div>
            </td>
        </tr>
    `;
}
