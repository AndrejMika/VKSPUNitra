import { defineStore } from 'pinia';

export const useMatchesStore = defineStore('matches', {
  state: () => ({
    matches: [
      {
        id: 1,
        date: '2025-01-20',
        opponent: 'Team A',
        location: 'SPU Nitra Arena',
        score: '3-1',
      },
      {
        id: 2,
        date: '2025-01-25',
        opponent: 'Team B',
        location: 'City Sports Center',
        score: '2-3',
      },
    ],
  }),
  actions: {
    addMatch(match) {
      this.matches.push(match);
    },
    removeMatch(matchId) {
      this.matches = this.matches.filter(match => match.id !== matchId);
    },
    updateMatch(updatedMatch) {
      const index = this.matches.findIndex(match => match.id === updatedMatch.id);
      if (index !== -1) {
        this.matches[index] = updatedMatch;
      }
    },
  },
});
