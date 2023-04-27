/**
*  @Date 2023/04/27 11:01:48
*  @Auth zjs
*  @Desc 验证码
*/


import http from '../index'
import {Result, ResultPage} from '../types'


/**
 * Tag 验证码
 * Summary validCode
*/
interface TypeSmsCodeValidResponse{
        
            smsValidVo?:undefined
        
}

export function SmsCodeValid(data:TypeSmsCodeValidResponse): Promise<Result<any>>{
    return http.request({
        url: `/sms/code/valid`,
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        data
    })
}
        

/**
 * Tag 验证码
 * Summary 发送验证码短信(countryCode传国家代码 中国:86, 美国:1)
*/
interface TypeSmsSendVCodeCountryCodePhoneResponse{
        
            countryCode?:string
            phone?:string
        
}

export function SmsSendVCodeCountryCodePhone(params:TypeSmsSendVCodeCountryCodePhoneResponse): Promise<Result<any>>{
    return http.request({
        url: `/sms/sendVCode/{countryCode}/{phone}`,
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        params
    })
}
        

/**
 * Tag 验证码
 * Summary 发送验证码短信(国内)
*/
interface TypeSmsSendVCodePhoneResponse{
        
            phone?:string
        
}

export function SmsSendVCodePhone(params:TypeSmsSendVCodePhoneResponse): Promise<Result<any>>{
    return http.request({
        url: `/sms/sendVCode/{phone}`,
        method: 'get',
        headers: {'Content-Type': 'application/json'},
        params
    })
}
        