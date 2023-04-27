/**
*  @Date 2023/04/27 11:01:48
*  @Auth zjs
*  @Desc 产品方案
*/


import http from '../index'
import {Result, ResultPage} from '../types'


/**
 * Tag 产品方案
 * Summary 新增
*/
interface TypeProductAddResponse{
        
        
}

export function ProductAdd(data:TypeProductAddResponse): Promise<Result<any>>{
    return http.request({
        url: `/product/add`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 产品方案
 * Summary 根据ID删除
*/
interface TypeProductDeleteIdResponse{
        
            id?:string
        
}

export function ProductDeleteId(params:TypeProductDeleteIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/product/delete/{id}`,
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        params
    })
}
        

/**
 * Tag 产品方案
 * Summary 根据ID获取详细信息
*/
interface TypeProductGetIdResponse{
        
            id?:string
        
}

export function ProductGetId(params:TypeProductGetIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/product/get/{id}`,
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        params
    })
}
        

/**
 * Tag 产品方案
 * Summary 分页查询
*/
interface TypeProductQueryPagePageSizeResponse{
        
            page?:number
            pageSize?:number
        
}

export function ProductQueryPagePageSize(data:TypeProductQueryPagePageSizeResponse): Promise<ResultPage<any>>{
    return http.request({
        url: `/product/query/{page}/{pageSize}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 产品方案
 * Summary 修改
*/
interface TypeProductUpdateIdResponse{
        
            id?:string
        
}

export function ProductUpdateId(data:TypeProductUpdateIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/product/update/{id}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        