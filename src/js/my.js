
        // for nav bar
        $(document).on("scroll", function () {
            if
                ($(document).scrollTop() > 86) {
                $("#banner").addClass("shrink");
            }
            else {
                $("#banner").removeClass("shrink");
            }
        });
        // for nav bar  

        // pop newsLetter
        $(document).ready(function () {
            setTimeout(function () {
                $("#popUpMain").css("display", "block");
            }, 5000);
        });


        $(".subscribeId").click(function () {
            $("#popUpMain").css("display", "none");
        });

        function thanksPopUp_() {
            // swal("Try again...!", "You clicked the button!", "error");
            swal({
                title: "Thanks for Subscribe.",
                text: "You clicked the button for exit!",
                icon: "success",
                button: "Take Care",
            });
        }
        // pop newsLetter

        // subscribe mail

        function subscribeBtn() {
            // swal("Try again...!", "You clicked the button!", "error");
            swal({
                title: "Thanks for Subscribe.",
                text: "You clicked the button for exit!",
                icon: "success",
                button: "Take Care",
            });
        }

        // want-to-ask
        $(document).ready(function () {
            $("a.collapsed").click(function () {
                $(this).find(".btn:contains('answer')").toggleClass("collapsed");
            });
        });
        // want-to-ask

        // for countDown section
        (function ($) {
            $.fn.countTo = function (options) {
                options = options || {};

                return $(this).each(function () {
                    // set options for current element
                    var settings = $.extend({}, $.fn.countTo.defaults, {
                        from: $(this).data('from'),
                        to: $(this).data('to'),
                        speed: $(this).data('speed'),
                        refreshInterval: $(this).data('refresh-interval'),
                        decimals: $(this).data('decimals')
                    }, options);

                    // how many times to update the value, and how much to increment the value on each update
                    var loops = Math.ceil(settings.speed / settings.refreshInterval),
                        increment = (settings.to - settings.from) / loops;

                    // references & variables that will change with each update
                    var self = this,
                        $self = $(this),
                        loopCount = 0,
                        value = settings.from,
                        data = $self.data('countTo') || {};

                    $self.data('countTo', data);

                    // if an existing interval can be found, clear it first
                    if (data.interval) {
                        clearInterval(data.interval);
                    }
                    data.interval = setInterval(updateTimer, settings.refreshInterval);

                    // initialize the element with the starting value
                    render(value);

                    function updateTimer() {
                        value += increment;
                        loopCount++;

                        render(value);

                        if (typeof (settings.onUpdate) == 'function') {
                            settings.onUpdate.call(self, value);
                        }

                        if (loopCount >= loops) {
                            // remove the interval
                            $self.removeData('countTo');
                            clearInterval(data.interval);
                            value = settings.to;

                            if (typeof (settings.onComplete) == 'function') {
                                settings.onComplete.call(self, value);
                            }
                        }
                    }

                    function render(value) {
                        var formattedValue = settings.formatter.call(self, value, settings);
                        $self.html(formattedValue);
                    }
                });
            };

            $.fn.countTo.defaults = {
                from: 0,               // the number the element should start at
                to: 0,                 // the number the element should end at
                speed: 1000,           // how long it should take to count between the target numbers
                refreshInterval: 100,  // how often the element should be updated
                decimals: 0,           // the number of decimal places to show
                formatter: formatter,  // handler for formatting the value before rendering
                onUpdate: null,        // callback method for every time the element is updated
                onComplete: null       // callback method for when the element finishes updating
            };

            function formatter(value, settings) {
                return value.toFixed(settings.decimals);
            }
        }(jQuery));

        jQuery(function ($) {
            // custom formatting example
            $('.count-number').data('countToOptions', {
                formatter: function (value, options) {
                    return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
                }
            });

            // start all the timers
            $('.timer').each(count);

            function count(options) {
                var $this = $(this);
                options = $.extend({}, options || {}, $this.data('countToOptions') || {});
                $this.countTo(options);
            }
        });
        // for countDown section

//on scroll

$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });


  //Effective Tools For Busy Administrators div element hover effect

  $(document).ready(function(){
      $(".tools-items").mouseenter(function(){
        $(this).css({
            'background':'#8d00c9',
            'cursor':'Pointer',
            'color':'white',
            'transition':'.5s',
            'transform': 'scale(1.1)'
            
        });
      });
      $(".tools-items").mouseleave(function(){
        $(this).css({
            'background':'white',
            'color':'black',
            'transition':'.5s',
            'transform': 'scale(1)'
            
        });
      });
  });


  //slide from left
  $(window).scroll(function(){
    var sticky = $('.EffectiveToolssliderLeftEffect'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('effective_toolsHeadingAddClass');
    else sticky.removeClass('effective_toolsHeadingAddClass');
  });

  //powerful tools for your customers
  // left part
  $(window).scroll(function(){
      var sticky = $('.firstPart_powerFullTools li'),
      scroll = $(window).scrollTop();

      if (scroll >= 700) sticky.addClass('effective_toolsHeadingAddClass');
      else sticky.removeClass('effective_toolsHeadingAddClass');

  });

  // right part
$(window).scroll(function(){
    var sticky = $('.powerFulTools-item_right_side_item .subitem'),
    scroll = $(window).scrollTop();

    if (scroll >= 700) sticky.addClass('effective_toolsHeadingAddClass_Late');
    else sticky.removeClass('effective_toolsHeadingAddClass_Late');
});