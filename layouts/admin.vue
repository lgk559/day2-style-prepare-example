<template>
    <header>
        頁首(admin)
        <ul class="nav">
            <li class="nav-item">
                <NuxtLink to="/admin" class="nav-link">首頁</NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink to="/admin/order" class="nav-link">訂單</NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink to="/" class="nav-link">回前台</NuxtLink>
            </li>
        </ul>
    </header>
    <slot></slot>
    <footer>
        頁尾(admin)
    </footer>
</template>
<script setup=""></script>