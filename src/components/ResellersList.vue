<template>
  <h1>Liste des revendeurs</h1>
  <div class="d-flex flex-row">
    <delete-element :data="resellers.data" @removeId="deleteApi"/>
    <AddElement :resellers="true" @addReseller="addApi"/>
  </div>

  <table>
    <thead>
    <tr>
      <th>Nom</th>
      <th>Description</th>
    </tr>
    </thead>

    <tbody>
    <Resellers v-for="reseller in resellers.data" :key="reseller.id"
               :name="reseller.name"
               :description="reseller.description"
    />
    </tbody>
  </table>
  <Pagination :links="resellers.links" @url="changePage"/>
</template>

<script>
import Resellers from "../views/Reseller";
import axios from "axios";
import Pagination from "./Pagination";
import DeleteElement from "@/components/DeleteElement";
import AddElement from "@/components/AddElement";
export default {
  name: "ResellerList",
  components: {AddElement, DeleteElement, Pagination, Resellers},
  methods: {
    changePage(e){
      this.getApi(e)
    },
    getApi(url) {
      axios
          .get(url)
          .then(response => {
            this.resellers = response.data;
          })
          .catch(error => {
            this.error = error;
            this.errored = true;
              }
          )
    },
    addApi(element){
      this.resellers.data.push(element)
    }

  },

  data(){
    return{

      resellers: [],
      url: "https://heroku-campus-suppliers.herokuapp.com/api/resellers",
      error: null,
      errored: false

    }
  },
  created() {
    this.getApi(this.url);
  }


}
</script>

<style scoped>

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