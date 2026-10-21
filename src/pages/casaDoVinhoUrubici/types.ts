export type Wine = {
  id: string;
  name: string;
  winery: string;
  region: string;
  country: string;
  type: string;
  grape: string;
  collection: string;
  notes: string;
  pairing: string;
  serve: string;
  image: string;
  /**
   * "official-cutout" marks a verified, unmodified official product photograph
   * on a transparent background. Rendered contained, not cropped, and never
   * described to the user as an illustration.
   */
  imageKind?: "official-cutout";
  /** Short provenance line shown next to official photography. */
  imageCredit?: string;
};

export type Winery = {
  id: string;
  name: string;
  origin: string;
  placement: string;
  paid: boolean;
  tagline: string;
  story: string;
  styles: string;
  labels: string;
  image: string;
};

export type Selection = Record<string, number>;