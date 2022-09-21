<script setup lang="ts">
import MainLayout from "@/views/layouts/MainLayout.vue";
import { useMenuStore } from "@/stores/menu";

const menus = useMenuStore();
</script>

<template>
  <main-layout :breadcrumb="['Admin', 'Dashboard']">
    <h1>Dashboard View</h1>
    <ul>
      <li v-for="menu in menus?.exampleMenu" :key="menu?.key">
        {{ menu.name }}
      </li>
    </ul>
  </main-layout>
</template>
