import { BrowserRouter as Router } from "react-router-dom"
import Header from "./widgets/ui/Header.tsx"
import Footer from "./widgets/ui/Footer.tsx"
import PostsManagerPage from "./pages/PostsManagerPage.tsx"
import { QueryProvider } from "./app/assets/Provider/QueryProvider.tsx"

const App = () => {
  return (
    <Router>
      <QueryProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <PostsManagerPage />
          </main>
          <Footer />
        </div>
      </QueryProvider>
    </Router>
  )
}

export default App
