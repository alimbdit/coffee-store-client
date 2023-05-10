import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

    const coffee = useLoaderData()
    console.log(coffee)

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        
        const updatedCoffee = {name, quantity, supplier, taste, category, details, photo}

 

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify(updatedCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
           

              if(data.modifiedCount>0){
                swal({
                    title: "Success",
                    text: "Coffee updated successfully",
                    icon: "success",
                    button: "cool"
                  })
              }
        })
    }

    return (
        <div className="p-24 bg-[#F4F3F0]">
        <h2 className="text-3xl font-extrabold">Update coffee: {name}</h2>
        <form onSubmit={handleUpdateCoffee}>
          {/* coffee name and available quantity row */}
          <div className="md:flex gap-10 mb-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-medium">Coffee Name</span>
              </label>
              <label className="">
                
                <input
                  type="text" defaultValue={name}
                  placeholder="Coffee Name" name="name" 
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-medium">Available Quantity</span>
              </label>
              <label className="">
                
                <input
                  type="text" defaultValue={quantity}
                  placeholder="Available Quantity" name="quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* supplier and test row */}
          <div className="md:flex gap-10 mb-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-medium">Supplier Name</span>
              </label>
              <label className="">
                
                <input
                  type="text" defaultValue={supplier}
                  placeholder="Supplier Name" name="supplier"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-medium">Taste</span>
              </label>
              <label className="">
                
                <input
                  type="text" defaultValue={taste}
                  placeholder="Taste" name="taste"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* category and details row */}
          <div className="md:flex gap-10 mb-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-medium">Category</span>
              </label>
              <label className="">
                
                <input
                  type="text" defaultValue={category}
                  placeholder="Category" name="category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-medium">Details</span>
              </label>
              <label className="">
                
                <input
                  type="text" defaultValue={details}
                  placeholder="Details" name="details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Photo row */}
          <div className="md:flex gap-10 mb-5">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text text-xl font-medium">Photo</span>
              </label>
              <label className="">
                
                <input
                  type="text" defaultValue={photo}
                  placeholder="Photo URL" name="photo"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            
          </div>
          {/* coffee name and available quantity row */}
          <div className="md:flex gap-10 mb-5">
            <div className="form-control w-full">
            
              <label className="">
                
                <input
                  type="submit"
                  value="Update Coffee"
                  className="btn btn-block"
                />
              </label>
            </div>
          
          </div>
  
        </form>
      </div>
    );
};

export default UpdateCoffee;