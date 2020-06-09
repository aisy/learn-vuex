<template>
  <div>
    <div>{{counter}}</div>
    <button @click="increment">tambah</button>
    <button @click="decrement">kurang</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      // this.$store.commit(increment);
      this.$store.commit("login/increment");
      // this.$store.dispatch("login/doIncrement");
    },
    decrement() {
      this.$store.commit("login/decrement");
      // this.$store.dispatch("login/doDecrement")
    }
  },
  computed: {
    counter() {
      return this.$store.getters["login/getCount"];
    }
  }
};
</script>