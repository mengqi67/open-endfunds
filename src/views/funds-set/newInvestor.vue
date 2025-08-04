<!--
 * @Author: ymq
 * @Date: 2025-08-03 17:36:22
 * @LastEditTime: 2025-08-04 11:05:15
 * @LastEditors: ymq
 * @Description: 
-->
<template>
    <div class="page-main">
        <div class="page-title">投资者适当性管理新建</div>
        <Card :bordered="false" shadow>
            <div class="subtitle">基本信息</div>
            <Form :model="formItem" :label-width="80">
                <FormItem label="标题">
                    <Input v-model="formItem.input" placeholder="请输入标题"></Input>
                </FormItem>
                <FormItem label="投资者名称">
                    <Select v-model="formItem.select" multiple>
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>
                    </Select>
                </FormItem>
                <FormItem label="投资者适当性管理说明">
                    <Input v-model="formItem.textarea" type="textarea" :autosize="{ minRows: 2, maxRows: 5 }"
                        placeholder="请输入投资者适当性管理说明"></Input>
                </FormItem>
                <div class="subtitle">附件信息</div>
                <FormItem label="Radio">
                    <RadioGroup v-model="formItem.radio">
                        <Radio label="male">Male</Radio>
                        <Radio label="female">Female</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="Checkbox">
                    <CheckboxGroup v-model="formItem.checkbox">
                        <Checkbox label="Eat"></Checkbox>
                        <Checkbox label="Sleep"></Checkbox>
                        <Checkbox label="Run"></Checkbox>
                        <Checkbox label="Movie"></Checkbox>
                    </CheckboxGroup>
                </FormItem>
                <FormItem label="Switch">
                    <i-switch v-model="formItem.switch" size="large">
                        <template #open>
                            <span>On</span>
                        </template>
                        <template #close>
                            <span>Off</span>
                        </template>
                    </i-switch>
                </FormItem>
                <FormItem label="Slider">
                    <Slider v-model="formItem.slider" range></Slider>
                </FormItem>
                <FormItem>
                    <Button type="primary">Submit</Button>
                    <Button style="margin-left: 8px">Cancel</Button>
                </FormItem>
            </Form>
        </Card>
    </div>
</template>

<script setup lang="ts">
import { Card, Input, Button, Form, FormItem, Select, Option } from 'view-ui-plus'
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
</script>

<style lang="scss" scoped>
.page-title {
    padding: 10px 0px;
    font-weight: bold;
    font-size: 18px;
}

.subtitle {
    font-weight: bold;
    font-size: 16px;
    position: relative;
    padding-left: 10px;
    margin-bottom: 20px;
    &::before {
        content: "";
        position: absolute;
        width: 3px;
        height: 80%;
        background-color: #2d8cf0;
        border-radius: 1px;
        left: 0px;
        top: 50%;
        transform: translateY(-50%);
    }

    /* border-left: 3px solid #2d8cf0; */
}
</style>