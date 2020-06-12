<template>
  <div id="countryComponent">
    
    <div class="content">
      
      <div v-if="detailedProp===false" class="short">
        <p>{{this.toUpper(countryProp.name)}}</p>
      </div>

      <div v-else class=detailed>
      
        <!--div class="detailed-content">
          <p><b>{{this.toUpper(countryProp.name)}}</b></p>
          <p>code: {{countryProp.code}}</p>
          <p>location: {{countryProp.location}}</p>
          <p>statistic: {{countryProp.statistic}}</p>
        </div-->

        <div class="detailed-content">
          <p><b>{{this.toUpper(countryProp.name)}}</b></p>
          <ul>Code:
            <li>alpha2code: {{countryProp.code.alpha2code}}</li>
            <li>alpha3code: {{countryProp.code.alpha3code}}</li>  
          </ul>  
          <ul>Location:
            <li>latitude: {{countryProp.location.latitude}}</li>
            <li>longitude: {{countryProp.location.longitude}}</li>
          </ul>
          <ul>Statistic:
            <li>confirmed: {{countryProp.statistic.confirmed}}</li>
            <li>recovered: {{countryProp.statistic.recovered}}</li>
            <li>critical: {{countryProp.statistic.critical}}</li>
            <li>deaths: {{countryProp.statistic.deaths}}</li>
          </ul>
          <ul>Date:
            <li>updated: {{countryProp.statistic.lastUpdate}}</li>
            <li>changed: {{countryProp.statistic.lastChange}}</li>
          </ul>
        </div>
    
        <div class="btns">
          <button>Edit</button>
          <button v-on:click="deleteCountryEmit" class="delete-btn" >Delete  <i class="far fa-trash-alt"></i></button>
          <button class="save-btn disabledBtn" disabled>Save</button>
        </div>
      
      </div>
    
    </div>

    


  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
//import Countries from "../Countries";

export default {
  name: "Country",
  //components: {Countries},
  props: ['countryProp', 'detailedProp'],
  data() {
    return {
      }
  },
  
  //computed: mapGetters(["detailed"]),
  methods: {
    //...mapActions(["fetchCountries"]),
    toUpper(str){
      return str.toUpperCase()  
    },
    deleteCountryEmit(){
      this.$parent.$emit('deleteCountryEmit', this.countryProp.id)
    }
  },

  created() {
  }
};
</script>

<style scoped>
  #countryComponent{
    
  }
  .content{
    
  }
  p{
    border: none;
    line-height: 1em;
  }
  .detailed{
    background: var(--main-green);
    width: 80%;
    margin: 1em 0.5em;
    
    display: grid;
    grid-template-columns: 80% 20%;
  }
  .short{
    background: var(--main-green);
    border-radius: 5px;
    width: 50%;
    margin: 0.5em;
  }
  .short > p {
    line-height: 2em;
  }

  .btns{
    background: rgb(230, 227, 227);
    padding: 1em;
  
  }
  button{
    width: 90%;
    padding: 0;
  }
  .delete-btn{
  }
  .save-btn{
  }
  .detailed-content{
    padding-bottom: 1em;
    padding-top: 1em;
  }
  ul{
    padding-left: 2em;
  }
  li{
    list-style-type: none;
    padding-left: 1em;
  }
  .disabledBtn{
    background: #ccc;
  }
</style>
