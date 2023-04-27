/**
*  @Date 2023/04/27 11:01:48
*  @Auth zjs
*  @Desc 发现栏目管理
*/


import http from '../index'
import {Result, ResultPage} from '../types'


/**
 * Tag 发现栏目管理
 * Summary 新增
*/
interface TypeDiscoveryKindAddResponse{
        
        
}

export function DiscoveryKindAdd(data:TypeDiscoveryKindAddResponse): Promise<Result<any>>{
    return http.request({
        url: `/discoveryKind/add`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 发现栏目管理
 * Summary 根据ID删除
*/
interface TypeDiscoveryKindDeleteIdResponse{
        
            id?:string
        
}

export function DiscoveryKindDeleteId(params:TypeDiscoveryKindDeleteIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/discoveryKind/delete/{id}`,
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        params
    })
}
        

/**
 * Tag 发现栏目管理
 * Summary 根据ID获取详细信息
*/
interface TypeDiscoveryKindGetIdResponse{
        
            id?:string
        
}

export function DiscoveryKindGetId(params:TypeDiscoveryKindGetIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/discoveryKind/get/{id}`,
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        params
    })
}
        

/**
 * Tag 发现栏目管理
 * Summary 分页查询
*/
interface TypeDiscoveryKindQueryPagePageSizeResponse{
        
            page?:number
            pageSize?:number
        
}

export function DiscoveryKindQueryPagePageSize(data:TypeDiscoveryKindQueryPagePageSizeResponse): Promise<ResultPage<any>>{
    return http.request({
        url: `/discoveryKind/query/{page}/{pageSize}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 发现栏目管理
 * Summary 查询所有栏目
*/
interface TypeDiscoveryKindQueryAllResponse{
        
        
}

export function DiscoveryKindQueryAll(data:TypeDiscoveryKindQueryAllResponse): Promise<ResultPage<any>>{
    return http.request({
        url: `/discoveryKind/queryAll`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 发现栏目管理
 * Summary 修改
*/
interface TypeDiscoveryKindUpdateIdResponse{
        
            id?:string
        
}

export function DiscoveryKindUpdateId(data:TypeDiscoveryKindUpdateIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/discoveryKind/update/{id}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        