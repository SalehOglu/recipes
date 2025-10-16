<script setup>
const { data, error } = await useFetch("https://dummyjson.com/recipes");

useSeoMeta({
  ogTitle: "All Recipes | Sufrah App",
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
  <section class="py-20 container" id="recipesContainer">
    <div class="mb-10">
      <h2 class="text-3xl lg:text-5xl mb-2">All Recipes</h2>
      <p class="text-lg lg:text-xl mb-4">
        Explore our wide variety of recipes!
      </p>
    </div>

    <RecipesMenu :recipes="data?.recipes" :error="error" />
  </section>
</template>
