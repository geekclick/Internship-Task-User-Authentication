<script setup>
import { computed } from "vue"
import Navbar from '@/components/Navbar.vue';
import { useAuthStore } from "@/stores/AuthStore";
const authStore = useAuthStore()
const isLoggedIn = computed(() => localStorage.getItem('token'));
const user = computed(() => authStore.user);
</script>

<template>
    <Navbar />
    <div class="bg-gray-800 w-full h-screen flex justify-center items-center">
        <h1 v-if="isLoggedIn" class="text-6xl text-white font-semibold capitalize">Hello {{ user }}!👋</h1>
        <h1 v-if="!isLoggedIn" class="text-6xl text-white font-semibold">Login</h1>
    </div>
</template>