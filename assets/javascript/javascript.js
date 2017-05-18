    var yscore = 0;
	var oscore = 0;
	var gscore = 0;
	var rscore = 0;
	var tot = 0;
	var wi = 0;
    var lo = 0;

	yscore = Math.floor((Math.random() * 10) + 1);
	oscore = Math.floor((Math.random() * 10) + 1);
	gscore = Math.floor((Math.random() * 10) + 1);
	rscore = Math.floor((Math.random() * 10) + 1);

	randomnum = Math.floor((Math.random() * 50) + 1);
    $("#num").html(randomnum);


$("#yellowgem").on("click", function() {

    tot = yscore + tot;
	$("#sco").html(tot);

		if(randomnum == tot) {
  
		  wi = wi + 1;
		  $("#win").html(wi);
		  	yscore = Math.floor((Math.random() * 10) + 1);
			oscore = Math.floor((Math.random() * 10) + 1);
			gscore = Math.floor((Math.random() * 10) + 1);
			rscore = Math.floor((Math.random() * 10) + 1);

			randomnum = Math.floor((Math.random() * 50) + 1);
		    $("#num").html(randomnum);
		    tot=0;
		    $("#sco").html(tot);
		 

		}

		if(randomnum < tot) {
		  
		  lo = lo + 1;
		  $("#loss").html(lo);
		     yscore = Math.floor((Math.random() * 10) + 1);
			 oscore = Math.floor((Math.random() * 10) + 1);
			 gscore = Math.floor((Math.random() * 10) + 1);
			 rscore = Math.floor((Math.random() * 10) + 1);

			 randomnum = Math.floor((Math.random() * 50) + 1);
			 $("#num").html(randomnum);
			  tot=0;
			  $("#sco").html(tot);
            
		}   
});

$("#orangegem").on("click", function() {

	tot = oscore + tot;
	$("#sco").html(tot);

		if(randomnum == tot) {
  
		  wi = wi + 1;
		  $("#win").html(wi);
		    yscore = Math.floor((Math.random() * 10) + 1);
			oscore = Math.floor((Math.random() * 10) + 1);
			gscore = Math.floor((Math.random() * 10) + 1);
			rscore = Math.floor((Math.random() * 10) + 1);

			randomnum = Math.floor((Math.random() * 50) + 1);
		    $("#num").html(randomnum);
		    tot=0;
		    $("#sco").html(tot);
		

		}

		if(randomnum < tot) {
		  
		  lo = lo + 1;
		  $("#loss").html(lo);
		    yscore = Math.floor((Math.random() * 10) + 1);
			oscore = Math.floor((Math.random() * 10) + 1);
			gscore = Math.floor((Math.random() * 10) + 1);
			rscore = Math.floor((Math.random() * 10) + 1);

			randomnum = Math.floor((Math.random() * 50) + 1);
		    $("#num").html(randomnum);
		    tot=0;
		    $("#sco").html(tot);
	

		} 
    
});

$("#greengem").on("click", function() {
    
   tot = gscore + tot;
	$("#sco").html(tot);

		if(randomnum == tot) {
  
		  wi = wi + 1;
		  $("#win").html(wi);
		    yscore = Math.floor((Math.random() * 10) + 1);
			oscore = Math.floor((Math.random() * 10) + 1);
			gscore = Math.floor((Math.random() * 10) + 1);
			rscore = Math.floor((Math.random() * 10) + 1);

			randomnum = Math.floor((Math.random() * 50) + 1);
		    $("#num").html(randomnum);
		    tot=0;
		    $("#sco").html(tot);
		

		}

		if(randomnum < tot) {
		  
		  lo = lo + 1;
		  $("#loss").html(lo);
		    yscore = Math.floor((Math.random() * 10) + 1);
			oscore = Math.floor((Math.random() * 10) + 1);
			gscore = Math.floor((Math.random() * 10) + 1);
			rscore = Math.floor((Math.random() * 10) + 1);

			randomnum = Math.floor((Math.random() * 50) + 1);
		    $("#num").html(randomnum);
		    tot=0;
		    $("#sco").html(tot);
		  
		} 

});

$("#redgem").on("click", function() {

	tot = rscore + tot;
	$("#sco").html(tot);

		if(randomnum == tot) {
  
		  wi = wi + 1;
		  $("#win").html(wi);
		    yscore = Math.floor((Math.random() * 10) + 1);
			oscore = Math.floor((Math.random() * 10) + 1);
			gscore = Math.floor((Math.random() * 10) + 1);
			rscore = Math.floor((Math.random() * 10) + 1);

			randomnum = Math.floor((Math.random() * 50) + 1);
		    $("#num").html(randomnum);
		    tot=0;
		    $("#sco").html(tot);
		

		}

		if(randomnum < tot) {
		  
		  lo = lo + 1;
		  $("#loss").html(lo);
		    yscore = Math.floor((Math.random() * 10) + 1);
			oscore = Math.floor((Math.random() * 10) + 1);
			gscore = Math.floor((Math.random() * 10) + 1);
			rscore = Math.floor((Math.random() * 10) + 1);

			randomnum = Math.floor((Math.random() * 50) + 1);
		    $("#num").html(randomnum);
		    tot=0;
		    $("#sco").html(tot);
	

		} 
     
});


