/**
*  @Date 2023/04/27 11:01:48
*  @Auth zjs
*  @Desc 用户角色信息
*/


import http from '../index'
import {Result, ResultPage} from '../types'


/**
 * Tag 用户角色信息
 * Summary 分配用户角色
*/
interface TypeSysUserRoleAddUserIdResponse{
        
            userId?:number
            roleIds?:undefined
        
}

export function SysUserRoleAddUserId(data:TypeSysUserRoleAddUserIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/sysUserRole/add/{userId}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 用户角色信息
 * Summary 查询当前用户所有角色信息
*/
interface TypeSysUserRoleQueryByUserUserIdResponse{
        
            userId?:string
        
}

export function SysUserRoleQueryByUserUserId(params:TypeSysUserRoleQueryByUserUserIdResponse): Promise<ResultPage<any>>{
    return http.request({
        url: `/sysUserRole/queryByUser/{userId}`,
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        params
    })
}
        