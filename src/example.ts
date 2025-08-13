/**
 * Example TypeScript file showing Node.js 22 features
 * Run with: node --experimental-strip-types example.ts
 */

interface User {
  id: number;
  name: string;
  email: string;
}

// Using Node.js 22 built-in fetch (stable)
export async function fetchUser(id: number): Promise<User | null> {
  try {
    // Example API call using native fetch
    const response = await fetch(`https://api.example.com/users/${id}`);

    if (!response.ok) {
      return null;
    }

    const user: User = await response.json();
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    return null;
  }
}

// Using modern async/await with proper TypeScript typing
export async function processUsers(userIds: number[]): Promise<User[]> {
  const users = await Promise.allSettled(userIds.map(id => fetchUser(id)));

  return users
    .filter(
      (result): result is PromiseFulfilledResult<User> =>
        result.status === 'fulfilled' && result.value !== null
    )
    .map(result => result.value);
}

// Example using Node.js 22 navigator.hardwareConcurrency
export function getOptimalConcurrency(): number {
  // Use Node.js 22 navigator object for hardware info
  if (typeof navigator !== 'undefined' && navigator.hardwareConcurrency) {
    return Math.max(1, Math.floor(navigator.hardwareConcurrency / 2));
  }
  return 4; // Default fallback
}

// Example main function
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('TypeScript example running on Node.js 22');
  console.log('Optimal concurrency:', getOptimalConcurrency());
}
