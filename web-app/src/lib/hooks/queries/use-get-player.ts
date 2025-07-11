import {env} from "@/env";
import axios from "axios";
import {PlayerType} from "@/lib/types/type";
import {useQuery} from "@tanstack/react-query";
import {apiClient} from "@/lib/hooks/api-client";

export async function getPlayer(id: string) {
    const response = await apiClient.get<PlayerType>(`${env.NEXT_PUBLIC_API_HOST}/players/${id}`);
    return response.data;
}

export function useGetPlayer({playerId}: { playerId: string }) {
    return useQuery<PlayerType>(
        {
            queryKey: ["player", {playerId}],
            queryFn: () => getPlayer(playerId)
        }
    )
}