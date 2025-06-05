const ItemCard = ({ title, image, isFavorite, onToggleFavorite }) => (
  <div className="border p-4 rounded shadow">
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <h2 className="mt-2 text-xl">{title}</h2>
    <button
      onClick={onToggleFavorite}
      className="mt-2 text-sm text-white px-4 py-1 bg-blue-600 rounded"
    >
      {isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
    </button>
  </div>
);

export default ItemCard;
