<template>
  <div>
    <div class="nav-bar">
      <img alt="Vue logo" src="../assets/logo.png" width="15%" /> 
    </div>

    <div class="btn">
      <img id="prev-btn" @click="clickedPreviousButton" v-show="prev" src="../assets/right-arrow.svg" width="5%" height="5%">
      <img id="next-btn" @click="clickedNextButton" v-show="next" src="../assets/right-arrow.svg" width="5%" height="5%">
    </div>
    <input v-model="searchVal" />
    <StarShipList :starShipsList="starShips" />
    <div class="error" v-if="starShips.length <= 0 || statusCode === 204">
      <p>
        No data available
      </p>
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
      next: '',
      prev: ''
    };
  },
  mounted() {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      axios.get("https://swapi.dev/api/starships/").then((response) => {
        this.starShips = response.data.results;
        this.statusCode = response.status;
        this.prev = response.data.previous;
        this.next = response.data.next;
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
  methods: {
    clickedPreviousButton: function() {
      this.loading = true;
      axios
        .get(this.prev)
        .then((response) => {
          this.starShips = response.data.results;
          this.statusCode = response.status;
          this.prev = response.data.previous;
          this.next = response.data.next;
        })
        .then(() => {
          this.loading = false;
        });
    },
    clickedNextButton: function() {
      this.loading = true;
      axios
        .get(this.next)
        .then((response) => {
          this.starShips = response.data.results;
          this.statusCode = response.status;
          this.prev = response.data.previous;
          this.next = response.data.next;
        })
        .then(() => {
          this.loading = false;
        });

    }
  }
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
    border: 2px solid #FFE300;
  }

  .error {
    color: red;
  }

  .btn {
    display: inline;
  }

  #prev-btn {
    position: absolute;
    left: 0;
    border: 1px solid black;
    transform: rotate(180deg);
  }

  #next-btn {
    position: absolute;
    right: 0;
    border: 1px solid black;
  }
</style>
