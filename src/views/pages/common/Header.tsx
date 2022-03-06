const Header = () => {
  return (
    <div className="bg-slate-100 flex justify-between items-center">
      <div className=" py-2">
        <h2 className="font-bold text-cyan-700 text-2xl">
          MK <span className="text-gray-400">Shop</span>
        </h2>
      </div>
      <div className="flex items-center">
        <input type="text" className="border-0 p-2" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Header;
