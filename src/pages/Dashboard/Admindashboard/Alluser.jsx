import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const Alluser = () => {
    const token = localStorage.getItem('accesstoken')
  const {data:users=[],refetch} = useQuery(['users'],async()=>{
    const res = await fetch(`${import.meta.env.VITE_URL}/alluser`, {
        headers:{
          authorization: `bearer ${token}`
        }
      })
      return res.json()
  })  
  console.log(users)

  const handleAdmin = (admin)=>{
    fetch(`${import.meta.env.VITE_URL}/user/admin/${admin._id}`,{
     method:"PATCH"
    })
    .then(res=>res.json())
    .then(data=>{
       if(data.modifiedCount > 0){
         refetch()
         Swal.fire({
             position: 'top-center',
             icon: 'success',
             title: `${admin.name} is now Admin`,
             showConfirmButton: false,
             timer: 1500
           })
       }
    })
}
    return (
        <div className="w-full ml-4">
            
            <p className="text-3xl my-4">All user {users.length}</p>
            {console.log(users)}

            <div className="overflow-x-auto">
  <table className="table w-full overflow-x-auto text-center text-white">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map((user,index)=>{
             return <><tr>
             <th>{index+1}</th>
             <td>{user.name}</td>
             <td>{user.email}</td>
             <td className="cursor-pointer">{user.role==='admin'?'admin':
             <i onClick={()=>handleAdmin(user)} className="fa-regular fa-user"></i>
             
            }</td>
             <td> <button  className="btn  btn-sm btn-error">Remove</button></td>
           </tr>
           </>
        })
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Alluser