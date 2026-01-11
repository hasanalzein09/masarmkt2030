import { whatsappProjects } from './projects-whatsapp'
import { instagramProjects } from './projects-instagram'
import { messengerProjects, webProjects } from './projects-messenger-web'
import { automationProjects, seoProjects } from './projects-automation-seo'

export const allProjects = [
  ...whatsappProjects,
  ...instagramProjects,
  ...messengerProjects,
  ...webProjects,
  ...automationProjects,
  ...seoProjects
]

export const getProjectsByService = (serviceId: string) => {
  return allProjects.filter(p => p.service === serviceId)
}

export const getProjectsByCity = (cityId: string) => {
  return allProjects.filter(p => p.city === cityId)
}

export const getProjectBySlug = (slug: string) => {
  return allProjects.find(p => p.slug === slug)
}

export const getFeaturedProjects = (count: number = 6) => {
  // Get diverse projects from different services
  const services = ['whatsapp-ai', 'instagram-ai', 'messenger-ai', 'web-development', 'ai-automation', 'seo']
  const featured: typeof allProjects = []
  
  services.forEach(service => {
    const serviceProjects = allProjects.filter(p => p.service === service)
    if (serviceProjects.length > 0) {
      featured.push(serviceProjects[0])
    }
  })
  
  return featured.slice(0, count)
}

export const getAllProjects = () => {
  return allProjects
}

export {
  whatsappProjects,
  instagramProjects,
  messengerProjects,
  webProjects,
  automationProjects,
  seoProjects
}
