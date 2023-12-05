import React from 'react'
import '../assets/react.svg'
import BarChart from '../components/userGraph/BarChart'
const UserGraph = () => {
  return (
    <div className="border  w-full h-[100rem]">
      <div className="flex flex-row mt-[3.5rem] ">
        {/* 사용자정보 */}
        <div className="w-[27rem]  mt-20 ml-[7rem] border border-black/20 rounded-xl shadow-2xl bg-white/90 shadow-black/30">
          {/* 원 */}
          <div className="flex  justify-center p-10">
            <div className="border rounded-full w-[15rem] h-[15rem]">
              <img src="src/assets/login/github.png" alt="" />
            </div>
          </div>
          <div className="ml-14">
            <h1 className="text-[1.8rem] text-black">NDB 님 </h1>
            <h1 className="text-xl opacity-70 mt-2 text-black">
              Notdubu @ gmail.com
            </h1>
            <div className="flex flex-col justify-center items-center">
              <textarea
                className="mr-14 mt-7 bg-none w-[20rem] h-[15rem] bg-inherit border rounded-xl p-5 border-black/50 text-black"
                placeholder="자기소개를 해주세요"
              ></textarea>
              <button className="mr-14 w-[14rem] h-[3rem] bg-black mt-8 mb-8 rounded-xl">
                <span className="text-white/80">정보수정하기</span>
              </button>
            </div>
          </div>
        </div>
        {/* 그래프 정보 */}

        <div className="ml-20 "></div>
        <BarChart></BarChart>
      </div>
    </div>
  )
}

export default UserGraph
