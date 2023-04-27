/**
*  @Date 2023/04/27 11:01:48
*  @Auth zjs
*  @Desc 门店设备管理
*/


import http from '../index'
import {Result, ResultPage} from '../types'


/**
 * Tag 门店设备管理
 * Summary 新增
*/
interface TypeShopDeviceAddResponse{
        
        
}

export function ShopDeviceAdd(data:TypeShopDeviceAddResponse): Promise<Result<any>>{
    return http.request({
        url: `/shopDevice/add`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 门店设备管理
 * Summary 根据ID删除
*/
interface TypeShopDeviceDeleteDeviceNoResponse{
        
            deviceNo?:string
        
}

export function ShopDeviceDeleteDeviceNo(params:TypeShopDeviceDeleteDeviceNoResponse): Promise<Result<any>>{
    return http.request({
        url: `/shopDevice/delete/{deviceNo}`,
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        params
    })
}
        

/**
 * Tag 门店设备管理
 * Summary 查询门店下所有设备
*/
interface TypeShopDeviceQueryResponse{
        
        
}

export function ShopDeviceQuery(data:TypeShopDeviceQueryResponse): Promise<ResultPage<any>>{
    return http.request({
        url: `/shopDevice/query`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        