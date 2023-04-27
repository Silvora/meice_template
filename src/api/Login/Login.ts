/**
*  @Date 2023/04/27 11:01:48
*  @Auth zjs
*  @Desc 登录
*/


import http from '../index'
import {Result, ResultPage} from '../types'


/**
 * Tag 用户登录
 * Summary 登录接口
*/
interface TypeLoginResponse{
        
            username?:string
            password?:string
        
}

export function Login(data:TypeLoginResponse): Promise<Result<any>>{
    return http.request({
        url: `/login`,
        method: 'post',
        headers: {'Content-Type': 'multipart/form-data'},
        data
    })
}
        