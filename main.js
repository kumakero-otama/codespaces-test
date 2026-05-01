// 趣味、特技、挨拶の要素
const interests = ["とあるマンガ", "ボカロ鑑賞", "遅寝遅起き"]
const specialties = ["元素記号を暗唱すること", "美味しいものを食べること", "ゆっくりすること"]
const greetings = ["よろしく！", "どうぞよろしくお願いいたします。", "お手柔らかに〜"]

const button = document.querySelector("#button")  // buttonの定義

// buttonがクリックされた時の処理
button.addEventListener("click", function (){  
    const name = document.querySelector("#name").value;  // nameの定義
    
    // 自己紹介の要素をランダムに選ぶ
    const index1 = Math.floor(Math.random() * interests.length);
    const index2 = Math.floor(Math.random() * specialties.length);
    const index3 = Math.floor(Math.random() * greetings.length);
    const interest = interests[index1];
    const specialty = specialties[index2];
    const greeting = greetings[index3];

    // コメントの内容定義
    const message = `
    こんにちは、私の名前は${name}です。 \n
    最近${interest}にハマっていて、
    特技は${specialty}です。 \n
    ${greeting}`
    
    // コメント表示
    const output = document.querySelector("#output");  // outputの定義
    output.textContent =　message; 
})