<script lang="ts">
import { defineComponent, ref } from "vue";

import { PieChartOutlined } from "@ant-design/icons-vue";
import { RouterLink } from "vue-router";

import { useMenuStore } from "@/stores/menu";

export default defineComponent({
  name: "SiderLayout",
  components: {
    PieChartOutlined,
    RouterLink,
  },
  data() {
    return {
      collapsed: ref<boolean>(false),
      selectedKeys: ref<string[]>(["1"]),
      menus: useMenuStore(),
    };
  },
  methods: {
    // code ...
  },
});
</script>

<style>
.logo {
  color: white;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>

<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <div class="logo">
      <img
        v-if="collapsed"
        src="@/assets/logo.svg"
        height="25"
        alt="apps logo"
      />
      <div v-else>Blogs</div>
    </div>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <a-menu-item
        v-for="menu in menus?.exampleMenu"
        :key="menu?.key"
        :title="menu?.name"
      >
        <pie-chart-outlined />
        <span>
          <router-link :to="menu?.link" :style="{ color: 'white' }">
            {{ menu?.name }}
          </router-link>
        </span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
