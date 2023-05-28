import * as Actions from "../types";

export const fetchPosts = () => async (dispatch) => {
    dispatch(Actions.getPosts(["1st post", "2nd post", "3rd post"]));
};
