import { renderBeranda } from './pages/walas/beranda.js';
import { renderDataSiswa } from './pages/walas/dataSiswa.js';
import { renderFormSiswa } from './pages/walas/formSiswa.js';
import { renderLaporanKelas } from './pages/walas/laporanKelas.js';
import { renderRekapanAbsen } from './pages/walas/rekapanAbsen.js';
import { renderValidasiAbsen } from './pages/walas/validasiAbsen.js';
import { renderMonitoringAbsen } from './pages/walas/monitoringAbsen.js';
import { renderBerandaMapel } from './pages/mapel/berandaMapel.js';
import { renderManajemenMapel } from './pages/mapel/manajemenMapel.js';
import { renderFormMapel } from './pages/mapel/formMapel.js';
import { renderRiwayatMapel } from './pages/mapel/riwayatAbsen.js';
import { renderRekapAbsenMapel } from './pages/mapel/rekapAbsen.js';
import { renderJadwalMengajar } from './pages/mapel/jadwalMengajar.js';
import { renderAbsensiSiswa, attachAbsensiEvents } from './pages/mapel/absensiSiswa.js';
import { renderDetailRiwayat } from './pages/mapel/detailRiwayat.js';

const contentArea = document.getElementById('content-area');
const pageTitle = document.getElementById('page-title');
const navItems = document.querySelectorAll('.nav-item');

function navigateTo(page) {
    // Update active state in sidebar
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.target === page || 
           (page === 'tambah-siswa' && item.dataset.target === 'data-siswa') || 
           (page === 'edit-siswa' && item.dataset.target === 'data-siswa')) {
            item.classList.add('active');
        }
    });

    let html = '';
    switch (page) {
        case 'beranda':
            pageTitle.textContent = 'Beranda Kelas Walas';
            html = renderBeranda();
            break;
        case 'data-siswa':
            pageTitle.textContent = 'Data Siswa';
            html = renderDataSiswa();
            break;
        case 'tambah-siswa':
            pageTitle.textContent = 'Data Siswa';
            html = renderFormSiswa(false);
            break;
        case 'edit-siswa':
            pageTitle.textContent = 'Data Siswa';
            html = renderFormSiswa(true);
            break;
        case 'monitoring':
            pageTitle.textContent = 'Monitoring Absen';
            html = renderMonitoringAbsen();
            break;
        case 'rekapan':
            pageTitle.textContent = 'Rekapan Absen';
            html = renderRekapanAbsen();
            break;
        case 'validasi':
            pageTitle.textContent = 'Validasi dan Koreksi Absen';
            html = renderValidasiAbsen();
            break;
        case 'laporan':
            pageTitle.textContent = 'Laporan Kelas';
            html = renderLaporanKelas();
            break;
        case 'beranda-mapel':
            pageTitle.textContent = 'Beranda Kelas';
            html = renderBerandaMapel();
            break;
        case 'jadwal-mengajar':
            pageTitle.textContent = 'Beranda Kelas';
            html = renderJadwalMengajar();
            break;
        case 'absensi-siswa':
            pageTitle.textContent = 'Form Absensi Kelas 7A';
            html = renderAbsensiSiswa();
            break;
        case 'riwayat-absen':
            pageTitle.textContent = 'Riwayat Kehadiran Mapel';
            html = renderRiwayatMapel();
            break;
        case 'detail-riwayat':
            pageTitle.textContent = 'Riwayat Kehadiran Mapel';
            html = renderDetailRiwayat();
            break;
        case 'rekap-absen':
            pageTitle.textContent = 'Form Absensi Kelas 7C';
            html = renderRekapAbsenMapel();
            break;
        case 'manajemen-mapel':
            pageTitle.textContent = 'Manajemen Mata Pelajaran';
            html = renderManajemenMapel();
            break;
        case 'tambah-mapel':
            pageTitle.textContent = 'Manajemen Mata Pelajaran';
            html = renderFormMapel(false);
            break;
        case 'edit-mapel':
            pageTitle.textContent = 'Manajemen Mata Pelajaran';
            html = renderFormMapel(true);
            break;
        default:
            pageTitle.textContent = 'Menu';
            html = '<div class="card"><p>Halaman ini sedang dalam tahap pengembangan.</p></div>';
    }

    contentArea.innerHTML = html;
    
    // Attach necessary event listeners after HTML is injected
    attachEvents(page);
}

function attachEvents(page) {
    if (page === 'data-siswa') {
        const btnTambah = document.getElementById('btn-tambah-siswa');
        if (btnTambah) {
            btnTambah.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo('tambah-siswa');
            });
        }
        
        const btnEdits = document.querySelectorAll('.btn-edit-siswa');
        btnEdits.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo('edit-siswa');
            });
        });
    } else if (page === 'tambah-siswa' || page === 'edit-siswa') {
        const btnBatal = document.getElementById('btn-batal');
        if (btnBatal) {
            btnBatal.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo('data-siswa');
            });
        }
        const btnSimpan = document.getElementById('btn-simpan');
        if (btnSimpan) {
            btnSimpan.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo('data-siswa');
            });
        }
    } else if (page === 'manajemen-mapel') {
        const btnTambah = document.getElementById('btn-tambah-mapel');
        if (btnTambah) {
            btnTambah.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo('tambah-mapel');
            });
        }
        
        const btnEdits = document.querySelectorAll('.btn-edit-mapel');
        btnEdits.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo('edit-mapel');
            });
        });
    } else if (page === 'tambah-mapel' || page === 'edit-mapel') {
        const btnBatal = document.getElementById('btn-batal-mapel');
        if (btnBatal) {
            btnBatal.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo('manajemen-mapel');
            });
        }
        const btnSimpan = document.getElementById('btn-simpan-mapel');
        if (btnSimpan) {
            btnSimpan.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo('manajemen-mapel');
            });
        }
    } else if (page === 'absensi-siswa') {
        attachAbsensiEvents();
    } else if (page === 'riwayat-absen') {
        // Attach Detail button handlers
        const detailBtns = document.querySelectorAll('.btn-secondary');
        detailBtns.forEach(btn => {
            if (btn.textContent.includes('Detail')) {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    navigateTo('detail-riwayat');
                });
            }
        });
    } else if (page === 'detail-riwayat') {
        const btnKembali = document.getElementById('btn-kembali-riwayat');
        if (btnKembali) {
            btnKembali.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo('riwayat-absen');
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
        navigateTo('beranda');
    }
});

// Expose to window for any inline handlers if needed
window.appNavigateTo = navigateTo;
