import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FloatingContactWidget } from "@/components/FloatingContactWidget";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Team from "@/pages/Team";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import ServiceDetail from "@/pages/ServiceDetail";
import ThankYou from "@/pages/ThankYou";
import ClinicGallery from "@/pages/ClinicGallery";
import Blog from "@/pages/Blog";
import BlogDetail from "@/pages/BlogDetail";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/about" component={About} />
      <Route path="/team" component={Team} />
      <Route path="/services" component={Services} />
      <Route path="/services/:slug">
        {(params) => <ServiceDetail slug={params.slug} />}
      </Route>
      <Route path="/clinic-gallery" component={ClinicGallery} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug">
        {(params) => <BlogDetail slug={params.slug} />}
      </Route>
      <Route path="/contact" component={Contact} />
      <Route path="/thank-you" component={ThankYou} />
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
        <FloatingContactWidget />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
