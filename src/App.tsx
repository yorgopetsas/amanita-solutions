import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'

const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })))
const CareersPage = lazy(() => import('./pages/CareersPage').then((m) => ({ default: m.CareersPage })))
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage').then((m) => ({ default: m.CaseStudiesPage })))
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail').then((m) => ({ default: m.CaseStudyDetail })))
const ComparePage = lazy(() => import('./pages/ComparePage').then((m) => ({ default: m.ComparePage })))
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })))
const DemoPage = lazy(() => import('./pages/DemoPage').then((m) => ({ default: m.DemoPage })))
const FaqPage = lazy(() => import('./pages/FaqPage').then((m) => ({ default: m.FaqPage })))
const HomeById = lazy(() => import('./pages/home/HomeById').then((m) => ({ default: m.HomeById })))
const HomeGallery = lazy(() => import('./pages/home/HomeGallery').then((m) => ({ default: m.HomeGallery })))
const HomeAmanita = lazy(() => import('./pages/home/HomeAmanita').then((m) => ({ default: m.HomeAmanita })))
const HomeProposalAurora = lazy(() => import('./pages/home/HomeProposalAurora').then((m) => ({ default: m.HomeProposalAurora })))
const IntegrationsPage = lazy(() => import('./pages/IntegrationsPage').then((m) => ({ default: m.IntegrationsPage })))
const NewsletterPage = lazy(() => import('./pages/NewsletterPage').then((m) => ({ default: m.NewsletterPage })))
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })))
const OffersPage = lazy(() => import('./pages/OffersPage').then((m) => ({ default: m.OffersPage })))
const PlatformPage = lazy(() => import('./pages/PlatformPage').then((m) => ({ default: m.PlatformPage })))
const PlatformsIndex = lazy(() => import('./pages/PlatformsIndex').then((m) => ({ default: m.PlatformsIndex })))
const PricingPage = lazy(() => import('./pages/PricingPage').then((m) => ({ default: m.PricingPage })))
const ProductPage = lazy(() => import('./pages/ProductPage').then((m) => ({ default: m.ProductPage })))
const ProductsIndex = lazy(() => import('./pages/ProductsIndex').then((m) => ({ default: m.ProductsIndex })))
const ProofCaseSupportPage = lazy(() => import('./pages/ProofCaseSupportPage').then((m) => ({ default: m.ProofCaseSupportPage })))
const ProofKitPage = lazy(() => import('./pages/ProofKitPage').then((m) => ({ default: m.ProofKitPage })))
const ResourcesIndex = lazy(() => import('./pages/ResourcesIndex').then((m) => ({ default: m.ResourcesIndex })))
const ContentCadencePage = lazy(() => import('./pages/ContentCadencePage').then((m) => ({ default: m.ContentCadencePage })))
const OutboundPlaybookPage = lazy(() => import('./pages/OutboundPlaybookPage').then((m) => ({ default: m.OutboundPlaybookPage })))
const EvalPlaybookPage = lazy(() => import('./pages/resources/EvalPlaybookPage').then((m) => ({ default: m.EvalPlaybookPage })))
const GlossaryPage = lazy(() => import('./pages/resources/GlossaryPage').then((m) => ({ default: m.GlossaryPage })))
const RagChecklistPage = lazy(() => import('./pages/resources/RagChecklistPage').then((m) => ({ default: m.RagChecklistPage })))
const SecurityPage = lazy(() => import('./pages/SecurityPage').then((m) => ({ default: m.SecurityPage })))
const StatusPage = lazy(() => import('./pages/StatusPage').then((m) => ({ default: m.StatusPage })))
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage').then((m) => ({ default: m.TestimonialsPage })))
const TrustProofPage = lazy(() => import('./pages/TrustProofPage').then((m) => ({ default: m.TrustProofPage })))
const AuditTemplatePage = lazy(() => import('./pages/tools/AuditTemplatePage').then((m) => ({ default: m.AuditTemplatePage })))
const RoiCalculatorPage = lazy(() => import('./pages/tools/RoiCalculatorPage').then((m) => ({ default: m.RoiCalculatorPage })))
const AgenciesPage = lazy(() => import('./pages/solutions/AgenciesPage').then((m) => ({ default: m.AgenciesPage })))
const EnterprisePage = lazy(() => import('./pages/solutions/EnterprisePage').then((m) => ({ default: m.EnterprisePage })))
const FreelancersPage = lazy(() => import('./pages/solutions/FreelancersPage').then((m) => ({ default: m.FreelancersPage })))
const AnimationsPage = lazy(() => import('./pages/studio/AnimationsPage').then((m) => ({ default: m.AnimationsPage })))
const CollaboratePage = lazy(() => import('./pages/studio/CollaboratePage').then((m) => ({ default: m.CollaboratePage })))
const ComponentsPage = lazy(() => import('./pages/studio/ComponentsPage').then((m) => ({ default: m.ComponentsPage })))
const DesignLabPage = lazy(() => import('./pages/studio/DesignLabPage').then((m) => ({ default: m.DesignLabPage })))
const MotionStudioPage = lazy(() => import('./pages/studio/MotionStudioPage').then((m) => ({ default: m.MotionStudioPage })))
const SystemsPage = lazy(() => import('./pages/studio/SystemsPage').then((m) => ({ default: m.SystemsPage })))
const ShowreelPage = lazy(() => import('./pages/ShowreelPage').then((m) => ({ default: m.ShowreelPage })))
const EventsIndexPage = lazy(() => import('./pages/events/EventsIndexPage').then((m) => ({ default: m.EventsIndexPage })))
const EventDetailPage = lazy(() => import('./pages/events/EventDetailPage').then((m) => ({ default: m.EventDetailPage })))

function RouteLoadingFallback() {
  return <div className="py-24 text-center text-sm text-slate-500">Loading...</div>
}

export default function App() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <Routes>
        <Route path="home/proposal-aurora" element={<HomeProposalAurora />} />
        <Route element={<Layout />}>
          <Route index element={<HomeAmanita />} />
          <Route path="home/12" element={<HomeGallery />} />
          <Route path="home/:id" element={<HomeById />} />
          <Route path="products" element={<ProductsIndex />} />
          <Route path="products/:slug" element={<ProductPage />} />
          <Route path="platforms" element={<PlatformsIndex />} />
          <Route path="platforms/:slug" element={<PlatformPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="offers" element={<OffersPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="case-studies" element={<CaseStudiesPage />} />
          <Route path="case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="trust" element={<TrustProofPage />} />
          <Route path="demo" element={<DemoPage />} />
          <Route path="security" element={<SecurityPage />} />
          <Route path="resources" element={<ResourcesIndex />} />
          <Route path="resources/rag-checklist" element={<RagChecklistPage />} />
          <Route path="resources/eval-playbook" element={<EvalPlaybookPage />} />
          <Route path="resources/glossary" element={<GlossaryPage />} />
          <Route path="proof-kit" element={<ProofKitPage />} />
          <Route path="proof/case-support-triage" element={<ProofCaseSupportPage />} />
          <Route path="prelaunch/content-cadence" element={<ContentCadencePage />} />
          <Route path="prelaunch/outbound-playbook" element={<OutboundPlaybookPage />} />
          <Route path="compare" element={<ComparePage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="newsletter" element={<NewsletterPage />} />
          <Route path="tools/roi-calculator" element={<RoiCalculatorPage />} />
          <Route path="tools/agent-audit" element={<AuditTemplatePage />} />
          <Route path="status" element={<StatusPage />} />
          <Route path="integrations" element={<IntegrationsPage />} />
          <Route path="solutions/freelancers" element={<FreelancersPage />} />
          <Route path="solutions/agencies" element={<AgenciesPage />} />
          <Route path="solutions/enterprise" element={<EnterprisePage />} />
          <Route path="studio/design-lab" element={<DesignLabPage />} />
          <Route path="studio/motion" element={<MotionStudioPage />} />
          <Route path="studio/systems" element={<SystemsPage />} />
          <Route path="studio/animations" element={<AnimationsPage />} />
          <Route path="studio/components" element={<ComponentsPage />} />
          <Route path="studio/collaborate" element={<CollaboratePage />} />
          <Route path="showreel" element={<ShowreelPage />} />
          <Route path="events" element={<EventsIndexPage />} />
          <Route path="events/:slug" element={<EventDetailPage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
