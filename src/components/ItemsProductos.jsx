export function ItemsProductos({ item }) {
  // Definir la imagen específica para los IDs 14 y 17
  const nuevaImagen = item.id === 14 
    ? "/assets/img/nueva-imagen14.png"
    : item.id === 17 
    ? "/assets/img/nueva-imagen17.png"
    : item.img;

  return (
    <article className="items__card" data-sr-id={item.id}>
      <img
        src={nuevaImagen} // 🔹 Cambiamos la imagen solo en los IDs 14 y 17
        alt="items image"
        className="items__img"
      />

      <h3 className="items__name">{item.title}</h3>
      <span className="items__price">{item.precio}</span>

      <button className="items__button">
        <i className="ri-heart-3-line"></i>
      </button>
    </article>
  );
}
