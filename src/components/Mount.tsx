import { useEffect, useState } from "react"

const tabs = ['posts', 'comments', 'albums'];

const Mount = () => {
    // 2 đối số
    // useEffect (callback, [dependencies])
    // đối số đầu tiên là hàm callback đây là do hàm chúng ta tự tạo
    // Bắt buộc phải có
    // dependencies(không bắt buộc)

    // 1.useEffect(callback) - callback được gọi mỗi khi component re-render(render lại)
    // 2.useEffect(callback, [])
    // 3.useEffect(callback, [dependencies])

    // Lý thuyết chung: callback của useEffect luôn được gọi sau khi component được mounted


    const [title, settiltle] = useState<string>('');
    const [post, setPost] = useState<any[]>([]);
    const [type, setType] = useState<string>('posts');



    useEffect(() => {
        console.log("mounted", type);
        fetch(`http://localhost:3001/${type}`)
            .then(res => res.json())
            .then(p => {
                setPost(p)
            })

    }, [type])

    return (<div>
        <h1>AHIHI</h1>
        {tabs.map((tab,index)=>(
            <button
            onClick={()=>setType(tab)}
            style={type === tab ? {
                color:'#fff',
                backgroundColor:'red'
            }: {}}
            key={index}>{tab}</button>
        ))}
        <input value={title} onChange={e=>settiltle(e.target.value)}></input>
        <ul>
            {post.map(posts=>(
                 <li key={posts.id}>{posts.name}</li>
            ))}
           
        </ul>
    </div>)
} 
export default Mount