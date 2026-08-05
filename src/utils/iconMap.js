import {
  FileCode,
  FileCode2,
  Code2,
  Atom,
  Palette,
  Server,
  Database,
  Layers,
} from 'lucide-react'

// Maps icon name strings (used in portfolioData.js) to Lucide components
export const iconMap = {
  FileCode,
  FileCode2,
  Code2,
  Atom,
  Palette,
  Server,
  Database,
  Layers,
}

export function getIcon(name) {
  return iconMap[name] || Code2
}
