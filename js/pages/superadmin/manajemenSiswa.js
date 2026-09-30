export function renderManajemenSiswa() {
    return `
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 25px;">
            <div>
                <h2 style="font-size: 22px; font-weight: 700; color: var(--primary-dark); margin-bottom: 5px;">Data Siswa</h2>
                <p style="font-size: 13px; color: #6b7280; margin: 0;">Kelola informasi biodata, nomor induk, kelas, dan status absensi siswa.</p>
            </div>
            <div>
                <button id="btn-tambah-siswa" style="display: flex; align-items: center; gap: 8px; padding: 10px 20px; background: var(--primary-dark); color: #fff; border: none; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer;">
                    <i class="fas fa-plus" style="font-size: 12px;"></i> Tambah Siswa
                </button>
            </div>
        </div>

        <!-- Summary Cards -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 25px;">
            <div style="background: #fff; border-radius: 12px; padding: 22px 24px; border: 1px solid #e5e7eb; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: var(--primary-blue);"></div>
                <div style="font-size: 11px; color: #6b7280; font-weight: 600; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px;">TOTAL SISWA</div>
                <div style="font-size: 32px; font-weight: 800; color: var(--primary-dark); margin-bottom: 5px;">480</div>
                <div style="font-size: 12px; color: #9ca3af;">Terdaftar di Tahun Ajaran 2026/2027</div>
            </div>
            <div style="background: #fff; border-radius: 12px; padding: 22px 24px; border: 1px solid #e5e7eb; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: #34d399;"></div>
                <div style="font-size: 11px; color: #6b7280; font-weight: 600; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px;">SISWA LAKI-LAKI</div>
                <div style="font-size: 32px; font-weight: 800; color: var(--primary-dark); margin-bottom: 5px;">254</div>
                <div style="font-size: 12px; color: #9ca3af;">Siswa terverifikasi aktif</div>
            </div>
            <div style="background: #fff; border-radius: 12px; padding: 22px 24px; border: 1px solid #e5e7eb; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: #f97316;"></div>
                <div style="font-size: 11px; color: #6b7280; font-weight: 600; text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.5px;">SISWA PEREMPUAN</div>
                <div style="font-size: 32px; font-weight: 800; color: var(--primary-dark); margin-bottom: 5px;">226</div>
                <div style="font-size: 12px; color: #9ca3af;">Siswi terverifikasi aktif</div>
            </div>
        </div>

        <!-- List Section -->
        <div class="card" style="padding: 25px 30px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <div style="display: flex; gap: 15px; align-items: center; flex: 1;">
                    <div style="width: 300px;">
                        <input type="text" placeholder="Cari siswa..." style="width: 100%; padding: 10px 15px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 13px; outline: none;">
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
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">NIS/NISN</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">NAMA LENGKAP</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">L/P</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">TEMPAT, TGL LAHIR</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">NAMA ORANG TUA/WALI</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">KONTAK ORANG TUA/WALI</th>
                            <th style="padding: 15px 20px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase; text-align: right;">AKSI</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${generateSiswaRow(1)}
                        ${generateSiswaRow(1)}
                        ${generateSiswaRow(1)}
                        ${generateSiswaRow(1)}
                        ${generateSiswaRow(1)}
                    </tbody>
                </table>
            </div>

            <!-- Pagination -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
                <span style="font-size: 12px; color: #6b7280;">Menampilkan 1-5 dari 480 data</span>
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

function generateSiswaRow(no) {
    return `
        <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 16px 20px; font-size: 13px; color: #6b7280;">${no}</td>
            <td style="padding: 16px 20px; font-size: 13px; color: var(--primary-dark);">260401/<br>0091243001</td>
            <td style="padding: 16px 20px; font-size: 13px; font-weight: 600; color: var(--primary-dark);">Budi Setiawan</td>
            <td style="padding: 16px 20px;">
                <span style="display: inline-flex; justify-content: center; align-items: center; width: 24px; height: 24px; background: #e8f5e9; color: #2e7d32; border-radius: 50%; font-size: 11px; font-weight: 700;">L</span>
            </td>
            <td style="padding: 16px 20px; font-size: 13px; color: var(--primary-dark);">Bogor, 13 Mei 2013</td>
            <td style="padding: 16px 20px; font-size: 13px; color: var(--primary-dark);">Bambang Yudi</td>
            <td style="padding: 16px 20px; font-size: 13px; color: var(--primary-dark);">081347103021</td>
            <td style="padding: 16px 20px; text-align: right;">
                <div style="display: flex; justify-content: flex-end; gap: 8px;">
                    <button class="btn-edit-siswa" style="padding: 6px 14px; background: #fff; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 12px; font-weight: 600; color: var(--primary-dark); cursor: pointer;">Edit</button>
                    <button style="padding: 6px 14px; background: #fef2f2; border: 1px solid #fca5a5; border-radius: 6px; font-size: 12px; font-weight: 600; color: #dc2626; cursor: pointer;">Hapus</button>
                </div>
            </td>
        </tr>
    `;
}
