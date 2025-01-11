<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="relative w-[800px] h-[500px] bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-500 transform" :class="signupMode ? 'translate-x-[50%]' : ''">
        <!-- Sign In Form -->
        <div class="absolute inset-0 flex flex-col justify-center items-center w-[50%] h-full px-10 bg-white transition-transform duration-500" :class="signupMode ? 'translate-x-full' : ''">
          <h2 class="text-3xl font-bold text-gray-800">Welcome</h2>
          <label class="mt-4 w-full">
            <span class="block text-gray-600 mb-2">Email</span>
            <input type="email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300" />
          </label>
          <label class="mt-4 w-full">
            <span class="block text-gray-600 mb-2">Password</span>
            <input type="password" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300" />
          </label>
          <p class="mt-2 text-sm text-indigo-600 cursor-pointer hover:underline">Forgot password?</p>
          <button type="button" class="mt-6 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700">Sign In</button>
        </div>
  
        <!-- Sub Container -->
        <div class="absolute inset-0 flex items-center justify-center w-[50%] h-full bg-indigo-600 text-white transition-transform duration-500" :class="signupMode ? '-translate-x-[50%]' : ''">
          <div class="text-center">
            <div v-if="!signupMode">
              <h3 class="text-xl font-semibold">Don't have an account? Please Sign up!</h3>
              <button class="mt-6 px-6 py-2 border border-white rounded-md hover:bg-white hover:text-indigo-600" @click="toggleMode">Sign Up</button>
            </div>
            <div v-else>
              <h3 class="text-xl font-semibold">If you already have an account, just sign in.</h3>
              <button class="mt-6 px-6 py-2 border border-white rounded-md hover:bg-white hover:text-indigo-600" @click="toggleMode">Sign In</button>
            </div>
          </div>
        </div>
  
        <!-- Sign Up Form -->
        <div class="absolute inset-0 flex flex-col justify-center items-center w-[50%] h-full px-10 bg-white transition-transform duration-500 transform translate-x-full" :class="signupMode ? '-translate-x-full' : ''">
          <h2 class="text-3xl font-bold text-gray-800">Create your Account</h2>
          <label class="mt-4 w-full">
            <span class="block text-gray-600 mb-2">Name</span>
            <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300" />
          </label>
          <label class="mt-4 w-full">
            <span class="block text-gray-600 mb-2">Email</span>
            <input type="email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300" />
          </label>
          <label class="mt-4 w-full">
            <span class="block text-gray-600 mb-2">Password</span>
            <input type="password" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300" />
          </label>
          <button type="button" class="mt-6 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700">Sign Up</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        signupMode: false, // Toggle between Sign In and Sign Up
      };
    },
    methods: {
      toggleMode() {
        this.signupMode = !this.signupMode;
      },
    },
  };
  </script>
  