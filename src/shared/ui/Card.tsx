import type { ElementBaseProps } from "./type"

type CardProps = ElementBaseProps<HTMLDivElement>
type CardTitleProps = ElementBaseProps<HTMLHeadingElement>

export const Card = ({ className, ...props }: CardProps) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props} />
)
Card.displayName = "Card"

export const CardHeader = ({ className, ...props }: CardProps) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
)
CardHeader.displayName = "CardHeader"

export const CardTitle = ({ className, ...props }: CardTitleProps) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props} />
)
CardTitle.displayName = "CardTitle"

export const CardContent = ({ className, ...props }: CardProps) => (
  <div className={`p-6 pt-0 ${className}`} {...props} />
)
CardContent.displayName = "CardContent"
