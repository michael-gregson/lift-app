import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const programs = [
    {
      id: 1,
      name: '5/3/1',
      category: 'strength',
      description: 'The Simplest and Most Effective Training System to Increase Raw Strength.'
    },
    {
      id: 2,
      name: '5x5',
      category: 'strength',
      description: 'The most popular strength program on the internet because it’s simple and works.'
    }
    ];
    return {programs};
  }
}
