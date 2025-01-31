import { Review } from "../interfaces/interfaces";

export async function getReviewsInfo(): Promise<Review[]> {
  try {
    const response = await fetch(
      "https://67996393be2191d708b2c55a.mockapi.io/reviews"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.map((item: any) => ({
      rating: item.rating,
      numberOfReviews: item.numberOfReviews,
      id: item.id,
      link: item.link,
    }));
  } catch (error) {
    return [];
  }
}
export async function deleteReview(): Promise<Review[]> {
  try {
    const response = await fetch(
      "https://67996393be2191d708b2c55a.mockapi.io/reviews/:id"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.map((item: any) => ({
      rating: item.rating,
      numberOfReviews: item.numberOfReviews,
      id: item.id,
      link: item.link,
    }));
  } catch (error) {
    return [];
  }
}
