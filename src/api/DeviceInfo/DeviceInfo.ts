/**
*  @Date 2023/04/27 11:01:48
*  @Auth zjs
*  @Desc 设备信息
*/


import http from '../index'
import {Result, ResultPage} from '../types'


/**
 * Tag 设备信息
 * Summary 添加设备
*/
interface TypeDeviceInfoAddResponse{
        
        
}

export function DeviceInfoAdd(data:TypeDeviceInfoAddResponse): Promise<Result<any>>{
    return http.request({
        url: `/deviceInfo/add`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 设备信息
 * Summary 分页查询
*/
interface TypeDeviceInfoQueryPagePageSizeResponse{
        
            page?:number
            pageSize?:number
        
}

export function DeviceInfoQueryPagePageSize(data:TypeDeviceInfoQueryPagePageSizeResponse): Promise<ResultPage<any>>{
    return http.request({
        url: `/deviceInfo/query/{page}/{pageSize}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 设备信息
 * Summary 重新激活
*/
interface TypeDeviceInfoResetIdResponse{
        
            id?:number
        
}

export function DeviceInfoResetId(data:TypeDeviceInfoResetIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/deviceInfo/reset/{id}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 设备信息
 * Summary 更新设备信息
*/
interface TypeDeviceInfoUpdateIdResponse{
        
            id?:number
        
}

export function DeviceInfoUpdateId(data:TypeDeviceInfoUpdateIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/deviceInfo/update/{id}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 设备信息
 * Summary 修改设备号
*/
interface TypeDeviceInfoUpdateDeviceNoIdResponse{
        
            id?:number
        
}

export function DeviceInfoUpdateDeviceNoId(data:TypeDeviceInfoUpdateDeviceNoIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/deviceInfo/updateDeviceNo/{id}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        