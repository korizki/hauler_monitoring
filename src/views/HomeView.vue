<template>
  <div >
    <Navbar />
    <h1 class="header top">PPA Fleet Information</h1>
    <div class="outer">
      <div>
        <img src="../assets/waiting.svg" alt="illustration" widt="250" height="250">
        <div>
          <h2>Unit Ready - Waiting Operator</h2>
          <p>Information all unit with status waiting operator.</p>
          <router-link :to="{name : 'waitingoperator'}"><i class="fi fi-rr-hourglass-end"></i> Check List Unit</router-link>
        </div>
      </div>
      <div>
        <div>
          <h2>Unit Ready - Operated</h2>
          <p>Information all unit with status operated.</p>
          <router-link :to="{name: 'operatingunit'}"><i class="fi fi-rr-settings"></i> List Unit Operated</router-link>
        </div>
        <img src="../assets/operated.svg" alt="illustration" widt="250" height="250">
      </div>
      <div>
        <img src="../assets/waiting.svg" alt="illustration" widt="250" height="250">
        <div>
          <h2>Unit Ready - All Unit</h2>
          <p>Information list all unit.</p>
          <router-link :to="{name: 'allunit'}"><i class="fi fi-rr-shield-check"></i> Check List Unit</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
export default {
  name: 'HomeView',
  components: {Navbar}
}
</script>
<style>
  .outer{
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 24px 0;
  }
  .outer>div{
    display: flex;
    justify-content: center;
    gap: 100px;
    margin: 16px 0;
    border-bottom: 1px solid #ddd;
    padding: 30px;
  }
  .outer>div>div>h2{
    margin: 24px 0;
  }
  .outer>div>div>a{
    display: block;
    margin: 12px 0;
    color: white;
    background: crimson;
    padding: 12px 30px;
    border-radius: 6px;
  }
  .outer>div>div>a>i{
    display: inline-block;
    margin-right: 6px;
    transform: translateY(1px);
  }
  .outer>div>div>a:hover{
    box-shadow: 0 0 8px 0 crimson;
  }
  .header{
    display: inline-block;
    padding-bottom: 4px;
  }
  .top{
    margin-top: 90px;
  }
</style>
