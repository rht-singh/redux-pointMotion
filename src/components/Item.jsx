import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Item() {
  const dispatch = useDispatch();
  const [addData, setAddData] = useState({
    prodName: "",
    prodPrice: "",
    prodDes: "",
    prodImg: "",
    index: 0,
  });
  let initialState = useSelector((state) => state);

  const handleOnChange = () => {
    setAddData({
      ...addData,
      index: initialState.userReducer.length + 1,
    });
    dispatch({ type: "addProduct", payload: addData });
    console.log(initialState);
  };
  let btnOnChange = () => {
    setAddData(
      initialState.userReducer.splice(initialState.userReducer.index, 1)
    );
  };
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="row my-5" id="rowCard">
          <div className="col-md-6 col-lg-6">
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label h6"
              >
                Product Name
              </label>
              <input
                type="text"
                className="form-control py-2"
                id="productName"
                onChange={(e) => {
                  setAddData({
                    ...addData,
                    prodName: e.target.value,
                  });
                }}
                placeholder="Enter product name"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label h6"
              >
                Price
              </label>
              <input
                type="text"
                className="form-control py-2"
                id="price"
                onChange={(e) => {
                  setAddData({
                    ...addData,
                    prodPrice: e.target.value,
                  });
                }}
                placeholder="Enter price"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="mb-3 my-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label h6"
              >
                Product description
              </label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                onChange={(e) => {
                  setAddData({
                    ...addData,
                    prodDes: e.target.value,
                  });
                }}
                placeholder="Enter description"
              ></textarea>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="mb-3 my-3">
              <label htmlFor="formFile" className="form-label h6">
                Product images
              </label>
              <input
                className="form-control py-2"
                type="file"
                id="file"
                onChange={(e) => {
                  e.target.files[0];
                  setAddData({
                    ...addData,
                    prodImg: e.target.files[0],
                  });
                }}
                placeholder="choose file"
              />
            </div>
          </div>
          <div className="button">
            <button
              type="button"
              className="btn btn-info text-light px-4 my-4"
              onClick={handleOnChange}
            >
              Add Product
            </button>
          </div>

          <div className="addCard mt-5">
            <div className="headCard py-2">
              <div className="textBox">
                <div className="h5">Name</div>
                <div className="h5">Desctription</div>
                <div className="h5">Price</div>
              </div>
            </div>
            {initialState.userReducer.map((user) => {
              return (
                <div>
                  <div className="userTextBox">
                    <div className="row g-0">
                      <div className="col-md-1">
                        <img
                          src=""
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-11">
                        <div className="card-body">
                          <div className="d-flex justify-content-between mx-5 ">
                            <span className="h6 my-2 mx-3">{user.prodName}</span>
                            <span className="h6 my-2 mx-3">{user.prodDes}</span>
                            <span className="h6 my-2 mx-3">{user.prodPrice}</span>
                            <span className="">
                              <button
                                type="button"
                                className="btn text-info"
                                onClick={btnOnChange}
                              >
                                Remove
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style>
        {` #rowCard{
            width: 70rem;
          } 
          .textBox{
            width:43rem;
            margin-left:8rem;
            display: flex;
            justify-content: space-between;
          }
          .headCard{
            border-top: 1px solid grey;
            border-bottom: 1px solid grey;
          }
          .userTextBox{
            border-bottom: 1px solid grey;
          }
          @media (max-width: 575.98px) { 
            #rowCard{
              width: 20rem;
            } 
          }
        `}
      </style>
    </div>
  );
}
