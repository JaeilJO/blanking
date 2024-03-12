"use client";

// Utils
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";
import { useState } from "react";

// Style
import style from "./index.module.scss";

function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}

      {process.env.NEXT_PUBLIC_MODE === "local" ? (
        <div className={style.devtool}>
          <ReactQueryDevtools
            initialIsOpen={process.env.NEXT_PUBLIC_MODE === "local"}
          />
        </div>
      ) : (
        <></>
      )}
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;
