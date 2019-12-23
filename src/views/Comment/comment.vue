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
            <el-button
              type="text"
              size="small"
              @click="commentswitch(obj.row)"
            >{{ obj.row.comment_status ? '关闭评论' : '打开评论' }}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="page.total"
        :page-size="page.pagesize"
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
      tableData: [],
      page: {
        total: 0,
        pagesize: 10,
        currentpage: 1
      }
    }
  },
  created () {
    this.commentshow()
  },
  methods: {
    commentshow () {
      this.$axios({
        url: '/articles',
        params: {
          response_type: 'comment',
          page: this.page.currentpage,
          per_page: this.page.pagesize
        }
      }).then(res => {
        this.tableData = res.data.results
        this.page.total = res.data.total_count
      })
    },
    boolchange (row, column, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    },
    changepage (changepage) {
      this.page.currentpage = changepage
      this.commentshow()
    },
    commentswitch (rowdata) {
      let status = rowdata.comment_status ? '关闭评论' : '打开评论'
      this.$confirm(`确认要${status}吗？`)
        .then(res => {
          this.$axios({
            url: '/comments/status',
            method: 'put',
            params: {
              article_id: rowdata.id.toString()
            },
            data: {
              allow_comment: !rowdata.comment_status
            }
          }).then(res => {
            this.$message({
              type: 'success',
              message: '操作成功'
            })
          })
        })
        .catch(res => {
          this.$message({
            type: 'error',
            message: '取消操作'
          })
        })
    }
  }
}
</script>

<style>
</style>
