export function ItemsProductos({ item }) {
  if (!item) {
    console.log("Item no está definido, saltando render.");
    return null;
  }

  console.log("Datos de item:", item);

  // Asegurar que item.id existe
  const itemId = item.id || 0;

  // 🔹 Cambiar la imagen solo para los productos con ID 14 y 17
  const nuevaImagen = itemId === 14 
    ? "/assets/img/nueva-imagen14.png"
    : itemId === 17 
    ? "/assets/img/nueva-imagen17.png"
    : item.img;

  return (
    <article className="items__card">
      <img src={nuevaImagen} alt="items image" className="items__img" />

      <h3 className="items__name">{item.title}</h3>
      <span className="items__price">{item.precio}</span>

      <button className="items__button">
        <i className="ri-heart-3-line"></i>
      </button>
    </article>
  );
}
