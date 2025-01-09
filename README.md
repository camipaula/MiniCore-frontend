# MiniCore Frontend

MiniCore Frontend es la interfaz de usuario desarrollada con Vue.js para el proyecto MiniCore. Permite a los usuarios interactuar con la API de MiniCore para filtrar y calcular los gastos registrados en la base de datos dentro de un rango de fechas especificado.
## Características

- Formulario para ingresar un rango de fechas y filtrar los gastos.
- Visualización de los gastos filtrados en una tabla.
- Cálculo y despliegue del total de gastos.
- Conexión con la API MiniCore para obtener y enviar datos.
- Diseño responsivo para su uso en dispositivos móviles y de escritorio.
## Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:

- [Node.js](https://nodejs.org/) (versión 14 o superior).
- [Vue CLI](https://cli.vuejs.org/) o [Vite](https://vitejs.dev/) (según el setup de este proyecto).
## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/camipaula/MiniCore-frontend.git
2. Navega al directorio del proyecto clonado:

   ```bash
   cd MiniCore-frontend
3. Instala las dependencias necesarias para el proyecto con el siguiente comando:

   ```bash
   npm install
4. Configura la URL base de la API editando el archivo `.env` (o creando uno si no existe). Agrega la siguiente línea con la URL de la API:

   ```env
   VITE_API_BASE_URL=http://localhost:5000/api

---

###  Uso

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
2. Abre el navegador y accede a la URL que aparece en la consola, generalmente:

   ```plaintext
   http://localhost:5173
3. En la interfaz, ingresa un rango de fechas en el formulario proporcionado y observa los resultados de los gastos filtrados en la tabla.

### Estructura del Proyecto

- **src:** Contiene el código fuente del proyecto.
  - **pages:** Vistas principales del proyecto.
  - **components:** Componentes reutilizables de la interfaz.
  - **services:** Lógica para interactuar con la API.
  - **assets:** Recursos estáticos como imágenes y estilos.
  - **router:** Configuración de rutas.

## Tecnologías Utilizadas

- **Vue.js 3:** Framework principal para el desarrollo de la interfaz.
- **Vite:** Herramienta de construcción rápida para proyectos Vue.js.
- **Axios:** Para realizar solicitudes HTTP a la API.
- **CSS3:** Para el diseño y la presentación.




