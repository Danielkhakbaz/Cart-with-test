import { RouteObject } from "react-router-dom";
import App from "src/App.tsx";
import ErrorPage from "src/pages/error";
import HomePage from "src/pages/home";
import PlaygroundPage from "src/pages/playground";
import ProductListPage from "src/pages/product-list";
import ProductDetailPage from "src/pages/product-detail";
import AdminLayout from "src/pages/admin/admin-layout";
import AdminHomePage from "src/pages/admin/admin-home";
import AdminProductListPage from "src/pages/admin/product-list";
import NewProductPage from "src/pages/admin/new-product";
import EditProductPage from "src/pages/admin/edit-product";

export const Routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "playground", element: <PlaygroundPage /> },
      { path: "products", element: <ProductListPage /> },
      { path: "products/:id", element: <ProductDetailPage /> },
      {
        path: "admin",
        element: <AdminLayout />,
        children: [
          { index: true, element: <AdminHomePage /> },
          { path: "products", element: <AdminProductListPage /> },
          { path: "products/new", element: <NewProductPage /> },
          { path: "products/:id/edit", element: <EditProductPage /> },
        ],
      },
    ],
  },
];