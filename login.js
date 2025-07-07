// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function () {
  // 获取表单和相关元素
  const form = document.getElementById('loginForm');
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const errorMsg = document.getElementById('errorMsg');

  // 监听表单提交事件
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // 阻止表单默认提交行为
    errorMsg.style.display = 'none';
    errorMsg.textContent = '';

    // 获取输入值并去除首尾空格
    // 获取并去除用户名输入框的首尾空格
    const userVal = username.value.trim();
    // 获取并去除密码输入框的首尾空格
    const passVal = password.value.trim();
    // 用于存储错误信息
    let error = '';

    // 表单验证逻辑
    if (!userVal) {
      error = '请输入用户名';
    } else if (!passVal) {
      error = '请输入密码';
    } else if (userVal.length < 3) {
      error = '用户名长度不能少于3个字符';
    } else if (passVal.length < 6) {
      error = '密码长度不能少于6个字符';
    }

    // 如果有错误，显示错误信息
    if (error) {
      errorMsg.textContent = error;
      errorMsg.style.display = 'block';
      return;
    }

    // 模拟提交（可替换为实际请求）
    alert('登录成功！');
    form.reset(); // 重置表单
  });
}); 