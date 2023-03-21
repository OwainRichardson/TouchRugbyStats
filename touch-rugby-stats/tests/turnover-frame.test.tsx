import MatchContextProvider, { useMatchContext } from '../contexts/MatchContext';
import { render, screen, fireEvent } from '@testing-library/react';
import TurnoverFrame from '../components/Frames/TurnoverFrame/index';
import { IMatchContext } from '../contexts/IMatchContext';

describe("Given a user views the penalty component", () => {
    describe("when the home team has possession", () => {
        it("should increment the away sets by 1", async () => {            
            render (
                <MatchContextProvider>
                    <TurnoverFrame />
                    <TestDisplayComponent />    
                </MatchContextProvider>
            );

            const penalty = screen.getByText('Late pass');
            fireEvent.click(penalty);

            const area = screen.getByText('Goal <-> 7m');
            fireEvent.click(area);

            expect((await screen.findByTestId('away-sets')).textContent).toBe('1');
        });

        it("should transfer possession to away", async () => {            
            render (
                <MatchContextProvider>
                    <TurnoverFrame />
                    <TestDisplayComponent />    
                </MatchContextProvider>
            );

            const penalty = screen.getByText('Late pass');
            fireEvent.click(penalty);

            const area = screen.getByText('Goal <-> 7m');
            fireEvent.click(area);

            expect((await screen.findByTestId('possession')).textContent).toBe('away');
        });
    });

    describe("when the away team has possession", () => {
        it("should increment the home sets by 1", async () => {            
            render (
                <MatchContextProvider possession='away'>
                    <TurnoverFrame />
                    <TestDisplayComponent />    
                </MatchContextProvider>
            );

            const penalty = screen.getByText('Late pass');
            fireEvent.click(penalty);

            const area = screen.getByText('Goal <-> 7m');
            fireEvent.click(area);

            expect((await screen.findByTestId('home-sets')).textContent).toBe('1');
        });

        it("should transfer possession to home", async () => {            
            render (
                <MatchContextProvider possession='away'>
                    <TurnoverFrame />
                    <TestDisplayComponent />    
                </MatchContextProvider>
            );

            const penalty = screen.getByText('Late pass');
            fireEvent.click(penalty);

            const area = screen.getByText('Goal <-> 7m');
            fireEvent.click(area);

            expect((await screen.findByTestId('possession')).textContent).toBe('home');
        });
    });
});

function TestDisplayComponent (){
    const data: IMatchContext = useMatchContext();
    
    return (
        <div>
            <div data-testid="home-sets">{data.homeSets}</div>
            <div data-testid="away-sets">{data.awaySets}</div>
            <div data-testid="possession">{data.possession}</div>
        </div>
    );
};