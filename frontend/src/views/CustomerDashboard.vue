<script setup>
import { ref } from 'vue';

const isSidebarOpen = ref(true);
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

// Sample customer data
const customerDetails = {
  name: 'John Doe',
  email: 'john.doe@email.com',
  joinDate: 'January 2024'
};

// Sample orders data
const orders = [
  { 
    id: '#1234', 
    date: '2024-01-15', 
    product: 'Follicle Sprout Oil', 
    status: 'Delivered', 
    amount: 'R350',
    tracking: 'TR123456789'
  },
  { 
    id: '#1235', 
    date: '2024-01-20', 
    product: 'Derma Roller', 
    status: 'Processing', 
    amount: 'R200',
    tracking: 'TR987654321'
  }
];

// Sample favorite products
const favorites = [
  { name: 'Follicle Sprout Oil', price: 'R350', image: '@/assets/product_image_nobg.png' },
  { name: 'Derma Roller', price: 'R200', image: '@/assets/product_image_nobg.png' }
];
</script>

<template>
  <div class="min-h-screen bg-bg-golden">
    <!-- Sidebar -->
    <aside
      :class="`${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-white border-r border-gray-200 md:translate-x-0`"
    >
      <div class="flex items-center justify-between p-4 border-b">
        <div class="flex items-center">
          <img
            src="@/assets/follicle_no_bg.png"
            class="w-8 h-8 rounded-full"
            alt="Follicle Sprout logo"
          />
          <span class="ml-3 text-xl font-semibold text-main">My Account</span>
        </div>
        <button
          @click="toggleSidebar"
          class="md:hidden text-gray-500 hover:text-gray-600"
        >
          <i class="pi pi-times"></i>
        </button>
      </div>

      <div class="py-4 px-3">
        <ul class="space-y-2">
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-main rounded-lg hover:bg-secondaryBg hover:text-white"
            >
              <i class="pi pi-home mr-3"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-main rounded-lg hover:bg-secondaryBg hover:text-white"
            >
              <i class="pi pi-shopping-cart mr-3"></i>
              <span>My Orders</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-main rounded-lg hover:bg-secondaryBg hover:text-white"
            >
              <i class="pi pi-heart mr-3"></i>
              <span>Favorites</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-main rounded-lg hover:bg-secondaryBg hover:text-white"
            >
              <i class="pi pi-map-marker mr-3"></i>
              <span>Addresses</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-main rounded-lg hover:bg-secondaryBg hover:text-white"
            >
              <i class="pi pi-user mr-3"></i>
              <span>Profile Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="p-4 md:ml-64">
      <!-- Top Navigation -->
      <nav class="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div class="flex justify-between items-center">
          <button
            @click="toggleSidebar"
            class="text-main md:hidden"
          >
            <i class="pi pi-bars text-2xl"></i>
          </button>
          <div class="flex items-center space-x-4">
            <span class="text-main">Welcome, {{ customerDetails.name }}!</span>
            <button class="text-main">
              <i class="pi pi-bell text-xl"></i>
            </button>
          </div>
        </div>
      </nav>

      <!-- Account Overview -->
      <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 class="text-xl font-semibold text-main mb-4">Account Overview</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-4 border rounded-lg">
            <div class="flex items-center">
              <i class="pi pi-user text-2xl text-secondaryBg mr-3"></i>
              <div>
                <p class="text-gray-500">Member Since</p>
                <p class="font-medium">{{ customerDetails.joinDate }}</p>
              </div>
            </div>
          </div>
          <div class="p-4 border rounded-lg">
            <div class="flex items-center">
              <i class="pi pi-shopping-cart text-2xl text-secondaryBg mr-3"></i>
              <div>
                <p class="text-gray-500">Total Orders</p>
                <p class="font-medium">{{ orders.length }}</p>
              </div>
            </div>
          </div>
          <div class="p-4 border rounded-lg">
            <div class="flex items-center">
              <i class="pi pi-heart text-2xl text-secondaryBg mr-3"></i>
              <div>
                <p class="text-gray-500">Favorites</p>
                <p class="font-medium">{{ favorites.length }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Orders -->
      <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 class="text-xl font-semibold text-main mb-4">Recent Orders</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tracking</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="order in orders" :key="order.id">
                <td class="px-6 py-4 whitespace-nowrap">{{ order.id }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ order.date }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ order.product }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    :class="{
                      'px-2 py-1 rounded-full text-xs font-medium': true,
                      'bg-green-100 text-green-800': order.status === 'Delivered',
                      'bg-blue-100 text-blue-800': order.status === 'Processing'
                    }"
                  >
                    {{ order.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">{{ order.amount }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <a href="#" class="text-main hover:text-secondaryBg">
                    Track Order
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Favorite Products -->
      <div class="bg-white rounded-lg shadow-sm p-6">
        <h2 class="text-xl font-semibold text-main mb-4">Favorite Products</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="product in favorites"
            :key="product.name"
            class="border rounded-lg p-4 flex items-center"
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="w-16 h-16 object-cover rounded-lg"
            />
            <div class="ml-4">
              <p class="font-medium">{{ product.name }}</p>
              <p class="text-gray-500">{{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any additional custom styles here */
</style>