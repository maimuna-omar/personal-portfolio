const portfolioSection = document.getElementById('portfolio');
const myWorkDiv = document.getElementById('my-work');
const nextButton = document.getElementById('next-btn');
let currentIndex = 0;
let photos = [];

async function getData() {
  const response = await fetch('https://raw.githubusercontent.com/maimuna-omar/personal-portfolio/main/db.json');
  const data = await response.json();
  photos = data.photos;
  console.log(photos);
  showPhoto(currentIndex);
}

function showPhoto(index) {
  const currentPhoto = photos[index];
  const photoElement = document.createElement('div');
  photoElement.classList.add('photo');
      
  const imageElement = document.createElement('img');
  imageElement.src = currentPhoto.image_url;
  
  const titleElement = document.createElement('h3');
  titleElement.textContent = currentPhoto.title;
      
  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = currentPhoto.description;
      
  photoElement.appendChild(imageElement);
  photoElement.appendChild(titleElement);
  photoElement.appendChild(descriptionElement);
      
  myWorkDiv.innerHTML = '';
  myWorkDiv.appendChild(photoElement);
}

function nextPhoto() {
  currentIndex = (currentIndex + 1) % photos.length;
  showPhoto(currentIndex);
}

nextButton.addEventListener('click', nextPhoto);

getData();

  
  function submit(){const button = document.getElementById("submit");
  button.addEventListener("click",(event) =>{
    event.preventDefault();
    alert("Message received, will get back to you")
  }
  )
  }
  submit();
  
  function handleForm(){const form = document.getElementById("form");
  form.addEventListener("submit",(event) =>{
    event.preventDefault();
    alert("message submitted successfully")
    document.querySelectorAll("input").value=""
  }
  )
  }
  handleForm();
  
  
  function scrollup() {
    const footer = document.querySelector("#footer");
    const button = document.createElement("button");
    button.innerHTML = "<box-icon type='solid' name='arrow-to-top'></box-icon>";
    button.href = "#";
    button.id = "scroll-to-top";
    button.title = "go to top";
    footer.appendChild(button);
  
    button.addEventListener("click", (event) => {
      event.preventDefault();
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      button.remove();
    });
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight / 1) {
        button.classList.add("show");
      } else {
        button.classList.remove("show");
      }
      const isButtonAppended = Array.from(footer.children).includes(button);
      if (!isButtonAppended && window.scrollY > 0) {
        footer.appendChild(button);
      }
    });
  }
  
  scrollup();



  const likeButton = document.getElementById('like-btn');
const likeCount = document.getElementById('like-count');
let count = 0;
let isLiked = false;

likeButton.addEventListener('click', () => {
  if (isLiked) {
    count--;
    likeCount.textContent = count;
    likeButton.textContent = 'Like';
    likeButton.classList.remove('unlike-button');
    likeButton.classList.add('like-button');
    isLiked = false;
  } else {
    count++;
    likeCount.textContent = count;
    likeButton.textContent = 'Unlike';
    likeButton.classList.remove('like-button');
    likeButton.classList.add('unlike-button');
    isLiked = true;
    alert("Thanks for the like!");
  }
});
