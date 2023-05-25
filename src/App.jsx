import { Routes, Route } from "react-router-dom"
import SharedLayout from "./components/SharedLayout/SharedLayout"
import HomePage from "./pages/HomePage/HomePage"
import ShopPage from "./pages/ShopPage/ShopPage"
import CartPage from "./pages/CartPage/CartPage"

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
      </Routes>
    </>
  )
}

export default App;
