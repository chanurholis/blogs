<script lang="ts">
import { defineComponent } from "vue";

import HeaderLayout from "@/views/layouts/public/HeaderLayout.vue";
import FooterLayout from "@/views/layouts/public/FooterLayout.vue";
import BreadcrumbComponent from "@/components/BreadcrumbComponent.vue";

export default defineComponent({
  components: {
    HeaderLayout,
    FooterLayout,
    BreadcrumbComponent,
  },
});
</script>

<style>
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}

#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme="dark"] .site-layout-content {
  background: #141414;
}
</style>

<template>
  <a-layout style="min-height: 100vh">
    <header-layout />
    <a-layout-content style="padding: 0 50px">
      <breadcrumb-component :menus="['Home']" />
      <div
        :style="{
          background: '#fff',
          minHeight: '280px',
          padding: '50px',
        }"
      >
        <slot />
      </div>
    </a-layout-content>
    <footer-layout />
  </a-layout>
</template>
