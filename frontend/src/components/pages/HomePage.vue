<template>
  <div id="homePage">

    <Header/>

    <div class="box">
      <h1>HOME</h1>
      
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Header from "../Header"

export default {
  name: "HomePage",
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
#homePage{
  background-image: url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');
  background-repeat: no-repeat;
  background-size: cover;
}
.box {
  width: 80vw;
  min-height: 100vh;
  margin: auto;
  padding: 0.5em;
}
h1{
  text-align: center;
  font-size: 4em;
  color: rgb(245, 141, 115);
  margin-top: 5em;
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
  min-height: 2em;
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
  color: rgba(0, 0, 255, 0.61);
}
.response-data{
  padding: 0.5em;
  color: rgb(146, 145, 145);
}

</style>
