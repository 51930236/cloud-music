document.write(`<script src="https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.min.js"></script>`);

function check() {
  var userName = document.getElementById('username');
  var pwd = document.getElementById('password');
  var userPassword = md5(pwd.value);
  pwd = userPassword
  if (pwd == '2BD12A930C3012F9BB4E0EA9BEC9A3FC') {
    localStorage.setItem("CURRENT_LOGIN_INFO", JSON.stringify({
      userName: userName.value
    }));
    // 跳转到首页
    
  } else {
    /*判断是否处于登录状态，没登录清除record_timestamp*/
    if (!localStorage.getItem("CURRENT_LOGIN_INFO")) {
      localStorage.clear()
    }
  }
  return true;
}