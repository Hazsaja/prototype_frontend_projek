export function renderDataSiswa() {
    return `
        <div class="card">
            <div class="page-header">
                <span class="badge">Hak Akses Wali Kelas</span>
                <div class="page-header-actions">
                    <div>
                        <h2>Daftar Siswa Kelas 7A</h2>
                        <p>Kelola informasi profil, kontak orang tua/wali, dan data administrasi siswa</p>
                    </div>
                    <div class="btn-primary" style="background-color: var(--primary-dark); cursor: default;">Total: 40 Siswa</div>
                </div>
            </div>

            <div class="filter-bar">
                <div class="search-box">
                    <i class="fas fa-search"></i>
                    <input type="text" class="form-control" placeholder="Cari nama atau NIS siswa...">
                </div>
                <div class="filter-actions">
                    <select class="form-control" style="width: 180px;">
                        <option>Semua Gender</option>
                        <option>Laki-Laki</option>
                        <option>Perempuan</option>
                    </select>
                    <button class="btn-primary" id="btn-tambah-siswa">
                        <i class="fas fa-user-plus"></i> Tambah Siswa
                    </button>
                </div>
            </div>

            <div class="table-container">
                <table class="table">
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>NIS/NISN</th>
                            <th>NAMA LENGKAP</th>
                            <th>L/P</th>
                            <th>TEMPAT, TGL LAHIR</th>
                            <th>NAMA ORANG TUA/WALI</th>
                            <th>KONTAK ORANG TUA/WALI</th>
                            <th>AKSI</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>260401/<br>0091243001</td>
                            <td>Budi Setiawan</td>
                            <td><span class="badge-gender">L</span></td>
                            <td>Bogor, 13 Mei 2013</td>
                            <td>Bambang Yudi</td>
                            <td>081347103021</td>
                            <td>
                                <div class="actions">
                                    <button class="btn-icon"><i class="far fa-trash-alt"></i></button>
                                    <button class="btn-icon btn-edit-siswa"><i class="far fa-edit"></i></button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>260402/<br>0091243002</td>
                            <td>Siti Aulia</td>
                            <td><span class="badge-gender female">P</span></td>
                            <td>Jakarta, 21 Apr 2013</td>
                            <td>Ahmad Dahlan</td>
                            <td>08122334455</td>
                            <td>
                                <div class="actions">
                                    <button class="btn-icon"><i class="far fa-trash-alt"></i></button>
                                    <button class="btn-icon btn-edit-siswa"><i class="far fa-edit"></i></button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>260403/<br>0091243003</td>
                            <td>Raka Pratama</td>
                            <td><span class="badge-gender">L</span></td>
                            <td>Bogor, 10 Jun 2013</td>
                            <td>Susanto</td>
                            <td>08567788990</td>
                            <td>
                                <div class="actions">
                                    <button class="btn-icon"><i class="far fa-trash-alt"></i></button>
                                    <button class="btn-icon btn-edit-siswa"><i class="far fa-edit"></i></button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>260404/<br>0091243004</td>
                            <td>Salsa Amelia</td>
                            <td><span class="badge-gender female">P</span></td>
                            <td>Depok, 05 Ags 2013</td>
                            <td>Ridwan Kamil</td>
                            <td>087811223344</td>
                            <td>
                                <div class="actions">
                                    <button class="btn-icon"><i class="far fa-trash-alt"></i></button>
                                    <button class="btn-icon btn-edit-siswa"><i class="far fa-edit"></i></button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>260405/<br>0091243005</td>
                            <td>Fajar Ramadhan</td>
                            <td><span class="badge-gender">L</span></td>
                            <td>Bogor, 12 Sep 2013</td>
                            <td>Budi Utomo</td>
                            <td>089900112233</td>
                            <td>
                                <div class="actions">
                                    <button class="btn-icon"><i class="far fa-trash-alt"></i></button>
                                    <button class="btn-icon btn-edit-siswa"><i class="far fa-edit"></i></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="pagination-container">
                <div>Menampilkan 1-5 dari 40 siswa</div>
                <div class="pagination">
                    <div class="page-item disabled"><i class="fas fa-chevron-left"></i></div>
                    <div class="page-item active">1</div>
                    <div class="page-item">2</div>
                    <div class="page-item">3</div>
                    <div class="page-item" style="border:none;">...</div>
                    <div class="page-item">12</div>
                    <div class="page-item"><i class="fas fa-chevron-right"></i></div>
                </div>
            </div>
        </div>
    `;
}
