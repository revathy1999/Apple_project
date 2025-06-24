const Appleproducts=()=>{
    const product_details = [
  {
    productname: "iPad air",
    specifications: "Now supercharged by the M3 chip.",
    button1: "Learn more",
    button2: "Buy",
    image: "https://www.apple.com/v/home/cf/images/promos/ipad-air/promo_ipad_air__bfbxzvw65c02_large.jpg",
    theme: "light",
  },
  {
    productname: "iPhone",
    specifications: "Meet the iPhone 16 family.",
    button1: "Learn more",
    button2: "Shop iPhone",
    image: "https://www.apple.com/v/home/cf/images/promos/iphone-family/promo_iphone_family__ofrg9zdy1teq_large.jpg",
    theme: "light",
  },
  {
    productname: "MacBook Pro",
    specifications: "A work of smart.",
    button1: "Learn more",
    button2: "Buy",
    image: "https://www.apple.com/v/home/cf/images/promos/macbook-pro/promo_macbookpro_announce__gdf98j6tj2ie_large.jpg",
    theme: "dark",
  },
  {
    productname: "iPad Pro",
    specifications: "Unbelievably thin. Incredibly powerful.",
    button1: "Learn more",
    button2: "Buy",
    image: "https://www.apple.com/v/home/cf/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_large.jpg",
    theme: "light",
  }
];

return (
    <>
    
    <div className="grid grid-cols-2 gap-3 mt-5">
        {product_details.map((item, index) => (
    <div
      key={index}
      className={`text-center relative ${item.theme === "dark" ? "text-white": "text-black"}`}
    >
        <div className="absolute flex flex-col justify-center items-center text-center left-16 top-3 md:left-1/3">
      <h2 className="text-2xl font-semibold mb-2">{item.productname}</h2>
      <p className="mb-3">{item.specifications}</p>
      <div className="space-x-3 mb-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-3xl hover:bg-blue-100">
          {item.button1}
        </button>
        <button className="px-4 py-2 rounded-3xl border border-blue-600 text-blue-600 hover:bg-blue-100">
          {item.button2}
        </button>
      </div>
      </div>
      <img
        src={item.image}
        alt={item.productname}
        className="h-96"
      />
    </div>
  ))}
    </div>
    </>
)
}
export default Appleproducts;