import React, { useEffect, useState } from 'react';


const UsersList = ({users, deleteUsers, SelectUsers}) => {
    return (
        <div className='container'>
            {users?.map(user =>(
            <ul className='List' key ={user.id}>
                
                <li className='name'>{user.first_name} {user.last_name}</li>
                <li className='email'> Email <br /><p> {user.email}</p></li>
                <li className='birthday'> Birthday <br/><p><i className="fa-solid fa-cake-candles"></i>   {user.birthday}</p></li>
                {/* <li>{user.password}</li> */}
            
            <div className='flex-btns'>

                <button
                    className='delete' 
                    type='button'                    
                    onClick={()=>deleteUsers(user.id)}>
                        <i className="fa-solid fa-lg fa-trash-can" style={{color:"rgb(250, 240, 239)"}}></i>
                </button>

                <button
                    type = 'button'
                    onClick= {()=>SelectUsers(user)}>
                    <i className="fa-solid fa-lg fa-pen-to-square"style={{color:"rgb(250, 240, 239)"}}></i>
                </button>
        </div>

            </ul>
            )
                
                )}
        </div>
    );
};

export default UsersList;