<!--
 * @Author: ymq
 * @Date: 2025-08-04 12:22:21
 * @LastEditTime: 2025-08-04 17:26:08
 * @LastEditors: ymq
 * @Description: 
-->
<template>
    <div class="page-main">
        <div class="page-title">发行产品库</div>
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
                    <Button type="primary" @click="exportFn">创建分期产品</Button>
                    <Button style="margin-left: 10px;" @click="exportFn">创建分期产品</Button>
                    <Button style="margin-left: 10px;" @click="exportFn">产品信息变更</Button>
                </div>
            </div>
            <Table :columns="columns" :data="data" :loading="loading" @on-row-click="goDetail"></Table>
            <br>
            <div class="page-wrap"><Page :total="5" show-total/></div>
        </Card>
        
    </div>
</template>

<script setup lang="ts">
import { Card, Input, Button, Icon, Table, Page,  Message } from 'view-ui-plus'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { columns, data } from './data-2'

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

function exportFn() {
    Message.error('暂无权限，请联系管理员！')
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