window.onload = function(e){ 

	//Randrom values
	function randomIntFromInterval(min,max) // min and max included
	{
	    return Math.floor(Math.random()*(max-min+1)+min);
	}

	var ZULKUF = {};
   //Create area
   ZULKUF.area = function(){

   		var area =  document.createElement("div");   
	   area.style.width = "700px";
	   area.style.height = "700px";	
	   area.id = "area";
	   document.body.append(area);	
   }	

   //Create tree
   ZULKUF.tree = function(){

	   var tree =  document.createElement("div"); 
	   tree.style.width = "400px";
	   tree.style.height = "400px";
	   tree.style.marginLeft = "100px";
	   tree.style.marginTop = "100px";
	   tree.style.background = "url('assets/img/tree.svg')";
	   tree.style.display = "block";
	   tree.style.position = "absolute";
	   tree.id = "tree";

    
       area.appendChild(tree);
   }
   //Create apple
   ZULKUF.apple = function(){

   	for (var j = 1; j < 7; j++) {

    var apple = document.createElement("div");	
    apple.style.width = "30px";
    apple.style.height = "30px";
    apple.style.left = randomIntFromInterval(170,410)+"px";
    apple.style.top =  randomIntFromInterval(165,280)+"px";
    apple.style.background = "url('assets/img/apple.svg')";
    apple.style.position = "absolute";
    apple.id = "apple"+j;   
    area.appendChild(apple);
 
 	}

   }
 	
 	//Create button
   ZULKUF.basket =function() {
   	
   	   var basket = document.createElement("div");
	   basket.style.width = "100px";
	   basket.style.height = "100px";
	   basket.style.marginLeft = "300px";
	   basket.style.marginTop = "450px";
	   basket.style.background = "url('assets/img/basket.svg')";
	   basket.style.display = "block";
	   basket.style.position = "absolute";
	   basket.id = "basket";

	    area.append(basket);
   }
  
  //Create button
   ZULKUF.button = function(){

   var button = document.createElement("BUTTON");
   button.style.marginLeft = "150px";
   button.style.marginTop = "450px";
   button.style.display = "block";
   button.style.position = "absolute";
   button.innerHTML = "Collect";
   button.id = "button";
   button.onclick = function(){

   //Applying tree shake animation
   	var tree = document.getElementById('tree');
   	tree.style.WebkitAnimation = "shake .5s";
	tree.style.animation = "shake .5s";
	tree.style.animationIterationCount = "3";

	//More than one apple dropped
	var dropApple = function(){

		for (var i = 1; i <= 6; i++) {
   		 	var apple =  document.getElementById("apple"+i);
		   	apple.style.WebkitAnimation = "dropped 1s";
		    apple.style.animation = "dropped 1s";
   		}
	}

	//After clicking the tree will shaking for 3 seconds
	setTimeout(dropApple, 3000);
   	

   	//Applying apple shake animation
   	for (var i = 1; i <= 6; i++) {
    var apple =  document.getElementById("apple"+i);
   	apple.style.WebkitAnimation = "shake .5s";
	apple.style.animation = "shake .5s";
    apple.style.animationIterationCount = "3";
   			}


  
   };
    
    area.append(button);

   }
 // Initialize functions
  ZULKUF.area();
  ZULKUF.tree();
  ZULKUF.apple();
  ZULKUF.basket();
  ZULKUF.button();
}