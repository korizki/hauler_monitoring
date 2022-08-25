<template>
    <div class="card" :class="isOperated ? 'rd' : 'bd' ">
        <h2 :class="isOperated ? 'ready' : 'breakdown' " ><i class="fi fi-rr-truck-moving"></i> {{ CN }} 
            <span v-if="isOperated">
                <span v-if="!isSameOpt" class="badge backup"><i class="fi fi-rr-portrait"></i> Backup Operator</span> <span class="badge main" v-else><i class="fi fi-rr-trophy"></i> Main Operator</span>
            </span>
        </h2>
        <div class="botinfo">
            <p><i class="fi fi-rr-comment-user"></i></p>
            <div v-if="isOperated">
                <p class="operatedby" :class="{animate : !isSameOpt}">{{ generateName }}</p>
                <p class="setting">{{ generateNames }}</p>
            </div>
            <div v-else>
                <p class="waiting">Waiting Operator</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props: ['equipmentData'],
        data(props){
            return {
                CN : props.equipmentData.CN,
                isOperated : props.equipmentData.isOperated,
                actualOpt : props.equipmentData.actualOperator.nama,
                settingOpt : props.equipmentData.settingOperator.nama ? props.equipmentData.settingOperator.nama : '-',
                isSameOpt : props.equipmentData.actualOperator.nama === props.equipmentData.settingOperator.nama ? true : false 
            }
        },
        computed : {
            generateName(){
                return this.actualOpt.length > 16 ? this.actualOpt.substring(0,16)+'...' : this.actualOpt
            },
            generateNames(){
                return this.settingOpt.length > 16 ? this.settingOpt.substring(0,16)+'...' : this.settingOpt
            }
        }
    }
</script>

<style scoped>
    .card{
        border-radius: 5px;
        width: 380px;
    }
    .card>h2{
        padding: 10px 20px;
        outline: 1px solid #ddd;
        border: none;
        text-align: left;
        border-radius: 4px 4px 0 0;
    }
    .card>h2>i{
        display: inline-block;
        margin-right: 6px;
        transform: translateY(2px);
    }
    .bd{
        outline: 1px solid crimson;
    }
    .rd{
        outline: 1px solid limegreen;
    }
    .botinfo{
        background: white;
        padding: 0px 16px;
        gap: 16px;
        display: flex;
        border-radius: 0 0 5px 5px;
    }
    .botinfo>div{
        flex: 1;
        max-height: 70px;
        overflow: hidden;
    }
    .botinfo>p>i{
        font-size: 2rem;
        display: inline-block;
        margin-top: 20px;
        color: rgb(114, 114, 114);
    }
    .botinfo>div>p{
        margin: 16px 0;
        padding: 8px 16px;
        font-size: 1.3rem;
        font-weight: 600;
        border-radius: 5px;
        transition: all 1s ease;
    }
    .ready{
        background: limegreen;
        border: 1px solid limegreen;
        color: white;
    }
    .breakdown{
        background: crimson;
        border: 1px solid crimson;
        color: white;
    }
    .animate{
        animation-name: updown;
        animation-iteration-count: infinite;
        animation-duration: 10s;
    }
    .botinfo>div>.operatedby{
        background: rgba(50, 205, 50, 0.1);
        color: limegreen;
        border: 1px solid limegreen;
    }
    .botinfo>div>.setting{
        background: rgba(220, 20, 60, 0.1);
        color: crimson;
        border: 1px solid crimson;
    }
    .waiting{
        color: crimson;
        font-size: 1.5rem !important;
    }
    .badge{
        padding: 6px 8px;
        border-radius: 4px;
        font-size: 0.7rem;
        font-weight: 600;
        background: white;
        transform: translateY(2px);
        float: right;
    }
    .badge>i{
        display: inline-block;
        margin-right: 4px;
        transform: translateY(1px);
    }
    .main{
        color: white;
        background: rgb(12, 129, 12)
    }
    .backup{
        color: rgb(227, 50, 50);
    }
    @keyframes updown{
        0% {margin-top: 16px}
        10% {margin-top: -45px}
        50% {margin-top: -45px}
        60% {margin-top: 16px}
        100% {margin-top: 16px}
    }
</style>