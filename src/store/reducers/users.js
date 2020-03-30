export const GET_USERS_INIT = 'GET_USERS_INIT';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

const initialState = {
  isLoading: false,
  usersList: [],
  error: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_INIT:
      return { ...state, isLoading: true };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        usersList: action.payload,
        isLoading: false,
      };

    case GET_USERS_FAILURE:
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
}

export const getUsersListInit = () => ({
  type: GET_USERS_INIT,
});

export const getUsersListSuccess = data => ({
  type: GET_USERS_SUCCESS,
  payload: data,
});

export const getUsersListFailure = error => ({
  type: GET_USERS_FAILURE,
  payload: error,
});
