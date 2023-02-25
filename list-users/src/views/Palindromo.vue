<template>
  <v-card class="mx-auto borde--margen" max-width="50%" variant="outlined">
    <v-card-title>Palíndromo</v-card-title>
    <v-card-item  class="bg-orange-lighten-3 pa-5 ma-2">
      <div class="bg-orange-lighten-3 pa-5 ma-2">
        <v-text-field
          v-model="texto"
          :counter="20"
          label="Escribe tu Texto"
          required
        ></v-text-field>
      </div>
    </v-card-item>

    <v-card-actions >
      <v-btn variant="text" color="teal-accent-4" @click="revisarTexto()"> Revisar texto </v-btn>
    </v-card-actions>
    <v-card-item  class="bg-orange-lighten-3 pa-5 ma-2">
      <div class="bg-orange-lighten-3 pa-5 ma-2">
        <span>El texto {{ resultado==false? "No":"Si" }} es Palindromo</span>
      </div>
    </v-card-item>
  </v-card>
</template>

<script>
export default {
  name: "Palindromo",
  data() {
    return {
      texto: "",
      resultado:false
    };
  },
  methods: {
    revisarTexto() {
        
        let text = this.texto.replace(/([-,_. ():/\\])/g,'').toLowerCase()
        console.log(text)
        let tam = text.length
        for(let c=0; c<tam/2;c++){
            if(text.charAt(c)!=text.charAt(tam-1-c)){
                this.resultado = false
            }
        }
        this.resultado = true
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
  align-items: top;
}
.borde--margen{
    margin: 3em;
}
</style>