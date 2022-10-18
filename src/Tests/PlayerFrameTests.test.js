import { render, fireEvent, screen } from "@testing-library/react";
import { MatchContext } from '../Contexts/MatchContext';
import MatchContainer from "../Components/MatchContainer";
import Timer from "../Components/Timer";
import Teams from "../Components/Teams";


test("Try scored for home team adds 1 to home team score", () => {

    render(
        <MatchContext.Provider>
            <Timer />
            <Teams />
            <MatchContainer />    
        </MatchContext.Provider>
    );

    const tryScoredButton = screen.getByText('Try scored');
    fireEvent.click(tryScoredButton);

    const scorer = screen.getByText('Owain');
    fireEvent.click(scorer);

    // const homeScore = screen.getByTestId('home-score');
    // expect(homeScore).toBe('1');
});