<template>
 <!--Navbar-->
 <nav class="relative container mx-auto p-6">

    <div class="flex items-center justify-between">
         <!--Logo-->
        <div class="flex pt-2">
            <img src="@/assets/follicle_no_bg.png" class="rounded-full" alt="follicle sprout logo"  width="50px" height="50px"/>
            <p class="text-main text-xl">Follicle sprout</p>
        </div>
        <div class="hidden md:flex space-x-6">
            <a href="/" class="hover:text-main">Home</a>
            <a href="#about" class="hover:text-main">About</a>
            <a href="#testimonials" class="hover:text-main">Testimonials</a>
            <a href="#shop" class="hover:text-main">Shop</a>
            <a href="#contact" class="hover:text-main">Contact Us</a>
        </div>

        <a href="#" class="hidden md:block p-3 px-6 pt-2 text-white bg-secondaryBg rounded-full baseline hover:bg-main"><i class="pi pi-shopping-cart"> Cart</i></a>
    </div>
 </nav>

 <!--Hero section-->
 <section id="hero">
    <!--Flex container-->
    <div class="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        <!--left item-->
        <div class="flex flex-col mb-32 space-y-8 md:w-1/2">
            <h1 class="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">Revitalize Your Hair</h1>
            <p class="max-w-sm text-center text-secondaryBg md:text-left">
                Follicle Sprout offers a revolutionary solution to nurture your hair
                and promote growth. Our products are made with care for healthier,
                stronger hair.
            </p>
            <div class="flex justify-center md:justify-start">
                <a href="#" class="p-3 px-6 pt-2 text-white bg-main rounded-full baseline hover:bg-secondary hover:transition-all md:hover:transition-all"><i class="pi pi-shopping-bag"></i>  Shop</a>
            </div>
        </div>
        <!--image-->
        <div class="md:w-1/2">
            <img src="@/assets/product.jpg" alt="an image of the product" class="h-auto rounded-lg ml-3 xl:h-[40rem] xl:w-[40rem]" />
        </div>
    </div>
 </section>

 <section id="about">
    <div class="container flex flex-col px-4 mt-10 space-y-12 md:space-y-0 md:flex-row">
        <!--image of the product-->
        <div class="flex flex-col space-y-12 md:w-1/2">
            <h2 class="max-w-md text-4xl font-bold text-center text-main">About Follicle Sprout</h2>
        </div>

        <!--features of the products-->
        <div class=""></div>
    </div>
 </section>
</template>