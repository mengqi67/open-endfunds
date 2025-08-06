<!--
 * @Author: ymq
 * @Date: 2025-08-03 17:36:22
 * @LastEditTime: 2025-08-04 17:18:55
 * @LastEditors: ymq
 * @Description: 
-->
<template>
    <div class="page-main">
        <div class="page-title">添加兑付方案</div>
        <Card :bordered="false" shadow> 
            <div class="sub-title">基本信息</div>
            <Form :model="formItem" :label-width="120">
                <FormItem label="产品代码">
                    <Input  v-model="formItem.input" placeholder="10926000003" readonly></Input>
                </FormItem>
                <FormItem label="产品全称">
                    <Input  v-model="formItem.input" placeholder="债券投资计划1" readonly></Input>
                </FormItem>
                <FormItem label="兑付类型">
                   <Select v-model="formItem.select" multiple>
                        <Option value="chuangxin">到期兑付</Option>
                        <Option value="jishi">提前兑付</Option>
                        <Option value="tongchuang">行使选择权</Option>                        
                    </Select>
                </FormItem>
                <FormItem label="实际兑付日">
                    <Input v-model="formItem.input" placeholder="请输入"></Input>
                </FormItem> 
                <FormItem label="备注">
                    <Input v-model="formItem.input" placeholder="请输入"></Input>
                </FormItem>
                <div class="sub-title">附件列表</div>
                <FormItem label="上传附件">
                    <Button style="margin-left: 10px;" @click="showUploadModal">上传</Button>
                </FormItem>                
                <FormItem>
                    <Button type="primary" @click="submit">添加</Button>
                    <Button style="margin-left: 8px" @click="goBack">返回上一页</Button>
                </FormItem>
            </Form>
        </Card>
        <Modal
            v-model="modal"
            title="上传"
            @on-ok="ok"
            @on-cancel="cancel">
            <Form>
                <FormItem label="上传附件">
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
import { Card, Input, Button, Form, FormItem,Modal, Select, Option, Message, Upload } from 'view-ui-plus'
import { useRouter} from 'vue-router'
import {ref} from 'vue'
const formItem = {
    input: '',
    select: '',
    radio: 'male',
    checkbox: [],
    switch: true,
    date: '',
    time: '',
    slider: [20, 50],
    textarea: ''
}
const router = useRouter()
const fileName = ref('')
const loading = ref(false)
const modal = ref(false)
function handleUpload(file:any) {
    fileName.value = file.name
    // console.log(file.value);
    return false
}
function showUploadModal() {
    modal.value = true
}
function submit() {
    Message.success('添加成功')
    setTimeout(() => {
        goBack()
    }, 1000);
}
function goBack() {
    router.go(-1)
}
function ok() {
    Message.success('上传成功')
    modal.value = false
}
function cancel() {
    modal.value = false
}
</script>

<style lang="scss" scoped>
/* .page-title {
    padding: 10px 0px;
    font-weight: bold;
    font-size: 18px;
} */

</style>