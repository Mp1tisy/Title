<template>
  <div>
    <el-card>
      <el-breadcrumb separator-class="el-icon-arrow-right" slot="header">
        <breadcrumb>
          <template slot="nowpage">素材管理</template>
        </breadcrumb>
      </el-breadcrumb>
      <el-tabs v-model="activeName" @tab-click="tab">
        <el-tab-pane label="全部" name="all">
          <el-row>
            <el-col
              :span="3"
              v-for="(item, index) in allimage"
              :key="index"
              style="margin-right:60px;margin-top:40px;margin-bottom:40px;"
            >
              <el-card :body-style="{ padding: '0px' }">
                <img :src="item.url" class="image" />
                <div class="bottompic">
                  <div
                    class="el-icon-star-on"
                    style="font-size:25px;flex:1;text-align: center;line-height:40px;"
                  ></div>
                  <div
                    class="el-icon-delete"
                    style="font-size:25px;flex:1;text-align: center;line-height:40px;"
                  ></div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="收藏" name="collect">
          <el-row>
            <el-col
              :span="3"
              v-for="(item, index) in allimage"
              :key="index"
              style="margin-right:60px;margin-top:40px;margin-bottom:40px;"
            >
              <el-card :body-style="{ padding: '0px' }">
                <img :src="item.url" class="image" />
                <div class="bottompic">
                  <div
                    class="el-icon-star-on"
                    style="font-size:25px;flex:1;text-align: center;line-height:40px;color: rgb(206, 72, 72);"
                  ></div>
                  <div
                    class="el-icon-delete"
                    style="font-size:25px;flex:1;text-align: center;line-height:40px;"
                  ></div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="pagesize"
        style="text-align: center;margin-top:20px;"
        @current-change="changepage"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all',
      allimage: [],
      total: 0,
      pagesize: 18,
      currentpage: 1
    }
  },
  methods: {
    getimage () {
      this.$axios({
        url: 'user/images',
        params: {
          per_page: this.pagesize,
          page: this.currentpage,
          collect: this.activeName === 'collect'
        }
      }).then(res => {
        this.allimage = res.data.results
        console.log(res.data.total_count)
        this.total = res.data.total_count
      })
    },
    changepage (changepage) {
      this.currentpage = changepage
      this.getimage()
    },
    tab () {
      this.currentpage = 1
      this.getimage()
    }
  },
  created () {
    this.getimage()
  }
}
</script>

<style lang='less' scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  height: 150px;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.bottompic {
  background-color: #f4f5f6;
  height: 40px;
  width: 100%;
  display: flex;
}
</style>
