'use strict';


angular.module('directivesDemoApp')
    .directive('dirWithEvnetListner', ['$document', function($document) {


    	/**
    	 * This is the linking function
    	 * @param  {[type]} scope   [description]
    	 * @param  {[type]} element [description]
    	 * @param  {[type]} attrs   [description]
    	 * @return {[type]}         [description]
    	 */
        function linkingFunction(scope, element, attrs) {

            var startX = 0,
                startY = 0,
                x = 0,
                y = 0;
            element.css({
                position: 'relative',
                border: '2px solid red',
                backgroundColor: 'lightgreen',
                cursor: 'pointer',
            });

            /**
             * Here we register set of listners
             */
            element.on('mousedown', function(event) {
                // Prevent default dragging of selected content
                event.preventDefault();
                startX = event.pageX - x;
                startY = event.pageY - y;
                $document.on('mousemove', mousemove);
                $document.on('mouseup', mouseup);
            });

            function mousemove(event) {
                y = event.pageY - startY;
                x = event.pageX - startX;
                element.css({
                    top: y + 'px',
                    left: x + 'px'
                });
            }

            function mouseup() {
                $document.off('mousemove', mousemove);
                $document.off('mouseup', mouseup);
            }
        }


        return {
            restrict: 'E',
            link: linkingFunction
        };
    }]);
