/**
*  @Date 2023/04/27 11:01:48
*  @Auth zjs
*  @Desc 角色权限信息
*/


import http from '../index'
import {Result, ResultPage} from '../types'


/**
 * Tag 角色权限信息
 * Summary 新增角色权限菜单
*/
interface TypeSysRoleMenuAddRoleIdResponse{
        
            roleId?:number
            menuIds?:undefined
        
}

export function SysRoleMenuAddRoleId(data:TypeSysRoleMenuAddRoleIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/sysRoleMenu/add/{roleId}`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 角色权限信息
 * Summary 删除角色权限菜单
*/
interface TypeSysRoleMenuDeleteRoleIdResponse{
        
            roleId?:number
        
}

export function SysRoleMenuDeleteRoleId(params:TypeSysRoleMenuDeleteRoleIdResponse): Promise<Result<any>>{
    return http.request({
        url: `/sysRoleMenu/delete/{roleId}`,
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        params
    })
}
        