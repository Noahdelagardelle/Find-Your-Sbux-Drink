$(function() {

    $('.submit').on('click', function() {
        var hotOrCold = $('input[name=hot-or-cold]:checked').val();
        var cafOrDecaf = $('input[name=caf-or-no]:checked').val();
        var sweetOrRich = $('input[name=sweet-or-rich]:checked').val();
        var size = $('input[name=size]:checked').val();
        var name = $('input[type=text]').val();

        var cafination;
        var drink = sweetOrRich;

        if (hotOrCold === 'hot') {
            $('.drink-hot').addClass('chosen');
        } else {
            $('.drink-cold').addClass('chosen');
        }

        if (sweetOrRich === 'Frappuccino' && hotOrCold === 'hot') {
          drink = 'Chai Tea Latte';
        }

        if (cafOrDecaf === 'no') {
            var cafination = 'uncaffeinated';
        } else {
            var cafination = 'caffeinated';
        }

        if(name === ''){
          name = 'Person with no name!'
        }

        $('.name').append(name);

        $('.output-text').append('Looks like you could use a ' + size + ' ' + cafination + ' ' + hotOrCold + ' ' + '<b>' + drink + '</b>');
        $('.final-drink-container').addClass('appear');
    });

    $('.input-container').hover(
        function() {
            $(this).addClass('is-hovered').siblings().removeClass('is-hovered');
        },
        function() {
            $(this).removeClass('is-hovered');
        }
    );


    $('.next, .button').click(function() {
        var $btn = $(this),
            $step = $btn.parents('.modal-body'),
            stepIndex = $step.index(),
            $pag = $('.modal-header span').eq(stepIndex);

        if (stepIndex === 0 || stepIndex < 5) {
            console.log(stepIndex);
            step($step, $pag);
        } else {
            stepLast($step, $pag);
        }

    });


    function step($step, $pag) {
        console.log('step');
        // animate the step out
        $step.addClass('animate-out');

        // animate the step in
        setTimeout(function() {
            $step.removeClass('animate-out is-showing')
                .next().addClass('animate-in');
            $pag.removeClass('is-active')
                .next().addClass('is-active');
        }, 500);

        // after the animation, adjust the classes
        setTimeout(function() {
            $step.next().removeClass('animate-in')
                .addClass('is-showing');
        }, 1200);
    }

    function stepLast($step, $pag) {
        console.log('last');

        $step.parents('.modal-wrap').addClass('animate-flip');
        $('.modal-body-step-6').children().animate({
            'opacity': '0'
        });
        $('.modal-header').animate({
            'opacity': '0'
        });
        $('.logo-cover').css({
            'display': 'none'
        });

        setTimeout(function() {
            $step.removeClass('is-showing')
                .children().animate({
                    'opacity': '1'
                });
            $step.parents('.modal-wrap').removeClass('animate-flip')
                .next().addClass('animate-in');
        }, 600);

        setTimeout(function() {
            $('.sb-logo').addClass('logo-jump');
        }, 300)

        // after the animation, adjust the classes
        setTimeout(function() {
            $step.next().removeClass('animate-in')
                .addClass('is-showing');
            $('.sb-logo').removeClass('logo-jump');
        }, 800);
    }

    $('.rerun-button').click(function() {

      $('.sb-logo').addClass('logo-jump');

        $('.modal-wrap').addClass('animate-flip-back')
            .children().animate({
                'opacity': '0'
            });

        setTimeout(function() {
            window.location.replace("index.html");
        }, 600)
    });

});
