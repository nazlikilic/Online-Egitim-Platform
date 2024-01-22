import MainLayout from "./MainLayout";
import AdminLayout from "./AdminLayout";


const isAdmin = window.location.pathname.startsWith("/admin");
console.log(window.location);



//  export const Layout = isAdmin ? AdminLayout : MainLayout;
export const Layout = isAdmin ? AdminLayout : MainLayout;

