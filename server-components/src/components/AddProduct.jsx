"use client";
import { useFormStatus } from "react-dom";
import { addProduct } from "@/actions/products";

function AddProduct() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="mb-8 p-8 border rounded-lg bg-white shadow-md max-w-2xl w-full text-black text-center">
        <h2 className="text-2xl font-bold mb-6 text-black">Add New Product</h2>

        <form action={addProduct} className="space-y-6">
          <div>
            <label htmlFor="title" className="block mb-2 font-medium text-black">
              Title
            </label>
            <input type="text" id="title" name="title" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition text-black" />
          </div>

          <div>
            <label htmlFor="description" className="block mb-2 font-medium text-black">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition text-black"
            />
          </div>

          <div>
            <label htmlFor="price" className="block mb-2 font-medium text-black">
              Price
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">$</span>
              <input
                type="number"
                id="price"
                name="price"
                step="0.01"
                min="0"
                required
                className="w-full p-3 pl-7 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition text-black"
              />
            </div>
          </div>

          <SubmitButton />
        </form>
      </div>
    </div>
  );
}

export default AddProduct;

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 disabled:bg-blue-300 transition-colors font-medium flex items-center justify-center mx-auto mt-4 w-full md:w-auto"
    >
      {pending ? (
        <>
          <span className="inline-block animate-spin mr-2">⟳</span>
          Adding...
        </>
      ) : (
        "Add Product"
      )}
    </button>
  );
}
