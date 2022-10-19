import { render, fireEvent, screen } from '@testing-library/react';
import MatchContextProvider, { MatchContext } from '../Contexts/MatchContext';
import MatchContainer from "../Components/MatchContainer";
import Timer from "../Components/Timer";
import Teams from "../Components/Teams";

test("Try scored for home team adds 1 to home team score", () => {

    
    render(
        <MatchContextProvider>
            <Timer />
            <Teams />
            <MatchContainer />    
        </MatchContextProvider>
    );

    const tryScoredButton = screen.getByText('Try scored');
    fireEvent.click(tryScoredButton);

    const scorer = screen.getByText('Owain');
    fireEvent.click(scorer);

    const homeScore = document.querySelector('#home-score');
    expect(homeScore.textContent).toBe('1');
});

test("Try scored for home team adds 1 to home team score in context", () => {

    let context = {
        homeScore: 0,
        possession: 'home'
    };

    render(
        <MatchContext.Provider value={context}>
            <Timer />
            <Teams />
            <MatchContainer />    
        </MatchContext.Provider>
    );

    const tryScoredButton = screen.getByText('Try scored');
    fireEvent.click(tryScoredButton);

    const scorer = screen.getByText('Owain');
    fireEvent.click(scorer);

    expect(context.homeScore).toBe(1);
});