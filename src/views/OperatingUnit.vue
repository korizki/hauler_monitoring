<template>
    <div class="top">
        <Navbar />
        <h1 class="header left">Operated Unit | <span class="minis" v-if="listEq.length">Total {{ listEq.length }} unit</span></h1>
        <div class="outbox">
            <div class="maincontent">
                <UnitCard v-for="equipment in listEq" :equipmentData="equipment" :key="equipment.CN" />
            </div>
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
                listEq : []
            }
        },
        methods: {
            loadData(data){
                let filtered = data.filter(item => item.isOperated === true)
                this.listEq = filtered
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
    .maincontent{
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 40px;
        gap: 30px 50px;
        justify-content: center;
    }
    .minis{
        font-weight: 300;
        font-size: 1rem;
        color: rgb(147, 147, 147);
    }

</style>