<!--
 * @Author: ymq
 * @Date: 2025-08-03 17:36:22
 * @LastEditTime: 2025-08-06 18:30:13
 * @LastEditors: ymq
 * @Description: 
-->
<template>
    <div class="page-main">
        <div class="page-title">新建产品</div>
        <Card :bordered="false" shadow> 
            <div class="sub-title">基本信息</div>
            <Form ref="formRef" :model="formItem" :label-width="120" :rules="ruleValidate">
                <FormItem label="产品代码" prop="fundNo">
                    <Input v-model="formItem.fundNo" placeholder="请输入"></Input>
                </FormItem>
                <FormItem label="产品全称" prop="name">
                    <Input v-model="formItem.name" placeholder="请输入"></Input>
                </FormItem>
                <FormItem label="发行场所" prop="place">
                   <Select v-model="formItem.place">
                        <Option value="场内">场内</Option>
                        <Option value="场外">场外</Option>                                         
                    </Select>
                </FormItem>
                
                <FormItem label="产品注册日期" prop="registrationDate">
                    <DatePicker type="date" :model-value="formItem.registrationDate" placeholder="请选择" @on-change="handelDateChange"/>
                    <!-- <Input v-model="formItem.registrationDate" placeholder="请输入"></Input> -->
                </FormItem>
                <FormItem label="注册规模" prop="redemptionSize"> 
                    <Input v-model="formItem.redemptionSize" placeholder="请输入"></Input>
                </FormItem>
                <FormItem label="最低募集金额" prop="redemptionAmount">
                    <Input v-model="formItem.redemptionAmount" placeholder="请输入"></Input>
                </FormItem>
               <FormItem label="产品期限" prop="productTerm">
                    <DatePicker type="date" :model-value="formItem.productTerm" placeholder="请选择" @on-change="handelDateChange1"/>
                    <!-- <Input v-model="formItem.registrationDate" placeholder="请输入"></Input> -->
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
import { Card, Input, Button, Form, FormItem,Select, Option, Modal, DatePicker, Message, Upload, } from 'view-ui-plus'
import { useRouter } from 'vue-router'
import { ref, reactive } from 'vue'
import { add } from '@/service/api/project-reserve'

const formRef = ref()
const formItem = reactive({
    fundNo: '',
	name: '',
	registrationDate: '',
	redemptionSize: '',
	redemptionAmount: '',
	detail: '',
	notes: '',
    place: '',
    productTerm: ''
})
const router = useRouter()
const fileName = ref('')
const modal = ref(false)
const ruleValidate = {
    fundNo: [
        { required: true, message: '请输入产品代码', trigger: 'change' }
    ],
    name: [
        { required: true, message: '请输入产品全称', trigger: 'change' }
    ],
    registrationDate: [
        { required: true, message: '请选择注册日期', trigger: 'change' }
    ],
    productTerm: [
        { required: true, message: '请选择产品期限', trigger: 'change' }
    ],
    redemptionSize: [
        { required: true, message: '请输入赎回总份额', trigger: 'change' }
    ],
    redemptionAmount: [
        { required: true, message: '请输入赎回总金额', trigger: 'change' }
    ],
    detail: [
        { required: true, message: '请输入明细数据', trigger: 'change' }
    ],
    notes: [
        { required: true, message: '请输入备注', trigger: 'change' }
    ],
    place: [
        { required: true, trigger: 'change' }
    ]
}
function handleUpload(file:any) {
    fileName.value = file.name
    // console.log(file.value);
    return false
}
function showUploadModal() {
    modal.value = true
}
function handelDateChange(date:string) {
    formItem.registrationDate = date
}
function handelDateChange1(date:string) {
    formItem.productTerm = date
}
function submit() {
    console.log(formItem);
    formRef.value.validate().then((valid:boolean) => {
        if (valid) {
            add(formItem).then((res) => {
                if (!res.error) {
                    Message.success('添加成功')
                    setTimeout(() => {
                        goBack()
                    }, 1000);
                }
            })
        }
    })
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