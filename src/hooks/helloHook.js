import React, {useState,useEffect} from 'react';

const HelloHook = () => {

    const [username,setUsername] = useState('');
    useEffect(() => {
        document.title = `Hello ${username}`;
    });
    const [width,setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const resizeHandler = setWidth(window.innerWidth);
        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);
    }, [width])

    const updateUsername = (e) => {
        setUsername(e.target.value);
    }

    return <section className='hello-user'>
                <form>
                    <label data-for='username'>Please enter your name: </label>
                    <input name='username' value={username} onChange={updateUsername}/>
                </form>
            </section>;
}

export default HelloHook;