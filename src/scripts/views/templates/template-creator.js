import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE + restaurant.pictureId}" alt="${restaurant.pictureId}" />
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4>Restaurant Name</h4>
    <p>${restaurant.name}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Food Menu</h4>
    <span id="food">
    <p>${restaurant.menus.foods.map((food) => food.name)}</p>
    <h4>Drinks Menu</h4>
    <p>${restaurant.menus.drinks.map((food) => food.name)}</p>
    </span>
    <h4>Rating</h4>
    <p>⭐️${restaurant.rating}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
    <br>
    <h3>Review</h3>
    ${restaurant.customerReviews.map((review) => `
            <h4 tabindex="0">${review.name}</h4>
            <p tabindex="0" class="date-review">${review.date}</p>
            <h6 tabindex="0">${review.review}</h4>
    `).join('')}
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
    <figure>
        <img class="restaurant-item__header__poster" alt="${restaurant.pictureId || '-'}"
            src="${CONFIG.BASE_IMAGE + restaurant.pictureId}"></figure>
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating || '-'}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3 class="restaurant__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name || '-'}</a></h3>
        <h4 class="resto-city">${restaurant.city || '-'}<h4>
        <p>${restaurant.description || '-'}</p>
    </div>
  </div>
  `;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
