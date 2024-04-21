const dictionary = {
    "你好": "Hello (Nǐ hǎo)",
    "谢谢": "Thank you (Xièxiè)",
    "晚上好": "Good evening (Wǎnshàng hǎo)",
    "请": "Please (Qǐng)",
    "这是哪里": "Where is this? (Zhè shì nǎlǐ?)",
    "是的": "Yes (Shì de)",
    "不": "No (Bù)",
    "对不起": "I'm sorry (Duìbùqǐ)",
    "早上好": "Good morning (Zǎoshang hǎo)",
    "你叫什么名字": "What's your name? (Nǐ jiào shénme míngzì?)",
    "你好吗": "How are you? (你好吗？?)",
    "大家好": "Hello everyone (Dàjiā hǎo)",
    "这个多少钱": "How much is this? (Zhège duōshǎo qián?)",
    "回头见": "See you later (Huítóu jiàn)",
    "再见": "Good bye (Zàijiàn)",
    "こんにちは": "Hello (Kon'nichiwa)",
    "ありがとう": "Thank you (Arigatō)",
    "こんばんは": "Good evening (Konbanwa)",
    "お願いします": "Please (Onegaishimasu)",
    "ここはどこですか": "Where is this? (Koko wa dokodesu ka?)",
    "はい": "Yes (Hai)",
    "いいえ": "No (Īe)",
    "ごめんなさい": "I'm sorry (Gomen'nasai)",
    "おはよう": "Good morning (Ohayō)",
    "あなたの名前は何ですか": "What's your name? (Anata no namae wa nanidesu ka?)",
    "元気ですか": "How are you? (Genkidesu ka?)",
    "こんにちは、みんな": "Hello everyone (Kon'nichiwa, min'na)",
    "これはいくらですか": "How much is this? (Kore wa ikuradesu ka?)",
    "また後で": "See you later (Mataatode)",
    "さよなら": "Good bye (Sayonara)"
};

document.addEventListener('mouseover', translateOnHover);

function translateOnHover (event) {
    const el = event.target;

    if (el.title) return;
    if (el.firstChild && el.firstChild.nodeName != '#text') return;

    for (let phrase in dictionary) {
        const text = el.innerText;
        if (text.includes(phrase)) {
            el.title = dictionary[phrase];
        }
    }
}
