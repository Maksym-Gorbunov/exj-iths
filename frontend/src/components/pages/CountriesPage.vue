<template>
  <div id="countriesPage">
      <Header/>
      <div class=box>
        <h2>Countries</h2>
          <div class="content">
          
            <p class="counter">Total: {{countries.length}}</p>

            <div class=viewBtns>
              <button @click="shortView()" :disabled="detailed===false" v-bind:class="{ clicked: detailed === false }">short</button>
              <button @click="detailedView()" :disabled="detailed===true" v-bind:class="{ clicked: detailed === true }">detailed </button>
            </div>
          
                      
          <Countries :countriesProp=countries :detailedProp=detailed v-on:deleteCountryEmit="deleteCountry($event)" />
        </div>

      </div>

  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import Countries from "../Countries";
import Header from "../Header"

export default {
  name: "CountriesPage",
  components: {Countries, Header},
  props: ['prop1'],
  data() {
    return {
      countriesData:[1,2,3]
      }
  },
  
  computed: mapGetters(['countries', 'detailed']),
  methods: {
    ...mapActions(
      ['fetchCountries', 
      'fetchCountriesDetailed',
      'deleteCountryAction'  
      ]),

    shortView(){
      this.$store.commit('setDetailed', false)
      this.fetchCountries()
    },
    detailedView(){
      this.$store.commit('setDetailed', true)
      this.fetchCountriesDetailed()
    },
    deleteCountry(id){
      console.log(id)
      this.deleteCountryAction(id)

    },
    init(){
      if(this.detailed){
        this.fetchCountriesDetailed()
      } else{
        this.fetchCountries()
      }
    }
  },

  created() {
    this.init()
  }
};
</script>

<style scoped>
  #countriesPage{
  background-image: url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');
  background-repeat: no-repeat;
  background-size: cover;
}
.box {
  width: 80vw;
  min-height: 100vh;
  margin: auto;
  padding: 0.5em;
  background: rgb(255, 255, 255);
}
.content{
  width: 100%;
  margin-left: 7em;
}
  .viewBtns{
    display: inline;
  }
  .clicked{
    background:#ccc;
  }
  .counter{
    color: rgb(94, 91, 91);
    font-size: small;
    border: none;
    padding-left: 0;
  }  
  
  
</style>
