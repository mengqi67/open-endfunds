/*
 * @Author: ymq
 * @Date: 2025-08-06 12:59:31
 * @LastEditTime: 2025-08-07 15:36:16
 * @LastEditors: ymq
 * @Description: 
 */
import { createRequest } from './instance';

export const request = createRequest({
  baseURL: '/fund',
  headers: {"Content-Type": "application/json",}
});