export const GET_USERS_INIT = 'GET_USERS_INIT';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';
export const FILTER_USERS = 'FILTER_USERS';
export const GET_CURRENT_USER_DETAILS = 'GET_CURRENT_USER_DETAILS';

const initialState = {
  isLoading: false,
  usersList: [],
  error: '',
  filteredUsersList: [],
  userDetails: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_INIT:
      return { ...state, isLoading: true };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        usersList: action.payload.results,
        filteredUsersList: action.payload.results,
        isLoading: false,
      };

    case GET_USERS_FAILURE:
      return { ...state, error: action.payload, isLoading: false };

    case FILTER_USERS:
      return {
        ...state,
        filteredUsersList: state.usersList.filter(
          user =>
            user.name.first.toLowerCase().includes(action.payload) ||
            user.name.last.toLowerCase().includes(action.payload),
        ),
      };

    case GET_CURRENT_USER_DETAILS:
      return { ...state, userDetails: action.payload };

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

export const filterUsers = text => ({
  type: FILTER_USERS,
  payload: text,
});

export const getCurrentUserDetails = userData => ({
  type: GET_CURRENT_USER_DETAILS,
  payload: userData,
});
