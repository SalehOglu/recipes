<script setup></script>
<template>
  <div>
    <BaseNavbar />
    <slot></slot>
    <footer class="bg-gray-100 text-center py-4 text-sm text-white">
      &copy; {{ new Date().getFullYear() }}. All rights reserved.
    </footer>
  </div>
</template>

<style scoped lang="scss">
footer {
  background: #333;
}
</style>
