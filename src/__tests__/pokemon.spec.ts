import { describe, expect, it } from "vitest";
import Pokemon from "../components/Pokemon.vue";
import { fireEvent, render, screen } from "@testing-library/vue";

describe('pokemon',  () => {
  it('render pokemon', async () => {
    render(Pokemon) 

    const pokemon = await screen.findByText('Hey')
    await fireEvent.click(pokemon)

    const value = await screen.findByText('rattata')

    expect(value.innerHTML).toBe('rattata')
  })
})