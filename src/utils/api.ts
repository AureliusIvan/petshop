// API utilities for Dog CEO API
const BASE_URL = 'https://dog.ceo/api';

export const dogAPI = {
  // Get all breeds
  getAllBreeds: async () => {
    try {
      const response = await fetch(`${BASE_URL}/breeds/list/all`);
      const data = await response.json();
      return data.status === 'success' ? data.message : {};
    } catch (error) {
      console.error('Error fetching breeds:', error);
      return {};
    }
  },

  // Get random dog image
  getRandomDog: async () => {
    try {
      const response = await fetch(`${BASE_URL}/breeds/image/random`);
      const data = await response.json();
      return data.status === 'success' ? data.message : null;
    } catch (error) {
      console.error('Error fetching random dog:', error);
      return null;
    }
  },

  // Get multiple random images
  getRandomDogs: async (count = 6) => {
    try {
      const response = await fetch(`${BASE_URL}/breeds/image/random/${count}`);
      const data = await response.json();
      return data.status === 'success' ? data.message : [];
    } catch (error) {
      console.error('Error fetching random dogs:', error);
      return [];
    }
  },

  // Get images by breed
  getBreedImages: async (breed: string) => {
    try {
      const response = await fetch(`${BASE_URL}/breed/${breed}/images`);
      const data = await response.json();
      return data.status === 'success' ? data.message : [];
    } catch (error) {
      console.error('Error fetching breed images:', error);
      return [];
    }
  },

  // Get random image by breed
  getRandomBreedImage: async (breed: string) => {
    try {
      const response = await fetch(`${BASE_URL}/breed/${breed}/images/random`);
      const data = await response.json();
      return data.status === 'success' ? data.message : null;
    } catch (error) {
      console.error('Error fetching random breed image:', error);
      return null;
    }
  }
};