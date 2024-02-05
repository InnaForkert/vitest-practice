import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from 'vitest';
import View from '../components/View.vue';

describe.concurrent("View", () => {
  const viewText = "Henlo";

  it("render span correctly", async() => {
    const viewId = 'id';
    render(View, {
      props: { element: "span", id: viewId },
      slots: { default: viewText }
    })

    const view = await screen.findByText(viewText);

    expect(view.id).toBe(viewId)
    expect(view.innerHTML).toBe(viewText)
    expect(view.nodeName).toBe("SPAN")
  })

  it("snapshot matches", () => {
    const wrapper = render(View, { props: { element: "div" } })
    expect(wrapper).toMatchSnapshot()
  })
})