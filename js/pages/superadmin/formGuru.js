export function renderFormGuru(mode = 'add') {
    const isEdit = mode === 'edit';
    const title = isEdit ? 'Edit Guru' : 'Tambah Guru';
    const submitText = isEdit ? 'Simpan Perubahan' : 'Simpan';
    
    return `
        <div style="max-width: 800px; margin: 0 auto;">
            <h2 style="font-size: 22px; font-weight: 700; color: var(--primary-dark); margin-bottom: 25px;">${title}</h2>
            
            <div class="card" style="padding: 40px; background: #fff; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
                <form id="form-guru">
                    <!-- Nama Lengkap -->
                    <div style="margin-bottom: 25px;">
                        <label style="display: block; font-size: 14px; font-weight: 600; color: var(--primary-dark); margin-bottom: 10px;">
                            Nama Lengkap <span style="color: #ef4444;">*</span>
                        </label>
                        <input type="text" placeholder="Contoh: Ahmad Fauzi" style="width: 100%; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; outline: none; transition: border-color 0.2s;">
                    </div>

                    <!-- NIP -->
                    <div style="margin-bottom: 25px;">
                        <label style="display: block; font-size: 14px; font-weight: 600; color: var(--primary-dark); margin-bottom: 10px;">
                            NIP <span style="color: #ef4444;">*</span>
                        </label>
                        <input type="text" value="07.00" style="width: 100%; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; outline: none; transition: border-color 0.2s;">
                    </div>

                    <!-- Mata Pelajaran -->
                    <div style="margin-bottom: 25px;">
                        <label style="display: block; font-size: 14px; font-weight: 600; color: var(--primary-dark); margin-bottom: 10px;">
                            Mata Pelajaran <span style="color: #ef4444;">*</span>
                        </label>
                        <select style="width: 100%; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; outline: none; background: #fff; cursor: pointer;">
                            <option>Pilih Guru</option>
                            <option>Bahasa Indonesia</option>
                            <option>Matematika</option>
                            <option>IPA</option>
                        </select>
                    </div>

                    <!-- Jenis Kelamin -->
                    <div style="margin-bottom: 40px;">
                        <label style="display: block; font-size: 14px; font-weight: 600; color: var(--primary-dark); margin-bottom: 15px;">
                            Jenis Kelamin <span style="color: #ef4444;">*</span>
                        </label>
                        <div style="display: flex; gap: 40px;">
                            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                                <div style="width: 20px; height: 20px; border-radius: 50%; border: 2px solid var(--primary-dark); display: flex; align-items: center; justify-content: center;">
                                    <div style="width: 10px; height: 10px; border-radius: 50%; background: var(--primary-dark);"></div>
                                </div>
                                <input type="radio" name="gender" value="Laki-Laki" checked style="display: none;">
                                <span style="font-size: 14px; color: var(--primary-dark); font-weight: 500;">Laki-Laki</span>
                            </label>
                            
                            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                                <div style="width: 20px; height: 20px; border-radius: 50%; border: 2px solid #6b7280; display: flex; align-items: center; justify-content: center;">
                                </div>
                                <input type="radio" name="gender" value="Perempuan" style="display: none;">
                                <span style="font-size: 14px; color: var(--primary-dark); font-weight: 500;">Perempuan</span>
                            </label>
                        </div>
                    </div>

                    <!-- Buttons -->
                    <div style="display: flex; justify-content: flex-end; gap: 15px;">
                        <button type="button" id="btn-batal-guru" style="padding: 12px 30px; background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 14px; font-weight: 700; color: var(--primary-dark); cursor: pointer; min-width: 120px;">
                            Batal
                        </button>
                        <button type="button" id="btn-simpan-guru" style="padding: 12px 30px; background: var(--primary-dark); border: none; border-radius: 8px; font-size: 14px; font-weight: 700; color: #fff; cursor: pointer; min-width: 160px;">
                            ${submitText}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;
}
