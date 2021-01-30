 // <script>
$(document).ready(function(){
    $("#mycarousel").carousel({ interval:2000 });
    $("#carouselButton").click(function(){
        if($("#carouselButton").children('span').hasClass('fa-pause')){                    $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');                $("#carouselButton").children("span").addClass('fa-play');
            }
        else if($('#carouselButton').children('span').hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children('span').removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');            }
        });

$("#reserveBtn").click(function(){
   $("#reserveModal").modal();
});
 
 /*LoginModal*/
$("#loginBtn").click(function(){
    $("#loginModal").modal();
});
});
            // $("#carousel-play").click(function(){
            //     $("#mycarousel").carousel('cycle');
            // });
    // </script>
    // <!-- <script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
    // </script> -->
