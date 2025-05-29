import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--success-bg": "var(--success)",
          "--success-text": "var(--success-foreground)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          success: "success-toast",
          error: "error-toast",
          warning: "warning-toast",
          info: "info-toast",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }