import { Link, useParams } from "react-router-dom";

export default function AdvisorChat({advisor}){
    const { id } = useParams();


    return (
        <div>
            {id}
        </div>
    )
}