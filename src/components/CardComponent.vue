<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    urlImage: {
      type: String,
      required: false,
    },
    author: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <div
    :style="{
      padding: '5px',
      margin: 'auto',
    }"
  >
    <a-card hoverable :style="{ width: '300px' }">
      <template #cover>
        <img :alt="title" :src="urlImage" />
      </template>
      <a-card-meta :title="title" :description="description">
        <template #avatar>
          <a-avatar src="https://joeschmoe.io/api/v1/random" />
        </template>
      </a-card-meta>
    </a-card>
  </div>
</template>
