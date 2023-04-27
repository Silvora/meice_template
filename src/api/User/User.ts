/**
*  @Date 2023/04/27 11:01:48
*  @Auth zjs
*  @Desc 用户管理
*/


import http from '../index'
import {Result, ResultPage} from '../types'


/**
 * Tag 用户管理
 * Summary 分页查询
*/
interface TypeUserQueryPagePageSizeResponse{
        
            page?:number
            pageSize?:number
        
}

export function UserQueryPagePageSize(data:TypeUserQueryPagePageSizeResponse): Promise<ResultPage<any>>{
    return http.request({
        url: `/user/query/{page}/{pageSize}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 用户管理
 * Summary 修改
*/
interface TypeUserUpdateIdResponse{
        
            id?:string
        
}

export function UserUpdateId(data:TypeUserUpdateIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/user/update/{id}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 用户管理
 * Summary 修改密码
*/
interface TypeUserUpdatePwdUserIdResponse{
        
            userId?:string
        
}

export function UserUpdatePwdUserId(data:TypeUserUpdatePwdUserIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/user/updatePwd/{userId}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        