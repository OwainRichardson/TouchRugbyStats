import MatchContextProvider, { useMatchContext } from '../../../contexts/MatchContext';
import { render, screen, fireEvent } from '@testing-library/react';
import PlayerFrame from './index';
import { IMatchContext } from '../../../contexts/IMatchContext';

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