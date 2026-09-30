export function renderFormKelas(mode = 'add') {
    const isEdit = mode === 'edit';
    const title = isEdit ? 'Edit Kelas' : 'Tambah Kelas';
    const submitText = isEdit ? 'Simpan Perubahan' : 'Simpan';
    
    return `
        <div style="max-width: 800px; margin: 0 auto;">
            <h2 style="font-size: 22px; font-weight: 700; color: var(--primary-dark); margin-bottom: 25px;">${title}</h2>
            
            <div class="card" style="padding: 40px; background: #fff; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
                <form id="form-kelas">
                    <!-- Nama Kelas -->
                    <div style="margin-bottom: 25px;">
                        <label style="display: block; font-size: 14px; font-weight: 600; color: var(--primary-dark); margin-bottom: 10px;">
                            Nama Kelas <span style="color: #ef4444;">*</span>
                        </label>
                        <input type="text" placeholder="Contoh: 7A" style="width: 100%; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; outline: none;">
                    </div>

                    <!-- Tingkat -->
                    <div style="margin-bottom: 25px;">
                        <label style="display: block; font-size: 14px; font-weight: 600; color: var(--primary-dark); margin-bottom: 10px;">
                            Tingkat <span style="color: #ef4444;">*</span>
                        </label>
                        <select style="width: 100%; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; outline: none; background: #fff; cursor: pointer;">
                            <option>Pilih Tingkat</option>
                            <option>Kelas 7</option>
                            <option>Kelas 8</option>
                            <option>Kelas 9</option>
                        </select>
                    </div>

                    <!-- Wali Kelas -->
                    <div style="margin-bottom: 40px;">
                        <label style="display: block; font-size: 14px; font-weight: 600; color: var(--primary-dark); margin-bottom: 10px;">
                            Wali Kelas <span style="color: #ef4444;">*</span>
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
                        <button type="button" id="btn-batal-kelas" style="padding: 12px 30px; background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 14px; font-weight: 700; color: var(--primary-dark); cursor: pointer; min-width: 120px;">
                            Batal
                        </button>
                        <button type="button" id="btn-simpan-kelas" style="padding: 12px 30px; background: var(--primary-dark); border: none; border-radius: 8px; font-size: 14px; font-weight: 700; color: #fff; cursor: pointer; min-width: 160px;">
                            ${submitText}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;
}
