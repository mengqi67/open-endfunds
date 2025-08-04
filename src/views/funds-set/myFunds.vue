
<template>
    <div class="page-main">
        <div class="page-title">我的基金</div>
        <Card :bordered="false" shadow>
            <div>
                <Input v-model="fundName" icon="ios-search" placeholder="基金简称" style="width: 200px" />
                <Button type="text" icon="ios-funnel-outline" >筛选</Button>
            </div>
            <div class="option-wrap">
                <div class="left">
                    <div class="sort-wrap">排序：创建时间
                        <div class="arrow-wrap">
                            <Icon type="md-arrow-dropup" class="arrow-up"/>
                            <Icon type="md-arrow-dropdown" color="#2d8cf0"/>
                        </div>
                    </div>
                    <Button type="text" icon="md-refresh">刷新</Button>
                </div>
                <div class="right">
                    <router-link to="/funds-set/new-investor"><Button type="primary">新建</Button></router-link>
                    <Button style="margin-left: 10px;">导入</Button>
                    <Button style="margin-left: 10px;">导出</Button>
                </div>
            </div>
            <Table :columns="columns" :data="data"></Table>
            <br>
            <div class="page-wrap"><Page :total="5" show-total/></div>
        </Card>
    </div>
</template>

<script setup lang="ts">
import { Card, Input, Button, Icon, Table, Page } from 'view-ui-plus'
import { ref } from 'vue'
import { columns, data } from '@/data/myFunds'

const fundName = ref('')
</script>

<style lang="scss" scoped>
.page-title{
    padding: 10px 0px;
    font-weight: bold;
    font-size: 18px;
}
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