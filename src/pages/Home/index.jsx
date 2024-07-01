import { useContext } from 'react';
import Banner from '../../components/Banner/Banner';
import CategorySection from '../../components/CategorySection';
import FormModal from '../../components/FormModal';
import { GlobalContext } from '../../context/GlobalContext';

const Home = () => {
  const { videos, categories } = useContext(GlobalContext);

  return (
    <>
      <main>
        <Banner />
        {categories.map((category) => (
          <CategorySection
            data={category}
            key={category.title}
            videos={videos.filter((video) => video.category === category.title)}
          />
        ))}
        <FormModal />
      </main>
    </>
  );
};

export default Home;
