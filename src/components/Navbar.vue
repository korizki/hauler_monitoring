<template>
    <div>
        <nav>
            <img src="../assets/ppa.png" alt="logoppa" width="50" height="50">
            <router-link :to="{name: 'home'}">Home</router-link>
            <router-link :to="{name: 'waitingoperator'}">Waiting Operator</router-link>
            <router-link :to="{name: 'operatingunit'}">Operated Unit</router-link>
            <router-link :to="{name: 'allunit'}">List All Unit</router-link>
        </nav>
    </div>
</template>

<script>
    export default{
        props: ['countwait'],
    }
</script>

<style>
    nav a{
        text-decoration: none;
        padding: 8px 16px;
        border-radius: 6px;
    }
    nav{
        box-shadow: 0 1px 5px 0px #ddd;
        margin-bottom: 24px;
        position: fixed;
        top: 0;
        width: 100%;
        background: white;
        z-index: 10;
    }
    nav>img{
        position: absolute;
        top: 8px;
        left: 20px;
    }
</style>