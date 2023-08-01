import { useState } from "react"

const Login = () => {

    const [email, setEmail] = useState<string>('');
    
    // Khai báo 1 state error dạng mảng
    const [error, setError] = useState<string[]>([]);

    const handleSubmit = () => {
        // console.log(email);
        let newError: string[] = [];
        if (!email || email.length === 0) {
            newError.push('Email is required')
        } else if (email.length < 6) {
            newError.push('Email must be at least 6 characters')
        }
        // set newError vào state error

        setError((preErrors) => {
            const uniqueError = new Set([...preErrors, ...newError])
            return Array.from(uniqueError)
        })//Lọc xong những phần tử trùng và set 1 mảng lỗi mới vào trong state error


    }

    return <>
        <h1>Đăng nhập</h1>
        <form action="">
            <label htmlFor="">Email</label>
            <input type="text" onChange={(event) => setEmail(event.target.value)} />
            <button type="button" onClick={handleSubmit}>Gửi</button>
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

export default Login