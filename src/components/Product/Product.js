import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Product.css";
const Product = (props) => {
  const history = useNavigate();
  const { _id, name, category, description, price, image } = props.product;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:8000/products/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/products"));
  };

  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{category}</h3> 
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>$ {price}</h3>
      <Button LinkComponent={Link} to={`/products/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

export default Product;
