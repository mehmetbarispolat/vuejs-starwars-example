<template>
  <div class="list-wrapper">
    <div v-for="(ship, index) in starShipsList" :key="index">
      <StarShipCard :starship="ship" />
    </div>
  </div>
</template>

<script>
import StarShipCard from "./StarShipCard";

export default {
  name: "StarShipList",
  components: { StarShipCard },
  props: {
    starShipsList: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-wrapper {
  display: grid;
  grid-template-columns: auto auto;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>
