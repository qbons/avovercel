;(function( $ ) {
	'use strict'
	
	window.avoblogApp = {
		el: {
			window : $(window),
                        document : $(document),
			currency: ''
		},
		fn: {
			alert : function(data, timer){
				$.alert({
					title: data.title,
					content: data.content,
					animateFromElement: false,
					buttons: {close: {btnClass: 'btn-hide',action: function(){}}},
					autoClose: "close|"+timer+"s",
					backgroundDismiss : true,
					animation: 'scale',
					closeAnimation: 'zoom',
					animationBounce:1
				});
			},
			equalHeight: function(container){
				var currentTallest = 0,
					currentRowStart = 0,
					rowDivs = new Array(),
					currentDiv,
					$el,
					topPosition = 0;
				$(container).each(function() {
			       
					$el = $(this);
					$($el).height('auto');
					topPosition = $el.position().top;
				     
					if (currentRowStart != topPosition) {
						for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
						  rowDivs[currentDiv].height(currentTallest);
						}
						rowDivs.length = 0; // empty the array
						currentRowStart = topPosition;
						currentTallest = $el.height();
						rowDivs.push($el);
					} else {
						rowDivs.push($el);
						currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
					}
					for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
						rowDivs[currentDiv].height(currentTallest);
					}
				});
			},
			normalizeHeight: function(){
				setTimeout(function(){
					//avoblogApp.fn.equalHeight('.detail-product .product-list .product-item');
				},300);
			},
			generic: function(currency){
				//DROPSELECT
				$('.dropselect').each(function(){
					var self = $(this),
						select = self.find('select'),
						label = '',
						tmpl = '<div class="dropholder"><div class="scrollbar-inner"><ul>',
						search = self.hasClass('has-search') ? '<input type="text" value="" placeholder="Masukkan kata pencarian" />' : '';
				
					if (!self.hasClass('no-parsing')) {
						select.find('option').each(function(){
							var listClass =  ($(this).html() == '') ? 'class="empty"' : '';
							if ($(this).is(':selected')) {
								label =  $(this).html() ;
								listClass = 'class="current"';
							}
							tmpl += '<li '+listClass+' data-value="'+$(this).val()+'" data-filter-name="'+$(this).text().toLowerCase()+'">' + $(this).html() + '</li>';
						} );
						tmpl += '</ul></div></div>';
						label = (label != '') ? label : select.find('option:first-child').html();
						if (self.hasClass('ontop')) {
							tmpl =  tmpl + '<strong>'+label+'</strong>' + search;
						}else{
							tmpl = '<strong>'+label+'</strong>' + search + tmpl;	
						}
						
						$(tmpl).appendTo(self);
					}
			      });
				
				$(document).on('click', '.dropselect strong', function(){
					if ($(this).closest('.dropselect').hasClass('has-search')) {
						$(this).closest('.dropselect').find('input').val('');
						$(this).closest('.dropselect').find('input').trigger('keyup');
						$(this).closest('.dropselect').find('input').focus();
					}
					$('.dropselect').not($(this).closest('.dropselect')).removeClass('clicked');
					$(this).closest('.dropselect').toggleClass('clicked');
				});
			      
			       $(document).on('click', '.dropselect li', function(){
					var self = $(this),
						parent = self.closest('.dropselect'),
						target = parent.find('select'),
						label = parent.find('strong');
				    
					label.html(self.html());
					target.val(self.attr('data-value'));
					target.trigger('change');
					parent.find('li').removeClass('current');
					self.addClass('current');
					parent.addClass('activated');
					parent.removeClass('clicked');
			       });
			       
			       $(document).on('keyup', '.dropselect.has-search input', function(){
					var self = $(this),
						parent = self.closest('.dropselect'),
						searchVal = self.val(),
						filterItems = parent.find('li');
					if ( searchVal != '' ) {
						filterItems.addClass('hidden');
						var selected = parent.find('li[data-filter-name*="' + searchVal.toLowerCase() + '"]');
						selected.removeClass('hidden');
					} else {
						filterItems.removeClass('hidden');
					}
			       });
			       
			       $('.accord-item .acc-head').on('click', function(){
					var self = $(this),
						parent = self.closest('.accord-item'),
						target = parent.find('.acc-body');
					
					target.stop().slideToggle('fast', function(){
						parent.toggleClass('expanded');
					});
				});
			       
			       $('.tab-basic .tab-head a').on('click', function(e){
					e.preventDefault();
					var self = $(this),
						parent = self.closest('.tab-basic');
					
					parent.find('.tab-head a').removeClass('active');
					parent.find('.tab-item').removeClass('active');
					
					self.addClass('active');
					$(self.attr('href')).addClass('active');
					
					$(".acc-order .data-order .pitem .caption h3").dotdotdot({
						ellipsis: "\u2026 ",
						height: 15,
					});
				});
			       
			       $('.form-basic .pass-field b').on('click', function(){
					var self = $(this),
                                                target = self.closest('.pass-field').find('input');
					
					if (target.attr('type') == 'password') {
						target.attr('type', 'text');
                                                self.addClass('merem');
					}else{
						target.attr('type', 'password');
                                                self.removeClass('merem');
					}
				});

				
			       //SLICK
			       $('.autoslide.slick-carousel').slick({
					infinite: true,
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: false,
					prevArrow: $('.slidenav .prev'),
					nextArrow: $('.slidenav .next'),
					autoplay: true,
					speed: 500,
					autoplaySpeed: 5000,
					variableWidth: false,
					responsive: [
						{
							breakpoint: 768,
							settings: {
								arrows: false,
								dots: true,
								slidesToShow: 1
							}
						}
					]
				});
			       
			       $(document).on('click', 'a.expand', function(e){
					e.preventDefault();
					var self = $(this),
						parent = self.closest('.item');
						
					self.toggleClass('active');
					parent.toggleClass('expanded');
			       });
			       
			       //Mobile accord
			       $('a.xpander').on('click', function(e){
					e.preventDefault();
					$(this).toggleClass('active');
			       });
			       
			       //Cart calculation
				$(document).on('click', '.calc a', function(e){
					e.preventDefault();
					var self = $(this),
						parent = self.closest('.calc'),
						target = parent.find('span'),
						targetValue = parseInt(target.html()),
						max = 0,
						update = false;
					
					if (parent.attr('data-max') != 0) {
						max = parent.attr('data-max');
					}
					
					if (self.hasClass('min') && targetValue != 1) {
						self.closest('.calc').find('a').removeClass('inactive');
						target.html(targetValue - 1);
						self.closest('.quantity').find('.input-text.qty.text').val(targetValue - 1);
						update = true;
						if (parseInt(target.html()) == 1) {
							self.addClass('inactive');
						}	
					}else if (self.hasClass('plus') ) {
						if (max > 0 && parseInt(targetValue) < parseInt(max)) {
							self.closest('.calc').find('a').removeClass('inactive');
							target.html(targetValue + 1);
							self.closest('.quantity').find('.input-text.qty.text').val(targetValue + 1);
							update = true;
							if (parseInt(target.html()) == parseInt(max)) {
								self.addClass('inactive');
							}	
						}
					}
					
				});
				
				//Button disable
				$('.button.disabled').on('click', function(e){
					e.preventDefault();
				});
				
				//ADDITIONAL
				$('.inner-product .list .filter a').on('click', function(e){
					e.preventDefault();
					var self = $(this),
						parent = self.closest('.filter'),
						target = parent.find('span');
						
					$('.inner-product .list .filter a').not(self).removeClass('active');
					if (!self.hasClass('active')) {
						self.addClass('active');
					}else{
						self.removeClass('active');
					}
					target.text(self.text());
				});
				
				$('.inner-blog .sidebar .blocky a').on('click', function(e){
					e.preventDefault();
					var self = $(this);
						
					$('.inner-blog .sidebar .blocky a').not(self).removeClass('active');
					if (!self.hasClass('active')) {
						self.addClass('active');
					}else{
						self.removeClass('active');
					}
				});
				
				
				
				$('.inner-author .article .slick-carousel').slick({
					infinite: true,
					slidesToShow: 3,
					slidesToScroll: 1,
					dots: true,
					prevArrow: $('.slidenav .prev'),
					nextArrow: $('.slidenav .next'),
					autoplay: true,
					speed: 800,
					autoplaySpeed: 5000,
					variableWidth: false,
					responsive: [
						{
							breakpoint: 991,
							settings: {
								arrows: false,
								dots: true,
								slidesToShow: 2
							}
						},
						{
							breakpoint: 768,
							settings: {
								arrows: false,
								dots: false,
								slidesToShow: 1,
								variableWidth: true
							}
						}
					]
				});
				
				$('.inner-kamus .slider, .detail-blog .slider, .inner-home .grid .slider, .inner-home .product .slider').each(function(){
					var self = $(this),
						breakpoint = [
							{
								breakpoint: 991,
								settings: {
									arrows: false,
									dots: true,
									slidesToShow: 2
								}
							}
						];
					if (self.hasClass('unslick-mobile')) {
						breakpoint.push({
							breakpoint: 768,
							settings: "unslick"
						});
					}else{
						breakpoint.push({
							breakpoint: 768,
							settings: {
								arrows: false,
								dots: false,
								slidesToShow: 1,
								variableWidth: true,
							}
						});
					}
					self.find('.slick-carousel').slick({
						infinite: true,
						slidesToShow: (self.hasClass('trio')) ? 3 : 4,
						slidesToScroll: 1,
						dots: true,
						prevArrow: self.find('.slidenav .prev'),
						nextArrow: self.find('.slidenav .next'),
						autoplay: true,
						speed: 800,
						autoplaySpeed: 5000,
						variableWidth: false,
						responsive: breakpoint
					});
				});
				
				$('.inner-home .caro .slider').each(function(){
					var self = $(this);
					
					self.find('.slick-carousel').slick({
						infinite: true,
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: false,
						prevArrow: self.find('.slidenav .prev'),
						nextArrow: self.find('.slidenav .next'),
						autoplay: true,
						fade: true,
						speed: 800,
						autoplaySpeed: 5000,
						variableWidth: false
					});
				});
				
				$('.mobile-trigger').on('click', function(e){
					e.preventDefault();
					$('body').addClass('open-menu');
					setTimeout(function(){
						$('body').addClass('open-menu-holder');	
					},300);
				});
				$('.sidemenu .bg').on('click', function(e){
					e.preventDefault();
					$('body').removeClass('open-menu-holder');
					setTimeout(function(){
						$('body').removeClass('open-menu');
					},300);
					
				});
				
				$('.popup-filter .action .btn-hollow').on('click', function(e){
					e.preventDefault();
					$(this).closest('.popup-filter').find('.fancybox-close-small').trigger('click');
				});
				
				$('.format-text h1, .format-text h2, .format-text h3, .format-text h4, .format-text h5, .format-text h6').each(function(){
					var self = $(this);
					if (self.find('>b').length) {
						self.html('<span>'+self.html()+'</span>');
						self.addClass('has-bullet');
					}
				});
				
				$('.inner-kamus .search .alpha').on('click', function(){
					if (avoblogApp.fn.isMobile()) {
						$.fancybox.open({
							src  : '#popup-alpha',
							type : 'inline'
						});
					}
				});
			},
			stickySidebar: function(elem, top = 0, bottom = 0){
                                var topSpacing =  $('#top').outerHeight() + top,
                                        bottomSpacing =  $('#bottom').outerHeight() + bottom;
					
                                $(elem).sticky({
                                        topSpacing: topSpacing,
                                        bottomSpacing: bottomSpacing,
                                });
                        },
			stickyBlog: function(elem, top = 0, bottom = 0){
                                var topSpacing =  $('#top').outerHeight() + top,
                                        bottomSpacing =  $('#bottom').outerHeight()
									+ $('.detail-blog .product').outerHeight()
									+ $('.detail-blog .banner').outerHeight()
									+ $('.detail-blog .utility').outerHeight()
									+ $('.detail-blog .grid').outerHeight()
									+ bottom;
					
                                $(elem).sticky({
                                        topSpacing: topSpacing,
                                        bottomSpacing: bottomSpacing,
                                });
                        },
			copyToClipboard : function(element) {
				var $temp = $("<input>");
				$("body").append($temp);
				$temp.val(element.val()).select();
				document.execCommand("copy");
				$temp.remove();
				return true;
			},
			currency: function(){
				numeral.register('locale', 'id', {
					delimiters: {
						thousands: '.',
						decimal: ','
					},
					abbreviations: {
						thousand: 'k',
						million: 'm',
						billion: 'b',
						trillion: 't'
					},
					currency: {
						symbol: 'Rp '
					}
				});
				return numeral;
			},
			formSubmit: function(){
				
				//FORM SIGNUP
				$('#form-register').on('submit', function(e){
					e.preventDefault();
					var self = $(this),
						button = self.find('button.button'),
						data = self.serialize();
					
					if (!button.hasClass('fetching')) {
						button.addClass('fetching');
						axios.post( avoblog_data.api + "user_register/", {data:data} ).then( function(response) {
							button.removeClass('fetching');
							avoblogApp.fn.alert({
								"title": response.data.title,
								"content": response.data.msg
							},1000);
							if (response.data.status == 'ok') {
								window.location.reload();
							}
						}).catch( function(error){ console.log(error)} );
					}
				});
				
			},
			isMobile: function(){
				if(window.matchMedia("only screen and (max-width: 768px)").matches){
					$('body').addClass('is-mobile');
					return true;
				}else{
					$('body').removeClass('is-mobile');
					return false;
				}
			},
			addLoading: function(){
				$('<div class="animate-loading">'+
						'<div class="centered">'+
							'<div class="ldr">'+
								'<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>'+
							'</div><!-- end of ldr -->'+
						'</div><!-- end of centered -->'+
					'</div><!-- end of animate loading -->').prependTo('body');
			},
			removeLoading: function(){
				$('body').find('.animate-loading').remove();
			},
		
		},
		run: function(){
                        //WINDOW LOAD
			avoblogApp.el.window.on('load',function(){
				//Scrollbar
				$('.scrollbar-inner').scrollbar();
				
				//Equal height
				avoblogApp.fn.normalizeHeight();
				
				avoblogApp.fn.stickySidebar('.inner-blog .sidebar .holder', 30,  70);
				avoblogApp.fn.stickyBlog('.detail-blog .main .info .holder', 120,  130); // 130 based on padding bottom .detail-blog .main
				avoblogApp.fn.stickyBlog('.detail-blog .main .related .holder', 20,  130);
				
			});
			
			//WINDOW RESIZE
			avoblogApp.el.window.on('resize',function(){
				//Scrollbar
				$('.scrollbar-inner').scrollbar();
				
				//Detect if it's mobile device
				avoblogApp.fn.isMobile();
				
				//Equal height
				avoblogApp.fn.normalizeHeight();
				
				avoblogApp.fn.stickySidebar('.inner-blog .sidebar .holder', 30,  70);
				avoblogApp.fn.stickyBlog('.detail-blog .main .info .holder', 120,  130); // 130 based on padding bottom .detail-blog .main
				avoblogApp.fn.stickyBlog('.detail-blog .main .related .holder', 20,  130);
				
			});
			
			//WINDOW READY
                        avoblogApp.el.document.ready(function(){
				
				//Setup currency
				avoblogApp.el.currency = avoblogApp.fn.currency();
				avoblogApp.el.currency.locale('id');
				
				//Detect if it's mobile device
				avoblogApp.fn.isMobile();
				
				//Trigger generic function
				avoblogApp.fn.generic(avoblogApp.el.currency);
				
				//Trigger form submission
				avoblogApp.fn.formSubmit();

				
			});
			
			//WINDOW SCROLL
			avoblogApp.el.window.on('scroll',function(){
				if($(window).scrollTop() > 80) {
					$('#top').addClass('is-sticky');
				}else{
					$('#top').removeClass('is-sticky');
				}
			});
		}
	}
	
	avoblogApp.run();
	
}(jQuery));