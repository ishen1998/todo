<template>
  <div class="box">
    <Header></Header>
    <Section></Section>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "./todo/header.vue";
import Footer from "./todo/footer.vue";
import Section from "./todo/section.vue";

export default {
  components: {
    Header,
    Footer,
    Section
  }
};
</script>

