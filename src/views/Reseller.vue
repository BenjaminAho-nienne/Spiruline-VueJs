<template>
  <tr>
    <td>{{name}}</td>
    <td>{{description}}</td>
  </tr>
</template>

<script>
export default {
  name: "Resellers",

  props: [
    'name',
    'description'
  ],

}
</script>

<style scoped>

td{
  border: 1px solid #333;

}



</style>