/**
*  @Date 2023/04/27 11:01:48
*  @Auth zjs
*  @Desc 文件操作接口
*/


import http from '../index'
import {Result, ResultPage} from '../types'


/**
 * Tag 文件操作接口
 * Summary 访问文件
*/
interface TypeFileGetResponse{
        
        
}

export function FileGet(data:TypeFileGetResponse): Promise<Result<any>>{
    return http.request({
        url: `/file/get`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 文件操作接口
 * Summary 上传文件(不能以/开头)
*/
interface TypeFilePutResponse{
        
            path?:string
            file?:file
        
}

export function FilePut(data:TypeFilePutResponse): Promise<Result<any>>{
    return http.request({
        url: `/file/put`,
        method: 'post',
        headers: {'Content-Type': 'multipart/form-data'},
        data
    })
}
        

/**
 * Tag 文件操作接口
 * Summary 访问文件(地址方式)
*/
interface TypeFilePathResponse{
        
            path?:string
        
}

export function FilePath(params:TypeFilePathResponse): Promise<Result<any>>{
    return http.request({
        url: `/file/{path}/**`,
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        params
    })
}
        