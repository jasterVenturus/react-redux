import { useSelector } from "react-redux";
import { selectAllUsers } from "../../../../../features/Users/usersSlice";

const PostAuthor = ({userId}) => {

    const users = useSelector(selectAllUsers);
    const author = users.find(user => user.id === userId);

    return <span> &nbsp; by { author ? author.name : 'Unknown Author' }</span>
}

export default PostAuthor;