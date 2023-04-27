/**
*  @Date 2023/04/27 11:01:48
*  @Auth zjs
*  @Desc 症状话术
*/


import http from '../index'
import {Result, ResultPage} from '../types'


/**
 * Tag 症状话术
 * Summary 复制平台症状话术
*/
interface TypeSymptomDescCopyToOemResponse{
        
        
}

export function SymptomDescCopyToOem(params:TypeSymptomDescCopyToOemResponse): Promise<Result<any>>{
    return http.request({
        url: `/symptomDesc/copyToOem`,
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        params
    })
}
        

/**
 * Tag 症状话术
 * Summary 清空当前OEM的话术
*/
interface TypeSymptomDescDeleteByOemIdResponse{
        
        
}

export function SymptomDescDeleteByOemId(params:TypeSymptomDescDeleteByOemIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/symptomDesc/deleteByOemId`,
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        params
    })
}
        

/**
 * Tag 症状话术
 * Summary 查询单个症状话术
*/
interface TypeSymptomDescGetResponse{
        
        
}

export function SymptomDescGet(data:TypeSymptomDescGetResponse): Promise<Result<any>>{
    return http.request({
        url: `/symptomDesc/get`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 症状话术
 * Summary 查询所有
*/
interface TypeSymptomDescQueryAllResponse{
        
        
}

export function SymptomDescQueryAll(data:TypeSymptomDescQueryAllResponse): Promise<ResultPage<any>>{
    return http.request({
        url: `/symptomDesc/queryAll`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 症状话术
 * Summary 修改
*/
interface TypeSymptomDescUpdateIdResponse{
        
            id?:string
        
}

export function SymptomDescUpdateId(data:TypeSymptomDescUpdateIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/symptomDesc/update/{id}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        