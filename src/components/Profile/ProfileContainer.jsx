import { addPostActionCreator, deletePostActionCreator } from '../../redux/profileReducer'
import { connect } from 'react-redux'
import Profile from './Profile'

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        },
        deletePost: (postID) => {
            dispatch(deletePostActionCreator(postID))
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer

