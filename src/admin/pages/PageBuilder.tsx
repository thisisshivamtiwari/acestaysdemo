import React, { useState, useCallback } from 'react'
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiEye,
  FiEyeOff,
  FiChevronUp,
  FiChevronDown,
  FiSave,
  FiX,
  FiLayout,
  FiGrid,
  FiImage,
  FiHome,
  FiStar,
  FiZap,
  FiMousePointer,
  FiAward,
  FiCopy,
  FiMove
} from 'react-icons/fi'

interface PageComponent {
  id: string
  type: ComponentType
  order: number
  isVisible: boolean
  config: Record<string, any>
}

type ComponentType =
  | 'HeroSection'
  | 'ShuffleHero'
  | 'MouseImageTrailHero'
  | 'HotelShowcase'
  | 'FeaturesShowcase'
  | 'BentoGridShowcase'
  | 'Footer'

interface Page {
  id: string
  name: string
  slug: string
  components: PageComponent[]
}

const AVAILABLE_COMPONENTS = [
  {
    type: 'HeroSection',
    label: 'Hero Section',
    description: 'Main hero with background image, headline, and search bar',
    icon: <FiHome className="w-5 h-5" />,
    color: 'bg-blue-500'
  },
  {
    type: 'ShuffleHero',
    label: 'Shuffle Hero',
    description: 'Animated hero section with shuffling content',
    icon: <FiZap className="w-5 h-5" />,
    color: 'bg-purple-500'
  },
  {
    type: 'MouseImageTrailHero',
    label: 'Mouse Trail Hero',
    description: 'Interactive hero with mouse trail image effects',
    icon: <FiMousePointer className="w-5 h-5" />,
    color: 'bg-pink-500'
  },
  {
    type: 'HotelShowcase',
    label: 'Hotel Showcase',
    description: 'Featured hotels grid/carousel with booking access',
    icon: <FiGrid className="w-5 h-5" />,
    color: 'bg-green-500'
  },
  {
    type: 'FeaturesShowcase',
    label: 'Features Showcase',
    description: 'Key features and services display',
    icon: <FiAward className="w-5 h-5" />,
    color: 'bg-orange-500'
  },
  {
    type: 'BentoGridShowcase',
    label: 'Bento Grid',
    description: 'Modern bento grid layout showcasing content',
    icon: <FiLayout className="w-5 h-5" />,
    color: 'bg-indigo-500'
  },
  {
    type: 'Footer',
    label: 'Footer',
    description: 'Site footer with links and contact information',
    icon: <FiStar className="w-5 h-5" />,
    color: 'bg-gray-500'
  }
]

const PageBuilder: React.FC = () => {
  const [pages, setPages] = useState<Page[]>([
    {
      id: '1',
      name: 'Home Page',
      slug: 'home',
      components: [
        { id: 'c1', type: 'HeroSection', order: 0, isVisible: true, config: {} },
        { id: 'c2', type: 'HotelShowcase', order: 1, isVisible: true, config: {} },
        { id: 'c3', type: 'FeaturesShowcase', order: 2, isVisible: true, config: {} },
        { id: 'c4', type: 'BentoGridShowcase', order: 3, isVisible: true, config: {} },
        { id: 'c5', type: 'Footer', order: 4, isVisible: true, config: {} }
      ]
    }
  ])

  const [selectedPage, setSelectedPage] = useState<string | null>(pages[0]?.id || null)
  const [showPreview, setShowPreview] = useState(false)
  const [editingComponent, setEditingComponent] = useState<string | null>(null)
  const [showAddPage, setShowAddPage] = useState(false)

  const currentPage = pages.find(p => p.id === selectedPage)

  const handleAddComponent = (componentType: ComponentType) => {
    if (!currentPage) return

    const maxOrder = currentPage.components.length > 0
      ? Math.max(...currentPage.components.map(c => c.order))
      : -1

    const newComponent: PageComponent = {
      id: `c${Date.now()}`,
      type: componentType,
      order: maxOrder + 1,
      isVisible: true,
      config: {}
    }

    setPages(pages.map(page =>
      page.id === selectedPage
        ? { ...page, components: [...page.components, newComponent] }
        : page
    ))
  }

  const handleMoveComponent = (componentId: string, direction: 'up' | 'down') => {
    if (!currentPage) return

    const components = [...currentPage.components]
    const index = components.findIndex(c => c.id === componentId)
    if (index === -1) return

    const targetIndex = direction === 'up' ? index - 1 : index + 1
    if (targetIndex < 0 || targetIndex >= components.length) return

    // Swap components
    const temp = components[index]
    components[index] = components[targetIndex]
    components[targetIndex] = temp

    // Update order values
    components.forEach((comp, idx) => {
      comp.order = idx
    })

    setPages(pages.map(page =>
      page.id === selectedPage
        ? { ...page, components }
        : page
    ))
  }

  const handleDeleteComponent = (componentId: string) => {
    if (!currentPage) return
    if (!window.confirm('Are you sure you want to remove this component?')) return

    setPages(pages.map(page =>
      page.id === selectedPage
        ? { ...page, components: page.components.filter(c => c.id !== componentId) }
        : page
    ))
  }

  const handleToggleVisibility = (componentId: string) => {
    if (!currentPage) return

    setPages(pages.map(page =>
      page.id === selectedPage
        ? {
            ...page,
            components: page.components.map(c =>
              c.id === componentId ? { ...c, isVisible: !c.isVisible } : c
            )
          }
        : page
    ))
  }

  const handleDuplicateComponent = (componentId: string) => {
    if (!currentPage) return

    const component = currentPage.components.find(c => c.id === componentId)
    if (!component) return

    const maxOrder = Math.max(...currentPage.components.map(c => c.order))
    const duplicated: PageComponent = {
      ...component,
      id: `c${Date.now()}`,
      order: maxOrder + 1
    }

    setPages(pages.map(page =>
      page.id === selectedPage
        ? { ...page, components: [...page.components, duplicated] }
        : page
    ))
  }

  const handleSaveComponentConfig = (componentId: string, config: Record<string, any>) => {
    if (!currentPage) return

    setPages(pages.map(page =>
      page.id === selectedPage
        ? {
            ...page,
            components: page.components.map(c =>
              c.id === componentId ? { ...c, config } : c
            )
          }
        : page
    ))
    setEditingComponent(null)
  }

  const handleAddPage = () => {
    const newPage: Page = {
      id: `p${Date.now()}`,
      name: 'New Page',
      slug: 'new-page',
      components: []
    }
    setPages([...pages, newPage])
    setSelectedPage(newPage.id)
    setShowAddPage(false)
  }

  const getComponentInfo = (type: ComponentType) => {
    return AVAILABLE_COMPONENTS.find(c => c.type === type)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Page Builder</h1>
          <p className="mt-2 text-gray-600">Create and customize pages by adding components</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
              showPreview
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {showPreview ? (
              <>
                <FiEyeOff className="w-4 h-4" />
                Hide Preview
              </>
            ) : (
              <>
                <FiEye className="w-4 h-4" />
                Show Preview
              </>
            )}
          </button>
          <button
            onClick={() => setShowAddPage(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <FiPlus className="w-4 h-4" />
            New Page
          </button>
        </div>
      </div>

      {/* Add Page Modal */}
      {showAddPage && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Create New Page</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Page Name</label>
                <input
                  type="text"
                  placeholder="e.g., About Page"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleAddPage()
                    }
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Page Slug</label>
                <input
                  type="text"
                  placeholder="e.g., about"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleAddPage}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Create Page
                </button>
                <button
                  onClick={() => setShowAddPage(false)}
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Sidebar - Pages & Components */}
        <div className="lg:col-span-1 space-y-6">
          {/* Pages List */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h2 className="font-semibold text-gray-900">Pages</h2>
            </div>
            <div className="p-4 space-y-2">
              {pages.map(page => (
                <button
                  key={page.id}
                  onClick={() => setSelectedPage(page.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                    selectedPage === page.id
                      ? 'bg-blue-50 text-blue-700 border-2 border-blue-200'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-2 border-transparent'
                  }`}
                >
                  <div className="font-medium">{page.name}</div>
                  <div className="text-xs text-gray-500 mt-1">/{page.slug}</div>
                  <div className="text-xs text-gray-400 mt-1">
                    {page.components.length} components
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Available Components */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h2 className="font-semibold text-gray-900">Available Components</h2>
              <p className="text-xs text-gray-500 mt-1">Click to add to page</p>
            </div>
            <div className="p-4 space-y-2 max-h-96 overflow-y-auto">
              {AVAILABLE_COMPONENTS.map(component => (
                <button
                  key={component.type}
                  onClick={() => handleAddComponent(component.type as ComponentType)}
                  className="w-full text-left p-3 rounded-lg border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${component.color} text-white group-hover:scale-110 transition-transform duration-200`}>
                      {component.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{component.label}</div>
                      <div className="text-xs text-gray-500 mt-1">{component.description}</div>
                    </div>
                    <FiPlus className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Center - Component List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h2 className="font-semibold text-gray-900">
                {currentPage?.name || 'Select a Page'}
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                {currentPage?.components.length || 0} components on this page
              </p>
            </div>
            {currentPage ? (
              <div className="p-4 space-y-3">
                {currentPage.components
                  .sort((a, b) => a.order - b.order)
                  .map((component, index) => {
                    const componentInfo = getComponentInfo(component.type)
                    return (
                      <div
                        key={component.id}
                        className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                          component.isVisible
                            ? 'border-gray-200 bg-gray-50'
                            : 'border-gray-100 bg-gray-50 opacity-50'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex flex-col gap-1">
                            <button
                              onClick={() => handleMoveComponent(component.id, 'up')}
                              disabled={index === 0}
                              className={`p-1 rounded ${
                                index === 0
                                  ? 'opacity-30 cursor-not-allowed'
                                  : 'hover:bg-gray-200'
                              }`}
                              title="Move up"
                            >
                              <FiChevronUp className="w-4 h-4 text-gray-600" />
                            </button>
                            <button
                              onClick={() => handleMoveComponent(component.id, 'down')}
                              disabled={index === currentPage.components.length - 1}
                              className={`p-1 rounded ${
                                index === currentPage.components.length - 1
                                  ? 'opacity-30 cursor-not-allowed'
                                  : 'hover:bg-gray-200'
                              }`}
                              title="Move down"
                            >
                              <FiChevronDown className="w-4 h-4 text-gray-600" />
                            </button>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              {componentInfo && (
                                <div className={`p-1.5 rounded ${componentInfo.color} text-white`}>
                                  {componentInfo.icon}
                                </div>
                              )}
                              <span className="font-medium text-gray-900">
                                {componentInfo?.label || component.type}
                              </span>
                              {!component.isVisible && (
                                <span className="text-xs text-gray-400">(Hidden)</span>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => handleToggleVisibility(component.id)}
                                className={`p-1.5 rounded ${
                                  component.isVisible
                                    ? 'text-blue-600 hover:bg-blue-50'
                                    : 'text-gray-400 hover:bg-gray-100'
                                }`}
                                title={component.isVisible ? 'Hide' : 'Show'}
                              >
                                {component.isVisible ? (
                                  <FiEye className="w-4 h-4" />
                                ) : (
                                  <FiEyeOff className="w-4 h-4" />
                                )}
                              </button>
                              <button
                                onClick={() => handleDuplicateComponent(component.id)}
                                className="p-1.5 rounded text-green-600 hover:bg-green-50"
                                title="Duplicate"
                              >
                                <FiCopy className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => setEditingComponent(component.id)}
                                className="p-1.5 rounded text-blue-600 hover:bg-blue-50"
                                title="Edit"
                              >
                                <FiEdit2 className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteComponent(component.id)}
                                className="p-1.5 rounded text-red-600 hover:bg-red-50"
                                title="Delete"
                              >
                                <FiTrash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                {currentPage.components.length === 0 && (
                  <div className="text-center py-12 text-gray-400">
                    <FiLayout className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>No components added yet</p>
                    <p className="text-sm mt-1">Add components from the left panel</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-12 text-center text-gray-400">
                <p>Select a page to start building</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Preview */}
        {showPreview && currentPage && (
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 sticky top-6">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-semibold text-gray-900">Live Preview</h2>
                <p className="text-xs text-gray-500 mt-1">How your page will look</p>
              </div>
              <div className="p-4 max-h-[600px] overflow-y-auto">
                <div className="space-y-4">
                  {currentPage.components
                    .filter(c => c.isVisible)
                    .sort((a, b) => a.order - b.order)
                    .map(component => {
                      const componentInfo = getComponentInfo(component.type)
                      return (
                        <div
                          key={component.id}
                          className="border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50"
                        >
                          <div className="flex items-center gap-2 mb-3">
                            {componentInfo && (
                              <div className={`p-1.5 rounded ${componentInfo.color} text-white`}>
                                {componentInfo.icon}
                              </div>
                            )}
                            <span className="font-medium text-gray-700 text-sm">
                              {componentInfo?.label || component.type}
                            </span>
                          </div>
                          <div className="h-32 bg-white rounded border border-gray-200 flex items-center justify-center">
                            <span className="text-gray-400 text-sm">
                              {componentInfo?.description || 'Component Preview'}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  {currentPage.components.filter(c => c.isVisible).length === 0 && (
                    <div className="text-center py-12 text-gray-400">
                      <p>No visible components</p>
                      <p className="text-sm mt-1">Add and enable components to see preview</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Component Config Modal */}
      {editingComponent && currentPage && (
        <ComponentConfigModal
          component={currentPage.components.find(c => c.id === editingComponent)!}
          onSave={(config) => handleSaveComponentConfig(editingComponent, config)}
          onClose={() => setEditingComponent(null)}
        />
      )}
    </div>
  )
}

// Component Config Modal
interface ComponentConfigModalProps {
  component: PageComponent
  onSave: (config: Record<string, any>) => void
  onClose: () => void
}

const ComponentConfigModal: React.FC<ComponentConfigModalProps> = ({
  component,
  onSave,
  onClose
}) => {
  const [config, setConfig] = useState(component.config)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(config)
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Configure Component</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <FiX className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Component Type
            </label>
            <input
              type="text"
              value={component.type}
              disabled
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Configuration (JSON)
            </label>
            <textarea
              value={JSON.stringify(config, null, 2)}
              onChange={(e) => {
                try {
                  setConfig(JSON.parse(e.target.value))
                } catch (err) {
                  // Invalid JSON, ignore
                }
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
              rows={8}
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <FiSave className="w-4 h-4 inline mr-2" />
              Save Configuration
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PageBuilder

