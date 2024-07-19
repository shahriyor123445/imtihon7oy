import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoIosBus } from "react-icons/io";
import { RiTableAltLine } from "react-icons/ri";
import image from "../../assets/image.svg";
import images from "../../assets/image 3.svg";
import ima from "../../assets/image 4.svg";
import imagess from "../../assets/image 5.svg";
import imag from "../../assets/image 6.svg";

const baseURL = import.meta.env.VITE_BASE_URL;

const Product = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProductById() {
      try {
        const response = await fetch(`${baseURL}/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    }

    fetchProductById();
  }, [productId]);

  return (
    <div className="container mx-auto">
      {product && (
        <div className="flex justify-between">
          <div>
            <p className="mb-[42px]">
              Products / Gaming Headsets & Audio /
              <span className="font-bold"> {product.name}</span>
            </p>
            <div className="flex items-center w-[717px] justify-between h-[700px] bg-slate-300">
              <AiOutlineLeft />
              <img
                className="w-[800px]"
                src={product.image_url}
                alt={product.name}
              />
              <AiOutlineRight />
            </div>
            <div className="flex justify-between mt-[155px]">
              <img className="w-[114px] h-[114px]" src={image} alt="Image 1" />
              <img className="w-[114px] h-[114px]" src={images} alt="Image 2" />
              <img className="w-[114px] h-[114px]" src={ima} alt="Image 3" />
              <img
                className="w-[114px] h-[114px]"
                src={imagess}
                alt="Image 4"
              />
              <img className="w-[114px] h-[114px]" src={imag} alt="Image 5" />
            </div>
            <button
              className="mt-[60px] mb-[100px] bg-red-800 text-white ml-[600px] border rounded-[5px] "
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
          </div>

          <div>
            <h1 className="mt-[67px] font-bold text-[48px] mb-[16px]">
              {product.name}
            </h1>
            <p className="text-[18px] mb-[18px]">{product.description}</p>
            <p className="pb-[28px] border border-dotted border-gray-500 border-r-0 border-l-0 border-t-0">
              {product.ratings_stars}
            </p>

            <h2 className="font-bold text-[36px] mt-[25px] mb-[15px]">
              ${product.price} or ${Math.round(product.price / 12).toFixed(2)}
              /month
            </h2>
            <p className="text-[18px] mt-[15px]  pb-[28px] mb-[28px] border border-dotted border-gray-500 border-r-0 border-l-0 border-t-0">
              Suggested payments with 6 month special financing
            </p>
            <h3 className="text-[24px] font-bold mb-[30px]">Choose a color</h3>
            <ul className="flex space-x-4 mt-4 pb-[37px] mb-[37px] border border-dotted border-gray-500 border-r-0 border-l-0 border-t-0 ">
              {product.color_options.map((color, index) => (
                <li
                  key={index}
                  className="w-[40px] h-[40px] rounded-full"
                  style={{ backgroundColor: color }}
                  title={color}
                ></li>
              ))}
            </ul>
            <div className="flex items-center justify-between mb-[51px]">
              <div className="flex items-center border border-solid rounded-[40px] border-gray-300 w-[193px] justify-center">
                <button>-</button>
                <p className="mr-[30px] ml-[30px]">1</p>
                <button>+</button>
              </div>
              <p className="w-[167px]">Only 16 items left! Don’t miss it</p>
            </div>
            <div className="flex items-center gap-6 mb-[61px]">
              <button className="flex items-center gap-[10px] bg-green-600 text-white border border-solid rounded-[10px] w-[442px] justify-center">
                <FaShoppingCart />
                Add to Cart
              </button>
              <CiHeart className="border border-solid border-black" />
            </div>
            <div className="border border-dotted border-gray-500 rounded-[20px] p-7">
              <div className="flex items-center gap-[30px] mb-[55px] border border-dotted border-gray-500 border-r-0 border-l-0 border-t-0 p-7 ">
                <IoIosBus className="w-[30px] h-[30px]" />
                <div>
                  <p className="font-bold text-[18px]">Free delivery</p>
                  <p>Enter your Postal Code for Delivery Availability</p>
                </div>
              </div>
              <div className="flex items-center gap-[30px] p-7">
                <RiTableAltLine className="w-[30px] h-[30px]" />
                <div>
                  <p className="font-bold text-[18px]">Return Delivery</p>
                  <p>Free delivery 30 Days return</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
