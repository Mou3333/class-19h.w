$(document).ready(function(){

    $('button').click(function() {
        let lastCatNum = $('.cat-box:last').attr('cat-num');
        let newCatNum = +lastCatNum + 1;
        let catBlock = '<div class="cat-box" cat-num="' + newCatNum +'">\
        <input type="text" name="Category" class="form-cat">\
      <img src="close-icon.png" alt="close-icon" class="close-icon" remove-num="'+ newCatNum +'">\
 </div>';
        $('.cat-container form').append(catBlock);
    });

    $('body').on('click','.close-icon',function(){
        let removeNum = $(this).attr('remove-num');
        $("[cat-num='"+removeNum+"']").remove();
    });
})