import { render, fireEvent, screen } from "@testing-library/react";
import MatchContextProvider from '../Contexts/MatchContext';
import MatchContainer from "../Components/MatchContainer";
import Timer from "../Components/Timer";
import Teams from "../Components/Teams";

const matchContext = {
    homeScore: 0
};

test("Try scored for home team adds 1 to home team score", () => {
    
    render(
        <MatchContextProvider value={matchContext}>
            <Timer />
            <Teams />
            <MatchContainer />    
        </MatchContextProvider>
    );

    const tryScoredButton = screen.getByText('Try scored');
    fireEvent.click(tryScoredButton);

    const scorer = screen.getByText('Owain');
    fireEvent.click(scorer);

    expect(matchContext.homeScore).toBe(1);
});