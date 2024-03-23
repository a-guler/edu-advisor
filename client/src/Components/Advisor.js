import { Link } from "react-router-dom";

export default function Advisor({id, image, fullName, bio}) {
    
    return(
        <div className="post">
            <div className="image">
                <Link to={`/advisors/${id}`}>
                    <img src={image} alt="" />
                </Link>
            </div>
            <div className="content">
                <Link to={`/advisors/${id}`}>
                    <h2>
                        {fullName}
                    </h2>
                </Link>
                <p className="info">
                    {
                        bio
                    }
                </p>
            </div>
        </div>
    )
}