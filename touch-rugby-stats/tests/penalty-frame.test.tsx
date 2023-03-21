import MatchContextProvider, { useMatchContext } from '../contexts/MatchContext';
import { render, screen, fireEvent } from '@testing-library/react';
import PenaltyFrame from '../components/Frames/PenaltyFrame/index';
import { IMatchContext } from '../contexts/IMatchContext';

describe("Given a user views the penalty component", () => {
    describe("when the home team has possession", () => {
        it("should increment the home sets by 1", async () => {            
            render (
                <MatchContextProvider>
                    <PenaltyFrame />
                    <TestDisplayComponent />    
                </MatchContextProvider>
            );

            const penalty = screen.getByText('Offside');
            fireEvent.click(penalty);

            const area = screen.getByText('Goal <-> 7m');
            fireEvent.click(area);

            expect((await screen.findByTestId('home-sets')).textContent).toBe('1');
        });

        it ("should increment the away penalties by 1", async () => {
            render (
                <MatchContextProvider>
                    <PenaltyFrame />
                    <TestDisplayComponent />    
                </MatchContextProvider>
            );

            const penalty = screen.getByText('Offside');
            fireEvent.click(penalty);

            const area = screen.getByText('Goal <-> 7m');
            fireEvent.click(area);

            expect((await screen.findByTestId('away-penalties')).textContent).toBe('1');
        });
    });

    describe("when the away team has possession", () => {
        it("should increment the away sets by 1", async () => {            
            render (
                <MatchContextProvider possession='away'>
                    <PenaltyFrame />
                    <TestDisplayComponent />    
                </MatchContextProvider>
            );

            const penalty = screen.getByText('Offside');
            fireEvent.click(penalty);

            const area = screen.getByText('Goal <-> 7m');
            fireEvent.click(area);

            expect((await screen.findByTestId('away-sets')).textContent).toBe('1');
        });

        it ("should increment the away penalties by 1", async () => {
            render (
                <MatchContextProvider possession='away'>
                    <PenaltyFrame />
                    <TestDisplayComponent />    
                </MatchContextProvider>
            );

            const penalty = screen.getByText('Offside');
            fireEvent.click(penalty);

            const area = screen.getByText('Goal <-> 7m');
            fireEvent.click(area);

            expect((await screen.findByTestId('home-penalties')).textContent).toBe('1');
        });
    });
});

function TestDisplayComponent (){
    const data: IMatchContext = useMatchContext();
    
    return (
        <div>
            <div data-testid="home-sets">{data.homeSets}</div>
            <div data-testid="away-sets">{data.awaySets}</div>
            <div data-testid="home-penalties">{data.homePenalties}</div>
            <div data-testid="away-penalties">{data.awayPenalties}</div>
        </div>
    );
};