export function renderMonitoringAbsen() {
    return `
        <div class="card" style="margin-bottom: 25px;">
            <div class="d-flex justify-content-between align-items-start">
                <div>
                    <span class="badge badge-outline-warning" style="background-color: #fffbeb; margin-bottom: 10px; display: inline-block;">Wali kelas 7A</span>
                    <h2 style="font-size: 20px; color: var(--primary-blue); margin-bottom: 5px;">Monitoring Presensi Lintas Mata Pelajaran</h2>
                    <p style="color: var(--text-muted); font-size: 13px;">Pantau statistik kehadiran harian dan bulanan anak didik dari seluruh mata pelajaran</p>
                </div>
                <div class="d-flex gap-3">
                    <div class="form-control d-flex align-items-center gap-3" style="width: auto; padding: 8px 15px; cursor: pointer;">
                        <span>09/09/2026</span>
                        <i class="far fa-calendar-alt"></i>
                    </div>
                    <select class="btn-primary" style="background-color: var(--primary-dark); border: none; padding: 8px 15px; border-radius: 6px; font-family: var(--font-family);">
                        <option>Semua Kelas</option>
                        <option>7A</option>
                        <option>7B</option>
                    </select>
                </div>
            </div>

            <div class="pills-container">
                <button class="pill active">Semua Mapel</button>
                <button class="pill">Matematika</button>
                <button class="pill">Bahasa Indonesia</button>
                <button class="pill">PAI</button>
                <button class="pill">Bahasa Sunda</button>
                <button class="pill">IPA</button>
                <button class="pill">Bahasa Inggris</button>
                <button class="pill">IPS</button>
                <button class="pill">PPKN</button>
                <button class="pill">Seni Budaya dan Keterampilan</button>
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
                            <td><span class="status-badge hadir">Hadir</span></td>
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
