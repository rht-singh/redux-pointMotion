import React from "react";
import { useSelector } from "react-redux";

export default function Manager() {
  let initialState = useSelector((state) => state);

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="my-5 row" id="mainCard">
          {initialState.userReducer.map((user) => {
            return (
                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 mt-4">
                  <div className="card my-5">
                    <img src="" className="card-img-top" alt="..." />
                    <div className="card-body d-flex justify-content-evenly">
                      <div className="my-3 h5" style={{width:"5rem"}}>{user.prodName}</div>
                      <div className='my-4 h3'>{user.prodPrice}:-</div>
                    </div>
                  </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>
        {`*{
          margin:0;
          padding:0;
        }
        .card{
          width:20rem;
        } 
        .card-img-top{
          height:23rem;
        }
        #mainCard{
          width:70rem;
        }
        @media (max-width: 575.98px) { 
          #mainCard{
            width:19.5rem;
          }
          .card{
            width:18rem;
          }
          .card-img-top{
            height:20rem;
          }
         }
         @media (min-width: 768px) and (max-width: 1199.98px) { 
          #mainCard{
            width:43rem;
          }
          .card{
            width:19.3rem;
          }
          .card-img-top{
            height:21rem;
          }
         }
         `}
      </style>
    </>
  );
}
