import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Dashboard from "@/pages/Dashboard";
import DialectPage from "@/pages/DialectPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/patterns/:dialect" component={Dashboard} />
      <Route path="/reference/SQL">
        <DialectPage title="SQL" />
      </Route>
      <Route path="/reference/SQLite">
        <DialectPage title="SQLite" />
      </Route>
      <Route path="/reference/T-SQL">
        <DialectPage title="T-SQL" />
      </Route>
      <Route path="/reference/SQL-Graph">
        <DialectPage title="SQL-Graph" />
      </Route>
      <Route path="/reference/PostgreSQL">
        <DialectPage title="PostgreSQL" />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
