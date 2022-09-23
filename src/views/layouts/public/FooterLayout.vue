<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
});
</script>

<template>
  <a-layout-footer style="text-align: center">
    Blogs ©{{ year }} Created by Chacha Nurholis
  </a-layout-footer>
</template>
