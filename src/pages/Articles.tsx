import React, { useState } from 'react';
import { mockData } from '../data/mockData';

const ArticleCard = ({ article, featured = false }) => {
  return (
    <article 
      className={`card group cursor-pointer ${featured ? 'md:col-span-2 lg:col-span-3' : ''}`}
    >
      <div className={`grid ${featured ? 'lg:grid-cols-2 gap-6 items-center' : 'grid-cols-1'}`}>
        <div className="relative overflow-hidden rounded-lg">
          <img 
            src={`https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=${featured ? '600' : '400'}&h=300&fit=crop`}
            alt={article.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 left-2">
            <span className="bg-primary text-text-primary px-2 py-1 rounded-full small-text">
              {article.category}
            </span>
          </div>
          {featured && (
            <div className="absolute top-2 right-2">
              <span className="bg-secondary text-white px-2 py-1 rounded-full small-text">
                Featured
              </span>
            </div>
          )}
        </div>
        
        <div className={featured ? '' : 'mt-4'}>
          <div className="flex items-center small-text text-text-secondary mb-2">
            <span>{article.date}</span>
            <span className="mx-2">•</span>
            <span>{article.readTime}</span>
            <span className="mx-2">•</span>
            <span>{article.author}</span>
          </div>
          
          <h3 className={`text-text-primary mb-3 group-hover:text-primary transition-colors ${
            featured ? 'section-heading' : 'card-title'
          }`}>
            {article.title}
          </h3>
          
          <p className="body-text text-text-secondary mb-4 line-clamp-3">
            {article.excerpt}
          </p>
          
          <button className="body-text text-primary hover:text-secondary transition-colors">
            Read More →
          </button>
        </div>
      </div>
    </article>
  );
};

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeCategory === category
              ? 'bg-primary text-text-primary'
              : 'bg-gray-200 text-text-secondary hover:bg-gray-300'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

const Articles = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Dog Care Tips', 'Training Guides', 'Health & Nutrition', 'Breed Spotlights'];
  
  const filteredArticles = activeCategory === 'All' 
    ? mockData.articles 
    : mockData.articles.filter(article => article.category === activeCategory);

  const featuredArticle = mockData.articles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="hero-title text-text-primary mb-4">
            Dog Care Articles
          </h1>
          <p className="subtitle text-text-secondary max-w-2xl mx-auto">
            Expert advice, tips, and insights to help you provide the best care for your furry friend. 
            From training guides to health tips, we've got you covered.
          </p>
        </div>

        {/* Category Filter */}
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Featured Article */}
        {featuredArticle && activeCategory === 'All' && (
          <div className="mb-12">
            <h2 className="section-heading text-text-primary mb-6">Featured Article</h2>
            <ArticleCard article={featuredArticle} featured={true} />
          </div>
        )}

        {/* Articles Grid */}
        <div className="mb-8">
          <h2 className="section-heading text-text-primary mb-6">
            {activeCategory === 'All' ? 'Latest Articles' : `${activeCategory} Articles`}
          </h2>
          
          {regularArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="subtitle text-text-secondary">No articles found in this category.</p>
              <button 
                onClick={() => setActiveCategory('All')}
                className="btn-primary mt-4"
              >
                View All Articles
              </button>
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="section-heading text-text-primary mb-4">
            Stay Updated with Dog Care Tips
          </h3>
          <p className="body-text text-text-secondary mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive weekly dog care tips, training advice, 
            and the latest articles directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;