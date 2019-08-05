<template>
    <div class="home-container">
        <router-link to="/level/1" class="main-button">
            Let's Start
        </router-link>
    </div>
</template>

<script>

export default {
    name: 'home'
}

</script>


<style>

.home-container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.home-container .main-button {
    position: relative;
    border: 0;
    padding: 1em 2em;
    font-size: 2rem;
    border-radius: 1em;
    background-color: var(--primary-color);
    box-shadow: 0 .5em 0px var(--primary-dark-color);
    user-select: none !important;
}

.home-container .main-button:active {
    bottom: -.25em;
    background-color: var(--primary-color);
    box-shadow: 0 .25em 0px var(--primary-dark-color);
}

</style>