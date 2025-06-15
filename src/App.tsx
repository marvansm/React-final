import HomePage from "./Featured/Pages/Home/Page/Home";
import Layout from "./Layout";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();
const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <HomePage />
        </Layout>
      </QueryClientProvider>
    </div>
  );
};

export default App;
