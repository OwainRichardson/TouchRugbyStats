import MatchContextProvider, { useMatchContext } from '../../pages/match/context/MatchContext';
import { render, screen, fireEvent } from '@testing-library/react';
import Timer from '../../pages/match/components/Timer';
import '@testing-library/jest-dom';

describe("Given a user views the timer component", () => {
    describe("When the match is not started", () => {
        describe("and home have possession", () => {
            it("should display a Kick Off button", async () => {
                render (
                    <MatchContextProvider matchInProgess="false" possession="home">
                        <Timer />
                    </MatchContextProvider>
                );

                const kickOffButton = screen.getByText('Kick off');
                expect(kickOffButton).toBeVisible();
            });

            it("should start the match when the Kick Off button is clicked", async () => {
                render (
                    <MatchContextProvider matchInProgess="false" possession="home">
                        <Timer />
                    </MatchContextProvider>
                );

                var kickOffButton = screen.getByText('Kick off');
                fireEvent.click(kickOffButton);

                kickOffButton = document.getElementById('timer-button')!;
                expect(kickOffButton).toHaveClass('hidden');
            });
        });

        describe("and away have possession", () => {
            it("should display a Kick Off button", async () => {
                render (
                    <MatchContextProvider matchInProgess="false" possession="away">
                        <Timer />
                    </MatchContextProvider>
                );

                const kickOffButton = document.getElementById('timer-button');
                expect(kickOffButton).toBeVisible();
            });

            it("should start the match when the Kick Off button is clicked", async () => {
                render (
                    <MatchContextProvider matchInProgess="false" possession="away">
                        <Timer />
                    </MatchContextProvider>
                );

                var kickOffButton = screen.getByText('Kick off');
                fireEvent.click(kickOffButton);

                kickOffButton = document.getElementById('timer-button')!;
                expect(kickOffButton).toHaveClass('hidden');
            });
        });
    });
});
