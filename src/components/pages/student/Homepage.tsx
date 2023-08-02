

const HomePage = () => {

    {/* code homepage ở đây */ }

    return (
        <div>
            {/* <Link to={`product/${data._id}`} className="block ml-[100px] text-justify"> */}
            <img
                alt="product-image"
                // src={data.images?.[0].base_url}
                className="h-[180px] w-[180px] "
            />

            <p className="mt-4 pr-10 text-justify font-bold text-gray-900 sm:text-base">
                {/* {data.name} */}
            </p>
            {/* <p className="mt-2 max-w-sm text-gray-700">
      {data.description.substring(0,50)}
    </p> */}
            <div className="flex gap-4">
                {/* <span className="title-font font-medium text-[25px] pr-4 text-[#D70018] ">{data.price} ₫</span> */}
                {/* <span className="title-font font-medium text-[15px] line-through pt-1 text-[#707070]">{data.original_price} ₫</span> */}
            </div>
            <div className="flex gap-1">
                <i className="fa-solid fa-star mt-[6px]"></i>
                <i className="fa-solid fa-star mt-[6px]"></i>
                <i className="fa-solid fa-star mt-[6px]"></i>
                <i className="fa-solid fa-star mt-[6px]"></i>
                <i className="fa-solid fa-star mt-[6px]"></i>
                <p className="text-[20px] text-[#707070] font-[Roboto]">72 đánh giá</p>
            </div>
            {/* </Link> */}
        </div >
    )


}

export default HomePage