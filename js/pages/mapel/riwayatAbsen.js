export function renderRiwayatMapel() {
    return `
        <div class="card" style="margin-bottom: 25px;">
            <div class="section-header" style="margin-bottom: 20px;">
                <h3 class="section-title">Riwayat Kehadiran Mata Pelajaran</h3>
                <p class="section-subtitle">Analisis keaktifan siswa pada seluruh kelas Bahasa Indonesia yang diampu. Klik bar kelas di bawah untuk melihat detail per siswa secara penuh.</p>
            </div>

            <div class="summary-grid" style="grid-template-columns: repeat(3, 1fr); margin-bottom: 30px;">
                <div class="summary-card" style="display: block; border: 1px solid var(--border-color); box-shadow: none;">
                    <div style="font-size: 11px; font-weight: 600; color: var(--text-muted); text-transform: uppercase; margin-bottom: 10px;">RATA-RATA KEHADIRAN</div>
                    <div style="font-size: 32px; font-weight: 700; color: var(--primary-dark); margin-bottom: 15px;">94.8%</div>
                    <div style="font-size: 12px; color: var(--text-muted);"><span style="color: #10b981; margin-right: 5px;">●</span> +1.2% dari minggu lalu</div>
                </div>
                <div class="summary-card" style="display: block; border: 1px solid var(--border-color); box-shadow: none;">
                    <div style="font-size: 11px; font-weight: 600; color: var(--text-muted); text-transform: uppercase; margin-bottom: 10px;">TOTAL SESI MENGAJAR</div>
                    <div style="font-size: 32px; font-weight: 700; color: var(--primary-dark); margin-bottom: 15px;">24 Sesi</div>
                    <div style="font-size: 12px; color: var(--text-muted);"><span style="color: var(--primary-blue); margin-right: 5px;">●</span> Bulan September 2026</div>
                </div>
                <div class="summary-card" style="display: block; border: 1px solid var(--border-color); box-shadow: none;">
                    <div style="font-size: 11px; font-weight: 600; color: var(--text-muted); text-transform: uppercase; margin-bottom: 10px;">SISWA PERLU PERHATIAN</div>
                    <div style="font-size: 32px; font-weight: 700; color: var(--primary-dark); margin-bottom: 15px;">3 Siswa</div>
                    <div style="font-size: 12px; color: var(--text-muted);"><span style="color: #ef4444; margin-right: 5px;">●</span> Sering alpa di jam mapel</div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="d-flex justify-content-between align-items-center mb-4" style="border-bottom: 1px solid var(--border-color); padding-bottom: 15px;">
                <h3 style="font-size: 15px; font-weight: 600; color: var(--primary-blue);">Rekap Persentase Kehadiran per Kelas Ajar</h3>
                <span style="font-size: 12px; color: var(--text-muted);">Klik bar kelas untuk lihat detail penuh</span>
            </div>

            <div class="progress-list" style="display: flex; flex-direction: column; gap: 15px;">
                <!-- Kelas 7A -->
                <div class="progress-item d-flex align-items-center justify-content-between" style="border: 1px solid var(--border-color); padding: 12px 20px; border-radius: var(--border-radius);">
                    <div style="width: 250px; font-weight: 600; font-size: 14px; color: var(--primary-dark);">Kelas 7A - Bahasa Indonesia</div>
                    <div style="flex: 1; padding: 0 30px; display: flex; align-items: center; gap: 15px;">
                        <div style="flex: 1; height: 12px; background-color: #f1f5f9; border-radius: 10px; overflow: hidden;">
                            <div style="width: 90%; height: 100%; background-color: var(--primary-dark); border-radius: 10px;"></div>
                        </div>
                        <span style="font-weight: 700; font-size: 14px; width: 40px;">90%</span>
                    </div>
                    <button class="btn-secondary" style="border: none; background: transparent; font-size: 13px; font-weight: 600;">Detail <i class="fas fa-chevron-right ml-1"></i></button>
                </div>

                <!-- Kelas 7B -->
                <div class="progress-item d-flex align-items-center justify-content-between" style="border: 1px solid var(--border-color); padding: 12px 20px; border-radius: var(--border-radius);">
                    <div style="width: 250px; font-weight: 600; font-size: 14px; color: var(--primary-dark);">Kelas 7B - Bahasa Indonesia</div>
                    <div style="flex: 1; padding: 0 30px; display: flex; align-items: center; gap: 15px;">
                        <div style="flex: 1; height: 12px; background-color: #f1f5f9; border-radius: 10px; overflow: hidden;">
                            <div style="width: 84%; height: 100%; background-color: var(--primary-dark); border-radius: 10px;"></div>
                        </div>
                        <span style="font-weight: 700; font-size: 14px; width: 40px;">84%</span>
                    </div>
                    <button class="btn-secondary" style="border: none; background: transparent; font-size: 13px; font-weight: 600;">Detail <i class="fas fa-chevron-right ml-1"></i></button>
                </div>

                <!-- Kelas 7C (highlight) -->
                <div class="progress-item d-flex align-items-center justify-content-between" style="border: 1px solid var(--border-color); padding: 12px 20px; border-radius: var(--border-radius);">
                    <div style="width: 250px; font-weight: 600; font-size: 14px; color: var(--primary-dark);">Kelas 7C - Bahasa Indonesia</div>
                    <div style="flex: 1; padding: 0 30px; display: flex; align-items: center; gap: 15px;">
                        <div style="flex: 1; height: 12px; background-color: #f1f5f9; border-radius: 10px; overflow: hidden;">
                            <div style="width: 97%; height: 100%; background-color: #34d399; border-radius: 10px;"></div>
                        </div>
                        <span style="font-weight: 700; font-size: 14px; width: 40px;">97%</span>
                    </div>
                    <button class="btn-secondary" style="border: none; background: transparent; font-size: 13px; font-weight: 600;">Detail <i class="fas fa-chevron-right ml-1"></i></button>
                </div>
                
                <!-- Kelas 7D (highlight) -->
                <div class="progress-item d-flex align-items-center justify-content-between" style="border: 1px solid var(--border-color); padding: 12px 20px; border-radius: var(--border-radius);">
                    <div style="width: 250px; font-weight: 600; font-size: 14px; color: var(--primary-dark);">Kelas 7D - Bahasa Indonesia</div>
                    <div style="flex: 1; padding: 0 30px; display: flex; align-items: center; gap: 15px;">
                        <div style="flex: 1; height: 12px; background-color: #f1f5f9; border-radius: 10px; overflow: hidden;">
                            <div style="width: 95%; height: 100%; background-color: #34d399; border-radius: 10px;"></div>
                        </div>
                        <span style="font-weight: 700; font-size: 14px; width: 40px;">95%</span>
                    </div>
                    <button class="btn-secondary" style="border: none; background: transparent; font-size: 13px; font-weight: 600;">Detail <i class="fas fa-chevron-right ml-1"></i></button>
                </div>
                
                <!-- Kelas 7E -->
                <div class="progress-item d-flex align-items-center justify-content-between" style="border: 1px solid var(--border-color); padding: 12px 20px; border-radius: var(--border-radius);">
                    <div style="width: 250px; font-weight: 600; font-size: 14px; color: var(--primary-dark);">Kelas 7E - Bahasa Indonesia</div>
                    <div style="flex: 1; padding: 0 30px; display: flex; align-items: center; gap: 15px;">
                        <div style="flex: 1; height: 12px; background-color: #f1f5f9; border-radius: 10px; overflow: hidden;">
                            <div style="width: 93%; height: 100%; background-color: var(--primary-dark); border-radius: 10px;"></div>
                        </div>
                        <span style="font-weight: 700; font-size: 14px; width: 40px;">93%</span>
                    </div>
                    <button class="btn-secondary" style="border: none; background: transparent; font-size: 13px; font-weight: 600;">Detail <i class="fas fa-chevron-right ml-1"></i></button>
                </div>
            </div>
        </div>
    `;
}
