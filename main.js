const button = document.querySelector("#button")  // ここでいうbuttonとは、自己PRするボタンのことだよ
button.addEventListener("click", function (){  // buttonがクリックされた時の処理
    const output = document.querySelector("#output");  // ここでいうoutputとは、吹き出し用テキストのことだよ
    output.textContent =　"Hello Would!!"  // outputに"Hello Would!!"と表示してね
})