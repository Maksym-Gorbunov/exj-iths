<template>
  <div id="apiPage">

    <Header/>

    <div class="box">
      <h3>Api</h3>
      <div class="content-box">
        
        <div class="request-box">
          
          <div class="covid-19-logo">
            <a href="https://rapidapi.com/Gramzivi/api/covid-19-data"  target="_blank">
              <img
              :src="getImgUrl()"
              onerror="this.onerror=null; this.src='http://maxcoder.pro/img/temp/default.png'"
              alt=""
            />
            <span>COVID-19</span>
            </a>
          </div>
          
          <div class="processing">
            <p v-if="processing===true" >processing...</p>
          </div>
          
          <ul>
            <b>Help</b>
            <li @click="getListOfCountries">
              <span class="request-type">GET</span>getListOfCountries
            </li>
            <li @click="OpenAPIDocumentation">
              <span class="request-type">GET</span>OpenAPIDocumentation
            </li>
          </ul>
          <ul>
            <b>Total</b>
            <li @click="getLatestTotals">
              <span class="request-type">GET</span>getLatestTotals
            </li>
            <li @click="getDailyReportTotals">
              <span class="request-type">GET</span>getDailyReportTotals
            </li>
          </ul>
          <ul>
            <b>Country</b>
            <li @click="getDailyReportByCountryName">
              <span class="request-type">GET</span>getDailyReportByCountryName
            </li>
            <li @click="getLatestAllCountries">
              <span class="request-type">GET</span>getLatestAllCountries <i class="fas fa-lock"></i>
            </li>
            <li @click="getLatestCountryDataByCode">
              <span class="request-type">GET</span>getLatestCountryDataByCode
            </li>
            <li @click="getLatestCountryDataByName">
              <span class="request-type">GET</span>getLatestCountryDataByName
            </li>
            <li @click="getDailyReportByCountryCode">
              <span class="request-type">GET</span>getDailyReportByCountryCode
            </li>
            <li @click="getDailyReportAllCountries">
              <span class="request-type">GET</span>getDailyReportAllCountries <i class="fas fa-lock"></i>
            </li>
          </ul>
        </div>

        <div class="response-box">
          <div class="response-description">
            <p>Description:  {{apiResponse.description}}</p>
          </div>
          <hr>
          <div class="response-data"><p>{{apiResponse.data}}</p></div>
        </div>
      
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Header from "../Header"

export default {
  name: "ApiPage",
  components: {Header},
  props: ["myProp"],
  data() {
    return {};
  },

  computed: mapGetters(["apiResponse", "processing"]),
  methods: {
    ...mapActions([
      "getListOfCountries",
      "OpenAPIDocumentation",
      "getLatestTotals",
      "getDailyReportTotals",
      "getDailyReportByCountryName",
      "getLatestAllCountries",
      "getLatestCountryDataByCode",
      "getLatestCountryDataByName",
      "getDailyReportByCountryCode",
      "getDailyReportAllCountries"
    ]),

    getImgUrl(){
      return "https://rapidapi-prod-collections.s3.amazonaws.com/50ac3a55-4378-4965-a9a4-80bc9d05ac7a.jpg"
    }
  },
  

  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#apiPage{
  background-image: url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');
  background-size: cover;
}
p{
  border: none;
}
.box {
  width: 80vw;
  min-height: 100vh;
  margin: auto;
  background: rgb(255, 255, 255);
}
h3{
  background: white;
  line-height: 4em;
  text-align: center;
  color: var(--main-blue);
  text-transform: uppercase;
}
.content-box {
  min-height: 90vh;
  display: grid;
  grid-template-columns: 30% 70%;
}
.request-box {
  padding: 0.5em;
  border: 1px solid #ccc;
}
.response-box {
  border: 1px solid #ccc;
}
ul {
  list-style-type: none;
}
.request-box ul {
  margin-top: 2em;
}
.request-box li {
  color:rgb(41, 90, 224);
  cursor: pointer;
  border: 1px solid rgb(230, 229, 229);
  background: rgb(247, 207, 121);
  border-radius: 5px;
  width: 90%;
  height: 2em;
  line-height: 2em;
  margin: 2px 2px 2px 4px;
}
.response-box {
  border: 1px solid #ccc;
}
.request-type {
  color: rgb(33, 184, 58);
  border: 1px solid rgb(173, 173, 173);
  border-radius: 5px;
  background: #ccc;
  padding: 3px;
  margin: 0 5px 0 2px;
}
.processing{
  display: block;
  height: 1em;
}
.processing p{
  padding: 0;
  margin: 0;
  font-size: small;
  line-height: 1em;
  border: none;
}
.covid-19-logo span {
  color:rgb(224, 41, 41);
  font-size: xx-large;
}
.covid-19-logo a {
  text-decoration: none;
}
.response-description{
  padding: 0.5em;
  color: rgb(82, 80, 80);
}
.response-data{
  padding: 0.5em;
  color: rgb(146, 145, 145);
}

</style>
