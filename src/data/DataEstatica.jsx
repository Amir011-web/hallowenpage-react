import img1 from "../assets/img/pngwing.com (55).png";
import img2 from "../assets/img/pngwing.com (50).png";
import img3 from "../assets/img/pngwing.com (57).png";
import img4 from "../assets/img/pngwing.com (59).png";
import img5 from "../assets/img/pngwing.com (61).png";
import img6 from "../assets/img/category-1.png";
import img7 from "../assets/img/category-2.png";
import img8 from "../assets/img/category-3.png";
import img9 from "../assets/img/pngwing.com (74).png";
export const datacategorias = [
  {
    img: img6,
    title: "CEDULA DE IDENTIDAD",
   
    bgcolor: "rgba(152, 23, 238,0.5)",
  },
  {
    img: img7,
    title: "ANTECEDENTE POLICIAL",
    
    bgcolor: "rgba(152, 23, 238,0.5)",
  },
  {
    img: img8,
    title: "ANTECEDENTE JUDICIAL",
   
    bgcolor: "rgba(152, 23, 238,0.5)",
  },
];
export const dataProductos = [
  {
    id: 1, // ❌ Este no debe cambiar
    img: img1,
    title: "Pumpkins",
    precio: "$9.99",
    bgcolor: "rgba(152, 23, 238,0.5)",
  },
  {
    id: 2, // ❌ Este tampoco debe cambiar
    img: img9,
    title: "Pumpkins",
    precio: "$9.99",
    bgcolor: "rgba(152, 23, 238,0.5)",
  },
  {
    id: 14, // ✅ CAMBIADO: Este es el tercero y se le asigna `id: 14`
    img: img3,
    customImg: "src/assets/img/nueva-imagen14.png", // ✅ Nueva imagen para este producto
    title: "Pumpkins",
    precio: "$9.99",
    bgcolor: "rgba(152, 23, 238,0.5)",
  },
  {
    id: 4, // ❌ Este no cambia
    img: img4,
    title: "Pumpkins",
    precio: "$9.99",
    bgcolor: "rgba(152, 23, 238,0.5)",
  },
  {
    id: 5, // ❌ Este tampoco cambia
    img: img5,
    title: "Pumpkins",
    precio: "$9.99",
    bgcolor: "rgba(152, 23, 238,0.5)",
  },
  {
    id: 17, // ✅ CAMBIADO: Este es el sexto y se le asigna `id: 17`
    img: img3,
    customImg: "src/assets/img/nueva-imagen17.png", // ✅ Nueva imagen para este producto
    title: "Pumpkins",
    precio: "$9.99",
    bgcolor: "rgba(152, 23, 238,0.5)",
  },
];




