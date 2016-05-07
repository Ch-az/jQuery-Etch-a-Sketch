$(document).ready(function(){
	
//This function creates the grid with a prompt	
	$('#grid').click(function(){
		var gridSize=prompt("what size grid? We recommend no larger than 50");
		var boxH=500/gridSize;
		var boxW=500/gridSize;
		for(i = 0; i < (gridSize*gridSize); i++) {
    	$('#sketchbox').append('<div class="box"></div>');
    	}
  		$('.box').css('height', boxH);
		$('.box').css('width', boxW);
  	
  	
//This function gives the grid its "sketch" feel
  	$('.box').mouseenter(function(){
        $(this).css("background-color", "#0033CC");
    });
   
    });
      	
//This function resets the grid	
  	$('#reset').click(function(){
  		$(".box").remove();
  	});

});



