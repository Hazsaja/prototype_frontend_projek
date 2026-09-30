export function renderFormSiswa(isEdit = false) {
    const title = isEdit ? 'Edit Siswa' : 'Tambah Siswa';
    const buttonText = isEdit ? 'Simpan Perubahan' : 'Simpan';
    
    return `
        <h2 style="font-size: 20px; color: var(--primary-blue); margin-bottom: 20px;">${title}</h2>
        
        <div class="card" style="max-width: 800px; margin: 0 auto;">
            <form id="form-siswa">
                <div class="form-row">
                    <div class="form-col">
                        <div class="form-group">
                            <label class="form-label">NISN <span class="required">*</span></label>
                            <input type="text" class="form-control" placeholder="Contoh: 0012xxxxxx" value="${isEdit ? '0091243001' : ''}">
                        </div>
                    </div>
                    <div class="form-col">
                        <div class="form-group">
                            <label class="form-label">NIS <span class="required">*</span></label>
                            <input type="text" class="form-control" placeholder="Contoh: 260401" value="${isEdit ? '260401' : ''}">
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-col">
                        <div class="form-group">
                            <label class="form-label">Nama Lengkap <span class="required">*</span></label>
                            <input type="text" class="form-control" placeholder="Masukkan nama lengkap" value="${isEdit ? 'Budi Setiawan' : ''}">
                        </div>
                    </div>
                    <div class="form-col">
                        <div class="form-group">
                            <label class="form-label">Kelas <span class="required">*</span></label>
                            <select class="form-control">
                                <option ${isEdit ? '' : 'selected'}>Pilih Kelas</option>
                                <option ${isEdit ? 'selected' : ''}>7A</option>
                                <option>7B</option>
                                <option>7C</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-col">
                        <div class="form-group">
                            <label class="form-label">Jenis Kelamin <span class="required">*</span></label>
                            <div class="radio-group">
                                <label class="radio-label">
                                    <input type="radio" name="gender" class="radio-input" ${isEdit ? 'checked' : 'checked'}> Laki-Laki
                                </label>
                                <label class="radio-label">
                                    <input type="radio" name="gender" class="radio-input"> Perempuan
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-col">
                        <div class="form-group">
                            <label class="form-label">Tempat, Tanggal, Lahir <span class="required">*</span></label>
                            <input type="text" class="form-control" placeholder="Contoh: Bogor, 13 Mei 2013" value="${isEdit ? 'Bogor, 13 Mei 2013' : ''}">
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-col">
                        <div class="form-group">
                            <label class="form-label">Nama Orang Tua/Wali <span class="required">*</span></label>
                            <input type="text" class="form-control" placeholder="Contoh: Bambang Yudi" value="${isEdit ? 'Bambang Yudi' : ''}">
                        </div>
                    </div>
                    <div class="form-col">
                        <div class="form-group">
                            <label class="form-label">Kontak Orang Tua/Wali <span class="required">*</span></label>
                            <input type="text" class="form-control" placeholder="Contoh: 0852xxxxxxxxx" value="${isEdit ? '081347103021' : ''}">
                        </div>
                    </div>
                </div>

                <div class="form-actions">
                    <button type="button" class="btn-secondary" id="btn-batal">Batal</button>
                    <button type="button" class="btn-primary" id="btn-simpan">${buttonText}</button>
                </div>
            </form>
        </div>
    `;
}
