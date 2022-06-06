<script>
import AppBanner from "../components/shared/AppBanner.vue";
import Button from "../components/reusable/Button.vue";
import feather from "feather-icons";

export default {
  scrollToTop: true,
  components: { AppBanner, Button },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div class="container mx-auto">
    <AppBanner />

    <ProjectsGrid />

  </div>
</template>

<style scoped></style>
