import { CommentsType } from "../models/comments.model";

interface CommentsProp{
    comments: CommentsType[]
};

const Comments: React.FC<CommentsProp> = ({comments})=>{
    return(
        <div>
            <h1>Comments:</h1>
            {comments.map(comment=>(
                <div className="" key={comment.postedBy + ':'+ comment.text}>
                    <h3>{comment.postedBy}</h3>
                    <p>{comment.text}</p>
                </div>
            ))}
        </div>
    )
};

export default Comments;