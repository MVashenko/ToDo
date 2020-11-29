
$(function() {
  // плохо использовать var ( лучше использовать let или const ) почитай, что это такое
       // прочитал, поменял на const, так как переменные в коде я не изменяю
  const $tasksList = $("#tasksList")
  const $tasksInput = $("#tasksInput")
  const $notification = $("#notification")

// нейминг не отражает сути -
  const displayNotification = function(){
    if (!$tasksList.children().length){
      $notification.fadeIn("fast")
    } else{
      $notification.css("display", "none")
    }
  }

  $("#taskAdd").on("click", function() {
    // не нужно возвращать что либо если тебе нужно просто ничего не делать можно писать просто return
         // сделал
    if(!$tasksInput.val()) {return;}
    // вот это предлагаю вынести в функцию getItem, которая будет принимать $tasksInput.val() и выдавать элемент

    // также, конкатенация строк через + прошлый век прочитай про темплейтные строчки `` в них ты можешь делать так
    // const a = 4
    // const string = `${a}$`
    // 4$
         //сделал, разобрался
    $tasksList.append(`<li>${$tasksInput.val()}<button class='done'> </button><button class='delete'>&#10006</button></li>`)

    $tasksInput.val("")

    displayNotification()
    // вообще задача была не удалять а помечать выполненным
    // передлагаю каллбек вынести также как функцию displayNotification
    
    /*$(".done").on("click", function(){
      const $done_parent = &(this).done()
      $done.css("")
      блееееееен, ладно, подумаю
    }*/
    
    $(".delete").on("click", function(){
      const $parent = $(this).parent()
      // пропиши стили сразу в css и по событию меняй класс
      $parent.css("animation", "fadeOut .3s linear")
      setTimeout(function(){
        $parent.remove()
        displayNotification()
      }, 250)
    })
  })
})

// задание тебе дальше:
// 1. внести правки выше
// 2. добавить фильтр ( кнопка которая будет отделять выполненные от невыполенных и можно будет посмотреть отдельно списки)