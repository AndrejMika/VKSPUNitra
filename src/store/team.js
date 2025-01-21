import { defineStore } from 'pinia';

export const useTeamStore = defineStore('team', {
  state: () => ({
    teamName: 'SPU Nitra',
    players: [
      {
        id: 1,
        name: 'John Doe',
        position: 'Setter',
        age: 25,
        height: '6ft',
        photo: '/player1.jpg',
      },
      {
        id: 2,
        name: 'Jane Smith',
        position: 'Libero',
        age: 22,
        height: '5.7ft',
        photo: '/player2.jpg',
      },
    ],
  }),
  actions: {
    addPlayer(player) {
      this.players.push(player);
    },
    removePlayer(playerId) {
      this.players = this.players.filter(player => player.id !== playerId);
    },
    updatePlayer(updatedPlayer) {
      const index = this.players.findIndex(player => player.id === updatedPlayer.id);
      if (index !== -1) {
        this.players[index] = updatedPlayer;
      }
    },
  },
});
