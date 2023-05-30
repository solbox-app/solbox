import { Routes, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import client from './lib/apollo'
import Dashboard from './components/Dashboard/Dashboard'
import BlogPage from './components/Blog/BlogPage'
import LoginPage from './components/Login/LoginPage'
import UserContext from './context/userContext'
import Layout from './components/Layout/Layout'
import ArticlePage from './components/Article/ArticlePage'
import PolicyPage from './components/Policy/PolicyPage'

function App() {

  return (
    <ApolloProvider client={client}>
      <UserContext>
        <Layout>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/articulos/:slug" element={<ArticlePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/politicas-confidencialidad" element={<PolicyPage />} />
          </Routes>
        </Layout>
      </UserContext>
    </ApolloProvider>
  )
}

export default App;
