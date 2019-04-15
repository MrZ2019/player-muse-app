<template>
  <div id="app">
    <mu-appbar title="首页">
      <mu-icon-button icon="menu" slot="left" @click.native="open = true" />
      <mu-icon-menu icon="more_vert" slot="right">
        <mu-menu-item title="菜单 1" />
        <mu-menu-item title="菜单 2" />
        <mu-menu-item title="菜单 3" />
        <mu-menu-item title="菜单 4" />
        <mu-menu-item title="菜单 5" />
      </mu-icon-menu>
    </mu-appbar>
    
    <div class="main-slot">
      <router-view></router-view>

    </div>

    <mu-drawer :open="open" :docked="docked" @close="toggle()">
      <mu-list @itemClick="docked ? '' : toggle()">
        <mu-list-item title="Menu Item 1"/>
        <mu-list-item title="Menu Item 2"/>
        <mu-list-item title="Menu Item 3"/>
        <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
      </mu-list>
    </mu-drawer>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      docked: false,
      open: false
    }
  },

  methods: {

    toggle() {
      this.open = !this.open
    }
  }
}

</script>
<style lang='scss'>
#app {
  .mu-appbar {
    position: fixed;
    top: 0;
  }

  .main-slot {
    margin-top: 56px;
  }

}


</style>
