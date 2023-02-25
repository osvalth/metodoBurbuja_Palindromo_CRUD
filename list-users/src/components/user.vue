<template>
  <v-container>
    <v-row class="contenido">
      <!-- Editar y guardar datos -->
      <v-col md="3" class="rounded-card">
        <!-- Nombre del Usuario -->
        <v-text-field
          v-model="name"
          :counter="20"
          label="Nombre del usuario"
          required
        ></v-text-field>
        <v-text-field
          v-model="lastname"
          :counter="20"
          label="Apellido del usuario"
          required
        ></v-text-field>
        <v-text-field
          v-model="age"
          :counter="20"
          label="Edad del usuario"
          required
        ></v-text-field>
        <v-divider class="my-3"></v-divider>
        <!-- Botones -->
        <v-btn
          color="success"
          elevation="24"
          x-large
          block
          class="mr-4"
          @click="guardarDatos"
        >
          Aceptar
          <!-- <v-icon dark>mdi-checkbox-marked-circle</v-icon> -->
        </v-btn>
        <!-- ********* -->
        <v-divider class="my-3"></v-divider>
        <v-btn
          color="blue"
          elevation="24"
          x-large
          block
          class="mr-4"
          @click="limpiarDatos"
        >
          Limpiar
          <!-- <v-icon dark>mdi-checkbox-marked-circle</v-icon> -->
        </v-btn>
        <!-- ********* -->
      </v-col>
      <!-- Ver tabla de datos  -->
      <v-col md="8">
        <template>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Edad</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="item in usuarios" :key="item.ID">
                <td>{{ item.ID }}</td>
                <td>{{ item.USERNAME }}</td>
                <td>{{ item.LASTNAME }}</td>
                <td>{{ item.AGE }}</td>
                <td>
                  <div class="acciones">
                    <span @click="eliminarUsuario(item.ID)">
                      <v-icon color="red">mdi-delete</v-icon>
                    </span>
                    <v-spacer></v-spacer>
                    <span
                      @click="
                        editarDatos(
                          item.ID,
                          item.USERNAME,
                          item.LASTNAME,
                          item.AGE
                        )
                      "
                    >
                      <v-icon color="blue">mdi-pencil</v-icon>
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
import { PATH } from "../constants/constants";
export default {
  name: "User",
  data() {
    return {
      ID: null,
      name: "",
      lastname: "",
      age: null,
      usuarios: [],
    };
  },
  mounted() {
    this.obtenerDatos();
  },
  methods: {
    limpiarDatos() {
      this.name = "";
      this.lastname = "";
      this.age = "";
      this.ID = null;
    },
    async guardarDatos() {
      let obj = {
        ID: this.ID == null ? 0 : this.ID,
        USERNAME: this.name,
        LASTNAME: this.lastname,
        AGE: this.age,
      };
      console.log(obj);
      if (
        (this.name != "") &
        (this.lastname != "") &
        (this.age != null)
      ) {
        try {
          await axios.put(`${PATH.url}/users/set`, obj).then((response) => {
            console.log(response.data);
          });
          this.obtenerDatos();
          this.limpiarDatos();
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("Completa los campos");
      }
    },
    editarDatos(ID, USERNAME, LASTNAME, AGE) {
      this.name = USERNAME;
      this.lastname = LASTNAME;
      this.age = AGE;
      this.ID = ID;
    },
    async obtenerDatos() {
      try {
        await axios.get(`${PATH.url}/users/all`).then((response) => {
          let result = [];
          result = response.data;
          this.usuarios = result;
        });
      } catch (error) {
        console.log(error);
      }
    },
    async eliminarUsuario(ID) {
      try {
        await axios
          .delete(`${PATH.url}/users/detele/${ID}`)
          .then((response) => {
            console.log(response.data);
          });
        this.obtenerDatos();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
.rounded-card {
  border-radius: 15px;
}
table {
  width: 100%;
  margin: 2em;
}
thead {
  background-color: #4caf50;
  text-align: center;
  color: #fff;
}
th,
td {
  width: 25%;
  text-align: center;
  vertical-align: center;
  padding: 0.4em;
}
.acciones {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.contenido {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  align-items: top;
}
</style>