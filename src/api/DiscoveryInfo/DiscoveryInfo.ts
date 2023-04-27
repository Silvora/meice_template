/**
*  @Date 2023/04/27 11:01:48
*  @Auth zjs
*  @Desc 发现接口
*/


import http from '../index'
import {Result, ResultPage} from '../types'


/**
 * Tag 发现接口
 * Summary 新增
*/
interface TypeDiscoveryInfoAddResponse{
        
        
}

export function DiscoveryInfoAdd(data:TypeDiscoveryInfoAddResponse): Promise<Result<any>>{
    return http.request({
        url: `/discoveryInfo/add`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 发现接口
 * Summary 根据ID删除
*/
interface TypeDiscoveryInfoDeleteIdResponse{
        
            id?:string
        
}

export function DiscoveryInfoDeleteId(params:TypeDiscoveryInfoDeleteIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/discoveryInfo/delete/{id}`,
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        params
    })
}
        

/**
 * Tag 发现接口
 * Summary 根据ID获取详细信息
*/
interface TypeDiscoveryInfoGetIdResponse{
        
            id?:string
        
}

export function DiscoveryInfoGetId(data:TypeDiscoveryInfoGetIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/discoveryInfo/get/{id}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 发现接口
 * Summary 分页查询
*/
interface TypeDiscoveryInfoQueryPagePageSizeResponse{
        
            page?:number
            pageSize?:number
        
}

export function DiscoveryInfoQueryPagePageSize(data:TypeDiscoveryInfoQueryPagePageSizeResponse): Promise<ResultPage<any>>{
    return http.request({
        url: `/discoveryInfo/query/{page}/{pageSize}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 发现接口
 * Summary 修改
*/
interface TypeDiscoveryInfoUpdateIdResponse{
        
            id?:string
        
}

export function DiscoveryInfoUpdateId(data:TypeDiscoveryInfoUpdateIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/discoveryInfo/update/{id}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        