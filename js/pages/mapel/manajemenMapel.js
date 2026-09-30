export function renderManajemenMapel() {
    return `
        <div class="page-header" style="margin-bottom: 25px;">
            <div class="page-header-actions">
                <div>
                    <h2>Data Mata Pelajaran</h2>
                    <p>Kelola kurikulum, daftar mata pelajaran (Mapel), kode kelompok kurikulum, dan pengampu utama.</p>
                </div>
                <button class="btn-primary" id="btn-tambah-mapel" style="background-color: var(--primary-dark);">
                    <i class="fas fa-plus"></i> Tambah Mapel
                </button>
            </div>
        </div>

        <div class="summary-grid" style="grid-template-columns: repeat(3, 1fr);">
            <div class="summary-card" style="display: block;">
                <div style="font-size: 11px; font-weight: 600; color: var(--text-muted); text-transform: uppercase; margin-bottom: 5px;">TOTAL MATA PELAJARAN</div>
                <div style="font-size: 32px; font-weight: 700; color: var(--primary-blue); margin-bottom: 10px;">18</div>
                <div style="font-size: 13px; color: var(--text-muted);">Mapel Kurikulum Merdeka SMPN 1</div>
            </div>
            <div class="summary-card" style="display: block;">
                <div style="font-size: 11px; font-weight: 600; color: var(--text-muted); text-transform: uppercase; margin-bottom: 5px;">KELOMPOK UMUM</div>
                <div style="font-size: 32px; font-weight: 700; color: var(--primary-blue); margin-bottom: 10px;">14</div>
                <div style="font-size: 13px; color: var(--text-muted);">Kurikulum nasional inti</div>
            </div>
            <div class="summary-card" style="display: block;">
                <div style="font-size: 11px; font-weight: 600; color: var(--text-muted); text-transform: uppercase; margin-bottom: 5px;">KELOMPOK LOKAL/MUATAN</div>
                <div style="font-size: 32px; font-weight: 700; color: var(--primary-blue); margin-bottom: 10px;">4</div>
                <div style="font-size: 13px; color: var(--text-muted);">Keahlian dan muatan lokal daerah</div>
            </div>
        </div>

        <div class="card">
            <div class="filter-bar">
                <div class="d-flex gap-3" style="flex: 1;">
                    <div class="search-box" style="max-width: 300px;">
                        <i class="fas fa-search"></i>
                        <input type="text" class="form-control" placeholder="Cari mata pelajaran...">
                    </div>
                    <select class="form-control" style="width: 200px;">
                        <option>Semua Kelompok</option>
                        <option>Umum</option>
                        <option>Lokal/Muatan</option>
                    </select>
                </div>
                <div class="academic-year" style="background-color: #fffbeb; color: #d97706; border-color: #fcd555;">
                    Tahun Ajaran 2026/2027
                </div>
            </div>

            <div class="table-container">
                <table class="table">
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>NAMA MATA PELAJARAN</th>
                            <th>KODE MAPEL</th>
                            <th>KELOMPOK</th>
                            <th>GURU PENGAMPU</th>
                            <th style="text-align: right;">AKSI</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td style="font-weight: 600; color: var(--primary-blue);">Bahasa Indonesia</td>
                            <td>BIND</td>
                            <td>Umum</td>
                            <td>Bu Siti Rahmawati S.Pd</td>
                            <td>
                                <div class="actions" style="justify-content: flex-end;">
                                    <button class="btn-secondary btn-edit-mapel" style="padding: 4px 12px; font-size: 12px;">Edit</button>
                                    <button class="btn-secondary" style="padding: 4px 12px; font-size: 12px; color: var(--danger-btn); border-color: #fca5a5; background-color: #fef2f2;">Hapus</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td style="font-weight: 600; color: var(--primary-blue);">Matematika</td>
                            <td>MTK</td>
                            <td>Umum</td>
                            <td>Pak Ahmad Faisal S.Pd</td>
                            <td>
                                <div class="actions" style="justify-content: flex-end;">
                                    <button class="btn-secondary btn-edit-mapel" style="padding: 4px 12px; font-size: 12px;">Edit</button>
                                    <button class="btn-secondary" style="padding: 4px 12px; font-size: 12px; color: var(--danger-btn); border-color: #fca5a5; background-color: #fef2f2;">Hapus</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td style="font-weight: 600; color: var(--primary-blue);">IPA</td>
                            <td>IPA</td>
                            <td>Umum</td>
                            <td>Bu Dewi Lestari S.Pd</td>
                            <td>
                                <div class="actions" style="justify-content: flex-end;">
                                    <button class="btn-secondary btn-edit-mapel" style="padding: 4px 12px; font-size: 12px;">Edit</button>
                                    <button class="btn-secondary" style="padding: 4px 12px; font-size: 12px; color: var(--danger-btn); border-color: #fca5a5; background-color: #fef2f2;">Hapus</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td style="font-weight: 600; color: var(--primary-blue);">Bahasa Inggris</td>
                            <td>BING</td>
                            <td>Umum</td>
                            <td>Pak Budi Santoso S.Pd</td>
                            <td>
                                <div class="actions" style="justify-content: flex-end;">
                                    <button class="btn-secondary btn-edit-mapel" style="padding: 4px 12px; font-size: 12px;">Edit</button>
                                    <button class="btn-secondary" style="padding: 4px 12px; font-size: 12px; color: var(--danger-btn); border-color: #fca5a5; background-color: #fef2f2;">Hapus</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td style="font-weight: 600; color: var(--primary-blue);">Pendidikan Agama Islam</td>
                            <td>PAI</td>
                            <td>Wajib</td>
                            <td>Bu Rina Marlina S.Pd</td>
                            <td>
                                <div class="actions" style="justify-content: flex-end;">
                                    <button class="btn-secondary btn-edit-mapel" style="padding: 4px 12px; font-size: 12px;">Edit</button>
                                    <button class="btn-secondary" style="padding: 4px 12px; font-size: 12px; color: var(--danger-btn); border-color: #fca5a5; background-color: #fef2f2;">Hapus</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="pagination-container">
                <div>Menampilkan 1-5 dari 18 data</div>
                <div class="pagination">
                    <div class="page-item disabled"><i class="fas fa-chevron-left"></i></div>
                    <div class="page-item active" style="background-color: var(--primary-dark); border-color: var(--primary-dark);">1</div>
                    <div class="page-item">2</div>
                    <div class="page-item"><i class="fas fa-chevron-right"></i></div>
                </div>
            </div>
        </div>
    `;
}
