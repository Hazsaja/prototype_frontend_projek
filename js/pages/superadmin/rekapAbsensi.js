export function renderRekapAbsensi() {
    return `
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 25px;">
            <div style="flex: 1;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
                    <h2 style="font-size: 22px; font-weight: 700; color: var(--primary-dark); margin: 0;">Rekap Absensi</h2>
                    <div style="position: relative;">
                        <input type="text" placeholder="Cari data absensi..." style="padding: 8px 16px 8px 36px; border: none; border-radius: 20px; background: #fff; font-size: 13px; outline: none; width: 250px;">
                        <i class="fas fa-search" style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #9ca3af; font-size: 13px;"></i>
                    </div>
                </div>
                <p style="font-size: 13px; color: #6b7280; margin: 0;">Ringkasan kehadiran siswa berdasarkan periode, kelas, atau mata pelajaran.</p>
            </div>
        </div>

        <!-- Main Content -->
        <div class="card" style="padding: 25px 30px;">
            <!-- Filters -->
            <div style="display: flex; gap: 20px; align-items: flex-end; margin-bottom: 30px;">
                <div style="flex: 1;">
                    <label style="display: block; font-size: 13px; font-weight: 600; color: var(--primary-dark); margin-bottom: 8px;">Periode</label>
                    <select style="width: 100%; padding: 12px 15px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 13px; outline: none; background: #fff; color: var(--primary-dark);">
                        <option>1-30 September 2025</option>
                    </select>
                </div>
                <div style="flex: 1;">
                    <label style="display: block; font-size: 13px; font-weight: 600; color: var(--primary-dark); margin-bottom: 8px;">Kelas</label>
                    <select style="width: 100%; padding: 12px 15px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 13px; outline: none; background: #fff; color: var(--primary-dark);">
                        <option>Semua Kelas</option>
                    </select>
                </div>
                <div style="flex: 2;">
                    <label style="display: block; font-size: 13px; font-weight: 600; color: var(--primary-dark); margin-bottom: 8px;">Mata Pelajaran</label>
                    <select style="width: 100%; padding: 12px 15px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 13px; outline: none; background: #fff; color: var(--primary-dark);">
                        <option>Semua Mata Pelajaran</option>
                    </select>
                </div>
                <div>
                    <button style="padding: 12px 30px; background: var(--primary-dark); color: #fff; border: none; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer;">Tampilkan</button>
                </div>
            </div>

            <!-- Top Grid: Table & Donut Chart -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px;">
                <!-- Table Rekap per Kelas -->
                <div>
                    <h3 style="font-size: 15px; font-weight: 700; color: var(--primary-dark); margin-bottom: 15px;">Rekap per Kelas</h3>
                    <div style="border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
                        <table style="width: 100%; border-collapse: collapse; text-align: left;">
                            <thead style="background: #fef3c7;">
                                <tr>
                                    <th style="padding: 12px 15px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">KELAS</th>
                                    <th style="padding: 12px 15px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">HADIR</th>
                                    <th style="padding: 12px 15px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">IZIN</th>
                                    <th style="padding: 12px 15px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">SAKIT</th>
                                    <th style="padding: 12px 15px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">ALPA</th>
                                    <th style="padding: 12px 15px; font-size: 11px; font-weight: 700; color: var(--primary-dark); text-transform: uppercase;">% KEHADIRAN</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${generateRekapRow('7A', 32, 0, 0, 0, '100.0%')}
                                ${generateRekapRow('7B', 30, 1, 1, 0, '95.0%')}
                                ${generateRekapRow('7C', 31, 0, 0, 1, '98.0%')}
                                ${generateRekapRow('7A', 32, 0, 0, 0, '100%')}
                                ${generateRekapRow('8A', 30, 0, 1, 1, '95.0%')}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Donut Chart Persentase Kehadiran -->
                <div>
                    <h3 style="font-size: 15px; font-weight: 700; color: var(--primary-dark); margin-bottom: 15px;">Persentase kehadiran</h3>
                    <div style="display: flex; align-items: center; justify-content: center; gap: 40px; height: 250px;">
                        <!-- Donut Circle CSS -->
                        <div style="position: relative; width: 180px; height: 180px; border-radius: 50%; background: conic-gradient(#10b981 0% 91.9%, #fbbf24 91.9% 96.7%, #ef4444 96.7% 98.7%, #3b82f6 98.7% 100%); display: flex; align-items: center; justify-content: center;">
                            <div style="width: 120px; height: 120px; background: #fff; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                                <span style="font-size: 24px; font-weight: 800; color: var(--primary-dark);">91,9%</span>
                                <span style="font-size: 13px; color: #6b7280;">Hadir</span>
                            </div>
                        </div>
                        
                        <!-- Legend -->
                        <div style="display: flex; flex-direction: column; gap: 15px;">
                            <div style="display: flex; align-items: center; gap: 20px;">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div style="width: 12px; height: 12px; border-radius: 50%; background: #10b981;"></div>
                                    <span style="font-size: 13px; color: var(--primary-dark); font-weight: 500;">Hadir</span>
                                </div>
                                <span style="font-size: 13px; color: #6b7280;">91,9%</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 20px;">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div style="width: 12px; height: 12px; border-radius: 50%; background: #fbbf24;"></div>
                                    <span style="font-size: 13px; color: var(--primary-dark); font-weight: 500;">Izin</span>
                                </div>
                                <span style="font-size: 13px; color: #6b7280;">4,8%</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 20px;">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div style="width: 12px; height: 12px; border-radius: 50%; background: #ef4444;"></div>
                                    <span style="font-size: 13px; color: var(--primary-dark); font-weight: 500;">Sakit</span>
                                </div>
                                <span style="font-size: 13px; color: #6b7280;">2,0%</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 20px;">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div style="width: 12px; height: 12px; border-radius: 50%; background: #3b82f6;"></div>
                                    <span style="font-size: 13px; color: var(--primary-dark); font-weight: 500;">Alpa</span>
                                </div>
                                <span style="font-size: 13px; color: #6b7280;">1,2%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Chart: Tren Kehadiran Mingguan -->
            <div>
                <h3 style="font-size: 15px; font-weight: 700; color: var(--primary-dark); margin-bottom: 25px;">Tren Kehadiran Mingguan</h3>
                
                <!-- Bar Chart CSS (Reused from Dashboard) -->
                <div style="display: flex; align-items: flex-end; justify-content: space-around; height: 200px; padding-bottom: 30px; position: relative;">
                    <!-- Y-axis baseline -->
                    <div style="position: absolute; bottom: 30px; left: 0; right: 0; height: 1px; background: #f3f4f6;"></div>
                    
                    <!-- Sen -->
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                        <div style="width: 32px; height: 120px; background: var(--primary-dark); border-radius: 4px 4px 0 0;"></div>
                        <span style="font-size: 12px; color: #6b7280; font-weight: 500;">Sen</span>
                    </div>
                    <!-- Sel -->
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                        <div style="width: 32px; height: 140px; background: var(--primary-dark); border-radius: 4px 4px 0 0;"></div>
                        <span style="font-size: 12px; color: #6b7280; font-weight: 500;">Sel</span>
                    </div>
                    <!-- Rab -->
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                        <div style="width: 32px; height: 100px; background: var(--primary-dark); border-radius: 4px 4px 0 0;"></div>
                        <span style="font-size: 12px; color: #6b7280; font-weight: 500;">Rab</span>
                    </div>
                    <!-- Kam -->
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                        <div style="width: 32px; height: 150px; background: var(--accent-yellow); border-radius: 4px 4px 0 0;"></div>
                        <span style="font-size: 12px; color: #6b7280; font-weight: 500;">Kam</span>
                    </div>
                    <!-- Jum -->
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                        <div style="width: 32px; height: 115px; background: var(--primary-dark); border-radius: 4px 4px 0 0;"></div>
                        <span style="font-size: 12px; color: #6b7280; font-weight: 500;">Jum</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateRekapRow(kelas, hadir, izin, sakit, alpa, persen) {
    return `
        <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 15px; font-size: 13px; font-weight: 700; color: var(--primary-blue);">${kelas}</td>
            <td style="padding: 12px 15px; font-size: 13px; color: #6b7280;">${hadir}</td>
            <td style="padding: 12px 15px; font-size: 13px; font-weight: 600; color: ${izin > 0 ? '#10b981' : '#6b7280'};">${izin}</td>
            <td style="padding: 12px 15px; font-size: 13px; font-weight: 600; color: ${sakit > 0 ? '#10b981' : '#6b7280'};">${sakit}</td>
            <td style="padding: 12px 15px; font-size: 13px; font-weight: 600; color: ${alpa > 0 ? '#f59e0b' : '#6b7280'};">${alpa}</td>
            <td style="padding: 12px 15px; font-size: 13px; color: #6b7280;">${persen}</td>
        </tr>
    `;
}
