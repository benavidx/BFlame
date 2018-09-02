$(document).ready(function(){

    $('#ShowDrawer').click(function(){
        $('#SideBar').animate({
            left: '0'
        });
        $('#BackDrop').addClass("fade modal-backdrop show");
    });


    $('#BackDrop').click(function(){
        $('#BackDrop').removeClass("fade modal-backdrop show");
        $('#SideBar').animate({
            left: '-100%'
        });
    });
});
