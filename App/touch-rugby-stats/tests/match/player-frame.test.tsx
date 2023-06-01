import MatchContextProvider, { useMatchContext } from '../../pages/tournament/[tournamentId]/match/context/MatchContext';
import { render, screen, fireEvent } from '@testing-library/react';
import PlayerFrame from '../../pages/tournament/[tournamentId]/match/components/Frames/PlayerFrame/index';
import { IMatchContext } from '../../pages/tournament/[tournamentId]/match/context/IMatchContext';

describe("Given a user views the players component", () => {
    describe("when the user clicks a home player", () => {
        it("should increment the home score by 1", async () => {            
            render (
                <MatchContextProvider>
                    <PlayerFrame />
                    <TestDisplayComponent />    
                </MatchContextProvider>
            );

            const scorer = screen.getByText('Owain');
            fireEvent.click(scorer);

            expect((await screen.findByTestId('home-score')).textContent).toBe('1');
        });

        it ("should transfer possession to away", async () => {
            render (
                <MatchContextProvider>
                    <PlayerFrame />
                    <TestDisplayComponent />    
                </MatchContextProvider>
            );

            const scorer = screen.getByText('Owain');
            fireEvent.click(scorer);

            expect((await screen.findByTestId('possession')).textContent).toBe('away');
        });

        it ("should increment away sets by 1", async () => {
            render (
                <MatchContextProvider>
                    <PlayerFrame />
                    <TestDisplayComponent />    
                </MatchContextProvider>
            );

            const scorer = screen.getByText('Owain');
            fireEvent.click(scorer);

            expect((await screen.findByTestId('away-sets')).textContent).toBe('1');
        });
    });

    describe("when the user clicks an away player", () => {
        it("should increment the away score by 1", async () => {      

            render (
                <MatchContextProvider possession='away'>
                    <PlayerFrame />
                    <TestDisplayComponent />    
                </MatchContextProvider>
            );

            const scorer = screen.getByText('Away 2');
            fireEvent.click(scorer);

            expect((await screen.findByTestId('away-score')).textContent).toBe('1');
        });

        it("should transfer possession to home", async () => {      

            render (
                <MatchContextProvider possession='away'>
                    <PlayerFrame />
                    <TestDisplayComponent />    
                </MatchContextProvider>
            );

            const scorer = screen.getByText('Away 2');
            fireEvent.click(scorer);

            expect((await screen.findByTestId('possession')).textContent).toBe('home');
        });

        it("should increment home sets by 1 ", async () => {      

            render (
                <MatchContextProvider possession='away'>
                    <PlayerFrame />
                    <TestDisplayComponent />    
                </MatchContextProvider>
            );

            const scorer = screen.getByText('Away 2');
            fireEvent.click(scorer);

            expect((await screen.findByTestId('home-sets')).textContent).toBe('1');
        });
    });

    describe("when possession is not set correctly", () => {
        it("should display a message saying it doesn't know who has the ball", async () => {
            render (
                <MatchContextProvider possession='unknown'>
                    <PlayerFrame />
                    <TestDisplayComponent />    
                </MatchContextProvider>
            );

            expect(await screen.findAllByText('Could not work out who is in possession. unknown')).toHaveLength(1);
        });
    });
});

function TestDisplayComponent (){
    const data: IMatchContext = useMatchContext();
    
    return (
        <div>
            <div data-testid="home-score">{data.homeScore}</div>
            <div data-testid="away-score">{data.awayScore}</div>
            <div data-testid="possession">{data.possession}</div>
            <div data-testid="home-sets">{data.homeSets}</div>
            <div data-testid="away-sets">{data.awaySets}</div>
        </div>
    );
};