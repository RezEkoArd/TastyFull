import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { postRestaurantReview } from "@/app/libs/api";


const FormReview =  ({reviewId}) => {
  const { register,handleSubmit,formState:{errors},reset} = useForm();
  const submit = async (e) => {
    const data = {
        "id" : reviewId,
        "name" : e.name,
        "review" : e.review,
    }

    await postRestaurantReview(data)
    .then((res) => {
      reset()
        return alert("Terima Kasih atas reviewnya")
    })
    .catch((err) => {
        const message  = err.message;
        console.log(message)        
    })
  }



  return (
    <div className="w-full mb-5">
      <form onSubmit={handleSubmit(submit)}>
        <div className="w-full mb-3">
          <label className="block mb-2 text-md font-semibold text-color-light">
            Nama
          </label>
          <input
            type="text"
            placeholder="Nama"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400   "
            {...register("name",{ required: true, maxLength: 20 })}
          />
        </div>
        <div className="w-full mb-3">
          <label className="block mb-2 text-md font-semibold text-color-light">
            Ketikan Review
          </label>
          <textarea
            rows="8"
            cols="50"
            placeholder="Isi Review mu"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400   "
            {...register("review",{ required: true })}
          />
        </div>
        <motion.input
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.8 }}
          className="bg-color-accent text-color-primary p-3 rounded-md h w-full cursor-pointer"
        />
      </form>
       
    </div>
  );
};

export default FormReview;
