import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch,getState) => {
    await dispatch(fetchPosts());
    
    //posts.usrId를 리스트로 만듬 
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    console.log(userIds);
    //fetchUser action creator에 해당 id를 보내  해당 api 값을 받고 기존에 등록된 리듀서를 통해 state를 update한다. 
    // userIds.forEach(id => dispatch(fetchUser(id)));

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
};

export const fetchPosts =  () => 
    async dispatch => {
        const response = await jsonPlaceholder.get('/posts'); 
        
        dispatch({type: 'FETCH_POSTS', payload: response.data})
    };


export const fetchUser = id =>  async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`); 
    
    dispatch({type: 'FETCH_USER', payload: response.data})
};

// export const fetchUser = id =>  dispatch => _fetchUser(id,dispatch);

// export const _fetchUser = _.memoize(async(id,dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`); 
    
//     dispatch({type: 'FETCH_USER', payload: response.data})
// });


 export const fetchUser = id =>  dispatch => _fetchUser(id,dispatch);

 export const fetchUser = function(id) {
     return function(dispatch){
         return _fetchUser(id,dispatch);
     }
 }