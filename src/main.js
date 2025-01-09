import { createApp } from 'vue';
import axios from 'axios'; // Importar axios
import App from './App.vue';

// Configuración global de axios
axios.defaults.baseURL = 'https://localhost:7084/api'; // Establecer la URL base de la API
axios.defaults.headers.common['Content-Type'] = 'application/json'; 

const app = createApp(App);

app.config.globalProperties.$axios = axios; // Hacer que axios esté disponible globalmente

app.mount('#app');
