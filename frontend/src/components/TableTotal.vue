<template>
  <div id="tableTotal">
    <h3>{{headerProp}}</h3>
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
              <td>{{dataProp.confirmed}}</td>
              <td>{{dataProp.recovered}}</td>
              <td>{{dataProp.critical}}</td>
              <td>{{dataProp.deaths}}</td>
              <td>{{dataProp.lastChange}}</td>
              <td>{{dataProp.lastUpdate}}</td>
            </tr>  
          </tbody>  
        </table> 
  </div>
</template>


<script>
export default {
  name: 'TableTotal',
  props: ['headerProp', 'dataProp'],
  data() {
    return {
        data: {}
    };
  },

  //computed: mapGetters(["total"]),
  methods: {
    //...mapActions([
      //"latestTotalsAction"
    //]),
    init(){
        //this.data = this.dataProp
    }
  },
  created() {
    this.init()
  }
}

</script>


<style scoped>
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
