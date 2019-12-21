<template>
  <div>
    <el-card>
      <el-breadcrumb separator-class="el-icon-arrow-right" slot="header">
        <breadcrumb>
          <template slot="nowpage">评论列表</template>
        </breadcrumb>
      </el-breadcrumb>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="title" label="标题" width="1021"></el-table-column>
        <el-table-column :formatter="boolchange" prop="comment_status" label="评论状态" width="120"></el-table-column>
        <el-table-column prop="total_comment_count" label="总评论数" width="120"></el-table-column>
        <el-table-column prop="fans_comment_count" label="粉丝评论数" width="120"></el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="obj">
            <el-button type="text" size="small">修改</el-button>
            <el-button type="text" size="small">{{ obj.row.comment_status ? '关闭评论' : '打开评论' }}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.$axios({
      url: '/articles',
      params: {
        response_type: 'comment'
      }
    }).then(res => {
      this.tableData = res.data.results
    })
  },
  methods: {
    boolchange (row, column, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    }
  }
}
</script>

<style>
</style>
