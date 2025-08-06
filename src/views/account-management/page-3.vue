<!--
 * @Author: ymq
 * @Date: 2025-08-04 12:22:21
 * @LastEditTime: 2025-08-04 17:26:13
 * @LastEditors: ymq
 * @Description: 
-->
<template>
    <div class="page-main">
        <div class="page-title">机构信息管理</div>
        <Card :bordered="false" shadow>
            <div>
                <Input v-model="fundName" icon="ios-search" placeholder="基金简称" style="width: 200px" />
                <Button type="text" icon="ios-funnel-outline" @click="refresh">筛选</Button>
            </div>
            <div class="option-wrap">
                <div class="left">
                    <div class="sort-wrap" @click="refresh">排序：创建时间
                        <div class="arrow-wrap">
                            <Icon type="md-arrow-dropup" class="arrow-up"/>
                            <Icon type="md-arrow-dropdown" color="#2d8cf0"/>
                        </div>
                    </div>
                    <Button type="text" icon="md-refresh" @click="refresh">刷新</Button>
                </div>
                <div class="right">
                    <router-link to="/compliance-review/new"><Button type="primary">新建</Button></router-link>
                    <Button style="margin-left: 10px;" @click="showUploadModal">导入</Button>
                    <Button style="margin-left: 10px;" @click="exportFn">导出</Button>
                </div>
            </div>
            <Table :columns="columns" :data="data" :loading="loading" @on-row-click="goDetail"></Table>
            <br>
            <div class="page-wrap"><Page :total="5" show-total/></div>
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
import { Card, Input, Button, Icon, Table, Page, Modal, Form, FormItem, Upload, Message } from 'view-ui-plus'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { columns, data } from './data'

const fundName = ref('')
const router = useRouter()
const loading = ref(false)
const modal = ref(false)
const fileName = ref('')

function goDetail() {
    router.push('/compliance-review/detail')
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
    Message.success('已创建导出任务，请稍后查看')
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
</style>