export function renderDetailRiwayat() {
    const students = [
        { no: 1, name: 'Aditya Pratama', nis: '20260701', hadir: 18, izinSakit: 1, alpa: 0, persen: 95 },
        { no: 2, name: 'Alya Zahra', nis: '20260702', hadir: 18, izinSakit: 1, alpa: 0, persen: 95 },
        { no: 3, name: 'Bagas Saputra', nis: '20260703', hadir: 18, izinSakit: 1, alpa: 0, persen: 95 },
        { no: 4, name: 'Citra Kirana', nis: '20260704', hadir: 18, izinSakit: 1, alpa: 0, persen: 95 },
        { no: 5, name: 'Dimas Anggara', nis: '20260705', hadir: 18, izinSakit: 1, alpa: 0, persen: 95 },
    ];

    const rows = students.map(s => {
        const bgColor = s.no % 2 === 0 ? '#f9fafb' : '#fff';
        return `
            <div style="display: grid; grid-template-columns: 60px 1fr 110px 110px 110px 100px; padding: 16px 20px; align-items: center; background: ${bgColor}; border-top: 1px solid #f3f4f6;">
                <span style="font-size: 15px; font-weight: 600; color: #6b7280;">${s.no}</span>
                <div>
                    <div style="font-size: 14px; font-weight: 700; color: var(--primary-dark);">${s.name}</div>
                    <div style="font-size: 12px; color: #9ca3af; margin-top: 2px;">NIS. ${s.nis}</div>
                </div>
                <div style="text-align: center;">
                    <span style="background: #e8f5e9; color: #2e7d32; font-size: 12px; font-weight: 600; padding: 4px 12px; border-radius: 6px;">${s.hadir} Sesi</span>
                </div>
                <div style="text-align: center;">
                    <span style="background: #fef3c7; color: #d97706; font-size: 12px; font-weight: 600; padding: 4px 12px; border-radius: 6px;">${s.izinSakit} Sesi</span>
                </div>
                <div style="text-align: center;">
                    <span style="background: #fef2f2; color: #dc2626; font-size: 12px; font-weight: 600; padding: 4px 12px; border-radius: 6px;">${s.alpa} Sesi</span>
                </div>
                <div style="text-align: center; font-size: 16px; font-weight: 700; color: var(--primary-dark);">${s.persen}%</div>
            </div>
        `;
    }).join('');

    return `
        <!-- Tombol Kembali -->
        <div style="margin-bottom: 20px;">
            <a href="#" id="btn-kembali-riwayat" style="display: inline-flex; align-items: center; gap: 8px; color: var(--primary-dark); text-decoration: none; font-size: 14px; font-weight: 600; padding: 8px 16px; border: 1.5px solid #e5e7eb; border-radius: 8px; background: #fff; cursor: pointer; transition: all 0.2s ease;" onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background='#fff'">
                <i class="fas fa-arrow-left" style="font-size: 12px;"></i> Kembali ke Rekapan
            </a>
        </div>

        <!-- Header Detail Kelas -->
        <div class="card" style="margin-bottom: 22px; padding: 25px 30px;">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
                <div>
                    <span style="display: inline-block; background: #fef3c7; color: #d97706; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 6px; letter-spacing: 0.3px; margin-bottom: 10px;">DETAIL PER KELAS</span>
                    <h3 style="font-size: 22px; font-weight: 700; color: var(--primary-dark); margin: 0;">Kelas 7A - Bahasa Indonesia</h3>
                </div>
                <div style="text-align: right;">
                    <div style="font-size: 28px; font-weight: 800; color: #10b981;">Rata-rata: 96%</div>
                    <div style="font-size: 13px; color: #6b7280; margin-top: 2px;">Mata Pelajaran: Bahasa Indonesia</div>
                </div>
            </div>
        </div>

        <!-- Tabel Rekap Keaktifan -->
        <div class="card" style="padding: 25px 30px;">
            <!-- Header Section -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
                <h3 style="font-size: 18px; font-weight: 700; color: var(--primary-dark); margin: 0;">Rekap Keaktifan Siswa Bulanan</h3>
                <span style="background: #f3f4f6; color: #6b7280; font-size: 12px; font-weight: 600; padding: 6px 14px; border-radius: 20px; border: 1px solid #e5e7eb;">Total Siswa: 5 Orang</span>
            </div>

            <!-- Tabel -->
            <div style="border: 1.5px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
                <!-- Header Tabel -->
                <div style="display: grid; grid-template-columns: 60px 1fr 110px 110px 110px 100px; background: var(--primary-dark); padding: 14px 20px; align-items: center;">
                    <span style="font-size: 12px; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.5px;">NO</span>
                    <span style="font-size: 12px; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.5px;">NAMA SISWA & NIS</span>
                    <span style="font-size: 12px; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.5px; text-align: center;">HADIR</span>
                    <span style="font-size: 12px; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.5px; text-align: center;">IZIN / SAKIT</span>
                    <span style="font-size: 12px; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.5px; text-align: center;">ALPA</span>
                    <span style="font-size: 12px; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.5px; text-align: center;">KEHADIRAN</span>
                </div>

                <!-- Baris Siswa -->
                ${rows}
            </div>
        </div>

        <!-- Footer -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 25px; padding: 15px 0; border-top: 1px solid #e5e7eb;">
            <span style="font-size: 12px; color: #9ca3af;">SMPN 1 Tirtajaya v1.0</span>
            <span style="font-size: 12px; color: #9ca3af; font-style: italic;">Sistem Informasi Absensi Digital Mandiri</span>
        </div>
    `;
}
