function imageSliderIndex(clicked){
	var difference = clicked - currentImageIndex;
	if (difference < 0) {
		if(flag){
			flag = false;
			var checker = setInterval(function() {
            if ((leftsize) <= -clicked * 1170) {
                leftsize = leftsize - 11.70;
                imageList.style.left = (leftsize) + "px";
                if((leftsize >= mainSliderArray[mainIndex]['images'].length - 1)*1170){
            			clearInterval(checker);
            			flag = true;
                }
                
            } else{
            	clearInterval(checker);
            	flag = true;
            }

      }, 1);

		}
	}else{
		if(flag){
			flag = false;
			var checker = setInterval(function() {
            if ((leftsize) >= -clicked * 1170) {
                leftsize = leftsize + 11.70;
                imageList.style.left = (leftsize) + "px";
                if(leftsize >= 0){
            			clearInterval(checker);
            			flag = true;
                }
                
            } else{
            	clearInterval(checker);
            	flag = true;
            }

      }, 1);

		}
	}
}