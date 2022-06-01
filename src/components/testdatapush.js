import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
const TestDataPush = () => {
  addDoc(collection(db, "users"), {
    location: "mars",
    username: "greenman",
    address: "third crater from right",
  }).then((docRef) => {
    console.log("REF:", docRef.id);
  });

  return (
    <div>
      <h2>Add an Item</h2>
      {/* <form onSubmit={formSubmitHandler}>
        <label htmlFor="item_name">Item Name</label>
        <input
          type="text"
          name="item_name"
          onChange={changeItemName}
          required
        ></input>
        <br></br>
        <label htmlFor="description">Item Description</label>
        <input
          type="text"
          name="description"
          onChange={changeDescription}
          required
        ></input>
        <br></br>
        <label htmlFor="img_url">Image URL</label>
        <input type="text" name="img_url" required></input>
        <br></br>
        <label htmlFor="price">Price</label>
        <input type="number" name="price"></input>
        <br></br>
        <label htmlFor="category_name">Category</label>
        <input type="text" name="category_name"></input>
        <button type="submit">Add</button>
      </form> */}
    </div>
  );
};

export default TestDataPush;
