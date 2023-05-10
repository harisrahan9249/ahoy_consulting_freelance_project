import React from 'react'
import axios from 'axios';

const Logout = async () => {
    try {
      await axios.post('/logout');
      // Redirect the user to the login page or do any other necessary cleanup
    } catch (error) {
      console.error(error);
    }
    return(
        <div>
        < button className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
         onClick={Logout} >Logout</button>

        </div>

    )
  }


export default Logout
