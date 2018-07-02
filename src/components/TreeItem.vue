<template>
  <div>
    <div class="tree-item" v-for="(item, index) in data">
      --{{item.name}}
      <span @click="showChild(item)" v-if="item.children">
        <i class="fa" :class="item.show ? 'fa-angle-up' : 'fa-angle-down'"></i>
      </span>
      <tree-item v-if="item.show" :data="item.children"></tree-item>
    </div>
  </div>
</template>

<script>
export default {
    name: "TreeItem",
    props: {
        data: {
            type: Object,
            value: []
        }
    },
    methods: {
        showChild(item) {
            item.show ? (item.show = false) : (item.show = true);
            this.data = Object.assign([], this.data);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.tree {
    .tree-item {
        margin-left: 30px;
    }
}
</style>
