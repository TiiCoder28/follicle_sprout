<template>
    <div class="flex items-center font-marcellus justify-center min-h-screen relative bg-bg-subtle bg-cover bg-no-repeat">
      <!-- Logo Section -->
      <div class="absolute top-4 left-4 flex items-center space-x-2">
        <img
          src="@/assets/follicle_logo-nobg.png"
          alt="Follicle Sprout Logo"
          class="w-12 h-12 object-contain"
        />
        <span class="max-[468px]:hidden text-main font-marcellus">Follicle Sprout</span>
      </div>

      <!-- Container -->
      <div class="flex flex-col md:flex-row-reverse items-center rounded-lg overflow-hidden w-full max-w-4xl px-3">
        <!-- Right Banner -->
        <div class="flex flex-col items-center py-12 px-6 justify-center bg-bg-golden_2 lg:h-[550px] w-full md:w-1/2">
          <h1 class="text-3xl font-bold text-white text-center">
            Forge Your Legacy With Follicle Sprout
          </h1>
          <img
            src="@/assets/Golden_man.png"
            class="max-[480px]:hidden w-[12rem] h-[12rem] mt-6 rounded-lg mx-auto"
            alt="A silhouette of a man with a golden beard"
          />
          <div class="text-center text-white px-8 mt-4">
            <p class="text-center font-handwritting py-4">
              Because it's not just a beard; it's your strength, your pride
            </p>
          </div>
          <p class="mt-6 text-center text-gray-200">
            Don’t have an account?
            <a
              href="/signup"
              class="text-main hover:underline hover:text-white transition"
            >
              Sign up
            </a>
          </p>
        </div>

        <!-- Verify Forgot Password Form -->
        <div class="w-full md:w-1/2 flex items-center justify-center p-8 bg-bg-golden lg:h-[550px]">
          <div class="w-full max-w-md">
            <h2 class="text-3xl font-bold mb-6 text-center text-main">Verify Code</h2>
            <form class="space-y-4">
              <div>
                <label class="block text-gray-700">Email</label>
                <input
                  type="email"
                  class="w-full px-4 py-2 border rounded bg-slate-100 focus:outline-none focus:ring focus:ring-main"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label class="block text-gray-700">Code</label>
                <input
                  type="text"
                  class="w-full px-4 py-2 border rounded bg-slate-100 focus:outline-none focus:ring focus:ring-main"
                  placeholder="Enter the code sent to your email"
                />
              </div>
              <div>
                <label class="block text-gray-700">New Password</label>
                <input
                  type="password"
                  class="w-full px-4 py-2 border rounded bg-slate-100 focus:outline-none focus:ring focus:ring-main"
                  placeholder="Enter your new password"
                />
              </div>
              <button
                class="w-full px-4 py-2 bg-main text-white font-bold rounded hover:bg-white hover:text-main border-main border transition hover:scale-105"
                type="submit"
              >
                Verify and Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>