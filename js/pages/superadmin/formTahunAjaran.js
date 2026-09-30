export function renderFormTahunAjaran(mode = 'add') {
    const isEdit = mode === 'edit';
    const title = isEdit ? 'Edit Tahun Ajaran' : 'Tambah Tahun Ajaran';
    const submitText = isEdit ? 'Simpan Perubahan' : 'Simpan';

    return `
        <div style="max-width: 800px; margin: 0 auto;">
            <h2 style="font-size: 22px; font-weight: 700; color: var(--primary-dark); margin-bottom: 25px;">${title}</h2>
            
            <div class="card" style="padding: 40px; background: #fff; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
                <form id="form-tahun-ajaran">

                    <!-- Tahun Ajaran -->
                    <div style="margin-bottom: 25px;">
                        <label style="display: block; font-size: 14px; font-weight: 600; color: var(--primary-dark); margin-bottom: 10px;">
                            Tahun Ajaran <span style="color: #ef4444;">*</span>
                        </label>
                        <input type="text" placeholder="Contoh: 2026/2027" style="width: 100%; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; outline: none;">
                    </div>

                    <!-- Semester -->
                    <div style="margin-bottom: 25px;">
                        <label style="display: block; font-size: 14px; font-weight: 600; color: var(--primary-dark); margin-bottom: 10px;">
                            Semester <span style="color: #ef4444;">*</span>
                        </label>
                        <select style="width: 100%; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; outline: none; background: #fff; cursor: pointer;">
                            <option>Pilih Semester</option>
                            <option>Semester 1 (Ganjil)</option>
                            <option>Semester 2 (Genap)</option>
                        </select>
                    </div>

                    <!-- Tanggal Mulai & Selesai -->
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px;">
                        <div>
                            <label style="display: block; font-size: 14px; font-weight: 600; color: var(--primary-dark); margin-bottom: 10px;">
                                Tanggal Mulai <span style="color: #ef4444;">*</span>
                            </label>
                            <div style="position: relative;">
                                <input type="text" value="01-07-2026" style="width: 100%; padding: 12px 40px 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; outline: none; box-sizing: border-box;">
                                <i class="fas fa-calendar-alt" style="position: absolute; right: 14px; top: 50%; transform: translateY(-50%); color: #9ca3af; font-size: 14px; pointer-events: none;"></i>
                            </div>
                        </div>
                        <div>
                            <label style="display: block; font-size: 14px; font-weight: 600; color: var(--primary-dark); margin-bottom: 10px;">
                                Tanggal Selesai <span style="color: #ef4444;">*</span>
                            </label>
                            <div style="position: relative;">
                                <input type="text" value="30-06-2027" style="width: 100%; padding: 12px 40px 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; outline: none; box-sizing: border-box;">
                                <i class="fas fa-calendar-alt" style="position: absolute; right: 14px; top: 50%; transform: translateY(-50%); color: #9ca3af; font-size: 14px; pointer-events: none;"></i>
                            </div>
                        </div>
                    </div>

                    <!-- Status -->
                    <div style="margin-bottom: 40px;">
                        <label style="display: block; font-size: 14px; font-weight: 600; color: var(--primary-dark); margin-bottom: 15px;">
                            Status <span style="color: #ef4444;">*</span>
                        </label>
                        <div style="display: flex; gap: 40px;">
                            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                                <div style="width: 20px; height: 20px; border-radius: 50%; border: 2px solid var(--primary-dark); display: flex; align-items: center; justify-content: center;">
                                    <div style="width: 10px; height: 10px; border-radius: 50%; background: var(--primary-dark);"></div>
                                </div>
                                <input type="radio" name="statusTahunAjaran" value="aktif" checked style="display: none;">
                                <span style="font-size: 14px; color: var(--primary-dark); font-weight: 500;">Aktif</span>
                            </label>

                            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                                <div style="width: 20px; height: 20px; border-radius: 50%; border: 2px solid #6b7280;"></div>
                                <input type="radio" name="statusTahunAjaran" value="akan-datang" style="display: none;">
                                <span style="font-size: 14px; color: var(--primary-dark); font-weight: 500;">Akan Datang</span>
                            </label>

                            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                                <div style="width: 20px; height: 20px; border-radius: 50%; border: 2px solid #6b7280;"></div>
                                <input type="radio" name="statusTahunAjaran" value="selesai" style="display: none;">
                                <span style="font-size: 14px; color: var(--primary-dark); font-weight: 500;">Selesai</span>
                            </label>
                        </div>
                    </div>

                    <!-- Buttons -->
                    <div style="display: flex; justify-content: flex-end; gap: 15px;">
                        <button type="button" id="btn-batal-tahun-ajaran" style="padding: 12px 30px; background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 14px; font-weight: 700; color: var(--primary-dark); cursor: pointer; min-width: 120px;">
                            Batal
                        </button>
                        <button type="button" id="btn-simpan-tahun-ajaran" style="padding: 12px 30px; background: var(--primary-dark); border: none; border-radius: 8px; font-size: 14px; font-weight: 700; color: #fff; cursor: pointer; min-width: 160px;">
                            ${submitText}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;
}
