import { Link } from "react-router-dom";

export default function GraduateStudent({id, image, fullName, bio, schoolId}) {
    
    return(
        <div className="post">
            <div className="image">
                <Link to={`/graduates/${schoolId}/${id}`}>
                    <img src={image} alt="" />
                </Link>
            </div>
            <div className="content">
                <Link to={`/graduates/${schoolId}/${id}`}>
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