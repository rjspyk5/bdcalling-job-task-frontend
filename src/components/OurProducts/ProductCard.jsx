export const ProductCard = ({ img, name, price }) => {
  return (
    <div className="p-2 rounded-2xl">
      <img src="" alt="" />
      <div className="my-3">
        {" "}
        <p className="font-rubik text-lg font-medium">{name}</p>
        <p className="text-lg">${price}/KG</p>
        <button className="btn btn-outline hover:bg-secondarybase">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
