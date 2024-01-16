let likeCount = 0;
let isLiked = false;

function toggleHeart() {
  isLiked = !isLiked;
  likeCount += isLiked ? 1 : -1;
  document.getElementById("likeCount").innerText = likeCount;
}

function saveCard() {
  // Implement save functionality here
  alert("Card saved!");
}

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