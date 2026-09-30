import { renderDashboardAdmin } from './pages/superadmin/dashboard.js';
import { renderManajemenGuru } from './pages/superadmin/manajemenGuru.js';
import { renderManajemenSiswa } from './pages/superadmin/manajemenSiswa.js';
import { renderManajemenKelas } from './pages/superadmin/manajemenKelas.js';
import { renderManajemenMapel } from './pages/superadmin/manajemenMapel.js';
import { renderTahunAjaran } from './pages/superadmin/tahunAjaran.js';
import { renderJadwalKelas } from './pages/superadmin/jadwalKelas.js';
import { renderManajemenAbsensi } from './pages/superadmin/manajemenAbsensi.js';
import { renderLaporan } from './pages/superadmin/laporan.js';
import { renderRekapAbsensi } from './pages/superadmin/rekapAbsensi.js';
import { renderRiwayatAbsensi } from './pages/superadmin/riwayatAbsensi.js';
import { renderAuditLog } from './pages/superadmin/auditLog.js';
import { renderFormGuru } from './pages/superadmin/formGuru.js';
import { renderFormSiswa } from './pages/superadmin/formSiswa.js';
import { renderFormKelas } from './pages/superadmin/formKelas.js';
import { renderFormAdminMapel } from './pages/superadmin/formAdminMapel.js';
import { renderFormTahunAjaran } from './pages/superadmin/formTahunAjaran.js';
import { renderFormJadwalKelas } from './pages/superadmin/formJadwalKelas.js';

const contentArea = document.getElementById('content-area');
const pageTitle = document.getElementById('page-title');
const navItems = document.querySelectorAll('.nav-item');

function navigateTo(page) {
    // Update active state in sidebar
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.target === page) {
            item.classList.add('active');
        }
    });

    let html = '';
    switch (page) {
        case 'dashboard':
            pageTitle.textContent = 'Dashboard';
            html = renderDashboardAdmin();
            break;
        case 'manajemen-guru':
            pageTitle.textContent = 'Manajemen Guru';
            html = renderManajemenGuru();
            break;
        case 'tambah-guru':
            pageTitle.textContent = 'Tambah Guru';
            html = renderFormGuru('add');
            break;
        case 'edit-guru':
            pageTitle.textContent = 'Edit Guru';
            html = renderFormGuru('edit');
            break;
        case 'manajemen-siswa':
            pageTitle.textContent = 'Manajemen Siswa';
            html = renderManajemenSiswa();
            break;
        case 'tambah-siswa':
            pageTitle.textContent = 'Tambah Siswa';
            html = renderFormSiswa('add');
            break;
        case 'edit-siswa':
            pageTitle.textContent = 'Edit Siswa';
            html = renderFormSiswa('edit');
            break;
        case 'manajemen-kelas':
            pageTitle.textContent = 'Manajemen Kelas';
            html = renderManajemenKelas();
            break;
        case 'tambah-kelas':
            pageTitle.textContent = 'Tambah Kelas';
            html = renderFormKelas('add');
            break;
        case 'edit-kelas':
            pageTitle.textContent = 'Edit Kelas';
            html = renderFormKelas('edit');
            break;
        case 'manajemen-mapel':
            pageTitle.textContent = 'Manajemen Mata Pelajaran';
            html = renderManajemenMapel();
            break;
        case 'tambah-mapel':
            pageTitle.textContent = 'Tambah Mata Pelajaran';
            html = renderFormAdminMapel('add');
            break;
        case 'edit-mapel':
            pageTitle.textContent = 'Edit Mata Pelajaran';
            html = renderFormAdminMapel('edit');
            break;
        case 'tahun-ajaran':
            pageTitle.textContent = 'Tahun Ajaran';
            html = renderTahunAjaran();
            break;
        case 'tambah-tahun-ajaran':
            pageTitle.textContent = 'Tambah Tahun Ajaran';
            html = renderFormTahunAjaran('add');
            break;
        case 'edit-tahun-ajaran':
            pageTitle.textContent = 'Edit Tahun Ajaran';
            html = renderFormTahunAjaran('edit');
            break;
        case 'jadwal-kelas':
            pageTitle.textContent = 'Jadwal Kelas';
            html = renderJadwalKelas();
            break;
        case 'tambah-jadwal-kelas':
            pageTitle.textContent = 'Tambah Jadwal Kelas';
            html = renderFormJadwalKelas('add');
            break;
        case 'edit-jadwal-kelas':
            pageTitle.textContent = 'Edit Jadwal Kelas';
            html = renderFormJadwalKelas('edit');
            break;
        case 'manajemen-absensi':
            pageTitle.textContent = 'Manajemen Absensi';
            html = renderManajemenAbsensi();
            break;
        case 'laporan':
            pageTitle.textContent = 'Laporan';
            html = renderLaporan();
            break;
        case 'rekap-absensi':
            pageTitle.textContent = 'Rekap Absensi';
            html = renderRekapAbsensi();
            break;
        case 'riwayat-absensi':
            pageTitle.textContent = 'Riwayat Absensi';
            html = renderRiwayatAbsensi();
            break;
        case 'audit-log':
            pageTitle.textContent = 'Audit Log';
            html = renderAuditLog();
            break;
        default:
            pageTitle.textContent = 'Menu';
            html = '<div class="card"><p style="padding: 20px; color: #6b7280;">Halaman ini sedang dalam tahap pengembangan.</p></div>';
    }

    contentArea.innerHTML = html;
    attachEvents(page);
}

function attachEvents(page) {
    if (page === 'manajemen-guru') {
        const btnTambah = document.getElementById('btn-tambah-guru');
        if (btnTambah) {
            btnTambah.addEventListener('click', () => navigateTo('tambah-guru'));
        }

        const editBtns = document.querySelectorAll('.btn-edit-guru');
        editBtns.forEach(btn => {
            btn.addEventListener('click', () => navigateTo('edit-guru'));
        });
    }

    if (page === 'tambah-guru' || page === 'edit-guru') {
        const btnBatal = document.getElementById('btn-batal-guru');
        if (btnBatal) {
            btnBatal.addEventListener('click', () => navigateTo('manajemen-guru'));
        }

        const btnSimpan = document.getElementById('btn-simpan-guru');
        if (btnSimpan) {
            btnSimpan.addEventListener('click', (e) => {
                e.preventDefault();
                // Simple navigation back for mockup purposes
                navigateTo('manajemen-guru');
            });
        }
    }

    if (page === 'manajemen-siswa') {
        const btnTambahSiswa = document.getElementById('btn-tambah-siswa');
        if (btnTambahSiswa) {
            btnTambahSiswa.addEventListener('click', () => navigateTo('tambah-siswa'));
        }

        const editBtnsSiswa = document.querySelectorAll('.btn-edit-siswa');
        editBtnsSiswa.forEach(btn => {
            btn.addEventListener('click', () => navigateTo('edit-siswa'));
        });
    }

    if (page === 'tambah-siswa' || page === 'edit-siswa') {
        const btnBatal = document.getElementById('btn-batal-siswa');
        if (btnBatal) {
            btnBatal.addEventListener('click', () => navigateTo('manajemen-siswa'));
        }

        const btnSimpan = document.getElementById('btn-simpan-siswa');
        if (btnSimpan) {
            btnSimpan.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo('manajemen-siswa');
            });
        }
    }

    if (page === 'manajemen-kelas') {
        const btnTambahKelas = document.getElementById('btn-tambah-kelas');
        if (btnTambahKelas) {
            btnTambahKelas.addEventListener('click', () => navigateTo('tambah-kelas'));
        }

        const editBtnsKelas = document.querySelectorAll('.btn-edit-kelas');
        editBtnsKelas.forEach(btn => {
            btn.addEventListener('click', () => navigateTo('edit-kelas'));
        });
    }

    if (page === 'tambah-kelas' || page === 'edit-kelas') {
        const btnBatal = document.getElementById('btn-batal-kelas');
        if (btnBatal) {
            btnBatal.addEventListener('click', () => navigateTo('manajemen-kelas'));
        }

        const btnSimpan = document.getElementById('btn-simpan-kelas');
        if (btnSimpan) {
            btnSimpan.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo('manajemen-kelas');
            });
        }
    }

    if (page === 'manajemen-mapel') {
        const btnTambahMapel = document.getElementById('btn-tambah-mapel');
        if (btnTambahMapel) {
            btnTambahMapel.addEventListener('click', () => navigateTo('tambah-mapel'));
        }

        const editBtnsMapel = document.querySelectorAll('.btn-edit-mapel');
        editBtnsMapel.forEach(btn => {
            btn.addEventListener('click', () => navigateTo('edit-mapel'));
        });
    }

    if (page === 'tambah-mapel' || page === 'edit-mapel') {
        const btnBatal = document.getElementById('btn-batal-mapel');
        if (btnBatal) {
            btnBatal.addEventListener('click', () => navigateTo('manajemen-mapel'));
        }

        const btnSimpan = document.getElementById('btn-simpan-mapel');
        if (btnSimpan) {
            btnSimpan.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo('manajemen-mapel');
            });
        }
    }

    if (page === 'tahun-ajaran') {
        const btnTambah = document.getElementById('btn-tambah-tahun-ajaran');
        if (btnTambah) {
            btnTambah.addEventListener('click', () => navigateTo('tambah-tahun-ajaran'));
        }

        const editBtns = document.querySelectorAll('.btn-edit-tahun-ajaran');
        editBtns.forEach(btn => {
            btn.addEventListener('click', () => navigateTo('edit-tahun-ajaran'));
        });
    }

    if (page === 'tambah-tahun-ajaran' || page === 'edit-tahun-ajaran') {
        const btnBatal = document.getElementById('btn-batal-tahun-ajaran');
        if (btnBatal) {
            btnBatal.addEventListener('click', () => navigateTo('tahun-ajaran'));
        }

        const btnSimpan = document.getElementById('btn-simpan-tahun-ajaran');
        if (btnSimpan) {
            btnSimpan.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo('tahun-ajaran');
            });
        }
    }

    if (page === 'jadwal-kelas') {
        const btnTambah = document.getElementById('btn-tambah-jadwal-kelas');
        if (btnTambah) {
            btnTambah.addEventListener('click', () => navigateTo('tambah-jadwal-kelas'));
        }

        const editBtns = document.querySelectorAll('.btn-edit-jadwal-kelas');
        editBtns.forEach(btn => {
            btn.addEventListener('click', () => navigateTo('edit-jadwal-kelas'));
        });
    }

    if (page === 'tambah-jadwal-kelas' || page === 'edit-jadwal-kelas') {
        const btnBatal = document.getElementById('btn-batal-jadwal-kelas');
        if (btnBatal) {
            btnBatal.addEventListener('click', () => navigateTo('jadwal-kelas'));
        }

        const btnSimpan = document.getElementById('btn-simpan-jadwal-kelas');
        if (btnSimpan) {
            btnSimpan.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo('jadwal-kelas');
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Attach sidebar navigation listeners
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const target = item.dataset.target;
            navigateTo(target);
        });
    });

    // Default route
    const defaultNav = document.querySelector('.nav-item.active');
    if (defaultNav) {
        navigateTo(defaultNav.dataset.target);
    } else {
        navigateTo('dashboard');
    }
});

// Expose to window for any inline handlers if needed
window.appNavigateTo = navigateTo;
