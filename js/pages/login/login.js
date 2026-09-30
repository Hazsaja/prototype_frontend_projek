export function renderLogin() {
    return `
        <div style="
            min-height: 100vh;
            background: #fef9e7;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Inter', sans-serif;
        ">
            <div style="
                background: #fff;
                border-radius: 16px;
                padding: 48px 40px;
                width: 100%;
                max-width: 420px;
                box-shadow: 0 4px 24px rgba(0,0,0,0.08);
                text-align: center;
            ">
                <!-- Logo -->
                <div style="margin-bottom: 16px;">
                    <img src="assets/images/logo.png" alt="Logo SMPN 1 Tirtajaya" style="width: 64px; height: 64px; object-fit: contain;">
                </div>

                <!-- Title -->
                <h1 style="font-size: 20px; font-weight: 800; color: #1a3a5c; margin: 0 0 6px;">SMPN 1 Tirtajaya</h1>
                <p style="font-size: 13px; color: #9ca3af; margin: 0 0 32px;">Sistem Absensi Sekolah</p>

                <!-- Error Message -->
                <div id="login-error" style="
                    display: none;
                    background: #fef2f2;
                    border: 1px solid #fca5a5;
                    border-radius: 8px;
                    padding: 10px 14px;
                    margin-bottom: 20px;
                    font-size: 13px;
                    color: #dc2626;
                    text-align: left;
                ">
                    Email atau password salah. Silakan coba lagi.
                </div>

                <!-- Form -->
                <div style="text-align: left;">
                    <!-- Email -->
                    <div style="margin-bottom: 16px;">
                        <label style="display: block; font-size: 13px; font-weight: 600; color: #374151; margin-bottom: 8px;">Email</label>
                        <input
                            id="login-email"
                            type="email"
                            placeholder="Masukkan email Anda"
                            style="
                                width: 100%;
                                padding: 12px 14px;
                                border: 1px solid #d1d5db;
                                border-radius: 8px;
                                font-size: 14px;
                                outline: none;
                                box-sizing: border-box;
                                transition: border-color 0.2s;
                            "
                        >
                    </div>

                    <!-- Password -->
                    <div style="margin-bottom: 24px;">
                        <label style="display: block; font-size: 13px; font-weight: 600; color: #374151; margin-bottom: 8px;">Password</label>
                        <input
                            id="login-password"
                            type="password"
                            placeholder="••••••••"
                            style="
                                width: 100%;
                                padding: 12px 14px;
                                border: 1px solid #d1d5db;
                                border-radius: 8px;
                                font-size: 14px;
                                outline: none;
                                box-sizing: border-box;
                                transition: border-color 0.2s;
                            "
                        >
                    </div>

                    <!-- Masuk Button -->
                    <button
                        id="btn-login"
                        style="
                            width: 100%;
                            padding: 13px;
                            background: #f5c518;
                            border: none;
                            border-radius: 8px;
                            font-size: 15px;
                            font-weight: 700;
                            color: #1a3a5c;
                            cursor: pointer;
                            margin-bottom: 20px;
                            transition: background 0.2s;
                        "
                    >
                        Masuk
                    </button>

                    <!-- Divider -->
                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                        <div style="flex: 1; height: 1px; background: #e5e7eb;"></div>
                        <span style="font-size: 12px; color: #9ca3af;">atau</span>
                        <div style="flex: 1; height: 1px; background: #e5e7eb;"></div>
                    </div>

                    <!-- Google Button -->
                    <button style="
                        width: 100%;
                        padding: 12px;
                        background: #fff;
                        border: 1px solid #e5e7eb;
                        border-radius: 8px;
                        font-size: 14px;
                        font-weight: 600;
                        color: #374151;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 10px;
                        margin-bottom: 20px;
                    ">
                        <svg width="18" height="18" viewBox="0 0 48 48">
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                        </svg>
                        Masuk dengan Google
                    </button>
                </div>

                <!-- Register Link -->
                <a href="#" style="font-size: 13px; color: #2563eb; font-weight: 500; text-decoration: none;">Belum punya akun? Daftar</a>
            </div>
        </div>
    `;
}
