import image from "../Images/1.png"

const First = () => {
  return (
    <>
          <div className="bg-[#fdf2ec] h-[1000px]">
              <div className="h-[300px] w-[80%] ml-[10%]">
                  <div className="ml-[33%]">
                    <div className="flex w-full">
                      <div>icon</div>
                      <div>WELCOME TO MANAGE WISE</div>
                    </div>
                  </div>
                  <div className="text-[80px] font-semibold space-y-[1px] leading-[85px] mb-[30px] "><div>Empower your business with</div> <div className="text-[#FE8162] w-[0px] h-0 mx-[5px] ml-[21%]"> Strategic </div><div className="ml-[28%]">insights.</div></div>
                  <div className="text-[#767575] text-[20px] font-semi w-[700px] ml-[20%] h-[60px]">Powerful management platform designed to streamline your business operations, boost productivity, and drive success</div>
                  <div className="mt-[20px]">
                      <button className="bg-[#8247FF] font-semibold mt-[10px] text-white rounded-[20px] px-[26px] py-[26px]font-[20px]"><div className="py-[10px] font-[20px]">Get Started</div></button>
                      <button className=" font-semibold ml-[10px] mt-[10px] text-[#1C1C1C] rounded-[20px] px-[26px] py-[26px]font-[20px] border "><div className="py-[10px] font-[20px]">Watch Demo</div></button>
                  </div>
              </div>
              <div className="ml-[16%]">
                <div className="w-[1000px] h-[372px] mt-[130px]" ><img src={image}/></div>
              </div>
          </div>
      </>
  ) 
}
export default First