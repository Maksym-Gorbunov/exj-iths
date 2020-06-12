<template>
  <div id="countries">
    
    <div v-for="country in countriesProp" :key="country.name">
        <Country v-bind:countryProp="country" :detailedProp="detailedProp" 
        
        /> 
    </div> 
    
  </div>
</template>

<script>
//import { mapGetters, mapActions } from "vuex";
import Country from "./Country";

export default {
  name: "Countries",
  props: ['countriesProp', 'detailedProp'],
  components: { Country },
    //computed: mapGetters(["countries", "detailed"]),
  data(){
      return {
          msg: [5,5,5]
      }
  },
  
  methods: {
    //...mapActions([]),
    test() {
      
    }
  },
  created() {
  }
};
</script>


<style scoped>
</style>
