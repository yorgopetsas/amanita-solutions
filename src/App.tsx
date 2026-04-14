import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { CareersPage } from './pages/CareersPage'
import { CaseStudiesPage } from './pages/CaseStudiesPage'
import { CaseStudyDetail } from './pages/CaseStudyDetail'
import { ComparePage } from './pages/ComparePage'
import { ContactPage } from './pages/ContactPage'
import { DemoPage } from './pages/DemoPage'
import { FaqPage } from './pages/FaqPage'
import { HomeById } from './pages/home/HomeById'
import { HomeGallery } from './pages/home/HomeGallery'
import { HomeAmanita } from './pages/home/HomeAmanita'
import { HomeProposalAurora } from './pages/home/HomeProposalAurora'
import { IntegrationsPage } from './pages/IntegrationsPage'
import { NewsletterPage } from './pages/NewsletterPage'
import { NotFound } from './pages/NotFound'
import { OffersPage } from './pages/OffersPage'
import { PlatformPage } from './pages/PlatformPage'
import { PlatformsIndex } from './pages/PlatformsIndex'
import { PricingPage } from './pages/PricingPage'
import { ProductPage } from './pages/ProductPage'
import { ProductsIndex } from './pages/ProductsIndex'
import { ProofCaseSupportPage } from './pages/ProofCaseSupportPage'
import { ProofKitPage } from './pages/ProofKitPage'
import { ResourcesIndex } from './pages/ResourcesIndex'
import { ContentCadencePage } from './pages/ContentCadencePage'
import { OutboundPlaybookPage } from './pages/OutboundPlaybookPage'
import { EvalPlaybookPage } from './pages/resources/EvalPlaybookPage'
import { GlossaryPage } from './pages/resources/GlossaryPage'
import { RagChecklistPage } from './pages/resources/RagChecklistPage'
import { SecurityPage } from './pages/SecurityPage'
import { StatusPage } from './pages/StatusPage'
import { TestimonialsPage } from './pages/TestimonialsPage'
import { TrustProofPage } from './pages/TrustProofPage'
import { AuditTemplatePage } from './pages/tools/AuditTemplatePage'
import { RoiCalculatorPage } from './pages/tools/RoiCalculatorPage'
import { AgenciesPage } from './pages/solutions/AgenciesPage'
import { EnterprisePage } from './pages/solutions/EnterprisePage'
import { FreelancersPage } from './pages/solutions/FreelancersPage'
import { AnimationsPage } from './pages/studio/AnimationsPage'
import { CollaboratePage } from './pages/studio/CollaboratePage'
import { ComponentsPage } from './pages/studio/ComponentsPage'
import { DesignLabPage } from './pages/studio/DesignLabPage'
import { MotionStudioPage } from './pages/studio/MotionStudioPage'
import { SystemsPage } from './pages/studio/SystemsPage'
import { ShowreelPage } from './pages/ShowreelPage'

export default function App() {
  return (
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
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
