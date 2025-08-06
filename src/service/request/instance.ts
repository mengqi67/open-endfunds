/*
 * @Author: ymq
 * @Date: 2025-08-06 13:07:22
 * @LastEditTime: 2025-08-06 15:09:10
 * @LastEditors: ymq
 * @Description: 
 */
import axios from 'axios';
import type { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { transformRequestData, handleAxiosError, handleServiceResult, handleBackendError, handleResponseError } from '@/utils/service';

type RequestMethod = 'get' | 'post' | 'put' | 'delete';
interface RequestParam {
  url: string;
  method?: RequestMethod;
  data?: any;
  axiosConfig?: AxiosRequestConfig;
}

export default class CustomAxiosInstance {
  instance: AxiosInstance;

  backendConfig: Service.BackendResultConfig;

  hideToast: boolean;

  needData: boolean; // 是否是在状态码不为零的时候返回data

  /**
   *
   * @param axiosConfig - axios配置
   * @param backendConfig - 后端返回的数据配置
   */
  constructor(
    axiosConfig: AxiosRequestConfig,
    backendConfig: Service.BackendResultConfig = {
      codeKey: 'code',
      dataKey: 'data',
      msgKey: 'msg',
      successCode: 0,
    }
  ) {
    this.backendConfig = backendConfig;
    this.instance = axios.create(axiosConfig);
    this.setInterceptor();
    this.hideToast = false;
    this.needData = false;
  }

  /** 设置请求拦截器 */
  setInterceptor() {
    this.instance.interceptors.request.use(async (config) => {
        const handleConfig = { ...config };
        if (handleConfig.headers) {
            // 数据转换
            const contentType = handleConfig.headers['Content-Type'];
            handleConfig.data = await transformRequestData(handleConfig.data, contentType);
        }
        return handleConfig
    }, (axiosError: AxiosError) => {
      const error = handleAxiosError(axiosError);
      return handleServiceResult(error, null);
    });
    this.instance.interceptors.response.use(async (response) => {
      const { status } = response;
        const backend = response.data;
        const { codeKey, dataKey, successCode } = this.backendConfig;

        if (status === 200 || status < 300 || status === 304) {
          // 请求成功

          if (backend[codeKey] == successCode) {

            return handleServiceResult(null, this.needData ? backend : backend[dataKey]);
          }
          // switch (backend[codeKey]) {
          //   case 401:
          //     // const { toLogin } = useRouterPush(false);
          //     useAuthStore().resetAuthStore();
          //     break;
          //   case 4003:
          //     globalRouter.replace('no-permission');
          //     // location.href = "/#/no-permission";
          //     break;
          //   case 9998:
          //     break;
          //   default:
          //     break;
          // }

          const error = handleBackendError(backend, this.backendConfig, this.hideToast);

          return handleServiceResult(error, this.needData ? backend[dataKey] : null, this.needData);
        }
        const error = handleResponseError(response);
        return handleServiceResult(error, this.needData ? backend[dataKey] : null, this.needData);
    })
  }
}

export function createRequest(axiosConfig: AxiosRequestConfig, backendConfig?: Service.BackendResultConfig) {
  const customInstance = new CustomAxiosInstance(axiosConfig, backendConfig);
  /**
   * 异步promise请求
   * @param param - 请求参数
   * - url: 请求地址
   * - method: 请求方法(默认get)
   * - data: 请求的body的data
   * - axiosConfig: axios配置
   */
  async function asyncRequest<T>(param: RequestParam): Promise<Service.RequestResult<T>> {
    const { url } = param;
    const method = param.method || 'get';
    const { instance } = customInstance;
    const res = (await getRequestResponse(
      instance,
      method,
      url,
      param.data,
      param.axiosConfig
    )) as Service.RequestResult<T>;

    return res;
  }

  /**
   * get请求
   * @param url - 请求地址
   * @param config - axios配置
   */
  function get<T>(url: string, config?: AxiosRequestConfig) {
    return asyncRequest<T>({ url, method: 'get', axiosConfig: config });
  }

  /**
   * post请求
   * @param url - 请求地址
   * @param data - 请求的body的data
   * @param config - axios配置
   */
  function post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return asyncRequest<T>({ url, method: 'post', data, axiosConfig: config });
  }
  /**
   * put请求
   * @param url - 请求地址
   * @param data - 请求的body的data
   * @param config - axios配置
   */
  function put<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return asyncRequest<T>({ url, method: 'put', data, axiosConfig: config });
  }

  /**
   * delete请求
   * @param url - 请求地址
   * @param config - axios配置
   */
  function handleDelete<T>(url: string, config: AxiosRequestConfig) {
    return asyncRequest<T>({ url, method: 'delete', axiosConfig: config });
  }

  return {
    get,
    post,
    put,
    delete: handleDelete
  };
}

async function getRequestResponse(
  instance: AxiosInstance,
  method: RequestMethod,
  url: string,
  data?: any,
  config?: any
) {
  let res: any;
  if (method === 'get' || method === 'delete') {
    res = await instance[method](url, { params: {...config} });
  } else {
    res = await instance[method](url, data, config);
  }
  return res;
}
