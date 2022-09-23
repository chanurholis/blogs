<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    // code ...
  },
  methods: {
    // code ...
  },
  props: {
    menus: {
      type: Array,
      required: true,
    },
  },
});
</script>

<template>
  <a-breadcrumb style="margin: 16px 0">
    <a-breadcrumb-item v-for="(value, index) in menus" :key="index">{{
      value
    }}</a-breadcrumb-item>
  </a-breadcrumb>
</template>
