<template>
  <div id="totalPage">

    <Header/>

    <div class="box">
      <h2>Total Statistics</h2>
      <div class="content-box">
        

        <div class="total-box">
          <div>
          <table class="table">
          <thead>
            <tr>
              <td>confirmed</td>
              <td>recovered</td>
              <td>critical</td>
              <td>deaths</td>
              <td>last change</td>
              <td>last update</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{total.confirmed}}</td>
              <td>{{total.recovered}}</td>
              <td>{{total.critical}}</td>
              <td>{{total.deaths}}</td>
              <td>{{total.lastChange}}</td>
              <td>{{total.lastUpdate}}</td>
            </tr>  
          </tbody>  
        </table> 
        </div>
        </div>


        <div class="char">
    
        </div>
        

        
          
          
            
      
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Header from "../Header"


export default {
  name: "TotalPage",
  components: {Header},
  props: ["myProp"],
  data() {
    return {};
  },

  computed: mapGetters(["total"]),
  methods: {
    ...mapActions([
      "latestTotalsAction"
    ]),

  },
  

  created() {
    this.latestTotalsAction()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#totalPage{
  
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
.total-box{
  width: 70%;
  margin: 1em auto;
  display: grid;
  background: rgb(158, 243, 196);
  margin-bottom: 1em;
}
table{
  margin: 2em auto;
  text-align: center;
}
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
td {
  padding: 0.5em;
}



</style>
