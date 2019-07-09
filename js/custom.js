$(document).ready(function()
{
	"use strict";

	/*

	1. Vars and Inits

	*/

	var header = $('.header');

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();

		setTimeout(function()
		{
			$(window).trigger('resize.px.parallax');
		}, 375);
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	initDeptSlider();
	initAccordions();

	/*

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 91)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/*
	4. Init Dept Slider

	*/

		/*

		5. Init Accordions

		*/

		function initAccordions()
		{
			if($('.accordion').length)
			{
				var accs = $('.accordion');

				accs.each(function()
				{
					var acc = $(this);

					if(acc.hasClass('active'))
					{
						var panel = $(acc.next());
						var panelH = panel.prop('scrollHeight') + "px";

						if(panel.css('max-height') == "0px")
						{
							panel.css('max-height', panel.prop('scrollHeight') + "px");
						}
						else
						{
							panel.css('max-height', "0px");
						}
					}

					acc.on('click', function()
					{
						if(acc.hasClass('active'))
						{
							acc.removeClass('active');
							var panel = $(acc.next());
							var panelH = panel.prop('scrollHeight') + "px";

							if(panel.css('max-height') == "0px")
							{
								panel.css('max-height', panel.prop('scrollHeight') + "px");
							}
							else
							{
								panel.css('max-height', "0px");
							}
						}
						else
						{
							acc.addClass('active');
							var panel = $(acc.next());
							var panelH = panel.prop('scrollHeight') + "px";

							if(panel.css('max-height') == "0px")
							{
								panel.css('max-height', panel.prop('scrollHeight') + "px");
							}
							else
							{
								panel.css('max-height', "0px");
							}
						}
					});
				});
			}
		}

	});
