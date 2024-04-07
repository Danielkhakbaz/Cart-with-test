import { Link } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const AdminHomePage = withAuthenticationRequired(() => {
  return (
    <div>
      <h1>Admin Area</h1>
      <Link to="products">Products</Link>
    </div>
  );
});

export default AdminHomePage;
