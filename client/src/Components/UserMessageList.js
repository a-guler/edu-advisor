import React from "react";
import { useEffect, useState, useContext } from "react";
import { api } from "./api";
import { userContext } from "../UserContext";
import { Context} from "../MessageContext"
import { Link } from "react-router-dom";

export default function UserMessageList() {

    const [usernameList, setUsernameList] = useState([])
    const value = useContext(userContext)
    const { setUser } = useContext(Context)

    useEffect(() => {
        api().get(`/getUserMessageList/${value.userInfo.id}/${value.userInfo.role === 'Advisor'}`).then((res) => setUsernameList(res.data))
    },[])

    return (
        <div style={{maxHeight: "731px", minHeight: "731px", overflowY: "auto"}} className="border border-white p-1">
            {usernameList.map((user, index) => {
                setUser(user)
                return (
                    <div className="rounded-lg border border-white text-white mb-3 ml-3 mr-3 w-fit p-2 cursor-pointer">
                        <Link to={`/userChat`}>
                            <h2>
                                {user.username}
                            </h2>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}