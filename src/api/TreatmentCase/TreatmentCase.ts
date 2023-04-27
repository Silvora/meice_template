/**
*  @Date 2023/04/27 11:01:48
*  @Auth zjs
*  @Desc 治疗案例
*/


import http from '../index'
import {Result, ResultPage} from '../types'


/**
 * Tag 治疗案例
 * Summary 新增
*/
interface TypeTreatmentCaseAddResponse{
        
        
}

export function TreatmentCaseAdd(data:TypeTreatmentCaseAddResponse): Promise<Result<any>>{
    return http.request({
        url: `/treatmentCase/add`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 治疗案例
 * Summary 根据ID删除
*/
interface TypeTreatmentCaseDeleteIdResponse{
        
            id?:string
        
}

export function TreatmentCaseDeleteId(params:TypeTreatmentCaseDeleteIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/treatmentCase/delete/{id}`,
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        params
    })
}
        

/**
 * Tag 治疗案例
 * Summary 根据ID获取详细信息
*/
interface TypeTreatmentCaseGetIdResponse{
        
            id?:string
        
}

export function TreatmentCaseGetId(params:TypeTreatmentCaseGetIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/treatmentCase/get/{id}`,
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        params
    })
}
        

/**
 * Tag 治疗案例
 * Summary 分页查询
*/
interface TypeTreatmentCaseQueryPagePageSizeResponse{
        
            page?:number
            pageSize?:number
        
}

export function TreatmentCaseQueryPagePageSize(data:TypeTreatmentCaseQueryPagePageSizeResponse): Promise<ResultPage<any>>{
    return http.request({
        url: `/treatmentCase/query/{page}/{pageSize}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 治疗案例
 * Summary 修改
*/
interface TypeTreatmentCaseUpdateIdResponse{
        
            id?:string
        
}

export function TreatmentCaseUpdateId(data:TypeTreatmentCaseUpdateIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/treatmentCase/update/{id}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        