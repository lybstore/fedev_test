var itemsController = function(currencies, itemsService, translationConf) {

    var itemsCtrl = this;

    itemsCtrl.actualCurrency = currencies[translationConf.selectedLang]

    itemsService.getData().success(function(data) {
        itemsCtrl.data = data.placements;
    });

}


angular.module('itemsModule')
    .controller('itemCtrl', itemsController);
