export const ProductCard = ({ img, name, price }) => {
  return (
    <div className="p-2 rounded-2xl shadow-[0px_4px_20px_0px_rgba(9,43,94,0.06)]">
      <div className="bg-[#F4F6F6] flex justify-center items-center">
        <img
          className="w-[116px] h-[116px] md:w-48 md:h-48 "
          src={img}
          alt=""
        />
      </div>

      <div className="my-3">
        {" "}
        <p className="font-rubik text-lg font-medium text-center">{name}</p>
        <p className="text-lg text-center">${price}/KG</p>
      </div>
      <button className="btn w-full btn-outline hover:bg-secondarybase">
        Add to Cart
      </button>
    </div>
  );
};
