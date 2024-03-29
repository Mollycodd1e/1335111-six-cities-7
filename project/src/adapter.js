export const adaptOffersToClient = (offers) => {
  const adaptedOffers = Object.assign(
    {},
    offers,
    {
      host: {
        avatarUrl: offers.host.avatar_url,
        isPro: offers.host.is_pro,
        id: offers.host.id,
        name: offers.host.name,
      },

      isFavorite: offers.is_favorite,
      isPremium: offers.is_premium,
      maxAdults: offers.max_adults,
      previewImage: offers.preview_image,
    },
  );

  delete adaptedOffers.host.avatar_url;
  delete adaptedOffers.host.is_pro;
  delete adaptedOffers.is_favorite;
  delete adaptedOffers.is_premium;
  delete adaptedOffers.max_adults;
  delete adaptedOffers.preview_image;

  return adaptedOffers;
};

export const adaptReviewsToClient = (reviews) => {
  const adaptedReviews = Object.assign(
    {},
    reviews,
    {
      user: {
        avatarUrl: reviews.user.avatar_url,
        isPro: reviews.user.is_pro,
        id: reviews.user.id,
        name: reviews.user.name,
      },
    },
  );

  delete adaptedReviews.user.avatar_url;
  delete adaptedReviews.user.is_pro;

  return adaptedReviews;
};
