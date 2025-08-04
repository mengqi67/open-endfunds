<!--
 * @Author: ymq
 * @Date: 2025-08-04 14:32:28
 * @LastEditTime: 2025-08-04 15:33:06
 * @LastEditors: ymq
 * @Description: 
-->
<template>
    <div class="page-main">
        <div class="page-title"><Button icon="md-arrow-back" style="margin-right: 20px;" @click="goBack">返回</Button>项目尽调详情</div>
        <Card>
            <div class="sub-title">项目名称</div>
            <Form :label-width="120" label-position="left">
                <FormItem label="项目名称">
                    <div>深圳市深星旭科技发展有限公司私募可债转第二轮</div>
                </FormItem>
                <div class="sub-title">尽调部门</div>
                <FormItem label="尽调部门">
                    <RadioGroup>
                        <Radio label="合规风控部（法务尽调）"></Radio>
                        <Radio label="投资部（行业尽调）"></Radio>
                    </RadioGroup>
                </FormItem>
                <div class="sub-title">尽调信息</div>
                <FormItem label="尽调说明">
                    <div>深圳市深星旭科技发展有限公司私募可债转第二轮尽调说明</div>
                </FormItem>
                <div class="sub-title">基本信息</div>
                <FormItem label="企业全称">
                    <div>深圳市深星旭科技发展有限公司</div>
                </FormItem>
                <FormItem label="所属行业">
                    <div>软件与信息服务</div>
                </FormItem>
                <FormItem label="拟投资金额（万元）">
                    <div>5000.0000000</div>
                </FormItem>
                <FormItem label="拟前估值（万元）">
                    <div>10000.0000000</div>
                </FormItem>
                <FormItem label="项目渠道来源">
                    <div>中国平安股份有限公司</div>
                </FormItem>
                <FormItem label="外部联合投资人">
                    <div>-</div>
                </FormItem>
                <FormItem label="立项理由">
                    <div>深圳市深星旭科技发展有限公司私募可债转第二轮项目立项</div>
                </FormItem>
            </Form>
            <div class="sub-title">出资主体</div>
            <Table border :columns="columns" :data="data"></Table>
        </Card>
    </div>
</template>

<script setup lang="ts">
import { Card, Form, FormItem, RadioGroup, Radio, Table, Button } from 'view-ui-plus'
import { useRouter } from 'vue-router'
const router = useRouter()
const columns = [
    {
        title: '投资主体',
        key: 'name'
    },
    {
        title: '本主体投资金额（万元）',
        key: 'age'
    },
    {
        title: '本主体投资金额（大写）',
        key: 'address'
    }
]
const data = [
    {
        name: '中国资产经营管理公司私募股权一号基金',
        age: 5000,
        address: '伍仟万元整',
        date: '2016-10-03'
    },
    // {
    //     name: 'Jim Green',
    //     age: 24,
    //     address: 'London No. 1 Lake Park',
    //     date: '2016-10-01'
    // },
    // {
    //     name: 'Joe Black',
    //     age: 30,
    //     address: 'Sydney No. 1 Lake Park',
    //     date: '2016-10-02'
    // },
    // {
    //     name: 'Jon Snow',
    //     age: 26,
    //     address: 'Ottawa No. 2 Lake Park',
    //     date: '2016-10-04'
    // }
]
function goBack() {
    router.go(-1)
}
</script>

<style lang="scss" scoped>
.subtitle {
    font-weight: bold;
    font-size: 16px;
    position: relative;
    padding-left: 10px;
    margin-bottom: 20px;
}
</style>