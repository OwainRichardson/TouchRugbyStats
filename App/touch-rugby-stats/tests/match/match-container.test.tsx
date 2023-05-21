import MatchContextProvider from '../../pages/match/context/MatchContext';
import { render, screen, fireEvent } from '@testing-library/react';
import MatchContainer from '../../pages/match/components/MatchContainer';
import '@testing-library/jest-dom';

describe("Given a user views the main match component", () => {
    describe ("and the match is active", () => {
        describe("and the home team have possession", () => {
            describe("when the try scored button is pressed", () => {
                it("should display the players frame", async () => {            
                    render (
                        <MatchContextProvider matchInProgess="true">
                            <MatchContainer />
                        </MatchContextProvider>
                    );

                    const tryScoredButton = screen.getByText('Try scored');
                    fireEvent.click(tryScoredButton);

                    expect(await document.getElementById('player-frame')).toBeVisible();
                });

                describe("and a player button is pressed", () => {
                    it("should display the main match frame", async () => {
                        render (
                            <MatchContextProvider matchInProgess="true">
                                <MatchContainer />
                            </MatchContextProvider>
                        );
            
                        const tryScoredButton = screen.getByText('Try scored');
                        fireEvent.click(tryScoredButton);

                        const playerButton = document.getElementsByClassName('match-button');
                        fireEvent.click(playerButton[0]);

                        expect(await document.getElementById('main-match-frame')).toBeVisible();
                    });

                    it("should change the class on the button to the away team", async () => {
                        render (
                            <MatchContextProvider matchInProgess="true" homeTeam="Wildcats" awayTeam="Saxons">
                                <MatchContainer />
                            </MatchContextProvider>
                        );
            
                        const tryScoredButton = screen.getByText('Try scored');
                        fireEvent.click(tryScoredButton);

                        const playerButton = document.getElementsByClassName('match-button');
                        fireEvent.click(playerButton[0]);

                        const matchButtons = document.getElementsByClassName('match-button__content');
                        Array.from(matchButtons).forEach(element => {
                            expect(element).toHaveClass('saxons');
                        });
                    });
                });
            });

            describe("when the completed set button is pressed", () => {
                it("should display the main match frame", async () => {            
                    render (
                        <MatchContextProvider matchInProgess="true">
                            <MatchContainer />
                        </MatchContextProvider>
                    );

                    const completedSetButton = screen.getByText('Completed set');
                    fireEvent.click(completedSetButton);

                    expect(await document.getElementById('main-match-frame')).toBeVisible();
                });

                it("should change the class on the button to the away team", async () => {
                    render (
                        <MatchContextProvider matchInProgess="true" homeTeam="Wildcats" awayTeam="Saxons">
                            <MatchContainer />
                        </MatchContextProvider>
                    );

                    const completedSetButton = screen.getByText('Completed set');
                    fireEvent.click(completedSetButton);

                    const matchButtons = document.getElementsByClassName('match-button__content');
                    Array.from(matchButtons).forEach(element => {
                        expect(element).toHaveClass('saxons');
                    });
                });
            });

            describe("when the penalty button is pressed", () => {
                it("should display the penalty frame", async () => {            
                    render (
                        <MatchContextProvider matchInProgess="true">
                            <MatchContainer />
                        </MatchContextProvider>
                    );

                    const penaltyButton = screen.getByText('Penalty');
                    fireEvent.click(penaltyButton);

                    expect(await document.getElementById('penalty-frame')).toBeVisible();
                });
            });

            describe("when the turnover button is pressed", () => {
                it("should display the turnover frame", async () => {            
                    render (
                        <MatchContextProvider matchInProgess="true">
                            <MatchContainer />
                        </MatchContextProvider>
                    );

                    const penaltyButton = screen.getByText('Turnover');
                    fireEvent.click(penaltyButton);

                    expect(await document.getElementById('turnover-frame')).toBeVisible();
                });
            });
        });

        describe("and the away team have possession", () => {
            describe("when the try scored button is pressed", () => {
                it("should display the players frame", async () => {            
                    render (
                        <MatchContextProvider matchInProgess="true" possession="away">
                            <MatchContainer />
                        </MatchContextProvider>
                    );

                    const tryScoredButton = screen.getByText('Try scored');
                    fireEvent.click(tryScoredButton);

                    expect(await document.getElementById('player-frame')).toBeVisible();
                });

                describe("and a player button is pressed", () => {
                    it("should display the main match frame", async () => {
                        render (
                            <MatchContextProvider matchInProgess="true" possession="away">
                                <MatchContainer />
                            </MatchContextProvider>
                        );
            
                        const tryScoredButton = screen.getByText('Try scored');
                        fireEvent.click(tryScoredButton);

                        const playerButton = document.getElementsByClassName('match-button');
                        fireEvent.click(playerButton[0]);

                        expect(await document.getElementById('main-match-frame')).toBeVisible();
                    });

                    it("should change the class on the button to the home team", async () => {
                        render (
                            <MatchContextProvider matchInProgess="true" homeTeam="Wildcats" awayTeam="Saxons" possession="away">
                                <MatchContainer />
                            </MatchContextProvider>
                        );
            
                        const tryScoredButton = screen.getByText('Try scored');
                        fireEvent.click(tryScoredButton);

                        const playerButton = document.getElementsByClassName('match-button');
                        fireEvent.click(playerButton[0]);

                        const matchButtons = document.getElementsByClassName('match-button__content');
                        Array.from(matchButtons).forEach(element => {
                            expect(element).toHaveClass('wildcats');
                        });
                    });
                });
            });

            describe("when the completed set button is pressed", () => {
                it("should display the main match frame", async () => {            
                    render (
                        <MatchContextProvider matchInProgess="true" possession="away">
                            <MatchContainer />
                        </MatchContextProvider>
                    );

                    const completedSetButton = screen.getByText('Completed set');
                    fireEvent.click(completedSetButton);

                    expect(await document.getElementById('main-match-frame')).toBeVisible();
                });

                it("should change the class on the button to the home team", async () => {
                    render (
                        <MatchContextProvider matchInProgess="true" homeTeam="Wildcats" awayTeam="Saxons" possession="away">
                            <MatchContainer />
                        </MatchContextProvider>
                    );

                    const completedSetButton = screen.getByText('Completed set');
                    fireEvent.click(completedSetButton);

                    const matchButtons = document.getElementsByClassName('match-button__content');
                    Array.from(matchButtons).forEach(element => {
                        expect(element).toHaveClass('wildcats');
                    });
                });
            });

            describe("when the penalty button is pressed", () => {
                it("should display the penalty frame", async () => {            
                    render (
                        <MatchContextProvider matchInProgess="true" possession="away">
                            <MatchContainer />
                        </MatchContextProvider>
                    );

                    const penaltyButton = screen.getByText('Penalty');
                    fireEvent.click(penaltyButton);

                    expect(await document.getElementById('penalty-frame')).toBeVisible();
                });
            });

            describe("when the turnover button is pressed", () => {
                it("should display the turnover frame", async () => {            
                    render (
                        <MatchContextProvider matchInProgess="true" possession="away">
                            <MatchContainer />
                        </MatchContextProvider>
                    );

                    const penaltyButton = screen.getByText('Turnover');
                    fireEvent.click(penaltyButton);

                    expect(await document.getElementById('turnover-frame')).toBeVisible();
                });
            });
        });
    });

    describe("and the match is not active", () => {
        it("should display a message saying to start the match", async () => {
            render (
                <MatchContextProvider matchInProgess={false} >
                    <MatchContainer />
                </MatchContextProvider>
            );

            expect(await screen.findAllByText("Kick off to start the match")).toHaveLength(1);
        });
    });
});