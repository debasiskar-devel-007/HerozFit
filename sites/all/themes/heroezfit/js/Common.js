var flag=0;
var flag1='';

(function($) {



    Drupal.behaviors.myBehavior = {
        attach: function (context, settings) {




            //var jq = $.noConflict();





            var imglen= $('.smallproimg').find('img').length;
            //alert(imglen);
            for (i = 0; i < imglen-1; i++) {



                $('.triggers li:first').clone().appendTo('.triggers');

                $('.triggers').find('li').eq(i).text(i);

            }




            /*Slider*/




            var triggers = $('ul.triggers li');
            var images = $('.bigimageslider .item-list ul li');
            var lastElem = triggers.length-1;
            //alert(lastElem);
            var mask = $('.bigimageslider .item-list ul');
            var imgWidth = images.width()+25;
            var target;

            triggers.first().addClass('selected');
            mask.css('width', imgWidth*(lastElem+1) +'px');

            function sliderResponse(target) {
                //alert(6);
                mask.stop(true,false).animate({'left':'-'+ imgWidth*target +'px'},300);
                triggers.removeClass('selected').eq(target).addClass('selected');
               // console.log(imgWidth*target);
            }

            triggers.click(function() {
                if ( !$(this).hasClass('selected') ) {
                    target = $(this).index();
                    sliderResponse(target);
                    resetTiming();
                }
            });
            $('.next').click(function() {
                target = $('ul.triggers li.selected').index();
                target === lastElem ? target = 0 : target = target+1;
                sliderResponse(target);
                //alert(target);
                resetTiming();
            });
            $('.prev').click(function() {
                target = $('ul.triggers li.selected').index();
                lastElem = triggers.length-1;
                target === 0 ? target = lastElem : target = target-1;
                sliderResponse(target);
                resetTiming();
            });
            function sliderTiming() {
                target = $('ul.triggers li.selected').index();
                target === lastElem ? target = 0 : target = target+1;
                sliderResponse(target);
            }
             //var timingRun = setInterval(function() { sliderTiming(); },5000);
             //function resetTiming() {
             //clearInterval(timingRun);
             //timingRun = setInterval(function() { sliderTiming(); },5000);
             //}




            /*Slider*/


















            /*Light box pop up height manage purpose js*/



            $('#edit-custom-search-blocks-form-1--2').attr('placeholder','Search Products');
            //alert(mail);


            $('#fit-report-event-e-mail-content-node-form').find('.form-item-title').css('display','none');
            $('#fit-report-event-e-mail-content-node-form').find('.form-item-title').find('input').val(mail);
            $('#fit-report-event-e-mail-content-node-form').find('#edit-field-event-email-node-id').css('display','none');
            $('#fit-report-event-e-mail-content-node-form').find('.form-item-field-report-id-und-0-value').css('display','none');
            $('#fit-report-event-e-mail-content-node-form').find('.form-item-field-report-title-und-0-value').css('display','none');
            $('#fit-report-event-e-mail-content-node-form').find('#edit-field-event-email-node-id').find('input').val(id);
            $('#fit-report-event-e-mail-content-node-form').find('#edit-field-report-id').find('input').val(rid);
            $('#fit-report-event-e-mail-content-node-form').find('#edit-field-report-title').find('input').val(title);


            $('.views-field-field-gallery-image').css('cursor','pointer');
            $('.views-field-field-video-').css('cursor','pointer');

            $('.views-field-field-gallery-image').click(function(){

                //alert(1);

                $(this).parent().find('a').click();

            });

            $('.views-field-field-video-').click(function(){

                //alert(1);

                $(this).parent().find('a').click();

            });

            $('.node-type-page').find('.views-view-grid').find('.views-field-nid').click(function(){

                //alert(1);
                $(this).parent().find('.views-field-popup').find('a').click();


            });




            // $(".fe").html('<a href="mailto:email:test.com">email@test.com</a>');

            var src= $('.front').find('.view-id-feature_gallery_image1').find('.views-field-field-gallery-image').find('img').eq(2).attr('src');
            //alert(typeof(src));
            if(typeof(src)!='undefined'){

                var src=src.replace("feature_gallery1","feature_gallery2");
                $('.front').find('.view-id-feature_gallery_image1').find('.views-field-field-gallery-image').find('img').eq(2).attr('src',src).attr('width','269').attr('height','869');
            }

            var src1= $('.front').find('.view-id-feature_gallery_image1').find('.views-field-field-gallery-image').find('img').eq(3).attr('src');
            if(typeof(src1)!='undefined'){
                var src1=src1.replace("feature_gallery1","feature_gallery3");
                $('.front').find('.view-id-feature_gallery_image1').find('.views-field-field-gallery-image').find('img').eq(3).attr('src',src1).attr('width','601').attr('height','270');
            }

            var src2= $('.front').find('.view-id-feature_gallery_image1').find('.views-field-field-gallery-image').find('img').eq(4).attr('src');
            if(typeof(src2)!='undefined'){
                var src2=src2.replace("feature_gallery1","feature_gallery4");
                $('.front').find('.view-id-feature_gallery_image1').find('.views-field-field-gallery-image').find('img').eq(4).attr('src',src2).attr('width','269').attr('height','270');
            }


            /*  $('#edit-panes-billing-copy-address').click(function(){


             if($(this).is(":checked")) {

             alert(1);
             $('#edit-panes-billing-billing-first-name').val($('#edit-panes-delivery-delivery-first-name').val());
             $('#edit-panes-billing-billing-last-name').val($('#edit-panes-delivery-delivery-last-name').val());
             $('#edit-panes-billing-billing-company').val($('#edit-panes-delivery-delivery-company').val());
             $('#edit-panes-billing-billing-street1').val($('#edit-panes-delivery-delivery-street1').val());
             $('#edit-panes-billing-billing-street2').val($('#edit-panes-delivery-delivery-street2').val());
             $('#edit-panes-billing-billing-zone').val($('#edit-panes-delivery-delivery-zone').val());
             $('#edit-panes-billing-billing-postal-code').val($('#edit-panes-delivery-delivery-postal-code').val());
             $('#edit-panes-billing-billing-zone').val($('#edit-panes-delivery-delivery-zone').val());
             $('#edit-panes-billing-billing-phone').val($('#edit-panes-delivery-delivery-phone').val());
             $('#edit-panes-billing-billing-country').val($('#edit-panes-delivery-delivery-country').val());
             $('#edit-panes-billing-billing-city').val($('#edit-panes-delivery-delivery-city').val());
             $('#edit-panes-billing-billing-phone').val($('#edit-panes-delivery-delivery-phone').val());

             }
             else{
             alert(2);
             $('#edit-panes-billing-billing-first-name').val('');
             $('#edit-panes-billing-billing-last-name').val('');
             $('#edit-panes-billing-billing-company').val('');
             $('#edit-panes-billing-billing-street1').val('');
             $('#edit-panes-billing-billing-street2').val('');
             $('#edit-panes-billing-billing-zone').val('');
             $('#edit-panes-billing-billing-postal-code').val('');
             $('#edit-panes-billing-billing-zone').val('');
             $('#edit-panes-billing-billing-phone').val('');
             $('#edit-panes-billing-billing-country').val('');
             $('#edit-panes-billing-billing-city').val('');
             $('#edit-panes-billing-billing-phone').val('');




             }
             });
             */
			$('#popup-active-overlay').css('width','100%');
            $('.front').find('.field-name-field-banner-title-description').find('.field-item').click(function(){

               window.location.href='/shop';
            });

           // $('.view-products').find('.views-row').click(function(){

               // $(this).find('.lightbox-processed').click();
               //alert(1);

            //});

            $('.lightbox-popup').find('.mainimagediv').find('img').live('click', function() {

                    $(this).parent().parent().find('img').css('border','none');

                    var src=$(this).attr('src');
                    //var imgsrc=$(this).attr('src');
                    var src2=src.replace("viewdetail-thum","productlisting");
                    //alert(newimg);
                    var src1=src.replace("files/styles/viewdetail-thum/public","files/styles/zoom_image/public");
                    $(this).css("border", "#008081 solid 1px");

                $(this).parent().parent().find('.zoom').find('.small').find('img').attr('src',src2);
                $(this).parent().parent().find('.zoom').find('.large').find('img').attr('src',src1);


                    //alert(1);


                /*$('.lightbox-popup').find('.mainimagediv').find('img').css("border", "none");
                $(this).css("border", "#008081 solid 1px");

                var imgsrc=$(this).attr('src');
                var imgsrc1=imgsrc.replace("viewdetail-thum","productlisting");
                //alert(imgsrc1);
                //alert($(this).parent().parent().find('.mainimg').find('img').html());
                $(this).parent().parent().find('.mainimg').empty();
                $(this).parent().parent().find('.mainimg').removeClass('spritezoom-instance');
                $(this).parent().parent().find('.mainimg').html("<img typeof=foaf:Image width=356 height=500 src="+imgsrc1+"/>");*/

               // }
                //alert(1);
            });


            $('.lightbox-popup').find('.mainimagediv').find('.mainimg').find('img').live('mouseover',function()
            {
                //alert(1);
                //alert(flag1+flag);

                $('.lightbox-popup').find('.mainimagediv').find('.mainimg').find('.large').find('img').removeAttr('width');
                $('.lightbox-popup').find('.mainimagediv').find('.mainimg').find('.large').find('img').removeAttr('height');



                //$(this).parent().find('.large').find('image').removeAttr('height');

                //alert($(this).attr('src'));
                var light=$(this).closest( ".lightbox-popup" );
                var lightvar=(light.attr('id'));

                var newimg=$(this).attr('src');
                //$('.easyzoom').easyZoom();
               // var jq = $.noConflict();


                   // var jq = $.noConflict();
                if(flag!=flag1 || flag==0){
                    $('.lightbox-popup').find('.mainimagediv').find('.mainimg').find('.large').show();
                   // alert(9);
                    $(".zoom").anythingZoomer({
                        overlay : true,
                        edit: true,
                        // If you need to make the left top corner be at exactly 0,0, adjust the offset values below
                        offsetX : 0,
                        offsetY : 0
                    });
                    flag=lightvar;
                }


                //flag=1;
                flag1=lightvar;
                //flag=flag1;
                //alert(newimg);
                //var newimg1=newimg.replace("files/styles/productlisting/public","files");
                //$(this).attr('src',newimg1);
               // $(this).css("cursor","pointer");

               /* $(this).parent().spritezoom({
                    border  : 1,
                    source  : newimg,
                    zSource :newimg1,
                    layout  : "right"
                });*/



                //$(this).animate({width: "500px"}, 2000);
            });

            /*$('.page-node-1').find('#frameNextLink').live('click',function(){

                alert(1);

            });*/

            $('#bottomNavClose').live('click',function(){

                $(".zoom").anythingZoomer({
                    overlay : true,
                    edit: true,
                    // If you need to make the left top corner be at exactly 0,0, adjust the offset values below
                    offsetX : 0,
                    offsetY : 0
                });
            });







            $('.lightbox-popup').find('.ajax-cart-submit-form').find('.form-type-checkbox').find('.option').live('click',function(){





                if ( $( this ).hasClass( "active-size" ) ) {

                    $(this).removeClass('active-size');

                }

                else{

                    $(this).parent().parent().find('.option').each(function(){
                        //alert(1);
                        $(this).prev().removeAttr('checked');
                        $(this).removeClass('active-size');

                    });

                    $(this).addClass('active-size');

                }
               //alert(1);





                $(this).prev().prop("checked", !$(this).prev().prop("checked"));


            });


            $('.productdetailaddtocartsize').find('.ajax-cart-submit-form').find('.form-type-checkbox').find('.option').click(function(){


                alert($('.productdetailaddtocartsize').find('.ajax-cart-submit-form').find('.form-type-checkbox').find('.option').length);

               // $(this).prev().attr("checked", !$(this).prev().attr("checked"));
                $(this).prev().prop("checked",'checked');
                alert($(this).prev().attr("checked"));

            });




           /* $('.lightbox-processed').click(function(){

                $('.lightbox-popup').find('.mainimagediv').find('.mainimg').find('img').mouseover();
                $(".zoom").anythingZoomer({
                    overlay : true,
                    edit: true,
                    // If you need to make the left top corner be at exactly 0,0, adjust the offset values below
                    offsetX : 0,
                    offsetY : 0
                });

               //alert(9);
            });*/


          /*  $('select[name^="income_type_"]').live('change', function() {
                alert($(this).val());
            });
			*/
			
			
			
			

			
			

        }
    };
})(jQuery);


