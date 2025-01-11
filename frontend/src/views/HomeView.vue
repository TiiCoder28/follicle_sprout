<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const sendMessage = () => {
  alert('Your message has been sent to Nombuyiselo.');
};

const copyPhoneNumber = () => {
  navigator.clipboard.writeText('+27 63 127 8002').then(() => {
    window.location.href = 'tel:+27 63 127 8002';
  });
};

const redirectToEmail = () => {
  window.location.href = 'nombuyiselotshoaedi0@gmail.com';
};

</script>

<template class="scroll-smooth">
    <section class="min-h-screen bg-bg-golden bg-cover bg-no-repeat bg-center relative font-marcellus">
      <!-- Navbar -->
      <nav class="relative container mx-auto p-6">
  <div class="flex items-center justify-between">
    <!-- Logo -->
    <div class="flex items-center pt-2">
      <img
        src="@/assets/follicle_no_bg.png"
        class="rounded-full"
        alt="follicle sprout logo"
        width="50px"
        height="50px"
      />
      <p class="text-main text-xl ml-2">Follicle Sprout</p>
    </div>

    <!-- Desktop Navigation -->
    <div class="hidden md:flex space-x-6">
      <a href="#hero" class="hover:text-main">Home</a>
      <a href="#about" class="hover:text-main">About</a>
      <a href="#testimonials" class="hover:text-main">Testimonials</a>
      <a href="#shop" class="hover:text-main">Shop</a>
      <a href="#contact" class="hover:text-main">Contact Us</a>
    </div>
    <a
      href="/signup"
      class="hidden md:block p-3 px-6 pt-2 text-white bg-secondaryBg rounded-full baseline hover:bg-main"
    >
      <i class="pi pi-shopping-cart"> Cart</i>
    </a>

    <!-- Hamburger Icon -->
    <button
      id="menu-btn"
      class="block md:hidden focus:outline-none"
      @click="toggleMenu"
    >
      <i class="pi pi-bars text-2xl text-main"></i>
    </button>
  </div>

  <!-- Mobile Sidebar -->
  <div
    id="menu"
    class="fixed top-0 left-0 w-2/3 h-full bg-bg-golden shadow-lg transform transition-transform duration-300"
    :class="isMenuOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <div class="p-6 grid grid-cols-1 gap-4">
      <!-- Close Button -->
      <button
        id="close-btn"
        class="mb-6 text-main focus:outline-none"
        @click="toggleMenu"
      >
        <i class="pi pi-times text-2xl"></i>
      </button>

      <!-- Sidebar Links with Icons -->
      <a
        href="#hero"
        class="flex items-center p-4 text-lg text-main bg-white rounded-lg shadow-md hover:bg-secondaryBg hover:text-white"
        @click="toggleMenu"
      >
        <i class="pi pi-home mr-3"></i>
        Home
      </a>
      <a
        href="#about"
        class="flex items-center p-4 text-lg text-main bg-white rounded-lg shadow-md hover:bg-secondaryBg hover:text-white"
        @click="toggleMenu"
      >
        <i class="pi pi-info-circle mr-3"></i>
        About
      </a>
      <a
        href="#testimonials"
        class="flex items-center p-4 text-lg text-main bg-white rounded-lg shadow-md hover:bg-secondaryBg hover:text-white"
        @click="toggleMenu"
      >
        <i class="pi pi-comments mr-3"></i>
        Testimonials
      </a>
      <a
        href="#shop"
        class="flex items-center p-4 text-lg text-main bg-white rounded-lg shadow-md hover:bg-secondaryBg hover:text-white"
        @click="toggleMenu"
      >
        <i class="pi pi-shopping-bag mr-3"></i>
        Shop
      </a>
      <a
        href="#contact-us"
        class="flex items-center p-4 text-lg text-main bg-white rounded-lg shadow-md hover:bg-secondaryBg hover:text-white"
        @click="toggleMenu"
      >
        <i class="pi pi-envelope mr-3"></i>
        Contact Us
      </a>
      <a
        href="/login"
        class="flex items-center p-4 text-lg text-main bg-white rounded-lg shadow-md hover:bg-secondaryBg hover:text-white"
        @click="toggleMenu"
      >
        <i class="pi pi-shopping-cart mr-3"></i>
        Cart
      </a>
      <a
        href="/signup"
        class="flex items-center p-4 text-lg text-main bg-white rounded-lg shadow-md hover:bg-secondaryBg hover:text-white"
        @click="toggleMenu"
      >
        <i class="pi pi-user-plus mr-3"></i>
        Sign Up
      </a>
    </div>
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
      <!-- Image -->
      <img
        src="@/assets/owner_3.jpg"
        alt="About Follicle Sprout"
        class="main-image rounded-lg shadow-lg lg:h-auto md:w-1/2 sm:h-150px sm:w-150px"
      />
      <!-- Text -->
      <div class="md:w-1/2 text-lg text-left">
        <p class="mb-4">
          Follicle Sprout was founded by <span class="font-bold">Indlovukazi Nombuyiselo</span>, 
          a visionary entrepreneur who transformed her personal struggles with hair loss into an innovative solution for others. 
          Growing up in South Africa, Nombuyiselo witnessed the damage caused by chemical treatments, tension styling, and harsh environmental conditions.
        </p>
        <p class="mb-4">
          Determined to make a change, she combined traditional African herbal remedies with modern scientific research to create 
          <span class="font-bold">Follicle Sprout Hairline Oil</span>. This perfect formula not only stimulates the growth of hair follicles in preexisting areas but also serves as a beard oil, 
          promoting smoother, healthier beard growth.
        </p>
        <p>
          Today, Follicle Sprout stands as a symbol of resilience and empowerment, helping individuals restore their hair 
          and regain their confidence. Whether you're looking to repair your hairline, grow a fuller beard, or simply embrace your natural beauty, 
          Follicle Sprout is here to support you every step of the way.
        </p>
      </div>
    </div>
  </div>
</section>


  
      <!-- Testimonials Section -->
      <section id="testimonials" class="bg-bg-golden bg-cover bg-no-repeat relative py-16">
  <div class="container mx-auto px-6 text-center">
    <h2 class="text-4xl font-bold text-main mb-6">What Our Customers Say</h2>
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div class="p-6 bg-white rounded-lg shadow">
        <img 
        src="@/assets/customer_1.jpg"
        class="images" 
        alt="before and after for customer A" />
        <p class="font-handwritten">
          "Follicle Sprout has been life-changing! Not only does my hair feel stronger and fuller, but I’ve also regained confidence I thought I’d lost. This product truly delivers on its promises."
        </p>
        <p class="mt-4 font-bold">- Customer A</p>
      </div>
      <div class="p-6 bg-white rounded-lg shadow">
        <img 
        src="@/assets/customer_2.jpg"
        class="images" 
        alt="before and after for customer B" />
        <p class="font-handwritten">
          "As someone who started noticing hair thinning and a receding hairline in my late 20s, I felt like I was running out of options. I decided to give Follicle Sprout a try, and honestly, I wasn’t expecting miracles. But after just a few weeks of consistent use, I started seeing small, promising changes—my hairline appeared fuller, 
          and my scalp felt healthier. Fast forward a few months, and 
          I couldn’t believe it—my barber even commented on the difference! Follicle Sprout hasn’t just restored my hair; it’s brought back my confidence. 
          It’s now a must-have in my grooming routine, and I’d recommend it to any man dealing with hair loss or thinning."
        </p>
        <p class="mt-4 font-bold">- Customer B</p>
      </div>
      <div class="p-6 bg-white rounded-lg shadow">
        <img 
        src="@/assets/customer_3.jpg"
        class="images" 
        alt="before and after for customer C" />
        <p class="font-handwritten">
          "After years of tension damage from tight hairstyles, my hairline was in bad shape. Thanks to Follicle Sprout, not only has my hairline started recovering, but my hair feels healthier and more nourished overall. I’m finally seeing progress I didn’t think was possible!"
        </p>
        <p class="mt-4 font-bold">- Customer C</p>
      </div>
    </div>
  </div>
</section>


  
      <!-- Shop Section -->
      <section id="shop" class="bg-white py-16">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-4xl font-bold text-main mb-6">Shop Our Product</h2>
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
  
      <section id="contact-us" class="bg-bg-golden bg-cover bg-no-repeat bg-blend-normal py-16 text-center">
  <div class="container mx-auto px-6">
    <h2 class="text-4xl font-bold text-main mb-8 text-center">Contact Us</h2>
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Contact Details -->
      <div class="flex-1 p-6 bg-bg-gray rounded-lg shadow-lg">
        <h3 class="text-2xl font-semibold text-main mb-4">Reach Out</h3>
        <div class="flex items-center mb-4">
          <button
            class="flex items-center text-main hover:text-secondaryBg focus:outline-none"
            @click="copyPhoneNumber"
          >
            <i class="pi pi-phone text-xl mr-3"></i>
            <span>+27 63 127 8002</span>
          </button>
        </div>
        <div class="flex items-center">
          <button
            class="flex items-center text-main hover:text-secondaryBg focus:outline-none"
            @click="redirectToEmail"
          >
            <i class="pi pi-envelope text-xl mr-3"></i>
            <span>nombuyiselotshoaedi0@gmail.com</span>
          </button>
        </div>
      </div>

      <!-- Leave a Message -->
      <div class="flex-1 p-6 bg-bg-gray rounded-lg shadow-lg">
        <h3 class="text-2xl font-semibold text-main mb-4">Leave Us a Message</h3>
        <form @submit.prevent="sendMessage">
          <div class="mb-4">
            <label for="name" class="block text-main mb-2">Your Name</label>
            <input
              id="name"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-main"
              placeholder="Enter your name"
              required
            />
          </div>
          <div class="mb-4">
            <label for="message" class="block text-main mb-2">Your Message</label>
            <textarea
              id="message"
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-main"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full p-3 text-white bg-secondaryBg rounded-lg hover:bg-main"
          >
            Send Message
          </button>
        </form>
      </div>
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

  
<style>

.main-image {
    border-radius: 150px;
    width: 50%;
    height: auto;
}

.images {
    border-radius: 30px;
    width: 40rem;
    height: 40rem;
    
}

  </style>