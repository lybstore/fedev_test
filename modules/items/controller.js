var itemsController = function(itemsService) {

    itemsCtrl = this;

    itemsService.getData().success(function(data) {
        itemsCtrl.data = data.placements;
    });

}


angular.module('itemsModule')
    .controller('itemCtrl', itemsController);
