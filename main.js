// 趣味、特技、挨拶の設定
const interests = ["とあるマンガ", "ボカロ鑑賞", "遅寝遅起き"]
const specialties = ["元素記号を暗唱すること", "美味しいものを食べること", "ゆっくりすること"]
const greetings = ["よろしく！", "どうぞよろしくお願いいたします。", "お手柔らかに〜"]

const button = document.querySelector("#button")  // buttonの定義

// buttonがクリックされた時の処理
button.addEventListener("click", function (){  
    const name = document.querySelector("#name").value;  // nameの定義
    
    // 表示するコメント
    const message = `
    こんにちは、私の名前は${name}です。
    最近${interests}にハマっていて、
    特技は${specialties}です。
    ${greetings}`
    
    const output = document.querySelector("#output");  // outputの定義
    output.textContent =　message; 
})