import React, { useState } from 'react';



const Home = () => {
    const [todo, setTodo] = useState([]);
    const [userName, setUserName] = useState('');
    const [password, serPassword] = useState('');


    const handleChange = (e) => {
        setUserName(e.target.value);
        setAge(e.target.value);

    }

    const handleAddTodo = () => {

        if (userName === '' && password === '') {
            alert("empty")
        } else {
            if (password < 1) {
                alert("age is not  valid ")
            } else {
                if (userName.trim() != '') {
                    let data = {
                        user: userName,
                        password: password
                    }
                    setTodo((prev) => (
                        [data, ...prev]
                    ));
                    setUserName('');
                    setPassword('')
                    console.log(data, "User Details")
                }
            }

        }

    }

    return (
        <>
            <div >

                <div>
                    <input type="text" placeholder="UserName" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </div>

                <div>
                    <input type="number" placeholder="Password" value={password} onChange={(e) => serPassword(e.target.value)} />
                </div>

                <div>
                    <button onClick={handleAddTodo}>Add</button>
                </div>

                <div  >
                    <tr>
                        <th>UserName</th>
                        <th>Password</th>
                    </tr>

                    {
                        todo.map((e, index) => (
                            <tr>
                                <th>{e.user}</th>
                                <th>{e.password}</th>
                            </tr>


                        ))
                    }

                </div>


            </div>
        </>


    )
}


export default Home;