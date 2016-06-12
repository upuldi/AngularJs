'use strict';

angular.module('directivesDemoApp')
    .directive('directiveWithDomManipulation', ['$interval', 'dateFilter', function($interval, dateFilter) {
        return {

            link: function postLink(scope, element, attrs) {

                var format, timeoutId;

                /**
                 * Here we are registering a watcher.
                 * We get the current format from the directives attribute value
                 */
                scope.$watch(attrs.directiveWithDomManipulation, function(attributeValue) {
                    format = attributeValue;
                });

                /**
                 * Distorying the element 
                 */
                element.on('$destroy', function() {
                    $interval.cancel(timeoutId);
                });

                /**
                 * Start the DOM update process for every second, 
                 * save the timeout id for cancelling when destroying 
                 */
                timeoutId = $interval(function() {
                    //Update DOM
                    updateTime();

                }, 1000);


                /**
                 * This function is used to update the time as per the format given
                 * @return {[type]} [description]
                 */
                function updateTime() {
                    element.text(dateFilter(new Date(), format));
                }






            }
        };
    }]);
