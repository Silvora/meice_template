/* 服务器返回数据的的类型，根据接口文档确定 */
export interface Result<T=any> {
    code: number; /* 状态码 */
    datas: T;     /* 返回结果 */
    message: string; /* 返回消息 */
    status: string;  /* 返回值(S/F) */
}

export interface ResultPage<T=any> {
    code: number;    
    count: boolean;
    datas: T;       /* 返回结果 */
    endRow: number;
    message: string;
    page: number;
    pageNum: number;
    pageSize: number;
    pages: number;
    startRow: number;
    status: string;
    total: number;    /* 总行数 */
    totalSize: number;/* 总行数 */
}
