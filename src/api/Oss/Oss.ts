/**
*  @Date 2023/04/27 11:01:48
*  @Auth zjs
*  @Desc OSS接口
*/


import http from '../index'
import {Result, ResultPage} from '../types'


/**
 * Tag OSS接口
 * Summary 获取OSS凭证
*/
interface TypeOssGetCredentialResponse{
        
        
}

export function OssGetCredential(params:TypeOssGetCredentialResponse): Promise<Result<any>>{
    return http.request({
        url: `/oss/getCredential`,
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        params
    })
}
        