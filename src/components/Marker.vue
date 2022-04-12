<template>

  {{ latitude }},{{ longitude }}

</template>

<script>


export default {
  name: 'suppliers',
  components: '',
  props: ['supplier', 'id',
    'name',
    'date',
    'status',
    'latitude',
    'longitude',
  ],

  computed: {
  }
}
</script>

<style scoped>
.dispo{
  color:green;
}
.rupture{
  color: red;
}
</style>