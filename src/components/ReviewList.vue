<script setup lang="ts">
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useLoaderState } from "../store/isloading";
import { getReviewsInfo } from "../api/api";
import ReviewItem from "../components/ReviewItem.vue";
import type { Review } from "../interfaces/interfaces";

const reviewList = ref<Review[]>([]);
const isLoadingStore = useLoaderState();
const { state: isLoading } = storeToRefs(isLoadingStore);

onMounted(async () => {
  isLoadingStore.changeStateTrue();
  try {
    const response = await getReviewsInfo();
    reviewList.value = response;
  } catch (error) {
    console.error(error);
  } finally {
    isLoadingStore.changeStateFalse();
  }
});
</script>
<template>
  <div>
    <p v-if="isLoading">{{ $t("isLoading") }}</p>
    <ul v-else class="list">
      <ReviewItem
        v-for="review in reviewList"
        :key="review.id"
        :review="review"
      />
    </ul>
  </div>
</template>
<style scoped>
.list {
  padding: 0;
  list-style-type: none;
}
</style>
