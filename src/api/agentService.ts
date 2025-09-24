import { Emotion, Emotion2PromptResponse, MealDBResponse, RecipeFormatterResponse } from '../types';

const AGENT_API_URL = 'https://agent-prod.studio.lyzr.ai/v3/inference/chat/';
const API_KEY = 'sk-default-obhGvAo6gG9YT9tu6ChjyXLqnw7TxSGY';

function randomSessionId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export async function callEmotion2PromptAgent(emotion: Emotion) {
  const body = {
    user_id: 'agent',
    agent_id: '68d33f07b8ad60845e685fb8',
    session_id: randomSessionId(),
    message: emotion,
  };
  const r = await fetch(AGENT_API_URL, {
    method: 'POST',
    headers: {
      'x-api-key': API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!r.ok) throw new Error('Emotion agent failed');
  return (await r.json()) as Emotion2PromptResponse;
}

export async function callRecipeFormatterAgent(data: unknown) {
  const body = {
    user_id: 'agent',
    agent_id: '68d33f18d459921f338b360b',
    session_id: randomSessionId(),
    message: JSON.stringify(data),
  };
  const r = await fetch(AGENT_API_URL, {
    method: 'POST',
    headers: {
      'x-api-key': API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!r.ok) throw new Error('RecipeFormatter agent failed');
  return (await r.json()) as RecipeFormatterResponse;
}

export async function callUIStateManagerAgent(state: string) {
  const body = {
    user_id: 'agent',
    agent_id: '68d33f2726bbac52df9ee976',
    session_id: randomSessionId(),
    message: state,
  };
  const r = await fetch(AGENT_API_URL, {
    method: 'POST',
    headers: {
      'x-api-key': API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!r.ok) throw new Error('UIStateManager agent failed');
  return await r.json();
}

export async function fetchMealDB(searchPrompt: string) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(searchPrompt)}`;
  const r = await fetch(url);
  if (!r.ok) throw new Error('MealDB API error');
  return (await r.json()) as MealDBResponse;
}
