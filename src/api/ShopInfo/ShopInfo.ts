/**
*  @Date 2023/04/27 11:01:48
*  @Auth zjs
*  @Desc 门店管理
*/


import http from '../index'
import {Result, ResultPage} from '../types'


/**
 * Tag 门店管理
 * Summary 新增
*/
interface TypeShopInfoAddResponse{
        
        
}

export function ShopInfoAdd(data:TypeShopInfoAddResponse): Promise<Result<any>>{
    return http.request({
        url: `/shopInfo/add`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 门店管理
 * Summary 根据ID获取详细信息
*/
interface TypeShopInfoGetIdResponse{
        
            id?:string
        
}

export function ShopInfoGetId(params:TypeShopInfoGetIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/shopInfo/get/{id}`,
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        params
    })
}
        

/**
 * Tag 门店管理
 * Summary 分页查询
*/
interface TypeShopInfoQueryPagePageSizeResponse{
        
            page?:number
            pageSize?:number
        
}

export function ShopInfoQueryPagePageSize(data:TypeShopInfoQueryPagePageSizeResponse): Promise<ResultPage<any>>{
    return http.request({
        url: `/shopInfo/query/{page}/{pageSize}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 门店管理
 * Summary 修改
*/
interface TypeShopInfoUpdateIdResponse{
        
            id?:string
        
}

export function ShopInfoUpdateId(data:TypeShopInfoUpdateIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/shopInfo/update/{id}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 门店管理
 * Summary 启用/禁用
*/
interface TypeShopInfoUpdateStatusIdStatusResponse{
        
            id?:string
            status?:number
        
}

export function ShopInfoUpdateStatusIdStatus(params:TypeShopInfoUpdateStatusIdStatusResponse): Promise<Result<any>>{
    return http.request({
        url: `/shopInfo/updateStatus/{id}/{status}`,
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        params
    })
}
        