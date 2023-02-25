<template>
    <v-card class="mx-auto borde--margen" max-width="50%" variant="outlined">
      <v-card-title>Método Burbuja</v-card-title>
      <v-card-item  class="bg-orange-lighten-3 pa-5 ma-2">
        <div class="bg-orange-lighten-3 pa-5 ma-2">
          <v-text-field
            v-model="textoArr"
            :counter="20"
            label="Ingresa tu Arreglo. Ejemplo: [1, 5, 9, 10, 2]"
            required
          ></v-text-field>
        </div>
      </v-card-item>
  
      <v-card-actions >
        <v-btn variant="text" color="teal-accent-4" @click="OrdenarArray()"> Ordenar </v-btn>
      </v-card-actions>
      <v-card-item  class="bg-orange-lighten-3 pa-5 ma-2">
        <div class="bg-orange-lighten-3 pa-5 ma-2" v-for="item in ordenando" :key="item.id">
          <span>{{ item }}</span>
        </div>
        <div class="bg-orange-lighten-3 pa-5 ma-2">
          <span>Tu Arreglo ordenado es: {{ arrOrdenado }}</span>
        </div>
      </v-card-item>
    </v-card>
  </template>
  
  <script>
  export default {
    name: "Palindromo",
    data() {
      return {
        textoArr: "[15,20,48,1,2,58]",
        ordenando: [],
        arrOrdenado:[]
      };
    },
    methods: {
      OrdenarArray() {
        let arr =  JSON.parse(this.textoArr);
        
        console.log(arr)
        let length = arr.length;//Obtener la longitud de   
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < (length - i - 1); j++) {
                    if(arr[j] > arr[j+1]) {//Revisar si es mayoe el número
                        let tmp = arr[j]; 
                    arr[j] = arr[j+1]; 
                    arr[j+1] = tmp;
                    console.log(arr)
                }
            }        
        }
        this.arrOrdenado = arr
      },
    },
  };
  </script>
  
  <style scoped>
  .contenido {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    align-arr: top;
  }
  .borde--margen{
      margin: 3em;
  }
  </style>