<template>
  <div>
    <el-card>
      <el-breadcrumb separator-class="el-icon-arrow-right" slot="header">
        <breadcrumb>
          <template slot="nowpage">内容列表</template>
        </breadcrumb>
      </el-breadcrumb>
      <el-row>
        <el-col :span="2" style="font-size:14px;margin-bottom:30px;margin-top:2px;">文章状态：</el-col>
        <el-col :span="10">
          <el-radio-group v-model="formdata.status" @change="conditionchange">
            <el-radio :label="100">全部</el-radio>
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">待审核</el-radio>
            <el-radio :label="2">审核通过</el-radio>
            <el-radio :label="3">审核失败</el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="2" style="font-size:14px;margin-bottom:30px;margin-top:10px;">频道列表：</el-col>
        <el-col :span="10">
          <el-select v-model="formdata.channel_id" placeholder="请选择" @change="conditionchange">
            <el-option
              v-for="item in channels"
              :key="item.value"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="2" style="font-size:14px;margin-top:10px;">时间选择：</el-col>
        <el-col :span="10">
          <el-date-picker
            v-model="date"
            type="datetimerange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd"
            @change="conditionchange"
          ></el-date-picker>
        </el-col>
      </el-row>
    </el-card>
    <el-card style="margin-top:10px;">
      <el-row class="total">
        <span>共找到{{ total }}条符合条件的内容</span>
      </el-row>
      <el-row
        v-for="item in articles"
        :key="item.id.toString()"
        style="border-bottom: 1px solid #f2f3f5;padding:10px 0;"
      >
        <el-col :span="0.5">
          <div class="pic">
            <img :src="item.cover.images[0] ? item.cover.images[0] : defaultpic" alt />
          </div>
        </el-col>
        <el-col :span="19" style="margin-left:10px;">
          <div>{{item.title}}</div>
          <div style="margin-top:10px;">
            <el-tag :type="item.status | filtertype">{{item.status | filterstatus}}</el-tag>
          </div>
          <div style="font-size:12px;color:#999;margin-top:10px;">{{item.pubdate}}</div>
        </el-col>
        <el-col :span="2">
          <el-row>
            <span style="font-size:12px;cursor:pointer;">
              <i class="el-icon-edit"></i>修改
            </span>
            <span style="font-size:12px; margin-left:20px;cursor:pointer;">
              <i class="el-icon-delete"></i>删除
            </span>
          </el-row>
        </el-col>
      </el-row>
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
      formdata: {
        status: 100,
        channel_id: null
      },
      channels: [],
      date: [],
      articles: [],
      defaultpic: require('../../assets/logo.png'),
      total: 100,
      pagesize: 10,
      currentpage: 1
    }
  },
  methods: {
    changepage (changepage) {
      this.currentpage = changepage
      this.datacondition()
    },
    conditionchange () {
      this.currentpage = 1
      this.datacondition()
    },
    getchannel () {
      this.$axios({
        url: '/channels'
      }).then(res => {
        this.channels = res.data.channels
      })
    },
    datacondition () {
      let params = {
        page: this.currentpage,
        per_page: this.pagesize,
        status: this.formdata.status === 100 ? null : this.formdata.status,
        channel_id: this.formdata.channel_id,
        begin_pubdate: this.date[0] ? this.date[0] : null,
        end_pubdate: this.date[1] ? this.date[1] : null
      }
      this.getarticle(params)
    },
    getarticle (params) {
      this.$axios({
        url: '/articles',
        params: params
      }).then(res => {
        console.log(res.data)
        this.articles = res.data.results
        this.total = res.data.total_count
      })
    }
  },
  created () {
    this.getchannel()
    this.datacondition()
  },
  filters: {
    filterstatus (value) {
      switch (value) {
        case 0:
          return '草稿'
        case 1:
          return '待审核'
        case 2:
          return '已发表'
        case 3:
          return '审核失败'
        default:
          break
      }
    },
    filtertype (value) {
      switch (value) {
        case 0:
          return 'warning'
        case 1:
          return 'info'
        case 2:
          return ''
        case 3:
          return 'danger'
        default:
          break
      }
    }
  }
}
</script>

<style lang="less" scoped>
.pic {
  height: 100px;
  width: 150px;
  img {
    height: 100%;
    width: 100%;
  }
}
.total {
      height: 40px;
      border-bottom: 1px dashed #ccc;
      font-size: 14px;
      margin-bottom:10px;
  }
</style>
