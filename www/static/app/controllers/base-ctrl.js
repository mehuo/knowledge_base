export default ($scope,$timeout) => {

    console.log('base控制器');

    $scope.menus = nav;
    $scope.openDrop = function(e) {
        var dropMenu = $(e.target).children(".dropdown-menu")[0];
        $(dropMenu).slideDown();
    }
    $scope.closeDrop = function(e) {
        var dropMenu = $(e.target).children(".dropdown-menu")[0];
        if($(e.target).is('a') || ($(e.target).is('li') && !$(e.target).hasClass('fli'))){
            dropMenu = $(e.target).parents('.dropdown-menu')[0];
        }
        $(dropMenu).slideUp();
    }

}