const button = document.querySelector("#button")  // buttonの定義
button.addEventListener("click", function (){  // buttonがクリックされた時の処理
    const name = document.querySelector("#name").value;  // nameの定義
    const message = `こんにちは、私の名前は${name}です。`
    const output = document.querySelector("#output");  // outputの定義
    output.textContent =　message; 
})