<template>
  <div>
    <div class="tree" v-for="(item, index) in data">
      --{{item.name}}
      <span @click="showChild(item)">
        <i class="fa" :class="item.show ? 'fa-angle-up' : 'fa-angle-down'"></i>
      </span>
      <tree-item v-if="item.show" :data="item.children"></tree-item>
    </div>
  </div>
</template>

<script>
import {tree} from '../network/mock/tree'
import TreeItem from './TreeItem.vue'
export default {
  name: 'TreeView',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: []
    }
  },
  created() {
    this.getTreeList()
  },
  components:{
    TreeItem
  },
  methods: {
    getTreeList() {
      this.data = tree.data;
    },
    showChild(item) {
      item.show ? item.show = false : item.show = true
      this.data = Object.assign({}, this.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.tree{
  .tree-item{
    margin-left: 30px;
  }
}
</style>
