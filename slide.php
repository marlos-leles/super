<?php
echo '<div class="slideshow-container">
      <div class="mySlides fade">
      <img src="img/' . $imgSlide1 . '" alt="">
      </div>

      <div class="mySlides fade">
      <img src="img/' . $imgSlide2 . '" alt="">
      </div>

      <div class="mySlides fade">
      <img src="img/' . $imgSlide3 . '" alt="">
      </div>

      <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a class="next" onclick="plusSlides(1)">&#10095;</a>
      </div>

			<div style="text-align:center">
				<span class="dot" onclick="currentSlide(1)"></span>
				<span class="dot" onclick="currentSlide(2)"></span>
				<span class="dot" onclick="currentSlide(3)"></span>
			</div>';
?>
