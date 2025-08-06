<!--
 * @Author: ymq
 * @Date: 2025-08-04 12:22:21
 * @LastEditTime: 2025-08-04 17:25:36
 * @LastEditors: ymq
 * @Description: 
-->
<template>
    <div class="page-main">
        <div class="page-title">份额查询</div>
        <Card :bordered="false" shadow>
            <div class="container">
                <div class="box">
                持有人账户号码：<Input v-model="fundName"  style="width: 200px" />
                
                </div>
                <div class="box">
                持有人账户全称：<Input v-model="fundName"  style="width: 200px" />
               
                </div>
                <div  class="box">               
                 产品代码：<Input v-model="fundName" style="width: 200px" />
                </div>
                
            </div>
             <div class="container">
                <div class="box">
                产品全称：<Input v-model="fundName"   style="width: 200px" />
                
                </div>
                <div class="box">
                账户所属人：<Input v-model="fundName"   style="width: 200px" />
               
                </div>
                <div  class="box">               
                受托管理人/受托人：<Input v-model="fundName"  style="width: 200px" />
                </div>
                
            </div>
             <div class="container">
                <div class="box">
                投资管理人：<Input v-model="fundName"   style="width: 200px" />
                
                </div>
                 <div class="box">
                托管人：<Input v-model="fundName"   style="width: 200px" />
                
                </div>
               
            </div>
            <div class="option-wrap">
                <div class="left">
                    <div class="sort-wrap" @click="refresh">
                        <div class="arrow-wrap">
                           
                        </div>
                    </div>
                    
                </div>
                <div class="right">
                    <Button type="primary">查询 </Button>                
                    <Button style="margin-left: 10px;" @click="exportFn">重置</Button>                  
                    <Button style="margin-left: 10px;" @click="exportFn">导出</Button>
                </div>
            </div>
            <Table :columns="columns" :data="data" :loading="loading"></Table>
            <br>
            <div class="page-wrap"><Page :total="0" show-total/></div>
        </Card>
        <Modal
            v-model="modal"
            title="导入"
            @on-ok="ok"
            @on-cancel="cancel">
            <Form>
                <FormItem label="上传文件">
                    <Upload action="" :before-upload="handleUpload">
                        <Button icon="ios-cloud-upload-outline">上传文件</Button>
                    </Upload>
                    <div> {{ fileName }} </div>
                </FormItem>
            </Form>
        </Modal>
    </div>
</template>

<script setup lang="ts">
import { Card, Input, Button, Table, Page, Modal, Form, FormItem, Upload, Message } from 'view-ui-plus'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { columns, data } from './data-2'

const fundName = ref('')
const router = useRouter()
const loading = ref(false)
const modal = ref(false)
const fileName = ref('')

function goDetail() {
    router.push('/set-project/detail')
}
function refresh() {
    loading.value = true
    setTimeout(() => {
        loading.value = false
    }, 1500);
}
function showUploadModal() {
    modal.value = true
}
function handleUpload(file:any) {
    fileName.value = file.name
    // console.log(file.value);
    return false
}
function ok() {
    Message.success('导入成功')
    modal.value = false
}
function cancel() {
    modal.value = false
}
function exportFn() {
    Message.success('暂无权限，请联系管理员！')
}
</script>

<style lang="scss" scoped>
.option-wrap{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 10px;
    .left{
        display: flex;
    }
}
.sort-wrap{
    display: flex;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
}
.arrow-wrap{
    display: flex;
    flex-direction: column;
    .arrow-up{
        margin-bottom: -6px;
    }
}
.page-wrap{
    text-align: center;
}
.container {
    overflow: auto; /* 清除浮动 */
  }
  .box {
    float: left;
    width: 25%; /* 每个div占据30%的宽度 */
    margin-right: 5%; /* 右侧外边距 */
    margin-bottom: 15px; /* 右侧外边距 */
    box-sizing: border-box; /* 包括padding和border在内的宽度计算 */
    text-align: right;
  }
  .box:last-child {
    margin-right: 0; /* 最后一个div不设置右侧外边距 */
  }
</style>