export const CustomButton = ({ name }) => {
  return (
    <span className="outline-1 hover:text-white hover:bg-secondarybase outline-secondarybase border border-secondarybase cursor-pointer text-secondarybase p-2 font-semibold rounded-md ">
      {" "}
      {name}
    </span>
  );
};
