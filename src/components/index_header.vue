<template>
  <div class="index_header">
    <span @click="selectC">
      {{place}}
      <i class="el-icon-arrow-down" style="margin-left: 0.5625rem"></i>
    </span>
    <router-link to="/search" class="search-div" index="1">
      <div class="co-search-input">
        <i class="el-icon-search"></i>
        {{searchText}}
      </div>
    </router-link>
    <More></More>
    <selectCities :open="msg" @myevent="changeOPen"></selectCities>
  </div>
</template>

<script>
import More from "@/components/More.vue";
import selectCities from "@/components/selectCities.vue";
export default {
  data() {
    return {
      msg:"",
      place: "全国",
      searchText: " 新车 抢免万元月供",
      isCollapse: true
    };
  },
  components: {
    More,
    selectCities
  },
  methods: {
    selectC() {
      this.msg = "isopen";
    },
		changeOPen(value){
			this.msg=value;
		}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration-line: none;
}
.index_header {
  font-size: 0.875rem;
  color: #1a1a1a;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 3.375rem;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #fff;
  padding: 0 1.25rem;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 25rem;
}

.search-div {
  padding: 0 0.75rem;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.co-search-input {
  background: #f2f2f2;
  border-radius: 1.25rem;
  color: #999;
  height: 2.14rem;
  line-height: 2.14rem;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
</style>
