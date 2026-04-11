import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // Bypass ngrok warning page
    config.headers['ngrok-skip-browser-warning'] = 'true';
    
    // Anti-304 (Disable Caching)
    config.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
    config.headers['Pragma'] = 'no-cache';
    config.headers['Expires'] = '0';
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.error || error.message || "Erro de conexão";
    
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        const dash = (window as any).DASHBOARD;
        if (dash?.addToast) dash.addToast("Sessão expirada. Redirecionando...", "error");
        
        localStorage.clear();
        setTimeout(() => {
           window.location.href = '/login';
        }, 2000);
      }
    } else {
      if (typeof window !== 'undefined') {
        const dash = (window as any).DASHBOARD;
        if (dash?.addToast) dash.addToast(`Erro: ${message}`, "error");
      }
    }
    return Promise.reject(error);
  }
);

export default api;
