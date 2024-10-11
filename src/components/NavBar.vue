<template>
    <header>
        <nav class="nav-bar">
            <router-link to="/" class="logo-link">
                <img src="/logo.png" alt="Risevest Logo" class="logo" />
            </router-link>
            <ul class="nav-links">
                <li v-for="item in navLinks" :key="item.name" class="nav-item">
                    <a :href="item.link" class="nav-link" :class="{ active: isActiveLink(item.link) }">
                        {{ item.name }}
                        <span v-if="item.name === 'Products'" class="nav-arrow"><Arrowdown/></span>
                        <span v-if="isActiveLink(item.link)" class="active-dot"><Dot/></span>
                    </a>
                </li>
            </ul>
            <buhrefn @click="toggleSidebar" class="menu-button" aria-label="Open navigation menu">
                <svg class="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7">
                    </path>
                </svg>
            </buhrefn>
        </nav>

        <transition enter-active-class="transform transition duration-300 ease-in-out"
            enter-from-class="translate-x-full opacity-0" enter-to-class="translate-x-0 opacity-100"
            leave-active-class="transform transition duration-300 ease-in-out"
            leave-from-class="-translate-x-0 opacity-100" leave-to-class="translate-x-full opacity-0">
            <aside v-if="isSidebarOpen" class="sidebar">
                <div class="sidebar-header">
                    <img src="/logo.png" alt="Risevest Logo" class="logo" />
                    <button @click="toggleSidebar" class="close-button" aria-label="Close navigation menu">
                        <Close class="close-icon" />
                    </button>
                </div>
                <div class="sidebar-content">
                    <ul class="sidebar-links">
                        <li v-for="item in navLinks" :key="item.name">
                            <a :href="item.link" @click="toggleSidebar" class="sidebar-link">
                                {{ item.name }}
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </transition>
    </header>
</template>

<script setup lang="ts">
import Dot from './icons/dot.vue'
import Arrowdown from './icons/arrowdown.vue'
import Close from './icons/close.vue';
import { navLinks } from '@/composables/menu';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const isSidebarOpen = ref(false);
const route = useRoute();

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
    if (isSidebarOpen.value) {
        document.body.classList.add('overflow-hidden');
    } else {
        document.body.classList.remove('overflow-hidden');
    }
};

watch(isSidebarOpen, (newValue) => {
    if (!newValue) {
        document.body.classList.remove('overflow-hidden');
    }
});

const isActiveLink = (link: string) => {
    return route.path === link;
};
</script>

<style scoped>
/* Header and NavBar */
.nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 1rem;
}

@media (min-width: 768px) {
    .nav-bar {
        padding: 1.5rem 2rem;
    }
}

.logo {
    max-width: 120px;
}

.nav-links {
    display: none;
    gap: 1.45rem;
    list-style: none;
    cursor: pointer;
}

@media (min-width: 768px) {
    .nav-links {
        display: flex;
        align-items: center;
    }
}

.nav-link {
    color: #07969E;
    font-weight: 400;
    text-decoration: none;
    position: relative;
    display: flex;
    flex-direction: row;
        justify-content: space-between;
        align-items: center;
}

.nav-link:hover {
    text-decoration: none;
}

.nav-link.active {
    font-weight: 700;
}

.nav-arrow {
    margin-left: 4px;
    font-size: 0.8rem;
}

.active-dot {
    position: absolute;
    bottom: -15px;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 0.8rem;
    text-align: center;
    color: #07969E;
    display: flex;
        flex-direction: column;
        align-items: center;
}

/* Menu Button */
.menu-button {
    background: none;
    border: none;
    cursor: pointer;
    display: block;
}

@media (min-width: 768px) {
    .menu-button {
        display: none;
    }
}

.menu-icon {
    width: 24px;
    height: 24px;
}

/* Sidebar */
.sidebar {
    position: fixed;
    inset: 0;
    z-index: 50;
    display: flex;
    flex-direction: column;
    background-color: #f6f6f6;
    width: 100%;
    padding: 2rem 1rem;
}

.sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.close-button {
    background: none;
    border: none;
    cursor: pointer;
}

.close-icon {
    width: 40px;
    height: 40px;
}

.sidebar-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70vh;
}

.sidebar-links {
    list-style: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
}

.sidebar-link {
    display: block;
    padding: 0.75rem 0;
    font-size: 1.125rem;
    text-decoration: none;
    color: #07969E;
}

.sidebar-link:hover {
    text-decoration: none;
}


.logo-link:focus,
.menu-button:focus,
.close-button:focus,
.nav-link:focus,
.sidebar-link:focus {
    outline: 2px solid #07969E;
    outline-offset: 2px;
}
</style>
