import { Logger } from "next-axiom";

const Cart = async () => {
  const log = new Logger();

  log.debug("Login attempt", { user: "Logegr testing", status: "success" });
  await log.flush();
  return <div>Cart</div>;
};

export default Cart;
