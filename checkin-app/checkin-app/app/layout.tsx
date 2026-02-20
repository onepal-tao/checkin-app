import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '公司打卡',
  description: '员工打卡系统',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-ios-gray-6 text-ios-label min-h-screen">
        {children}
      </body>
    </html>
  )
}
EOF‘

cat > app/layout.tsx << 'EOF'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '公司打卡',
  description: '员工打卡系统',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-ios-gray-6 text-ios-label min-h-screen">
        {children}
      </body>
    </html>
  )
}
