; (function (window, angular, undefined) {
    'use strict';

    function service($uibModal) {
        return {
            displayEditMessageModal: function (messageId, editAndRetryConfig) {
                $uibModal.open({
                    templateUrl: 'js/views/message/editor/messageEditorModal.html',
                    controller: 'messageEditorModalController',
                    resolve: {
                        messageId: function(){
                            return messageId;
                        },
                        editAndRetryConfig: function(){
                            return editAndRetryConfig;
                        }
                    }
                });               
            }
        };
    }

    service.$inject = ['$uibModal'];

    angular.module("sc")
        .service("messageEditorModalService", service);

})(window, window.angular);