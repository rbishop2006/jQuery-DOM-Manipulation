$(document).ready(function() {
  $(".titles").on("click", function(e) {
    $(".content").removeClass("show")

    $(this)
      .find("+ .content")
      .addClass("show")
  })
})

let html = carouselImages

  .map(function(item) {
    return `
    <div class="imageBox">
        <img class="images" src="${item.image_url}"/>
        <p class="title">${item.title}</p>
        <p class="photographer_id">${item.photographer_id}</p>
        </div>
        `
  })
  .join("")

document.querySelector(".slideShow").innerHTML = html
