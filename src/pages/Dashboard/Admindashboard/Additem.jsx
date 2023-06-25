import { useState } from 'react';
import Swal from 'sweetalert2'


const Additem = () => {
  
  const [images,setimage] = useState('')
  
  const imageHostingUrl =`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_token}`
  console.log(imageHostingUrl)
  const token = localStorage.getItem('accesstoken')
  const handleAddItem = (e) => {
    // Handle form submission
    e.preventDefault()
   
    const form = e.target
    const name = form.name.value
    const recipe = form.recipe.value
    const price = parseFloat(form.price.value)
    const category = form.category.value
    const image = form.image.files[0]
    const formData = new FormData()
    formData.append('image',image)
    fetch(imageHostingUrl,{
      method:'POST',
      body:formData
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setimage(data?.data?.display_url)
      if(data.success){
        const items = {
          name,
          recipe,
          image:data.data.display_url,
          category,
          price
      }
      console.log(items)
      fetch(`${import.meta.env.VITE_URL}/menu`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          authorization: `bearer ${token}`
        },
        body:JSON.stringify(items)
      })
      .then(res=> res.json())
      .then(datas=>{
        console.log(datas)
        if(datas.insertedId){
          form.reset()
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Item Added Successfully',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
      }
     
    })
   
   
    
  };

  return (
    <div className="w-full">
        <div className="w-full">
        </div>
        <form onSubmit={handleAddItem}   className="p-4 ">
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="recipeName">
          Recipe Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="recipeName"
          type="text"
          placeholder="Enter recipe name"
          name="name"
          required
        />
      </div>
      <div className="flex gap-3">
      <div className="mb-4 w-full">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="price">
          Price
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="price"
          type="text"
          placeholder="Enter price"
          name="price"
          required
        />
      </div>
      <div className="mb-4 w-full">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="category">
          Category
        </label>
        <select
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          id="category"
          name="category"
          required
        >
          <option value="">Select Category</option>
          <option value="burger">Burger</option>
          <option value="pizza">Pizza</option>
          <option value="chickenfry">Chicken-fry</option>
          <option value="chickenroll">Chicken-roll</option>
          <option value="drinks">Drinks</option>
        </select>
      </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="details">
          Recipe
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="details"
          placeholder="Enter details"
          name="recipe"
          rows="4"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="file">
            Choose Image
          </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          id="file"
          type="file"
          name="image"
          required
        />
      </div>
      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Item
        </button>
      </div>
      {images&&(
        <img src={images} alt="foodimage"/>
      )}
        </form>
        
    </div>
  );
};
export default Additem