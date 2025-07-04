"use client";

import {ReactNode} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "react-hot-toast";
import {SessionProvider} from "next-auth/react";
import {Session} from "next-auth";


const queryClient = new QueryClient();

export function Providers({children, session}: { children: ReactNode, session: Session | null }) {
    return (
        <SessionProvider session={session}>
            <QueryClientProvider client={queryClient}>
                <Toaster/>
                {children}
            </QueryClientProvider>
        </SessionProvider>
    );
}