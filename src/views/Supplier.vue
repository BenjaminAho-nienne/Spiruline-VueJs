<template>
  <tr>

    <td>{{name}}</td>
    <td>
      <span v-if="status" class="green">En stock</span>
      <span v-else class="red">Rupture de stock</span>
    </td>
    <td>{{formatDate(checkedAt)}}</td>

  </tr>

</template>

<script>
import { format } from 'timeago.js'
export default {
  name: "Supplier",

  props: [
      'name',
      'status',
      'checkedAt',
      'supplier'
  ],
  methods: {

    formatDate(date){
      return format(date)
    }
  }
}
</script>

<style scoped>

td{
  border: 1px solid #333;

}
.red{
  color: red;
}
.green{
  color: green;
}
</style>