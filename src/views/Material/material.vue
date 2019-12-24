<template>
  <div>
    <el-card>
      <el-breadcrumb separator-class="el-icon-arrow-right" slot="header">
        <breadcrumb>
          <template slot="nowpage">素材管理</template>
        </breadcrumb>
      </el-breadcrumb>
      <el-row type="flex" justify="end" style="margin-right:20px;">
        <el-upload :http-request="upload" :show-file-list="false" action>
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-row>
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
                    :style="{color: item.is_collected?'rgb(206, 72, 72)':''}"
                    @click="collect(item)"
                  ></div>
                  <div
                    class="el-icon-delete"
                    style="font-size:25px;flex:1;text-align: center;line-height:40px;"
                    @click="deleteimg(item)"
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
                    style="font-size:25px;flex:1;text-align: center;line-height:40px;"
                    :style="{color: item.is_collected?'rgb(206, 72, 72)':''}"
                    @click="collect(item)"
                  ></div>
                  <div
                    class="el-icon-delete"
                    style="font-size:25px;flex:1;text-align: center;line-height:40px;"
                    @click="deleteimg(item)"
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
    deleteimg (row) {
      this.$axios({
        url: `user/images/${row.id}`,
        method: 'delete'
      }).catch(res => {
        this.getimage()
      })
    },
    collect (row) {
      this.$axios({
        url: `user/images/${row.id}`,
        method: 'put',
        data: {
          collect: !row.is_collected
        }
      }).then(res => {
        this.getimage()
      })
    },
    upload (data) {
      let imagedata = new FormData()
      imagedata.append('image', data.file)

      this.$axios({
        url: 'user/images',
        method: 'post',
        data: imagedata
      }).then(res => {
        this.$message({
          type: 'success',
          message: '上传成功'
        })
        this.getimage()
      })
    },
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
.el-icon-star-on {
  cursor: pointer;
}

.el-icon-delete {
  cursor: pointer;
}
</style>
