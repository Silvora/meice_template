/**
*  @Date 2023/04/27 11:01:48
*  @Auth zjs
*  @Desc 管理员信息
*/


import http from '../index'
import {Result, ResultPage} from '../types'


/**
 * Tag 管理员信息
 * Summary 新增管理员
*/
interface TypeSysUserAddResponse{
        
        
}

export function SysUserAdd(data:TypeSysUserAddResponse): Promise<Result<any>>{
    return http.request({
        url: `/sysUser/add`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 管理员信息
 * Summary 分页查询
*/
interface TypeSysUserQueryPagePageSizeResponse{
        
            page?:number
            pageSize?:number
        
}

export function SysUserQueryPagePageSize(data:TypeSysUserQueryPagePageSizeResponse): Promise<ResultPage<any>>{
    return http.request({
        url: `/sysUser/query/{page}/{pageSize}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 管理员信息
 * Summary 修改
*/
interface TypeSysUserUpdateIdResponse{
        
            id?:string
        
}

export function SysUserUpdateId(data:TypeSysUserUpdateIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/sysUser/update/{id}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 管理员信息
 * Summary 修改角色
*/
interface TypeSysUserUpdateRoleIdResponse{
        
            id?:string
        
}

export function SysUserUpdateRoleId(data:TypeSysUserUpdateRoleIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/sysUser/updateRole/{id}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 管理员信息
 * Summary 停用0/启用1
*/
interface TypeSysUserUpdateStatusIdStatusResponse{
        
            id?:string
            status?:number
        
}

export function SysUserUpdateStatusIdStatus(params:TypeSysUserUpdateStatusIdStatusResponse): Promise<Result<any>>{
    return http.request({
        url: `/sysUser/updateStatus/{id}/{status}`,
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        params
    })
}
        