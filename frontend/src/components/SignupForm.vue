<template>
    <div class="flex items-center font-marcellus justify-center min-h-screen relative bg-bg-subtle bg-cover bg-no-repeat bg-opacity-0">
      <!-- Logo Section -->
      <div class="absolute top-4 left-4 flex items-center space-x-2">
        <img
          src="@/assets/follicle_logo-nobg.png"
          alt="Placeholder logo"
          class="w-12 h-12 object-contain"
        />
        <span class="max-[468px]:hidden text-main font-marcellus">Follicle Sprout</span>
      </div>
  
      <!-- Container -->
      <div class="flex flex-col md:flex-row items-center rounded-lg overflow-hidden w-full max-w-4xl px-3">
        <!-- Left Banner -->
        <div
          class="lg:flex flex-col items-center py-20 justify-center bg-bg-golden_2 rounded-lg lg:h-[550px] w-full"
        >
          <h1 class="text-3xl font-bold text-white text-center">Revitalize Your Crown With Follicle Sprout</h1>
          <img
            src="@/assets/Golden_woman.png"
            class="max-[480px]:hidden w-[12rem] h-[12rem] mt-6 rounded-lg mx-auto"
            alt="A silhouette of a woman with a golden crown"
          />
          <div class="text-center text-white px-8">
            <p class="text-center font-handwritting py-4">Because it’s not just hair; it’s your crown, your pride</p>
          </div>
          <p class="mt-6 text-center text-gray-200 max-[468px]:block hidden">
            Don't have an account?
            <a
              href="/login"
              class="text-main hover:underline hover:text-white transition"
            >
              Sign in
            </a>
          </p>
        </div>
  
        <!-- Signup Form -->
        <div class="w-full md:w-1/2 p-8 bg-bg-golden rounded-lg lg:h-[550px]">
          <h2 class="text-3xl font-bold mb-6 text-center text-main">Create an account</h2>
          <form class="space-y-4">
            <div>
              <label class="block text-gray-700">Username</label>
              <input
                type="text"
                class="w-full px-4 py-2 border rounded bg-slate-100 focus:outline-none focus:ring focus:ring-main"
                placeholder="Choose a username"
              />
            </div>
            <div>
              <label class="block text-gray-700">Email</label>
              <input
                type="email"
                class="w-full px-4 py-2 border rounded bg-slate-100 focus:outline-none focus:ring focus:ring-main"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label class="block text-gray-700">Password</label>
              <input
                type="password"
                class="w-full px-4 py-2 border rounded bg-slate-100 focus:outline-none focus:ring focus:ring-main"
                placeholder="Create a password"
              />
            </div>
            <button
              class="w-full px-4 py-2 bg-main text-white font-bold rounded hover:bg-white hover:text-main border-main border transition hover:scale-105"
              type="submit"
            >
              Register
            </button>
          </form>
  
          <!-- Divider -->
          <div class="flex items-center my-4">
            <div class="w-full h-[1px] bg-main"></div>
            <span class="px-2 text-gray-500 text-sm">OR</span>
            <div class="w-full h-[1px] bg-main"></div>
          </div>
  
          <!-- Social Signup Links -->
          <h6 class="text-gray-500 text-center mb-4">Register using</h6>
          <div class="flex justify-center items-center space-x-4">
            <a href="#" class="text-main text-2xl hover:text-white hover:scale-110 transition">
              <i class="pi pi-google"></i>
            </a>
            <a href="#" class="text-main text-2xl hover:text-white hover:scale-110 transition">
              <i class="pi pi-facebook"></i>
            </a>
            <a href="#" class="text-main text-2xl hover:text-white hover:scale-110 transition">
              <i class="pi pi-instagram"></i>
            </a>
            <a href="#" class="text-main text-2xl hover:text-white hover:scale-110 transition">
              <i class="pi pi-envelope"></i>
            </a>
          </div>
  
          <p class="mt-6 text-center text-gray-500 hidden max-[468px]:hidden">
            Already have an account?
            <a
              href="/login"
              class="text-main hover:underline hover:text-white transition"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  </script>
  
  <style scoped></style>
  