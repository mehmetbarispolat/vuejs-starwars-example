<template>
  <div class="detail">
    <div class="row" v-for="(detail, index) in detailList" :key="index">
      <span>{{ detail.text }} </span>
      <h4>{{ starship[detail.key] }}</h4>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "StarShipDetail",
  data() {
    return {
      starship: {},
      detailList: [
        { key: "passengers", text: "Passengers:" },
        { key: "max_atmosphering_speed", text: "Max Atmosphering Speed:" },
        { key: "manufacturer", text: "Manufacturer: " },
        { key: "crew", text: "Crew: " },
        { key: "cargo_capacity", text: "Cargo Capacity: " },
      ],
    };
  },
  mounted() {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      let id = this.$route.params.id;
      axios.get(`https://swapi.dev/api/starships/${id}/`).then((response) => {
        this.starship = response.data;
      });
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail {
  margin-left: 40%;
}
h4 {
  font-size: 18px;
  font-weight: 600;
  margin-left: 3px;
  padding-top: 3px;
}
span {
  font-size: 20px;
  color: black;
  font-weight: 500;
}
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 45px;
}
</style>
