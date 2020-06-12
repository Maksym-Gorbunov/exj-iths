<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
  body{
    --main-red: rgb(209, 121, 121);
    --main-green: rgb(158, 243, 196);
    --main-blue: rgb(144, 144, 243);
    --main-light-blue: rgb(79, 166, 216);
    --main-grey: rgb(219, 218, 218);
    --main-dark-grey: rgb(126, 123, 123);
    --main-lilla: rgb(222, 210, 255);
  }

  *{
    margin: 0;
    padding: 0;
  }

  h2{
    color: var(--main-blue);
    text-transform: uppercase;
    text-align: center;
    margin: 1em auto;
  }
  table{
    background: white;
    margin: 2em auto;
    text-align: center;
  }
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  tr, td {
    line-height: 2em;
    padding: 0 1em;
    height: 2em;
  }
  thead{
    background: var(--main-grey);
    color: black;
  }
  button, input, p{
    line-height: 2em;
    margin: 0.5em;
    padding: 0 1em;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  button, input[type=button], input[type=submit]{
    color: white;
    line-height: 2em;
    margin: 0.5em;
    padding: 0 1em;
    border: 1px solid #ccc;
    border-radius: 3px;
    background: var(--main-light-blue);
  }
  
  
  
  
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  html, body {
    font-family: 'Montserrat', sans-serif;
  }

</style>
