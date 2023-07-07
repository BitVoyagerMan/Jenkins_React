import Link from "next/link";

export default function(){
    return(
        <div className=" bg-gradient-to-t from-[#212529]  p-[8px]  to-[#414548]">
            <div className="container mx-auto xl:max-w-[1140px] xxl:max-w-[1320px]">
                <div className = " flex flex-wrap justify-center lg:justify-start items-center p-[5px]   mx-auto  text-white font-normal text-[1.25rem] leading-6 box-border">
                    <Link href = "/">
                    <div className = "flex flex-row  mr-[1.0rem] items-center py-[0.3125rem]">
                        <img className=" h-[32px] w-[32px]" src = "favicon.ico" />
                        <div >&nbsp;Blog-site</div>
                        <span className="p-[0.5rem] flex flex-row items-end ">
                            
                        </span>
                    </div>
                    </Link>
                    <ul className="flex pl-3 justify-center lg:w-auto lg:mr-auto flex-wrap text-[16px]">
                        <Link href="/"><li className="p-[0.5rem]">Home</li></Link>
                        <Link href="#"><li className="p-[0.5rem]">Profile</li></Link>
                        
                    </ul>
                
                    <div className="flex flex-row text-[16px]">
                        

                        {/* <img className="w-10 h-10 rounded-full" src="avatar.png" alt="Rounded avatar"/> */}
                        <Link href = "/login" className=" focus:shadow-[0_0_0_0.25rem_rgba(248,249,250,.5)] text-white hover:bg-white hover:text-black me-2 border-[1px] py-[6px] px-[12px] rounded-[4px]">Login</Link>
                        <Link href = "/signup" className=" focus:shadow-[0_0_0_0.25rem_rgba(217,164,6,.5)] bg-[#ffc107] border-[#ffc107] hover:bg-[#ffcd39] hover:border-[#ffc720]  border-[1px] py-[6px] px-[12px] rounded-[4px] text-black">Sign-up</Link>                        
                    </div>

                </div>
            </div>
        </div>
    )
}