<!--
 * @Author: ymq
 * @Date: 2025-08-03 17:36:22
 * @LastEditTime: 2025-08-04 16:50:14
 * @LastEditors: ymq
 * @Description: 
-->
<template>
    <div class="page-main">
        <div class="page-title">投资者适当性管理新建</div>
        <Card :bordered="false" shadow>
            <div class="sub-title">基本信息</div>
            <Form :model="formItem" :label-width="120">
                <FormItem label="标题">
                    <Input v-model="formItem.input" placeholder="请输入标题"></Input>
                </FormItem>
                <FormItem label="投资者名称">
                    <Select v-model="formItem.select" multiple>
                        <Option value="chuangxin">深圳市创新投资集团有限公司</Option>
                        <Option value="jishi">基石资本股份有限公司</Option>
                        <Option value="tongchuang">同创伟业创业投资有限公司</Option>
                        <Option value="dongfang">东方富海投资管理股份有限公司</Option>
                        <Option value="songhe">松禾资本管理有限公司</Option>
                    </Select>
                </FormItem>
                <FormItem label="投资者适当性管理说明">
                    <Input v-model="formItem.textarea" type="textarea" :autosize="{ minRows: 2, maxRows: 5 }"
                        placeholder="请输入投资者适当性管理说明"></Input>
                </FormItem>
                <div class="sub-title">附件信息</div>
                <FormItem label="上传/下载/预览">
                    <Upload action="/" :before-upload="handleUpload">
                        <Button icon="ios-cloud-upload-outline">上传文件</Button>
                    </Upload>
                    <div> {{ fileName }} </div>
                </FormItem>
                <div class="sub-title">经办人信息</div>
                <FormItem label="姓名">
                    <span>李月熙</span>
                </FormItem>
                <FormItem label="公司">
                    重投资本管理有限公司
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
    fileName.value = file.value.name
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