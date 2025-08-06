/*
 * @Author: ymq
 * @Date: 2025-08-06 12:59:31
 * @LastEditTime: 2025-08-06 14:20:02
 * @LastEditors: ymq
 * @Description: 
 */
import { createRequest } from './instance';

export const request = createRequest({
  baseURL: '',
  headers: {"Content-Type": "application/json",}
});