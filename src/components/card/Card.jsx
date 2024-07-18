import { FaCartShopping } from "react-icons/fa6";
import Button from "../button/Button";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

const Card = ({ product, cart, setCart }) => {
  return (
    <div className="flex flex-col justify-between h-full animate-slideInBottom">
      <div>
        <img
          className="w-full h-[300px]  p-[60px]"
          src={product.image_url}
          alt={product.product_name}
        />
        <h4 className="text-black font-bold text-[25px] mt-4 pl-[10px]">
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h4>
        <p className="mt-2 pl-[10px]">{product.description}</p>

        <div className={`${styles.colors} mt-4 pl-[10px]`}>
          {product.color_options.map((color, index) => (
            <div
              key={index}
              style={{ background: color }}
              className={styles.color}
            />
          ))}
        </div>

        <strong className="mt-4 block pl-[10px]">${product.price}</strong>
      </div>
      <div className="mt-auto">
        <Button onClick={() => setCart([...cart, product])}>
          <span className="flex items-center justify-center w-[400px] text-white">
            <FaCartShopping />
            <span style={{ marginLeft: "0.8em" }}>Add to Cart</span>
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Card;
