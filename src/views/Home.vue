<template>
  <div>
    <input v-model="searchVal" />
    <StarShipList :starShipsList="starShips" />
    <div class="error" v-if="starShips.length <= 0 || statusCode === 204">
      No data available
    </div>
  </div>
</template>

<script>
import StarShipList from "../components/StarShipList";
import axios from "axios";

export default {
  name: "Home",
  components: {
    StarShipList,
  },
  data() {
    return {
      starShips: [],
      searchVal: "",
      statusCode: 0,
    };
  },
  mounted() {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      axios.get("https://swapi.dev/api/starships/").then((response) => {
        this.starShips = response.data.results;
        this.statusCode = response.status;
      });
    });
  },
  watch: {
    searchVal: function (val) {
      axios
        .get(`https://swapi.dev/api/starships/?search=${val}`)
        .then((response) => {
          this.starShips = response.data.results;
        });
    },
  },
};
</script>

<style scoped>
input {
  border: none;
  width: 300px;
  height: 32px;
  border-radius: 16px;
  margin-bottom: 60px;
  background-color: #FFE300;
  margin-top: 24px;
  padding-left: 12px;
  color: #000000;
}
input:focus {
  outline: none;
  color: #FFE300;
  background-color: #000000;
}
.error {
  color: red;
}
</style>
