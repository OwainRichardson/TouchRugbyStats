export interface IMatchEvent {
    timestamp: number;
    eventType: string;
    possession: 'home'|'away';
}