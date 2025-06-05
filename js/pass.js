const correctPassword = "12345"; // 🔒 任意のパスワードに変更可

document.addEventListener("DOMContentLoaded", () => {
  const input = prompt(
    "このページは保護されています。パスワードを入力してください："
  );

  if (input === correctPassword) {
    // 認証成功：表示を戻す
    document.documentElement.style.backgroundColor = "";
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
    document.body.style.visibility = "visible";
  } else {
    // 認証失敗：警告表示
    document.body.innerHTML =
      "<h2 style='color: white; text-align: center; margin-top: 30vh;'>パスワードが違います。</h2>";
    document.documentElement.style.backgroundColor = "#000";
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
    document.body.style.visibility = "visible";
  }
});
