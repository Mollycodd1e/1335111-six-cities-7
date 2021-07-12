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

export const adaptOfferToClient = (offer) => {
  const adaptedOffer = Object.assign(
    {},
    offer,
    {
      host: {
        avatarUrl: offer.host.avatar_url,
        isPro: offer.host.is_pro,
        id: offer.host.id,
        name: offer.host.name,
      },

      isFavorite: offer.is_favorite,
      isPremium: offer.is_premium,
      maxAdults: offer.max_adults,
      previewImage: offer.preview_image,
    },
  );

  delete adaptedOffer.host.avatar_url;
  delete adaptedOffer.host.is_pro;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;

  return adaptedOffer;
};
