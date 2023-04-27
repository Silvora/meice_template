/**
*  @Date 2023/04/27 11:01:48
*  @Auth zjs
*  @Desc 角色信息
*/


import http from '../index'
import {Result, ResultPage} from '../types'


/**
 * Tag 角色信息
 * Summary 新增
*/
interface TypeSysRoleAddResponse{
        
        
}

export function SysRoleAdd(data:TypeSysRoleAddResponse): Promise<Result<any>>{
    return http.request({
        url: `/sysRole/add`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 角色信息
 * Summary 根据ID删除
*/
interface TypeSysRoleDeleteIdResponse{
        
            id?:number
        
}

export function SysRoleDeleteId(params:TypeSysRoleDeleteIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/sysRole/delete/{id}`,
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        params
    })
}
        

/**
 * Tag 角色信息
 * Summary 分页查询
*/
interface TypeSysRoleQueryPagePageSizeResponse{
        
            page?:number
            pageSize?:number
        
}

export function SysRoleQueryPagePageSize(data:TypeSysRoleQueryPagePageSizeResponse): Promise<ResultPage<any>>{
    return http.request({
        url: `/sysRole/query/{page}/{pageSize}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 角色信息
 * Summary 查询所有角色
*/
interface TypeSysRoleQueryAllResponse{
        
        
}

export function SysRoleQueryAll(data:TypeSysRoleQueryAllResponse): Promise<ResultPage<any>>{
    return http.request({
        url: `/sysRole/queryAll`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 角色信息
 * Summary 修改
*/
interface TypeSysRoleUpdateIdResponse{
        
            id?:number
        
}

export function SysRoleUpdateId(data:TypeSysRoleUpdateIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/sysRole/update/{id}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        