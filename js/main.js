jQuery(function($) {
	var channelInformatyka = "https://www.schoollife.org.ua/category/fajly/informatyka/feed/",
		channelOsvitaIT = "https://www.schoollife.org.ua/category/osvita-i-it/feed/"
	
	$("#rss-feeds").rss(channelOsvitaIT,
	{
		ssl: true,
		limit: 10,
		entryTemplate:'<li><a href="{url}" target="__blank">{title}</a><br/>{teaserImage}{shortBodyPlain}</li>'
	})	
	

	$('.navbar li a').not('.dropdown-toggle,.my-external').click(function(event) {
		var offset = 70;
		var targ = $(this).attr('href');
		if (targ != '#home-page') {
			offset = 50;
		} 
		if (targ == '#about-page') {
			offset = 0;
		}
		setTimeout(function(){scrollBy(0, -offset);}, 1);
		
		
		$('#navbar-main .navbar-toggler-icon').filter(':visible').click();
	});
})
