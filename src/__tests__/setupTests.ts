import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';
import { response } from './mockPokemon';
import { afterAll, afterEach, beforeAll } from 'vitest';

export const restHandlers = [
  http.get("https://pokeapi.co/api/v2/pokemon/", () => {
    return HttpResponse.json(response);
  }),
];

const server = setupServer(...restHandlers)

beforeAll(() => server.listen({ onUnhandledRequest: "error" }))

afterAll(() => server.close())

afterEach(() => server.resetHandlers())