<template>
  <tr>
    <td>{{firstName}}</td>
    <td>{{lastName}}</td>
    <td>{{email}}</td>
    <td>{{codePostal}}</td>
    <td>{{city}}</td>
    <td>{{address}}</td>
    <td>{{phoneNumber}}</td>
  </tr>
</template>

<script>
export default {
  name: "Customer",
  props: [
    'firstName',
    'lastName',
    'email',
    'codePostal',
    'city',
    'address',
    'phoneNumber'
  ],

}
</script>

<style scoped>
td{
  border: 1px solid #333;

}

</style>