import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Products.module.scss";
import Card from "../card/Card";
import { addProducts, sortProductsByPrice } from "../../store/productsSlice";

const baseURL = import.meta.env.VITE_BASE_URL;

const Products = ({ cart, setCart }) => {
  const products = useSelector((store) => store.productsReducer.products);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    async function fetchBrands() {
      const response = await fetch(`${baseURL}/brands`);
      const data = await response.json();
      setBrands(data);
    }

    async function fetchColors() {
      const response = await fetch(`${baseURL}/colors`);
      const data = await response.json();
      setColors(data);
    }

    fetchBrands();
    fetchColors();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);

      let query = `${baseURL}/products`;

      const params = [];
      if (selectedColor) {
        params.push(`color_options_like=${encodeURIComponent(selectedColor)}`);
      }
      if (selectedBrand) {
        params.push(`brand_name=${encodeURIComponent(selectedBrand)}`);
      }

      if (params.length > 0) {
        query += `?${params.join("&")}`;
      }

      try {
        const response = await fetch(query);
        const data = await response.json();
        dispatch(addProducts(data));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [selectedBrand, selectedColor]);

  const handleSortClick = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    dispatch(sortProductsByPrice(newSortOrder));
  };

  return (
    <div>
      <div className="w-full bg-slate-300 mt-[40px] mb-[60px]">
        <div
          className={
            " container flex justify-between px-16 w-full bg-slate-300 m-auto py-5 text-[10px] items-center "
          }
        >
          <p className={"text-green-500 font-bold text-[24px]"}>Filter by:</p>
          <div className={"flex items-center"}>
            <button
              className={
                "flex items-center gap-1 text-green-500 font-bold text-[24px]"
              }
              onClick={handleSortClick}
            >
              <span
                style={{ color: "#0BA42D" }}
                className="material-symbols-outlined"
              >
                {sortOrder === "asc"
                  ? "keyboard_arrow_down"
                  : "keyboard_arrow_up"}
              </span>
              Sort By Price
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className={styles.container}>
          <aside>
            <div className="animate-slideInLeft">
              <h3 className="border border-dotted border-gray-500 border-r-0 border-l-0 border-b-0 pt-[20px] text-[30px] w-full pl-[35px]">
                BRAND
              </h3>
              <ul>
                {brands.map((brand, index) => (
                  <li key={index}>
                    <input
                      type="radio"
                      value={brand}
                      name="brand"
                      id={brand}
                      checked={brand === selectedBrand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                    />
                    <label htmlFor={brand}>{brand}</label>
                  </li>
                ))}
              </ul>
              <button
                className="border border-solid w-full rounded-[10px] bg-[#0BA42D]"
                onClick={() => setSelectedBrand("")}
              >
                Reset
              </button>
            </div>

            <div className="animate-slideInLeft">
              <h3 className="border border-dotted border-gray-500 border-r-0 border-l-0 border-b-0 pt-[20px] text-[30px] w-full pl-[35px]">
                COLORS
              </h3>
              <ul className={styles.colorsContainer}>
                {colors.map((color, index) => (
                  <li key={index}>
                    <div
                      style={{
                        background: color,
                        outline: selectedColor === color ? "3px solid red" : "",
                      }}
                      className={styles.color}
                      onClick={() => setSelectedColor(color)}
                    />
                  </li>
                ))}
              </ul>
              <button
                className="border border-solid w-full rounded-[10px] bg-[#0BA42D]"
                onClick={() => setSelectedColor("")}
              >
                Reset
              </button>
            </div>
          </aside>
          <main>
            {loading ? (
              <p>Loading...</p>
            ) : products.length ? (
              <div className={styles.grid}>
                {products.map((product) => (
                  <Card
                    key={product.id}
                    product={product}
                    cart={cart}
                    setCart={setCart}
                  />
                ))}
              </div>
            ) : (
              <p>No products</p>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
