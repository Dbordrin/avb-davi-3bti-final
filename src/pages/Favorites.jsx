import { useFavorites } from '../context/FavoritesContext';
import ItemCard from '../components/ItemCard';

const Favorites = () => {
  const { favorites, removeFavorite, isFavorite } = useFavorites();

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {favorites.length > 0 ? (
        favorites.map((item) => (
          <ItemCard
            key={item.id}
            title={item.title}
            image={item.image}
            isFavorite={isFavorite(item.id)}
            onToggleFavorite={() => removeFavorite(item.id)}
          />
        ))
      ) : (
        <p>Nenhum favorito ainda.</p>
      )}
    </div>
  );
};

export default Favorites;
