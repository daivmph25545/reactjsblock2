const HeaderAdmin = () => {
    return <header className='bg-[#00B0D7] h-[80px]'>
        <div className="container ml-[200px] flex items-center gap-[60px]">
            <div className="flex gap-4">
                <p className="text-[#ffffff] text-[18px] pl-[20px] mt-[20px] font-semibold">DASH BOARD</p>
            </div>
            <div className="relative flex">
                <div className="mt-2">
                    <input className="grow rounded-[10px] h-[40px] pl-10 w-[600px]" type="text" />
                    <label className="absolute left-3 top-[30px] transform -translate-y-1/2"><i className="fa-solid fa-search"></i></label>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    <p className="text-[#ffffff] text-[18px] pl-[20px] font-semibold pt-[10px] ">XIN CHÀO ADMIN</p>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    <a href="/" className="text-[#ffffff] text-[18px] pl-[20px] font-semibold pt-[10px] ">VỀ TRANG CHỦ</a>
                </div>
            </div>
        </div>
    </header>
}

export default HeaderAdmin