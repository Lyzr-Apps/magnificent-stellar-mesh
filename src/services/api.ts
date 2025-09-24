const API_BASE_URL = 'https://agent-prod.studio.lyzr.ai/v3/inference/chat/';
const API_KEY = 'sk-default-obhGvAo6gG9YT9tu6ChjyXLqnw7TxSGY';

export const AGENT_IDS = {
  EMOTION_TO_PROMPT: '68d33f07b8ad60845e685fb8',
  RECIPE_FORMATTER: '68d33f18d459921f338b360b',
  UI_STATE_MANAGER: '68d33f2726bbac52df9ee976'
};

interface ApiRequest {
  user_id: string;
  agent_id: string;
  session_id: string;
  message: string;
}

interface ApiResponse {
  response: string;
}

function generateSessionId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export async function callAgent(agentId: string, message: string): Promise<any> {
  const request: ApiRequest = {
    user_id: 'agent',
    agent_id: agentId,
    session_id: generateSessionId(),
    message
  };

  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data: ApiResponse = await response.json();

    // Try to parse the response as JSON if it's a JSON string
    try {
      return JSON.parse(data.response);
    } catch {
      return { response: data.response };
    }
  } catch (error) {
    console.error('Agent API call failed:', error);
    throw new Error(`Failed to call agent ${agentId}: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// TheMealDB API integration
const MEALDB_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export async function searchRecipes(query: string): Promise<any> {
  try {
    const response = await fetch(`${MEALDB_BASE_URL}/search.php?s=${encodeURIComponent(query)}`);

    if (!response.ok) {
      throw new Error(`MealDB request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('MealDB API call failed:', error);
    throw new Error(`Failed to search recipes: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}