var isHovering = false;

$(".tab").click(function() {
	$('.shrinker').removeClass('timelapse');
	setTimeout(function() {
		$('.shrinker').addClass('timelapse');
	}, 10)
})




//make the timelapse reset each 10 seconds
setInterval(function() {
	if (!isHovering) {
		$('.shrinker').removeClass('timelapse');
		setTimeout(function() {
			$('.shrinker').addClass('timelapse');
		}, 10)
	}

} , 10000);


var tabsProgress = document.getElementsByClassName("tabs-progress");
var timelapse = document.getElementsByClassName("timelapse");
for (let i = 0; i < tabsProgress.length; i++) {
  tabsProgress[i].addEventListener("mouseover", function() {
	isHovering = true;
		var style;
		for (let i = 0; i < timelapse.length; i++) {
			style = timelapse[i].style;
			if (style.webkitAnimationPlayState === "running") {
				style.webkitAnimationPlayState = "paused";
			} else {
				style.webkitAnimationPlayState = "running";
			}
		}
	
  }
  );
  tabsProgress[i].addEventListener("mouseout", function() {
	isHovering = false;
	var style;
		for (let i = 0; i < timelapse.length; i++) {
			style = timelapse[i].style;
			if (style.webkitAnimationPlayState === "paused") {
				style.webkitAnimationPlayState = "running";
			}
		}
  }
  );
}