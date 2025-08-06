/*
 * @Author: ymq
 * @Date: 2025-08-06 13:23:29
 * @LastEditTime: 2025-08-06 13:33:05
 * @LastEditors: ymq
 * @Description: 
 */
/** http请求头的content-type类型 */
// export enum EnumContentType {
//   json = 'application/json',
//   formUrlencoded = 'application/x-www-form-urlencoded',
//   formData = 'multipart/form-data'
// }

export const ENUM_CONTENT_TYPE = {
  json: 'application/json',
  formUrlencoded: 'application/x-www-form-urlencoded',
  formData: 'multipart/form-data'
} as const;

export type EnumContentType = (typeof ENUM_CONTENT_TYPE)[keyof typeof ENUM_CONTENT_TYPE];