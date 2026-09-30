export function renderFormJadwalKelas(mode = 'add') {
    const isEdit = mode === 'edit';
    const title = isEdit ? 'Edit Jadwal Kelas' : 'Tambah Jadwal Kelas';
    const submitText = isEdit ? 'Simpan Perubahan' : 'Simpan';

    return `
        <div style="max-width: 900px; margin: 0 auto;">
            <h2 style="font-size: 22px; font-weight: 700; color: var(--primary-dark); margin-bottom: 25px;">${title}</h2>
            
            <div class="card" style="padding: 40px; background: #fff; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
                <form id="form-jadwal-kelas">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin-bottom: 40px;">

                        <!-- Kelas -->
                        <div>
                            <label style="display: block; font-size: 14px; font-weight: 600; color: var(--primary-dark); margin-bottom: 10px;">
                                Kelas <span style="color: #ef4444;">*</span>
                            </label>
                            <select style="width: 100%; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; outline: none; background: #fff; cursor: pointer;">
                                <option>Pilih Kelas</option>
                                <option>7A</option>
                                <option>7B</option>
                                <option>7C</option>
                                <option>8A</option>
                                <option>8B</option>
                                <option>9A</option>
                            </select>
                        </div>

                        <!-- Mata Pelajaran -->
                        <div>
                            <label style="display: block; font-size: 14px; font-weight: 600; color: var(--primary-dark); margin-bottom: 10px;">
                                Mata Pelajaran <span style="color: #ef4444;">*</span>
                            </label>
                            <select style="width: 100%; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; outline: none; background: #fff; cursor: pointer;">
                                <option>Pilih Mata Pelajaran</option>
                                <option>Bahasa Indonesia</option>
                                <option>Matematika</option>
                                <option>IPA</option>
                                <option>Bahasa Inggris</option>
                                <option>IPS</option>
                            </select>
                        </div>

                        <!-- Guru -->
                        <div>
                            <label style="display: block; font-size: 14px; font-weight: 600; color: var(--primary-dark); margin-bottom: 10px;">
                                Guru <span style="color: #ef4444;">*</span>
                            </label>
                            <select style="width: 100%; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; outline: none; background: #fff; cursor: pointer;">
                                <option>Pilih Guru</option>
                                <option>Bu Siti Rahmawati S.Pd</option>
                                <option>Pak Ahmad Faisal S.Pd</option>
                                <option>Bu Dewi Lestari S.Pd</option>
                                <option>Pak Budi Santoso S.Pd</option>
                            </select>
                        </div>

                        <!-- Hari -->
                        <div>
                            <label style="display: block; font-size: 14px; font-weight: 600; color: var(--primary-dark); margin-bottom: 10px;">
                                Hari <span style="color: #ef4444;">*</span>
                            </label>
                            <select style="width: 100%; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; outline: none; background: #fff; cursor: pointer;">
                                <option>Pilih Hari</option>
                                <option>Senin</option>
                                <option>Selasa</option>
                                <option>Rabu</option>
                                <option>Kamis</option>
                                <option>Jumat</option>
                            </select>
                        </div>

                        <!-- Jam Mulai -->
                        <div>
                            <label style="display: block; font-size: 14px; font-weight: 600; color: var(--primary-dark); margin-bottom: 10px;">
                                Jam Mulai <span style="color: #ef4444;">*</span>
                            </label>
                            <input type="text" value="07.00" style="width: 100%; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; outline: none;">
                        </div>

                        <!-- Jam Selesai -->
                        <div>
                            <label style="display: block; font-size: 14px; font-weight: 600; color: var(--primary-dark); margin-bottom: 10px;">
                                Jam Selesai <span style="color: #ef4444;">*</span>
                            </label>
                            <input type="text" value="08.30" style="width: 100%; padding: 12px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 14px; outline: none;">
                        </div>

                    </div>

                    <!-- Buttons -->
                    <div style="display: flex; justify-content: flex-end; gap: 15px;">
                        <button type="button" id="btn-batal-jadwal-kelas" style="padding: 12px 30px; background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; font-size: 14px; font-weight: 700; color: var(--primary-dark); cursor: pointer; min-width: 120px;">
                            Batal
                        </button>
                        <button type="button" id="btn-simpan-jadwal-kelas" style="padding: 12px 30px; background: var(--primary-dark); border: none; border-radius: 8px; font-size: 14px; font-weight: 700; color: #fff; cursor: pointer; min-width: 160px;">
                            ${submitText}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;
}
