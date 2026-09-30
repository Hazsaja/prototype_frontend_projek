export function renderJadwalMengajar() {
    return `
        <!-- Section: Jadwal & Presensi Mata Pelajaran -->
        <div class="card" style="margin-bottom: 20px; padding: 25px 30px;">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
                <div>
                    <h3 style="font-size: 18px; font-weight: 700; color: var(--primary-dark); margin-bottom: 6px;">Jadwal & Presensi Mata Pelajaran</h3>
                    <p style="font-size: 13px; color: #6b7280; margin: 0;">Pilih tanggal dan klik salah satu kelas di bawah untuk langsung mengabsen siswa.</p>
                </div>
                <div style="display: flex; align-items: center; gap: 10px; border: 1.5px solid #d1d5db; border-radius: 10px; padding: 10px 16px; cursor: pointer; background: #fff;">
                    <span style="font-size: 13px; font-weight: 600; color: var(--primary-dark);">Tanggal Sesi: 03/27/2026</span>
                    <i class="far fa-calendar-alt" style="color: var(--primary-dark); font-size: 16px;"></i>
                </div>
            </div>
        </div>

        <!-- Info Banner: Sesi Presensi Aktif -->
        <div style="background: linear-gradient(135deg, #e8f5e9, #e0f2f1); border: 1px solid #a5d6a7; border-radius: 12px; padding: 16px 24px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-check-circle" style="color: #43a047; font-size: 18px;"></i>
                <span style="font-size: 13px; color: #2e7d32; font-weight: 500;">Sesi Presensi Aktif: Tanggal Senin, 27 Maret 2026 memuat <strong>0</strong> sesi presensi tercatat di bawah ini.</span>
            </div>
            <button style="display: flex; align-items: center; gap: 6px; padding: 8px 18px; border: 1.5px solid #bdbdbd; border-radius: 8px; background: #fff; color: var(--primary-dark); font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s ease;">
                <i class="fas fa-sync-alt" style="font-size: 12px;"></i> Perbarui
            </button>
        </div>

        <!-- Section: Jadwal Tersedia Hari Ini -->
        <div class="card" style="margin-bottom: 25px; padding: 25px 30px;">
            <div style="margin-bottom: 20px;">
                <h3 style="font-size: 18px; font-weight: 700; color: var(--primary-dark); margin-bottom: 5px;">Jadwal Tersedia Hari Ini</h3>
                <p style="font-size: 13px; color: #6b7280; margin: 0;">Mulai sesi presensi baru dari jadwal kelas yang terdaftar</p>
            </div>

            <!-- Kartu Jadwal Kelas -->
            <div style="background: #fff; border: 1.5px solid #e5e7eb; border-radius: 14px; padding: 22px 25px; position: relative; max-width: 480px;">
                <!-- Header: Waktu & Status -->
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; flex-wrap: wrap; gap: 10px;">
                    <div style="display: flex; align-items: center; gap: 8px; color: #6b7280; font-size: 13px;">
                        <i class="far fa-clock" style="font-size: 14px;"></i>
                        <span style="font-weight: 500;">07.30 - 09.00 WIB</span>
                    </div>
                    <span style="background: #e8f5e9; color: #2e7d32; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 6px; border: 1px solid #a5d6a7; letter-spacing: 0.3px;">SUDAH DISUBMIT</span>
                </div>

                <!-- Info Kelas -->
                <div style="margin-bottom: 18px;">
                    <h4 style="font-size: 20px; font-weight: 700; color: var(--primary-dark); margin-bottom: 3px;">VII-B</h4>
                    <p style="font-size: 13px; color: #6b7280; margin: 0;">Bahasa Indonesia</p>
                </div>

                <!-- Tombol Aksi -->
                <button style="display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 12px 20px; background: var(--primary-dark); color: #fff; border: none; border-radius: 10px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s ease;" onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'">
                    Mulai Presensi Kelas <i class="fas fa-arrow-right" style="font-size: 13px;"></i>
                </button>
            </div>
        </div>

        <!-- Section: Kelas & Mata Pelajaran Diampu -->
        <div class="card" style="padding: 25px 30px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
                <div>
                    <h3 style="font-size: 18px; font-weight: 700; color: var(--primary-dark); margin-bottom: 5px;">Kelas & Mata Pelajaran Diampu</h3>
                    <p style="font-size: 13px; color: #6b7280; margin: 0;">Daftar kelas dan mata pelajaran resmi yang ditugaskan kepada anda pada tahun ajaran aktif.</p>
                </div>
                <span style="background: #f3f4f6; color: #6b7280; font-size: 12px; font-weight: 600; padding: 6px 14px; border-radius: 20px; border: 1px solid #e5e7eb;">2 Penugasan Aktif</span>
            </div>

            <!-- Grid Kartu Kelas Diampu -->
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 340px)); gap: 20px;">
                
                <!-- Kartu 1: Kelas 7C -->
                <div style="background: #fff; border: 1.5px solid #e5e7eb; border-radius: 14px; padding: 22px 25px;">
                    <!-- Header -->
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
                        <span style="background: #e8f5e9; color: #2e7d32; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 6px; border: 1px solid #a5d6a7;">AKTIF</span>
                        <span style="font-size: 12px; color: #9ca3af; font-weight: 500;">Pengajar Resmi</span>
                    </div>
                    <!-- Info Kelas -->
                    <div style="margin-bottom: 18px;">
                        <h4 style="font-size: 20px; font-weight: 700; color: var(--primary-dark); margin-bottom: 3px;">Kelas 7C</h4>
                        <p style="font-size: 13px; color: #6b7280; margin: 0;">Bahasa Indonesia</p>
                    </div>
                    <!-- Tombol Aksi -->
                    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                        <button style="display: flex; align-items: center; gap: 6px; padding: 10px 18px; background: var(--primary-blue); color: #fff; border: none; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s ease;" onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'">
                            Presensi Hari Ini <i class="fas fa-arrow-right" style="font-size: 11px;"></i>
                        </button>
                        <button style="display: flex; align-items: center; gap: 6px; padding: 10px 18px; background: #fff; color: var(--primary-dark); border: 1.5px solid #d1d5db; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s ease;" onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background='#fff'">
                            Rekap Kelas <i class="fas fa-arrow-right" style="font-size: 11px;"></i>
                        </button>
                    </div>
                </div>

                <!-- Kartu 2: Kelas 7C (duplikat sesuai mockup) -->
                <div style="background: #fff; border: 1.5px solid #e5e7eb; border-radius: 14px; padding: 22px 25px;">
                    <!-- Header -->
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
                        <span style="background: #e8f5e9; color: #2e7d32; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 6px; border: 1px solid #a5d6a7;">AKTIF</span>
                        <span style="font-size: 12px; color: #9ca3af; font-weight: 500;">Pengajar Resmi</span>
                    </div>
                    <!-- Info Kelas -->
                    <div style="margin-bottom: 18px;">
                        <h4 style="font-size: 20px; font-weight: 700; color: var(--primary-dark); margin-bottom: 3px;">Kelas 7C</h4>
                        <p style="font-size: 13px; color: #6b7280; margin: 0;">Bahasa Indonesia</p>
                    </div>
                    <!-- Tombol Aksi -->
                    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                        <button style="display: flex; align-items: center; gap: 6px; padding: 10px 18px; background: var(--primary-blue); color: #fff; border: none; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s ease;" onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'">
                            Presensi Hari Ini <i class="fas fa-arrow-right" style="font-size: 11px;"></i>
                        </button>
                        <button style="display: flex; align-items: center; gap: 6px; padding: 10px 18px; background: #fff; color: var(--primary-dark); border: 1.5px solid #d1d5db; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s ease;" onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background='#fff'">
                            Rekap Kelas <i class="fas fa-arrow-right" style="font-size: 11px;"></i>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    `;
}
