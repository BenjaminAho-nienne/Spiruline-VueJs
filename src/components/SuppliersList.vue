<template>
  <h1>Liste des fournisseurs</h1>
  <div class="d-flex flex-row">
    <div class="d-table my-5 mx-auto">
      <div class="input-group ">
        <div class="form-outline">
          <input type="search" placeholder="Search by name...(lowercase)" class="form-control" v-model="searchBar" />
        </div>

      </div>

    </div>
    <delete-element :data="suppliers.data" @removeId="deleteApi"/>
    <AddElement :suppliers="true" @addSupplier="addApi"/>

  </div>


  <table>
    <thead>
    <tr>
      <th>Nom</th>
      <th>Status</th>
      <th>Date</th>
    </tr>
    </thead>

    <tbody>
    <Supplier v-for="supplier in filteredSuppliers" :key="supplier.id"
              :name="supplier.name"
              :status="supplier.status"
              :checkedAt="supplier.updated_at"
    />
    </tbody>
  </table>

  <Pagination :links="suppliers.links" @url="getApi"/>

</template>

<script>
import Pagination from "./Pagination";
import axios from "axios";
import Supplier from "../views/Supplier";
import DeleteElement from "@/components/DeleteElement";
import AddElement from "@/components/AddElement";
export default {
  name: 'SuppliersList',
  components: {AddElement, DeleteElement, Supplier, Pagination},
  methods: {
    //récupère les information de l'API
    getApi(url) {
      axios
          .get(url)
          .then(response => {
            this.suppliers = response.data;
          })
          .catch(error => {
            this.error = error;
            this.errored = true;
              }
          )
    },
    //supprime la colonne qui corespond au paramètre
    removeSuppliersById(id){
      const data = this.suppliers.data.filter((item)=> item.id !== id)
      this.suppliers = {...this.suppliers, data: data}

    },
    //Récupère l'Emit qui passe en paramètre(id) puis appelle la fonction removeSuppliersById
    deleteApi(id){
      axios
          .get(this.url + "/" + id)
          .then(response => {
            this.removeSuppliersById(response.data.id);
          })
          .catch(error => {
            this.error = error;
            this.errored = true;
              }
          )

    },
    //Ajout d'un element au tableau
    addApi(element){
      this.suppliers.data.push(element)
    }
  },
  computed: {
    //méthode qui filtre les elements du tableau en les comparant au V-model de la searchbar
    filteredSuppliers() {
      if (this.searchBar) {
        return this.suppliers.data.filter((item) => {
          console.log(item)
          return this.searchBar.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
        })
      } else {
        return this.suppliers.data
      }
    },

  },

  data() {
    return {

      searchBar: null,
      getSuppliersId: null,
      suppliers: [],
      error: null,
      errored: false,
      url: "https://heroku-campus-suppliers.herokuapp.com/api/suppliers"

    };

  },
  //Lors de l'appelle de cette page lance la fonction getApi

  created() {
    this.getApi(this.url);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

table {
  font-family: Verdana;
  font-size: 14px;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  padding: 10px;
  margin: 0;
}

tbody tr:nth-child(2n) {
  background-color: #eee;
}

th {
  position: sticky;
  top: 0;
  background-color: #333;
  color: white;
}

</style>
