<script setup>
defineProps({
  recipes: {
    type: Array,
  },
  error: {
    type: Object,
  },
});
</script>

<template>
  <div
    v-if="recipes && !error"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8"
  >
    <div
      v-for="recipe in recipes"
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
            <Icon name="mdi:clock-time-eight-outline" style="color: #f79f1a" />
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
</template>
