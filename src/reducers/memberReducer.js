import {GET_MEMBERS, VIEW_MEMBER, ADD_MEMBER, DELETE_MEMBER, UPDATE_MEMBER, GET_MEMBER_BY_ID, LOGIN} from '../constants/ActionTypes'
const initialState = {
    members : [],
    member : {}
}
const memberReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_MEMBER:
            return {
                ...state,
                members : [...state.members,...action.payload]
            }
        case GET_MEMBERS:
        return {
            ...state,
            members : action.payload,
            member : {
                isSingleMemberView : false
            }
        }
        case LOGIN:
        return {
            ...state,
            user : action.payload,
            user : {
                isSingleMemberView : false
            }
        }
        case GET_MEMBER_BY_ID:
        return {
            ...state,
            members : action.payload,
            member : {
                isSingleMemberView : false
            }
        }

        case DELETE_MEMBER:
            let members = state.members.filter(member =>
                member._id !== action.payload._id
            )
            return {
                ...state,
                members : members
            }

        case UPDATE_MEMBER:
        return {
            ...state,
           member : {isSingleMemberView : false},
           refreshList : false
        };

      case VIEW_MEMBER:
            return {
                ...state,
                members : action.payload,
                member : {
                    isSingleMemberView : false
                }
            };
      default:
        return state
    }
}

export default memberReducer;