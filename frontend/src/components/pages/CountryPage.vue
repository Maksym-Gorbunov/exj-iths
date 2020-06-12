<template>
  <div id="countryPage">

      <Header/>

      <div class=box>
        <h2>Country</h2>
        
          <div class="content">
            
            

            <div class="country">
          
          <ul>
            <li class="name">Country: <b>{{country.country}}</b></li>
            <li>Location:
              <ul  class="location">
                <li>latitude: {{country.latitude}}</li>
                <li>longitude: {{country.longitude}}</li>
              </ul> 
            </li>
            
            <li>Date: 
              <ul class="date">
                <li>{{country.date}}</li>
              </ul>
            </li>
            <li class="provinces">Provinces: 
              <ul v-for="province in country.provinces" :key="province.province">
                  <div class="province">
                    <li>Province: <b>{{province.province}}</b></li>
                    <li class="statistic">Statistic:  
                      <ul>
                        <li>confirmed: {{province.confirmed}}</li>
                        <li>recovered: {{province.recovered}}</li>
                        <li>deaths: {{province.deaths}}</li>
                        <li>recovered: {{province.recovered}}</li>
                      </ul> 
                    </li>
                  </div>
              </ul> 

            </li>
          </ul>

        </div>

        <form class="form" @submit="getCountry">
              <div>
                <label for="date">date:</label><br>
                <input type="text" id="date" name="date" v-model="form.date">
              </div>
              <div>
                <label for="code">code:</label><br>
                <input type="text" id="code" name="code" v-model="form.code"><br><br>
              </div>
              <div>
                <label for=""></label><br>
                <input type="submit" value="Submit">
              </div>
            </form> 

          </div>

        


      </div>

  </div>
</template>





<script>
import { mapGetters, mapActions } from "vuex";
import Header from "../Header"

export default {
  name: "CountryPage",
  components: {Header},
  props: ["myProp"],
  data() {
    return {
      form: {
        date: "2020-04-01",
        code: "Af"
      } 
    };
  },
  computed: mapGetters(["country"]),
  methods: {
    ...mapActions([
      "countryAction"
    ]),
    getCountry(e){
      e.preventDefault()
      this.countryAction(this.form)   
    },
    init(){
      //this.dailyTotalsAction(date)
    }
  },
  created() {
    //this.initTotal()
  }
};
</script>




<style scoped>
  #countryPage{
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
  width: 80%;
  margin: 0 auto;
  display:grid;
  grid-template-columns: 70% 30%;
}
.form{
  background: rgb(212, 212, 211);
  margin-top: 1em;
  padding: 1em;
  height: 14em;
}  
form input[type="submit"]{
  
}
.form label{
  padding-left: 0.5em;
  font-size: small;
  color: rgb(136, 136, 136);
}
.country{
  background: rgb(248, 197, 131);
  width: 70%;
  margin: 1em auto;
  padding: 1em;
  border-radius: 0.5em;
  border: 1px solid #ccc;
}



  ul, li {
    list-style-type: none;
  }
  li{
  }  
  .location{
    width: 50%;
    margin: 0.5em 0 0.5em 2em ;
    background: var(--main-blue);
    border: 1px solid white;
    border-radius: 0.5em;
    padding: 0.5em;
  }
  .date{
    width: 30%;
    margin: 0.5em 0 0.5em 2em ;
    background: var(--main-blue);
    border: 1px solid white;
    border-radius: 0.5em;
    padding: 0.5em;
  }
  .province{
    padding: 0.5em;
    border-radius: 0.5em;
    width: 80%;
    border: 1px solid white;
    background: var(--main-green);
    margin: 0.5em 0 0.5em 2em ;
  }
  .statistic{
    width: 40%;
    margin: 0.5em 0 0.5em 2em ;
  }
    .name{
      margin-bottom: 0.5em;
    }
</style>
