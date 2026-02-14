import { Link } from 'react-router-dom'
import { Gift, type LucideIcon } from 'lucide-react'
import { cn, useTranslation } from '@personal-ari/plugin-sdk'

interface GiftSidebarItemProps {
  to?: string
  icon?: LucideIcon
  label?: string
  onClick?: () => void
  collapsed?: boolean
}

export function GiftSidebarItem({
  to = '/gift-lists',
  icon: Icon = Gift,
  label = 'Gifts',
  onClick,
  collapsed = false,
}: GiftSidebarItemProps) {
  const { t } = useTranslation()
  const displayLabel = label === 'Gifts' ? t('gift-plugin:sidebar', 'Gifts') : label

  // Styles replicated from SidebarNavItem to match main app
  const baseClasses = 'flex items-center rounded-lg transition-colors'

  // Default variant styles
  const variantClass = 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'

  const sizeClasses = collapsed ? 'justify-center px-2 py-2' : 'gap-2 px-4 py-2'

  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(baseClasses, variantClass, sizeClasses)}
      title={collapsed ? displayLabel : undefined}
    >
      <Icon className="h-5 w-5 shrink-0" />
      {!collapsed && <span>{displayLabel}</span>}
    </Link>
  )
}
