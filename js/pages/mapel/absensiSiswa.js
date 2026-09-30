export function renderAbsensiSiswa() {
    return `
        <!-- Info Bar: Detail Sesi -->
        <div style="background: var(--primary-dark); border-radius: 12px; padding: 18px 28px; margin-bottom: 22px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; align-items: center;">
            <div>
                <div style="font-size: 10px; font-weight: 600; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">MATA PELAJARAN</div>
                <div style="font-size: 14px; font-weight: 700; color: #fff;">Bahasa Indonesia</div>
            </div>
            <div>
                <div style="font-size: 10px; font-weight: 600; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">KELAS & TANGGAL</div>
                <div style="font-size: 14px; font-weight: 700; color: #fff;">Kelas 7A - 2026-09-23</div>
            </div>
            <div>
                <div style="font-size: 10px; font-weight: 600; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">JAM MENGAJAR</div>
                <div style="font-size: 14px; font-weight: 700; color: #fff;">07.30 - 09.00 WIB</div>
            </div>
            <div>
                <div style="font-size: 10px; font-weight: 600; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">STATUS SESI HARI INI</div>
                <div id="status-badge-container">
                    <span id="status-badge" style="display: inline-block; background: #fef2f2; color: #dc2626; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 6px; border: 1px solid #fca5a5; letter-spacing: 0.3px;">BELUM DISUBMIT</span>
                </div>
            </div>
        </div>

        <!-- Section: Daftar Kehadiran Siswa -->
        <div class="card" style="padding: 25px 30px;">
            <!-- Header Section -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;">
                <div id="section-header-text">
                    <h3 style="font-size: 18px; font-weight: 700; color: var(--primary-dark); margin-bottom: 5px;">Daftar Kehadiran Siswa</h3>
                    <p style="font-size: 13px; color: #6b7280; margin: 0;">Semua siswa otomatis Hadir. Klik tombol radio hitam untuk mengubah ke Izin/Sakit/Alpa.</p>
                </div>
                <span id="pilihan-badge" style="display: inline-flex; align-items: center; gap: 6px; background: #f9fafb; color: var(--primary-dark); font-size: 12px; font-weight: 600; padding: 8px 16px; border-radius: 8px; border: 1.5px solid #e5e7eb;">Pilihan Aktif: Hadir (Otomatis)</span>
            </div>

            <!-- Tabel Absensi -->
            <div style="border: 1.5px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
                <!-- Header Tabel -->
                <div style="display: grid; grid-template-columns: 60px 1fr 320px; background: var(--primary-dark); padding: 14px 20px; align-items: center;">
                    <span style="font-size: 12px; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.5px;">NO</span>
                    <span style="font-size: 12px; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.5px;">NAMA SISWA & NIS</span>
                    <span style="font-size: 12px; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.5px; text-align: center;">PILIHAN KEHADIRAN (HADIR / IZIN / SAKIT / ALPA)</span>
                </div>

                <!-- Baris Siswa -->
                ${generateStudentRow(1, 'Aditya Pratama', '20260701', 'alpa')}
                ${generateStudentRow(2, 'Alya Zahra', '20260702', 'sakit')}
                ${generateStudentRow(3, 'Bagas Saputra', '20260703', 'izin')}
                ${generateStudentRow(4, 'Citra Kirana', '20260704', 'hadir')}
                ${generateStudentRow(5, 'Dimas Anggara', '20260705', 'hadir')}
            </div>

            <!-- Footer: Summary & Submit -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px; padding-top: 18px; border-top: 1.5px dashed #e5e7eb; flex-wrap: wrap; gap: 12px;">
                <div id="summary-text" style="font-size: 13px; color: var(--primary-dark); font-weight: 600;">
                    Total: <span style="color: var(--primary-blue);">5 Siswa</span> | 
                    Hadir: <span style="color: #16a34a;">2</span> | 
                    Izin: <span style="color: #2563eb;">1</span> | 
                    Sakit: <span style="color: #d97706;">1</span> | 
                    Alpa: <span style="color: #dc2626;">1</span>
                </div>
                <button id="btn-submit-absensi" style="display: flex; align-items: center; gap: 8px; padding: 12px 28px; background: var(--primary-dark); color: #fff; border: none; border-radius: 10px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s ease;" onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'">
                    Submit Absensi <i class="fas fa-paper-plane" style="font-size: 13px;"></i>
                </button>
            </div>
        </div>
    `;
}

function generateStudentRow(no, name, nis, selected) {
    const options = ['hadir', 'izin', 'sakit', 'alpa'];
    const labels = ['Hadir', 'Izin', 'Sakit', 'Alpa'];

    const radioButtons = options.map((opt, i) => {
        const isChecked = selected === opt;
        const checkedStyle = isChecked
            ? 'background: var(--primary-dark); border-color: var(--primary-dark);'
            : 'background: #fff; border-color: #d1d5db;';
        const innerDot = isChecked
            ? '<div style="width: 8px; height: 8px; background: #fff; border-radius: 50%;"></div>'
            : '';

        return `
            <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
                <span style="font-size: 10px; color: #9ca3af; font-weight: 500;">${labels[i]}</span>
                <div class="radio-btn" data-student="${nis}" data-value="${opt}" 
                     style="width: 22px; height: 22px; border-radius: 50%; border: 2px solid; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.15s ease; ${checkedStyle}">
                    ${innerDot}
                </div>
            </div>
        `;
    }).join('');

    const bgColor = no % 2 === 0 ? '#f9fafb' : '#fff';

    return `
        <div style="display: grid; grid-template-columns: 60px 1fr 320px; padding: 16px 20px; align-items: center; background: ${bgColor}; border-top: 1px solid #f3f4f6;">
            <span style="font-size: 15px; font-weight: 600; color: #6b7280;">${no}</span>
            <div>
                <div style="font-size: 14px; font-weight: 700; color: var(--primary-dark);">${name}</div>
                <div style="font-size: 12px; color: #9ca3af; margin-top: 2px;">${nis}</div>
            </div>
            <div style="display: flex; justify-content: center; gap: 24px;">
                ${radioButtons}
            </div>
        </div>
    `;
}

// Fungsi untuk menangani interaksi setelah HTML di-inject
export function attachAbsensiEvents() {
    const radioButtons = document.querySelectorAll('.radio-btn');
    const submitBtn = document.getElementById('btn-submit-absensi');

    // State tracker
    const attendance = {
        '20260701': 'alpa',
        '20260702': 'sakit',
        '20260703': 'izin',
        '20260704': 'hadir',
        '20260705': 'hadir'
    };

    // Radio button click handler
    radioButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const studentId = btn.dataset.student;
            const value = btn.dataset.value;
            attendance[studentId] = value;

            // Update visual: reset all radios for this student
            document.querySelectorAll(`.radio-btn[data-student="${studentId}"]`).forEach(rb => {
                rb.style.background = '#fff';
                rb.style.borderColor = '#d1d5db';
                rb.innerHTML = '';
            });

            // Set selected
            btn.style.background = 'var(--primary-dark)';
            btn.style.borderColor = 'var(--primary-dark)';
            btn.innerHTML = '<div style="width: 8px; height: 8px; background: #fff; border-radius: 50%;"></div>';

            // Update summary counts
            updateSummary(attendance);
        });
    });

    // Submit button handler
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            switchToSubmittedState();
        });
    }
}

function updateSummary(attendance) {
    const counts = { hadir: 0, izin: 0, sakit: 0, alpa: 0 };
    Object.values(attendance).forEach(v => counts[v]++);
    const total = Object.keys(attendance).length;

    const summaryEl = document.getElementById('summary-text');
    if (summaryEl) {
        summaryEl.innerHTML = `
            Total: <span style="color: var(--primary-blue);">${total} Siswa</span> | 
            Hadir: <span style="color: #16a34a;">${counts.hadir}</span> | 
            Izin: <span style="color: #2563eb;">${counts.izin}</span> | 
            Sakit: <span style="color: #d97706;">${counts.sakit}</span> | 
            Alpa: <span style="color: #dc2626;">${counts.alpa}</span>
        `;
    }
}

function switchToSubmittedState() {
    // 1. Update status badge
    const statusBadge = document.getElementById('status-badge');
    if (statusBadge) {
        statusBadge.style.background = '#e8f5e9';
        statusBadge.style.color = '#2e7d32';
        statusBadge.style.borderColor = '#a5d6a7';
        statusBadge.textContent = 'SUDAH DISUBMIT';
    }

    // 2. Update page title & subtitle
    const pageTitle = document.getElementById('page-title');
    if (pageTitle) {
        pageTitle.textContent = 'Form Absensi Kelas 7A';
    }

    const headerText = document.getElementById('section-header-text');
    if (headerText) {
        headerText.innerHTML = `
            <h3 style="font-size: 18px; font-weight: 700; color: var(--primary-dark); margin-bottom: 5px;">Data Kehadiran Siswa (Terkunci)</h3>
            <p style="font-size: 13px; color: #6b7280; margin: 0;">Presensi sudah diverifikasi. Kontak tim kurikulum jika memerlukan perubahan data.</p>
        `;
    }

    // 3. Update pilihan badge to "Terverifikasi Sistem"
    const pilihanBadge = document.getElementById('pilihan-badge');
    if (pilihanBadge) {
        pilihanBadge.style.background = '#fff';
        pilihanBadge.style.color = '#16a34a';
        pilihanBadge.style.borderColor = '#16a34a';
        pilihanBadge.innerHTML = 'Terverifikasi Sistem';
    }

    // 4. Disable all radio buttons (visual lock)
    const radioButtons = document.querySelectorAll('.radio-btn');
    radioButtons.forEach(btn => {
        btn.style.cursor = 'not-allowed';
        btn.style.opacity = '0.7';
        // Remove click events by cloning
        const clone = btn.cloneNode(true);
        btn.parentNode.replaceChild(clone, btn);
    });

    // 5. Change submit button to "Absensi Berhasil Terkirim" (disabled)
    const submitBtn = document.getElementById('btn-submit-absensi');
    if (submitBtn) {
        submitBtn.style.background = '#fff';
        submitBtn.style.color = 'var(--primary-dark)';
        submitBtn.style.border = '1.5px solid #d1d5db';
        submitBtn.style.cursor = 'not-allowed';
        submitBtn.innerHTML = '<i class="fas fa-lock" style="font-size: 13px;"></i> Absensi Berhasil Terkirim';
        submitBtn.disabled = true;
        submitBtn.onmouseover = null;
        submitBtn.onmouseout = null;
    }
}
