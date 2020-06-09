<template>
  <div class="home">
    <!-- <p>aisy</p> -->
    <CounterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import CounterComponent from "../components/CounterComponent";

export default {
  name: "Home",
  components: {
    CounterComponent
  }
};
</script>
