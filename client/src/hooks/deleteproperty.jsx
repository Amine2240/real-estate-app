import axios from "axios";
export const deleteproperty = async (id) => {
  try {
    await axios.delete(
      `http://localhost:5000/properties/deleteproperty/${id}`,
      { withCredentials: true }
    );
  } catch (error) {
    console.log(error);
  }
};
