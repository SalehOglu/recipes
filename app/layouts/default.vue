<script setup>
const year = new Date().getFullYear();
</script>
<template>
  <div>
    <BaseNavbar />
    <slot></slot>
    <footer class="bg-gray-100 text-center py-4 text-sm text-white">
      &copy; {{ year }}. All rights reserved.
    </footer>
  </div>
</template>

<style scoped lang="scss">
footer {
  background: #333;
}
</style>
