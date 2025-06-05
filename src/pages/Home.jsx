import ItemCard from '../components/ItemCard';
import { useFavorites } from '../context/FavoritesContext';
import img1 from '../assets/item1.jpg';
import img2 from '../assets/item2.jpg';
import img3 from '../assets/item3.jpg';

const items = [
  { id: 1, title: 'Item 1', image: img1 },
  { id: 2, title: 'Item 2', image: img2 },
  { id: 3, title: 'Item 3', image: img3 },
];

const Home = () => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  const toggleFavorite = (item) => {
    isFavorite(item.id) ? removeFavorite(item.id) : addFavorite(item);
  };

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <ItemCard
          key={item.id}
          title={item.title}
          image={item.image}
          isFavorite={isFavorite(item.id)}
          onToggleFavorite={() => toggleFavorite(item)}
        />
      ))}
    </div>
  );
};

export default Home;
