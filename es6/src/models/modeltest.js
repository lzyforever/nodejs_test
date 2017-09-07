export var webName = "钓友社区";
export let url = "www.diaoyoushequ.com";
export const year = 2017;

//在此集中导出
// export {
//   webName as web, 
//   url as webUrl, 
//   year as webYear
// }

//导入时就得用别名导入了
//import {web, webUrl, webYear} from '../models/modeltest.js';


export function add(a,b){
    return a+b;
}

export  class User {
	constructor(){
		console.log("user 被创建了");
	}
}