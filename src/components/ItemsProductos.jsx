export function ItemsProductos({ item }) {
  console.log("Datos de item:", item); // Verifica que el ID está presente

  // Cambiar la imagen solo para los IDs 14 y 17
  const nuevaImagen = item.id === 14 
    ? "/assets/img/nueva-imagen14.png"
    : item.id === 17 
    ? "/assets/img/nueva-imagen17.png"
    : item.img;

  return (
    <article className="items__card">
      {/* Aquí usamos la nueva imagen */}
      <img src={nuevaImagen} alt="items image" className="items__img" />

      <h3 className="items__name">{item.title}</h3>
      <span className="items__price">{item.precio}</span>

      <button className="items__button">
        <i className="ri-heart-3-line"></i>
      </button>
    </article>
  );
}
