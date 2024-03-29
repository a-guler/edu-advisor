import Advisor from "./Advisor";
import { useEffect, useState } from "react";
import { api } from "./api";
import { fakerTR } from "@faker-js/faker";


export default function Advisors() {

    const [advisorList, setAdvisorList] = useState([])

    useEffect(() => {
        api().get("/advisor").then((res) => setAdvisorList(res.data))
    },[])

    return(
        <div>
            {advisorList.map((advisor) => {
                return (
                    <Advisor key={"advisor-"+advisor.id} id={advisor.id} image={fakerTR.image.avatarGitHub()} fullName={advisor.username} bio={fakerTR.person.bio()}/>
                )
            })}
        </div>
    )
}