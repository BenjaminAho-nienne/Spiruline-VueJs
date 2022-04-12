<template>
  <h1>Liste des Commandes</h1>
  <delete-element :data="orders.data" @removeId="deleteApi"/>
  <table>
    <thead>
      <tr>
        <th>Numéro de commande</th>
        <th>Prix</th>
        <th>Date</th>
      </tr>
    </thead>

    <tbody>

      <Order v-for="order in orders.data" :key="order.id"
             :number="order.number"
             :date="formatDate(order.date)"
             :price="order.price"

      />

    </tbody>
  </table>
  <Pagination :links="orders.links" @url="changePage"/>

</template>

<script>
import Pagination from "./Pagination";
import Order from "../views/Order";
import axios from "axios";
import {format} from "timeago.js";
import DeleteElement from "@/components/DeleteElement";

export default {
  name: "OrdersList",
  components: {DeleteElement, Order, Pagination},
  methods: {

    formatDate(date){
      return format(date)
    },
    changePage(e){
      this.getApi(e)
    },
    getApi(url) {
      axios
          .get(url)
          .then(response => {
            this.orders = response.data;
          })
          .catch(error => {
                this.error = error;
                this.errored = true;
              }
          )
    }

  },

  data() {
    return{

      orders: [],
      url: "https://heroku-campus-suppliers.herokuapp.com/api/orders",
      error: null,
      errored: false

    };

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