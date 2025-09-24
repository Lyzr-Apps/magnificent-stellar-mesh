import React from 'react';
import { FormattedRecipe } from '../types';

interface RecipeCardProps {
  recipe: FormattedRecipe;
  onNewRecipe: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onNewRecipe }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto animate-fadeIn">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{recipe.title}</h2>
        <p className="text-blue-600 text-lg font-medium">{recipe.emotionalContext}</p>
      </div>

      {recipe.image?.url && (
        <div className="mb-6">
          <img
            src={recipe.image.url}
            alt={recipe.title}
            className="w-full h-64 object-cover rounded-xl"
          />
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Ingredients</h3>
          <ul className="space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-700">{ingredient.name}</span>
                {ingredient.amount && (
                  <span className="text-gray-500 ml-2">({ingredient.amount})</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Instructions</h3>
          <ol className="space-y-3">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
                  {index + 1}
                </span>
                <span className="text-gray-700">{instruction.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {recipe.presentation?.tips && (
        <div className="bg-yellow-50 rounded-xl p-4 mb-6">
          <h4 className="font-semibold text-gray-800 mb-2">Presentation Tips</h4>
          <p className="text-gray-600">{recipe.presentation.tips}</p>
        </div>
      )}

      <div className="text-center">
        <button
          onClick={onNewRecipe}
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          Find Another Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;