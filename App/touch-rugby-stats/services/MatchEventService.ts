import { gql } from "@apollo/client";

export const SaveMatchEventMutation = gql`
        mutation saveMatchEvent($timestamp: Int!, $matchId: ID!, $team: String!, $eventName: String!) {
            addMatchEvent(matchEvent: { timestamp: $timestamp, matchId: $matchId, eventName: $eventName, team: $team}) {
                timestamp
            }
    }`;

export function ExecuteMutation(mutationToExecute: any, timestamp: Number, matchId: string, possession: string, eventName: string) {
    mutationToExecute({ variables: { timestamp, matchId, team: possession, eventName: eventName }});
}
