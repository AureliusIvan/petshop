import { useState, useMemo } from 'react';
import { useDogAPI } from '../hooks/useDogAPI';
import { mockData } from '../data/mockData';
import type { Dog } from '../data/mockData';

interface Filters {
  breed: string;
  size: string;
  age: string;
  gender: string;
}

const FilterBar = ({ onFilterChange, loading }: { onFilterChange: (filters: Filters) => void, loading: boolean }) => {
  const [filters, setFilters] = useState({
    breed: '',
    size: '',
    age: '',
    gender: ''
  });

  const handleFilterChange = (key: keyof Filters, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
      <h3 className="card-title text-text-primary mb-4">Filter Dogs</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block small-text text-text-secondary mb-1">Breed</label>
          <select 
            value={filters.breed}
            onChange={(e) => handleFilterChange('breed', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            disabled={loading}
          >
            <option value="">All Breeds</option>
            <option value="retriever">Golden Retriever</option>
            <option value="bulldog">Bulldog</option>
            <option value="husky">Husky</option>
            <option value="shepherd">German Shepherd</option>
            <option value="poodle">Poodle</option>
          </select>
        </div>
        
        <div>
          <label className="block small-text text-text-secondary mb-1">Size</label>
          <select 
            value={filters.size}
            onChange={(e) => handleFilterChange('size', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            disabled={loading}
          >
            <option value="">All Sizes</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        
        <div>
          <label className="block small-text text-text-secondary mb-1">Age</label>
          <select 
            value={filters.age}
            onChange={(e) => handleFilterChange('age', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            disabled={loading}
          >
            <option value="">All Ages</option>
            <option value="young">0-2 years</option>
            <option value="adult">3-7 years</option>
            <option value="senior">8+ years</option>
          </select>
        </div>
        
        <div>
          <label className="block small-text text-text-secondary mb-1">Gender</label>
          <select 
            value={filters.gender}
            onChange={(e) => handleFilterChange('gender', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            disabled={loading}
          >
            <option value="">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
    </div>
  );
};

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
            <span className="bg-primary text-text-primary px-2 py-1 rounded-full small-text">
              Available
            </span>
          ) : (
            <span className="bg-gray-500 text-white px-2 py-1 rounded-full small-text">
              Adopted
            </span>
          )}
        </div>
      </div>
      
      <h3 className="card-title text-text-primary mb-2">{dog.name}</h3>
      <p className="body-text text-text-secondary mb-2">{dog.breed} • {dog.age} years • {dog.gender}</p>
      <p className="small-text text-text-secondary mb-2">Size: {dog.size} • Temperament: {dog.temperament}</p>
      <p className="small-text text-text-secondary mb-4 line-clamp-2">{dog.description}</p>
      
      <div className="flex justify-between items-center mb-4">
        <span className="subtitle text-primary">${dog.adoptionFee}</span>
        <div className="flex space-x-2">
          {dog.vaccinated && (
            <span className="bg-green-100 text-green-800 small-text px-2 py-1 rounded-full">Vaccinated</span>
          )}
          {dog.neutered && (
            <span className="bg-blue-100 text-blue-800 small-text px-2 py-1 rounded-full">Neutered</span>
          )}
        </div>
      </div>
      
      <button className="w-full bg-primary text-text-primary py-2 rounded-lg hover:bg-primary/90 transition-colors">
        Learn More
      </button>
    </div>
  );
};

const Catalog = () => {
  const [filters, setFilters] = useState<Filters>({ breed: '', size: '', age: '', gender: '' });
  
  const endpoint = useMemo(() => ({ type: 'random', count: 12 }), []);
  const { data: dogImages, loading, refetch } = useDogAPI(endpoint) as { data: string[] | null, loading: boolean, refetch: () => void };

  const dogs: Dog[] = useMemo(() => {
    if (!dogImages?.length) return [];
    
    return dogImages.map((imageUrl: string) => {
      const urlParts = imageUrl.split('/');
      const breedPart = urlParts[4] || 'mixed';
      const breed = breedPart.split('-')[0];
      
      return mockData.generateDogInfo(breed, imageUrl);
    });
  }, [dogImages]);

  const filteredDogs = useMemo(() => {
    return dogs.filter((dog: Dog) => {
      if (filters.breed && !dog.breed.toLowerCase().includes(filters.breed.toLowerCase())) {
        return false;
      }
      if (filters.size && dog.size !== filters.size) {
        return false;
      }
      if (filters.gender && dog.gender !== filters.gender) {
        return false;
      }
      if (filters.age) {
        if (filters.age === 'young' && dog.age > 2) return false;
        if (filters.age === 'adult' && (dog.age < 3 || dog.age > 7)) return false;
        if (filters.age === 'senior' && dog.age < 8) return false;
      }
      return true;
    });
  }, [dogs, filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="hero-title text-text-primary mb-4">
            Available Dogs
          </h1>
          <p className="subtitle text-text-secondary max-w-2xl mx-auto">
            Browse our wonderful dogs looking for their forever homes. Each one is health-checked, 
            vaccinated, and ready to bring joy to your family.
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar onFilterChange={setFilters} loading={loading} />

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="body-text text-text-secondary">
            Showing {filteredDogs.length} of {dogs.length} dogs
          </p>
          <button 
            onClick={refetch}
            disabled={loading}
            className="btn-secondary disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Refresh Dogs'}
          </button>
        </div>

        {/* Dogs Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="card animate-pulse">
                <div className="bg-gray-300 h-64 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 bg-gray-300 rounded mb-2 w-3/4"></div>
                <div className="h-3 bg-gray-300 rounded mb-4 w-1/2"></div>
                <div className="flex justify-between items-center mb-4">
                  <div className="h-4 bg-gray-300 rounded w-16"></div>
                  <div className="h-6 bg-gray-300 rounded w-20"></div>
                </div>
                <div className="h-8 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        ) : filteredDogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDogs.map((dog: Dog) => (
              <DogCard key={dog.id} dog={dog} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="subtitle text-text-secondary">No dogs found matching your criteria.</p>
            <button 
              onClick={() => setFilters({ breed: '', size: '', age: '', gender: '' })}
              className="btn-primary mt-4"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;