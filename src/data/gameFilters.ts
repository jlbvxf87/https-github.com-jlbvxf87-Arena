export interface GameFilter {
  id: string;
  label: string;
  icon: string;
  alt: string;
}

export const gameFilters: GameFilter[] = [
  {
    id: 'casual-elite',
    label: 'Casual or Elite',
    icon: "https://c.animaapp.com/mevoah3qcxP2EM/assets/79.svg",
    alt: 'barchart'
  },
  {
    id: 'free-paid',
    label: 'Free or Paid',
    icon: "https://c.animaapp.com/mevoah3qcxP2EM/assets/56.svg",
    alt: 'banknote icon'
  },
  {
    id: 'up-to-you',
    label: "It's all up to you",
    icon: "https://c.animaapp.com/mevoah3qcxP2EM/assets/57.png",
    alt: ''
  }
];
