/**
*  @Date 2023/04/27 11:01:48
*  @Auth zjs
*  @Desc 客户管理
*/


import http from '../index'
import {Result, ResultPage} from '../types'


/**
 * Tag 客户管理
 * Summary 根据ID获取详细信息
*/
interface TypeCustomerGetIdResponse{
        
            id?:string
        
}

export function CustomerGetId(params:TypeCustomerGetIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/customer/get/{id}`,
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        params
    })
}
        

/**
 * Tag 客户管理
 * Summary 分页查询
*/
interface TypeCustomerQueryPagePageSizeResponse{
        
            page?:number
            pageSize?:number
        
}

export function CustomerQueryPagePageSize(data:TypeCustomerQueryPagePageSizeResponse): Promise<ResultPage<any>>{
    return http.request({
        url: `/customer/query/{page}/{pageSize}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        