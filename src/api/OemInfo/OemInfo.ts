/**
*  @Date 2023/04/27 11:01:48
*  @Auth zjs
*  @Desc OEM信息
*/


import http from '../index'
import {Result, ResultPage} from '../types'


/**
 * Tag OEM信息
 * Summary 查询所有OEM信息
*/
interface TypeOemInfoQueryAllResponse{
        
        
}

export function OemInfoQueryAll(data:TypeOemInfoQueryAllResponse): Promise<ResultPage<any>>{
    return http.request({
        url: `/oemInfo/queryAll`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        