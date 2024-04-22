
import { vi } from "vitest";

import { set_rgb_color } from './utils.js';

test("Verify that set_rgb_color returns a string representing a rgb color", () => {
     const mock_math_floor = vi.spyOn(Math, "floor");
     mock_math_floor.mockReturnValueOnce(210);
     mock_math_floor.mockReturnValueOnce(55);
     mock_math_floor.mockReturnValueOnce(111);
     const rgb_color = set_rgb_color();
     expect(mock_math_floor.mock.calls.length).toBe(3);
     expect(rgb_color).toBe(`rgb(210 55 111)`)
});
