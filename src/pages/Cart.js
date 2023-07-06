import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";
import { useSelector } from "react-redux";

export const Cart = () => {
  useTitle("Cart");

  const cartList = useSelector(state => state.cartState.cartList);
  const total = useSelector(state => state.cartState.total);
  

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {cartList.length} / Total: ${total}</h1>
        { cartList.map((cartItem) => (
          <CartCard key={cartItem.id} product={cartItem} />
        )) }        
      </section>
    </main>
  )
}
