import React from "react";

function Card({username="Tarun"}){
    return(
        <div className="flex flex-col rounded-xl  p-4 mb-4"
        style={{
          border: '0.88px solid',
  
          backdropFilter: 'saturate(180%) blur(14px)',
          background: ' #ffffff0d',
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="400"
            height="400"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">{username}</h1>
            <h1 className="font-bold font-RubikBold">Price</h1>
            <br/>
      

          </div>
          <button className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition">
  Subscribe
</button>
          <div className="flex  justify-between font-mono">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div>
    )
}

export default Card