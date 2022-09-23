<script lang="ts">
import { defineComponent } from "vue";

import SiderLayout from "@/views/layouts/admin/SiderLayout.vue";
import FooterLayout from "@/views/layouts/admin/FooterLayout.vue";
import BreadcrumbComponent from "@/components/BreadcrumbComponent.vue";

export default defineComponent({
  name: "MainLayout",
  props: {
    breadcrumb: {
      type: Array,
      required: true,
    },
  },
  components: {
    SiderLayout,
    FooterLayout,
    BreadcrumbComponent,
  },
});
</script>

<style>
.ant-layout-header {
  padding: 0px 24px !important;
}
</style>

<template>
  <a-layout style="min-height: 100vh">
    <sider-layout />
    <a-layout>
      <a-layout-header :style="{ background: 'white' }">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, id.
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <breadcrumb-component :menus="breadcrumb" />
        <div :style="{ padding: '24px', background: '#fff', minHeight: '50%' }">
          <slot />
        </div>
      </a-layout-content>
      <footer-layout />
    </a-layout>
  </a-layout>
</template>
