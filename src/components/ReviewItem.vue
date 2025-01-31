<script setup lang="ts">
import { ref } from "vue";
import type { ReviewItemProps } from "../interfaces/interfaces";

defineProps<ReviewItemProps>();
const isActive = ref(false);

const toggleActive = () => {
  isActive.value = !isActive.value;
};
</script>

<template>
  <li :class="['item', { active: isActive }]">
    <div class="wrapper">
      <div class="wrapperSub">
        <img src="../assets/img/google.png" alt="google" class="google" />
        <p class="title">
          {{ $t("reviewsTitle") }}
        </p>
      </div>
      <div class="main">
        <div class="subrating">
          <p class="rating">{{ review.rating }}</p>
          <div class="stars">
            <vue3-star-ratings
              v-model="review.rating"
              starColor="#FCC141"
              inactiveColor="rgba(252, 193, 65, 0.3)"
              starSize="30"
            />
          </div>
        </div>
        <p class="reviews">{{ review.numberOfReviews }} {{ $t("reviews") }}</p>
      </div>
    </div>
    <div class="buttons">
      <a class="watch" :href="review.link">
        {{ $t("watch") }}
      </a>
      <a class="write" @click="toggleActive">
        {{ $t("write") }}
      </a>
    </div>
  </li>
</template>
<style scoped>
.item {
  padding: 30px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.05);
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.item:last-child {
  margin-bottom: 0;
}
.watch {
  color: #394155;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  line-height: 22px;
  border-radius: 8px;
  border: 1px solid #aacedb;
  background: linear-gradient(90deg, #e6f7f5 0%, #f8fcfc 100%);
  padding: 11px 20px;
  width: 100%;
  height: 44px;
  margin-bottom: 10px;
  text-decoration: none;
}
.write {
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  line-height: 22px;
  border-radius: 8px;
  background: linear-gradient(91deg, #3cb9a0 0.57%, #1786ac 99.43%);
  padding: 11px 20px;
  width: 100%;
  border: none;
  height: 44px;
}
.watch:hover {
  background: #36a8a0;
  color: #fff;
}
.write:hover {
  background: #36a8a0;
  color: #fff;
}
.watch:active {
  background: #36a8a0;
  color: #fff;
}
.write:active {
  background: #36a8a0;
  color: #fff;
}
.google {
  width: 40px;
  height: 40px;
}
.title {
  color: #394155;
  font-size: 18px;
  line-height: 26px;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 20px;
}
.wrapper {
  margin-bottom: 20px;
}
.rating {
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  color: #394155;
  font-family: "Greenwich";
  margin: 0;
}
.subrating {
  display: flex;
  width: 231px;
  justify-content: space-between;
  align-items: center;
}
.stars {
  width: 174px;
}
.reviews {
  color: #798595;
  font-family: "Formular";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin-top: 10px;
  margin-bottom: 0;
}
.wrapperSub {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.item.active {
  background-color: rgb(199, 209, 247);
  transition: background-color 0.3s ease-in-out;
}
@media (min-width: 992px) {
  .watch {
    width: 132px;
    margin-bottom: 0;
  }
  .write {
    width: 109px;
  }
  .wrapper {
    width: 63.7%;
    margin-bottom: 0;
  }
  .item {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .buttons {
    width: 251px;
    display: flex;
    justify-content: space-between;
  }
  .reviews {
    margin-top: 0;
  }
  .main {
    display: flex;
    align-items: center;
  }
  .wrapperSub {
    margin-bottom: 10px;
  }
}
@media (min-width: 1200px) {
  .wrapper {
    width: 787px;
  }
}
@media (min-width: 1366px) {
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .wrapperSub {
    margin-bottom: 0;
    width: 388px;
  }
  .main {
    width: 349px;
  }
  .title {
    font-size: 20px;
    line-height: 30px;
  }
}
@media (min-width: 1367px) {
  .wrapper {
    width: 797px;
  }
}
</style>
