/*
 * @Author: ymq
 * @Date: 2025-08-06 14:20:34
 * @LastEditTime: 2025-08-06 18:25:05
 * @LastEditors: ymq
 * @Description: 
 */
import { request } from '@/service/request';

export async function getList(params?:any) {
    return request.get<any>('/project-reserve/list', params )
}

export async function deleteRow(params?:any) {
    return request.post<any>(`/project-reserve/delete`, params)
}

export async function add(params?:any) {
    return request.post<any>(`/project-reserve/add`, params)
}