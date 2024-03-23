import Advisor from "./Advisor";
import {AdvisorList} from "../advisorData"


export default function Advisors() {

    return(
        <div>
            {AdvisorList.map((advisor) => {
                return (
                    <Advisor id={advisor.id} image={advisor.image} fullName={advisor.fullName} bio={advisor.bio}/>
                )
            })}
        </div>
    )
}