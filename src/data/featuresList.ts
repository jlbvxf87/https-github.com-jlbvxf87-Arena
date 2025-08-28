export interface Feature {
  id: string;
  title: string;
  description: string;
}

export const featuresList: Feature[] = [
  {
    id: 'play-your-way',
    title: 'Play your way',
    description: 'Filter games by intensity, level, time, and price'
  },
  {
    id: 'relive-highlights',
    title: 'Relive every highlight',
    description: 'Post-game feed, highlights, and shoutouts let you relive the heat.'
  },
  {
    id: 'make-moments',
    title: 'Make moments, not excuses',
    description: 'Keep tabs on your W/L, badges, and rivalries. Know where you stand.'
  },
  {
    id: 'stay-organized',
    title: 'Keep your hoop life organized in one place',
    description: 'No spreadsheets. Just tap to join, host, or track the game.'
  }
];
