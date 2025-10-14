<script setup></script>
<template>
  <header class="py-4 border-b">
    <nav class="flex container items-center">
      <NuxtLink to="/" class="flex gap-1 items-center">
        <NuxtImg width="50px" format="webp" densities="x1" src="/logo.png" />
        <span class="text-3xl font-bold">Surfah</span>
      </NuxtLink>
      <ul
        class="flex flex-col sm:flex-row gap-0 sm:gap-5 ml-auto text-lg font-bold capitalize"
      >
        <li class="hover:bg-dodgeroll-gold hover:text-white hover:rounded-md">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li class="hover:bg-dodgeroll-gold hover:text-white hover:rounded-md">
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
