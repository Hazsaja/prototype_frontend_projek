export function renderRekapanAbsen() {
    return `
        <div class="card" style="margin-bottom: 25px;">
            <div class="report-header" style="margin-bottom: 20px;">
                <div>
                    <h2 style="font-size: 20px; color: var(--primary-blue); margin-bottom: 5px;">Rekapan Absensi</h2>
                    <p style="color: var(--text-muted); font-size: 13px;">Lihat rekapitulasi kehadiran berdasarkan kelas, periode, dan mata pelajaran</p>
                </div>
            </div>
            
            <div class="report-filters">
                <div class="form-group" style="margin-bottom: 0;">
                    <label class="form-label">Kelas</label>
                    <select class="form-control">
                        <option>7A</option>
                        <option>7B</option>
                        <option>7C</option>
                    </select>
                </div>
                <div class="form-group" style="margin-bottom: 0;">
                    <label class="form-label">Periode</label>
                    <select class="form-control">
                        <option>Minggu Ini</option>
                        <option>Bulan Ini</option>
                        <option>Semester Ini</option>
                    </select>
                </div>
                <div class="form-group" style="margin-bottom: 0;">
                    <label class="form-label">Mata Pelajaran</label>
                    <select class="form-control">
                        <option>Semua Mata Pelajaran</option>
                        <option>Matematika</option>
                        <option>Bahasa Indonesia</option>
                    </select>
                </div>
                <div class="form-group" style="margin-bottom: 0;">
                    <button class="btn-primary" style="background-color: var(--primary-dark); padding: 10px 30px; width: 100%; justify-content: center;">Tampilkan</button>
                </div>
            </div>
        </div>

        <div class="summary-grid">
            <div class="summary-card success-card">
                <div class="summary-icon success"><i class="fas fa-check-circle"></i></div>
                <div class="summary-details">
                    <h4>Hadir</h4>
                    <div class="count">218</div>
                    <div class="percent">(78,1%)</div>
                </div>
            </div>
            <div class="summary-card warning-card">
                <div class="summary-icon warning"><i class="fas fa-user"></i></div>
                <div class="summary-details">
                    <h4>Izin</h4>
                    <div class="count">32</div>
                    <div class="percent">(11,4%)</div>
                </div>
            </div>
            <div class="summary-card info-card">
                <div class="summary-icon info"><i class="fas fa-user"></i></div>
                <div class="summary-details">
                    <h4>Sakit</h4>
                    <div class="count">18</div>
                    <div class="percent">(6,4%)</div>
                </div>
            </div>
            <div class="summary-card danger-card">
                <div class="summary-icon danger"><i class="fas fa-user"></i></div>
                <div class="summary-details">
                    <h4>Alpha</h4>
                    <div class="count">11</div>
                    <div class="percent">(3,9%)</div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h3 style="font-size: 16px; color: var(--primary-blue); font-weight: 700;">PRESENSI KELAS 7A (28 September 2026)</h3>
                <div class="text-muted" style="font-size: 12px;"><i class="fas fa-sync-alt"></i> Update real-time</div>
            </div>

            <div class="table-container">
                <table class="table" style="background-color: #fffbeb;">
                    <thead>
                        <tr style="background-color: #fffbeb;">
                            <th>NO</th>
                            <th>Nama Siswa</th>
                            <th>MATEMATIKA<br><span style="font-weight: 400; font-size: 10px;">07.00 - 08.30</span></th>
                            <th>B. Indonesia<br><span style="font-weight: 400; font-size: 10px;">08.30 - 10.00</span></th>
                            <th>PAI<br><span style="font-weight: 400; font-size: 10px;">08.30 - 10.00</span></th>
                            <th>Bahasa Sunda<br><span style="font-weight: 400; font-size: 10px;">08.30 - 10.00</span></th>
                            <th>Bahasa Inggris<br><span style="font-weight: 400; font-size: 10px;">08.30 - 10.00</span></th>
                            <th>IPS<br><span style="font-weight: 400; font-size: 10px;">08.30 - 10.00</span></th>
                            <th>Status Harian</th>
                        </tr>
                    </thead>
                    <tbody style="background-color: #ffffff;">
                        <tr>
                            <td>1</td>
                            <td>Budi Setiawan</td>
                            <td><span class="status-badge hadir">Hadir</span></td>
                            <td><span class="status-badge hadir">Hadir</span></td>
                            <td><span class="status-badge hadir">Hadir</span></td>
                            <td><span class="status-badge hadir">Hadir</span></td>
                            <td><span class="status-badge hadir">Hadir</span></td>
                            <td><span class="status-badge hadir">Hadir</span></td>
                            <td><span class="status-badge" style="background-color: white; border: 1px solid var(--border-color); color: var(--text-main);">Hadir</span></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Budi Setiawan</td>
                            <td><span class="status-badge hadir">Hadir</span></td>
                            <td><span class="status-badge hadir">Hadir</span></td>
                            <td><span class="status-badge hadir">Hadir</span></td>
                            <td><span class="status-badge hadir">Hadir</span></td>
                            <td><span class="status-badge sakit">Sakit</span></td>
                            <td><span class="status-badge hadir">Hadir</span></td>
                            <td><span class="status-badge" style="background-color: white; border: 1px solid var(--border-color); color: var(--text-main);">Hadir</span></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Budi Setiawan</td>
                            <td><span class="status-badge hadir">Hadir</span></td>
                            <td><span class="status-badge hadir">Hadir</span></td>
                            <td><span class="status-badge hadir">Hadir</span></td>
                            <td><span class="status-badge hadir">Hadir</span></td>
                            <td><span class="status-badge hadir">Hadir</span></td>
                            <td><span class="status-badge alpha">Alpha</span></td>
                            <td><span class="status-badge" style="background-color: white; border: 1px solid var(--border-color); color: var(--text-main);">Hadir</span></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Budi Setiawan</td>
                            <td><span class="status-badge hadir">Hadir</span></td>
                            <td><span class="status-badge hadir">Hadir</span></td>
                            <td><span class="status-badge hadir">Hadir</span></td>
                            <td><span class="status-badge izin">Izin</span></td>
                            <td><span class="status-badge hadir">Hadir</span></td>
                            <td><span class="status-badge hadir">Hadir</span></td>
                            <td><span class="status-badge" style="background-color: white; border: 1px solid var(--border-color); color: var(--text-main);">Hadir</span></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Budi Setiawan</td>
                            <td><span class="status-badge hadir">Hadir</span></td>
                            <td><span class="status-badge hadir">Hadir</span></td>
                            <td><span class="status-badge hadir">Hadir</span></td>
                            <td><span class="status-badge hadir">Hadir</span></td>
                            <td><span class="status-badge hadir">Hadir</span></td>
                            <td><span class="status-badge hadir">Hadir</span></td>
                            <td><span class="status-badge" style="background-color: white; border: 1px solid var(--border-color); color: var(--text-main);">Hadir</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="d-flex justify-content-between align-items-center mt-4">
                <div class="pagination">
                    <div class="page-item disabled"><i class="fas fa-chevron-left"></i></div>
                    <div class="page-item active" style="background-color: var(--primary-dark); border-color: var(--primary-dark);">1</div>
                    <div class="page-item">2</div>
                    <div class="page-item"><i class="fas fa-chevron-right"></i></div>
                </div>
            </div>

            <div class="d-flex justify-content-between align-items-center" style="margin-top: 20px; border-top: 1px solid var(--border-color); padding-top: 20px;">
                <div style="font-size: 13px; font-weight: 600; color: var(--primary-blue);">
                    Total: 40 Siswa | Hadir: 38 | Izin: 1 | Sakit: 1 | Alpa: 0
                </div>
                <button class="btn-primary" style="background-color: var(--primary-dark);">Submit Absensi <i class="fas fa-paper-plane" style="margin-left: 5px;"></i></button>
            </div>
        </div>
    `;
}
