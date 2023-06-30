export interface SearchTerms {
  type: SearchTermType;
  model: string;
}

export type SearchTermType = "all" | "suv" | "estate" | "sedan";