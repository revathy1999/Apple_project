const Macbook_AD=()=>{
return (
    <>
    <div className="mt-5 relative">
        <img src="https://www.apple.com/v/home/cf/images/heroes/macbook-air/hero_macbook_air_avail__fpm99qgohx2e_mediumtall.jpg" alt="laptop" className="w-full" />
        <div className="text-center flex flex-col gap-2 absolute top-6 left-1/4 md:left-[38%] md:top-12">
            <h1 className="font-bold text-4xl md:text-6xl">MacBook Air</h1>
            <div>
            <h2 className="text-2xl">Sky blue colour.</h2>
            <h2 className="text-2xl">Sky high performance with M4.</h2>
            </div>
            <div className="flex gap-5 justify-center items-center mt-2">
            <button className="bg-blue-500 text-white rounded-3xl py-2 px-4">Learn more</button>
            <button className="border border-blue-600 py-2 px-4 text-blue-600 rounded-3xl">Buy</button>
</div>
        </div>
    </div>
    </>
)
}
export default Macbook_AD;