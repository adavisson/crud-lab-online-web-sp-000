import React, { Component } from "react";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";
import { connect } from "react-redux";

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewInput
          restaurantId={this.props.restaurant.id}
          addReview={this.props.addReview}
        />
        <Reviews
          restaurant={this.props.restaurant}
          reviews={this.props.reviews}
          deleteReview={this.props.deleteReview}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addReview: (restaurantId, text) =>
      dispatch({ type: "ADD_REVIEW", review: {restaurantId: restaurantId, text: text} }),
    deleteReview: id => dispatch({ type: "DELETE_REVIEW", id: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsContainer);
