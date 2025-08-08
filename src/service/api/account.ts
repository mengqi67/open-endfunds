/*
 * @Author: ymq
 * @Date: 2025-08-06 14:20:34
 * @LastEditTime: 2025-08-07 15:44:11
 * @LastEditors: ymq
 * @Description: 
 */
import { request } from '@/service/request';

export async function getList(params?:any) {
     console.log(params);
    return request.get<any>('/account/list.php', params )
}

export async function deleteRow(params?:any) {   
    return request.post<any>(`/account/delete.php`, params)
}

export async function add(params?:any) {
     console.log('222');
    return request.post<any>(`/account/add.php`, params)
}