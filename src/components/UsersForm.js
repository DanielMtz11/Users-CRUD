import React, { useEffect, useState } from 'react';

const UsersForm = ({addUsers, userSelect, UpdateUsers, setUserSelect,isTrue,setIsTrue}) => {
// const [isTrue, setIsTrue]= useState(false)

    useEffect(()=>{
        //si existe un usuario seleccionado
        if(userSelect){
            setFirst_name(userSelect.first_name);
            setLast_name(userSelect.last_name);
            setBirthday(userSelect.birthday);
            setEmail(userSelect.email);
            setPassword(userSelect.password);
        }

        // si es null el usuario setamos a strings vacios
        else{
            setFirst_name("");
            setLast_name("");
            setBirthday("");
            setEmail("");
            setPassword("");
        }
    },[userSelect])//pasamos el estado del usuario seleccionado como dependencia para que lo que este dentro del useEffect se ejecute cada vez que este cambie.


    //estados para la controlar las inputs del form
    const[first_name, setFirst_name] = useState("");
    const[last_name, setLast_name] = useState("");     
    const [birthday, setBirthday] = useState(""); 
    const [email, setEmail] = useState(""); 
    const[password, setPassword] = useState("");
    

    // al hacer submit  se ejecuta lo siguiente:
    const submit = e =>{
        e.preventDefault();
        console.log("submit");

        const user ={
            first_name,
            last_name,
            birthday,
            email,
            password
        }

        // si existe un usuario seleccionado lo actualizamos
    
        if(userSelect){
            //pasamos el mismo id. ya que esta manera sabremos que usuario sera el que se va a modificar
            user.id=  userSelect.id 

            UpdateUsers(user);

        }

        // si no lo agregamos
        else{   
            addUsers(user);
        }



    }


    const cancel =(isTrue)=>{
        if(isTrue===false){
        
            setUserSelect(null);
        }
    }

    return (

        <div className='container-form'>
            
        <button
            onClick={()=> {setIsTrue(!isTrue)
                            cancel(!isTrue) }}
                className='addBnt'>
            {isTrue? "Cancel": "Add User"}
        </button>

        {isTrue &&     
        <form className='form'  onSubmit={submit}>
            <h2>Register User</h2>

        <div className='NameForm' >
                <label htmlFor="name">Name: </label>
                <input 
                    placeholder='Your Name/ Names'
                    type="text"
                    id = "name"
                    onChange={e=>setFirst_name( e.target.value)}
                    value = {first_name}
                    />
            </div>

            <div className='LastNameForm'>
                <label htmlFor="lastname"> Last Names </label>
                <input
                    placeholder='Your Last Names'
                    type="text"
                    id="lastname"
                    onChange={e =>setLast_name(e.target.value)}
                    value ={last_name}
                    />
            </div>  
            
            <div className='birthdayForm'>
                <label htmlFor="birthday"> 
                        Date of Birth: </label>
                <input 
                    type="date"
                    id = "birthday"
                    onChange={e=>setBirthday( e.target.value)}
                    value = {birthday}
                    />

            </div>

            <div className='emailForm'>
                <label htmlFor="email"> Email: </label>
                <input
                    placeholder='Your Email'
                    required
                    type="text"
                    id="email"
                    onChange={e =>setEmail(e.target.value)}
                    value ={email}
                    />
            </div>

            <div className='passwordForm'>
                <label htmlFor="password"> Password: </label>
                <input
                    placeholder='Your Password'
                    type="text"
                    id="password"
                    onChange={e =>setPassword(e.target.value)}
                    value ={password}
                    />
            </div>

            <div className='buttonsForm'>

            <section className='btnsForm'>

            <button>Submit</button>

            {/* si existe un usuario seleccionado creamos el btn cancel el cual setea a null el usuario seleccionado*/}
            {userSelect && <button
                        type='button'
                        onClick={()=>setUserSelect(null)}>
                                cancel
                            </button>}
            </section>
            </div>
        </form>

    }
        </div>
    );
};

export default UsersForm;