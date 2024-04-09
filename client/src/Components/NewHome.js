import React from "react"
import { VscAccount } from "react-icons/vsc";

export default function NewHome() {

    return (
      <div>
        <section className="text-center bg-transparent">
          <div className="relative" class="u-clearfix u-sheet u-sheet-1">
            <h2 className="text-center text-3xl text-white "> FEATURES</h2>
            <div className="relative left-0 top-0 w-full h-full mt-8">
              <div className="grid" style={{gridTemplateColumns: "repeat(3, 33.33333333%)", gridGap: "20px"}}>
                <div className="text-center flex relative bg-white grid-cols-1" style={{borderWidth: "2px", borderColor: "#e5e5e5",stroke: "#e5e5e5",borderRadius: "30px"}} >
                  <div className="pt-8 pb-8 pl-3 pr-3" >
                    <span className="text-center block relative" style={{lineHeight: "0", borderWidth: "0", height: "70px", width: "70px", margin: "0 auto"}}>
                      <VscAccount className="mt-7" size={70} color="#6689db"/>
                    </span>
                    <h5 className="text-center mt-8" style={{fontSize: "1.875rem", textTransform: "uppercase", fontWeight: "500", color: "#6689db"}}> CHATTING</h5>
                    <p className="text-center mt-4">You can chat with advisors and graduates from each school</p>
                  </div>
                </div>
                <div className="text-center flex relative bg-white grid-cols-2" style={{borderWidth: "2px", borderColor: "#e5e5e5",stroke: "#e5e5e5",borderRadius: "30px"}} >
                  <div className="pt-8 pb-8 pl-3 pr-3">
                    <span className="text-center block relative" style={{lineHeight: "0", borderWidth: "0", height: "70px", width: "70px", margin: "0 auto"}}>
                      <img src="149170-2b4bb1c9.png" alt=""/>
                    </span>
                    <h5 className="text-center mt-6" style={{fontSize: "1.875rem", textTransform: "uppercase", fontWeight: "500", color: "#6689db"}}>get recommendation from ai</h5>
                    <p className="text-center mt-4">You can take our quiz to get recommendations from our trained ChatGPT Model</p>
                  </div>
                </div>
                <div className="text-center flex relative bg-white grid-cols-3" style={{borderWidth: "2px", borderColor: "#e5e5e5",stroke: "#e5e5e5",borderRadius: "30px"}} >
                  <div className="pt-8 pb-8 pl-3 pr-3">
                    <span className="text-center block relative" style={{lineHeight: "0", borderWidth: "0", height: "70px", width: "70px", margin: "0 auto"}}>
                      <img className="object-contain" style={{width: "70px", height: "70px"}} src="149199-2af40d61.png" alt=""/>
                    </span>
                    <h5 className="text-center mt-6" style={{fontSize: "1.875rem", textTransform: "uppercase", fontWeight: "500", color: "#6689db"}}>POSTS</h5>
                    <p className="text-center mt-4">You can see posts from other users and create posts about univercities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </section>
      </div>
    )
}