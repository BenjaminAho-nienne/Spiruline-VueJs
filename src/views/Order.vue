<template>
  <tr>
    <td>{{number}}</td>
    <td>{{date}}</td>
    <td>{{price}}€</td>
  </tr>
</template>

<script>
export default {
  name: "Order",
  props: [
    'number',
    'date',
    'price'
  ],

}
</script>

<style scoped>

td{
  border: 1px solid #333;

}

</style>