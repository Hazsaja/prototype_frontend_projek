export function renderRekapAbsenMapel() {
    return `
        <div style="margin-bottom: 20px; margin-top: -10px;">
            <a href="#" style="color: var(--primary-blue); text-decoration: none; font-weight: 600; font-size: 14px;"><i class="fas fa-arrow-left mr-2"></i> Kembali ke Beranda</a>
            <span class="badge" style="background-color: var(--primary-dark); color: white; margin-left: 10px;">KELAS 7C</span>
        </div>

        <div class="card" style="margin-bottom: 25px;">
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;">
                <div>
                    <div style="font-size: 11px; font-weight: 600; color: var(--text-muted); text-transform: uppercase; margin-bottom: 5px;">MATA PELAJARAN</div>
                    <div style="font-size: 15px; font-weight: 600; color: var(--primary-blue);">Bahasa Indonesia</div>
                </div>
                <div>
                    <div style="font-size: 11px; font-weight: 600; color: var(--text-muted); text-transform: uppercase; margin-bottom: 5px;">KELAS & TANGGAL</div>
                    <div style="font-size: 15px; font-weight: 600; color: var(--primary-blue);">Kelas 7C - 2026-09-23</div>
                </div>
                <div>
                    <div style="font-size: 11px; font-weight: 600; color: var(--text-muted); text-transform: uppercase; margin-bottom: 5px;">JAM MENGAJAR</div>
                    <div style="font-size: 15px; font-weight: 600; color: var(--primary-blue);">11.00 - 12.30 WIB</div>
                </div>
                <div>
                    <div style="font-size: 11px; font-weight: 600; color: var(--text-muted); text-transform: uppercase; margin-bottom: 5px;">STATUS SESI HARI INI</div>
                    <span class="badge" style="background-color: #fffbeb; color: #d97706; border: 1px solid #fcd34d;">BELUM DISUBMIT</span>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="filter-bar" style="display: grid; grid-template-columns: 1fr 1fr 1fr auto; gap: 15px; align-items: flex-end; margin-bottom: 25px;">
                <div class="form-group">
                    <label class="form-label">Periode</label>
                    <select class="form-control"><option>1-30 September 2026</option></select>
                </div>
                <div class="form-group">
                    <label class="form-label">Kelas</label>
                    <select class="form-control"><option>Semua Kelas</option></select>
                </div>
                <div class="form-group">
                    <label class="form-label">Mata Pelajaran</label>
                    <select class="form-control"><option>Semua Mata Pelajaran</option></select>
                </div>
                <button class="btn-primary" style="background-color: var(--primary-dark); height: 42px;">Tampilkan</button>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 40px;">
                <div>
                    <h4 style="font-size: 15px; font-weight: 600; color: var(--primary-blue); margin-bottom: 15px;">Rekap per Kelas</h4>
                    <table class="table" style="font-size: 13px;">
                        <thead>
                            <tr>
                                <th>KELAS</th>
                                <th>HADIR</th>
                                <th>IZIN</th>
                                <th>SAKIT</th>
                                <th>ALPA</th>
                                <th>% KEHADIRAN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="font-weight: 600; color: var(--primary-blue);">7A</td>
                                <td>32</td>
                                <td style="color: #10b981;">0</td>
                                <td style="color: #3b82f6;">0</td>
                                <td style="color: #d97706;">0</td>
                                <td>100.0%</td>
                            </tr>
                            <tr>
                                <td style="font-weight: 600; color: var(--primary-blue);">7B</td>
                                <td>30</td>
                                <td style="color: #10b981;">1</td>
                                <td style="color: #3b82f6;">1</td>
                                <td style="color: #d97706;">0</td>
                                <td>95.0%</td>
                            </tr>
                            <tr>
                                <td style="font-weight: 600; color: var(--primary-blue);">7C</td>
                                <td>31</td>
                                <td style="color: #10b981;">0</td>
                                <td style="color: #3b82f6;">0</td>
                                <td style="color: #d97706;">1</td>
                                <td>98.0%</td>
                            </tr>
                            <tr>
                                <td style="font-weight: 600; color: var(--primary-blue);">7D</td>
                                <td>32</td>
                                <td style="color: #10b981;">0</td>
                                <td style="color: #3b82f6;">0</td>
                                <td style="color: #d97706;">0</td>
                                <td>100.0%</td>
                            </tr>
                            <tr>
                                <td style="font-weight: 600; color: var(--primary-blue);">8A</td>
                                <td>30</td>
                                <td style="color: #10b981;">0</td>
                                <td style="color: #3b82f6;">1</td>
                                <td style="color: #d97706;">1</td>
                                <td>95.0%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div>
                    <h4 style="font-size: 15px; font-weight: 600; color: var(--primary-blue); margin-bottom: 30px;">Persentase kehadiran</h4>
                    <div style="display: flex; align-items: center; justify-content: center; gap: 40px;">
                        <!-- CSS Donut Chart Mock -->
                        <div style="position: relative; width: 160px; height: 160px; border-radius: 50%; background: conic-gradient(#10b981 0% 91.9%, #fcd34d 91.9% 96.7%, #ef4444 96.7% 98.7%, #3b82f6 98.7% 100%); display: flex; align-items: center; justify-content: center;">
                            <div style="width: 110px; height: 110px; background-color: white; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                                <span style="font-size: 24px; font-weight: 700; color: var(--primary-dark);">91,9%</span>
                                <span style="font-size: 12px; color: var(--text-muted);">Hadir</span>
                            </div>
                        </div>
                        
                        <!-- Legend -->
                        <div style="display: flex; flex-direction: column; gap: 15px;">
                            <div class="d-flex align-items-center justify-content-between" style="width: 120px;">
                                <div class="d-flex align-items-center gap-2"><span style="width: 12px; height: 12px; border-radius: 50%; background-color: #10b981; display: inline-block;"></span> <span style="font-size: 13px; font-weight: 500;">Hadir</span></div>
                                <span style="font-size: 13px; color: var(--text-muted);">91,9%</span>
                            </div>
                            <div class="d-flex align-items-center justify-content-between" style="width: 120px;">
                                <div class="d-flex align-items-center gap-2"><span style="width: 12px; height: 12px; border-radius: 50%; background-color: #fcd34d; display: inline-block;"></span> <span style="font-size: 13px; font-weight: 500;">Izin</span></div>
                                <span style="font-size: 13px; color: var(--text-muted);">4,8%</span>
                            </div>
                            <div class="d-flex align-items-center justify-content-between" style="width: 120px;">
                                <div class="d-flex align-items-center gap-2"><span style="width: 12px; height: 12px; border-radius: 50%; background-color: #ef4444; display: inline-block;"></span> <span style="font-size: 13px; font-weight: 500;">Sakit</span></div>
                                <span style="font-size: 13px; color: var(--text-muted);">2,0%</span>
                            </div>
                            <div class="d-flex align-items-center justify-content-between" style="width: 120px;">
                                <div class="d-flex align-items-center gap-2"><span style="width: 12px; height: 12px; border-radius: 50%; background-color: #3b82f6; display: inline-block;"></span> <span style="font-size: 13px; font-weight: 500;">Alpa</span></div>
                                <span style="font-size: 13px; color: var(--text-muted);">1,2%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mock Bar Chart -->
            <div style="border-top: 1px solid var(--border-color); padding-top: 25px;">
                <h4 style="font-size: 14px; font-weight: 600; color: var(--primary-blue); margin-bottom: 20px;">Tren Kehadiran Mingguan</h4>
                <div style="display: flex; justify-content: space-around; align-items: flex-end; height: 180px; padding: 0 40px;">
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                        <div style="width: 45px; height: 120px; background-color: var(--primary-dark); border-radius: 4px 4px 0 0;"></div>
                        <span style="font-size: 12px; color: var(--text-muted);">Sen</span>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                        <div style="width: 45px; height: 140px; background-color: var(--primary-dark); border-radius: 4px 4px 0 0;"></div>
                        <span style="font-size: 12px; color: var(--text-muted);">Sel</span>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                        <div style="width: 45px; height: 110px; background-color: var(--primary-dark); border-radius: 4px 4px 0 0;"></div>
                        <span style="font-size: 12px; color: var(--text-muted);">Rab</span>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                        <div style="width: 45px; height: 150px; background-color: #fcd34d; border-radius: 4px 4px 0 0;"></div>
                        <span style="font-size: 12px; color: var(--text-muted);">Kam</span>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                        <div style="width: 45px; height: 130px; background-color: var(--primary-dark); border-radius: 4px 4px 0 0;"></div>
                        <span style="font-size: 12px; color: var(--text-muted);">Jum</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}
