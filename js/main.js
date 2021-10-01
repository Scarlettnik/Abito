  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  });
  const menuBtn = document.querySelector(".menu-button");
  const menu = document.querySelector(".navbar-panel");
  const menuCloseBtn = document.querySelector(".close-menu");
  menuBtn.addEventListener("click",() => {
  menu.classList.toggle("is-open");
  });
  menuCloseBtn.addEventListener("click",() => {
    menu.classList.toggle("is-open");
  });  
  function replaceButton() {
    $('#first').replaceWith('<button class="pract" id="second">weruyf</button>');
    };
     
var lastResFind=""; // последний удачный результат
var copy_page=""; // копия страницы в ихсодном виде
function TrimStr(s) {
     s = s.replace( /^\s+/g, '');
  return s.replace( /\s+$/g, '');
}
function FindOnPage(inputId) {//ищет текст на странице, в параметр передается ID поля для ввода
  var obj = window.document.getElementById(inputId);
  var textToFind;
 
  if (obj) {
    textToFind = TrimStr(obj.value);//обрезаем пробелы
  } else {
    alert("Введенная фраза не найдена");
    return;
  }
  if (textToFind == "") {
    alert("Вы ничего не ввели");
    return;
  }
 
  if(document.body.innerHTML.indexOf(textToFind)=="-1")
  alert("Ничего не найдено, проверьте правильность ввода!");
 
  if(copy_page.length>0)
        document.body.innerHTML=copy_page;
  else copy_page=document.body.innerHTML;

 
  document.body.innerHTML = document.body.innerHTML.replace(eval("/name="+lastResFind+"/gi")," ");//стираем предыдущие якори для скрола
  document.body.innerHTML = document.body.innerHTML.replace(eval("/"+textToFind+"/gi"),"<a name="+textToFind+" style='background:#e089e8'>"+textToFind+"</a>"); //Заменяем найденный текст ссылками с якорем;
  lastResFind=textToFind; // сохраняем фразу для поиска, чтобы в дальнейшем по ней стереть все ссылки
  window.location = '#'+textToFind;//перемещаем скрол к последнему найденному совпадению
 }
 $(document).on('click','#show_button',function(){
  var $this=$(this);
  $this.prop('id','hide_button');
  $this.val("+8(888)888-88-88");
});
 $(document).on('click','#hide_button',function(){
  var $this=$(this);
   $this.prop('id','show_button');
  $this.val("Показать телефон");
});
$(document).on('click','#show_button_2',function(){
  var $this=$(this);
  $this.prop('id','hide_button');
  $this.val("+7(777)777-77-77");
});

$(document).on('click','#hide_button',function(){
  var $this=$(this);
   $this.prop('id','show_button_2');
  $this.val("Телефон показать");
});
$(document).on('click','#show_button_3',function(){
  var $this=$(this);
  $this.prop('id','hide_button');
  $this.val("+6(666)666-66-66");
});

$(document).on('click','#hide_button',function(){
  var $this=$(this);
   $this.prop('id','show_button_3');
  $this.val("Телефон показать");
});
$(document).on('click','#show_button_4',function(){
  var $this=$(this);
  $this.prop('id','hide_button');
  $this.val("+5(555)555-55-55");
});

$(document).on('click','#hide_button',function(){
  var $this=$(this);
   $this.prop('id','show_button_4');
  $this.val("Телефон показать");
});
$(document).on('click','#show_button_5',function(){
  var $this=$(this);
  $this.prop('id','hide_button');
  $this.val("+4(444)444-44-44");
});

$(document).on('click','#hide_button',function(){
  var $this=$(this);
   $this.prop('id','show_button_5');
  $this.val("Телефон показать");
});
$(document).on('click','#show_button_6',function(){
  var $this=$(this);
  $this.prop('id','hide_button');
  $this.val("+3(333)333-33-33");
});

$(document).on('click','#hide_button',function(){
  var $this=$(this);
   $this.prop('id','show_button_6');
  $this.val("Телефон показать");
});