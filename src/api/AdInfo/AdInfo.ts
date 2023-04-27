/**
*  @Date 2023/04/27 11:01:48
*  @Auth zjs
*  @Desc 广告管理
*/


import http from '../index'
import {Result, ResultPage} from '../types'


/**
 * Tag 广告管理
 * Summary 新增
*/
interface TypeAdInfoAddResponse{
        
        
}

export function AdInfoAdd(data:TypeAdInfoAddResponse): Promise<Result<any>>{
    return http.request({
        url: `/adInfo/add`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 广告管理
 * Summary 根据ID删除
*/
interface TypeAdInfoDeleteIdResponse{
        
            id?:string
        
}

export function AdInfoDeleteId(params:TypeAdInfoDeleteIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/adInfo/delete/{id}`,
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        params
    })
}
        

/**
 * Tag 广告管理
 * Summary 分页查询
*/
interface TypeAdInfoQueryPagePageSizeResponse{
        
            page?:number
            pageSize?:number
        
}

export function AdInfoQueryPagePageSize(data:TypeAdInfoQueryPagePageSizeResponse): Promise<ResultPage<any>>{
    return http.request({
        url: `/adInfo/query/{page}/{pageSize}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 广告管理
 * Summary 修改
*/
interface TypeAdInfoUpdateIdResponse{
        
            id?:string
        
}

export function AdInfoUpdateId(data:TypeAdInfoUpdateIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/adInfo/update/{id}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        