<script setup>
// const { data, error } = await useAsyncData("recipes", () =>
//   $fetch("https://dummyjson.com/recipes?limit=12")
// );

const scrollToRecipes = () => {
  const recipeSection = document.getElementById("recipesContainer");
  if (recipeSection) {
    recipeSection.scrollIntoView({
      behavior: "smooth",
    });
  }
};
const { data, error } = await useFetch(
  "https://dummyjson.com/recipes?limit=20"
);

useSeoMeta({
  title: "Sufrah App",
  description:
    "Sufrah is a recipe app that helps you discover and cook delicious meals with ease—perfect for home cooks of all levels.",
  ogTitle: "Sufrah App",
  ogDescription:
    "Sufrah is a recipe app that helps you discover and cook delicious meals with ease—perfect for home cooks of all levels.",
  ogImage: "/banner.png",
  ogUrl: "https://sufrah.netlify.app/",
  twitterTitle: "Sufrah App",
  twitterDescription:
    "Sufrah is a recipe app that helps you discover and cook delicious meals with ease—perfect for home cooks of all levels.",
  twitterImage: "/banner.png",
  twitterCard: "summary",
});
</script>
<template>
  <main>
    <section class="bg-[#f1f1f1]">
      <div
        class="container flex flex-col lg:flex-row items-center py-10 gap-10"
      >
        <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
          <h1 class="text-4xl lg:text-6xl font-extrabold mb-2 text-balance">
            Own the Kitchen with Confidence
          </h1>
          <h3 class="text-3xl mb-6">Bring Out Your Inner Chef Today!</h3>
          <p class="text-xl lg:text-2xl mb-8 text-balance">
            Discover recipes helping you to find the easiest way to cook.
          </p>
          <button
            @click="scrollToRecipes"
            class="px-4 py-2 text-white self-start bg-dodgeroll-gold rounded-md text-lg cursor-pointer"
          >
            Browse Recipes
          </button>
        </div>
        <div class="flex-1 order-1 lg:order-2">
          <NuxtImg
            src="/banner.png"
            sizes="xs:100vw sm:50vw lg:667"
            format="webp"
            densities="x1"
          />
        </div>
      </div>
    </section>
    <section class="py-20 container" id="recipesContainer">
      <h2 class="text-3xl lg:text-5xl mb-2">Discover, Create, Share</h2>
      <p class="text-lg lg:text-xl mb-8">Check out our most popular recipes!</p>
      <div
        v-if="data?.recipes && !error"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8"
      >
        <div
          v-for="recipe in data.recipes"
          :key="recipe.id"
          class="flex flex-col shadow rounded-md"
        >
          <NuxtLink :to="`/recipes/${recipe.id}`">
            <NuxtImg
              :src="recipe.image"
              sizes="xs:100vw sm:50vw md: lg:400"
              format="webp"
              densities="x1"
              class="rounded-t-md"
              :alt="recipe.name"
            />
          </NuxtLink>

          <div class="flex flex-col py-6 px-4 flex-1">
            <p class="text-xl lg:text-2xl font-semibold mb-2">
              {{ recipe.name }}
            </p>
            <div
              class="font-normal w-full bg-white/80 flex gap-8 text-lg lg:text-xl mb-4 mt-auto"
            >
              <div class="flex items-center gap-1">
                <Icon
                  name="mdi:clock-time-eight-outline"
                  style="color: #f79f1a"
                />
                <span>{{ recipe.cookTimeMinutes }}</span>
              </div>
              <div class="flex items-center gap-1">
                <Icon name="mdi:fire" style="color: #f79f1a" />
                <span>{{ recipe.caloriesPerServing }}</span>
              </div>
              <div class="flex items-center gap-1">
                <Icon name="mdi:star" style="color: #f79f1a" />
                <span>{{ recipe.rating }} ({{ recipe.reviewCount }})</span>
              </div>
            </div>
            <NuxtLink
              :to="`/recipes/${recipe.id}`"
              class="px-4 py-2 text-white self-start bg-dodgeroll-gold rounded-md text-base lg:text-lg cursor-pointer"
            >
              View Recipe
            </NuxtLink>
          </div>
        </div>
      </div>
      <div v-else class="text-xl">
        Oops, something went wrong. Please try again later.
      </div>
    </section>
  </main>
</template>

<style></style>
