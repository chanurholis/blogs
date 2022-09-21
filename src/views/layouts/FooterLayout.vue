<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      data: new Date().getFullYear(),
    };
  },
});
</script>

<template>
  <a-layout-footer style="text-align: center">
    Blogs ©{{ data }} Created by Chacha Nurholis
  </a-layout-footer>
</template>
