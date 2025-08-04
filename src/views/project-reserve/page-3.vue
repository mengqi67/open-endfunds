<!--
 * @Author: ymq
 * @Date: 2025-08-04 12:22:33
 * @LastEditTime: 2025-08-04 16:16:38
 * @LastEditors: ymq
 * @Description: 
-->
<template>
    <div class="page-main">
        <div class="page-title">项目储备库管理-3</div>
        <Card :bordered="false" shadow>
            <div>
                <Input v-model="fundName" icon="ios-search" placeholder="基金简称" style="width: 200px" />
                <Button type="text" icon="ios-funnel-outline" @click="refresh">筛选</Button>
            </div>
            <div class="option-wrap">
                <div class="left">
                    <div class="sort-wrap" @click="refresh">排序：创建时间
                        <div class="arrow-wrap">
                            <Icon type="md-arrow-dropup" class="arrow-up"/>
                            <Icon type="md-arrow-dropdown" color="#2d8cf0"/>
                        </div>
                    </div>
                    <Button type="text" icon="md-refresh" @click="refresh">刷新</Button>
                </div>
                <div class="right">
                    <router-link to="/project-reserve/new"><Button type="primary">新建</Button></router-link>
                    <Button style="margin-left: 10px;">导入</Button>
                    <Button style="margin-left: 10px;">导出</Button>
                </div>
            </div>
            <Table :columns="columns" :data="data" :loading="loading" @on-row-click="goDetail"></Table>
            <br>
            <div class="page-wrap"><Page :total="5" show-total/></div>
        </Card>
    </div>
</template>

<script setup lang="ts">
import { Card, Input, Button, Icon, Table, Page } from 'view-ui-plus'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { columns, data } from './data'

const fundName = ref('')
const router = useRouter()
const loading = ref(false)

function goDetail() {
    router.push('/project-reserve/detail')
}
function refresh() {
    loading.value = true
    setTimeout(() => {
        loading.value = false
    }, 1500);
}
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