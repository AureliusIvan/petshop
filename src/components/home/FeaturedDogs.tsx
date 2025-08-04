import { Link } from 'react-router-dom';
import { useDogAPI } from '../../hooks/useDogAPI';
import { mockData } from '../../data/mockData';
import type { Dog } from '../../data/mockData';
import React from 'react';

const DogCard = ({ dog }: { dog: Dog }) => {
  return (
    <div className="card group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={dog.imageUrl} 
          alt={dog.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          {dog.available ? (
            <span className="bg-primary text-text-primary px-2 py-1 rounded-full small-text font-medium">
              Available
            </span>
          ) : (
            <span className="bg-gray-500 text-white px-2 py-1 rounded-full small-text font-medium">
              Adopted
            </span>
          )}
        </div>
      </div>
      <h3 className="card-title font-semibold text-text-primary mb-2">{dog.name}</h3>
      <p className="small-text text-text-secondary mb-2">{dog.breed} • {dog.age} years • {dog.gender}</p>
      <p className="small-text text-text-secondary mb-4 line-clamp-2">{dog.description}</p>
      <div className="flex justify-between items-center">
        <span className="body-text font-bold text-primary">${dog.adoptionFee}</span>
        <button className="bg-primary text-text-primary px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

const FeaturedDogs = () => {
  const endpoint = React.useMemo(() => ({ type: 'random', count: 6 }), []);
  const { data: dogImages, loading } = useDogAPI(endpoint) as { data: string[] | null, loading: boolean };

  const featuredDogs: Dog[] = React.useMemo(() => {
    if (!dogImages?.length) return [];
    
    return dogImages.map((imageUrl: string) => {
      const urlParts = imageUrl.split('/');
      const breedPart = urlParts[4] || 'mixed';
      const breed = breedPart.split('-')[0];
      
      return mockData.generateDogInfo(breed, imageUrl);
    });
  }, [dogImages]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading text-text-primary mb-4">
            Meet Our Featured Dogs
          </h2>
          <p className="body-text text-text-secondary max-w-2xl mx-auto">
            These amazing dogs are looking for their forever homes. Each one has been health-checked and is ready for adoption.
          </p>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="card animate-pulse">
                <div className="bg-gray-300 h-64 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 bg-gray-300 rounded mb-4 w-3/4"></div>
                <div className="flex justify-between items-center">
                  <div className="h-4 bg-gray-300 rounded w-16"></div>
                  <div className="h-8 bg-gray-300 rounded w-24"></div>
                </div>
              </div>
            ))}
          </div>
        ) : featuredDogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredDogs.map((dog: Dog) => (
              <DogCard 
                key={dog.id} 
                dog={dog}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="body-text text-text-secondary">No featured dogs available at the moment.</p>
          </div>
        )}

        <div className="text-center">
          <Link to="/catalog" className="btn-primary body-text px-8 py-3">
            View All Available Dogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDogs;