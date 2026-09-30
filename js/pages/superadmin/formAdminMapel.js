export function renderFormAdminMapel(mode = 'add') {
    const isEdit = mode === 'edit';
    const title = isEdit ? 'Edit Mata Pelajaran' : 'Tambah Mata Pelajaran';
    const submitText = isEdit ? 'Simpan Perubahan' : 'Simpan';
    
    return `
        <div style="max-width: 800px; margin: 0 auto;">
            <h2 style="font-size: 22px; font-weight: 700; color: var(--primary-dark); margin-bottom: 25px;">${title}</h2>
            
            <div class="card" style="padding: 40px; background: #fff; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
                <form id="form-mapel-admin">
                    <!-- Nama Mata Pelajaran -->
                    <div style="margin-bottom: 25px;">
                        <label style="display: block; font-size: 14px; font-weight: 600; color: var(--primary-dark); margin-bottom: 10px;">
                            Nama Mata Pelajaran <span style="color: #ef4444;">*</span>
                        </label>
                        <input type="text" placeholder="Contoh: Matematika" style="width: 100%; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; outline: none;">
                    </div>

                    <!-- Kode Mapel -->
                    <div style="margin-bottom: 25px;">
                        <label style="display: block; font-size: 14px; font-weight: 600; color: var(--primary-dark); margin-bottom: 10px;">
                            Kode Mapel <span style="color: #ef4444;">*</span>
                        </label>
                        <input type="text" placeholder="Contoh: MTK" style="width: 100%; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; outline: none;">
                    </div>

                    <!-- Kelompok -->
                    <div style="margin-bottom: 25px;">
                        <label style="display: block; font-size: 14px; font-weight: 600; color: var(--primary-dark); margin-bottom: 10px;">
                            Kelompok <span style="color: #ef4444;">*</span>
                        </label>
                        <select style="width: 100%; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; outline: none; background: #fff; cursor: pointer;">
                            <option>Pilih Kelompok</option>
                            <option>Kelompok A (Wajib)</option>
                            <option>Kelompok B (Wajib)</option>
                            <option>Muatan Lokal</option>
                        </select>
                    </div>

                    <!-- Guru Pengampu -->
                    <div style="margin-bottom: 40px;">
                        <label style="display: block; font-size: 14px; font-weight: 600; color: var(--primary-dark); margin-bottom: 10px;">
                            Guru Pengampu <span style="color: #ef4444;">*</span>
                        </label>
                        <select style="width: 100%; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; outline: none; background: #fff; cursor: pointer;">
                            <option>Pilih Guru</option>
                            <option>Bu Siti Rahmawati S.Pd</option>
                            <option>Pak Ahmad Faisal S.Pd</option>
                            <option>Bu Dewi Lestari S.Pd</option>
                        </select>
                    </div>

                    <!-- Buttons -->
                    <div style="display: flex; justify-content: flex-end; gap: 15px;">
                        <button type="button" id="btn-batal-mapel" style="padding: 12px 30px; background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 14px; font-weight: 700; color: var(--primary-dark); cursor: pointer; min-width: 120px;">
                            Batal
                        </button>
                        <button type="button" id="btn-simpan-mapel" style="padding: 12px 30px; background: var(--primary-dark); border: none; border-radius: 8px; font-size: 14px; font-weight: 700; color: #fff; cursor: pointer; min-width: 160px;">
                            ${submitText}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;
}
