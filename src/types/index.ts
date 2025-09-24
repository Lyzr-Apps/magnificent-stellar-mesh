export type Emotion = 'Happy' | 'Sad' | 'Angry' | 'Tired' | 'Love';

export interface EmotionConfig {
  emoji: string;
  label: string;
  color: string;
}

export interface Emotion2PromptResponse {
  result: {
    searchPrompt: string;
    category: string;
    keywords: string[];
    emotionalContext: string;
    intensity: string;
  };
  confidence: number;
  metadata: {
    processing_time: string;
    emotion_mapping: string;
  };
}

export interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  [key: string]: string | null;
}

export interface MealDBResponse {
  meals: Recipe[] | null;
}

export interface FormattedRecipe {
  title: string;
  emotionalContext: string;
  image: {
    url: string;
    alt: string;
  };
  ingredients: Array<{
    name: string;
    amount: string;
  }>;
  instructions: string[];
  presentation: {
    difficulty: string;
    cookTime: string;
    servings: string;
  };
}

export interface RecipeFormatterResponse {
  result: {
    formattedRecipe: FormattedRecipe;
  };
  confidence: number;
  metadata: {
    processing_time: string;
    format_version: string;
  };
}

export interface UIStateConfig {
  newState: 'emojiSelection' | 'loading' | 'recipeDisplay' | 'error';
  components: {
    showHeader: boolean;
    showEmojiGrid: boolean;
    showRecipeCard: boolean;
    showLoadingSpinner: boolean;
    showErrorMessage: boolean;
  };
  theme: {
    primary: string;
    background: string;
    surface: string;
    text: string;
  };
  transitions: {
    duration: string;
    type: string;
  };
}

export interface UIStateResponse {
  result: {
    stateConfig: UIStateConfig;
  };
  confidence: number;
  metadata: {
    processing_time: string;
    state_version: string;
  };
}

export type AppState = 'emojiSelection' | 'loading' | 'recipeDisplay' | 'error';