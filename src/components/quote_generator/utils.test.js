
import { vi } from "vitest";

import { set_rgb_color, fetch_quotes } from './utils.js';

test("Verify that set_rgb_color returns a string representing a rgb color", () => {
     const mock_math_floor = vi.spyOn(Math, "floor");
     mock_math_floor.mockReturnValueOnce(210);
     mock_math_floor.mockReturnValueOnce(55);
     mock_math_floor.mockReturnValueOnce(111);
     const rgb_color = set_rgb_color();
     expect(mock_math_floor.mock.calls.length).toBe(3);
     expect(rgb_color).toBe(`rgb(210 55 111)`)
});

test("Verify that fetch_quotes returns an Array of quotes", async () => {
     const mock_fetch = vi.spyOn(
         window, "fetch"
     ).mockImplementation((http_url ) => {
          return Promise.resolve(
              {"json": () => Promise.resolve([{"quote": "Oh hi!", "character": "Me"}])}
          );
     });
     const quotes = await vi.waitFor(fetch_quotes);
     expect(mock_fetch.mock.calls.length).toBe(1);
     expect(quotes).toEqual([{"quote": "Oh hi!", "character": "Me"}]);
});
