import swal from 'sweetalert';

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        
        const newCoffee = {name, quantity, supplier, taste, category, details, photo}

        console.log(newCoffee)

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            swal({
                title: "Success",
                text: "Coffee added successfully",
                icon: "success",
                button: "cool"
              })
        })
    }

  return (
    <div className="p-24 bg-[#F4F3F0]">
      <h2 className="text-3xl font-extrabold">Add a coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* coffee name and available quantity row */}
        <div className="md:flex gap-10 mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text text-xl font-medium">Coffee Name</span>
            </label>
            <label className="">
              
              <input
                type="text"
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
                type="text"
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
                type="text"
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
                type="text"
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
                type="text"
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
                type="text"
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
                type="text"
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
                value="Add Coffee"
                className="btn btn-block"
              />
            </label>
          </div>
        
        </div>

      </form>
    </div>
  );
};

export default AddCoffee;
