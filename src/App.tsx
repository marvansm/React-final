import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import { router } from "./router";
import { CardProvider } from "./Provider/AddToCart";
import { Toaster } from "sonner";
const queryClient = new QueryClient();
const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <CardProvider>
          <RouterProvider router={router} />
          <Toaster  position="top-right"/>
        </CardProvider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
