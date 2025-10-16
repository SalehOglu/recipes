<script setup>
const scrollToRecipes = () => {
  const recipeSection = document.getElementById("recipesContainer");
  if (recipeSection) {
    recipeSection.scrollIntoView({
      behavior: "smooth",
    });
  }
};

const { data, error } = await useFetch("https://dummyjson.com/recipes?limit=6");

useSeoMeta({
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
    <section class="banner w-full">
      <div
        class="container flex items-center h-full py-4 bg-black/50 text-white text-2xl font-bold"
      >
        <div class="flex-1 text-center lg:text-left max-w-3xl">
          <h1 class="text-4xl lg:text-6xl font-extrabold mb-10 text-balance">
            Bring Out Your Inner Chef Today!
          </h1>
          <p class="text-xl lg:text-2xl mb-8 text-balance">
            Discover the simplest way to cook.
          </p>
          <button
            @click="scrollToRecipes"
            class="px-4 py-2 text-white self-start bg-jungle-green rounded-md text-lg cursor-pointer"
          >
            Browse Recipes
          </button>
        </div>
      </div>
    </section>
    <section class="py-20 container" id="recipesContainer">
      <h2 class="text-3xl lg:text-5xl mb-2">Discover, Create, Share</h2>
      <p class="text-lg lg:text-xl mb-4">Check out our most popular recipes!</p>

      <div class="mb-8 text-right">
        <NuxtLink
          to="/recipes"
          class="px-4 py-2 bg-gray-300 hover:bg-black hover:text-white rounded-md text-lg cursor-pointer"
        >
          View All Recipes
        </NuxtLink>
      </div>

      <RecipesMenu :recipes="data?.recipes" :error="error" />
    </section>
  </main>
</template>

<style lang="scss">
.banner {
  background: url("/banner.png") no-repeat center;
  background-size: cover;
  height: 580px;
}
</style>
