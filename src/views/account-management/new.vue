<!--
 * @Author: ymq
 * @Date: 2025-08-03 17:36:22
 * @LastEditTime: 2025-08-04 17:18:55
 * @LastEditors: ymq
 * @Description: 
-->
<template>
    <div class="page-main">
        <div class="page-title">新建岗位</div>
        <Card :bordered="false" shadow>
            <div class="sub-title">岗位信息</div>
            <Form :model="formItem" :label-width="120">
                <FormItem label="">
                   <Upload action="/" :before-upload="handleUpload">
                        <Button icon="ios-cloud-upload-outline">模板选择</Button>
                    </Upload>
                    
                </FormItem>
                <FormItem label="岗位名称：">
                    <Input v-model="formItem.input" ></Input>
                </FormItem>
                <FormItem label="岗位描述：">
                    <Input v-model="formItem.input" ></Input>
                </FormItem>
                <FormItem label="权限列表">
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