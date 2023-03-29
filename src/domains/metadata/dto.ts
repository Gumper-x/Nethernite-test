export interface MetadataPackage {
  type: string;
  name: string;
  tags: Record<string, string>;
  versions: {
    version: string;
    links: {
      self: string;
      entrypoints: string;
      stats: string;
    };
  }[];
  links: {
    stats: string;
  };
}
