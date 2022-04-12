<template>
  <h1>Liste des Clients</h1>
  <delete-element :data="customers.data" @removeId="deleteApi"/>
  <table>
    <thead>
      <tr>
        <th>Prénom</th>
        <th>Nom</th>
        <th>Email</th>
        <th>Code Postal</th>
        <th>Ville</th>
        <th>Adresse</th>
        <th>Numéro de téléphone</th>
      </tr>
    </thead>

    <tbody>

      <Customer v-for="customer in customers.data" :key="customer.id"
                :first-name="customer.firstName"
                :last-name="customer.lastName"
                :email="customer.email"
                :code-postal="customer.codePostal"
                :city="customer.city"
                :address="customer.address"
                :phone-number="customer.phoneNumber"
      />

    </tbody>
  </table>
  <Pagination :links="customers.links" @url="changePage"/>


</template>

<script>
import Pagination from "./Pagination";
import Customer from "../views/Customer";
import axios from "axios";
import DeleteElement from "@/components/DeleteElement";
export default {
  name: "CustomersList",
  components: {DeleteElement, Customer, Pagination},
  methods: {
    changePage(e){
      this.getApi(e)
    },
    getApi(url) {
      axios
          .get(url)
          .then(response => {
            this.customers = response.data;
          })
          .catch(error => {
                this.error = error;
                this.errored = true;
              }
          )
    },
    removeSuppliersById(id){
      const data = this.customers.data.filter((item)=> item.id !== id)
      this.customers = {...this.customers, data: data}

    },
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

    }

  },

  data() {
    return{

      customers: [],
      url: "https://heroku-campus-suppliers.herokuapp.com/api/customers",
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