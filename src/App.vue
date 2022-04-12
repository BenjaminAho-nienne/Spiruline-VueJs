<template>
  <div class="m-4">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/Home">Spiruline</router-link>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" to="/SuppliersMap">Carte des fournisseurs</router-link>
            <router-link class="nav-item nav-link" to="/SuppliersList">Liste des fournisseurs</router-link>
            <router-link class="nav-item nav-link" to="/ResellersList">Liste des revendeurs</router-link>
            <router-link class="nav-item nav-link" to="/CustomersList">Liste des clients</router-link>
            <router-link class="nav-item nav-link" to="/OrdersList">Liste des commandes</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div class="container">
    <router-view/>
  </div>


</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app a{
  text-decoration: none;
  color: black;
}
#app a:hover{
  color: #42b983;
}

#app a.router-link-exact-active {
  color: #42b983;
}



</style>
