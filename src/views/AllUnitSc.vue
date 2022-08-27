<template>
  <div class="top">
    <Navbar />
    <div class="heads">
        <h1 class="header">Unit Preview | <span class="minis" v-if="listEq.length">Total {{ listEq.length }} unit</span></h1>
        <label class="labs">
            <p>Now at page <strong>{{ page }}</strong> from total pages <strong>{{totalpage}}</strong> </p>
            <!-- <input type="text" class='search' placeholder="Type unit number ... " @keyup="handlesearch" v-model="searchparam"> -->
        </label>
    </div>
    <div class="outbox">
        <div class="maincontent slidebox" :class="isAnimate ? 'animatescroll' : '' ">
            <UnitCard class="showdown" v-for="equipment in listEq" :equipmentData="equipment" :key="equipment.CN" />
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
    // code for vue
    export default{
        components: {Navbar, UnitCard},
        data(){
            return {
                listEq : [],
                searchparam: '',
                isAnimate: false,
                page: 1,
                totalpage: ''
            }
        },
        methods: {
            loadData(data){
                // mendapatkan nilai maxpage
                this.totalpage = Math.ceil(data.length / 12);
                // process data untuk ditampilkan
                this.processList(data)
            },
            handlesearch(){
                // get data from api 
                axios.get('http://ss6api.ppa-mhu.net/ppa-employee-api/api/cico/listUnit/hd')
                .then(res => {
                    // load data untuk diproses
                    let data = res.data.filter(item => item.CN.toLowerCase().includes(this.searchparam.toLowerCase()))
                    this.loadData(data)
                })
            },
            handleclick(){
                this.isAnimate = !this.isAnimate
            },
            processList(data){
                let alldata = data;
                this.listEq = alldata.splice(0,12)
                // jika array kosong / habis maka reload halaman
                if(this.listEq.length === 0){
                    window.location.reload()
                }
                setTimeout( () => {
                    this.page += 1;
                    this.processList(alldata)
                }, 10000)
            }
        },
        mounted(){
            axios.get('http://ss6api.ppa-mhu.net/ppa-employee-api/api/cico/listUnit/hd')
                .then(res => this.loadData(res.data))
        }
    }
</script>

<style scoped>
    @keyframes showdown{
        0% {
            transform: translateY(-60px);
        }
        100%{
            transform: translateY(0);
        }
    }
    .showdown{
        animation-name: showdown;
        animation-duration: 1.5s
    }
    .labs{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 6px;

        margin-right: 40px;
    }
    .labs>i{
        color: #2c3e50;
        transform: translate(0,2px);
        margin-right: 5px;
    }
    .labs>p{
        font-size: 1.3rem;
    }
</style>