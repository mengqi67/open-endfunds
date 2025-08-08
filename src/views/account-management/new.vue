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
            <Form ref="formRef" :model="formItem" :label-width="120" :rules="ruleValidate">
                <FormItem label="">
                   <Upload action="/" :before-upload="handleUpload">
                        <Button icon="ios-cloud-upload-outline">模板选择</Button>
                    </Upload>                    
                </FormItem>
                <FormItem label="岗位名称：" prop="positionname">
                    <Input v-model="formItem.positionname" placeholder="请输入" ></Input>
                </FormItem>
                <FormItem label="岗位描述：" prop="positiondes">
                    <Input v-model="formItem.positiondes" placeholder="请输入"></Input>
                </FormItem>
                <FormItem label="权限列表" prop="positionpermition">
                    <Input v-model="formItem.positionpermition" placeholder="请输入" ></Input>
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
import { Card, Input, Button, Form, FormItem, Select, Option, Modal,Message, Upload } from 'view-ui-plus'
import { useRouter} from 'vue-router'
import {ref, reactive} from 'vue'
import { add } from '@/service/api/account'

const formRef = ref()
const formItem = reactive({
    positionname: '',
	positiondes: '',
	positionpermition: '',	
})
const router = useRouter()
const fileName = ref('')
const modal = ref(false)
const ruleValidate = {
    positionname: [
        { required: true, message: '请输入岗位名称', trigger: 'change' }
    ],
    positiondes: [
        { required: true, message: '请输入岗位描述', trigger: 'change' }
    ],
    positionpermition: [
        { required: true, message: '请输入岗位权限', trigger: 'change' }
    ]
}
function handleUpload(file:any) {
    fileName.value = file.name
    // console.log(file.value);
    return false
}
function submit() {
    
    //console.log(formItem);
    formRef.value.validate().then((valid:boolean) => {
        if (valid) {
            add(formItem).then((res) => {
                 console.log(res.error);
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