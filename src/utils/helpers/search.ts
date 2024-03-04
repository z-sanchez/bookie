export const filterSearchByTerm = (term = "", results: string[]) => {
  return results.filter((result) =>
    result.toLowerCase().includes(term.toLowerCase())
  );
};

export const printStatement = (statement: string)=>{
	console.log("Hello Printing from NVIM", statement);


}
