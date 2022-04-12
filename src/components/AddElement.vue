<template>
  <button type="button" class="btn btn-dark btn-outline-light d-table my-5 mx-auto" data-bs-toggle="modal" data-bs-target="#AddForm">
    Add
  </button>

  <!-- Modal Form -->
  <div class="modal fade" id="AddForm" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">

        <form v-show="suppliers" action="">
          <div class="modal-header">
            <h5 class="modal-title">Add supplier :</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="Id">Id<span class="text-danger"></span></label>
              <input type="number" name="Id" class="form-control" id="Id" placeholder="Enter ID" v-model="addSupplier.id">
            </div>

            <div class="mb-3">
              <label for="Name">Name<span class="text-danger"></span></label>
              <input type="text" name="Name" class="form-control" id="Name" placeholder="Enter Name" v-model="addSupplier.name">
            </div>

            <div class="mb-3">
              <label for="Stock"></label>
              <input type="checkbox" name="Stock" id="Stock" v-model="addSupplier.status">

              <span v-if="addSupplier.status == true" class="text-success">
                Disponible en stock
              </span>

              <span v-else class="text-danger">
                Rupture de stock
              </span>
            </div>

          </div>
          <div class="modal-footer pt-4">
            <button type="button" class="btn btn-success mx-auto w-100" data-bs-dismiss="modal" v-on:click="$emit('addSupplier', addSupplier)">Add</button>
          </div>
        </form>

        <form v-show="resellers" action="">
          <div class="modal-header">
            <h5 class="modal-title">Add reseller :</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="Id1">Id<span class="text-danger"></span></label>
              <input type="number" name="Id" class="form-control" id="Id1" placeholder="Enter ID" v-model="addReseller.id">
            </div>

            <div class="mb-3">
              <label for="Name1">Name<span class="text-danger"></span></label>
              <input type="text" name="Name" class="form-control" id="Name1" placeholder="Enter Name" v-model="addReseller.name">
            </div>

            <div class="mb-3">
              <label for="Description">Description<span class="text-danger"></span></label>
              <input type="text" name="Stock" class="form-control" id="Description" placeholder="Enter a description" v-model="addReseller.description">
            </div>

            <div class="mb-3">
              <label>Id's resellers<span class="text-danger">*</span></label>
              <select v-model="addReseller.supplierId">
                <option v-for="{id,name} in arraySuppliers" :key="id" :value="id">{{name}}</option>
              </select>
            </div>


          </div>
          <div class="modal-footer pt-4">
            <button type="button" class="btn btn-success mx-auto w-100" data-bs-dismiss="modal" @click="$emit('addReseller', addReseller)">Add</button>
          </div>


        </form>

      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "AddElement",
  props: ["suppliers","resellers"],
  emits: ["addSupplier", "addReseller"],
  data(){
    return{
      addSupplier: {
        id: null,
        name: null,
        status: false,
        date: new Date(),
      },
      addReseller: {
        id: null,
        name: null,
        supplierId: null,
        description: null
      },
      arraySuppliers: []


    }

  },
  methods: {
    getApi() {
      axios
          .get("https://heroku-campus-suppliers.herokuapp.com/api/suppliers")
          .then(response => {
            return this.arraySuppliers = response.data.data;
          })
          .catch(error => {
                this.error = error;
                this.errored = true;
              }
          )
    },
  },
  created() {
    this.getApi();
  },

}
</script>

<style scoped>

</style>