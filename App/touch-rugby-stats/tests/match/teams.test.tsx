import MatchContextProvider, { useMatchContext } from '../../pages/tournament/[tournamentId]/match/context/MatchContext';
import { render, screen, fireEvent } from '@testing-library/react';
import Teams from '../../pages/tournament/[tournamentId]/match/components/Teams';

describe("Given a user views the teams component", () => {
    describe("when the possession is with home", () => {
        it("should display the home team name correctly", async () => {            
            render (
                <MatchContextProvider homeTeam="Wildcats" awayTeam="Saxons" possession="home">
                    <Teams />
                </MatchContextProvider>
            );

            const homeTeamName = document.getElementById('team-name-home');

            expect(homeTeamName?.innerHTML).toBe('Wildcats');
        });

        it("should display the away team name correctly", async () => {            
            render (
                <MatchContextProvider homeTeam="Wildcats" awayTeam="Saxons" possession="home">
                    <Teams />
                </MatchContextProvider>
            );

            const awayTeamName = document.getElementById('team-name-away');

            expect(awayTeamName?.innerHTML).toBe('Saxons');
        });

        it("should mark the home team as having possession", async () => {
            render (
                <MatchContextProvider homeTeam="Wildcats" awayTeam="Saxons" possession="home">
                    <Teams />
                </MatchContextProvider>
            );

            const inPossession = document.getElementsByClassName('in-possession');
            expect(inPossession).toHaveLength(1);
            expect(inPossession[0].className).toContain('home');
        });
    });
    
    describe("when the possession is with away", () => {
        it("should display the home team name correctly", async () => {            
            render (
                <MatchContextProvider homeTeam="Wildcats" awayTeam="Saxons" possession="away">
                    <Teams />
                </MatchContextProvider>
            );

            const homeTeamName = document.getElementById('team-name-home');

            expect(homeTeamName?.innerHTML).toBe('Wildcats');
        });

        it("should display the away team name correctly", async () => {            
            render (
                <MatchContextProvider homeTeam="Wildcats" awayTeam="Saxons" possession="away">
                    <Teams />
                </MatchContextProvider>
            );

            const awayTeamName = document.getElementById('team-name-away');

            expect(awayTeamName?.innerHTML).toBe('Saxons');
        });

        it("should mark the away team as having possession", async () => {
            render (
                <MatchContextProvider homeTeam="Wildcats" awayTeam="Saxons" possession="away">
                    <Teams />
                </MatchContextProvider>
            );

            const inPossession = document.getElementsByClassName('in-possession');
            expect(inPossession).toHaveLength(1);
            expect(inPossession[0].className).toContain('away');
        });
    });
});
