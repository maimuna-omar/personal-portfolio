async function getData() {
    const response = await fetch('https://raw.githubusercontent.com/maimuna-omar/personal-portfolio/main/db.json');
    const data = await response.json();
    console.log(data);
    return data;
  }
  (async function () {
    const data = await getData();
    const portfolioSection = document.getElementById('portfolio');
    const myWorkDiv = document.getElementById('my-work');
  
    data.photos.forEach(photo => {
      const photoElement = document.createElement('div');
      photoElement.classList.add('photo');
      
      const imageElement = document.createElement('img');
      imageElement.src = photo.image_url;
      imageElement.style.width="100px"
      imageElement.style.height="100px"
      
      const titleElement = document.createElement('h3');
      titleElement.textContent = photo.title;
      
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = photo.description;
      
      photoElement.appendChild(imageElement);
      photoElement.appendChild(titleElement);
      photoElement.appendChild(descriptionElement);
      
      portfolioSection.appendChild(photoElement);
    });
  })();
  
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
  