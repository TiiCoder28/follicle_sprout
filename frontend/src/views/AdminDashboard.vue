<script setup>
import { ref } from 'vue';

const isSidebarOpen = ref(true);
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

// Sample data for dashboard stats
const stats = [
  { title: 'Total Sales', value: 'R15,240', icon: 'pi pi-money-bill' },
  { title: 'Orders', value: '156', icon: 'pi pi-shopping-cart' },
  { title: 'Customers', value: '89', icon: 'pi pi-users' },
  { title: 'Products', value: '12', icon: 'pi pi-box' }
];

// Sample data for recent orders
const recentOrders = [
  { id: '#1234', customer: 'John Doe', product: 'Follicle Sprout Oil', status: 'Delivered', amount: 'R350' },
  { id: '#1235', customer: 'Jane Smith', product: 'Derma Roller', status: 'Processing', amount: 'R200' },
  { id: '#1236', customer: 'Mike Johnson', product: 'Follicle Sprout Oil', status: 'Pending', amount: 'R350' },
];
</script>

<template>
  <div class="min-h-screen bg-bg-golden bg-cover bg-no-repeat">
    <!-- Sidebar -->
    <aside
      :class="`${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-bg-subtle border-r border-gray-200 md:translate-x-0 flex flex-col justify-between`"
    >
      <div class="flex items-center justify-between p-4 border-b">
        <div class="flex items-center">
          <img
            src="@/assets/follicle_no_bg.png"
            class="w-8 h-8 rounded-full"
            alt="Follicle Sprout logo"
          />
          <span class="ml-3 text-xl font-semibold text-main">Admin Panel</span>
        </div>
        <button
          @click="toggleSidebar"
          class="md:hidden text-gray-500 hover:text-gray-600"
        >
          <i class="pi pi-times"></i>
        </button>
      </div>

      <div class="py-4 px-3 flex-1 overflow-y-auto">
        <ul class="space-y-2">
          <li>
            <a
              href="#"
              class="flex items-center p-5 text-main rounded-lg hover:bg-secondaryBg hover:text-white transition-transform transform hover:scale-105 shadow-lg"
            >
              <i class="pi pi-home mr-3"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-5 text-main rounded-lg hover:bg-secondaryBg hover:text-white transition-transform transform hover:scale-105 shadow-lg"
            >
              <i class="pi pi-shopping-bag mr-3"></i>
              <span>Products</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-5 text-main rounded-lg hover:bg-secondaryBg hover:text-white transition-transform transform hover:scale-105 shadow-lg"
            >
              <i class="pi pi-shopping-cart mr-3"></i>
              <span>Orders</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-5 text-main rounded-lg hover:bg-secondaryBg hover:text-white transition-transform transform hover:scale-105 shadow-lg"
            >
              <i class="pi pi-users mr-3"></i>
              <span>Customers</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-5 text-main rounded-lg hover:bg-secondaryBg hover:text-white transition-transform transform hover:scale-105 shadow-lg"
            >
              <i class="pi pi-pencil mr-3"></i>
              <span>Blog</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-5 text-main rounded-lg hover:bg-secondaryBg hover:text-white transition-transform transform hover:scale-105 shadow-lg"
            >
              <i class="pi pi-chart-bar mr-3"></i>
              <span>Analytics</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-5 text-main rounded-lg hover:bg-secondaryBg hover:text-white transition-transform transform hover:scale-105 shadow-lg"
            >
              <i class="pi pi-cog mr-3"></i>
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="p-2">
        <button
          @click="window.open('/', '_blank')"
          class="bg-secondaryBg text-white px-8 py-3 rounded-lg shadow hover:bg-secondaryHover transition-transform transform hover:scale-105 w-full hover:bg-white hover:text-main"
        >
          <i class="pi pi-eye mr-2"></i>
          View Site as User
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="p-4 md:ml-64">
      <!-- Top Navigation -->
      <nav class="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div class="flex justify-end items-center px-6">
          <button @click="toggleSidebar" class="text-main md:hidden mx-5">
            <i class="pi pi-bars text-2xl"></i>
          </button>
          <div class="flex items-center space-x-4">
            <button class="text-main hover:text-secondaryBg hover:scale-110 transition-transform">
              <i class="pi pi-bell text-xl"></i>
            </button>
            <button class="text-main hover:text-secondaryBg hover:scale-110 transition-transform">
              <i class="pi pi-user text-xl"></i>
            </button>
          </div>
        </div>
      </nav>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div
          v-for="stat in stats"
          :key="stat.title"
          class="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
        >
          <div class="flex items-center">
            <div class="p-3 rounded-full bg-secondaryBg bg-opacity-10">
              <i :class="[stat.icon, 'text-2xl text-secondaryBg']"></i>
            </div>
            <div class="ml-4">
              <p class="text-gray-500 text-sm">{{ stat.title }}</p>
              <p class="text-2xl font-semibold text-main">{{ stat.value }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Orders -->
      <div class="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-103 hover:shadow-xl">
        <h2 class="text-xl font-semibold text-main mb-4">Recent Orders</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Order ID
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Customer
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Product
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="order in recentOrders" :key="order.id">
                <td class="px-6 py-4 whitespace-nowrap">{{ order.id }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ order.customer }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ order.product }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    :class="{
                      'px-2 py-1 rounded-full text-xs font-medium': true,
                      'bg-green-100 text-green-800': order.status === 'Delivered',
                      'bg-blue-100 text-blue-800': order.status === 'Processing',
                      'bg-yellow-100 text-yellow-800': order.status === 'Pending'
                    }"
                  >
                    {{ order.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">{{ order.amount }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
}

</style>
