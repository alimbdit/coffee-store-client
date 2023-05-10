import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, allCoffee, setAllCoffee }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: 'DELETE',
  
        })
        .then(res=>res.json())
        .then(data => {
          console.log(data)
          if(data.deletedCount>0){
            Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
            const remainingCoffee = allCoffee.filter(cof => cof._id !== _id);
            setAllCoffee(remainingCoffee)
          }
        })
      }

      console.log('delete confirmed')



      
    });
  };

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl p-5 items-center gap-5">
        <figure>
          <img src={photo} alt="coffee" />
        </figure>
        <div className="flex justify-between w-full">
          <div>
            <h2 className="text-lg font-bold">Coffee Name: {name}</h2>
            <p className="text-lg font-medium">Quantity: {quantity}</p>
            <p className="text-lg font-medium">Test: {taste}</p>
            <p className="text-lg font-medium">Category: {category}</p>
          </div>
          <div className="card-actions justify-end">
            <div className=" flex flex-col space-y-2">
              <button className="btn ">Show</button>
              <Link to={`/updateCoffee/${_id}`}>
              <button className="btn">Edit</button>
              </Link>
              
              <button onClick={() => handleDelete(_id)} className="btn bg-orange-500 hover:bg-orange-400">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
