<script setup></script>
<template>
  <header class="py-3 border-b">
    <nav class="flex container items-center">
      <NuxtLink to="/" class="flex gap-1 items-center">
        <NuxtImg width="50px" format="webp" densities="x1" src="/logo.png" />
        <span class="text-3xl font-bold">Sufrah</span>
      </NuxtLink>
      <ul
        class="flex flex-col sm:flex-row gap-0 sm:gap-5 ml-auto text-lg font-bold capitalize"
      >
        <li class="hover:bg-jungle-green hover:text-white hover:rounded-md">
          <NuxtLink to="/recipes">Recipes</NuxtLink>
        </li>
        <li class="hover:bg-jungle-green hover:text-white hover:rounded-md">
          <NuxtLink to="/about">About</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style scoped lang="scss">
li {
  padding: 5px 12px;
}
</style>
