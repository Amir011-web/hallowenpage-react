export function ItemsProductos({ item }) {
  console.log("Item ID:", item.id); // 🔹 Verifica si realmente obtiene el ID

  const nuevaImagen = item.id === 14 
  ? "/assets/img/nueva-imagen14.png"
  : item.id === 17 
  ? "/assets/img/nueva-imagen17.png"
  : item.img;


  return (
    <article className="items__card" data-sr-id={item.id}>
      <img
        src={nuevaImagen}
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


