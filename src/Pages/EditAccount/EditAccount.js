import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react'
import { api } from '../../api/api';
import { Button } from '../../Components/Button/index'
import { FormField } from '../../Components/Forms/FormField';

export function EditAccount(){
    const params =useParams();
    const [form,setForm] = useState({});

    useEffect(()=>{
        async function fetchEditAcc(){
            try{
                const response = await api.get(`/account/profile/update/${params.id}`);
                setForm({...response.data});

            }catch(error){
                console.log(error)
            }
        }
        fetchEditAcc()
    },[]);

    function handleChange(event){
        setForm({...form, [event.target.name]:event.target.value});
        console.log(form);
    }

        function handleSubmit(event){
            event.preventDefault();

            for(let key in form){
                if(!form[key]){
                    window.alert(`Preencher o campo ${key}.`);
                    return;
                }
            }
        
        
    
        api.put(`/account/profile/update/${params.id}`, form)
        .then((result) => { console.log(result);
             window.location.href="/myAccount"}).catch ((error)=>{
            console.error(error);
        });
   
    }
    return(
        <>
            <form onSubmit={handleSubmit}>

            <FormField
               label='Full Name'
               id='name'
               name='name'
               value={form.name}
               onChange={handleChange} 
            />
            <FormField
               label='E-mail'
               type='email'
               id='emailEdit'
               name='email'
               value={form.email}
               onChange={handleChange} 
            />


            <Button type="submit" className="bg-stone-800 hover:bg-amber-500 text-white font-bold py-2 px-4 mt-3 rounded focus:outline-none focus:shadow-outline" >
            Submit Edit
            </Button>
            </form>
        </>
    )
    }