import { describe, expect, test } from "vitest";
import { filterSearchByTerm } from "../utils/helpers/search";

const possibleSearchValues = ["Yeto", "Shake Shack", "Glass", "Shingle Tap"];

describe("Filter Search", () => {
  test('Search by Term "" ', () => {
    const returnValue = filterSearchByTerm("", possibleSearchValues);
    expect(returnValue).toEqual(possibleSearchValues);
  });

  test('Search by Term "sh" for multiple matches', () => {
    const returnValue = filterSearchByTerm("Sh", possibleSearchValues);
    expect(returnValue).toEqual(["Shake Shack", "Shingle Tap"]);
  });

  test('Search by Term "SH" for multiple matches', () => {
    const returnValue = filterSearchByTerm("SH", possibleSearchValues);
    expect(returnValue).toEqual(["Shake Shack", "Shingle Tap"]);
  });

  test('Search by Term "Plague" for no matches', () => {
    const returnValue = filterSearchByTerm("Plague", possibleSearchValues);
    expect(returnValue).toEqual([]);
  });
});
