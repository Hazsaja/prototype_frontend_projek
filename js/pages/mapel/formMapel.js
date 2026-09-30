export function renderFormMapel(isEdit = false) {
    const title = isEdit ? 'Edit Mata Pelajaran' : 'Tambah Mata Pelajaran';
    const buttonText = isEdit ? 'Simpan Perubahan' : 'Simpan';
    
    return `
        <h2 style="font-size: 20px; color: var(--primary-blue); margin-bottom: 20px;">${title}</h2>
        
        <div class="card" style="max-width: 800px; margin: 0 auto; padding: 40px;">
            <form id="form-mapel">
                <div class="form-group mb-4">
                    <label class="form-label" style="font-size: 15px;">Nama Mata Pelajaran <span class="required">*</span></label>
                    <input type="text" class="form-control" style="padding: 12px 15px;" placeholder="Contoh: Matematika" value="${isEdit ? 'Matematika' : ''}">
                </div>

                <div class="form-group mb-4">
                    <label class="form-label" style="font-size: 15px;">Kode Mapel <span class="required">*</span></label>
                    <input type="text" class="form-control" style="padding: 12px 15px;" placeholder="Contoh: MTK" value="${isEdit ? 'MTK' : ''}">
                </div>

                <div class="form-group mb-4">
                    <label class="form-label" style="font-size: 15px;">Kelompok <span class="required">*</span></label>
                    <select class="form-control" style="padding: 12px 15px;">
                        <option ${isEdit ? '' : 'selected'}>Pilih Kelompok</option>
                        <option ${isEdit ? 'selected' : ''}>Umum</option>
                        <option>Wajib</option>
                        <option>Lokal/Muatan</option>
                    </select>
                </div>

                <div class="form-group mb-4">
                    <label class="form-label" style="font-size: 15px;">Guru Pengampu <span class="required">*</span></label>
                    <select class="form-control" style="padding: 12px 15px;">
                        <option ${isEdit ? '' : 'selected'}>Pilih Guru</option>
                        <option ${isEdit ? 'selected' : ''}>Pak Ahmad Faisal S.Pd</option>
                        <option>Bu Siti Rahmawati S.Pd</option>
                    </select>
                </div>

                <div class="form-actions" style="margin-top: 40px;">
                    <button type="button" class="btn-secondary" id="btn-batal-mapel" style="padding: 12px 30px;">Batal</button>
                    <button type="button" class="btn-primary" id="btn-simpan-mapel" style="padding: 12px 30px; background-color: var(--primary-dark);">${buttonText}</button>
                </div>
            </form>
        </div>
    `;
}
