const UserHeader = () => {
    return <header className='bg-red-500 h-[80px]'>
    <div className="container ml-[200px] flex items-center gap-[60px]">
        <img className='w-[70px] ' src="#" alt="" />
        <div className="relative">
            <input className="grow rounded-[10px] h-[40px] pl-10 w-[900px] mt-[20px]" type="text" />
            <label className="absolute left-3 top-1/2 transform -translate-y-1/2 mt-2"><i className="fa-solid fa-search"></i></label>
        </div>
    </div>
</header>
}
export default UserHeader