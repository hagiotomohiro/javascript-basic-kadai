// btnというidをもつHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// HTML要素がクリックされた後、2秒後にイベント処理を実行する
btn.addEventListener('click' , () => {
  const text = document.getElementById('text');
});
setTimeout(() => {
  text.textContent = 'ボタンをクリックしました';
} , 2000)
