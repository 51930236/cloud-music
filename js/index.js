/*
 * @Author: 吴世强 11076535+mr-wushiqiang@user.noreply.gitee.com
 * @Date: 2022-08-31 12:03:51
 * @LastEditors: 吴世强 11076535+mr-wushiqiang@user.noreply.gitee.com
 * @LastEditTime: 2022-09-01 15:32:09
 * @FilePath: \13036\js\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
navigatorTo();

function navigatorTo() {
  /*判断是否处于登录状态，没登录跳转到登录页面*/
  if (!localStorage.getItem("CURRENT_LOGIN_INFO")) {
    console.log('没有登录跳转到登录页面');
   window.location.replace('https://51930236.github.io/wsq_demo01/login.html')
  }

}

$(document).ready(()=>{
  // 年龄
  var start = 2000;
  var now = new Date().getFullYear();
  var age = now - start;
  document.querySelector('#age').innerHTML = age;
})