import { useState, useEffect } from 'react';
import { dogAPI } from '../utils/api';

export const useDogAPI = (endpoint: { type: string, count?: number, breed?: string }) => {
  const [data, setData] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        let result;
        switch (endpoint.type) {
          case 'random':
            result = await dogAPI.getRandomDogs(endpoint.count || 6);
            break;
          case 'breeds':
            result = await dogAPI.getAllBreeds();
            break;
          case 'breed-images':
            result = await dogAPI.getBreedImages(endpoint.breed as string);
            break;
          case 'random-breed':
            result = await dogAPI.getRandomBreedImage(endpoint.breed as string);
            break;
          default:
            result = await dogAPI.getRandomDog();
        }
        
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  const refetch = () => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        let result;
        switch (endpoint.type) {
          case 'random':
            result = await dogAPI.getRandomDogs(endpoint.count || 6);
            break;
          case 'breeds':
            result = await dogAPI.getAllBreeds();
            break;
          case 'breed-images':
            result = await dogAPI.getBreedImages(endpoint.breed as string);
            break;
          case 'random-breed':
            result = await dogAPI.getRandomBreedImage(endpoint.breed as string);
            break;
          default:
            result = await dogAPI.getRandomDog();
        }
        
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  };

  return { data, loading, error, refetch };
};