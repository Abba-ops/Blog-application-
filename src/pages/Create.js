import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Liam')
    const [isPending, setIsPending] = useState(false)
    const navigate= useNavigate()

    const submitHandler = (event) => {
        event.preventDefault()
        const blog = {title, body, author}

        setIsPending(true)

        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false)
            navigate('/')
        })
    }

    return ( 
        <div className="create">
            <h2>Create New Blog</h2>
            <form onSubmit={submitHandler}>
                <label>Blog Title</label>
                <input type='text' placeholder="E.g Seasons in Color" value={title} onChange={(event) => setTitle(event.target.value)} required />
                <label>Blog Body</label>
                <textarea value={body} placeholder="E.g Seasons in Color interior design..." onChange={(event) => setBody(event.target.value)} required></textarea>
                <label>Blog Author</label>
                    <select value={author} onChange={(event) => setAuthor(event.target.value)}>
                        <option value="Noah">Noah</option>
                        <option value="Liam">Liam</option>
                        <option value="Oliver">Oliver</option>
                        <option value="Elijah">Elijah</option>
                    </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}

export default Create;