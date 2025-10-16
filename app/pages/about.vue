<script setup></script>

<template>
  <Head>
    <Title>About | Sufra App</Title>
  </Head>
  <main>
    <section class="container py-20">
      <div class="mb-12 text-center">
        <NuxtImg
          class="inline-block"
          width="640px"
          format="webp"
          densities="x1"
          src="/food.jpg"
        />
      </div>

      <h1 class="text-6xl text-center font-extrabold mb-6 text-balance">
        Sufrah App
      </h1>
      <div class="text-xl font-extrabold max-w-screen-lg m-auto">
        <p class="mb-6 text-center">
          Sufrah is a recipe application powered by the DummyJSON API, designed
          to help you explore and discover a variety of delicious dishes with
          ease. Whether you’re looking for quick meal ideas or inspiration to
          try something new, Sufrah makes cooking accessible and enjoyable.
        </p>
        <p class="mb-6 text-center">
          Our app fetches fresh recipes dynamically, giving you a seamless and
          up-to-date cooking experience. Dive in and start mastering the kitchen
          today!
        </p>
      </div>
    </section>
  </main>
</template>
