import styled from "styled-components";
export function ItemsCategorias({item}) {
  return (
  
      <div class="category__card">
        <img src={item.img} alt="category image" class="category__img" />

        <h3 class="category__title">{item.title}</h3>
        
{/* Botón para subir imagen */}
<label className="upload-button">
  <span className="upload-text">+</span>
  <input
    type="file"
    hidden
    accept="image/*"
    onChange={(e) => console.log("Imagen subida:", e.target.files[0])}
  />
</label>

        <img src={item.img} alt="category star" class="category__star" />
      </div>
    
  );
}

