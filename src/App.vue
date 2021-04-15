<template>
  <div id="app"> 
        <div id="navbar">
        <a href="http://localhost:8081/books"><button>Przejdz do listy książek</button></a>
        <a href="http://localhost:8081/bookform"><button>Dodaj ksiazke</button></a>       
        <a href="http://localhost:8081/bookdelete"><button>Usun ksiazke</button></a>       
        <a href="http://localhost:8081/bookupdate"><button>Edytuj ksiazke</button></a></div>
        <hr/>
        <br/>
        <h1>Nasza piekna aplikacja o ksiazkach</h1>
        <router-view>     
        </router-view>
        

  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: 5%;
  margin-right: 5%;
  display: flex bottom 2px;
}
button{
    margin: 1%;
}
.navbar{
  display: flex bottom 2px;
}
</style>