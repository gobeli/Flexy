$(".menu-item").click(function(event){
	event.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 500);
});


var $collapsLinks = $("a[data-toggle='collapse']");
$collapsLinks.click(function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.attr('aria-expanded', function (i, attr) {
        var expanded = attr != "true";
        $this.attr("aria-expanded", expanded);
        $($this.attr("data-target")).slideToggle(400)
    });
});

$(window).resize(function(){
	var win = $(this);
	if (win.width() >= 480){
		$("#nav-collapse").fadeIn();
	} else {
		$("#nav-collapse").fadeOut();		
	}
});