<template>
    <nav>
        <div class="logo">
            <img src="/spacewatcherlogo.png" alt="Site Logo"/>
        </div>  
    <SearchBar />
    </nav>

</template>

<script setup>

</script>

<style>
.logo {
    position: fixed;
    top: 10px;
    left: 10px;
    z-index:10;
}

.logo img {
    height: 40px;
}

nav {
    padding-top: 60px;
}

</style>