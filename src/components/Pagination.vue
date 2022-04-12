<template>
  <nav class="pagination">
    <div  v-for="link in links" :key="link.label">
      <button v-on:click="$emit('url',link.url)" v-html="link.label"></button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Pagination",
  props:["links"],
}
</script>

<style>

.pagination{
  display: flex;
  justify-content: center;
  gap: 0.3em;
  margin-top: 0.5em;

}

</style>
