import { ITeamInfo } from "../types/ITeamInfo";

export interface IMatchContext {
    homeScore: number;
    setHomeScore(arg: number): void;
    awayScore: number;
    setAwayScore(arg: number): void;
    possession: 'home' | 'away';
    setPossession(arg: string): void;
    homeSets: number;
    setHomeSets(arg: number): void;
    awaySets: number;
    setAwaySets(arg: number): void;
    homeTeam: ITeamInfo;
    setHomeTeam(arg: ITeamInfo): void;
    awayTeam: ITeamInfo;
    setAwayTeam(arg: ITeamInfo): void;
    homeCompletedSets: number;
    setHomeCompletedSets(arg: number): void;
    awayCompletedSets: number;
    setAwayCompletedSets(arg: number): void;
    minutes: string;
    setMinutes(arg: string): void;
    seconds: string;
    setSeconds(arg: string): void;
    displayedFrame: 'main' | 'player' | 'penalty' | 'turnover';
    setDisplayedFrame(arg: 'main' | 'player' | 'penalty' | 'turnover'): void;
    homePenalties: number;
    setHomePenalties(arg: number): void;
    awayPenalties: number;
    setAwayPenalties(arg: number): void;
    matchLengthSeconds: number;
    matchInProgress: boolean;
    setMatchInProgress(arg: boolean): void;
}