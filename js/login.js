/*
 * @Author: 吴世强 11076535+mr-wushiqiang@user.noreply.gitee.com
 * @Date: 2022-08-31 15:34:12
 * @LastEditors: 吴世强 11076535+mr-wushiqiang@user.noreply.gitee.com
 * @LastEditTime: 2022-08-31 16:03:36
 * @FilePath: \wsq_demo01\js\login.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
document.write(`<script src="https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.min.js"></script>`);

function check() {
  var userName = document.getElementById('username');
  var pwd = document.getElementById('password');
  console.log(pwd.value);
  var userPassword = md5(pwd.value);
  pwd = userPassword
  console.log(pwd);
  if (userName.value == 'wsq') {
    if (pwd == 'e10adc3949ba59abbe56e057f20f883e') {
      localStorage.setItem("CURRENT_LOGIN_INFO", JSON.stringify({
        userName: userName.value
      }));
      // 跳转到首页
      window.location.replace('https://51930236.github.io/wsq_demo01/index.html')
      console.log('跳转到首页', localStorage.getItem("CURRENT_LOGIN_INFO"));
    } else {
      alert("密码错误");
      /*判断是否处于登录状态，没登录清除record_timestamp*/
      if (!localStorage.getItem("CURRENT_LOGIN_INFO")) {
        localStorage.clear()
      }
    }
  } else {
    alert("账号错误");
  }
  return true;
}

function logout() {
  window.location.replace('https://51930236.github.io/wsq_demo01/login.html');\
  localStorage.clear()
}