import './sass/main.scss';

const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];


const gallery = document.querySelector(".gallery");

const collection = galleryItems.map(
  ({ preview, original, description }, index) => {
    const galleryItem = document.createElement("li");
    const galleryLink = document.createElement("a");
    const galleryImage = document.createElement("img");

    galleryLink.classList.add("gallery__link");
    galleryLink.setAttribute("href", original);

    galleryImage.classList.add("gallery__image");
    galleryImage.setAttribute("src", preview);
    galleryImage.setAttribute("data-source", original);
    galleryImage.setAttribute("alt", description);
    galleryImage.setAttribute("data-position", index); // Для навигации через стрелки

    galleryItem.append(galleryImage);

    return galleryItem;
  }
);

gallery.append(...collection);


const overlayContainer = document.querySelector(".lightbox");
const overlayImage = document.querySelector(".lightbox__image");

gallery.addEventListener("click", onClick);

function onClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  overlayContainer.classList.add("is-open");

  const originalImageLink = event.target.getAttribute("data-source");
  const imageAlt = event.target.getAttribute("alt");

  overlayImage.setAttribute("src", originalImageLink);
  overlayImage.setAttribute("alt", imageAlt);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}

const lightboxButton = document.querySelector(".lightbox__button");
const overlayArea = document.querySelector(".lightbox__overlay");

lightboxButton.addEventListener("click", closeModal);
overlayArea.addEventListener("click", closeModal);

function closeModal() {
  overlayContainer.classList.remove("is-open");
  overlayImage.setAttribute("src", "");
  overlayImage.setAttribute("alt", "");

  document.removeEventListener("keydown", closeModal);
}

