<!--
 * @Author: ymq
 * @Date: 2025-08-04 12:22:21
 * @LastEditTime: 2025-08-06 15:43:14
 * @LastEditors: ymq
 * @Description: 
-->
<template>
    <div class="page-main">
        <div class="page-title">登记管理</div>
        <Card :bordered="false" shadow>
            
            <div>
                <Input v-model="fundName" icon="ios-search" placeholder="基金简称" style="width: 200px" />
                <Button type="text" icon="ios-funnel-outline" @click="init">筛选</Button>
            </div>
        
            <div class="option-wrap">
                <div class="left">
                    <div class="sort-wrap" @click="init">排序：创建时间
                        <div class="arrow-wrap">
                            <Icon type="md-arrow-dropup" class="arrow-up"/>
                            <Icon type="md-arrow-dropdown" color="#2d8cf0"/>
                        </div>
                    </div>
                    <Button type="text" icon="md-refresh" @click="init">刷新</Button>
                </div>
                <div class="right">
                    <router-link to="/project-reserve/new"><Button type="primary">新建产品</Button></router-link>
                    <Button style="margin-left: 10px;" @click="showUploadModal">登记信息导入</Button>
                    <Button style="margin-left: 10px;" @click="exportFn">初始登记</Button>
                </div>
            </div>
            <Table :columns="columns" :data="data" :loading="loading">
                <template #operation="{ row }">
                    <div>
                        <span style="color: #2d8cf0;cursor: pointer;" @click="goDetail">查看</span>
                        <span style="margin: 0 5px">|</span>
                        <span style="color: #2d8cf0;cursor: pointer;" @click="handleDelete(row)">撤销</span>
                        <span style="margin: 0 5px">|</span>
                        <span style="color: #2d8cf0;cursor: pointer;" @click="handleEdit(row)">变更</span>
                    </div>
                </template>
            </Table>
            <br>
            <div class="page-wrap"><Page :total="listTotal" show-total/></div>
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
import { getList, deleteRow } from '@/service/api/project-reserve'
import { columns } from './data'

const fundName = ref('')
const router = useRouter()
const loading = ref(false)
const modal = ref(false)
const fileName = ref('')
const data = ref<any[]>([])
const listTotal = ref(0)

async function init() {
    loading.value = true
    const res = await getList({
        name: fundName.value
    })
    // console.log(res);
    data.value = res.data
    listTotal.value = res.data.length || 0
    loading.value = false
}

function goDetail() {
    router.push('/project-reserve/detail')
}
// function refresh() {
//     loading.value = true
//     setTimeout(() => {
//         loading.value = false
//     }, 1500);
// }
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
    Message.error('暂无权限，请联系管理员！')
}

function handleDelete(row:any) {
    console.log(row);
    Modal.confirm({
        title: '确认撤销吗？',
        content: '撤销后将无法恢复',
        onOk: async () => {
            const res = await deleteRow({
                id: row.id
            })
            if (!res.error) {
                Message.success('撤销成功')
                init()
            }
        }
    })
}

function handleEdit(row:any) {
    router.push({
        path: '/project-reserve/edit',
        query: {
            id: row.id
        }
    })
}

init()

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