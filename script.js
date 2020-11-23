console.log('log')
$(function() {
	var $tasksList = $("#tasksList")
	var $tasksInput = $("#tasksInput")
	var $notification = $("#notification")


	var displayNotification = function(){
		if (!$tasksList.children().length){
			$notification.fadeIn("fast")
		} else{
			$notification.css("display", "none")
		}
	}

	$("#taskAdd").on("click", function() {
		if(!$tasksInput.val()) {return false;}

		$tasksList.append("<li>" + $tasksInput.val() + "<button class='delete'>&#10006</button></li>")

		$tasksInput.val("")

		displayNotification()

		$(".delete").on("click", function(){
			var $parent = $(this).parent()
			$parent.css("animation", "fadeOut .3s linear")	
			setTimeout(function(){
				$parent.remove()
				displayNotification()
			}, 250)
		})
	})
})