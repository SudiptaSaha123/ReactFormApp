import { useState } from "react";
import "./App.css";

function App() {
  const[formData,setFormData] = useState({
    firstName:"", lastName:"", email:"",country:"India", streetAddress:"",city:"",state:"",postalCode:"",comments:false,candidates:false,offers:false,pushNotifications:""
  })

  function changeHandler(event){
    const{name,value,checked,type} = event.target;
    setFormData((prev) => ({...prev, [name]:type ==="checkbox" ? checked : value}))
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Printing Data : ")
    console.log(formData)
  }
  return (
    <div className="flex flex-col items-center mt-10 p-10">
      <form className="flex flex-col gap-2" onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Sudipta"
          value={formData.firstName}
          onChange={changeHandler}
          className="border-2 p-2 px-8"
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Saha"
          value={formData.lastName}
          onChange={changeHandler}
          className="border-2 p-2 px-8"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="sudipta@abcd.com"
          value={formData.email}
          onChange={changeHandler}
          className="border-2 p-2 px-8"
        />

        <label htmlFor="country">Country</label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="border-2 p-2 px-8"
        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        <label htmlFor="streetAddress">Street</label>
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="Sahapara"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="border-2 p-2 px-8"
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Kolkata"
          value={formData.city}
          onChange={changeHandler}
          className="border-2 p-2 px-8"
        />

        <label htmlFor="state">State</label>
        <input
          type="text"
          name="state"
          id="state"
          placeholder="West Bengal"
          value={formData.state}
          onChange={changeHandler}
          className="border-2 p-2 px-8"
        />

        <label htmlFor="postalCode">Postal Code</label>
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="100001"
          value={formData.postalCode}
          onChange={changeHandler}
          className="border-2 p-2 px-8"
        />

        <fieldset className="mt-4">
          <legend>By Email</legend>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="comments"
              name="comments"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get Notified when someone a cooment on a posting.</p>
            </div>
          </div>

          <div className="flex gap-2">
            <input
              type="checkbox"
              id="candidates"
              name="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get Notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div className="flex gap-2">
            <input
              type="checkbox"
              id="offers"
              name="offers"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get Notified when a candidate accepts or rejects an offer</p>
            </div>
          </div>
        </fieldset>

        <fieldset className="flex flex-col mt-6 gap-3">
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone</p>

          <div>
          <input type="radio" id="pushEverything" name="pushNotifications" value="Everything" onChange={changeHandler}
          />
          <label htmlFor="pushEverything">Everything</label>
          </div>

          <div>
          <input type="radio" id="pushEmail" name="pushNotifications" value="Email" onChange={changeHandler}
          />
          <label htmlFor="pushEmail">Email</label>
          </div>

          <div>
          <input type="radio" id="pushNothing" name="pushNotifications" value="No push notification" onChange={changeHandler}
          />
          <label htmlFor="pushNothing">No Push Notification</label>
          </div>


        </fieldset>

        <button className="bg-blue-500 text-white font-bold rounded-lg p-3 mt-4 hover:bg-blue-800 transition-all duration-300">Save</button>
      </form>
    </div>
  );
}

export default App;
