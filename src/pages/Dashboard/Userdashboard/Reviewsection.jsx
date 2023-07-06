import { useContext } from "react";
import {AuthContext} from '../../../Firebase/Authprobider'
import Swal from 'sweetalert2'
const Reviewsection = () => {
  const {user} = useContext(AuthContext)
  const token = localStorage.getItem('accesstoken')
    const handlereviews=(e)=>{
     e.preventDefault()
     const form = e.target
     const feedback = form.feedback.value
     const rating = form.rating.value
     const userName = user?.displayName
     const image = user?.photoURL
     const userEmail = user?.email
     const date = new Date()
     
     const userReviews = {feedback,userName,rating,image,userEmail,date }
     fetch(`${import.meta.env.VITE_URL}/reviews`,{
      method:'POST',
      headers:{
          'Content-Type':'application/json',
          authorization: `bearer ${token}`
          

      },
      body:JSON.stringify(userReviews)
  })
  .then(res=>res.json())
  .then(data=>{
      console.log(data)
      if(data.insertedId){
        form.reset()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your reviews successfully Added',
          showConfirmButton: false,
          timer: 1500
        })
      }
  })
    }
    return (
        
            <div className=" w-full h-screen flex items-center justify-center">
              <form onSubmit={handlereviews} className="w-full max-w-md ">
                <div>
                  <label htmlFor="feedback" className="block text-white text-lg font-medium mb-2">
                    Feedback
                  </label>
                  <textarea
                    id="feedback"
                    name="feedback"
                    className="block w-full bg-gray-800 text-white border border-gray-600 rounded-lg py-2 px-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    rows={4}
                    placeholder="Enter your feedback..."
                    required
                  ></textarea>
                </div>
                <div className="mt-4">
                  <label htmlFor="rating" className="block text-white text-lg font-medium mb-2">
                    Rating
                  </label>
                  <input
                    type="number"
                    id="rating"
                    name="rating"
                    className="block w-full bg-gray-800 text-white border border-gray-600 rounded-lg py-2 px-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    min={1}
                    max={5}
                    required
                  />
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
    );
};

export default Reviewsection;