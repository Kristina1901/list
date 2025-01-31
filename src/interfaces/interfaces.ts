export interface ReviewsListProps {
  reviewList: Review[];
}
export interface Review {
  id: string;
  numberOfReviews: number;
  rating: number;
  link: string;
}

export interface ReviewItemProps {
  review: Review;
}
