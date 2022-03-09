import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../contexts/authContext"
import {useEffect, useState, useContext} from 'react'
import { api } from '../../api/api';
import { Button } from '../../Components/Button/index'
import { FormField } from '../../Components/Forms/FormField';

export function EditAccount(){

  const { loggedInUser } = useContext(AuthContext);
  const { id } = useParams();


  const [form, setForm] = useState({
      name:''
  });

  useEffect(() => {
    async function fetchForm() {
      try {
        const response = await api.get(`/account/profile`)
        setForm({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }

   
    fetchForm();
  }, []);


  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }


  function handleSubmit(e) {
    e.preventDefault();
    
   /*  for(let key in form){
        if(!form[key]){
            window.alert(`Preencher o campo ${key}.`);
            return;
        }
    } */

    async function updateForm(id) {
      try {

        await api.patch(`account/profile/update`, {
          ...form,
          userId: loggedInUser.token._id,
        });
        window.location.href="/myAccount";
       
      } catch (err) {
        console.log(err);
       
      }
    }
    updateForm(id);
  }

    return(
        <div className="h-screen mt-5 mb-5 flex flex-col items-center">
            <div className="title2 mt-1 mb-5">
            <p>Edit Account</p>
            </div>
                <form className='bg-white shadow-2xl rounded px-12 pt-6 pb-8 mb-5 w-1/4' onSubmit={handleSubmit}>

                <FormField
                label='Full Name'
                id='name'
                name='name'
                value={form.name}
                onChange={handleChange} 
                />
            {/*  <FormField
                label='E-mail'
                type='email'
                id='emailEdit'
                name='email'
                value={form.email}
                onChange={handleChange} 
                /> */}


                <Button type="submit" className="bg-green-600 hover:bg-green-400 text-white font-bold py-2 px-4 mt-3 rounded focus:outline-none focus:shadow-outline" >
                Submit Edit
                </Button>
                </form>
        </div>
    )
    }