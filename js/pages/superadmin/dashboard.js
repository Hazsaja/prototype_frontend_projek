export function renderDashboardAdmin() {
    return `
        <!-- Greeting -->
        <div style="margin-bottom: 22px;">
            <h2 style="font-size: 20px; font-weight: 700; color: var(--primary-dark);">Selamat Datang, Admin! 👋</h2>
        </div>

        <!-- Summary Cards -->
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; margin-bottom: 25px;">
            <!-- Total Siswa -->
            <div style="background: #fff; border-radius: 12px; padding: 22px 24px; border: 1px solid #e5e7eb; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: var(--primary-blue);"></div>
                <div style="font-size: 12px; color: #6b7280; font-weight: 500; margin-bottom: 8px;">Total Siswa</div>
                <div style="font-size: 32px; font-weight: 800; color: var(--primary-dark);">1.248</div>
            </div>
            <!-- Total Guru -->
            <div style="background: #fff; border-radius: 12px; padding: 22px 24px; border: 1px solid #e5e7eb; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: var(--primary-blue);"></div>
                <div style="font-size: 12px; color: #6b7280; font-weight: 500; margin-bottom: 8px;">Total Guru</div>
                <div style="font-size: 32px; font-weight: 800; color: var(--primary-dark);">56</div>
            </div>
            <!-- Kehadiran Hari Ini -->
            <div style="background: #fff; border-radius: 12px; padding: 22px 24px; border: 1px solid #e5e7eb; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: #8b5cf6;"></div>
                <div style="font-size: 12px; color: #6b7280; font-weight: 500; margin-bottom: 8px;">Kehadiran Hari Ini</div>
                <div style="font-size: 32px; font-weight: 800; color: var(--primary-dark);">94,2%</div>
            </div>
            <!-- Kelas Aktif -->
            <div style="background: #fff; border-radius: 12px; padding: 22px 24px; border: 1px solid #e5e7eb; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: #8b5cf6;"></div>
                <div style="font-size: 12px; color: #6b7280; font-weight: 500; margin-bottom: 8px;">Kelas Aktif</div>
                <div style="font-size: 32px; font-weight: 800; color: var(--primary-dark);">36</div>
            </div>
        </div>

        <!-- Grid: Chart & Activity -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            
            <!-- Tren Kehadiran Mingguan -->
            <div style="background: #fff; border-radius: 12px; padding: 25px 28px; border: 1px solid #e5e7eb;">
                <h3 style="font-size: 16px; font-weight: 700; color: var(--primary-dark); margin-bottom: 25px;">Tren Kehadiran Mingguan</h3>
                
                <!-- Bar Chart CSS -->
                <div style="display: flex; align-items: flex-end; justify-content: space-around; height: 200px; padding-bottom: 30px; position: relative;">
                    <!-- Y-axis baseline -->
                    <div style="position: absolute; bottom: 30px; left: 0; right: 0; height: 1px; background: #f3f4f6;"></div>
                    
                    <!-- Sen -->
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                        <div style="display: flex; gap: 4px; align-items: flex-end;">
                            <div style="width: 24px; height: 120px; background: var(--primary-dark); border-radius: 4px 4px 0 0;"></div>
                            <div style="width: 24px; height: 90px; background: var(--accent-yellow); border-radius: 4px 4px 0 0;"></div>
                        </div>
                        <span style="font-size: 12px; color: #6b7280; font-weight: 500;">Sen</span>
                    </div>
                    <!-- Sel -->
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                        <div style="display: flex; gap: 4px; align-items: flex-end;">
                            <div style="width: 24px; height: 140px; background: var(--primary-dark); border-radius: 4px 4px 0 0;"></div>
                            <div style="width: 24px; height: 105px; background: var(--accent-yellow); border-radius: 4px 4px 0 0;"></div>
                        </div>
                        <span style="font-size: 12px; color: #6b7280; font-weight: 500;">Sel</span>
                    </div>
                    <!-- Rab -->
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                        <div style="display: flex; gap: 4px; align-items: flex-end;">
                            <div style="width: 24px; height: 100px; background: var(--primary-dark); border-radius: 4px 4px 0 0;"></div>
                            <div style="width: 24px; height: 75px; background: var(--accent-yellow); border-radius: 4px 4px 0 0;"></div>
                        </div>
                        <span style="font-size: 12px; color: #6b7280; font-weight: 500;">Rab</span>
                    </div>
                    <!-- Kam -->
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                        <div style="display: flex; gap: 4px; align-items: flex-end;">
                            <div style="width: 24px; height: 110px; background: var(--primary-dark); border-radius: 4px 4px 0 0;"></div>
                            <div style="width: 24px; height: 150px; background: var(--accent-yellow); border-radius: 4px 4px 0 0;"></div>
                        </div>
                        <span style="font-size: 12px; color: #6b7280; font-weight: 500;">Kam</span>
                    </div>
                    <!-- Jum -->
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                        <div style="display: flex; gap: 4px; align-items: flex-end;">
                            <div style="width: 24px; height: 155px; background: var(--primary-dark); border-radius: 4px 4px 0 0;"></div>
                            <div style="width: 24px; height: 115px; background: var(--accent-yellow); border-radius: 4px 4px 0 0;"></div>
                        </div>
                        <span style="font-size: 12px; color: #6b7280; font-weight: 500;">Jum</span>
                    </div>
                </div>
            </div>

            <!-- Aktivitas Terbaru -->
            <div style="background: #fff; border-radius: 12px; padding: 25px 28px; border: 1px solid #e5e7eb;">
                <h3 style="font-size: 16px; font-weight: 700; color: var(--primary-dark); margin-bottom: 20px;">Aktivitas Terbaru</h3>
                
                <div style="display: flex; flex-direction: column; gap: 0;">
                    ${generateActivityItem('Login berhasil', 'Pak Budi', '08:15')}
                    ${generateActivityItem('Absensi diinput', 'Bu Sari — VII-A', '08:30')}
                    ${generateActivityItem('Data siswa diubah', 'Admin', '09:00')}
                    ${generateActivityItem('Login berhasil', 'Bu Rina', '09:12')}
                    ${generateActivityItem('Absensi diinput', 'Pak Eko — VIII-B', '09:45')}
                    ${generateActivityItem('Kelas baru ditambah', 'Admin', '10:00', true)}
                </div>
            </div>
        </div>
    `;
}

function generateActivityItem(action, actor, time, isLast = false) {
    const borderStyle = isLast ? '' : 'border-bottom: 1px solid #f3f4f6;';
    return `
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 14px 0; ${borderStyle}">
            <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 8px; height: 8px; background: var(--primary-dark); border-radius: 50%; flex-shrink: 0;"></div>
                <div>
                    <div style="font-size: 13px; font-weight: 600; color: var(--primary-dark);">${action}</div>
                    <div style="font-size: 12px; color: #9ca3af; margin-top: 1px;">${actor}</div>
                </div>
            </div>
            <span style="font-size: 12px; color: #9ca3af; font-weight: 500; flex-shrink: 0;">${time}</span>
        </div>
    `;
}
