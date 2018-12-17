import React, {memo} from 'react';


// const UsernameForm = memo(({username,updateUsername}) => {
//     console.log('username form rendered');
//     return <form>
//                 <label data-for='username'>Please enter your name: </label>
//                 <input name='username' value={username.first} onChange={updateUsername}/>
//             </form>;
// });

const UsernameForm = ({username,updateUsername}) => {
    console.log('rendered');
    return <form>
                <label data-for='username'>Please enter your name: </label>
                <input name='username' value={username} onChange={updateUsername}/>
            </form>;
};

export default UsernameForm;