<script>
import { mapState } from "vuex";

export default {
  data: () => {
    return {
      // @todo
    };
  },
  computed: {
    ...mapState(["aboutMe"]),
  },
};
</script>

<template>
  <div
    class="
        pt-20
        sm:pt-30
        pb-8
        mt-20
        border-t-2 border-primary-light
        dark:border-secondary-dark
      "
  >
    <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <!-- About profile image -->
      <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
        <img src="~/static/profile.jpeg" class="rounded-lg w-96" alt="" />
      </div>

      <!-- About details -->
      <div class="w-full sm:w-3/4 text-left">
        <p
          v-for="bio in aboutMe"
          :key="bio.id"
          class="
            font-general-regular
            mb-4
            text-ternary-dark
            dark:text-ternary-light
            text-lg
          "
        >
          {{ bio.bio }}
        </p>
      </div>
    </div>
  </div>
</template>
