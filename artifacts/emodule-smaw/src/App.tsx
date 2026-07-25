import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { ThemeProvider } from '@/components/theme-provider';
import { SidebarProvider } from '@/contexts/SidebarContext';
import { ProgressProvider } from '@/contexts/ProgressContext';
import { Layout } from '@/components/layout/Layout';

import Home from '@/pages/Home';
import Pendahuluan from '@/pages/Pendahuluan';
import Materi from '@/pages/Materi';
import ModulePage from '@/pages/ModulePage';
import QuizPage from '@/pages/QuizPage';
import Evaluasi from '@/pages/Evaluasi';
import Jobsheet from '@/pages/Jobsheet';
import Pustaka from '@/pages/Pustaka';
import ProfilPeserta from '@/pages/ProfilPeserta';
import DownloadEmodul from '@/pages/DownloadEmodul';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/pendahuluan" component={Pendahuluan} />
      <Route path="/materi" component={Materi} />
      <Route path="/materi/modul/:id" component={ModulePage} />
      <Route path="/materi/modul/:id/kuis" component={QuizPage} />
      <Route path="/evaluasi" component={Evaluasi} />
      <Route path="/jobsheet" component={Jobsheet} />
      <Route path="/pustaka" component={Pustaka} />
      <Route path="/profil" component={ProfilPeserta} />
      <Route path="/download-emodul" component={DownloadEmodul} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="smaw-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ProgressProvider>
            <SidebarProvider>
              <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
                <Layout>
                  <Router />
                </Layout>
              </WouterRouter>
              <Toaster />
            </SidebarProvider>
          </ProgressProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
