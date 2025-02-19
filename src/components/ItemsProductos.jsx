export function ItemsProductos({ item }) {
  if (!item) return null; // Evita errores si item es undefined

  return (
    <article className="items__card">
      
      <img src={item.img} alt="items image" className="items__img" />

      <h3 className="items__name" style={{ color: item.textColor || "#9817EE", marginTop: "50px" }}>
  {item.title}




  
</h3>
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




      <span className="items__price">{item.precio}</span>

      <button className="items__button">
        <i className="ri-heart-3-line"></i>
      </button>




      
    </article>
  );
}

