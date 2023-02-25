<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    Prueba Puebla      
    </v-app-bar>

    <v-main>
      <div>
        <v-btn><router-link to="/">CRUD</router-link></v-btn>
        <v-btn><router-link :to="{ name: 'Método Burbuja'}">Método Burbuja</router-link></v-btn>
        <v-btn><router-link :to="{ name: 'Palíndromo'}">Palíndromo</router-link></v-btn>
      </div>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
