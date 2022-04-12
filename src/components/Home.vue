<template>
  <div class="container px-4 px-lg-5">
    <!-- Heading Row-->
    <div class="row gx-4 gx-lg-5 align-items-center my-5">
      <div class="col-lg-7"><img class="img-fluid rounded mb-4 mb-lg-0" src="https://cdn.culturepourtous.net/aubonsens/20201222150724/spiruline-en-brindilles.png" alt="..." /></div>
      <div class="col-lg-5">
        <h1 class="font-weight-light">Boutique 100% dédiée à la spiruline</h1>
        <p>La spiruline est une algue spiralée qui existe depuis 3 milliards d’années. Faible en calorie, elle contient une grande quantité de protéines, d’antioxydants (caroténoïdes, phycocyanine) et d’acide gamma-linolénique (issu de la famille des oméga-6). Des recherches mettent en avant des propriétés antioxydantes, antidiabétiques et immunostimulantes de la spiruline, ainsi que ses capacités à réduire le taux de lipides sanguins</p>
      </div>
    </div>
  </div>

  <!-- Content Row-->
  <div class="row gx-4 gx-lg-5">
    <div class="col-md-4 mb-5">
      <div class="card h-100">
        <div class="card-body">
          <h2 class="card-title">Carte des fournisseurs</h2>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
        </div>
        <div class="card-footer">
          <router-link class="btn btn-primary btn-sm" to="/SuppliersMap">Voir Plus</router-link>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-5">
      <div class="card h-100">
        <div class="card-body">
          <h2 class="card-title">Liste des fournisseurs</h2>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem sunt quam eaque, vel, non in id dolore voluptates quos eligendi labore.</p>
        </div>
        <div class="card-footer">
          <router-link class="btn btn-primary btn-sm" to="/SuppliersList">Voir Plus</router-link>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-5">
      <div class="card h-100">
        <div class="card-body">
          <h2 class="card-title">Liste des commandes</h2>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
        </div>
        <div class="card-footer">
          <router-link class="btn btn-primary btn-sm" to="/CustomersList">Voir Plus</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>