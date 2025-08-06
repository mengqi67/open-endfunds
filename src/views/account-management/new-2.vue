<!--
 * @Author: ymq
 * @Date: 2025-08-03 17:36:22
 * @LastEditTime: 2025-08-04 17:18:55
 * @LastEditors: ymq
 * @Description: 
-->
<template>
    <div class="page-main">
        <div class="page-title">新建操作员</div>
        <Card :bordered="false" shadow>
            <div class="sub-title">操作员信息</div>
            <Form :model="formItem" :label-width="120">
                <FormItem label="所属用户：">
                    <Input v-model="formItem.input" ></Input>
                </FormItem>
                <FormItem label="操作员类型">
                    <Select v-model="formItem.select">
                        <Option value="chuangxin">普通操作员</Option>
                        <Option value="jishi">系统管理员</Option>
                        <Option value="tongchuang">操作管理员</Option>                        
                    </Select>
                </FormItem>
                <FormItem label="操作员代码">
                    <Input v-model="formItem.input" ></Input>
                </FormItem>
                <FormItem label="操作员名称">
                    <Input v-model="formItem.input" ></Input>
                </FormItem>
                <FormItem label="操作员密码">
                    <Input v-model="formItem.input" ></Input>
                </FormItem>
                <FormItem label="确认密码">
                    <Input v-model="formItem.input" ></Input>
                </FormItem>
                <FormItem label="座机">
                    <Input v-model="formItem.input" ></Input>
                </FormItem>
                <FormItem label="手机">
                    <Input v-model="formItem.input" ></Input>
                </FormItem>
                <FormItem label="邮箱">
                    <Input v-model="formItem.input" ></Input>
                </FormItem>
                <FormItem label="选择岗位">
                     <Select v-model="formItem.select" multiple>
                        <Option value="chuangxin">发行岗</Option>
                        <Option value="jishi">综合账户管理岗</Option>
                        <Option value="tongchuang">投后岗</Option>                        
                    </Select>
                </FormItem>
                <FormItem label="可管理的持有人账户限制">
                    <Select v-model="formItem.select">
                        <Option value="chuangxin">无权限</Option>
                        <Option value="jishi">全部权限</Option>
                        <Option value="tongchuang">部分权限</Option>                        
                    </Select>
                </FormItem>
                <FormItem label="可管理的持有人账户列表">
                    <Input v-model="formItem.input" ></Input>
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