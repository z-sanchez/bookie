export const filterSearchByTerm = (term = "", results: string[]) => {
  return results.filter((result) =>
    result.toLowerCase().includes(term.toLowerCase())
  );
};
