<template>
    <section class="min-h-screen bg-bg-golden bg-cover bg-no-repeat bg-center relative font-marcellus">
      <!-- Navbar -->
      <nav class="relative container mx-auto p-6">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex pt-2">
            <img
              src="@/assets/follicle_no_bg.png"
              class="rounded-full"
              alt="follicle sprout logo"
              width="50px"
              height="50px"
            />
            <p class="text-main text-xl ml-2">Follicle Sprout</p>
          </div>
          <div class="hidden md:flex space-x-6">
            <a href="#hero" class="hover:text-main">Home</a>
            <a href="#about" class="hover:text-main">About</a>
            <a href="#testimonials" class="hover:text-main">Testimonials</a>
            <a href="#shop" class="hover:text-main">Shop</a>
            <a href="#contact" class="hover:text-main">Contact Us</a>
          </div>
          <a
            href="#"
            class="hidden md:block p-3 px-6 pt-2 text-white bg-secondaryBg rounded-full baseline hover:bg-main"
          >
            <i class="pi pi-shopping-cart"> Cart</i>
          </a>
        </div>
      </nav>
  
      <!-- Hero section -->
      <section id="hero">
        <div
          class="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0"
        >
          <div class="flex flex-col mb-32 space-y-8 md:w-1/2">
            <h1 class="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Revitalize Your Hair
            </h1>
            <p class="max-w-sm text-center text-secondaryBg md:text-left">
              Follicle Sprout offers a revolutionary solution to nurture your hair
              and promote growth. Our products are made with care for healthier,
              stronger hair.
            </p>
            <div class="flex justify-center md:justify-start">
              <a
                href="#shop"
                class="p-3 px-6 pt-2 text-white bg-main rounded-full baseline hover:bg-secondary hover:transition-all md:hover:transition-all"
              >
                <i class="pi pi-shopping-bag"></i> Shop
              </a>
            </div>
          </div>
          <div class="md:w-1/2">
            <img
              src="@/assets/follicle_logo-nobg.png"
              alt="an image of the product"
              class="h-auto rounded-lg ml-3 xl:h-[40rem] xl:w-[40rem]"
            />
          </div>
        </div>
      </section>
  
      <!-- About Section -->
      <section id="about" class="bg-white py-16">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-4xl font-bold text-main mb-6">About Follicle Sprout</h2>
          <div class="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
            <img
              src="@/assets/owner.jpg"
              alt="About Follicle Sprout"
              class="w-32 h-32 rounded-full md:w-1/2"
            />
            <p class="md:w-1/2 text-lg">
              Follicle Sprout was founded by Indlovukazi Nombuyiselo. The Follicle Sprout Hairline Oil
              is a perfect formula for stimulating the growth of hair follicles in preexisting areas. It
              also serves as a beard oil, promoting smoother, healthier beard growth.
            </p>
          </div>
        </div>
      </section>
  
      <!-- Testimonials Section -->
      <section id="testimonials" class="bg-gray-100 py-16">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-4xl font-bold text-main mb-6">What Our Customers Say</h2>
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div class="p-6 bg-white rounded-lg shadow">
              <p>
                "Follicle Sprout has been life-changing! My hair feels stronger and fuller than ever
                before!"
              </p>
              <p class="mt-4 font-bold">- Customer A</p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow">
              <p>
                "The beard oil is incredible! My beard has never been this smooth and free of ingrown
                hair."
              </p>
              <p class="mt-4 font-bold">- Customer B</p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow">
              <p>
                "After years of tension damage, my hairline is finally recovering, thanks to Follicle
                Sprout!"
              </p>
              <p class="mt-4 font-bold">- Customer C</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Shop Section -->
      <section id="shop" class="bg-white py-16">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-4xl font-bold text-main mb-6">Shop Our Products</h2>
          <div class="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
            <img
              src="@/assets/product_image_nobg.png"
              alt="Follicle Sprout Products"
              class="rounded-lg w-full md:w-1/2"
            />
            <p class="md:w-1/2 text-lg">
              Our Follicle Sprout product is crafted with premium ingredients like Amla Power,
              Ashwagandha, Neem, and Rosemary to address hair loss, improve scalp health, and reduce
              shedding. Use our derma roller to open up pores and promote growth where it's most
              needed.
            </p>
          </div>
          <a
            href="#"
            class="mt-8 inline-block p-3 px-6 pt-2 text-white bg-main rounded-full baseline hover:bg-secondary"
          >
            Shop Now
          </a>
        </div>
      </section>
  
      <!-- Contact Us Section -->
      <section id="contact" class="bg-gray-100 py-16">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-4xl font-bold text-main mb-6">Contact Us</h2>
          <p class="text-lg">Have questions? Get in touch with us!</p>
          <div class="mt-6">
            <p class="mb-2">
              <strong>Email:</strong> folliclesprout@example.com
            </p>
            <p>
              <strong>Call:</strong> +27 123 456 7890
            </p>
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-secondaryBg py-6">
        <div class="container mx-auto px-6 text-center text-white">
          <p>© 2025 Follicle Sprout. All Rights Reserved.</p>
        </div>
      </footer>
    </section>
  </template>
  
  <script>
  export default {
    name: "LandingPage",
  };
  </script>
  
  <style>
  /* Add your custom styles here if needed */
  </style>
  