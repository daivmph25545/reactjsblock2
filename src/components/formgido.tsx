import { useState } from "react"


const BT1 = () => {
    const [name, setName] = useState('') //Họ tên

    const [email, setEmail] = useState<string>(''); //Email

    const [gender, setGender] = useState(''); //Giới Tính

    const [level, setLevel] = useState('bậc 1') // Cấp bậc

    const [day, setDay] = useState(0) //Số ngày làm việc

    const [person, setPerson] = useState('') //Cán Bộ

    const [Showresult, setResult] = useState(false);

    // Khai báo 1 state error dạng mảng
    const [error, setError] = useState<string[]>([]);




    const SubmitBtn = () => {
        // console.log(email);
        let newError: string[] = [];
        if (!email || email.length === 0) {
            newError.push('Email không được để trống')
        } else if (email.length < 6) {
            newError.push('Email phải có 6 kí tự trở lên')
        } else if (name.length === 0) {
            newError.push('Tên không được bỏ trống')
        } else if (day < 0) {
            newError.push('Số ngày làm việc phải lớn hơn 0')
        }
        // set newError vào state error

        setError((preErrors) => {
            const uniqueError = new Set([...preErrors, ...newError])
            return Array.from(uniqueError)
        })//Lọc xong những phần tử trùng và set 1 mảng lỗi mới vào trong state error


        if (newError.length === 0) {
            setResult(true)
        } else {
            setResult(false);
        }
    }


    const handleChangeLevel = (event: any) => {
        setLevel(event.target.value);
    }

    const handleChangeGender = (event: any) => {
        setGender(event.target.value);
    }

    const handleChangePerson = (event: any) => {
        setPerson(event.target.value);
    }

    const handleDayChange = (event: any) => {
        setDay(event.target.value);
    }



    const getPayment = () => {
        let payment = 0;
        switch (level) {
            case "bậc 1":
                payment = 1200 * day;
                break;
            case "bậc 2":
                payment = 2400 * day;
                break;
            case "bậc 3":
                payment = 3600 * day;
                break;
            default:
                payment = 0;
        }

        if (person === "cán bộ") {
            payment = 4000 * day; 
        }else if(person === "quản lý"){
            payment = 10000 * day; 
        }
        return payment;
    }


    const showResult = () => {
        if (error.length === 0) {
            return (
                <h1> {gender === 'nam' ? 'Ông' : 'Bà'} {name} cấp {level} là {person} được chi trả {getPayment()} nằm viện </h1>

            )
        }
        return null;
    }

    const handleSubmit = (event: any) => {
        event.preventDefault(); 
        SubmitBtn(); 
    };
    return <>
        <form action="" onSubmit={handleSubmit}>
            <label >Họ tên</label>
            <input type="text" onChange={(event) => setName(event.target.value)} />
            <br />
            <label >Email</label>
            <input type="text" onChange={(event) => setEmail(event.target.value)} />
            <br />
            <label >Giới Tính</label>
            <input type="radio" value="nam" name="gioiTinh" onChange={handleChangeGender} />Nam
            <input type="radio" value="nữ" name="gioiTinh" onChange={handleChangeGender} />Nữ
            <br />
            <label >Cấp bậc</label>
            <select onChange={handleChangeLevel} >
                <option value="bậc 1">bậc 1</option>
                <option value="bậc 2">bậc 2</option>
                <option value="bậc 3">bậc 3</option>
            </select>
            <br />
            <label >Số ngày làm việc</label>
            <input type="number" value={day} onChange={handleDayChange} />
            <br />
            <label >Cán Bộ</label>
            <select onChange={handleChangePerson}>
                <option value="nhân viên">Nhân viên</option>
                <option value="cán bộ">Cán bộ</option>
                <option value="quản lý">Quản lý</option>
            </select>
            <br />
            <br />

            {Showresult && showResult()}
            <button type="submit" onClick={SubmitBtn}>Check</button>

            {
                error.length > 0 && (
                    <ul>
                        {
                            error.map((errors, i) => (
                                <li key={i}>{errors}</li>
                            ))
                        }
                    </ul>
                )
            }
        </form>
    </>
}

export default BT1