export const ProductCard = ({ img, price, data }) => {
  return (
    <div className="p-2  rounded-2xl shadow-[0px_4px_20px_0px_rgba(9,43,94,0.06)]">
      <div className="bg-[#F4F6F6] rounded-2xl flex justify-center items-center">
        <img
          className="w-[116px] h-[116px] md:w-48 md:h-48 "
          src={data?.images[0]}
          alt={`${data?.productName} photo`}
        />
      </div>

      <div className="my-3">
        {" "}
        <p className="font-rubik text-lg font-medium text-center">
          {data?.productName}
        </p>
        <p className="text-lg text-center">${data?.price}/KG</p>
      </div>
      <button className="btn w-full btn-outline hover:bg-secondarybase">
        Add to Cart
      </button>
    </div>
  );
};
