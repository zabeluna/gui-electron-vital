import React, { useState } from "react";

export default function FoodForm() {
  const [formData, setFormData] = useState({
    foodName: "",
    ingredient1: "",
    ingredient2: "",
    ingredient3: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("api url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Alimento cadastrado com sucesso!");
        setFormData({ foodName: "", ingredient1: "", ingredient2: "", ingredient3: "" });
      } else {
        alert("Erro ao cadastrar alimento.");
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="">
      <div className="w-[490px]">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="foodName" className="block text-sm font-medium text-gray-700">
              Nome do alimento
            </label>
            <input
              type="text"
              id="foodName"
              name="foodName"
              className="mt-1 p-2 block w-full border rounded-md"
              value={formData.foodName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="ingredient1" className="block text-sm font-medium text-gray-700">
              Ingrediente 1
            </label>
            <input
              type="text"
              id="ingredient1"
              name="ingredient1"
              className="mt-1 p-2 block w-full border rounded-md"
              value={formData.ingredient1}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="ingredient2" className="block text-sm font-medium text-gray-700">
              Ingrediente 2
            </label>
            <input
              type="text"
              id="ingredient2"
              name="ingredient2"
              className="mt-1 p-2 block w-full border rounded-md"
              value={formData.ingredient2}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="ingredient3" className="block text-sm font-medium text-gray-700">
              Ingrediente 3
            </label>
            <input
              type="text"
              id="ingredient3"
              name="ingredient3"
              className="mt-1 p-2 block w-full border rounded-md"
              value={formData.ingredient3}
              onChange={handleInputChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-green-500 text-semibold text-white rounded-md hover:bg-green-400"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
