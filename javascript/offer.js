
         
document.addEventListener("DOMContentLoaded", function() {
  const likeButtons = document.querySelectorAll('.like-btn');
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

  likeButtons.forEach(button => {
    button.addEventListener('click', function() {
      alert('Liked!');
    });
  });

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      alert('Added to Cart!');
    });
  });
});
