export interface TopListPackage {
  type: string;
  name: string;
  hits: number;
  bandwidth: number;
  prev?: {
    hits: number;
    bandwidth: number;
  };
  links: {
    self: string;
    versions: string;
  };
}

export interface StatPackage {
  hits: {
    rank: number;
    typeRank: number;
    total: number;
    dates: Record<string, number>;
    prev: {
      rank: number;
      typeRank: number;
      total: number;
    };
  };
  bandwidth: {
    rank: number;
    typeRank: number;
    total: number;
    dates: Record<string, number>;
    prev: {
      rank: number;
      typeRank: number;
      total: number;
    };
  };
  links: {
    versions: string;
  };
}
