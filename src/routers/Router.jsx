import { 
  createBrowserRouter
 } from "react-router-dom"
import App from "../App"
import Home from "../pages/home/Home"
import CategoryPage from "../pages/category/CategoryPage";
import Search from "../pages/search/Search";
import ShopPage from "../pages/shop/ShopPage";
import SingleProduct from "../pages/shop/productDetails/SingleProduct";
import Login from "../components/Login";
import Register from "../components/Register";
import PaymentSuccess from "../components/PaymentSuccess";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import UserDMain from "../pages/dashboard/users/dashboard/UserDMain";
import UserOrders from "../pages/dashboard/users/UserOrders";
import OrderDetails from "../pages/dashboard/users/OrderDetails";
import UserPayments from "../pages/dashboard/users/UserPayments";
import UserReviews from "../pages/dashboard/users/UserReviews";
import UserProfile from "../pages/dashboard/users/UserProfile";
import AdminDMain from "../pages/dashboard/admin/dashboard/AdminDMain";
import AddProduct from "../pages/dashboard/admin/addProduct/AddProduct";
import ManageProduct from "../pages/dashboard/admin/manageProduct/ManageProduct";
import UpdateProduct from "../pages/dashboard/admin/manageProduct/UpdateProduct";
import ManageUsers from "../pages/dashboard/admin/users/ManageUsers";
import ManageOrders from "../pages/dashboard/admin/manageOrders/ManageOrders";
import Contact from "../pages/contact/Contact";

const  router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories/:categoryName",
        element: <CategoryPage />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop/:id",
        element: <SingleProduct />
      },
      {
        path: "/success",
        element: <PaymentSuccess />,
      },
      {
        path: "/orders/:orderId",
        element: <OrderDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>, //TODO: user private routes
    children: [
          //user routes
          {
            path: "",
            element: <UserDMain/>,
          },
          {
            path: "orders",
            element: <UserOrders />,
          },
          {
            path: "payments",
            element: <UserPayments />,
          },
          {
            path: "profile",
            element: <UserProfile />,
          },
          {
            path: "reviews",
            element: <UserReviews />,
          },


          //admin routes (only can access ) TODO:private routes with include role field
          {
            path: "admin",
            element: <PrivateRoute role="admin"><AdminDMain /></PrivateRoute>
          },
          {
            path: "add-product",
            element: <PrivateRoute role="admin"><AddProduct /></PrivateRoute>
          },
          {
            path: "manage-products",
            element: <PrivateRoute role="admin"><ManageProduct/></PrivateRoute>
          },
          {
            path: "manage-orders",
            element: <PrivateRoute role="admin"><ManageOrders /></PrivateRoute>
          },
          {
            path: "update-product/:id",
            element: <PrivateRoute role="admin"><UpdateProduct/></PrivateRoute>
          },
          {
            path: "users",
            element: <PrivateRoute role="admin"><ManageUsers /></PrivateRoute>
          }
    ]
  }
]);

export default router;