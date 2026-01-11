

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  Search,
  Filter,
  ArrowLeft,
  TrendingUp,
  Eye,
  MapPin,
  Briefcase,
  X
} from 'lucide-react'

import { services } from '@/config/site'
import { cities } from '@/data/cities'

interface Result {
  stat: string
  labelAr: string
}

interface Project {
  id: string
  slug: string
  service: string
  city: string
  titleAr: string
  clientAr: string
  industry: string
  industryAr: string
  descriptionAr: string
  results: Result[]
}

interface Props {
  projects: Project[]
}

export default function PortfolioPageClient({ projects }: Props) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedService, setSelectedService] = useState<string>('all')
  const [selectedCity, setSelectedCity] = useState<string>('all')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.titleAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.clientAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.industryAr.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesService = selectedService === 'all' || project.service === selectedService
      const matchesCity = selectedCity === 'all' || project.city === selectedCity

      return matchesSearch && matchesService && matchesCity
    })
  }, [projects, searchQuery, selectedService, selectedCity])

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedService('all')
    setSelectedCity('all')
  }

  const activeFiltersCount = [
    searchQuery,
    selectedService !== 'all' ? selectedService : '',
    selectedCity !== 'all' ? selectedCity : '',
  ].filter(Boolean).length

  const getServiceName = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId)
    return service?.nameAr || serviceId
  }

  const getCityName = (cityId: string) => {
    const city = cities.find(c => c.id === cityId)
    return city?.nameAr || cityId
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-white">معرض </span>
              <span className="text-gradient">أعمالنا</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              أكثر من <span className="text-violet-400 font-bold">120 مشروع ناجح</span> في السعودية.
              شاهد كيف ساعدنا الشركات على النمو والتطور.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8">
              {[
                { number: '120+', label: 'مشروع' },
                { number: '6', label: 'خدمات' },
                { number: '7', label: 'مدن' },
                { number: '98%', label: 'عملاء راضون' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-black text-gradient">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-900/50 border-y border-gray-800 sticky top-20 z-40 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 w-full lg:max-w-md">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="ابحث عن مشروع..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pr-12 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
              />
            </div>

            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Service Filter */}
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white focus:border-violet-500 transition-all cursor-pointer"
              >
                <option value="all">جميع الخدمات</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.nameAr}
                  </option>
                ))}
              </select>

              {/* City Filter */}
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white focus:border-violet-500 transition-all cursor-pointer"
              >
                <option value="all">جميع المدن</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.nameAr}
                  </option>
                ))}
              </select>

              {/* Clear Filters */}
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                >
                  <X className="w-4 h-4" />
                  <span>مسح ({activeFiltersCount})</span>
                </button>
              )}
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white"
            >
              <Filter className="w-5 h-5" />
              <span>فلترة</span>
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-violet-500 text-xs flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 space-y-4"
            >
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white"
              >
                <option value="all">جميع الخدمات</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.nameAr}
                  </option>
                ))}
              </select>

              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white"
              >
                <option value="all">جميع المدن</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.nameAr}
                  </option>
                ))}
              </select>

              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 text-red-400"
                >
                  <X className="w-4 h-4" />
                  <span>مسح الفلاتر</span>
                </button>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-400">
              عرض <span className="text-white font-medium">{filteredProjects.length}</span> مشروع
              {activeFiltersCount > 0 && (
                <span className="text-violet-400"> (مع الفلاتر)</span>
              )}
            </p>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a href={`/portfolio/${project.slug}`} className="block group h-full">
                    <div className="relative h-full p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-violet-500/50 transition-all duration-300">
                      {/* Service Badge */}
                      <div className="inline-block px-3 py-1 rounded-full bg-violet-500/20 text-violet-400 text-xs font-medium mb-4">
                        {getServiceName(project.service)}
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                        {project.titleAr}
                      </h3>

                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {project.descriptionAr}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{getCityName(project.city)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{project.industryAr}</span>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.results.slice(0, 2).map((result, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs"
                          >
                            <TrendingUp className="w-3 h-3 inline ml-1" />
                            {result.stat} {result.labelAr}
                          </span>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                        <span className="text-gray-500 text-sm">{project.clientAr}</span>
                        <div className="flex items-center gap-1 text-violet-400 group-hover:text-violet-300">
                          <Eye className="w-4 h-4" />
                          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-2">لم يتم العثور على مشاريع</h3>
              <p className="text-gray-400 mb-6">جرب تغيير معايير البحث أو الفلاتر</p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 rounded-xl bg-violet-500/20 text-violet-400 hover:bg-violet-500/30 transition-colors"
              >
                مسح الفلاتر
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
