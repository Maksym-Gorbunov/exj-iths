<template>
  <div id="header">
    <div class="left"><a href="/"><i class="fas fa-virus fa-lg"></i></a></div>
    <div class="center">
        <a href="/" @click="setPage('home')" :class="{active: page === 'home'}" >HOME</a>
        <a href="/#/api" @click="setPage('api')" :class="{active: page === 'api'}" >API</a>
        <a href="/#/countries"  @click="setPage('countries')"  :class="{active: page === 'countries'}" >COUNTRIES</a>
        <a href="/#/total"  @click="setPage('total')"  :class="{active: page === 'total'}" >TOTAL</a>
        <a href="/#/daily"  @click="setPage('daily')"  :class="{active: page === 'daily'}" >DAILY</a>
        <a href="/#/country" @click="setPage('country')"  :class="{active: page === 'country'}" >COUNTRY</a>    
    </div>
    <div class="right">
      <i class="far fa-user user"></i> 
      <span class="user">{{this.$store.getters.user.email}}</span>
      <i class="fas fa-bars"></i>
    </div>

   
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
//import Countries from "../Countries";

export default {
  name: "Header",
  //components: {Countries},
  props: ['userProp'],
  data() {
    return {
      }
  },
  
  computed: mapGetters(["page"]),
  methods: {
    ...mapActions(["setPage"]),
  },
  created() {
    
  }
};
</script>

<style scoped>
  #header{
    background: var(--main-green);
    border:1px solid #ccc;
    width: 100vw;
    height: 2em;
    display: grid;
    grid-template-columns: 10% 70% 20% ;
  }
  a{
      text-decoration: none;
      margin: 0 1em;
      line-height: 2em;
      color: rgb(111, 100, 121);

  }
  .left i{
    color: var(--main-red);
  }
  .center{
    text-align: center;
  }
  .right{
    line-height: 2em;
    padding-right: 1em;
    color: rgb(66, 66, 70);
    background: var(--main-green);
    display: grid;
    grid-template-columns: 10% 80% 10%;
  }
  .right i {
    line-height: 2em;
    text-align: center;
  }
  .user{
    color:  var(--main-red);
  }
  .active{
    color: var(--main-red);
  }  
  
</style>
