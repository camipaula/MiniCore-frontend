<template>
  <div>
    <h1>Filtrar Gastos</h1>
    
    <!-- Formulario para filtrar gastos -->
    <form @submit.prevent="filtrarGastos">
      <label for="fechaInicio">Fecha Inicio:</label>
      <input type="date" v-model="fechaInicio" required />
      
      <label for="fechaFin">Fecha Fin:</label>
      <input type="date" v-model="fechaFin" required />

      <button type="submit">Filtrar</button>
    </form>

    <!-- Tabla de resultados -->
    <table v-if="gastos.length">
      <thead>
        <tr>
          <th>Departamento</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <!-- Iteramos sobre los gastos obtenidos -->
        <tr v-for="gasto in gastos" :key="gasto.departamento">
          <td>{{ gasto.departamento }}</td>
          <td>{{ gasto.total.toFixed(2) }}</td> <!-- Mostramos el total con 2 decimales -->
        </tr>
      </tbody>
    </table>

    <!-- Mensaje si no hay datos -->
    <p v-else>Sin datos para mostrar</p>

    <!-- Mensaje de error -->
    <p v-if="error" class="error">Error al filtrar los gastos: {{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fechaInicio: "",
      fechaFin: "",
      gastos: [],
      error: false,
      errorMessage: "",
    };
  },
  methods: {
    async filtrarGastos() {
      this.error = false;
      this.errorMessage = "";

      try {
        // Realizamos la petición HTTP 
        const response = await this.$axios.get("https://localhost:7084/api/Gastos/filtrar", {
          params: {
            fechaInicio: this.fechaInicio,
            fechaFin: this.fechaFin,
          },
        });

        // Verificamos que la respuesta contiene los datos esperados
        if (response.data && response.data.length > 0) {
          console.log("Respuesta de la API:", response.data); // Verifica que los datos están siendo recibidos
          this.gastos = response.data;
        } else {
          this.gastos = [];
          this.error = false;
          this.errorMessage = "No se encontraron gastos para las fechas seleccionadas.";
        }
      } catch (error) {
        console.error("Error al filtrar los gastos:", error);
        this.error = true;
        this.errorMessage = "Hubo un problema al obtener los datos. Intenta de nuevo más tarde.";
      }
    },
  },
};
</script>

<style scoped>
/* Estilos para la tabla */
table {
  width: 50%;
  border-collapse: collapse;
  margin-top: 20px;
  border: 1px solid #ddd;
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f4f4f4;
}

tr:hover {
  background-color: #f1f1f1;
}

button {
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

/* Estilo para el mensaje de error */
.error {
  color: red;
  font-weight: bold;
}
</style>
