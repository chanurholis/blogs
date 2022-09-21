<script lang="ts">
import { defineComponent } from "vue";

import SiderLayout from "@/views/layouts/SiderLayout.vue";
import FooterLayout from "@/views/layouts/FooterLayout.vue";
import BreadcrumbComponent from "@/components/BreadcrumbComponent.vue";

export default defineComponent({
  name: "MainLayout",
  props: {
    breadcrumb: Array,
  },
  components: {
    SiderLayout,
    FooterLayout,
    BreadcrumbComponent,
  },
  data() {
    return {
      // code ...
    };
  },
});
</script>

<template>
  <a-layout style="min-height: 100vh">
    <sider-layout />
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <breadcrumb-component :menus="breadcrumb" />
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <slot />
        </div>
      </a-layout-content>
      <footer-layout />
    </a-layout>
  </a-layout>
</template>
