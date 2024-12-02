<script setup>
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <NuxtLink class="navbar-brand" to="/">Navbar</NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NuxtLink class="nav-link" aria-current="page"  to="/">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/room">Room</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main class="container">
      <div>
        <slot />
      </div>
    </main>
  </div>
</template>

<style scoped></style>
