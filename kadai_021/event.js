// btnというidをもつHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
// textというidをもつHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// HTML要素がクリックされた後、2秒後にイベント処理を実行する
btn.addEventListener('click' , () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  } , 2000);
});

