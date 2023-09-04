export interface IJob {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
}

export interface ISelectOption {
  value: any;
  label: any;
}

export interface IFilterState {
  fullTime: boolean;
  searchQuery: string;
  locationQuery: string;
  location: string[];
}
