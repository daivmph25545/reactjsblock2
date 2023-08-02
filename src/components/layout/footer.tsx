const UserFooter = () => {
    return <footer>
    <div className="grid grid-cols-4 mt-[136px] ml-[180px] mb-4 font-[Roboto] ">
        <div>
            <p className="text-[30px]">Tìm cửa hàng</p>
            <p className="text-[20px]">Tìm cửa hàng gần nhất</p>
            <p className="text-[20px]">Mua hàng từ xa</p>
            <p className="text-red-500 font-bold text-[18px]">Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)</p>
            <p className="text-[20px]">Phương thức thanh toán</p>
            <div className="flex gap-4 mt-2">
                <div><img className="w-[40px]" src="/citi.png" alt="" /></div>
                <div><img className="w-[40px]" src="/moca-grab.png" alt="" /></div>
                <div><img className="w-[60px]" src="/redivo.png" alt="" /></div>
                <div><img className="w-[60px]" src="/vnpay.png" alt="" /></div>
            </div>
            <img className="mt-2 w-[90px]" src="/vpbank.png" alt="" />
        </div>
        <div>
            <p className="text-[20px]">Gọi mua hàng: 1800.2044 (8h00 - 22h00)</p>
            <p className="text-[20px]">Gọi khiếu nại: 1800.2063 (8h00 - 21h30)</p>
            <p className="text-[20px]">Gọi bảo hành: 1800.2064 (8h00 - 21h00)</p>
            <p className="text-[30px] mt-2">Đối tác dịch vụ bảo hành</p>
            <p className="text-[20px]">Điện Thoại - Máy tính</p>
            <p className="text-[25px] mt-2">Trung tâm bảo hành uỷ quyền Apple</p>
            <img className="w-[300px]" src="/dienthoaivui.png" alt="" />
        </div>
        <div>
            <p className="text-[20px]">Mua hàng và thanh toán Online</p>
            <p className="text-[20px]">Mua hàng trả góp Online</p>
            <p className="text-[20px]">Tra thông tin đơn hàng</p>
            <p className="text-[20px]">Tra điểm Smember</p>
            <p className="text-[20px]">Tra thông tin bảo hành</p>
            <p className="text-[20px]">Tra cứu hoá đơn VAT điện tử</p>
            <p className="text-[20px]">Trung tâm bảo hành chính hãng</p>
            <p className="text-[20px]">Quy định về việc sao lưu dữ liệu</p>
            <p className="text-[20px] text-red-500 font-bold">Dịch vụ bảo hành điện thoại</p>
        </div>
        <div>
            <p className="text-[20px]">Quy chế hoạt động</p>
            <p className="text-[20px]">Chính sách Bảo hành</p>
            <p className="text-[20px]">Liên hệ hợp tác kinh doanh</p>
            <p className="text-[20px]">Khách hàng doanh nghiệp (B2B)</p>
            <p className="text-[20px] text-red-500 font-bold">Ưu đãi thanh toán</p>
            <p className="text-[20px]">Tuyển dụng</p>
        </div>
    </div>
    <div className="grid grid-cols-3 ml-[180px] text-[#444444] mt-[74px] mb-[15px]">
        <div>
            <p>Điện thoại iPhone 13-Điện thoại iPhone 12-Điện thoại iPhone 11</p>
            <p>Điện thoại iPhone 13 Pro Max-Điện thoại iPhone 11 Pro Max</p>
            <p>iPhone cũ giá rẻ-iPhone 13 cũ-iPhone 12 cũ-iPhone 11 cũ</p>
        </div>
        <div>
            <p>Điện thoại iPhone-Điện thoại Samsung-Điện thoại Samsung A</p>
            <p>Điện thoại OPPO-Điện thoại Xiaomi-Điện thoại Vivo-Điện thoại Nokia</p>
            <p>Samsung Fold 3-Samsung S22-Samsung A73-Samsung A53</p>
        </div>
        <div>
            <p>Laptop-Laptop HP-Laptop Dell-Laptop Acer</p>
            <p>Microsoft Surface-Laptop Lenovo-Laptop Asus</p>
            <p>Máy tính để bàn-Màn hình máy tính-Camera-Camera hành trình</p>
        </div>
    </div>
    <p className="font-[Roboto] text-[15px] text-center text-[#616161] ">Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD: 0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.</p>
</footer>
}
export default UserFooter