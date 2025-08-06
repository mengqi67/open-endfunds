<!--
 * @Author: ymq
 * @Date: 2025-08-03 17:36:22
 * @LastEditTime: 2025-08-04 17:18:55
 * @LastEditors: ymq
 * @Description: 
-->
<template>
    <div class="page-main">
        <div class="page-title">产品管理-登记管理</div>
        <Card :bordered="false" shadow> 
            <div class="sub-title">附件信息</div>
            <Form :model="formItem" :label-width="120">
                <FormItem label="模板大类">
                    <Select v-model="formItem.select" multiple>
                        <Option value="rmb">类1</Option>
                        <Option value="dallor">类2</Option>
                        <Option value="tongchuang">其他</Option>
                    </Select>
                </FormItem>
                <FormItem label="模板小类">
                    <Select v-model="formItem.select" multiple>
                        <Option value="rmb">债券投资计划</Option>
                        <Option value="dallor">股权投资计划</Option>
                        <Option value="tongchuang">资产支持计划</Option>                        
                    </Select>
                </FormItem>
                <div class="sub-title">基本信息</div>
                <FormItem label="产品名称">
                    <Input v-model="formItem.input" placeholder="请输入"></Input>
                </FormItem>
                <FormItem label="产品类别">
                    <Input v-model="formItem.input" placeholder="请输入"></Input>
                </FormItem>
                <FormItem label="注册规模（元）">
                    <Input v-model="formItem.input" placeholder="请输入"></Input>
                </FormItem>
                <FormItem label="发行场所">
                    <Input v-model="formItem.input" placeholder="请输入"></Input>
                </FormItem>
                <FormItem label="份额面值（元/份）">
                    <Input v-model="formItem.input" placeholder="请输入"></Input>
                </FormItem>
                <FormItem label="产品期限">
                    <Input v-model="formItem.input" placeholder="请输入"></Input>
                </FormItem>
                <FormItem label="核准文件编号">
                    <Input v-model="formItem.input" placeholder="请输入"></Input>
                </FormItem>
                <FormItem label="产品管理人全称">
                    <Input v-model="formItem.input" placeholder="请输入"></Input>
                </FormItem>
                <FormItem label="产品注册日期">
                    <Input v-model="formItem.input" placeholder="请输入"></Input>
                </FormItem>
                 <FormItem label="最低募集金额（元）">
                    <Input v-model="formItem.input" placeholder="请输入"></Input>
                </FormItem>
                <FormItem label="面值币种">
                    <Select v-model="formItem.select" multiple>
                        <Option value="rmb">人民币</Option>
                        <Option value="dallor">美元</Option>
                        <Option value="tongchuang">港币</Option>
                        <Option value="dongfang">英镑</Option>
                        <Option value="songhe">欧元</Option>
                    </Select>
                </FormItem>
                <FormItem label="产品托管人">
                    <Input v-model="formItem.input" placeholder="请输入"></Input>
                </FormItem>
                 <FormItem label="产品独立监督人">
                    <Input v-model="formItem.input" placeholder="请输入"></Input>
                </FormItem>
                 <FormItem label="备注">
                    <Input v-model="formItem.input" placeholder="请输入"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="submit">提交</Button>
                    <Button style="margin-left: 8px" @click="goBack">返回上一页</Button>
                </FormItem>
            </Form>
        </Card>
    </div>
</template>

<script setup lang="ts">
import { Card, Input, Button, Form, FormItem, Select, Option, Message, Upload } from 'view-ui-plus'
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
function handleUpload(file:any) {
    fileName.value = file.name
    // console.log(file.value);
    return false
}
function submit() {
    Message.success('提交成功')
    setTimeout(() => {
        goBack()
    }, 1000);
}
function goBack() {
    router.go(-1)
}
</script>

<style lang="scss" scoped>
/* .page-title {
    padding: 10px 0px;
    font-weight: bold;
    font-size: 18px;
} */

</style>