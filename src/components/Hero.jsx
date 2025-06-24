const Hero=()=>{
return (
    <>
    <div className="mt-5 relative md:hidden">
        <img src="https://www.apple.com/in/home/heroes/mac-for-students/images/mac_for_students_hero__dbi4flqyio2u_mediumtall.jpg" alt="person with laptop" />
        <button className="bg-white text-black px-8 py-2 rounded-2xl absolute top-[80%] left-[45%]">Learn more</button>
    </div>
    <div className=" hidden md:flex mt-5">
<img src="https://www.apple.com/in/home/heroes/mac-for-students/images/mac_for_students_hero__dbi4flqyio2u_largetall.jpg" alt="in large screen" />
<button className="bg-white text-black px-8 py-2 rounded-2xl absolute top-[93%] left-[45%]">Learn more</button>
    </div>
    </>
)
}
export default Hero;