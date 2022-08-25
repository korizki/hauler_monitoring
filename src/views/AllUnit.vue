<template>
    <div class="top">
        <Navbar />
        <div class="heads">
            <h1 class="header left">All Unit | <span class="minis" v-if="listEq.length">Total {{ listEq.length }} unit</span></h1>
            <label class="labs">
                <i class="fi fi-rr-search"></i>
                <input type="text" class='search' placeholder="Type unit number ... " @keyup="handlesearch" v-model="searchparam">
            </label>
            <div class="togle">
                <label class="switch" title="Switch to Auto Scroll">
                    <input type="checkbox" @click="handleclick">
                    <span class="slider round"></span>
                </label>
                <label for="">Auto Scroll</label>
            </div>
        </div>
        <div class="outbox">
            <div class="maincontent " :class="isAnimate ? 'animatescroll' : '' ">
                <UnitCard v-for="equipment in listEq" :equipmentData="equipment" :key="equipment.CN" />
            </div>
        </div>
        <div v-if="!listEq.length">
            <h2>Sorry, no data found ...</h2>
        </div>
    </div>
</template>

<script>
    import Navbar from '../components/Navbar.vue';
    import UnitCard from '../components/UnitCard.vue';
    import axios from 'axios';

    export default{
        components: {Navbar, UnitCard},
        data(){
            return {
                listEq : [],
                searchparam: '',
                isAnimate: false
            }
        },
        methods: {
            loadData(data){
                this.listEq = data
            },
            handlesearch(){
                axios.get('http://ss6api.ppa-mhu.net/ppa-employee-api/api/cico/listUnit/hd')
                .then(res => {
                    let data = res.data.filter(item => item.CN.toLowerCase().includes(this.searchparam.toLowerCase()))
                    this.loadData(data)
                })
            },
            handleclick(){
                this.isAnimate = !this.isAnimate
            }
        },
        mounted(){
            axios.get('http://ss6api.ppa-mhu.net/ppa-employee-api/api/cico/listUnit/hd')
                .then(res => this.loadData(res.data))
            // auto reload
            // setTimeout(() => {
            //     window.location.reload()
            // },600000)
        }
    }
</script>

<style >
    .search{
        padding: 12px 20px;
        padding-left: 60px;
        border: 1px solid #ddd;
        border-radius: 50px;
        font-size: 1.2rem;
    }
    .search:focus{
        outline: 2px solid crimson;
    }
    label>i{
        font-size: 1.6rem;
        color: #ddd;
        display: inline-block;
        transform: translate(40px, 6px)        
    }
    .heads{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 40px;
        margin: 10px 0;
        margin-bottom: 25px;
    }
    .animatescroll{
        animation-name: scrollup;
        animation-iteration-count: infinite;
        animation-duration: 420s;
    }
    @keyframes scrollup{
        0% {margin-top: 0px}
        50% {margin-top: -6000px}
        100% { margin-top: 0px}
    }
    .switch{
        position: relative;
        display: inline-block;width: 60px;
        height: 34px;
    }
    .switch input{
        opacity: 0;
        width: 0;
        height: 0;
    }
    .slider{
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: 0.4s;
    }
    .slider:before{
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background: white;
        transition: 0.4s
    }
    input:checked + .slider{
        background-color: #2196F3;
    }
    input:checked + .slider:before{
        transform: translateX(26px)
    }
    .slider.round{
        border-radius: 34px;
    }
    .slider.round:before{
        border-radius: 50%;
    }
    .togle{
        display: flex;
        align-items: center;
        gap: 16px;
    }
    .togle>label{
        color: silver;
    }
</style>