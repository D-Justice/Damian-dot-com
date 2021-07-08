var count = 0;
    var testcount = 0;
    function hide() {
            var leftElement = document.getElementById('left');
            var rightElement = document.getElementById('right');
            var button = document.getElementById('button');

            leftElement.classList.add('hide');
            rightElement.classList.add('hide');
            button.classList.add('hide');
        }
    function myFunction() {
        var leftElement = document.getElementById('left');
        var rightElement = document.getElementById('right');
        var button = document.getElementById('button');
        
        
        rightElement.classList.add('slide_right')
        leftElement.classList.add('slide_left')
        button.classList.add('buttonSlide');
        setTimeout(hide, 3100);
    }
    function slideShowLeft() {
        var slide_1 = document.getElementById('slide1');
        var slide_2 = document.getElementById('slide2');
        var slide_3 = document.getElementById('slide3');
        var leftClick = document.getElementById('left_click');
        
        function transitionLeave(slide_number) {
            
            slide_number.classList.add('slideHide');
            slide_number.classList.remove('slideEnterLeft');
            slide_number.classList.remove('slideShow');
            
        }
        function transitionEnter(slide_number) {
            slide_number.classList.remove('slideLeaveLeft');
            slide_number.classList.add('slideEnterLeft');
            slide_number.classList.add('slideShow');

        }
        if (testcount === 1) {
            testcount -= 1;
            count -= 1;
            slide_2.classList.remove('slideEnterLeft');
            slide_2.classList.add('slideLeaveRight');
            transitionEnter(slide_1);
            console.log('testcount',testcount, 'count',count);
            setTimeout(transitionLeave, 1000, slide_2);
        } else if (testcount === 2) {
            testcount -= 1;
            count -= 1;
            slide_2.classList.remove('slideEnterLeft');
            slide_3.classList.add('slideLeaveRight');
            transitionEnter(slide_2);
            console.log('testcount',testcount, 'count',count);
            setTimeout(transitionLeave, 1000, slide_3);
        }
    }
    function slideShowRight() {
        var slide_1 = document.getElementById('slide1');
        var slide_2 = document.getElementById('slide2');
        var slide_3 = document.getElementById('slide3');
        var rightClick = document.getElementById('right_click');

        function transitionLeave(slide_number) {
            slide_number.classList.remove('slideEnterLeft');
            
            slide_number.classList.add('slideHide');
            slide_number.classList.remove('slideEnterRight');
            slide_number.classList.remove('slideShow');
            
        }
        function transitionEnter(slide_number) {
            slide_number.classList.add('slideEnterRight');
            slide_number.classList.add('slideShow');
            slide_number.classList.remove('slideLeaveRight');

        }

        if (count === 0) {
            count += 1;
            testcount +=1;
            slide_1.classList.remove('slideEnterLeft');
            slide_1.classList.add('slideLeaveLeft');
            transitionEnter(slide_2);
            console.log('testcount',testcount, 'count',count);
            setTimeout(transitionLeave, 1000, slide_1);
            

        } else if (count === 1) {
            count += 1;
            testcount += 1;
            slide_2.classList.remove('slideEnterRight');

            slide_2.classList.add('slideLeaveLeft');
            //slide_2.classList.remove('slideEnter');
            transitionEnter(slide_3);
            console.log('testcount',testcount, 'count',count);
            setTimeout(transitionLeave, 1000, slide_2);
        }
    }