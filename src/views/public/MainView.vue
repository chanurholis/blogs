<script lang="ts">
import { defineComponent, ref } from "vue";

import MainLayout from "@/views/layouts/public/MainLayout.vue";
import { useLandingPageMenusStore } from "@/stores/public/LandingPageMenusStore";
import CardComponent from "@/components/CardComponent.vue";
import NewsService from "@/services/ArticleService";
import imageNotFound from "@/assets/image-not-found.png";

export default defineComponent({
  components: {
    MainLayout,
    CardComponent,
  },
  data() {
    return {
      menus: useLandingPageMenusStore(),
      articles: ref(),
      imageNotFfound: imageNotFound,
    };
  },
  methods: {
    async getArticles() {
      const response = await NewsService.getTopHeadlinesByCountry("id");
      this.articles = response?.data?.articles;
      return this.articles;
    },
  },
  mounted() {
    this.getArticles();
  },
});
</script>

<template>
  <main-layout>
    <div :style="{ padding: '10px' }">
      <a-row>
        <card-component
          v-for="(value, index) in articles"
          v-bind:key="index"
          :title="value?.title"
          :url-image="value?.urlToImage || imageNotFfound"
          :author="value?.author"
          :description="value?.description"
          :url="value?.url"
        />
      </a-row>
    </div>
  </main-layout>
</template>
