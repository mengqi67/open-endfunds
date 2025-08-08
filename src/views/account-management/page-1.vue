<!--
 * @Author: ymq
 * @Date: 2025-08-04 12:22:21
 * @LastEditTime: 2025-08-04 17:25:36
 * @LastEditors: ymq
 * @Description: 
-->
<template>
    <div class="page-main">
        <div class="page-title">岗位管理</div>
        <Card :bordered="false" shadow>
            <div>
                <Input v-model="fundName" icon="ios-search" placeholder="岗位名称" style="width: 200px" />
                <Button type="text" icon="ios-funnel-outline" @click="refresh">筛选</Button>
            </div>
            <div class="option-wrap">
                <div class="left">
                    
                </div>
                <div class="right">
                    <router-link to="/account-management/new"><Button type="primary">新增</Button></router-link>                   
                    <Button style="margin-left: 10px;" @click="exportFn">导出</Button>
                    <Button style="margin-left: 10px;" @click="refresh">刷新</Button>
                </div>
            </div>            
             <Table :columns="columns" :data="data" :loading="loading">
                <template #operation="{ row }">
                    <div>
                        <span style="color: #2d8cf0;cursor: pointer;" @click="exportFn">查看权限</span>
                        <span style="margin: 0 5px">|</span>
                        <span style="color: #2d8cf0;cursor: pointer;" @click="exportFn">变更</span>    
                        <span style="margin: 0 5px">|</span>
                        <span style="color: #2d8cf0;cursor: pointer;" @click="exportFn">停用</span>     
                        <span style="margin: 0 5px">|</span>
                        <span style="color: #2d8cf0;cursor: pointer;" @click="handleDelete(row)">注销</span>              
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
import { getList, deleteRow } from '@/service/api/account'
import { columns} from './data'

const fundName = ref('')
const router = useRouter()
const loading = ref(false)
const modal = ref(false)
const fileName = ref('')
const data = ref<any[]>([])
const listTotal = ref(0)


async function init() {
        console.log('re');
    loading.value = true
    const res = await getList({
        name: fundName.value
    })
    console.log(res);
    data.value = res.data
    listTotal.value = res.data.length || 0
    loading.value = false
}
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
       // console.log('123');
    Message.error('暂无权限，请联系管理员！')
}
function handleDelete(row:any) {
    console.log(row);
    Modal.confirm({
        title: '确认注销吗？',
        content: '注销后将无法恢复',
        onOk: async () => {
            const res = await deleteRow({
                id: row.positionid
            })   
            console.log(res.error);        
            if (!res.error) {
                
                Message.success('撤销成功')
                init()
            }
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